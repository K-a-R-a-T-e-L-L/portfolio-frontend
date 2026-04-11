import { Anchor, Box, Container, Divider, Group, Stack, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Link } from "@/shared/lib/i18n/navigation";
import { Locale } from "@/shared/lib/i18n/routing";
import styles from "./Footer.module.css";
import Brand from "@/shared/ui/Brand/Brand";

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <Box component="footer" className={styles.footerRoot} px={{ base: 12, sm: 16 }}>
      <Container size="xl" py={20}>
        <Stack gap={14}>
          <Group w="100%" align="flex-start" justify="space-between" gap={18}>
          <Box mr={30}><Brand locale={locale} /></Box>

            <Stack gap={8} flex="1 1 280px">
            <Text className={styles.blockTitle}>{t("menuTitle")}</Text>
              <Group gap={16} style={{ rowGap: 10 }}>
              <Link href="/#about-section" locale={locale} className={styles.link}>
                {t("about")}
              </Link>
              <Link href="/#project-section" locale={locale} className={styles.link}>
                {t("projects")}
              </Link>
              <Link href="/#experience-section" locale={locale} className={styles.link}>
                {t("experience")}
              </Link>
              <Link href="/#stack-section" locale={locale} className={styles.link}>
                {t("stack")}
              </Link>
              <Link href="/#contacts-section" locale={locale} className={styles.link}>
                {t("contacts")}
              </Link>
            </Group>
          </Stack>

            <Stack gap={8} flex="1 1 280px">
            <Text className={styles.blockTitle}>{t("contactsTitle")}</Text>
              <Group gap={14} style={{ rowGap: 10 }}>
              <Anchor
                href="https://t.me/K_a_R_a_T_e_L_L"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Telegram
              </Anchor>
              <Anchor href="mailto:kirillcuhorukov6@gmail.com" className={styles.link}>
                Email
              </Anchor>
              <Anchor
                href="https://github.com/K-a-R-a-T-e-L-L"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </Anchor>
              <Anchor
                href="https://wa.me/79617160943"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                WhatsApp
              </Anchor>
            </Group>
          </Stack>
          </Group>

          <Divider color="rgba(112, 142, 196, 0.24)" />

          <Group justify="space-between" w="100%" style={{ rowGap: 8, columnGap: 16 }}>
            <Text size="xs" c="dimmed">
              {t("copyright")}
            </Text>
            <Text size="xs" c="dimmed">
              {t("note")}
            </Text>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
