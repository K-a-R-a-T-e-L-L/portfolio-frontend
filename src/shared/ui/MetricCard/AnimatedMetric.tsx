"use client";
import useCountUp from "@/shared/hooks/useCountUp";
import { useRef } from "react";

const AnimatedMetric = ({ metric }: { metric: string }) => {
  const number = Number(metric.replace(/\D/g, "")) || 0;
  const refSpan = useRef<HTMLSpanElement | null>(null);
  const value = useCountUp(refSpan, { to: number, duration: 2.4, decimals: 0 });
  const nonDigits = metric.replace(/\d/g, "");

  return (
    <span ref={refSpan}>{value === 0 ? 0 : `${value}${nonDigits}`}</span>
  );
};

export default AnimatedMetric;
