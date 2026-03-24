import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Next App Template",
    template: "%s | Next App Template",
  },
  description:
    "Scalable Next.js template with Mantine, next-intl, React Query and Kubb.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${inter.variable} ${manrope.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
