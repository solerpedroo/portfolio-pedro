"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  MathUtils,
  type Group,
  type ShaderMaterial,
} from "three";
import { createOrbitalArchitecture, createSurface } from "./geometry";

const vertex = `uniform float uTime; varying float vPulse;
void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vPulse = .5 + .5*sin(position.y*2.2-uTime*1.1); gl_PointSize = (7.0+vPulse*6.0)*(6.0/-mv.z); gl_Position = projectionMatrix*mv; }`;
const fragment = `varying float vPulse;
void main(){ float d=length(gl_PointCoord-.5); float glow=exp(-d*8.0); float core=1.0-smoothstep(.05,.18,d); gl_FragColor=vec4(mix(vec3(.04,.28,1.),vec3(.65,.9,1.),core), (glow*.75+core*.85)*(.55+vPulse*.55)); }`;

function EntranceMesh({ exiting }: { exiting: boolean }) {
  const group = useRef<Group>(null);
  const shader = useRef<ShaderMaterial>(null);
  const elapsed = useRef(0);
  const exitStarted = useRef<number | null>(null);
  const { invalidate } = useThree();
  const data = useMemo(() => createSurface(20, 26), []);
  const architecture = useMemo(() => createOrbitalArchitecture(80), []);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useEffect(() => {
    invalidate();
    const timer = window.setInterval(invalidate, 33);
    return () => window.clearInterval(timer);
  }, [invalidate]);

  useFrame(({ camera }, delta) => {
    elapsed.current += Math.min(delta, 0.05);
    const t = elapsed.current;
    const intro = Math.min(t / 1.05, 1);
    const ease = 1 - Math.pow(1 - intro, 3);
    if (exiting && exitStarted.current === null) exitStarted.current = t;
    const out = exiting
      ? Math.min((t - (exitStarted.current ?? t)) / 0.55, 1)
      : 0;
    const outEase = out * out;

    if (group.current) {
      group.current.rotation.y = MathUtils.lerp(-0.9, -0.7, ease) + t * 0.035;
      group.current.rotation.x = MathUtils.lerp(0.2, 0.14, ease);
      group.current.rotation.z = -0.3;
      const scale = MathUtils.lerp(0.85, 1, ease) * (1 + outEase * 0.1);
      group.current.scale.setScalar(scale);
    }
    camera.position.z = MathUtils.lerp(11, 10, ease) + outEase;
    if (shader.current) shader.current.uniforms.uTime.value = t * 1.35;
  });

  return (
    <>
      <fog attach="fog" args={["#030711", 8, 22]} />
      <group ref={group} rotation={[0.35, -1.1, 0]}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[architecture.orbits, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#75abff"
            transparent
            opacity={0.2}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[architecture.beacons, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#bdeaff"
            size={0.05}
            transparent
            opacity={0.8}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </points>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[data.connections, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#2a7dff"
            transparent
            opacity={0.32}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[data.positions, 3]}
            />
          </bufferGeometry>
          <shaderMaterial
            ref={shader}
            vertexShader={vertex}
            fragmentShader={fragment}
            uniforms={uniforms}
            transparent
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </points>
      </group>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[data.stars, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#6eb4ff"
          size={0.02}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function EntranceScene({ exiting }: { exiting: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="demand"
      camera={{ position: [0, 0, 11], fov: 43 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      }}
      aria-hidden="true"
      className="entrance-canvas"
    >
      <EntranceMesh exiting={exiting} />
    </Canvas>
  );
}
