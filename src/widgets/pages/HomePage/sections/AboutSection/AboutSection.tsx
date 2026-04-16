import Section from "@/shared/ui/Section/Section";
import styles from "./AboutSection.module.css";
import { Group, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import { IconBrandTelegram, IconCpu, IconRocket } from "@tabler/icons-react";
import PerformanceCard from "@/shared/ui/PerformanceCard/PerformanceCard";
import InfiniteSlider from "@/shared/ui/InfiniteSlider/InfiniteSlider";
import { nbspPrepositions } from "@/shared/lib/nbspPrepositionsю";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";
import { Locale } from "@/shared/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

interface AboutSectionProps {
  locale: Locale;
}

const AboutSection: React.FC<AboutSectionProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "about" });

  const list = [
    {
      Icon: IconRocket,
      title: t("cards.0.title"),
      text: nbspPrepositions(t("cards.0.description")),
      stack: t.raw("cards.0.list"),
    },
    {
      Icon: IconCpu,
      title: t("cards.1.title"),
      text: nbspPrepositions(t("cards.1.description")),
      stack: t.raw("cards.1.list"),
    },
    {
      Icon: IconBrandTelegram,
      title: t("cards.2.title"),
      text: nbspPrepositions(t("cards.2.description")),
      stack: t.raw("cards.2.list"),
    },
  ];

  return (
    <Section
      ariaLabelledby=""
      id="about-section"
      className={styles.about_section}
    >
      <Stack align="center" w="100%">
        <NameSection name={t("name")} />
        <MotionBox
          start={{ opacity: 0.1, y: -20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{width: '100%'}}
        >
          <Title
            order={2}
            fz={{ base: 48, md: 64 }}
            fw={900}
            className={"title"}
            w='100%'
            style={{ fontWeight: "bold" }}
            ta="center"
          >
            <span className={"title__primary_word"}>{t("ctaTitle")} </span>
            {t("title")}
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Text ta="center" maw={980}>
            {nbspPrepositions(t("description"))}
          </Text>
        </MotionBox>

        <Group mt={20} justify="center">
          {list.map((card, index) => {
            return (
              <MotionBox
                key={index}
                start={{
                  opacity: 0.1,
                  y: 20,
                  x: index == 0 ? -20 : index == 1 ? 0 : 20,
                }}
                end={{ opacity: 1, y: 0, x: 0 }}
              >
                <PerformanceCard
                  Icon={card.Icon}
                  title={card.title}
                  text={card.text}
                  stack={card.stack}
                />
              </MotionBox>
            );
          })}
        </Group>

        <InfiniteSlider items={t.raw("slider")} />
      </Stack>
    </Section>
  );
};

export default AboutSection;
