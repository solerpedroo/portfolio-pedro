"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/content";
import type { UI } from "@/data/interface";
export function Navigation({
  locale,
  ui,
}: {
  locale: Locale;
  ui: Pick<
    UI,
    "projects" | "experience" | "about" | "contact" | "menu" | "close"
  >;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const links = [
    { id: "projects", label: ui.projects },
    { id: "experience", label: ui.experience },
    { id: "about", label: ui.about },
    { id: "skills", label: "Stack" },
    { id: "contact", label: ui.contact },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id], #skills")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          ps<span className="brand-dot">.</span>
          <span className="wordmark-name">pedro soler</span>
        </a>
        <div
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <span className="nav-dot" />
            </a>
          ))}
        </div>
        <div className="nav-tools">
          <div className="locale-switch" aria-label="Language">
            {(["en", "pt", "es"] as const).map((lang) => (
              <a
                href={lang === "en" ? "/" : `/${lang}`}
                hrefLang={lang}
                lang={lang}
                aria-label={
                  {
                    pt: "PT — Português",
                    en: "EN — English",
                    es: "ES — Español",
                  }[lang]
                }
                aria-current={locale === lang ? "page" : undefined}
                key={lang}
              >
                {lang.toUpperCase()}
              </a>
            ))}
          </div>
          <button
            ref={trigger}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? ui.close : ui.menu}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
