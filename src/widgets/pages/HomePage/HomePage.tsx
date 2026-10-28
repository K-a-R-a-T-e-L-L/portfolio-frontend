import Image from "next/image";
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandTelegram,
  IconDownload,
  IconMail,
  IconPlus,
} from "@tabler/icons-react";
import type { Locale } from "@/shared/lib/i18n/routing";
import { getPortfolioContent } from "./content";
import ProductScene from "./ProductScene";
import ProfileCode from "./ProfileCode";
import ContactForm from "./ContactForm";
import styles from "./Portfolio.module.css";
import { siteUrl } from "@/shared/lib/site-url";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getPortfolioContent(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteUrl}/${locale}`,
    mainEntity: {
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
      url: `${siteUrl}/${locale}`,
      sameAs: [
        "https://github.com/K-a-R-a-T-e-L-L",
        "https://t.me/K_a_R_a_T_e_L_L",
      ],
      knowsAbout: [
        "CRM",
        "TypeScript",
        "Web applications",
        "Mini Apps",
        "PWA",
        "Telegram bots",
        "MAX bots",
      ],
    },
  };
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section
        id="hero-section"
        className={styles.hero}
        aria-labelledby="hero-title"
      >
        <div className={styles.heroCopy}>
          <p className={styles.identity}>
            {t.name}
            <span>{t.role}</span>
          </p>
          <h1 id="hero-title">
            {t.hero.first}
            <br />
            <span>{t.hero.last}</span>
          </h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#project-section">
              {t.hero.work}
              <IconArrowDown size={19} />
            </a>
            <a className={styles.textButton} href="#contacts-section">
              {t.hero.contact}
              <IconArrowUpRight size={19} />
            </a>
          </div>
        </div>
        <ProductScene labels={t.hero.scene} note={t.hero.note} />
        <div className={styles.heroBottom}>
          <span>DESIGN / DEVELOPMENT / DELIVERY</span>
          <a href="#project-section">
            {t.hero.scroll}
            <IconArrowDown size={16} />
          </a>
        </div>
      </section>
      <section
        id="project-section"
        className={styles.section}
        aria-labelledby="projects-title"
      >
        <div className={styles.sectionHeading}>
          <h2 id="projects-title">{t.projectsTitle}</h2>
          <p>{t.projectsIntro}</p>
        </div>
        <div className={styles.projects}>
          {t.projects.map((project) => (
            <article key={project.url} className={styles.project}>
              <a
                className={`${styles.projectVisual} ${styles[project.color]}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.visit}: ${project.name}`}
              >
                <div className={styles.browserBar}>
                  <span className={styles.browserDots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{new URL(project.url).hostname}</span>
                  <IconArrowUpRight size={16} />
                </div>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={
                      locale === "ru"
                        ? `Главная страница проекта «${project.name}»`
                        : `${project.name} homepage`
                    }
                    width={1440}
                    height={900}
                    sizes="(max-width: 640px) calc(100vw - 74px), (max-width: 900px) calc(90vw - 60px), (max-width: 1440px) 44vw, 612px"
                  />
                </div>
                <span className={styles.visualLink}>
                  {t.visit}
                  <IconArrowUpRight size={18} />
                </span>
              </a>
              <div className={styles.projectCopy}>
                <p className={styles.projectCategory}>{project.category}</p>
                <h3>{project.name}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <ul className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <IconArrowRight size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.projectRole}>
                  <span>{t.roleLabel}</span>
                  <p>{t.roleValue}</p>
                </div>
                <ul className={styles.tags} aria-label={t.stackLabel}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <details className={styles.projectDetails}>
                  <summary>
                    {t.details}
                    <IconPlus size={18} />
                  </summary>
                  <div>
                    <h4>{t.task}</h4>
                    <p>{project.task}</p>
                    <h4>{t.solution}</h4>
                    <p>{project.solution}</p>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="stack-section"
        className={`${styles.section} ${styles.capabilitiesSection}`}
        aria-labelledby="capabilities-title"
      >
        <div className={styles.sectionHeading}>
          <h2 id="capabilities-title">{t.capabilitiesTitle}</h2>
          <p>{t.capabilitiesIntro}</p>
        </div>
        <div className={styles.capabilities}>
          {t.capabilities.map((item) => (
            <div className={styles.capability} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{item.tags}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        id="about-section"
        className={`${styles.section} ${styles.about}`}
        aria-labelledby="about-title"
      >
        <div className={styles.aboutIntro}>
          <h2 id="about-title">{t.aboutTitle}</h2>
          <ProfileCode locale={locale} />
        </div>
        <div className={styles.aboutCopy}>
          <p>{t.about}</p>
          <p>{t.own}</p>
          <div className={styles.stack}>
            <h3>{t.stackLabel}</h3>
            <p>
              TypeScript <span>/</span> React <span>/</span> Next.js{" "}
              <span>/</span> NestJS <span>/</span> PostgreSQL <span>/</span>{" "}
              Redis <span>/</span> Docker
            </p>
          </div>
        </div>
      </section>
      <section
        id="experience-section"
        className={styles.section}
        aria-labelledby="experience-title"
      >
        <div className={styles.experienceHeading}>
          <h2 id="experience-title">{t.experienceTitle}</h2>
          <a className={styles.textButton} href={t.resumePath} download>
            {t.resume}
            <IconDownload size={18} />
          </a>
        </div>
        <ol className={styles.timeline}>
          {t.experience.map((item) => (
            <li key={item.date}>
              <span className={styles.date}>{item.date}</span>
              <div>
                <h3>{item.role}</h3>
                <span className={styles.company}>{item.company}</span>
              </div>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="contacts-section"
        className={`${styles.section} ${styles.contacts}`}
        aria-labelledby="contact-title"
      >
        <div className={styles.contactCopy}>
          <h2 id="contact-title">{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a
            className={styles.contactTelegram}
            href="https://t.me/K_a_R_a_T_e_L_L"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTelegram size={25} />
            Telegram
            <IconArrowUpRight size={24} />
          </a>
          <a
            className={styles.contactSmall}
            href="mailto:kirillcuhorukov6@gmail.com"
          >
            <IconMail size={19} />
            kirillcuhorukov6@gmail.com
          </a>
          <a
            className={styles.contactSmall}
            href="https://github.com/K-a-R-a-T-e-L-L"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={19} />
            GitHub
            <IconArrowUpRight size={16} />
          </a>
        </div>
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}
