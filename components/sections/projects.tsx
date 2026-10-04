import { InteractiveFrame } from "@/components/ui/interactive-frame";
import Image from "next/image";
import type { Project } from "@/types/content";
import type { UI } from "@/data/interface";
import { SectionHeading } from "@/components/ui/section-heading";
import { Arrow } from "@/components/ui/arrow";
import { Reveal } from "@/components/ui/reveal";
import { ProjectArchive } from "./project-archive";
export const featuredIds = ["codegraph", "safevision", "driveflow"];
export function Projects({ projects, ui }: { projects: Project[]; ui: UI }) {
  return (
    <section
      id="projects"
      className="section container"
      aria-labelledby="projects-heading"
    >
      <div id="projects-heading">
        <SectionHeading
          number="01"
          label={ui.selected}
          title={ui.projectTitle}
          description={ui.projectIntro}
        />
      </div>
      <div className="featured-projects">
        {featuredIds.map((id, i) => {
          const project = projects.find((p) => p.id === id)!;
          return (
            <Reveal key={id}>
              <article className={`featured-project featured-${id}`}>
                <div className="case-header">
                  <span className="case-number">0{i + 1}</span>
                  <div>
                    <p className="eyebrow">
                      {id === "safevision"
                        ? "COMPUTER VISION / ROAD SAFETY"
                        : id === "codegraph"
                          ? "AI / SOFTWARE ARCHITECTURE"
                          : "MOBILE / PRODUCT DEVELOPMENT"}
                    </p>
                    <h3>
                      {id === "safevision" ? "Safe Vision" : project.name}
                    </h3>
                  </div>
                  <span className="case-cross" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <InteractiveFrame className="case-preview">
                  <a
                    className="project-image"
                    href={project.links[0]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${ui.visit}: ${project.name}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 767px) 92vw, 85vw"
                    />
                    <span
                      className="project-image-index mono"
                      aria-hidden="true"
                    >
                      0{i + 1} /{" "}
                      {id === "safevision"
                        ? "COMPUTER VISION"
                        : id === "codegraph"
                          ? "AI & ARCHITECTURE"
                          : "MOBILE & PRODUCT"}
                    </span>
                    <span className="project-image-arrow">
                      <Arrow diagonal />
                    </span>
                  </a>
                </InteractiveFrame>
                <div className="project-copy">
                  <span className="eyebrow">
                    {String(i + 1).padStart(2, "0")} —{" "}
                    {project.tags.slice(0, 2).join(" / ")}
                  </span>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <ul className="project-tags" aria-label="Stack">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={project.links[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ui.visit}
                    <Arrow diagonal />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <ProjectArchive
        projects={projects.filter((p) => !featuredIds.includes(p.id)).reverse()}
        labels={{
          title: ui.archive,
          intro: ui.archiveIntro,
          search: ui.search,
          all: ui.all,
          empty: ui.empty,
          results: ui.results,
          visit: ui.visit,
          repository: ui.repository,
        }}
      />
    </section>
  );
}
