import { useId } from "react";
import { createOrbitalArchitecture, createSurface } from "./geometry";
export function SurfaceFallback({ variant = "hero" }: { variant?: string }) {
  const gradient = useId();
  const { connections, positions } = createSurface(22, 20);
  const { orbits, beacons } = createOrbitalArchitecture(80);
  const project = (x: number, y: number, z: number) => [
    285 + x * 43 + z * 16,
    205 - y * 43 - x * 8,
  ];
  const path = (vertices: Float32Array) => {
    const lines: string[] = [];
    for (let i = 0; i < vertices.length; i += 6) {
      const a = project(vertices[i], vertices[i + 1], vertices[i + 2]);
      const b = project(vertices[i + 3], vertices[i + 4], vertices[i + 5]);
      lines.push(
        `M${a[0].toFixed(2)},${a[1].toFixed(2)}L${b[0].toFixed(2)},${b[1].toFixed(2)}`,
      );
    }
    return lines.join("");
  };
  return (
    <svg
      className="surface-fallback"
      viewBox="0 0 600 420"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradient}>
          <stop offset="0" stopColor="#408bff" stopOpacity="0.13" />
          <stop offset="1" stopColor="#408bff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="290" cy="205" rx="225" ry="200" fill={`url(#${gradient})`} />
      <g
        transform={
          variant === "transition"
            ? "translate(-100 65) scale(1.35 .68)"
            : variant === "contact"
              ? "translate(40 30) scale(.86)"
              : undefined
        }
      >
        <path
          d={path(orbits)}
          stroke="#73aaff"
          strokeWidth="0.7"
          opacity="0.25"
        />
        <path
          d={path(connections)}
          stroke="currentColor"
          strokeWidth="0.65"
          opacity="0.4"
        />
        {Array.from({ length: positions.length / 3 }, (_, i) => {
          if (i % 7 !== 0) return null;
          const [cx, cy] = project(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
          );
          return (
            <circle
              key={`field-${i}`}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 1.25 : 0.7}
              fill="#a5d4ff"
              opacity={i % 3 === 0 ? 0.8 : 0.4}
            />
          );
        })}
        {Array.from({ length: beacons.length / 3 }, (_, i) => {
          const [cx, cy] = project(
            beacons[i * 3],
            beacons[i * 3 + 1],
            beacons[i * 3 + 2],
          );
          return (
            <circle
              key={`orbit-${i}`}
              cx={cx}
              cy={cy}
              r="1.7"
              fill="#c4eaff"
              opacity="0.85"
            />
          );
        })}
      </g>
    </svg>
  );
}
