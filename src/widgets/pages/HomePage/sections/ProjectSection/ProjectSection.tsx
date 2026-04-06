import Section from "@/shared/ui/Section/Section";
import { Group, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import ProjectCard from "@/shared/ui/ProjectCard/ProjectCard";
import { MEDIA } from "@/shared/lib/media";
import {
  IconAffiliate,
  IconChartBar,
  IconDatabase,
  IconLink,
  IconRocket,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import styles from "./ProjectSection.module.css";
import { nbspPrepositions } from "@/shared/lib/nbspPrepositionsю";

interface ProjectSectionProps {}

const list = [
  {
    type: "UI Template Platform",
    technologiesBadge: "Next.js • NestJS • TypeORM",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Mantine UI",
      "TanStack Query",
      "next-intl",
      "JWT",
      "Swagger / OpenAPI",
      "Joi",
      "class-validator",
      "class-transformer",
      "Helmet",
      "cookie-parser",
      "Kubb",
      "D3.js",
      "Embla Carousel",
      "Swiper",
      "Swagger UI",
    ],
    title: nbspPrepositions(
      "My-UI — платформа шаблонов, где пользователи публикуют решения и конкурируют по рейтингу",
    ),
    description: nbspPrepositions(
      "Продакшн-сервис для UI-сообщества: авторы отправляют шаблоны на модерацию, публикуют их в каталог, собирают лайки и попадают в топ витрину. Реализованы профиль автора, избранное, категории, теги, статистика копирований и полный цикл управления своими шаблонами.",
    ),
    url: "https://my-ui.karatell.ru/ru",
    preview: MEDIA.images.myUiPreview.src,
    characteristics: [
      {
        icon: IconUsers,
        text: nbspPrepositions(
          "Пользовательский каталог с публикацией шаблонов и профилями авторов",
        ),
      },
      {
        icon: IconAffiliate,
        text: nbspPrepositions(
          "Лайки/избранное, копирование кода, модерация и рейтинговая витрина",
        ),
      },
      {
        icon: IconDatabase,
        text: nbspPrepositions(
          "Серверная архитектура на NestJS + PostgreSQL с масштабируемой моделью данных",
        ),
      },
      {
        icon: IconShieldCheck,
        text: nbspPrepositions(
          "Роли и контур модерации для контроля качества пользовательского контента",
        ),
      },
      {
        icon: IconChartBar,
        text: nbspPrepositions(
          "Метрики активности и популярности шаблонов для роста вовлеченности",
        ),
      },
    ],
  },
  {
    type: "E-commerce",
    technologiesBadge: "Next.js • NestJS • Redis",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "REST API",
      "TanStack Query",
      "Mantine UI",
      "Telegram Bot API",
      "amoCRM API",
      "AWS S3 SDK",
      "JWT",
      "Joi",
      "Swagger / OpenAPI",
      "Yandex Maps API",
      "Yandex Metrica",
      "Kubb",
    ],
    title: nbspPrepositions(
      "«Она хочет» — крупный коммерческий проект по продаже цветов с доставкой по России",
    ),
    description: nbspPrepositions(
      "Полноценная e-commerce платформа: каталог, корзина, оформление заказа, сценарии получателя и адресной доставки. В системе реализован мультигород (поддомены и города РФ), интеграции с amoCRM, Telegram-уведомлениями и операционной логикой обработки заказов.",
    ),
    url: "https://onahochet.ru/",
    preview: MEDIA.images.myUiPreview.src,
    characteristics: [
      {
        icon: IconRocket,
        text: nbspPrepositions(
          "Онлайн-продажа и доставка букетов в большом числе городов России",
        ),
      },
      {
        icon: IconLink,
        text: nbspPrepositions(
          "Интеграции: amoCRM, Telegram-оповещения, city-based маршрутизация",
        ),
      },
      {
        icon: IconUsers,
        text: nbspPrepositions(
          "Продуманный checkout: получатель, адресация, дата/время доставки, пожелания",
        ),
      },
      {
        icon: IconDatabase,
        text: nbspPrepositions(
          "Каталог, остатки, карточки товара и заказы с бизнес-логикой обработки",
        ),
      },
      {
        icon: IconChartBar,
        text: nbspPrepositions(
          "Мультигород и маршрутизация витрины под региональные сценарии",
        ),
      },
    ],
  },
  {
    type: "Edu Landing",
    technologiesBadge: "Next.js • Mantine • Mantine UI",
    technologies: [
      "Next.js",
      "React",
      "React DOM",
      "TypeScript",
      "Mantine UI",
      "@mantine/hooks",
      "@tabler/icons-react",
      "Tailwind CSS v4",
      "PostCSS",
      "ESLint",
      "Yandex Metrica",
    ],
    title: nbspPrepositions(
      "«Система запуска» — продающая платформа для запуска образовательного продукта",
    ),
    description: nbspPrepositions(
      "Продуктовый лендинг для курса Phenomen Club с глубокой структурой контента: Hero, программа по модулям, тарифная матрица, FAQ, trust-блоки и финальная воронка. Главная цель проекта — конверсия трафика в заявки и оплаты через понятный путь пользователя.",
    ),
    url: "https://courses.phenomenclub.ru",
    preview: MEDIA.images.myUiPreview.src,
    characteristics: [
      {
        icon: IconUsers,
        text: nbspPrepositions(
          "Сильная маркетинговая структура страницы под продажи образовательного продукта",
        ),
      },
      {
        icon: IconLink,
        text: nbspPrepositions(
          "Модульная подача программы и тарифов для роста конверсии",
        ),
      },
      {
        icon: IconRocket,
        text: nbspPrepositions(
          "Адаптивная воронка от первого экрана до заявки/оплаты без лишних шагов",
        ),
      },
      {
        icon: IconShieldCheck,
        text: nbspPrepositions(
          "Четкая UX-иерархия для высокого доверия и прозрачного оффера",
        ),
      },
      {
        icon: IconChartBar,
        text: nbspPrepositions(
          "Оптимизация под конверсию: акценты на ценности, возражениях и CTA",
        ),
      },
    ],
  },
];

const ProjectSection: React.FC<ProjectSectionProps> = () => {
  return (
    <Section ariaLabelledby="" id="project-section">
      <Stack w="100%">
        <NameSection name="Мои проекты" />
        <Title
          order={2}
          fz={{ base: 48, md: 64 }}
          fw={900}
          className={"title"}
          style={{ fontWeight: "bold" }}
        >
          <span className={"title__primary_word"}>Избранные</span> работы
        </Title>
        <Text>
          Реальные проекты, запущенные в продакшн и решающие бизнес-задачи.
        </Text>

        <Group w="100%" justify="center" mt={40} align="stretch">
          {list.map((project, index) => {
            if (index === 1 || index === 2) return;
            return (
              <ProjectCard
                key={index}
                type={project.type}
                technologiesBadge={project.technologiesBadge}
                technologies={project.technologies}
                title={project.title}
                description={project.description}
                url={project.url}
                preview={project.preview}
                characteristics={project.characteristics}
              />
            );
          })}
          <Group
            wrap="nowrap"
            className={styles.group_minor_cards}
            align="flex-start"
          >
            {list.map((project, index) => {
              if (index === 0) return;
              return (
                <ProjectCard
                  key={index}
                  type={project.type}
                  technologiesBadge={project.technologiesBadge}
                  technologies={project.technologies}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  preview={project.preview}
                  characteristics={project.characteristics}
                />
              );
            })}
          </Group>
        </Group>
      </Stack>
    </Section>
  );
};

export default ProjectSection;
