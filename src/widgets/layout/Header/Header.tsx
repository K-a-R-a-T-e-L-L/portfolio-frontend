import { AppShellHeader, Container, Group } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";
import styles from "./Header.module.css";
import LanguageToggle from "@/shared/ui/LanguageToggle/LanguageToggle";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <AppShellHeader component="header" className={styles.header}>
      <Container size="xl" h="100%">
        <Group h="100%" justify="space-between" align="center">
          <Link href="#hero-section" locale={locale} className={styles.brand}>
            Portfolio @K_a_R_a_T_e_L_L
          </Link>

          <Group gap={16} display={{ base: "none", md: "flex" }}>
            <Link href="#about-section" locale={locale} className={styles.link}>
              Обо мне
            </Link>
            <Link
              href="#project-section"
              locale={locale}
              className={styles.link}
            >
              Проекты
            </Link>
            <Link
              href="#experience-section"
              locale={locale}
              className={styles.link}
            >
              Опыт
            </Link>
            <Link href="#stack-section" locale={locale} className={styles.link}>
              Технологии
            </Link>
            <Link
              href="#contacts-section"
              locale={locale}
              className={styles.link}
            >
              Контакты
            </Link>
          </Group>
          <LanguageToggle ruLabel="ru" enLabel="en" />
        </Group>
      </Container>
    </AppShellHeader>
  );
}
