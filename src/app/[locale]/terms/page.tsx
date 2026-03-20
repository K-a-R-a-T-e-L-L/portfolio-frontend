import TermsPage from "@/widgets/pages/TermsPage/TermsPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function TermsRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <TermsPage locale={locale} />;
}
