"use client";
import { createSurface } from "./geometry";

export function EntranceFallback({ exiting }: { exiting: boolean }) {
  const { connections } = createSurface(18, 22);
  const lines: string[] = [];
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
  return (
    <svg
      className={`entrance-fallback${exiting ? " is-exiting" : ""}`}
      viewBox="0 0 600 480"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="entrance-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1473ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#030711" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="480" fill="url(#entrance-glow)" />
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
