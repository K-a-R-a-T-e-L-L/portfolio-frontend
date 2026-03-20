import PrivacyPage from "@/widgets/pages/PrivacyPage/PrivacyPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function PrivacyRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <PrivacyPage locale={locale} />;
}
