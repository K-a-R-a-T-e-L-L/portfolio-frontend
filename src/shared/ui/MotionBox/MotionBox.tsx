"use client";
import { ReactNode } from "react";
import {
  Easing,
  motion,
  MotionStyle,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";

interface MotionBoxProps {
  children: ReactNode;
  start: boolean | TargetAndTransition | VariantLabels | undefined;
  end: TargetAndTransition | VariantLabels | undefined;
  duration?: number;
  delay?: number;
  ease?: Easing | Easing[];
  styles?: MotionStyle;
  className?: string;
}

const MotionBox: React.FC<MotionBoxProps> = (props) => {
  const {
    children,
    start,
    end,
    duration = 0.5,
    delay,
    ease,
    styles,
    className,
  } = props;

  return (
    <motion.div
      style={{
        width: "fit-content",
        display: "inline-block",
        alignSelf: "flex-start",
        ...styles,
      }}
      className={className}
      initial={start}
      whileInView={end}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: duration, delay: delay, ease: ease }}
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
