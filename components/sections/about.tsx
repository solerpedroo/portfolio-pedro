import Image from "next/image";
import type { Content } from "@/types/content";
import type { UI } from "@/data/interface";
import { skillGroups } from "@/data/skills";
import { downloads } from "@/data/socials";
import { SectionHeading } from "@/components/ui/section-heading";
import { InteractiveFrame } from "@/components/ui/interactive-frame";
import { Reveal } from "@/components/ui/reveal";
import { Arrow } from "@/components/ui/arrow";
import { portrait } from "@/lib/portrait";
import { AnimatedDetails } from "@/components/ui/animated-details";

const cvSubtitles = (ui: UI) => [ui.cvTech, ui.cvEn, ui.cvGeneral];

export function About({ content, ui }: { content: Content; ui: UI }) {
  const cvDetails = cvSubtitles(ui);
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-heading"
    >
      <div id="about-heading">
        <SectionHeading
          number="03"
          label={ui.aboutLabel}
          title={ui.aboutTitle}
          description={ui.aboutIntro}
        />
      </div>
      <Reveal>
        <article className="featured-about" aria-labelledby="about-name">
          <div className="case-header about-profile-header">
            <span className="case-number" aria-hidden="true">
              03
            </span>
            <div>
              <p className="eyebrow">{ui.profileEyebrow}</p>
              <h3 id="about-name">
                Pedro Henrique
                <br />
                Contardi Soler<span className="brand-dot">.</span>
              </h3>
            </div>
            <span className="case-cross" aria-hidden="true">
              ↗
            </span>
          </div>
          <InteractiveFrame className="case-preview about-portrait">
            <div
              className={`about-portrait-frame${portrait.width < 800 ? " about-portrait-frame--lowres" : ""}`}
            >
              <Image
                src={portrait.src}
                alt="Pedro Henrique Contardi Soler"
                width={portrait.width}
                height={portrait.height}
                priority
                quality={94}
                unoptimized={portrait.width < 800}
                sizes="(max-width: 767px) min(100vw, 480px), min(720px, 45vw)"
                className="about-portrait-image"
              />
              <span className="project-image-index mono" aria-hidden="true">
                PROFILE / 03
              </span>
              <span className="portrait-locator mono" aria-hidden="true">
                +
              </span>
            </div>
          </InteractiveFrame>
          <div className="project-copy about-story">
            <span className="eyebrow">{content.title}</span>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="project-tags about-focus" aria-label={ui.interests}>
              {ui.interestText.split(" · ").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div
              className="about-downloads"
              aria-labelledby="about-downloads-label"
            >
              <div className="about-downloads-heading">
                <p className="eyebrow" id="about-downloads-label">
                  {ui.downloads}
                </p>
                <p className="about-downloads-lead">{ui.downloadLead}</p>
              </div>
              <div className="cv-actions">
                {downloads.map((file, index) => (
                  <a
                    key={file.href}
                    href={file.href}
                    download
                    className={
                      index === 0
                        ? "cv-download cv-download-primary"
                        : "cv-download cv-download-secondary"
                    }
                  >
                    <span className="cv-download-copy">
                      <strong>{file.label}</strong>
                      <small>{cvDetails[index]}</small>
                    </span>
                    <span className="cv-download-cta">
                      {ui.downloadCta}
                      <Arrow diagonal />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
      <div className="education-languages">
        <Reveal>
          <div id="education" className="education-panel">
            <header className="education-heading">
              <p className="eyebrow">{ui.educationLabel}</p>
              <h3>{ui.educationTitle}</h3>
              <p className="panel-intro">{ui.educationIntro}</p>
            </header>
            <div className="education-stack">
              {content.education.map((entry, index) => (
                <article className="education-card" key={entry.title}>
                  <span className="education-index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="education-card-body">
                    <span className="education-period mono">
                      {entry.period}
                    </span>
                    <h4>{entry.title}</h4>
                    <p>{entry.institution}</p>
                  </div>
                  <span className="education-mark" aria-hidden="true">
                    +
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div id="languages" className="languages-panel">
            <header className="languages-heading">
              <p className="eyebrow">{ui.languages}</p>
              <p className="panel-intro">{ui.languagesIntro}</p>
            </header>
            <ul className="language-stack">
              {content.languages.map((language) => (
                <li className="language-card" key={language.name}>
                  <span className="language-name">{language.name}</span>
                  <span className="mono language-level">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div id="skills" className="skills-section">
          <header className="skills-heading">
            <p className="eyebrow">{ui.skills}</p>
            <h3>{ui.skillsTitle}</h3>
            <p className="panel-intro">{ui.skillsIntro}</p>
          </header>
          <div className="skill-groups-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group-card" key={group.name}>
                <div className="skill-group-head">
                  <span className="skill-group-index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{group.name}</h4>
                </div>
                <ul className="skill-chip-list" aria-label={group.name}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <AnimatedDetails className="other-skills" summary={ui.otherSkills}>
            <ul className="other-skills-grid">
              {content.otherSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </AnimatedDetails>
        </div>
      </Reveal>
    </section>
  );
}
