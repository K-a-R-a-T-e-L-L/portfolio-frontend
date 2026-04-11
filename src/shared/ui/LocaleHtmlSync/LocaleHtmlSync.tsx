"use client";

import { useEffect } from "react";
import { Locale } from "@/shared/lib/i18n/routing";

type LocaleHtmlSyncProps = {
  locale: Locale;
};

export default function LocaleHtmlSync({ locale }: LocaleHtmlSyncProps) {

  useEffect(() => {
    if (!locale) return;

    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return null;
}
