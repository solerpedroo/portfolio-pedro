import type { Content } from "@/types/content";
import type { UI } from "@/data/interface";
import { SectionHeading } from "@/components/ui/section-heading";
import { Certifications } from "./certifications";
import { AnimatedDetails } from "@/components/ui/animated-details";
export function Recognition({ content, ui }: { content: Content; ui: UI }) {
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
          />
        </div>
        <div className="awards-list">
          {content.awards
            .slice()
            .reverse()
            .map((award) => (
              <article key={award.event} className="award-row">
                <span className="mono">{award.year}</span>
                <h3>{award.title}</h3>
                <p>{award.event}</p>
                <span className="award-symbol" aria-hidden="true">
                  ✳
                </span>
              </article>
            ))}
        </div>
        <Certifications
          certificates={content.certifications}
          labels={{
            title: ui.certifications,
            search: ui.certificatesSearch,
            download: ui.certificatesDownload,
            more: ui.more,
            empty: ui.empty,
          }}
        />
        <AnimatedDetails
          id="activities"
          className="activities"
          summary={ui.activities}
        >
          <ul>
            {content.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </AnimatedDetails>
      </div>
    </section>
  );
}
