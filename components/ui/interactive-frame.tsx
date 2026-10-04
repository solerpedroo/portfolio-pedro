"use client";
import { useRef, type ReactNode, type PointerEvent } from "react";
export function InteractiveFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    ref.current?.style.setProperty("--tilt-x", `${(0.5 - y) * 4}deg`);
    ref.current?.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
    ref.current?.style.setProperty("--pointer-x", `${x * 100}%`);
    ref.current?.style.setProperty("--pointer-y", `${y * 100}%`);
  }
  function reset() {
    ref.current?.style.setProperty("--tilt-x", "0deg");
    ref.current?.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div
      ref={ref}
      className={`interactive-frame ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
