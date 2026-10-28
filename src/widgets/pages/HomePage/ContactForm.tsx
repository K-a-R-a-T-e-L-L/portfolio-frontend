"use client";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Locale } from "@/shared/lib/i18n/routing";
import { getPortfolioContent } from "./content";
import styles from "./Portfolio.module.css";
const subscribe = () => () => {};

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getPortfolioContent(locale);
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget,
      data = new FormData(form);
    const api = process.env.NEXT_PUBLIC_API_URL;
    if (!api) {
      setStatus("error");
      setMessage(t.configError);
      return;
    }
    pending.current = true;
    setStatus("pending");
    setMessage("");
    try {
      const response = await fetch(`${api.replace(/\/$/, "")}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name")).trim(),
          method: data.get("method"),
          contact: String(data.get("contact")).trim(),
          comment: String(data.get("comment")).trim(),
          consent: data.get("consent") === "on",
        }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok)
        throw new Error(response.status === 429 ? t.rateError : t.error);
      setStatus("success");
      setMessage(t.success);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message === t.rateError
          ? t.rateError
          : t.error,
      );
    } finally {
      pending.current = false;
    }
  }
  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={submit}
      aria-busy={status === "pending"}
    >
      <h3>{t.formTitle}</h3>
      <div className={styles.formRow}>
        <label>
          {t.nameLabel}
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            placeholder={t.namePlaceholder}
          />
        </label>
        <label>
          {t.methodLabel}
          <select name="method" defaultValue="telegram">
            <option value="telegram">Telegram</option>
            <option value="max">MAX</option>
            <option value="email">Email</option>
            <option value="phone">
              {locale === "ru" ? "Телефон" : "Phone"}
            </option>
            <option value="whatsapp">WhatsApp</option>
            <option value="vk">VK</option>
          </select>
        </label>
      </div>
      <label>
        {t.contactLabel}
        <input
          name="contact"
          required
          minLength={3}
          maxLength={500}
          autoComplete="off"
          placeholder="@username / email / +7…"
        />
      </label>
      <label>
        {t.messageLabel}
        <textarea
          name="comment"
          required
          minLength={3}
          maxLength={2000}
          rows={3}
          placeholder={t.messagePlaceholder}
        />
      </label>
      <label className={styles.consent}>
        <input name="consent" type="checkbox" required />
        <span>{t.consent}</span>
      </label>
      <button
        className={styles.primaryButton}
        type="submit"
        disabled={!hydrated || status === "pending"}
      >
        {status === "pending" ? t.sending : t.send}
        <IconArrowUpRight size={19} />
      </button>
      <noscript>
        <p>
          {locale === "ru"
            ? "Для формы нужен JavaScript. Напишите мне напрямую в Telegram или на почту."
            : "This form requires JavaScript. Please use Telegram or email."}
        </p>
      </noscript>
      <p
        className={styles.formStatus}
        data-status={status}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
