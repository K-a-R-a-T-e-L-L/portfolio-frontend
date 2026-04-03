import {
  Box,
  Card,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./ProjectCard.module.css";
import { IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import ProjectLinkActions from "./ProjectLinkActions";

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  url: string;
  preview: string;
  technologiesBadge: string;
  technologies: string[];
  characteristics: {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    text: ReactNode;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const {
    type,
    title,
    description,
    url,
    preview,
    technologiesBadge,
    technologies,
    characteristics,
  } =
    props;
  return (
    <Paper
      w={"100%"}
      p="xl"
      radius="xl"
      className={styles.card}
    >
      <Stack gap="lg">
        <Group justify="space-between" gap={12}>
          <Card p="10px 20px" radius="xl" className={styles.badge}>
            {type}
          </Card>
          <Card p="10px 20px" radius="xl" className={styles.badge}>
            {technologiesBadge}
          </Card>
        </Group>

        <Title order={3} fz={{ base: 22, md: 28 }} maw={860}>
          {title}
        </Title>

        <Text opacity={0.68} fz={{ base: 14, md: 16 }} maw={760}>
          {description}
        </Text>

        <Card className={styles.insideCard} p="md" radius="lg">
          <Stack gap="md">
            <Group className={styles.windowBar} wrap="nowrap">
              <Group wrap="nowrap" gap={8} className={styles.windowDots}>
                <Box className={styles.colorDot} />
                <Box className={styles.colorDot} />
                <Box className={styles.colorDot} />
              </Group>

              <Card radius="xl" className={styles.url} p="8px 14px">
                <Text className={styles.urlText} title={url}>
                  {url}
                </Text>
              </Card>

              <ProjectLinkActions
                url={url}
                iconClassName={styles.windowActionIcon}
              />
            </Group>

            <Box className={styles.previewFrame} style={{'--bg-blur': `url(${preview})`}}>
              <Image
                fit="contain"
                src={preview}
                alt={title}
                className={styles.previewImage}
              />
              <Box className={styles.previewOverlay} />
            </Box>

            <Card p="md" radius="lg" className={styles.featuresPanel}>
              <Stack gap={10}>
                <Text fw={600} c="var(--mantine-color-brandPrimary-1)">
                  Ключевые характеристики
                </Text>
                <Group gap={10} wrap="wrap">
                  {characteristics.map((el, index) => {
                    const Icon = el.icon;

                    return (
                      <Card
                        key={index}
                        p="10px 12px"
                        radius="md"
                        className={styles.featureCard}
                      >
                        <Group wrap="nowrap" align="center" gap={8}>
                          <Box className={styles.featureIconWrap}>
                            <Icon size={16} />
                          </Box>
                          <Text fz={{ base: 12, md: 13 }} lh={1.35}>
                            {el.text}
                          </Text>
                        </Group>
                      </Card>
                    );
                  })}
                </Group>

                <Stack gap={8} mt={6}>
                  <Text fw={600} c="var(--mantine-color-brandPrimary-1)">
                    Полный стек проекта
                  </Text>
                  <Group gap={8} wrap="wrap">
                    {technologies.map((tech) => (
                      <Card
                        key={tech}
                        p="6px 12px"
                        radius="xl"
                        className={styles.techTag}
                      >
                        <Text fz={12} lh={1.2}>
                          {tech}
                        </Text>
                      </Card>
                    ))}
                  </Group>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Card>
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
