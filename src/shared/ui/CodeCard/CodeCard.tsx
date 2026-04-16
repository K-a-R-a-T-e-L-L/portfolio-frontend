import { ReactNode } from "react";
import styles from "./CodeCard.module.css";
import { Box, Group, Paper, Stack, Text } from "@mantine/core";

interface CodeCardProps {
  children: ReactNode;
}

const listRowsCode = [
  <span>
    <span className={styles.keyword}>const</span>
    <span className={styles.identifier}> candidate</span>
    <span className={styles.punctuator}> =</span>
    <span className={styles.staples}> {"{"}</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>role</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Web Developer"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>focus</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Frontend + Backend"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>strength</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}> "Design-driven development"</span>
    <span className={styles.punctuator}>,</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>stack</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.staples}> {"["}</span>
    <span className={styles.string}> "Next.js"</span>
    <span className={styles.punctuator}>,</span>
    <span className={styles.string}> "NestJS"</span>
    <span className={styles.punctuator}>,</span>
    <span className={styles.string}> "TypeScript"</span>
    <span className={styles.staples}> {"]"}</span>
  </span>,
  <span className={styles.inside}>
    <span className={styles.identifier}>value</span>
    <span className={styles.punctuator}> :</span>
    <span className={styles.string}>
      {" "}
      "Pixel-perfect + performant + reliable"
    </span>
  </span>,
  <span className={styles.staples}> {"}"}</span>,
];

const CodeCard: React.FC<CodeCardProps> = (props) => {
  const { children } = props;

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
            {listRowsCode.map((row, index) => {
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
