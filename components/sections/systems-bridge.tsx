import { HeroVisual } from "@/components/three/hero-visual";
import type { UI } from "@/data/interface";
export function SystemsBridge({ ui }: { ui: UI }) {
  return (
    <div className="systems-bridge">
      <div className="container systems-bridge-inner">
        <div className="bridge-copy">
          <p className="eyebrow">SOFTWARE / INTELLIGENCE / PRODUCT</p>
          <p className="bridge-title">
            {ui.interests}
            <span aria-hidden="true"> ↗</span>
          </p>
          <p className="bridge-interests">{ui.interestText}</p>
        </div>
        <HeroVisual
          variant="transition"
          labels={{
            pause: ui.pause,
            play: ui.play,
            scene: ui.scene,
            static: ui.static,
          }}
        />
      </div>
    </div>
  );
}
