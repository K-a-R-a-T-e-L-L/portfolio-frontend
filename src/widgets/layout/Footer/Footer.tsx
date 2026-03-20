import { Box, Container, Group, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";
import styles from "./Footer.module.css";

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <Box component="footer" className={styles.footerRoot} px={16}>
      <Container size="xl" className={styles.footerContainer}>
        <Text size="sm" c="dimmed">
          {t("description")}
        </Text>
        <Group gap="md">
          <Link href="/faq" locale={locale}>{t("faq")}</Link>
          <Link href="/sitemap" locale={locale}>{t("sitemap")}</Link>
          <Link href="/privacy" locale={locale}>{t("privacy")}</Link>
          <Link href="/terms" locale={locale}>{t("terms")}</Link>
        </Group>
        <Text size="xs" c="dimmed">
          {t("copyright")}
        </Text>
      </Container>
    </Box>
  );
}
