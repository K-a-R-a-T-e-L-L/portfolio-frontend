import FaqPage from "@/widgets/pages/FaqPage/FaqPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function FaqRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <FaqPage locale={locale} />;
}
