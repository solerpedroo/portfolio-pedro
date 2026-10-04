import { ExperienceEffects } from "./experience-effects";
import { Entrance } from "@/components/ui/entrance";
import type { Locale } from "@/types/content";
import { getContent } from "@/lib/content";
import { getUI } from "@/data/interface";
import { Navigation } from "./navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { SystemsBridge } from "@/components/sections/systems-bridge";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Recognition } from "@/components/sections/recognition";
import { Contact } from "@/components/sections/contact";
export function Portfolio({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const ui = getUI(locale);
  return (
    <>
      <Entrance />
      <ExperienceEffects />
      <a className="skip-link" href="#main-content">
        {ui.skip}
      </a>
      <Navigation
        locale={locale}
        ui={{
          projects: ui.projects,
          experience: ui.experience,
          about: ui.about,
          contact: ui.contact,
          menu: ui.menu,
          close: ui.close,
        }}
      />
      <main id="main-content">
        <Hero ui={ui} />
        <Projects projects={content.projects} ui={ui} />
        <SystemsBridge ui={ui} />
        <Experience content={content} ui={ui} />
        <About content={content} ui={ui} />
        <Recognition content={content} ui={ui} />
        <Contact ui={ui} />
      </main>
      <footer className="site-footer container">
        <a href="#top" className="wordmark">
          ps<span className="brand-dot">.</span>
        </a>
        <span className="mono">Pedro Henrique Contardi Soler</span>
        <a className="text-link" href="#top">
          {ui.back}
          <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
