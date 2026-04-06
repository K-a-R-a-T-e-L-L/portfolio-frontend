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

interface HeroSectionProps {}

const listRowsCode = [
  <span>
    <span className={styles.keyword}>const</span>
    <span className={styles.identifier}> candidate</span>
    <span className={styles.punctuator}> =</span>
    <span className={styles.staples}> {"{"}</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>role</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Web Developer"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>focus</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Frontend + Backend"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>strength</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Design-driven development"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>stack</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.staples}> {"["}</span>
    <span className={styles.string}> "Next.js"</span>
    <span className={styles.punctuator}>,</span>
    <span className={styles.string}> "NestJS"</span>
    <span className={styles.punctuator}>,</span>
    <span className={styles.string}> "TypeScript"</span>
    <span className={styles.staples}> {"]"}</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>value</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}>
      {" "}
      "Pixel-perfect + performant + reliable"
    </span>
  </span>,
  <span className={styles.staples}> {"}"}</span>,
];

const HeroSection: React.FC<HeroSectionProps> = () => {
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
            <Box className={styles.badge}>
              <AnimatedDot size={6} color="cyan" />
              Full-time | freelance
            </Box>
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
            <Text
              fz={{ base: 18, md: 20 }}
              opacity={0.6}
              ta={{ base: "center", md: "left" }}
            >
              {nbspPrepositions(`
                Меня зовут Кирилл. Я веб-разработчик, специализирующийся на
                отточенных интерфейсах, масштабируемой архитектуре и реализации
                бизнес-идей. Превращаю идеи в адаптивные,
                высокопроизводительные решения, которые выглядят премиально и
                приносят результат.
              `)}
            </Text>
            <Group mt={10} className={styles.left_col_group_buttons}>
              <Button
                size="lg"
                variant="gradient"
                gradient={{
                  from: "brandPrimary.7",
                  to: "brandSecondaryA.5",
                }}
                radius="100px"
              >
                Связаться со мной
              </Button>
              <Button size="lg" variant="light" radius="100px">
                Посмотреть работы
              </Button>
            </Group>
            <Flex
              gap={10}
              wrap="wrap"
              mt={20}
              className={styles.left_col_flex_cards}
            >
              <MetricCard title="4+" text="Года коммерческой разработки" />
              <MetricCard title="30+" text="Реализованных проектов" />
              <MetricCard title="5" text="Наставленных разработчиков" />
            </Flex>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 5 }}>
          <CodeCard code={listRowsCode}>
            <Stack gap={10} mt={{ base: 20, md: 0 }}>
              <Group
                gap={10}
                wrap="nowrap"
                className={styles.group_cards}
                align="stretch"
              >
                <MetricCard
                  w={"50%"}
                  title={
                    <>
                      <IconDeviceMobile
                        style={{ transform: "translateY(3px)" }}
                      />{" "}
                      100%
                    </>
                  }
                  text="Адаптивность для всех видов устройств"
                  className={styles.card}
                  size="md"
                />
                <MetricCard
                  w={"50%"}
                  title={
                    <>
                      <IconBrandSpeedtest
                        style={{ transform: "translateY(3px)" }}
                      />{" "}
                      {"< 2 с"}
                    </>
                  }
                  text="Скорость загрузки веб-приложений"
                  className={styles.card}
                  size="md"
                />
              </Group>
              <Group
                gap={10}
                wrap="nowrap"
                className={styles.group_cards}
                align="stretch"
              >
                <MetricCard
                  w={"50%"}
                  title={
                    <>
                      <IconLeaf style={{ transform: "translateY(3px)" }} />{" "}
                      Чистый
                    </>
                  }
                  text="Код, переиспользуемые компоненты и поддерживаемая архитектура."
                  className={styles.card}
                  size="md"
                />
                <MetricCard
                  w={"50%"}
                  title={
                    <>
                      <IconBusinessplan
                        style={{ transform: "translateY(3px)" }}
                      />{" "}
                      Влияние
                    </>
                  }
                  text="Фокус на конверсию, удержание пользователей и бизнес-цели."
                  className={styles.card}
                  size="md"
                />
              </Group>
            </Stack>
          </CodeCard>
        </GridCol>
      </Grid>
    </Section>
  );
};

export default HeroSection;
