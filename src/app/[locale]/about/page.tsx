import AboutPage from "@/widgets/pages/AboutPage/AboutPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function AboutRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
