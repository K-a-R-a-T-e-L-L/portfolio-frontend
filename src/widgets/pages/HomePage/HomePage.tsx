import { Stack } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/shared/lib/i18n/routing";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import StackSection from "./sections/StackSection/StackSection";
import ContactsSection from "./sections/ContactsSection/ContactsSection";
export default async function HomePage({ locale }: { locale: Locale }) {

  return (
    <Stack gap={100}>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ProjectSection locale={locale} />
      <ExperienceSection locale={locale} />
      <StackSection locale={locale} />
      <ContactsSection  locale={locale}/>
    </Stack>
  );
}
