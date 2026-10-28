"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function MobileMenu({
  labels,
  ids,
  locale,
  menu,
}: {
  labels: string[];
  ids: string[];
  locale: string;
  menu: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        ref.current.open = false;
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <details
      ref={ref}
      className={styles.mobileMenu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && ref.current) {
          ref.current.open = false;
          ref.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>
        {menu}
        <span className={styles.menuIcon}>
          <i />
          <i />
        </span>
      </summary>
      <nav aria-label={menu}>
        {labels.map((label, i) => (
          <a
            key={label}
            href={`/${locale}#${ids[i]}`}
            onClick={() => {
              if (ref.current) ref.current.open = false;
            }}
          >
            {label}
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </details>
  );
}
