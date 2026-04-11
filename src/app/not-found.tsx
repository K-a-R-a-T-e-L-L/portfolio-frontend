import { routing } from "@/shared/lib/i18n/routing";
import RootProvider from "@/processes/providers/RootProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NotFoundPage from "@/widgets/pages/NotFoundPage/NotFoundPage";

export default async function RootNotFound() {
  const locale = routing.defaultLocale === "ru" ? "ru" : "en";
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <RootProvider locale={locale}>
        <NotFoundPage locale={locale} homeHref={`/${locale}`} />
      </RootProvider>
    </NextIntlClientProvider>
  );
}
