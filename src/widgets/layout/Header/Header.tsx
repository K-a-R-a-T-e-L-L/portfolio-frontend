import Link from "next/link";
import type { Locale } from "@/shared/lib/i18n/routing";
import { getPortfolioContent } from "@/widgets/pages/HomePage/content";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";
import ScrollNavigation from "./ScrollNavigation";
import { IconArrowUpRight, IconBrandTelegram } from "@tabler/icons-react";

export default function Header({ locale }: { locale: Locale }) {
  const t = getPortfolioContent(locale);
  const ids = [
    "project-section",
    "stack-section",
    "experience-section",
    "contacts-section",
  ];
  return (
    <header className={styles.header}>
      <a className={styles.skip} href="#main-content">
        {t.skip}
      </a>
      <div className={styles.inner}>
        <Link className={styles.brand} href={`/${locale}`} aria-label={t.name}>
          <span className={styles.mark}>
            ks<span>.</span>
          </span>
          <span className={styles.brandName}>{t.name}</span>
        </Link>
        <ScrollNavigation labels={t.nav} ids={ids} locale={locale} />
        <div className={styles.right}>
          <a
            className={styles.channel}
            href="https://t.me/K_a_R_a_T_e_L_L_channel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              locale === "ru" ? "Мой Telegram-канал" : "My Telegram channel"
            }
          >
            <IconBrandTelegram size={17} />
            <span>{locale === "ru" ? "TG-канал" : "TG channel"}</span>
            <IconArrowUpRight size={14} />
          </a>
          <nav
            className={styles.languages}
            aria-label={locale === "ru" ? "Язык" : "Language"}
          >
            <Link
              href="/ru"
              lang="ru"
              hrefLang="ru"
              aria-current={locale === "ru" ? "page" : undefined}
            >
              RU
            </Link>
            <span>/</span>
            <Link
              href="/en"
              lang="en"
              hrefLang="en"
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </nav>
          <MobileMenu labels={t.nav} ids={ids} locale={locale} menu={t.menu} />
        </div>
      </div>
      <div className={styles.progressTrack} aria-hidden="true">
        <span data-scroll-progress />
      </div>
    </header>
  );
}
