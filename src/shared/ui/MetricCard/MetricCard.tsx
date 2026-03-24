import { MantineStyleProps, Paper, Stack, Text, Title } from "@mantine/core";
import styles from "./MetricCard.module.css";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string | ReactNode;
  text: string;
  w?: MantineStyleProps["w"];
  className?: string;
  size?: "xl" | "md";
}

const MetricCard: React.FC<MetricCardProps> = (props) => {
  const {
    title,
    text,
    className,
    size = "xl",
    w = { base: 200, md: 220 },
  } = props;

  return (
    <Paper p="md" radius="lg" w={w} className={`${styles.card} ${className}`}>
      <Stack gap={5}>
        <Title
          fz={size == "xl" ? { base: 24, md: 28 } : { base: 26, md: 22 }}
          order={3}
          c="brandPrimary.2"
        >
          {title}
        </Title>
        <Text
          fz={size == "xl" ? { base: 14, md: 16 } : { base: 14, md: 12 }}
          opacity={0.8}
        >
          {text}
        </Text>
      </Stack>
    </Paper>
  );
};

export default MetricCard;
