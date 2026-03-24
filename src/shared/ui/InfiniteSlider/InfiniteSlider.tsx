import { Box } from "@mantine/core";
import styles from "./InfiniteSlider.module.css";
import AnimatedDot from "../AnimatedDot/AnimatedDot";

interface InfiniteSliderProps {
    items: string[]
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = (props) => {
  const {items} = props;
  const loopItems = [...items, ...items];

  return (
    <Box mt={40} w="100%" className={styles.slider}>
      <div className={styles.slider__viewport}>
        <div className={styles.slider__track}>
          {loopItems.map((item, index) => (
            <div className={styles.slider__item} key={`${item}-${index}`}>
              <AnimatedDot size={8} color=" var(--mantine-color-brandSecondaryA-3)" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default InfiniteSlider;
