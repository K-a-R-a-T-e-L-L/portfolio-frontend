import HomePage from "@/widgets/pages/HomePage/HomePage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
