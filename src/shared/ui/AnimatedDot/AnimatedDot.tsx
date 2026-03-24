import { Box } from "@mantine/core";
import styles from "./AnimatedDot.module.css";

interface AnimatedDotProps {
  size: number;
  color: string;
}

const AnimatedDot: React.FC<AnimatedDotProps> = (props) => {
  const { size, color } = props;

  return (
    <Box
      className={styles.dot}
      style={{ "--color": color, "--size": `${size}px` }}
    ></Box>
  );
};

export default AnimatedDot;
