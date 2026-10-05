"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { EntranceFallback } from "@/components/three/entrance-fallback";

const EntranceScene = dynamic(() => import("@/components/three/entrance-scene"), {
  ssr: false,
});

function detectWebgl() {
  const canvas = document.createElement("canvas");
  try {
    return !!canvas.getContext("webgl2") || !!canvas.getContext("webgl");
  } catch {
    return false;
  }
}

export function Entrance() {
  const root = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    const node = root.current;
    let skip = false;
    try {
      skip = sessionStorage.getItem("ps-intro") === "1";
      sessionStorage.setItem("ps-intro", "1");
    } catch {
      /* Storage can be unavailable in private contexts. */
    }
    if (skip || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node?.classList.add("intro-skipped");
      return;
    }

    const mobile = matchMedia("(max-width: 767px)");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    const frame = requestAnimationFrame(() => {
      if (!mobile.matches && !saveData) setWebgl(detectWebgl());
    });

    const reveal = window.setTimeout(() => setExiting(true), 1150);
    const finish = window.setTimeout(() => {
      node?.classList.add("is-done");
    }, 2150);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(reveal);
      window.clearTimeout(finish);
    };
  }, []);

  return (
    <div
      ref={root}
      className={`site-entrance${exiting ? " is-exiting" : ""}`}
      aria-hidden="true"
    >
      <div className="entrance-backdrop" />
      <div className="entrance-scene">
        {webgl ? <EntranceScene exiting={exiting} /> : <EntranceFallback exiting={exiting} />}
      </div>
      <div className="entrance-grid" aria-hidden="true" />
      <div className="entrance-copy">
        <div className="entrance-ring" aria-hidden="true" />
        <div className="entrance-monogram">
          p<span>s</span>
          <i>.</i>
        </div>
        <span className="entrance-name mono">PEDRO SOLER</span>
        <span className="entrance-tag mono">SOFTWARE · AI · VISION</span>
        <span className="entrance-line" />
      </div>
    </div>
  );
}
