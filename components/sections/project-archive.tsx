"use client";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/types/content";
import { Arrow } from "@/components/ui/arrow";
import { AnimatedDetails } from "@/components/ui/animated-details";
export function ProjectArchive({
  projects,
  labels,
}: {
  projects: Project[];
  labels: {
    title: string;
    intro: string;
    search: string;
    all: string;
    empty: string;
    results: string;
    visit: string;
    repository: string;
  };
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtered = projects.filter(
    (p) =>
      normalize(`${p.name} ${p.description} ${p.tags.join(" ")}`).includes(
        normalize(query),
      ) &&
      (category === "all" ||
        p.tags.some((t) =>
          category === "ai" ? ["A.I", "LLM"].includes(t) : t === category,
        )),
  );
  return (
    <div className="project-archive">
      <div className="archive-heading">
        <div>
          <p className="eyebrow">
            INDEX / {String(projects.length).padStart(2, "0")}
          </p>
          <h3>{labels.title}</h3>
          <p>{labels.intro}</p>
        </div>
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
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.search}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="archive-controls">
        <div className="filter-tabs" role="group" aria-label={labels.title}>
          {[
            { id: "all", name: labels.all },
            { id: "ai", name: "AI" },
            { id: "Mobile", name: "Mobile" },
            { id: "Web", name: "Web" },
          ].map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <span className="mono result-count" aria-live="polite">
          {filtered.length} {labels.results}
        </span>
      </div>
      <div className="archive-list">
        {filtered.map((project) => (
          <AnimatedDetails
            className="archive-project"
            key={project.id}
            summary={
              <>
                <span className="archive-thumbnail">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 90vw, 42vw"
                  />
                  <span className="archive-thumbnail-grid" aria-hidden="true" />
                </span>
                <span className="archive-number mono">
                  {String(
                    projects.findIndex((entry) => entry.id === project.id) + 1,
                  ).padStart(2, "0")}
                </span>
                <h4>{project.name}</h4>
                <span className="archive-tag mono">
                  {project.tags.slice(0, 2).join(" / ")}
                </span>
              </>
            }
          >
            <div className="archive-detail">
              <div>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="archive-project-links">
                  {project.links.map((href) => (
                    <a
                      className="text-link"
                      href={href}
                      key={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {href.includes("github.com")
                        ? labels.repository
                        : labels.visit}
                      <Arrow diagonal />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedDetails>
        ))}
        {filtered.length === 0 && <p className="empty-state">{labels.empty}</p>}
      </div>
    </div>
  );
}
