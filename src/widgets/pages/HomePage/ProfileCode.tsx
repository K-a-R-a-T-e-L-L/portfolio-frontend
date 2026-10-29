import type { Locale } from "@/shared/lib/i18n/routing";
import styles from "./Portfolio.module.css";
import { Fragment } from "react";

export default function ProfileCode({ locale }: { locale: Locale }) {
  const rows = [
    <Fragment key="start">
      <span className={styles.codeKeyword}>const</span>{" "}
      <span className={styles.codeIdentifier}>developer</span>{" "}
      <span className={styles.codePunctuation}>= {"{"}</span>
    </Fragment>,
    <Fragment key="name">
      <span className={styles.codeIdentifier}>name</span>
      <span className={styles.codePunctuation}>: </span>
      <span className={styles.codeString}>{'"Kirill Sukhorukov"'}</span>
      <span className={styles.codePunctuation}>,</span>
    </Fragment>,
    <Fragment key="role">
      <span className={styles.codeIdentifier}>role</span>
      <span className={styles.codePunctuation}>: </span>
      <span className={styles.codeString}>{'"Fullstack Developer"'}</span>
      <span className={styles.codePunctuation}>,</span>
    </Fragment>,
    <Fragment key="focus">
      <span className={styles.codeIdentifier}>focus</span>
      <span className={styles.codePunctuation}>: [</span>
      <span className={styles.codeString}>{'"Web", "Mini Apps", "Bots"'}</span>
      <span className={styles.codePunctuation}>],</span>
    </Fragment>,
    <Fragment key="stack">
      <span className={styles.codeIdentifier}>stack</span>
      <span className={styles.codePunctuation}>: [</span>
      <span className={styles.codeString}>
        {'"Next.js", "NestJS", "TypeScript"'}
      </span>
      <span className={styles.codePunctuation}>],</span>
    </Fragment>,
    <Fragment key="approach">
      <span className={styles.codeIdentifier}>approach</span>
      <span className={styles.codePunctuation}>: </span>
      <span className={styles.codeString}>{'"Design → code → launch"'}</span>
    </Fragment>,
    <span key="end" className={styles.codePunctuation}>
      {"};"}
    </span>,
  ];
  return (
    <figure
      data-reveal
      data-type-code
      className={styles.profileCode}
      aria-label={
        locale === "ru"
          ? "Профиль разработчика в виде кода"
          : "Developer profile as code"
      }
    >
      <figcaption>
        <span>
          <i />
          <i />
          <i />
        </span>
        developer.ts<span>TypeScript</span>
      </figcaption>
      <pre>
        <code>
          {rows.map((row, index) => (
            <span className={styles.codeLine} key={index}>
              <span className={styles.lineNumber} aria-hidden="true">
                {index + 1}
              </span>
              <span
                data-type-line
                className={styles.codeValue}
                style={{
                  paddingLeft: index > 0 && index < 6 ? "1.2em" : undefined,
                }}
              >
                {row}
              </span>
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
