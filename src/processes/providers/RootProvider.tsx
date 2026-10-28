import type { ReactNode } from "react";
import type { Locale } from "@/shared/lib/i18n/routing";
import Header from "@/widgets/layout/Header/Header";
import Footer from "@/widgets/layout/Footer/Footer";
import Main from "@/widgets/layout/Main/Main";
import SkullBackground from "@/widgets/background/SkullBackground/SkullBackground";
export default function RootProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <>
      <SkullBackground />
      <Header locale={locale} />
      <Main>{children}</Main>
      <Footer locale={locale} />
    </>
  );
}
