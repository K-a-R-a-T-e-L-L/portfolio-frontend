"use client";
import useCountUp from "@/shared/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";

const AnimatedMetric = ({ metric }: { metric: string }) => {
  const [number, setNumber] = useState(0);
  const refSpan = useRef<HTMLSpanElement | null>(null);
  const value = useCountUp(refSpan, { to: number, duration: 2.4, decimals: 0 });
  const [nonDigits, setNonDigits] = useState("");

  useEffect(() => {
    if (metric === "") return;

    const digits = metric.replace(/\D/g, "");
    setNonDigits(metric.replace(/\d/g, ""));

    setNumber(digits ? Number(digits) : 0);
  }, [metric]);

  return (
    <span ref={refSpan}>{value === 0 ? 0 : `${value}${nonDigits}`}</span>
  );
};

export default AnimatedMetric;
