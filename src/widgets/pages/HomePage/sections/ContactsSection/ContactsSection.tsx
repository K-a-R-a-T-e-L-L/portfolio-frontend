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

interface ContactsSectionProps {}

const ContactsSection: React.FC<ContactsSectionProps> = () => {
  return (
    <Section ariaLabelledby="" id="contacts-section">
      <Stack align="center" w="100%">
        <NameSection name="Связь со мной" />
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
            Готовы<span className={"title__primary_word"}> обсудить </span>
            проект?
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ width: "100%", display: "grid", placeItems: "center" }}
        >
          <Text ta="center" maw={980}>
            Оставьте заявку, и я свяжусь с вами. Либо напишите напрямую через
            удобный для вас канал из списка контактов.
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
                  Контакты
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
              <FeedbackForm />
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
              Резюме
            </Title>
            <Group wrap="nowrap" className={styles.group_cards}>
              <MotionBox
                start={{ opacity: 0.1, x: -10, y: 10 }}
                end={{ opacity: 1, y: 0, x: 0 }}
                styles={{ width: "100%" }}
              >
                <FileCard
                  name="resume_ru.pdf"
                  mb="100mb"
                  href="/resume_ru.pdf"
                />
              </MotionBox>
              <MotionBox
                start={{ opacity: 0.1, x: 10, y: 10 }}
                end={{ opacity: 1, y: 0, x: 0 }}
                styles={{ width: "100%" }}
              >
                <FileCard
                  name="resume_en.pdf"
                  mb="98mb"
                  href="/resume_en.pdf"
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
