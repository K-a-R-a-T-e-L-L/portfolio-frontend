import Section from "@/shared/ui/Section/Section";
import styles from "./AboutSection.module.css";
import { Group, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import { IconBrandTelegram, IconCpu, IconRocket } from "@tabler/icons-react";
import PerformanceCard from "@/shared/ui/PerformanceCard/PerformanceCard";
import InfiniteSlider from "@/shared/ui/InfiniteSlider/InfiniteSlider";
import { nbspPrepositions } from "@/shared/lib/nbspPrepositionsю";

interface AboutSectionProps {}

const list = [
  {
    Icon: IconRocket,
    title: "Продукт, который приносит результат",
    text: nbspPrepositions(
      "Делаю интерфейсы, которые выглядят премиально и работают быстро: четкая структура, логичные сценарии, высокая конверсия и готовность к масштабированию.",
    ),
    stack: ["UI/UX-фокус", "Core Web Vitals", "SEO-ready"],
  },
  {
    Icon: IconCpu,
    title: "Надежная архитектура и код",
    text: nbspPrepositions(
      "Строю поддерживаемую архитектуру с акцентом на качество: типизация, переиспользуемые компоненты, чистая структура и предсказуемое развитие проекта.",
    ),
    stack: ["Next.js + TypeScript", "FSD-подход", "API-first"],
  },
  {
    Icon: IconBrandTelegram,
    title: "Telegram и автоматизация",
    text: nbspPrepositions(
      "Разрабатываю Mini Apps, ботов и интеграции, которые сокращают ручные операции, ускоряют обработку заявок и дают прозрачную аналитику.",
    ),
    stack: ["Mini Apps", "Telegram Bots", "Business automation"],
  },
];

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <Section
      ariaLabelledby=""
      id="about-section"
      className={styles.about_section}
    >
      <Stack align="center" w="100%">
        <NameSection name="Обо мне" />
        <Title
          order={2}
          fz={{ base: 48, md: 64 }}
          fw={900}
          className={"title"}
          style={{ fontWeight: "bold" }}
          ta="center"
        >
          <span className={"title__primary_word"}>Цифровые решения </span>
          для роста бизнеса
        </Title>

        <Text ta="center" maw={980}>
          {nbspPrepositions(`
            Я занимаюсь fullstack-разработкой и специализируюсь на веб-продуктах и
            Telegram-решениях. Создаю и запускаю проекты под конкретные задачи
            бизнеса: от лендингов и корпоративных сайтов до API-сервисов,
            интеграций с CRM, Telegram Mini Apps и ботов с автоматизацией рутинных
            процессов
          `)}
        </Text>

        <Group mt={20} justify="center">
          {list.map((card, index) => {
            return (
              <PerformanceCard
                key={index}
                Icon={card.Icon}
                title={card.title}
                text={card.text}
                stack={card.stack}
              />
            );
          })}
        </Group>

        <InfiniteSlider
          items={[
            "FRONTEND РАЗРАБОТКА",
            "BACKEND РАЗРАБОТКА",
            "TELEGRAM MINI APPS",
            "TELEGRAM BOTS",
            "REST API И ИНТЕГРАЦИИ",
            "DEVOPS",
            "DOCKER-ОКРУЖЕНИЕ",
            "CI/CD ПАЙПЛАЙНЫ",
            "АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ",
            "AI-АВТОМАТИЗАЦИЯ",
            "ОПТИМИЗАЦИЯ ПРОИЗВОДИТЕЛЬНОСТИ",
            "ТЕХПОДДЕРЖКА И РАЗВИТИЕ ПРОЕКТА",
          ]}
        />
      </Stack>
    </Section>
  );
};

export default AboutSection;
