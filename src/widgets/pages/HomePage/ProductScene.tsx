"use client";
import { useEffect, useRef } from "react";
import styles from "./Portfolio.module.css";

const modules = Array.from({ length: 27 }, (_, i) => ({
  x: (i % 3) - 1,
  y: (Math.floor(i / 3) % 3) - 1,
  z: Math.floor(i / 9) - 1,
}));
const faces = ["front", "back", "left", "right", "top", "bottom"] as const;

export default function ProductScene({
  labels,
  note,
}: {
  labels: string[];
  note: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = root.current;
    const hero = scene?.closest("section");
    if (!scene || !hero) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 640px)");
    const blocks = Array.from(
      scene.querySelectorAll<HTMLElement>("[data-module]"),
    );
    const model = scene.querySelector<HTMLElement>("[data-model]");
    let frame = 0,
      pointerX = 0,
      pointerY = 0;
    let visible = true,
      disposed = false;
    const draw = () => {
      frame = 0;
      if (disposed || !model) return;
      const rect = hero.getBoundingClientRect();
      const progress = reduced.matches
        ? 0
        : Math.min(1, Math.max(0, -rect.top / (rect.height * 0.52)));
      const spread = Math.max(0, (progress - 0.12) / 0.88);
      const collapse = Math.max(0, (progress - 0.6) / 0.4);
      const scale = compact.matches
        ? Math.min(0.76, scene.clientWidth / 380)
        : 1;
      model.style.transform = `translate3d(-50%,-50%,0) scale(${scale * (1 + progress * 0.32)}) rotateX(${-22 + progress * 20 + (reduced.matches ? 0 : pointerY)}deg) rotateY(${-34 + progress * 75 + (reduced.matches ? 0 : pointerX)}deg) rotateZ(${-8 + progress * 12}deg)`;
      blocks.forEach((block, i) => {
        const { x, y, z } = modules[i];
        const seed = Math.sin(i * 127.1 + 5) * 0.5;
        const gap = 66 + spread * (compact.matches ? 65 : 125);
        block.style.transform = `translate3d(${x * gap + seed * collapse * 130}px,${y * gap + Math.sin(i * 2.4) * collapse * 100}px,${z * gap}px) rotateX(${collapse * ((i % 3) - 1) * 100}deg) rotateZ(${collapse * seed * 180}deg) scale(${1 - collapse * 0.83})`;
        block.style.opacity = `${1 - collapse * 0.62}`;
      });
      scene.dataset.phase =
        progress > 0.6 ? "particles" : progress > 0.15 ? "layers" : "assembled";
    };
    const schedule = () => {
      if (visible && !document.hidden && !frame && !disposed)
        frame = requestAnimationFrame(draw);
    };
    const pointer = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType !== "mouse") return;
      if (!visible) return;
      pointerX =
        (Math.min(1, Math.max(0, event.clientX / innerWidth)) - 0.5) * 14;
      pointerY =
        -(Math.min(1, Math.max(0, event.clientY / innerHeight)) - 0.5) * 10;
      schedule();
    };
    const reset = () => {
      pointerX = 0;
      pointerY = 0;
      schedule();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { rootMargin: "120px" },
    );
    observer.observe(hero);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    reduced.addEventListener("change", schedule);
    window.addEventListener("pointermove", pointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    draw();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
      reduced.removeEventListener("change", schedule);
      window.removeEventListener("pointermove", pointer);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
    };
  }, []);
  return (
    <div
      ref={root}
      className={styles.scene}
      aria-hidden="true"
      data-phase="assembled"
    >
      <div className={styles.cubeGlow} />
      <div className={styles.orbit} />
      <div className={styles.orbitInner} />
      <div className={styles.sceneCross}>
        <span />
        <span />
      </div>
      <div className={styles.sceneModel} data-model>
        {modules.map(({ x, y, z }, i) => (
          <div
            key={i}
            data-module
            className={`${styles.voxel} ${i === 13 ? styles.core : ""}`}
            style={{
              transform: `translate3d(${x * 66}px,${y * 66}px,${z * 66}px)`,
            }}
          >
            {faces.map((face) => (
              <span key={face} className={`${styles.face} ${styles[face]}`} />
            ))}
          </div>
        ))}
      </div>
      <span className={`${styles.sceneLabel} ${styles.labelOne}`}>
        {labels[0]}
      </span>
      <span className={`${styles.sceneLabel} ${styles.labelTwo}`}>
        {labels[1]}
      </span>
      <span className={`${styles.sceneLabel} ${styles.labelThree}`}>
        {labels[2]}
      </span>
      <p className={styles.sceneNote}>{note}</p>
    </div>
  );
}
