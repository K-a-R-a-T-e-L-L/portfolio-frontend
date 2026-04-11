import Link from "next/link";
import styles from "./NotFoundPage.module.css";
import NotFoundAutoRedirect from "./NotFoundAutoRedirect";
import Section from "@/shared/ui/Section/Section";

type NotFoundPageProps = {
  locale: "ru" | "en";
  homeHref: string;
};

export default function NotFoundPage({ locale, homeHref }: NotFoundPageProps) {
  const copy =
    locale === "ru"
      ? {
          code: "Ошибка 404",
          title: "Страница не найдена",
          description:
            "Возможно, ссылка устарела или страница была перенесена. Сейчас верну вас на главную.",
          button: "Перейти на главную",
        }
      : {
          code: "Error 404",
          title: "Page not found",
          description:
            "The link may be outdated or the page has been moved. Redirecting you to the homepage.",
          button: "Go to homepage",
        };

  return (
    <Section ariaLabelledby="" className={styles.section}>
      <article className={styles.card}>
        <p className={styles.code}>{copy.code}</p>
        <h1 className={styles.title}>{copy.title}</h1>
        <p className={styles.description}>{copy.description}</p>

        <Link href={homeHref} className={styles.button}>
          {copy.button}
        </Link>

        <NotFoundAutoRedirect locale={locale} homeHref={homeHref} />
      </article>
    </Section>
  );
}
