import { createTheme, type MantineColorsTuple } from "@mantine/core";

export const brandPrimary: MantineColorsTuple = [
  "#e8fffb",
  "#c8fdf4",
  "#97f8e8",
  "#66f1dd",
  "#44e7d2",
  "#2ad8c2",
  "#1db4a2",
  "#148a7d",
  "#0f665d",
  "#0b4a43",
];

export const brandSecondaryA: MantineColorsTuple = [
  "#eaf4ff",
  "#cfe8ff",
  "#9fd2ff",
  "#70bbff",
  "#45a4ff",
  "#218ef4",
  "#1771c3",
  "#0f5695",
  "#0a3d6b",
  "#072a49",
];

export const brandSecondaryB: MantineColorsTuple = [
  "#e7ecff",
  "#cad5ff",
  "#9eafff",
  "#7488ff",
  "#4f65ff",
  "#3248ef",
  "#2438bd",
  "#1a2a8f",
  "#131e66",
  "#0c143f",
];

export const dark: MantineColorsTuple = [
  "#c1ccdf",
  "#a6b2c9",
  "#8896af",
  "#6c7a95",
  "#54617c",
  "#3f4b63",
  "#2b354a",
  "#1b2438",
  "#0f1728",
  "#070d1a",
];

export const themeMantine = createTheme({
  primaryColor: "brandSecondaryA",
  primaryShade: { light: 5, dark: 4 },
  black: "#060b17",
  white: "#ffffff",
  colors: {
    dark,
    brandPrimary,
    brandSecondaryA,
    brandSecondaryB,
  },
  defaultRadius: "md",
  focusRing: "auto",
  fontFamily:
    "var(--font-inter, Inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  lineHeights: {
    xs: "1.35",
    sm: "1.45",
    md: "1.6",
    lg: "1.6",
    xl: "1.5",
  },
  headings: {
    fontFamily:
      "var(--font-manrope, Manrope), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "2.25rem", lineHeight: "1.1", fontWeight: "700" },
      h2: { fontSize: "1.875rem", lineHeight: "1.15", fontWeight: "700" },
      h3: { fontSize: "1.5rem", lineHeight: "1.2", fontWeight: "700" },
      h4: { fontSize: "1.25rem", lineHeight: "1.25", fontWeight: "600" },
      h5: { fontSize: "1.125rem", lineHeight: "1.3", fontWeight: "600" },
      h6: { fontSize: "1rem", lineHeight: "1.35", fontWeight: "600" },
    },
  },
});
