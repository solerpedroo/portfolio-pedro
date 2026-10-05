"use client";
import { useState } from "react";
import type { Certificate } from "@/types/content";
import { AnimatedDetails } from "@/components/ui/animated-details";
import { Select } from "@/components/ui/select";
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
    intro: string;
    institutions: string;
  };
}) {
  const [query, setQuery] = useState("");
  const [institution, setInstitution] = useState("");
  const institutions = [
    ...new Set(certificates.map((c) => c.institution)),
  ].sort();
  const selection = certificates.filter((certificate) =>
    ["3", "5", "62"].includes(certificate.id),
  );
  const normalized = query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const filtered = certificates.filter(
    (c) =>
      `${c.title} ${c.institution}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(normalized) &&
      (!institution || c.institution === institution),
  );
  return (
    <div
      id="certifications"
      className="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="subsection-header">
        <div>
          <p className="eyebrow">
            LEARNING / {String(certificates.length).padStart(2, "0")}
          </p>
          <h3 id="certifications-title">
            {labels.title}
            <span className="mono">{certificates.length}</span>
          </h3>
          <p className="certifications-intro">{labels.intro}</p>
        </div>
        <a className="text-link" href="/certificados.zip" download>
          {labels.download} <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="certificate-selection">
        {selection.map((certificate, index) => (
          <article className="certificate-feature" key={certificate.id}>
            <div className="certificate-feature-top mono">
              <span>0{index + 1}</span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m16 3 4 3 5 1 1 5 3 4-3 4-1 5-5 1-4 3-4-3-5-1-1-5-3-4 3-4 1-5 5-1 4-3Z"
                  stroke="currentColor"
                />
                <path d="m11 16 3 3 7-7" stroke="currentColor" />
              </svg>
            </div>
            <p className="mono certificate-institution">
              {certificate.institution}
            </p>
            <h4>{certificate.title}</h4>
          </article>
        ))}
      </div>
      <AnimatedDetails
        className="certifications-disclosure"
        summary={labels.more}
      >
        <div className="certificate-tools">
          <label className="search-field">
            <span className="sr-only">{labels.search}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="6" />
              <path d="m15 15 6 6" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={labels.search}
              type="search"
              autoComplete="off"
            />
          </label>
          <Select
            label={labels.institutions}
            value={institution}
            onChange={setInstitution}
            options={[
              { value: "", label: labels.institutions },
              ...institutions.map((name) => ({ value: name, label: name })),
            ]}
          />
        </div>
        <p className="mono certificate-count" aria-live="polite">
          {filtered.length} / {certificates.length}
        </p>
        <div className="certificates-grid">
          {filtered.map((c) => (
            <article key={c.id} className="certificate-card">
              <span className="certificate-mark mono" aria-hidden="true">
                {c.id.padStart(2, "0")}
              </span>
              <h4>{c.title}</h4>
              <p>{c.institution}</p>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty-state">{labels.empty}</p>}
      </AnimatedDetails>
    </div>
  );
}
