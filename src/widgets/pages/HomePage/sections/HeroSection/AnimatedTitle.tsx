"use client";
import { usePrintingTextAnimation } from "@/shared/hooks/usePrintingTextAnimation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedTitle = () => {
  const [result1] = usePrintingTextAnimation(["FRONT ULL-STACK"], 100, "RONT");
  const [result2] = usePrintingTextAnimation(["DEVELOPER"], 50, "S");
  const [symbol, setSymbol] = useState(<>&nbsp;</>);

  useEffect(() => {
    if (result2 !== "") setSymbol(<></>);
  }, [result2]);

  return (
    <motion.span
      initial={{ opacity: 0, rotate: -6, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, rotate: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {result1} <br />{" "}
      <span className={"title__primary_word"} style={{ textAlign: "center" }}>
        {result2} {symbol}
      </span>
    </motion.span>
  );
};

export default AnimatedTitle;
