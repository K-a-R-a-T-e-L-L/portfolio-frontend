import { Text } from "@mantine/core";
import styles from "./NameSection.module.css";

interface NameSectionProps {
  name: string;
}

const NameSection: React.FC<NameSectionProps> = (props) => {
  const {name} = props;

  return <Text fz={{base: 12, md: 14}} className={styles.name_section}>{name}</Text>;
};

export default NameSection;
