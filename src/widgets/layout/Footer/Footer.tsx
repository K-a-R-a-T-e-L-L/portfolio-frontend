import { Box, Container, Divider, Group, Stack, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";
import styles from "./Footer.module.css";
import Brand from "@/shared/ui/Brand/Brand";

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <Box component="footer" className={styles.footerRoot} px={16}>
      <Container size="xl" className={styles.footerContainer}>
        <Group w="100%" align="flex-start">
          <Brand locale={locale} />
          <Stack gap="md">
            <Link href="/faq" locale={locale}>
              {t("faq")}
            </Link>
            <Link href="/sitemap" locale={locale}>
              {t("sitemap")}
            </Link>
            <Link href="/privacy" locale={locale}>
              {t("privacy")}
            </Link>
            <Link href="/terms" locale={locale}>
              {t("terms")}
            </Link>
          </Stack>
          <Text size="xs" c="dimmed">
            {t("copyright")}
          </Text>
        </Group>
        <Divider />
      </Container>
    </Box>
  );
}
