import { Box, Card, Group, Paper, Stack, Text, Title } from "@mantine/core";
import styles from "./PerformanceCard.module.css";
import { IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface PerformanceCardProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  text: string;
  stack: string[];
}

const PerformanceCard: React.FC<PerformanceCardProps> = (props) => {
  const { Icon, title, text, stack } = props;

  return (
    <Paper w={{base: 300, md: 380}} h={{base: 400, md: 450}} p="lg" radius="lg" className={styles.card}>
      <Stack>
        <Box className={styles.card_box_icon}>
          <Icon size={40} color="var(--mantine-color-brandSecondaryA-1)" />
        </Box>
        <Title mt={10} order={3} fz={{ base: 22, md: 28 }} >
          {title}
        </Title>
        <Text opacity={0.6} fz={{ base: 14, md: 16 }}>{text}</Text>
        <Group gap={10}>
          {stack.map((el, index) => {
            return (
              <Card
                p="8px 15px"
                key={index}
                radius="xl"
                fz={{ base: 11, md: 12 }}
                c="var(--mantine-color-brandSecondaryA-3)"
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

export default PerformanceCard;
