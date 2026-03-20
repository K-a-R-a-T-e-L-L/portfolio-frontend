import { Stack, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function PrivacyPage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <Stack gap="md">
      <Title order={1}>{t("title")}</Title>
      <Text c="dimmed">{t("updated")}</Text>
      <Text>{t("intro")}</Text>
      <Text>{t("data")}</Text>
      <Text>{t("contacts")}</Text>
    </Stack>
  );
}
