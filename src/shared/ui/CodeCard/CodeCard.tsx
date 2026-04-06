import { JSX, ReactNode } from "react";
import styles from "./CodeCard.module.css";
import { Box, Group, Paper, Stack, Text } from "@mantine/core";

interface CodeCardProps {
  code: JSX.Element[];
  children: ReactNode;
}

const CodeCard: React.FC<CodeCardProps> = (props) => {
  const { code, children } = props;

  return (
    <Paper p="lg" radius="xl" className={styles.card}>
      <Stack gap={10}>
        <Group gap={10}>
          <Box className={styles.dot}></Box>
          <Box className={styles.dot}></Box>
          <Box className={styles.dot}></Box>
        </Group>
        <Paper className={styles.inside_card} radius="lg" p="md">
          <Stack gap={10} className={styles.code_text}>
            {code.map((row, index) => {
              return (
                <Text
                  fz={{ base: 12, md: 14 }}
                  pl={30}
                  pos="relative"
                  key={index}
                  className={styles.row}
                >
                  <span className={styles.code_text__number_row}>
                    {index + 1}
                  </span>
                  {row}
                </Text>
              );
            })}
          </Stack>
        </Paper>
        {children}
      </Stack>
    </Paper>
  );
};

export default CodeCard;
