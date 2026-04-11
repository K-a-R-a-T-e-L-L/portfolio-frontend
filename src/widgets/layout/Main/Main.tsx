import { AppShellMain, Container } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import type { ReactNode } from "react";
import styles from "./Main.module.css";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <AppShellMain>
      <IconSettings
        className={styles.icon_sett}
        size={"45vw"}
        color="var(--mantine-color-brandPrimary-3)"
      />
      <Container size="xl" py={"16 0 16 32"} pb={32}>
        {children}
      </Container>
    </AppShellMain>
  );
}
