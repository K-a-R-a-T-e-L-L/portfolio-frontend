"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  scheduleVisualFrame,
  cancelVisualFrame,
} from "@/shared/lib/visual-frame";
import styles from "./SkullBackground.module.css";

export default function SkullBackground() {
  const root = useRef<HTMLDivElement>(null),
    canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = root.current,
      surface = canvas.current;
    if (!element || !surface) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    element.dataset.state = motion.matches ? "static" : "loading";
    const abort = new AbortController();
    let engine:
      | Awaited<
          ReturnType<typeof import("./skull-renderer").createSkullRenderer>
        >
      | undefined;
    let timer = 0,
      loading = false,
      disposed = false,
      lost = false;
    const draw = () => {
      if (disposed || lost || document.hidden || motion.matches || !engine)
        return;
      const range = document.documentElement.scrollHeight - innerHeight;
      // Anchor the open-jaw pose to capabilities, rather than a fragile page percentage.
      const section = document.getElementById("stack-section");
      const start = section
        ? Math.max(
            1,
            section.getBoundingClientRect().top + scrollY - innerHeight * 0.2,
          )
        : range * 0.5;
      const end = section
        ? Math.min(range - 1, start + section.offsetHeight * 0.7)
        : range * 0.65;
      const progress =
        scrollY <= start
          ? (scrollY / start) * 0.5
          : scrollY <= end
            ? 0.5 + ((scrollY - start) / Math.max(1, end - start)) * 0.15
            : 0.65 + ((scrollY - end) / Math.max(1, range - end)) * 0.35;
      const cubeRect = document
        .querySelector("[data-model]")
        ?.parentElement?.getBoundingClientRect();
      return () => {
        if (disposed || lost || motion.matches || !engine) return;
        engine.render(
          range > 0 ? Math.min(1, Math.max(0, progress)) : 0,
          cubeRect,
        );
        // Reveal only after the first frame has been drawn at the current scroll position.
        if (element.dataset.state !== "ready") element.dataset.state = "ready";
      };
    };
    const schedule = () => {
      if (!disposed && !motion.matches && !document.hidden)
        scheduleVisualFrame(draw);
    };
    const load = async () => {
      if (loading || engine || disposed || motion.matches || document.hidden)
        return;
      loading = true;
      element.dataset.state = "loading";
      try {
        const { createSkullRenderer } = await import("./skull-renderer");
        if (disposed || motion.matches || document.hidden) return;
        const result = await createSkullRenderer(surface, abort.signal);
        if (disposed) {
          result.dispose();
          return;
        }
        // Font metrics determine the cube anchor; do not reveal a provisional pose.
        await document.fonts.ready;
        if (disposed) {
          result.dispose();
          return;
        }
        engine = result;
        element.dataset.state = motion.matches
          ? "static"
          : lost
            ? "fallback"
            : "loading";
        schedule();
      } catch {
        if (!disposed) element.dataset.state = "fallback";
      } finally {
        loading = false;
      }
    };
    const preference = () => {
      if (motion.matches) {
        cancelVisualFrame(draw);
        element.dataset.state = "static";
      } else if (engine) {
        element.dataset.state = lost ? "fallback" : "loading";
        schedule();
      } else {
        void load();
      }
    };
    const visibility = () => {
      if (document.hidden) {
        cancelVisualFrame(draw);
      } else {
        void load();
        schedule();
      }
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelVisualFrame(draw);
      if (!disposed) element.dataset.state = "fallback";
    };
    const contextRestored = () => {
      lost = false;
      if (!disposed) {
        element.dataset.state = motion.matches ? "static" : "loading";
        schedule();
      }
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", preference);
    surface.addEventListener("webglcontextlost", contextLost);
    surface.addEventListener("webglcontextrestored", contextRestored);
    // Give the server-rendered content and primary hero time to paint first.
    timer = window.setTimeout(() => void load(), 350);
    return () => {
      disposed = true;
      abort.abort();
      clearTimeout(timer);
      cancelVisualFrame(draw);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", preference);
      surface.removeEventListener("webglcontextlost", contextLost);
      surface.removeEventListener("webglcontextrestored", contextRestored);
      engine?.dispose();
    };
  }, []);
  return (
    <div
      ref={root}
      className={styles.background}
      aria-hidden="true"
      data-skull-background
      data-state="loading"
    >
      <noscript>
        <style>{`[data-skull-background][data-state="loading"] img { opacity: .12 !important; }`}</style>
      </noscript>
      <div className={styles.light} />
      <Image
        className={styles.poster}
        src="/models/skull-poster.webp"
        width={600}
        height={720}
        alt=""
        unoptimized
      />
      <div className={styles.canvasLayer}>
        <canvas ref={canvas} className={styles.canvas} />
      </div>
      <div className={styles.vignette} />
    </div>
  );
}
