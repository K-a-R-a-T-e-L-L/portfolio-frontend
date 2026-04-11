import { getLocale } from "next-intl/server";
import NotFoundPage from "@/shared/ui/NotFoundPage/NotFoundPage";

export default async function LocaleNotFound() {
  const locale = await getLocale();
  const normalizedLocale = locale === "ru" ? "ru" : "en";

  return (
    <NotFoundPage locale={normalizedLocale} homeHref={`/${normalizedLocale}`} />
  );
}
