"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useState } from "react";
import LocaleHtmlSync from "@/shared/ui/LocaleHtmlSync/LocaleHtmlSync";
import { Locale } from "@/shared/lib/i18n/routing";

export default function AppClientProviders({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleHtmlSync locale={locale} />
      {children}
    </QueryClientProvider>
  );
}
