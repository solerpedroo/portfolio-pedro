"use client";
import { useState, type FormEvent } from "react";
import { email } from "@/data/socials";
import type { UI } from "@/data/interface";
import { AnimatedDetails } from "@/components/ui/animated-details";
export function ContactForm({
  ui,
}: {
  ui: Pick<
    UI,
    | "form"
    | "name"
    | "phone"
    | "message"
    | "send"
    | "sending"
    | "success"
    | "failure"
    | "privacy"
  >;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("_honey")) return;
    setStatus("sending");
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      let response: Response;
      try {
        response = await fetch(
          `https://formsubmit.co/ajax/${email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...Object.fromEntries(fields),
              _subject: "Portfolio contact — Pedro Soler",
              _template: "table",
            }),
            signal: controller.signal,
          },
        );
      } finally {
        window.clearTimeout(timeout);
      }
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      )
        throw new Error("Contact submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <AnimatedDetails
      className="contact-form-disclosure"
      summary={ui.form}
    >
      <form onSubmit={submit} className="contact-form">
        <input
          name="_honey"
          className="honeypot"
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="form-grid">
          <label>
            {ui.name}
            <input name="name" autoComplete="name" required maxLength={160} />
          </label>
          <label>
            E-mail
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
        </div>
        <label>
          {ui.phone}
          <input type="tel" name="phone" autoComplete="tel" maxLength={30} />
        </label>
        <label>
          {ui.message}
          <textarea name="message" required maxLength={8000} rows={4} />
        </label>
        <p className="form-privacy">{ui.privacy}</p>
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? ui.sending : ui.send}
          <span aria-hidden="true">↗</span>
        </button>
        <p role="status" className={`form-status ${status}`}>
          {status === "success"
            ? ui.success
            : status === "error"
              ? ui.failure
              : ""}
        </p>
      </form>
    </AnimatedDetails>
  );
}
