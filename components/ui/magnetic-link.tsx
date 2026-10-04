"use client";
import type { ReactNode, PointerEvent } from "react";
export function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (
      event.pointerType !== "mouse" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.07}px, ${(event.clientY - rect.top - rect.height / 2) * 0.13}px)`;
  }
  return (
    <a
      href={href}
      className={className}
      onPointerMove={move}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
    >
      {children}
    </a>
  );
}
