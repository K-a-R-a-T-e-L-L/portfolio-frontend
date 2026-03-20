import { Card, Stack, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <Stack gap="lg">
      <Title order={1}>{t("title")}</Title>
      <Text c="dimmed">{t("description")}</Text>
      <Card withBorder radius="md" p="lg">
        <Text size="sm" c="dimmed">{t("hint")}</Text>
      </Card>
    </Stack>
  );
}
