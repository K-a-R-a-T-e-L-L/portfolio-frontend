import { Card, Group, Paper, Stack, Text, Title } from "@mantine/core";
import styles from "./TechCard.module.css";

interface TechCardProps {
  className: string;
  title: string;
  stack: string[];
}

const TechCard: React.FC<TechCardProps> = (props) => {
  const { className, title, stack } = props;

  return (
    <Paper
      className={`${styles.container__card} ${className}`}
      w="100%"
      radius="md"
      p="md"
    >
      <Stack>
        <Title order={4} fz={{ base: 18, md: 22 }}>
          {title}
        </Title>
        <Group gap={10}>
          {stack.map((tech, index) => {
            return (
              <Card
                p="6px 12px"
                radius="xl"
                key={index}
                className={styles.techTag}
              >
                <Text fz={12} lh={1.2}>
                  {tech}
                </Text>
              </Card>
            );
          })}
        </Group>
      </Stack>
    </Paper>
  );
};

export default TechCard;
