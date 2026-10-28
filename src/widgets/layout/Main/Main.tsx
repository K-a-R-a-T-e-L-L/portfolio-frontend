import type { ReactNode } from "react";
export default function Main({ children }: { children: ReactNode }) {
  return <main id="main-content">{children}</main>;
}
