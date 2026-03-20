import { AppShellHeader, Button, Container, Group } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "nav" });

  const alternateLocale = locale === "en" ? "ru" : "en";

  return (
    <AppShellHeader component="header" className={styles.header}>
      <Container size="xl" h="100%">
        <Group h="100%" justify="space-between" align="center">
          <Link href="/" locale={locale} className={styles.brand}>
            Next App Template
          </Link>

          <Group gap={16}>
            <Link href="/" locale={locale} className={styles.link}>
              {t("home")}
            </Link>
            <Link href="/about" locale={locale} className={styles.link}>
              {t("about")}
            </Link>
            <Link href="/docs" locale={locale} className={styles.link}>
              {t("docs")}
            </Link>
            <Link href="/faq" locale={locale} className={styles.link}>
              {t("faq")}
            </Link>
            <Link href="/" locale={alternateLocale}>
              <Button variant="light" size="xs" className={styles.localeButton}>
                {alternateLocale.toUpperCase()}
              </Button>
            </Link>
            <ThemeToggle />
          </Group>
        </Group>
      </Container>
    </AppShellHeader>
  );
}
