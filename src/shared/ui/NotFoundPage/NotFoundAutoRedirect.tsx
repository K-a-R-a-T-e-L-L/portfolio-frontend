"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./NotFoundPage.module.css";

type NotFoundAutoRedirectProps = {
  locale: "ru" | "en";
  homeHref: string;
};

const REDIRECT_SECONDS = 7;

export default function NotFoundAutoRedirect({
  locale,
  homeHref,
}: NotFoundAutoRedirectProps) {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const timeout = window.setTimeout(() => {
      router.replace(homeHref);
    }, REDIRECT_SECONDS * 1000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [homeHref, router]);

  const progressValue = ((REDIRECT_SECONDS - secondsLeft) / REDIRECT_SECONDS) * 100;
  const redirectText =
    locale === "ru"
      ? `Автопереход через ${secondsLeft} сек.`
      : `Auto redirect in ${secondsLeft}s.`;

  return (
    <div className={styles.redirectWrap}>
      <p className={styles.redirectText}>{redirectText}</p>
      <div className={styles.progressTrack} aria-hidden>
        <div
          className={styles.progressSection}
          style={{ width: `${progressValue}%` }}
        />
      </div>
    </div>
  );
}
