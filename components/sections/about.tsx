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
              <span className="project-image-arrow">
                <Arrow diagonal />
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
            <div className="about-downloads" aria-labelledby="about-downloads-label">
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
        <div id="education">
          <h3 className="minor-heading">{ui.education}</h3>
          {content.education.map((e) => (
            <article className="education-row" key={e.title}>
              <span className="mono">{e.period}</span>
              <div>
                <h4>{e.title}</h4>
                <p>{e.institution}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="languages">
          <h3 className="minor-heading">{ui.languages}</h3>
          {content.languages.map((l) => (
            <div className="language-row" key={l.name}>
              <span>{l.name}</span>
              <span className="mono">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
      <div id="skills" className="skills-section">
        <div className="skills-heading">
          <p className="eyebrow">{ui.skills}</p>
          <h3>{ui.skillsTitle}</h3>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.name}>
              <span className="mono">0{index + 1}</span>
              <h4>{group.name}</h4>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <AnimatedDetails className="other-skills" summary={ui.otherSkills}>
          <ul>
            {content.otherSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </AnimatedDetails>
      </div>
    </section>
  );
}
