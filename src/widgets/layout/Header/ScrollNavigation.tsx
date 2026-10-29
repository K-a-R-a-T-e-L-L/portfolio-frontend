"use client";
import { useEffect, useRef } from "react";
import {
  scheduleVisualFrame,
  cancelVisualFrame,
} from "@/shared/lib/visual-frame";
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
    let active = -2;
    const update = () => {
      const range = document.documentElement.scrollHeight - innerHeight;
      const fraction = range > 0 ? Math.min(1, scrollY / range) : 0;
      let current = -1;
      ids.forEach((id, i) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = i;
      });
      const width = current >= 0 ? links[current].offsetWidth : 0;
      const left = current >= 0 ? links[current].offsetLeft : 0;
      return () => {
        if (progress) progress.style.transform = `scaleX(${fraction})`;
        if (active !== current)
          links.forEach((link, i) => {
            if (i === current) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        active = current;
        if (marker) {
          marker.style.opacity = current >= 0 ? "1" : "0";
          if (current >= 0) {
            marker.style.width = `${width}px`;
            marker.style.transform = `translateX(${left}px)`;
          }
        }
      };
    };
    const schedule = () => {
      scheduleVisualFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelVisualFrame(update);
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
