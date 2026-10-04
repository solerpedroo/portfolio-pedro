"use client";
import { useEffect, useRef } from "react";
export function Entrance() {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // CSS runs alongside real loading, never locks the page or delays interactivity.
    try {
      if (sessionStorage.getItem("ps-intro"))
        element.current?.classList.add("intro-skipped");
      sessionStorage.setItem("ps-intro", "1");
    } catch {
      /* Storage can be unavailable in private contexts. */
    }
  }, []);
  return (
    <div ref={element} className="site-entrance" aria-hidden="true">
      <div className="entrance-monogram">
        p<span>s</span>
        <i>.</i>
      </div>
      <span className="entrance-name mono">PEDRO SOLER</span>
      <span className="entrance-line" />
    </div>
  );
}
