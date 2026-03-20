import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

import { Locale } from "@/shared/lib/i18n/routing";
import { themeMantine } from "@/shared/lib/theme/mantine/theme";
import Footer from "@/widgets/layout/Footer/Footer";
import Header from "@/widgets/layout/Header/Header";
import Main from "@/widgets/layout/Main/Main";
import Wrapper from "@/widgets/layout/Wrapper/Wrapper";
import AppClientProviders from "./AppClientProviders";

export default function RootProvider({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <MantineProvider theme={themeMantine} defaultColorScheme="auto">
      <AppClientProviders>
        <Wrapper>
          <Header locale={locale} />
          <Main>{children}</Main>
          <Footer locale={locale} />
        </Wrapper>
      </AppClientProviders>
    </MantineProvider>
  );
}
