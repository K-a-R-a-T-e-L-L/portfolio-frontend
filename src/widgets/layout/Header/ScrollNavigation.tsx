"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function ScrollNavigation({
  labels,
  ids,
  locale,
}: {
  labels: string[];
  ids: string[];
  locale: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
    const marker = nav.querySelector<HTMLElement>("[data-nav-marker]");
    const progress = nav
      .closest("header")
      ?.querySelector<HTMLElement>("[data-scroll-progress]");
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      if (progress)
        progress.style.transform = `scaleX(${range > 0 ? Math.min(1, scrollY / range) : 0})`;
      let current = -1;
      ids.forEach((id, i) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = i;
      });
      links.forEach((link, i) => {
        if (i === current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      if (marker) {
        marker.style.opacity = current >= 0 ? "1" : "0";
        if (current >= 0) {
          marker.style.width = `${links[current].offsetWidth}px`;
          marker.style.transform = `translateX(${links[current].offsetLeft}px)`;
        }
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);
  return (
    <nav
      ref={ref}
      className={styles.desktopNav}
      aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}
    >
      <span className={styles.navMarker} data-nav-marker aria-hidden="true" />
      {labels.map((label, i) => (
        <a key={label} href={`/${locale}#${ids[i]}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}
