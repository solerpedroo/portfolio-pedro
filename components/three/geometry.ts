// A folded computational field, deterministic across WebGL and SVG.
export function createSurface(columns = 26, rows = 30) {
  const positions: number[] = [];
  const connections: number[] = [];
  for (let y = 0; y < rows; y++) {
    const t = y / (rows - 1);
    const angle = t * Math.PI * 1.65 - 1.1;
    for (let x = 0; x < columns; x++) {
      const u = (x / (columns - 1) - 0.5) * 3.1;
      const radius = 1.75 + Math.sin(t * Math.PI) * 0.8;
      positions.push(
        Math.cos(angle) * radius + u * Math.cos(angle * 0.65),
        (t - 0.5) * 6.4 + Math.sin(u * 1.5 + t * 3) * 0.25,
        Math.sin(angle) * radius + u * Math.sin(angle * 0.65),
      );
    }
  }
  const connect = (a: number, b: number) =>
    connections.push(
      ...positions.slice(a * 3, a * 3 + 3),
      ...positions.slice(b * 3, b * 3 + 3),
    );
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < columns; x++) {
      const i = y * columns + x;
      if (x < columns - 1) connect(i, i + 1);
      if (y < rows - 1) connect(i, i + columns);
      if (x < columns - 1 && y < rows - 1 && (x + y) % 4 === 0)
        connect(i, i + columns + 1);
    }
  const stars = new Float32Array(80 * 3);
  for (let i = 0; i < stars.length; i++)
    stars[i] = Math.sin(i * 127.1 + 41.7) * (i % 3 === 2 ? 4 : 6);
  return {
    positions: new Float32Array(positions),
    connections: new Float32Array(connections),
    stars,
  };
}

// Three interrupted elliptical instruments around the field, all in one draw call.
export function createOrbitalArchitecture(segments = 96) {
  const orbits: number[] = [];
  const beacons: number[] = [];
  const rails: number[] = [];
  for (let ring = 0; ring < 3; ring++) {
    const radius = 3.15 + ring * 0.38;
    const tilt = 0.4 + ring * 0.66;
    const point = (angle: number) => {
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return [x, z * Math.sin(tilt), z * Math.cos(tilt)];
    };
    for (let i = 0; i < segments; i++) {
      // Gaps turn the rings into measuring arcs instead of a solid cage.
      if ((i + ring * 11) % segments > segments * 0.83) continue;
      orbits.push(
        ...point((i / segments) * Math.PI * 2),
        ...point(((i + 1) / segments) * Math.PI * 2),
      );
    }
    for (let i = 0; i < 3; i++) beacons.push(...point(i * 2.1 + ring * 0.7));
  }
  for (let i = 0; i < 14; i++) {
    const y = (i / 13 - 0.5) * 5.8;
    const angle = (i / 13) * Math.PI * 1.65 - 1.1;
    const radius = 1.75 + Math.sin((i / 13) * Math.PI) * 0.8;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    rails.push(x - 0.12, y, z, x + 0.12, y, z);
  }
  return {
    orbits: new Float32Array(orbits),
    beacons: new Float32Array(beacons),
    rails: new Float32Array(rails),
  };
}
