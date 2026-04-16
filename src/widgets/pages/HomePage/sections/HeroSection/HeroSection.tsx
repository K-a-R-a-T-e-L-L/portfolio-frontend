import Section from "@/shared/ui/Section/Section";
import styles from "./HeroSection.module.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MetricCard from "@/shared/ui/MetricCard/MetricCard";
import CodeCard from "@/shared/ui/CodeCard/CodeCard";
import {
  IconBrandSpeedtest,
  IconBusinessplan,
  IconDeviceMobile,
  IconLeaf,
} from "@tabler/icons-react";
import AnimatedDot from "@/shared/ui/AnimatedDot/AnimatedDot";
import { nbspPrepositions } from "@/shared/lib/nbspPrepositionsю";
import AnimatedTitle from "./AnimatedTitle";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";
import { Locale } from "@/shared/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

interface HeroSectionProps {
  locale: Locale;
}

const HeroSection: React.FC<HeroSectionProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <Section
      ariaLabelledby=""
      id="hero-section"
      styles={{ paddingTop: "20px" }}
      className={styles.hero_section}
    >
      <Grid w="100%">
        <GridCol span={{ base: 12, md: 7 }}>
          <Stack className={styles.left_col_stack}>
            <MotionBox
              start={{ opacity: 0.1, x: -100 }}
              end={{ opacity: 1, x: 0 }}
              className={styles.badge_motion}
            >
              <Box className={styles.badge}>
                <AnimatedDot size={6} color="cyan" />
                Full-time | freelance
              </Box>
            </MotionBox>
            <Title
              order={1}
              fz={{ base: 64, md: 86 }}
              fw={900}
              w="100%"
              style={{ fontWeight: "bold" }}
              ta={{ base: "center", md: "left" }}
              className={"title"}
              pos="relative"
            >
              <span
                style={{
                  opacity: 0.05,
                  position: "absolute",
                  width: "100%",
                  left: 0,
                }}
              >
                FULL-STACK <br /> DEVELOPER
              </span>
              <AnimatedTitle />
            </Title>
            <MotionBox
              start={{ opacity: 0.2, y: 10 }}
              end={{ opacity: 1, y: 0 }}
            >
              <Text
                fz={{ base: 18, md: 20 }}
                opacity={0.6}
                ta={{ base: "center", md: "left" }}
              >
                {nbspPrepositions(t("description"))}
              </Text>
            </MotionBox>
            <Group mt={10} className={styles.left_col_group_buttons}>
              <MotionBox
                start={{ opacity: 0.1, x: -10 }}
                end={{ opacity: 1, x: 0 }}
              >
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{
                    from: "brandPrimary.7",
                    to: "brandSecondaryA.5",
                  }}
                  radius="100px"
                >
                  {t("ctaButton")}
                </Button>
              </MotionBox>
              <MotionBox
                start={{ opacity: 0.1, x: 10 }}
                end={{ opacity: 1, x: 0 }}
              >
                <Button size="lg" variant="light" radius="100px">
                  {t("button")}
                </Button>
              </MotionBox>
            </Group>
            <Flex
              gap={10}
              wrap="wrap"
              mt={20}
              className={styles.left_col_flex_cards}
            >
              <MotionBox
                start={{ opacity: 0.1, y: 10 }}
                end={{ opacity: 1, y: 0 }}
              >
                <MetricCard title="4+" text={t("cards.first")} />
              </MotionBox>
              <MotionBox
                start={{ opacity: 0.1, y: 10 }}
                end={{ opacity: 1, y: 0 }}
              >
                <MetricCard title="30+" text={t("cards.second")} />
              </MotionBox>
              <MotionBox
                start={{ opacity: 0.1, y: 10 }}
                end={{ opacity: 1, y: 0 }}
              >
                <MetricCard title="5" text={t("cards.third")} />
              </MotionBox>
            </Flex>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 5 }}>
          <CodeCard>
            <Stack gap={10} mt={{ base: 20, md: 0 }}>
              <Group
                gap={10}
                wrap="nowrap"
                className={styles.group_cards}
                align="stretch"
              >
                <MotionBox
                  start={{ opacity: 0.1, y: -10, x: -10 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  styles={{ width: "50%" }}
                  className={styles.card}
                >
                  <MetricCard
                    w={"100%"}
                    title={
                      <>
                        <IconDeviceMobile
                          style={{ transform: "translateY(3px)" }}
                        />{" "}
                        100%
                      </>
                    }
                    text={t("cards.fourth")}
                    size="md"
                  />
                </MotionBox>
                <MotionBox
                  start={{ opacity: 0.1, y: -10, x: 10 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  styles={{ width: "50%" }}
                  className={styles.card}
                >
                  <MetricCard
                    w={"100%"}
                    title={
                      <>
                        <IconBrandSpeedtest
                          style={{ transform: "translateY(3px)" }}
                        />{" "}
                        {t("cards.fifth.title")}
                      </>
                    }
                    text={t("cards.fifth.description")}
                    size="md"
                  />
                </MotionBox>
              </Group>
              <Group
                gap={10}
                wrap="nowrap"
                className={styles.group_cards}
                align="stretch"
              >
                <MotionBox
                  start={{ opacity: 0.1, y: 10, x: -10 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  styles={{ width: "50%" }}
                  className={styles.card}
                >
                  <MetricCard
                    w={"100%"}
                    title={
                      <>
                        <IconLeaf style={{ transform: "translateY(3px)" }} />{" "}
                        {t("cards.sixth.title")}
                      </>
                    }
                    text={t("cards.sixth.description")}
                    size="md"
                  />
                </MotionBox>
                <MotionBox
                  start={{ opacity: 0.1, y: 10, x: 10 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  styles={{ width: "50%", height: "100%" }}
                  className={styles.card}
                >
                  <MetricCard
                    w={"100%"}
                    title={
                      <>
                        <IconBusinessplan
                          style={{ transform: "translateY(3px)" }}
                        />{" "}
                        {t("cards.seventh.title")}
                      </>
                    }
                    text={t("cards.seventh.description")}
                    size="md"
                  />
                </MotionBox>
              </Group>
            </Stack>
          </CodeCard>
        </GridCol>
      </Grid>
    </Section>
  );
};

export default HeroSection;
