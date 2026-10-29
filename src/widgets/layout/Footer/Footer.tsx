import {
  IconArrowUpRight,
  IconArrowUp,
  IconBrandTelegram,
} from "@tabler/icons-react";
import type { Locale } from "@/shared/lib/i18n/routing";
import { getPortfolioContent } from "@/widgets/pages/HomePage/content";
import styles from "./Footer.module.css";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getPortfolioContent(locale),
    ru = locale === "ru";
  const ids = [
    "project-section",
    "stack-section",
    "experience-section",
    "contacts-section",
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div data-reveal className={styles.invitation}>
            <h2>
              {ru ? "Давайте соберём" : "Let’s build"}
              <br />
              <span>{ru ? "следующий продукт." : "what’s next."}</span>
            </h2>
            <a
              className={styles.discuss}
              href="https://t.me/K_a_R_a_T_e_L_L"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Обсудить задачу" : "Discuss a project"}
              <IconArrowUpRight size={23} />
            </a>
          </div>
          <a
            data-reveal className={styles.channel}
            href="https://t.me/K_a_R_a_T_e_L_L_channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.channelIcon}>
              <IconBrandTelegram size={29} />
            </span>
            <span>
              <strong>
                {ru ? "Мой Telegram-канал" : "My Telegram channel"}
              </strong>
              <span>{ru ? "Присоединиться к каналу" : "Join the channel"}</span>
            </span>
            <IconArrowUpRight size={22} />
          </a>
        </div>
        <div className={styles.linksRow}>
          <a className={styles.signature} href={`/${locale}#hero-section`}>
            ks<span>.</span>
            <span>
              {t.name}
              <small>{t.role}</small>
            </span>
          </a>
          <nav aria-label={ru ? "Навигация в подвале" : "Footer navigation"}>
            {t.nav.map((label, i) => (
              <a key={label} href={`/${locale}#${ids[i]}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {t.name}
          </span>
          <span className={styles.note}>
            <span aria-hidden="true">{"</>"}</span> {t.footer}
          </span>
          <a href={`/${locale}#hero-section`}>
            {t.top}
            <IconArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
