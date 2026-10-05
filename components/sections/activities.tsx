import type { UI } from "@/data/interface";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Activities({
  activities,
  ui,
}: {
  activities: string[];
  ui: UI;
}) {
  return (
    <section
      id="activities"
      className="section extracurricular-section container"
      aria-labelledby="activities-heading"
    >
      <div id="activities-heading">
        <SectionHeading
          number="05"
          label={ui.activities}
          title={ui.activitiesTitle}
          description={ui.activitiesIntro}
        />
      </div>
      <div className="extracurricular-grid">
        {activities.toReversed().map((activity, index) => {
          const entry = activity.match(/^(\d{4})\s*[–—-]\s*(.*)$/);
          return (
            <Reveal
              key={activity}
              className={index === 0 ? "extracurricular-lead" : ""}
            >
              <article className="extracurricular-card">
                <div className="extracurricular-meta mono">
                  <span className="extracurricular-year">{entry?.[1]}</span>
                  <span className="extracurricular-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{entry?.[2] ?? activity}</h3>
                <svg
                  className="extracurricular-orbit"
                  viewBox="0 0 120 120"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="60" cy="60" r="42" />
                  <ellipse
                    cx="60"
                    cy="60"
                    rx="52"
                    ry="20"
                    transform="rotate(-35 60 60)"
                  />
                  <circle
                    cx="93"
                    cy="34"
                    r="3"
                    className="extracurricular-node"
                  />
                </svg>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
