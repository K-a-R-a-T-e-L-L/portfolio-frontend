import DocsPage from "@/widgets/pages/DocsPage/DocsPage";

import { Locale } from "@/shared/lib/i18n/routing";

export default async function DocsRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DocsPage locale={locale} />;
}
