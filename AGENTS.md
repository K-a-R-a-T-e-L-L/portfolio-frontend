# Portfolio frontend

- Logical project: this frontend and `../portfolio-backend`.
- Canonical report: `../portfolio-backend/отчёт.txt`. No duplicate report or project state.
- Next.js App Router, TypeScript, RU/EN. Current public UI uses native HTML/CSS and CSS 3D; preserve server-rendered text and reduced-motion fallback.
- Preserve the owner's original navy/turquoise/blue palette. See DESIGN.md; keep the syntax-highlighted profile and hover/focus interactions.
- Public cases: Ona Hochet, Business Courses, VidSave. Personal products are mentioned abstractly; never publish their names, links or screenshots.
- Verify: `npm run lint`, `npm run build`; browser at 320/390/768/1440, RU/EN, reduced motion, no JS, feedback with intercepted API (no live submissions).
- Generated `.next`, `next-env.d.ts`, node_modules are not edited manually. API unchanged: do not run Kubb.
- Preserve user processes; record and stop only task-owned PIDs/ports.
- Local preview uses port 3000. The owner explicitly authorizes stopping/restarting verified portfolio preview processes between revisions; close obsolete portfolio previews rather than adding ports. Never stop unrelated services or globally kill Node.js.
