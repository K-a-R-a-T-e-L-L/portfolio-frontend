const fallback = "https://portfolio.karatell.ru";
function getSiteUrl() {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || fallback);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
    )
      return fallback;
    return url.origin;
  } catch {
    return fallback;
  }
}
export const siteUrl = getSiteUrl();
