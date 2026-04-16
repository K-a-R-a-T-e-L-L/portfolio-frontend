import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootProvider from "@/processes/providers/RootProvider";
import { routing } from "@/shared/lib/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const t = await getTranslations({
    locale: normalizedLocale,
    namespace: "seo",
  });
  const title = t("title");
  const description = t("description");
  const siteName = t("siteName");
  const keywords = t.raw("keywords") as string[];
  const canonical = `${siteUrl}/${normalizedLocale}`;
  const localeTag = normalizedLocale === "ru" ? "ru_RU" : "en_US";
  const ogImage = `/preview.webp`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en`,
        ru: `${siteUrl}/ru`,
        "x-default": `${siteUrl}/${routing.defaultLocale}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      locale: localeTag,
      url: canonical,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <RootProvider locale={locale}>{children}</RootProvider>
    </NextIntlClientProvider>
  );
}
