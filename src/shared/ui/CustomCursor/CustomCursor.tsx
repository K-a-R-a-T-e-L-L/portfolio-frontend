"use client";
import { useGetCursorCoordinates } from "@/shared/hooks/useGetCursorCoordinates";
import { useEffect } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [x, y] = useGetCursorCoordinates();

  //   useEffect(() => {
  //     console.log(x, y);

  //   }, [x, y])

  return (
    <span
      className={styles.cursor}
      style={{ transform: `translate(calc(${x}px - 20px), calc(${y}px - 20px))` }}
    >
    </span>
  );
};

export default CustomCursor;
