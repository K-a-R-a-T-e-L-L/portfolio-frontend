import { List, ListItem, Stack, Text, Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function FaqPage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "faq" });

  return (
    <Stack gap="md">
      <Title order={1}>{t("title")}</Title>
      <Text c="dimmed">{t("description")}</Text>
      <List spacing="sm">
        <ListItem>
          <Text fw={600}>{t("q1")}</Text>
          <Text c="dimmed">{t("a1")}</Text>
        </ListItem>
        <ListItem>
          <Text fw={600}>{t("q2")}</Text>
          <Text c="dimmed">{t("a2")}</Text>
        </ListItem>
      </List>
    </Stack>
  );
}
