/** One frame for all scroll widgets: measure first, then mutate. No idle loop. */
type Measurement = () => (() => void) | undefined;
const pending = new Set<Measurement>();
let frame = 0;

export function scheduleVisualFrame(measure: Measurement) {
  pending.add(measure);
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    const tasks = Array.from(pending);
    pending.clear();
    const writes = tasks.map((task) => task());
    writes.forEach((write) => write?.());
  });
}

export function cancelVisualFrame(measure: Measurement) {
  pending.delete(measure);
  if (!pending.size && frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
}
