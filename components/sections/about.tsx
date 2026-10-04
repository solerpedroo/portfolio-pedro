import Image from "next/image";
import type { Content } from "@/types/content";
import type { UI } from "@/data/interface";
import { skillGroups } from "@/data/skills";
import { downloads } from "@/data/socials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Arrow } from "@/components/ui/arrow";
export function About({ content, ui }: { content: Content; ui: UI }) {
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
        />
      </div>
      <div className="about-grid">
        <div className="portrait-wrap">
          <Image
            src="/img/foto_pedro.jpeg"
            alt="Pedro Henrique Contardi Soler"
            width={640}
            height={760}
            sizes="(max-width: 767px) 90vw, 360px"
            className="portrait"
          />
          <div className="portrait-caption">
            <span className="mono">PEDRO SOLER</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <div className="about-copy">
          <h3>
            Pedro Henrique
            <br />
            Contardi Soler<span className="brand-dot">.</span>
          </h3>
          <p className="about-role">{content.title}</p>
          {content.about.slice(0, 2).map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="interests">
            <span className="eyebrow">{ui.interests}</span>
            <p>{ui.interestText}</p>
          </div>
          <div className="download-links" aria-label={ui.downloads}>
            {downloads.map((d) => (
              <a key={d.href} href={d.href} download className="text-link">
                {d.label}
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </div>
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
        <details className="other-skills">
          <summary>
            {ui.otherSkills}
            <span aria-hidden="true">+</span>
          </summary>
          <ul>
            {content.otherSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
