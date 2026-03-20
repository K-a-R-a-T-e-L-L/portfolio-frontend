import { List, ListItem, Stack, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";

export default async function SitemapPage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "sitemap" });

  return (
    <Stack gap="md">
      <Title order={1}>{t("title")}</Title>
      <List spacing="xs">
        <ListItem><Link href="/" locale={locale}>{t("home")}</Link></ListItem>
        <ListItem><Link href="/about" locale={locale}>{t("about")}</Link></ListItem>
        <ListItem><Link href="/docs" locale={locale}>{t("docs")}</Link></ListItem>
        <ListItem><Link href="/faq" locale={locale}>{t("faq")}</Link></ListItem>
        <ListItem><Link href="/privacy" locale={locale}>{t("privacy")}</Link></ListItem>
        <ListItem><Link href="/terms" locale={locale}>{t("terms")}</Link></ListItem>
      </List>
    </Stack>
  );
}
