// Resolve the production application by its public domain without logging private metadata.
const { DOKPLOY_URL, DOKPLOY_API_KEY, DOKPLOY_APPLICATION_ID, NEXT_PUBLIC_SITE_URL } = process.env;
if (!DOKPLOY_URL || !DOKPLOY_API_KEY || !NEXT_PUBLIC_SITE_URL) throw new Error('Missing deployment configuration');
const host = new URL(NEXT_PUBLIC_SITE_URL).hostname;
async function api(path, body) {
  const response = await fetch(`${DOKPLOY_URL.replace(/\/$/, '')}/api/${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { 'x-api-key': DOKPLOY_API_KEY, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`Dokploy ${path.split('?')[0]} HTTP ${response.status}`);
  return response.json();
}
async function matches(id) {
  const domains = await api(`domain.byApplicationId?applicationId=${encodeURIComponent(id)}`);
  return Array.isArray(domains) && domains.some(domain => domain.host === host);
}
let target;
if (DOKPLOY_APPLICATION_ID) {
  try { if (await matches(DOKPLOY_APPLICATION_ID)) target = DOKPLOY_APPLICATION_ID; }
  catch (error) { if (!error.message.endsWith('HTTP 404')) throw error; }
}
if (!target) {
  const projects = await api('project.all');
  const candidates = new Set();
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    if (value.applicationId && /portfolio/i.test(`${value.name || ''} ${value.appName || ''}`)) candidates.add(value.applicationId);
    for (const child of Object.values(value)) if (typeof child === 'object') visit(child);
  }
  visit(projects);
  const found = [];
  for (const id of candidates) if (await matches(id)) found.push(id);
  if (found.length !== 1) throw new Error('Could not uniquely match the portfolio domain to an application; no deployment performed');
  [target] = found;
}
const application = await api(`application.one?applicationId=${encodeURIComponent(target)}`);
if (!String(application.dockerImage || '').includes('/portfolio-frontend:')) {
  throw new Error('Matched application does not use the expected portfolio frontend image; no deployment performed');
}
await api('application.deploy', { applicationId: target });
console.log('Verified portfolio application deployment requested.');
