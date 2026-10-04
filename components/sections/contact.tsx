import { HeroVisual } from "@/components/three/hero-visual";
import { MagneticLink } from "@/components/ui/magnetic-link";
import type { UI } from "@/data/interface";
import { socials, email } from "@/data/socials";
import { Arrow } from "@/components/ui/arrow";
import { ContactForm } from "./contact-form";
export function Contact({ ui }: { ui: UI }) {
  return (
    <section
      id="contact"
      className="section contact-section container"
      aria-labelledby="contact-heading"
    >
      <HeroVisual
        variant="contact"
        labels={{
          pause: ui.pause,
          play: ui.play,
          scene: ui.scene,
          static: ui.static,
        }}
      />
      <p className="eyebrow">
        <span>05</span> {ui.contact}
      </p>
      <div className="contact-heading">
        <h2 id="contact-heading">{ui.contactTitle}</h2>
        <MagneticLink className="contact-orbit" href={`mailto:${email}`}>
          <span className="sr-only">Email</span>
          <Arrow diagonal />
        </MagneticLink>
      </div>
      <p className="contact-intro">{ui.contactIntro}</p>
      <a className="email-link" href={`mailto:${email}`}>
        {email}
        <Arrow diagonal />
      </a>
      <div className="contact-bottom">
        <p className="mono">{ui.location}</p>
        <div className="social-links">
          {socials.map((s) => (
            <a
              className="text-link"
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              {s.name}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
      <ContactForm
        ui={{
          form: ui.form,
          name: ui.name,
          phone: ui.phone,
          message: ui.message,
          send: ui.send,
          sending: ui.sending,
          success: ui.success,
          failure: ui.failure,
          privacy: ui.privacy,
        }}
      />
    </section>
  );
}
