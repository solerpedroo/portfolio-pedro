import type { Content } from "@/types/content";
import type { UI } from "@/data/interface";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedDetails } from "@/components/ui/animated-details";
export function Experience({ content, ui }: { content: Content; ui: UI }) {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="container experience-layout">
        <div className="sticky-heading" id="experience-heading">
          <SectionHeading
            number="02"
            label={ui.journey}
            title={ui.experienceTitle}
          />
          <span className="editorial-mark" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="experience-list">
          {content.experiences.map((job, index) => (
            <Reveal key={job.company}>
              <article
                className={`experience-item ${index === 0 ? "experience-current" : ""}`}
              >
                <div className="experience-meta">
                  <span className="experience-index mono" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mono">{job.period}</p>
                  {index === 0 && (
                    <span className="current-indicator mono">
                      <span
                        className="experience-status-dot"
                        aria-hidden="true"
                      />
                      {ui.currentRole}
                    </span>
                  )}
                </div>
                <h3>{job.company}</h3>
                <p className="experience-role">{job.role}</p>
                {job.description && (
                  <p className="experience-description">{job.description}</p>
                )}
                {job.contributions.length > 0 && (
                  <AnimatedDetails
                    className="experience-details"
                    summary={ui.contributions}
                  >
                    <ul>
                      {job.contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {job.certificates.length > 0 && (
                      <>
                        <h4>{ui.related}</h4>
                        <ul>
                          {job.certificates.map((id) => {
                            const cert = content.certifications.find(
                              (c) => c.id === id,
                            );
                            return cert ? (
                              <li key={id}>
                                {cert.title} · {cert.institution}
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </>
                    )}
                  </AnimatedDetails>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
