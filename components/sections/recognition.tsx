import type { Content } from "@/types/content";
import type { UI } from "@/data/interface";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Certifications } from "./certifications";

export function Recognition({ content, ui }: { content: Content; ui: UI }) {
  const awards = content.awards.slice().reverse();
  return (
    <section
      id="awards"
      className="section recognition-section"
      aria-labelledby="recognition-heading"
    >
      <div className="container">
        <div id="recognition-heading">
          <SectionHeading
            number="04"
            label={ui.recognition}
            title={ui.recognitionTitle}
            description={ui.recognitionIntro}
          />
        </div>
        <div className="awards-showcase">
          {awards.map((award, index) => (
            <Reveal key={`${award.year}-${award.title}-${award.event}`}>
              <article
                className={`award-card${index === 0 ? " award-card-lead" : ""}`}
              >
                <div className="award-card-head">
                  <span className="award-index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="award-year mono">{award.year}</span>
                  <span className="award-symbol" aria-hidden="true">
                    ✳
                  </span>
                </div>
                <h3>{award.title}</h3>
                <p className="award-event">{award.event}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Certifications
            certificates={content.certifications}
            labels={{
              title: ui.certifications,
              search: ui.certificatesSearch,
              download: ui.certificatesDownload,
              more: ui.more,
              empty: ui.empty,
              intro: ui.certificatesIntro,
              institutions: ui.institutions,
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
