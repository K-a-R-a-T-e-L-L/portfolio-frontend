import NotFoundPage from "@/widgets/pages/NotFoundPage/NotFoundPage";
import { getLocale } from "next-intl/server";

export default async function LocaleNotFound() {
  const locale = await getLocale();
  const normalizedLocale = locale === "ru" ? "ru" : "en";

  return (
    <NotFoundPage locale={normalizedLocale} homeHref={`/${normalizedLocale}`} />
  );
}
