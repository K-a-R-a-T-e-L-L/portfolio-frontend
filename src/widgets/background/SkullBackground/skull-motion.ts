/** Scroll choreography is deterministic and reversible; no time-based animation. */
export function skullPose(progress: number, compact = false) {
  const p = Math.min(1, Math.max(0, progress));
  const ease = (t: number) => {
    const v = Math.min(1, Math.max(0, t));
    return v * v * (3 - 2 * v);
  };
  const stops = [
    { p: 0, x: 0.88, y: 0.38, yaw: -0.65, scale: 0.85, opacity: 0.25 },
    { p: 0.26, x: 0.13, y: 0.51, yaw: 0.95, scale: 1.1, opacity: 0.24 },
    { p: 0.5, x: 0.18, y: 0.5, yaw: 1.15, scale: 1.1, opacity: 0.3 },
    { p: 0.65, x: 0.18, y: 0.5, yaw: 1.15, scale: 1.1, opacity: 0.3 },
    { p: 0.77, x: 0.91, y: 0.47, yaw: -0.65, scale: 1.1, opacity: 0.23 },
    { p: 1, x: 0.5, y: 0.53, yaw: 0.75, scale: 0.62, opacity: 0.6 },
  ];
  const end = stops.findIndex((stop, i) => i > 0 && p <= stop.p);
  const b = stops[end === -1 ? stops.length - 1 : end],
    a = stops[Math.max(0, (end === -1 ? stops.length - 1 : end) - 1)];
  const t = ease((p - a.p) / (b.p - a.p));
  const lerp = (start: number, finish: number) => start + (finish - start) * t;
  // Distinct, reversible beats: bite, reopen, close, then a small final opening.
  const jaw =
    p < 0.18
      ? 0.95 * (1 - ease(p / 0.18))
      : p < 0.5
        ? 0.56 * ease((p - 0.26) / 0.24)
        : p < 0.86
          ? 0.56 * (1 - ease((p - 0.65) / 0.21))
          : 0.22 * ease((p - 0.91) / 0.09);
  return {
    x: compact ? 0.9 - 0.4 * ease((p - 0.77) / 0.23) : lerp(a.x, b.x),
    y: compact ? 0.54 : lerp(a.y, b.y),
    yaw: lerp(a.yaw, b.yaw),
    pitch: 0,
    tilt: Math.sin(p * Math.PI * 2) * 0.09,
    scale: compact
      ? 0.6 + 0.16 * ease(p / 0.16) - 0.24 * ease((p - 0.77) / 0.23)
      : lerp(a.scale, b.scale),
    opacity: lerp(a.opacity, b.opacity) * (compact ? 0.65 : 1),
    jaw,
    eyes: ease((p - 0.88) / 0.12),
  };
}
