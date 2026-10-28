import type { MetadataRoute } from "next";
import { siteUrl } from "@/shared/lib/site-url";
import { routing } from "@/shared/lib/i18n/routing";
export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages: { ru: `${siteUrl}/ru`, en: `${siteUrl}/en` } },
    priority: 1,
  }));
}
