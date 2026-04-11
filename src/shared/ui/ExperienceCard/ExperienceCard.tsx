import { Box, Card, Group, Paper, Stack, Text, Title } from "@mantine/core";
import styles from "./ExperienceCard.module.css";
import AnimatedDot from "../AnimatedDot/AnimatedDot";

interface ExperienceCardProps {
  date: string;
  title: string;
  work: string;
  skills: string;
  stack: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const { date, title, work, skills, stack } = props;

  return (
    <Paper
      radius="xl"
      p="xl"
      mb={100}
      maw={'100%'}
      className={styles.card}
    >
      <Box className={styles.card_decor}></Box>
      <Stack className={styles.stack_col}>
        <Text fz={{ base: 12, md: 14 }} c="brandSecondaryB.4">
          {date}
        </Text>
        <Title order={3} fz={{ base: 26, md: 32 }}>{title}</Title>
        <Text fz={{ base: 11, md: 12 }} opacity={0.8}>
          {work}
        </Text>
        <Text fz={{ base: 12, md: 14 }}>{skills}</Text>
        <Group mt={10} className={styles.group_stack}>
          {stack.map((el, index) => {
            return (
              <Card
                radius="xl"
                p="7px 10px"
                c="brandPrimary.2"
                w='auto'
                fz={{ base: 11, md: 12 }}
                key={index}
                bg='color-mix(in srgb, #06243d 70%, var(--mantine-color-brandSecondaryA-8) 30%)'
              >
                {el}
              </Card>
            );
          })}
        </Group>
      </Stack>
    </Paper>
  );
};

export default ExperienceCard;
