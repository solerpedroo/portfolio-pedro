import { MagneticLink } from "@/components/ui/magnetic-link";
import type { UI } from "@/data/interface";
import { socials } from "@/data/socials";
import { Arrow } from "@/components/ui/arrow";
import { HeroVisual } from "@/components/three/hero-visual";
export function Hero({ ui }: { ui: UI }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-main container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="tiny-cross">+</span>
            {ui.eyebrow}
          </p>
          <h1 id="hero-heading">
            <span className="headline-mask">
              <span>{ui.hero1}</span>
            </span>
            <span className="headline-mask headline-accent">
              <span>{ui.hero2}</span>
            </span>
          </h1>
          <p className="hero-discipline mono">
            SOFTWARE ENGINEERING <span>×</span> ARTIFICIAL INTELLIGENCE
          </p>
          <p className="hero-intro">{ui.intro}</p>
          <div className="hero-actions">
            <MagneticLink className="button button-primary" href="#projects">
              {ui.explore}
              <Arrow />
            </MagneticLink>
            <a
              className="text-link"
              href={socials[0].href}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <HeroVisual
          labels={{
            pause: ui.pause,
            play: ui.play,
            scene: ui.scene,
            static: ui.static,
          }}
        />
      </div>
      <div className="hero-foot container">
        <a className="current-job" href="#experience">
          <span className="status-dot" />
          <span>
            {ui.current}
            <small>{ui.currentRole}</small>
          </span>
          <Arrow diagonal />
        </a>
        <p className="mono hero-location">{ui.location}</p>
        <a className="scroll-cue mono" href="#projects" aria-label={ui.explore}>
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
