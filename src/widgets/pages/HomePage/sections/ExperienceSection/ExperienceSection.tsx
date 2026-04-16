import Section from "@/shared/ui/Section/Section";
import styles from "./ExperienceSection.module.css";
import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import ExperienceCard from "@/shared/ui/ExperienceCard/ExperienceCard";
import { MEDIA } from "@/shared/lib/media";
import AnimatedDot from "@/shared/ui/AnimatedDot/AnimatedDot";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";
import { Locale } from "@/shared/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ExperienceSectionProps {
  locale: Locale;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = async ({
  locale,
}) => {
  const t = await getTranslations({ locale, namespace: "experience" });

  const list = [
    {
      date: t("cards.0.time"),
      title: t("cards.0.title"),
      work: t("cards.0.company"),
      skills: t("cards.0.description"),
      stack: t.raw("cards.0.stack"),
    },
    {
      date: t("cards.1.time"),
      title: t("cards.1.title"),
      work: t("cards.1.company"),
      skills: t("cards.1.description"),
      stack: t.raw("cards.1.stack"),
    },
    {
      date: t("cards.2.time"),
      title: t("cards.2.title"),
      work: t("cards.2.company"),
      skills: t("cards.2.description"),
      stack: t.raw("cards.2.stack"),
    },
    {
      date: t("cards.3.time"),
      title: t("cards.3.title"),
      work: t("cards.3.company"),
      skills: t("cards.3.description"),
      stack: t.raw("cards.3.stack"),
    },
  ];

  return (
    <Section ariaLabelledby="" id="experience-section">
      <Stack w="100%" align="center" pos="relative">
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
            ta="center"
            style={{ fontWeight: "bold" }}
          >
            {t("title")}
            <span className={"title__primary_word"}> {t("ctaTitle")}</span>
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ width: "100%" }}
        >
          <Text ta="center">{t("description")}</Text>
        </MotionBox>

        <Group w="100%" mt={40} className={styles.box_list}>
          <Image
            src={MEDIA.images.line.src}
            pos="absolute"
            w="100%"
            top={0}
            h="100%"
          />

          {list.map((el, index) => {
            return (
              <Group
                key={index}
                w="100%"
                pos="relative"
                className={styles.box_card}
              >
                <MotionBox
                  start={{ opacity: 0.1, x: index % 2 == 0 ? -50 : 50 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  className={styles.motion_card}
                >
                  <ExperienceCard
                    key={index}
                    date={el.date}
                    title={el.title}
                    work={el.work}
                    skills={el.skills}
                    stack={el.stack}
                  />
                </MotionBox>

                <MotionBox
                  start={{ opacity: 0, x: index % 2 == 0 ? -300 : 300 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  ease="easeInOut"
                  delay={0.7}
                  className={styles.dot}
                >
                  <Box>
                    <AnimatedDot
                      size={10}
                      color="var(--mantine-color-brandPrimary-3)"
                    />
                  </Box>
                </MotionBox>
              </Group>
            );
          })}
        </Group>
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
