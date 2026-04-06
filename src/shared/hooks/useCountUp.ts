import { animate, useInView } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface useCountUpOptions {
  to: number;
  duration: number;
  decimals: number
}

const useCountUp = (
  ref: RefObject<HTMLElement | null>,
  { to, duration, decimals }: useCountUpOptions,
) => {
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => {
        const p = 10 ** decimals;
        setValue(Math.round(latest * p) / p);
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  return value;
};

export default useCountUp;
