import Section from "@/shared/ui/Section/Section";
import { Group, Stack, Text, Title } from "@mantine/core";
import NameSection from "@/shared/ui/NameSection/NameSection";
import ProjectCard from "@/shared/ui/ProjectCard/ProjectCard";
import { MEDIA } from "@/shared/lib/media";
import {
  IconAffiliate,
  IconLink,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import styles from "./ProjectSection.module.css";

interface ProjectSectionProps {}

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
        <Text>Реальные проекты, запущенные в продакшн и решающие задачи бизнеса.</Text>

        <Group w="100%" justify="center" mt={40}>
          <ProjectCard
            typeCard="main"
            type="Template Community Platform"
            technologiesBadge="Next.js • NestJS • PostgreSQL"
            technologies={[
              "Next.js",
              "NestJS",
              "PostgreSQL",
              "Prisma",
              "TypeScript",
              "Docker",
              "JWT Auth",
              "CI/CD",
            ]}
            title="My-UI — платформа шаблонов, где пользователи публикуют решения и конкурируют по лайкам"
            description="Продакшн-сервис для UI-сообщества: авторы отправляют шаблоны на модерацию, публикуют их в каталог, собирают лайки и попадают в топ витрину. Реализованы профиль автора, избранное, категории, теги, статистика копирований и полный цикл управления своими шаблонами."
            url="https://my-ui.karatell.ru/ru"
            preview={MEDIA.images.myUiPreview.src}
            characteristics={[
              {
                icon: IconUsers,
                text: "Пользовательский каталог с публикацией шаблонов и профилями авторов",
              },
              {
                icon: IconAffiliate,
                text: "Лайки/избранное, копирование кода, модерация и рейтинг сообщества",
              },
            ]}
          />

          <Group wrap="nowrap" className={styles.group_minor_cards}>
            <ProjectCard
              typeCard="minor"
              type="E-commerce / Flower Delivery"
              technologiesBadge="Next.js • NestJS • amoCRM"
              technologies={[
                "Next.js",
                "NestJS",
                "TypeScript",
                "REST API",
                "SEO",
                "Telegram Bot",
                "amoCRM",
                "S3 Storage",
              ]}
              title="«Она хочет» — крупный коммерческий проект по продаже цветов с доставкой по России"
              description="Полноценная e-commerce платформа: каталог, корзина, оформление заказа, сценарии получателя и адресной доставки. В системе реализован мультигород (поддомены и города РФ), интеграции с amoCRM, Telegram-уведомлениями и операционной логикой обработки заказов."
              url="https://onahochet.ru/"
              preview={MEDIA.images.myUiPreview.src}
              characteristics={[
                {
                  icon: IconRocket,
                  text: "Онлайн-продажа и доставка букетов в большом числе городов России",
                },
                {
                  icon: IconLink,
                  text: "Интеграции: amoCRM, Telegram-оповещения, city-based маршрутизация",
                },
              ]}
            />

            <ProjectCard
              typeCard="minor"
              type="Education / Launch Funnel"
              technologiesBadge="Next.js • Landing System • Conversion UX"
              technologies={[
                "Next.js",
                "TypeScript",
                "Mantine UI",
                "Adaptive Layout",
                "SEO meta",
                "Program builder",
                "Tariff matrix",
                "Lead-oriented UX",
              ]}
              title="«Система запуска» — продающая платформа для запуска образовательного продукта"
              description="Продуктовый лендинг для курса Phenomen Club с глубокой структурой контента: Hero, программа по модулям, тарифная матрица, FAQ, trust-блоки и финальная воронка. Главная цель проекта — конверсия трафика в заявки и оплаты через понятный путь пользователя."
              url="https://courses.phenomenclub.ru"
              preview={MEDIA.images.myUiPreview.src}
              characteristics={[
                {
                  icon: IconUsers,
                  text: "Сильная маркетинговая структура страницы под продажи образовательного продукта",
                },
                {
                  icon: IconLink,
                  text: "Модульная подача программы и тарифов для повышения конверсии",
                },
              ]}
            />
          </Group>
        </Group>
      </Stack>
    </Section>
  );
};

export default ProjectSection;
