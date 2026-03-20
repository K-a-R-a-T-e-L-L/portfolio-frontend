import SitemapPage from "@/widgets/pages/SitemapPage/SitemapPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function SitemapRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <SitemapPage locale={locale} />;
}
