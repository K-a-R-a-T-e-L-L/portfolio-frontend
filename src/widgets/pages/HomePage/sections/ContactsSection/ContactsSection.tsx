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

interface ContactsSectionProps {}

const ContactsSection: React.FC<ContactsSectionProps> = () => {
  return (
    <Section ariaLabelledby="" id="contacts-section">
      <Stack align="center" w="100%">
        <NameSection name="Связь со мной" />
        <Title
          order={2}
          fz={{ base: 48, md: 64 }}
          fw={900}
          className={"title"}
          style={{ fontWeight: "bold" }}
          ta="center"
        >
          Готовы<span className={"title__primary_word"}> обсудить </span>проект?
        </Title>

        <Text ta="center" maw={980}>
          Оставьте заявку, и я свяжусь с вами. Либо напишите напрямую через
          удобный для вас канал из списка контактов.
        </Text>

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
          </Paper>

          <Paper
            w={{ base: "100%", md: "50%" }}
            p="lg"
            radius="md"
            className={styles.cards_card}
          >
            <FeedbackForm />
          </Paper>
        </Group>
        <Paper w="100%" p="lg" radius="md" className={styles.cards_card}>
          <Title
            fz={{ base: 20, md: 24 }}
            order={3}
            className={styles.template_title}
          >
            Резюме
          </Title>
        </Paper>
      </Stack>
    </Section>
  );
};

export default ContactsSection;
