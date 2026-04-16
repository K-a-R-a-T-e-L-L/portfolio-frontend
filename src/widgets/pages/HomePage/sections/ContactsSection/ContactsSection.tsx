import Section from "@/shared/ui/Section/Section";
import styles from "./ContactsSection.module.css";
import { Group, Paper, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import ContactCard from "@/shared/ui/ContactCard/ContactCard";
import FeedbackForm from "./FeedbackForm";
import FileCard from "@/shared/ui/FileCard/FileCard";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";
import { Locale } from "@/shared/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ContactsSectionProps {
  locale: Locale;
}

const ContactsSection: React.FC<ContactsSectionProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "contacts" });

  return (
    <Section ariaLabelledby="" id="contacts-section">
      <Stack align="center" w="100%">
        <NameSection name={t("name")} />
        <MotionBox
          start={{ opacity: 0.1, y: -20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ width: "100%" }}
        >
          <Title
            order={2}
            fz={{ base: 48, md: 64 }}
            fw={900}
            className={"title"}
            style={{ fontWeight: "bold" }}
            ta="center"
          >
            {t("titleFirst")}
            <span className={"title__primary_word"}> {t("ctaTitle")} </span>
            {t("titleSecond")}
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ width: "100%", display: "grid", placeItems: "center" }}
        >
          <Text ta="center" maw={980}>
            {t("description")}
          </Text>
        </MotionBox>

        <Group
          mt={30}
          wrap="nowrap"
          className={styles.group_cards}
          w="100%"
          align="stretch"
        >
          <Paper
            w={{ base: "100%", md: "50%" }}
            p="lg"
            radius="md"
            className={styles.cards_card}
          >
            <MotionBox
              start={{ opacity: 0.1, x: -20 }}
              end={{ opacity: 1, y: 0, x: 0 }}
              styles={{ width: "100%" }}
            >
              <Stack>
                <Title
                  fz={{ base: 20, md: 24 }}
                  order={3}
                  className={styles.template_title}
                >
                  {t("miniTitleFirst")}
                </Title>
                <ContactCard
                  Icon={IconBrandTelegram}
                  name="Telegram"
                  link="https://t.me/K_a_R_a_T_e_L_L"
                  copyText="@K_a_R_a_T_e_L_L"
                />
                <ContactCard
                  Icon={IconBrandWhatsapp}
                  name="WhatsApp"
                  link="https://wa.me/79617160943"
                  copyText="+7 961 716-09-43"
                />
                <ContactCard
                  Icon={IconBrandGithub}
                  name="GitHub"
                  link="https://github.com/K-a-R-a-T-e-L-L"
                  copyText="https://github.com/K-a-R-a-T-e-L-L"
                />
                <ContactCard
                  Icon={IconBrandVk}
                  name="VKontakte"
                  link="https://vk.ru/k_a_r_a_t_e_l_l"
                  copyText="@k_a_r_a_t_e_l_l"
                />
                <ContactCard
                  Icon={IconMail}
                  name="Email"
                  link="mailto:kirillcuhorukov6@gmail.com"
                  copyText="kirillcuhorukov6@gmail.com"
                />
              </Stack>
            </MotionBox>
          </Paper>

          <Paper
            w={{ base: "100%", md: "50%" }}
            p="lg"
            radius="md"
            className={styles.cards_card}
          >
            <MotionBox
              start={{ opacity: 0.1, x: 20 }}
              end={{ opacity: 1, y: 0, x: 0 }}
              styles={{ width: "100%" }}
            >
              <FeedbackForm
                title={t("miniTitleSecond")}
                placeholderName={t("form.placeholderName")}
                labelName={t("form.labelName")}
                labelMethodContact={t("form.labelMethodContact")}
                placeholderMethodContact={t("form.placeholderMethodContact")}
                contactLabel={t("form.contact")}
                commentLabel={t("form.commentLabel")}
                commentPlaceholder={t("form.commentPlaceholder")}
                button={t("form.button")}
              />
            </MotionBox>
          </Paper>
        </Group>
        <Paper w="100%" p="lg" radius="md" className={styles.cards_card}>
          <Stack>
            <Title
              fz={{ base: 20, md: 24 }}
              order={3}
              className={styles.template_title}
            >
              {t("miniTitleThird")}
            </Title>
            <Group wrap="nowrap" className={styles.group_cards}>
              <MotionBox
                start={{ opacity: 0.1, x: -10, y: 10 }}
                end={{ opacity: 1, y: 0, x: 0 }}
                styles={{ width: "100%" }}
              >
                <FileCard
                  name="Fullstack-Разработчик_Сухоруков-Кирилл-Сергеевич.pdf"
                  mb="56.6 kb"
                  href="/Fullstack-Разработчик_Сухоруков-Кирилл-Сергеевич.pdf"
                />
              </MotionBox>
              <MotionBox
                start={{ opacity: 0.1, x: 10, y: 10 }}
                end={{ opacity: 1, y: 0, x: 0 }}
                styles={{ width: "100%" }}
              >
                <FileCard
                  name="Fullstack-Developer_Sukhorukov-Kirill-Sergeevich.pdf"
                  mb="46.8 kb"
                  href="/Fullstack-Developer_Sukhorukov-Kirill-Sergeevich.pdf"
                />
              </MotionBox>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Section>
  );
};

export default ContactsSection;
