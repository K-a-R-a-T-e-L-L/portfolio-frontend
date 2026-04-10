import { Text } from "@mantine/core";
import styles from "./NameSection.module.css";
import MotionBox from "../MotionBox/MotionBox";

interface NameSectionProps {
  name: string;
}

const NameSection: React.FC<NameSectionProps> = (props) => {
  const { name } = props;

  return (
    <MotionBox
      start={{ opacity: 0.1, x: -30 }}
      end={{ opacity: 1, x: 0 }}
      styles={{ width: "50%" }}
      className={styles.card}
    >
      <Text fz={{ base: 12, md: 14 }} className={styles.name_section}>
        {name}
      </Text>
    </MotionBox>
  );
};

export default NameSection;
