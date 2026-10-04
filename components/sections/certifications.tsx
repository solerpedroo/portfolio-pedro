"use client";
import { useState } from "react";
import type { Certificate } from "@/types/content";
export function Certifications({
  certificates,
  labels,
}: {
  certificates: Certificate[];
  labels: {
    title: string;
    search: string;
    download: string;
    more: string;
    empty: string;
  };
}) {
  const [query, setQuery] = useState("");
  const normalized = query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const filtered = certificates.filter((c) =>
    `${c.title} ${c.institution}`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(normalized),
  );
  return (
    <div id="certifications" className="certifications">
      <div className="subsection-header">
        <h3>
          {labels.title}
          <span className="mono">{certificates.length}</span>
        </h3>
        <a className="text-link" href="/certificados.zip" download>
          {labels.download} <span aria-hidden="true">↓</span>
        </a>
      </div>
      <details className="certifications-disclosure">
        <summary>
          {labels.more}
          <span aria-hidden="true">+</span>
        </summary>
        <label className="search-field">
          <span className="sr-only">{labels.search}</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.search}
            type="search"
          />
        </label>
        <p className="mono certificate-count" aria-live="polite">
          {filtered.length} / {certificates.length}
        </p>
        <div className="certificates-grid">
          {filtered.map((c) => (
            <article key={c.id}>
              <h4>{c.title}</h4>
              <p>{c.institution}</p>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p>{labels.empty}</p>}
      </details>
    </div>
  );
}
