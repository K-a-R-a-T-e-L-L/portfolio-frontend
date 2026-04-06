import Section from "@/shared/ui/Section/Section";
import styles from "./ExperienceSection.module.css";
import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import ExperienceCard from "@/shared/ui/ExperienceCard/ExperienceCard";
import { MEDIA } from "@/shared/lib/media";
import AnimatedDot from "@/shared/ui/AnimatedDot/AnimatedDot";

interface ExperienceSectionProps {}

const list = [
  {
    date: "2021 — 2022",
    title: "Обучение JavaScript",
    work: "Университет «Синергия» · годовой курс",
    skills:
      "Прошел полный цикл подготовки по JavaScript-разработке: фундамент языка, работа с DOM, асинхронность, базовая архитектура клиентских приложений и практика на учебных проектах.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "REST API",
      "React",
      "Express",
      "SCSS",
      "Figma",
    ],
  },
  {
    date: "2022 — 2024",
    title: "Фриланс-разработка",
    work: "Проектная работа · биржи и прямые заказы",
    skills:
      "Вел клиентские заказы под ключ: лендинги, корпоративные сайты, админ-панели и доработки существующих проектов. Работал с ТЗ, сроками, правками и запуском в продакшн.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "API интеграции",
      "DevOps",
      "Nest.js",
      "Tailwind CSS",
    ],
  },
  {
    date: "2024 — 2025",
    title: "Frontend Developer / Mentor",
    work: "Davtian | Kaskad",
    skills:
      "Разрабатывал сайт компании, внедрял и поддерживал ключевые интерфейсы. Параллельно помогал менее опытным frontend-разработчикам: ревью кода, разбор задач, выстраивание рабочих подходов.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "UI/UX",
      "Code Review",
      "Team development",
      "Kubb",
      "OpenApi",
      "SEO optimization",
    ],
  },
  {
    date: "2025 — настоящее время",
    title: "Fullstack / Product Developer",
    work: "ИП «Она хочет»",
    skills:
      "Развиваю e-commerce платформу и участвую в запуске стартап-проектов: проектирование функционала, интеграции, поддержка продакшна, оптимизация бизнес-процессов и развитие новых направлений.",
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "amoCRM",
      "Telegram Bot API",
      "Telegram Mini Apps",
      "AWS S3",
      "DevOps",
      "SEO optimization",
      "Mantine UI",
    ],
  },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  return (
    <Section ariaLabelledby="" id="experience-section">
      <Stack w="100%" align="center" pos='relative'>
        <NameSection name="Мой опыт" />
        <Title
          order={2}
          fz={{ base: 48, md: 64 }}
          fw={900}
          className={"title"}
          ta="center"
          style={{ fontWeight: "bold" }}
        >
          Путь в<span className={"title__primary_word"}> разработке</span>
        </Title>
        <Text ta="center">
          От обучения и фриланса до коммерческой разработки, наставничества
          и продуктовой работы.
        </Text>

        <Group w="100%" mt={40} className={styles.box_list}>
          <Image src={MEDIA.images.line.src} pos='absolute' w='100%' top={0} h='100%' />
          {list.map((el, index) => {
            return (
              <Group key={index} w="100%" pos='relative' className={styles.box_card}>
                <ExperienceCard
                  key={index}
                  date={el.date}
                  title={el.title}
                  work={el.work}
                  skills={el.skills}
                  stack={el.stack}
                />
                <Box className={styles.dot}>
                  <AnimatedDot size={10} color="var(--mantine-color-brandPrimary-3)"/>
                </Box>
              </Group>
            );
          })}
        </Group>
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
