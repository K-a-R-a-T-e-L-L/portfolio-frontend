import { Stack, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function AboutPage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <Stack gap="md">
      <Title order={1}>{t("title")}</Title>
      <Text c="dimmed">{t("description")}</Text>
    </Stack>
  );
}
