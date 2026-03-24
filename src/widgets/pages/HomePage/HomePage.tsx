import { Stack } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { Locale } from "@/shared/lib/i18n/routing";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection";
import StackSection from "../sections/StackSection/StackSection";
import ContactsSection from "../sections/ContactsSection/ContactsSection";
import AboutSection from "../sections/AboutSection/AboutSection";

export default async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <Stack gap={100}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <StackSection />
      <ContactsSection />
    </Stack>
  );
}
