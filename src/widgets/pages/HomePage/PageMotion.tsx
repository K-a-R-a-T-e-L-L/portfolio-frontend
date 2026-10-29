"use client";

import { useEffect } from "react";

/** Progressive enhancement: SSR/no-JS content is never hidden. */
export default function PageMotion() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const animations = new Set<Animation>();
    const seen = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    const animate = (
      element: HTMLElement,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      const animation = element.animate(frames, options);
      animations.add(animation);
      animation.onfinish = () => {
        animations.delete(animation);
        animation.cancel();
      };
    };
    const show = (element: HTMLElement, delay = 0) => {
      delete element.dataset.motionPending;
      observer?.unobserve(element);
      if (seen.has(element)) return;
      seen.add(element);
      if (preference.matches) return;
      const heading = element.tagName === "H1";
      animate(
        element,
        [
          { opacity: heading ? 1 : 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 1000,
          delay,
          easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          fill: "backwards",
        },
      );
      if (element.hasAttribute("data-type-code")) {
        element
          .querySelectorAll<HTMLElement>("[data-type-line]")
          .forEach((line, index) => {
            const desktop = matchMedia("(min-width: 641px)").matches;
            animate(
              line,
              desktop
                ? [
                    { clipPath: "inset(0 100% 0 0)" },
                    { clipPath: "inset(0 0% 0 0)" },
                  ]
                : [{ opacity: 0 }, { opacity: 1 }],
              {
                duration: desktop ? 600 : 450,
                delay: delay + 300 + index * (desktop ? 720 : 570),
                easing: desktop
                  ? `steps(${Math.max(1, line.textContent?.length ?? 1)}, end)`
                  : "ease-out",
                fill: "backwards",
              },
            );
          });
      }
    };
    const revealAll = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      targets.forEach((element) => {
        delete element.dataset.motionPending;
      });
    };
    if (!preference.matches) {
      let firstBatch = true;
      observer = new IntersectionObserver(
        (entries) => {
          let order = 0;
          const maxDelay = firstBatch ? 560 : 420;
          firstBatch = false;
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;
            if (entry.isIntersecting)
              show(element, Math.min(order++ * 140, maxDelay));
            else if (entry.boundingClientRect.bottom <= 0) {
              delete element.dataset.motionPending;
              seen.add(element);
              observer?.unobserve(element);
            } else if (!seen.has(element)) element.dataset.motionPending = "";
          });
        },
        { rootMargin: "0px 0px -24px 0px", threshold: 0 },
      );
      // IntersectionObserver supplies geometry after layout, avoiding a synchronous
      // full-page measurement during React's hydration effects.
      targets.forEach((element) => observer?.observe(element));
    }
    // Keyboard navigation and in-page search must never land on invisible content.
    const focus = () => revealAll();
    const keyboard = (event: KeyboardEvent) => {
      if (
        event.key === "Tab" ||
        ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f")
      )
        revealAll();
    };
    const changed = () => {
      if (preference.matches) revealAll();
    };
    document.addEventListener("focusin", focus);
    document.addEventListener("keydown", keyboard);
    preference.addEventListener("change", changed);
    return () => {
      revealAll();
      document.removeEventListener("focusin", focus);
      document.removeEventListener("keydown", keyboard);
      preference.removeEventListener("change", changed);
    };
  }, []);
  return null;
}
