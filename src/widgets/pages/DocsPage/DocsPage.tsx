import { List, ListItem, Stack, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function DocsPage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "docs" });

  return (
    <Stack gap="md">
      <Title order={1}>{t("title")}</Title>
      <Text c="dimmed">{t("description")}</Text>
      <List spacing="xs">
        <ListItem>{t("step1")}</ListItem>
        <ListItem>{t("step2")}</ListItem>
        <ListItem>{t("step3")}</ListItem>
      </List>
    </Stack>
  );
}
