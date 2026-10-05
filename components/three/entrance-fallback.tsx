"use client";
import { useId } from "react";
import { createOrbitalArchitecture, createSurface } from "./geometry";

export function EntranceFallback({ exiting }: { exiting: boolean }) {
  const { connections } = createSurface(18, 22);
  const { orbits } = createOrbitalArchitecture(80);
  const glow = useId();
  const lines: string[] = [];
  const orbitalLines: string[] = [];
  const project = (x: number, y: number, z: number) => [
    300 + x * 52 + z * 18,
    240 - y * 52 - x * 10,
  ];
  for (let i = 0; i < connections.length; i += 6) {
    const a = project(connections[i], connections[i + 1], connections[i + 2]);
    const b = project(
      connections[i + 3],
      connections[i + 4],
      connections[i + 5],
    );
    lines.push(
      `M${a[0].toFixed(2)},${a[1].toFixed(2)}L${b[0].toFixed(2)},${b[1].toFixed(2)}`,
    );
  }
  for (let i = 0; i < orbits.length; i += 6) {
    const a = project(orbits[i], orbits[i + 1], orbits[i + 2]);
    const b = project(orbits[i + 3], orbits[i + 4], orbits[i + 5]);
    orbitalLines.push(
      `M${a[0].toFixed(2)},${a[1].toFixed(2)}L${b[0].toFixed(2)},${b[1].toFixed(2)}`,
    );
  }
  return (
    <svg
      className={`entrance-fallback${exiting ? " is-exiting" : ""}`}
      viewBox="0 0 600 480"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={glow} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1473ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#030711" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="480" fill={`url(#${glow})`} />
      <path
        d={orbitalLines.join("")}
        stroke="#73aaff"
        strokeWidth="0.7"
        opacity="0.28"
      />
      <path
        d={lines.join("")}
        stroke="#3d8cff"
        strokeWidth="0.7"
        opacity="0.65"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset="0"
      />
    </svg>
  );
}
