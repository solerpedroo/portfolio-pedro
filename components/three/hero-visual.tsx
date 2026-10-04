"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { SurfaceFallback } from "./surface-fallback";
const NetworkScene = dynamic(() => import("./network-scene"), {
  ssr: false,
  loading: () => <SurfaceFallback />,
});
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <SurfaceFallback /> : this.props.children;
  }
}
export function HeroVisual({
  labels,
  variant = "hero",
}: {
  variant?: "hero" | "contact" | "transition";
  labels: { pause: string; play: string; scene: string; static: string };
}) {
  const host = useRef<HTMLDivElement>(null);
  const [capability, setCapability] = useState({
    enabled: false,
    compact: false,
    manual: false,
  });
  const [activated, setActivated] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 767px)");
    const update = () => {
      const device = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
      };
      let supported = false;
      if (!reduced.matches && !device.connection?.saveData) {
        const canvas = document.createElement("canvas");
        try {
          const gl =
            canvas.getContext("webgl2") ?? canvas.getContext("webgl");
          supported = !!gl;
          gl?.getExtension("WEBGL_lose_context")?.loseContext();
        } catch {
          supported = false;
        }
      }
      setCapability({
        enabled: supported,
        manual: mobile.matches,
        compact:
          mobile.matches ||
          (device.deviceMemory ?? 8) <= 4 ||
          navigator.hardwareConcurrency <= 4,
      });
    };
    update();
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (host.current) observer.observe(host.current);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", update);
    mobile.addEventListener("change", update);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const enabled = capability.enabled && (!capability.manual || activated);
  const effectivelyPaused = paused || !enabled;
  return (
    <div className={`hero-visual visual-${variant}`} ref={host}>
      <div className="visual-topline mono">
        <span>{variant === "hero" ? "FIG. 01" : "FIG. 02"}</span>
        <span>{labels.scene}</span>
        <span className="crosshair">+</span>
      </div>
      <div className="scene" role="img" aria-label={labels.static}>
        <div className="scene-axis axis-y" />
        <div className="scene-axis axis-x" />
        {enabled && visible && !failed ? (
          <SceneBoundary>
            <NetworkScene
              active={pageVisible && !paused}
              compact={capability.compact}
              variant={variant}
              onFailure={() => setFailed(true)}
            />
          </SceneBoundary>
        ) : (
          <SurfaceFallback />
        )}
      </div>
      <div className="visual-bottomline mono">
        <span>COMPUTER VISION ↔ SOFTWARE</span>
        {capability.enabled && !failed && (
          <button
            onClick={() => {
              if (!enabled) {
                setActivated(true);
                setPaused(false);
              } else setPaused(!paused);
            }}
            aria-label={effectivelyPaused ? labels.play : labels.pause}
            aria-pressed={effectivelyPaused}
          >
            <span aria-hidden="true">{effectivelyPaused ? "▷" : "Ⅱ"}</span>{" "}
            {effectivelyPaused ? labels.play : labels.pause}
          </button>
        )}
      </div>
    </div>
  );
}
