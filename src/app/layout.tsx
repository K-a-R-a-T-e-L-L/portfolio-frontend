import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { siteUrl } from "@/shared/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Кирилл Сухоруков — Fullstack-разработчик",
    template: "%s",
  },
  description:
    "Разработка веб-продуктов: CRM, Mini Apps, PWA, боты Telegram/MAX, сайты и интернет-магазины.",
  icons: { icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }] },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href={`/fonts/inter-${locale === "ru" ? "cyrillic" : "latin"}.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`/fonts/manrope-${locale === "ru" ? "cyrillic" : "latin"}.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
