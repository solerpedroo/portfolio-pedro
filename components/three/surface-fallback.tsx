import { createSurface } from "./geometry";
export function SurfaceFallback() {
  const { connections } = createSurface(22, 15);
  const lines: string[] = [];
  const project = (x: number, y: number, z: number) => [
    260 + x * 45 + z * 16,
    205 - y * 48 - x * 8,
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
      className="surface-fallback"
      viewBox="0 0 600 420"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={lines.join("")}
        stroke="currentColor"
        strokeWidth="0.65"
        opacity="0.55"
      />
    </svg>
  );
}
