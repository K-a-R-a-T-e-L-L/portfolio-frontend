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
import styles from "./ProjectsSection.module.css";
import { nbspPrepositions } from "@/shared/lib/nbspPrepositionsю";
import MotionBox from "@/shared/ui/MotionBox/MotionBox";
import { Locale } from "@/shared/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ProjectsSectionProps {
  locale: Locale;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "projects" });

  const list = [
    {
      type: t("projects.0.badges.0"),
      technologiesBadge: t("projects.0.badges.1"),
      miniTitleFirst: t("projects.0.stack.title"),
      technologies: t.raw("projects.0.stack.list"),
      title: nbspPrepositions(t("projects.0.title")),
      description: nbspPrepositions(t("projects.0.description")),
      url: t("projects.0.url"),
      preview: t("projects.0.image"),
      miniTitleSecond: t("projects.0.characteristics.title"),
      characteristics: [
        {
          icon: IconUsers,
          text: nbspPrepositions(t("projects.0.characteristics.list.0")),
        },
        {
          icon: IconAffiliate,
          text: nbspPrepositions(t("projects.0.characteristics.list.1")),
        },
        {
          icon: IconDatabase,
          text: nbspPrepositions(t("projects.0.characteristics.list.2")),
        },
        {
          icon: IconShieldCheck,
          text: nbspPrepositions(t("projects.0.characteristics.list.3")),
        },
        {
          icon: IconChartBar,
          text: nbspPrepositions(t("projects.0.characteristics.list.4")),
        },
      ],
    },
    {
      type: t("projects.1.badges.0"),
      technologiesBadge: t("projects.1.badges.1"),
      miniTitleFirst: t("projects.1.stack.title"),
      technologies: t.raw("projects.1.stack.list"),
      title: nbspPrepositions(t("projects.1.title")),
      description: nbspPrepositions(t("projects.1.description")),
      url: t("projects.1.url"),
      preview: t("projects.1.image"),
      miniTitleSecond: t("projects.1.characteristics.title"),
      characteristics: [
        {
          icon: IconRocket,
          text: nbspPrepositions(t("projects.1.characteristics.list.0")),
        },
        {
          icon: IconLink,
          text: nbspPrepositions(t("projects.1.characteristics.list.1")),
        },
        {
          icon: IconUsers,
          text: nbspPrepositions(t("projects.1.characteristics.list.2")),
        },
        {
          icon: IconDatabase,
          text: nbspPrepositions(t("projects.1.characteristics.list.3")),
        },
        {
          icon: IconChartBar,
          text: nbspPrepositions(t("projects.1.characteristics.list.4")),
        },
      ],
    },
    {
      type: t("projects.2.badges.0"),
      technologiesBadge: t("projects.2.badges.1"),
      miniTitleFirst: t("projects.2.stack.title"),
      technologies: t.raw("projects.2.stack.list"),
      title: nbspPrepositions(t("projects.2.title")),
      description: nbspPrepositions(t("projects.2.description")),
      url: t("projects.2.url"),
      preview: t("projects.2.image"),
      miniTitleSecond: t("projects.2.characteristics.title"),
      characteristics: [
        {
          icon: IconUsers,
          text: nbspPrepositions(t("projects.2.characteristics.list.0")),
        },
        {
          icon: IconLink,
          text: nbspPrepositions(t("projects.2.characteristics.list.1")),
        },
        {
          icon: IconRocket,
          text: nbspPrepositions(t("projects.2.characteristics.list.2")),
        },
        {
          icon: IconShieldCheck,
          text: nbspPrepositions(t("projects.2.characteristics.list.3")),
        },
        {
          icon: IconChartBar,
          text: nbspPrepositions(t("projects.2.characteristics.list.4")),
        },
      ],
    },
  ];

  return (
    <Section ariaLabelledby="" id="project-section">
      <Stack w="100%">
        <NameSection name={t("name")} />
        <MotionBox
          start={{ opacity: 0.1, y: -20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
        >
          <Title
            order={2}
            fz={{ base: 48, md: 64 }}
            fw={900}
            className={"title"}
            style={{ fontWeight: "bold" }}
          >
            <span className={"title__primary_word"}>{t("ctaTitle")}</span>{" "}
            {t("title")}
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
        >
          <Text>{t("description")}</Text>
        </MotionBox>

        <Group
          w="100%"
          justify="center"
          mt={40}
          className={styles.bottom_group}
          align="stretch"
        >
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
                miniTitleFirst={project.miniTitleFirst}
                miniTitleSecond={project.miniTitleSecond}
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
                  miniTitleFirst={project.miniTitleFirst}
                  miniTitleSecond={project.miniTitleSecond}
                />
              );
            })}
          </Group>
        </Group>
      </Stack>
    </Section>
  );
};

export default ProjectsSection;
