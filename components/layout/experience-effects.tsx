"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Progressive enhancement: native scroll, pointer and content always remain available. */
export function ExperienceEffects() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(pointer: fine) and (min-width: 768px)");
    let lenis: Lenis | undefined;
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!motion.matches && desktop.matches) {
        lenis = new Lenis({
          autoRaf: true,
          lerp: 0.13,
          smoothWheel: true,
          syncTouch: false,
        });
      }
    };
    configure();
    const scroll = () => {
      const ratio =
        scrollY /
        Math.max(1, document.documentElement.scrollHeight - innerHeight);
      progress.current?.style.setProperty("transform", `scaleX(${ratio})`);
      document.documentElement.classList.toggle("has-scrolled", scrollY > 60);
    };
    const anchor = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (
        !link ||
        !lenis ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        link.classList.contains("skip-link")
      )
        return;
      const id = link.hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      history.pushState(null, "", link.hash);
      lenis.scrollTo(target, {
        offset: -110,
        duration: 0.9,
        onComplete: () => {
          // Preserve keyboard anchor semantics without adding persistent tab stops.
          if (!target.hasAttribute("tabindex"))
            target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        },
      });
    };
    const pointer = (event: PointerEvent) => {
      if (
        !cursor.current ||
        !desktop.matches ||
        motion.matches ||
        event.pointerType !== "mouse"
      )
        return;
      cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const interactive = !!(event.target as Element).closest(
        "a, button, summary",
      );
      cursor.current.dataset.active = String(interactive);
      cursor.current.dataset.visible = "true";
    };
    const leave = () => {
      if (cursor.current) cursor.current.dataset.visible = "false";
    };
    scroll();
    addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("click", anchor);
    document.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("pointerleave", leave);
    motion.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => {
      lenis?.destroy();
      removeEventListener("scroll", scroll);
      document.removeEventListener("click", anchor);
      document.removeEventListener("pointermove", pointer);
      document.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
    };
  }, []);
  return (
    <>
      <div className="scroll-progress" ref={progress} aria-hidden="true" />
      <div className="cursor-follower" ref={cursor} aria-hidden="true">
        <span />
      </div>
    </>
  );
}
