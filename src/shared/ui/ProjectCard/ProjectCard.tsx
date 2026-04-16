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
import MotionBox from "../MotionBox/MotionBox";

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
  miniTitleFirst: string;
  miniTitleSecond: string;
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
    miniTitleFirst,
    miniTitleSecond,
  } = props;
  return (
    <Paper w={"100%"} p="xl" radius="xl" className={styles.card}>
      <Stack gap="lg">
        <Group justify="space-between" gap={12}>
          <MotionBox
            start={{ opacity: 0.1, x: -10 }}
            end={{ opacity: 1, y: 0, x: 0 }}
          >
            <Card p="10px 20px" radius="xl" className={styles.badge}>
              {type}
            </Card>
          </MotionBox>

          <MotionBox
            start={{ opacity: 0.1, x: 10 }}
            end={{ opacity: 1, y: 0, x: 0 }}
          >
            <Card p="10px 20px" radius="xl" className={styles.badge}>
              {technologiesBadge}
            </Card>
          </MotionBox>
        </Group>

        <MotionBox
          start={{ opacity: 0.1, y: -20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
        >
          <Title order={3} fz={{ base: 22, md: 28 }} maw={860}>
            {title}
          </Title>
        </MotionBox>

        <MotionBox
          start={{ opacity: 0.1, y: 20 }}
          end={{ opacity: 1, y: 0, x: 0 }}
        >
          <Text opacity={0.68} fz={{ base: 14, md: 16 }} maw={760}>
            {description}
          </Text>
        </MotionBox>

        <Card className={styles.insideCard} p="md" radius="lg">
          <Stack gap="md">
            <Group className={styles.windowBar} wrap="nowrap">
              <Group wrap="nowrap" gap={8} className={styles.windowDots}>
                {[1, 2, 3].map((_, index) => {
                  return (
                    <MotionBox
                      key={index}
                      start={{ opacity: 0.1, x: -10 }}
                      end={{ opacity: 1, y: 0, x: 0 }}
                      delay={index * 0.2}
                    >
                      <Box
                        className={`${styles.colorDot}`}
                        style={{
                          "--bg":
                            index == 0
                              ? "#ff5f57"
                              : index == 1
                                ? "#ffcb47"
                                : "#28c840",
                        }}
                      />
                    </MotionBox>
                  );
                })}
              </Group>

              <Card radius="xl" className={styles.url} p="8px 14px">
                <MotionBox
                  start={{ opacity: 0.1, x: -10 }}
                  end={{ opacity: 1, y: 0, x: 0 }}
                >
                  <Text className={styles.urlText} title={url}>
                    {url}
                  </Text>
                </MotionBox>
              </Card>

              <ProjectLinkActions
                url={url}
                iconClassName={styles.windowActionIcon}
              />
            </Group>

            <Box
              className={styles.previewFrame}
              style={{ "--bg-blur": `url(${preview})` }}
            >
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
                <Title
                  order={4}
                  fw={600}
                  c="var(--mantine-color-brandPrimary-1)"
                >
                  {miniTitleSecond}
                </Title>
                <Group gap={10} wrap="wrap">
                  {characteristics.map((el, index) => {
                    const Icon = el.icon;

                    return (
                      <MotionBox
                        key={index}
                        start={{ opacity: 0.1, y: -10 }}
                        end={{ opacity: 1, y: 0, x: 0 }}
                        delay={index * 0.2}
                      >
                        <Card
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
                      </MotionBox>
                    );
                  })}
                </Group>

                <Stack gap={8} mt={6}>
                  <Text fw={600} c="var(--mantine-color-brandPrimary-1)">
                    {miniTitleFirst}
                  </Text>
                  <Group gap={8} wrap="wrap">
                    {technologies.map((tech, index) => (
                      <MotionBox
                        key={index}
                        start={{ opacity: 0.1, x: -10 }}
                        end={{ opacity: 1, y: 0, x: 0 }}
                        delay={index * 0.1}
                      >
                        <Card
                          p="6px 12px"
                          radius="xl"
                          className={styles.techTag}
                        >
                          <Text fz={12} lh={1.2}>
                            {tech}
                          </Text>
                        </Card>
                      </MotionBox>
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
