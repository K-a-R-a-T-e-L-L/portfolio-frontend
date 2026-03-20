import { AppShellMain, Container } from "@mantine/core";
import type { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <AppShellMain>
      <Container size="xl" py={32}>
        {children}
      </Container>
    </AppShellMain>
  );
}
