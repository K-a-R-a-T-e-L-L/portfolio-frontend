import Section from "@/shared/ui/Section/Section";
import styles from "./StackSection.module.css";
import { Box, Paper, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import TechCard from "@/shared/ui/TechCard/TechCard";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";

interface StackSectionProps {}

const list = [
  {
    title: "Frontend",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "next-intl",
      "TanStack Query",
      "Mantine UI",
      "Tailwind CSS",
      "SCSS",
      "Responsive UI",
      "SSR / SSG",
      "State management",
    ],
  },
  {
    title: "Backend",
    stack: [
      "NestJS",
      "Node.js",
      "TypeORM",
      "JWT",
      "REST API",
      "RBAC",
      "Swagger / OpenAPI",
      "Webhooks",
      "Background jobs",
      "Pagination / filtering",
    ],
  },
  {
    title: "Data & Storage",
    stack: [
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "SQL",
      "Database migrations",
      "Indexing",
      "Query optimization",
      "Caching strategies",
      "Data modeling",
    ],
  },
  {
    title: "Integrations",
    stack: [
      "Telegram Bot API",
      "Telegram Mini Apps",
      "amoCRM API",
      "S3 integrations",
      "OAuth2 / Social Auth",
      "Payment gateway APIs",
      "External REST APIs",
      "Webhook integrations",
      "Email integrations (SMTP)",
    ],
  },
  {
    title: "Security & Validation",
    stack: [
      "Joi",
      "class-validator",
      "class-transformer",
      "Helmet",
      "cookie-parser",
      "bcrypt",
      "Input validation",
      "AuthN/AuthZ (Nest Guards)",
      "CORS / security headers",
      "Rate limiting basics",
    ],
  },
  {
    title: "Tooling & Delivery",
    stack: [
      "Kubb",
      "ESLint",
      "Prettier",
      "Git",
      "CI/CD",
      "Docker",
      "DevOps",
      "Figma",
      "PostCSS",
    ],
  },
  {
    title: "Quality",
    stack: [
      "Code Review",
      "Team development",
      "Performance optimization",
      "Technical SEO",
      "Monitoring basics",
    ],
  },
];

const getY = (index: number) => {
  return index === 0 || index === 1 ? -30 : index === 6 ? 30 : 0;
};
const getX = (index: number) => {
  return index === 0 || index === 2 || index === 3
    ? -30
    : index === 1 || index === 4 || index === 5
      ? 30
      : 0;
};

const StackSection: React.FC<StackSectionProps> = () => {
  return (
    <Section ariaLabelledby="" id="stack-section">
      <Stack w="100%" align="center">
        <NameSection name="Мой стек" />
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
            <span className={"title__primary_word"}>Инструменты,</span> которые
            я использую
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
          styles={{ width: "100%" }}
        >
          <Text ta="center">
            Не просто набор технологий, а инструменты, из которых собираются
            быстрые, стабильные и масштабируемые продукты.
          </Text>
        </MotionBox>

        <Paper
          w="100%"
          radius="xl"
          p="xl"
          mt={10}
          bg="transparent"
          className={styles.map}
        >
          <Box className={styles.map__container}>
            {list.map((card, index) => {
              return (
                <MotionBox
                  key={index}
                  start={{
                    opacity: 0.1,
                    y: getY(index),
                    x: getX(index),
                  }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                  delay={index * 0.1}
                  className={styles.tech_card}
                  duration={0.7}
                >
                  <TechCard
                    title={`${card.title} ${index}`}
                    stack={card.stack}
                  />
                </MotionBox>
              );
            })}

            <MotionBox
              start={{
                opacity: 0.1,
                y: -30,
              }}
              end={{ opacity: 1, y: 0, x: 0 }}
              duration={0.7}
              className={styles.map__center}
            >
              <Stack align="center" gap={10}>
                <Title order={3} fz={{ base: 22, md: 26 }} ta="center">
                  Технологии, библиотеки и инструменты, которые формируют основу
                  моей работы.
                </Title>
                <Text ta="center" opacity={0.7}></Text>
              </Stack>
            </MotionBox>
          </Box>
        </Paper>
      </Stack>
    </Section>
  );
};

export default StackSection;
