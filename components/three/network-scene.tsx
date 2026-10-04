"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerformanceMonitor } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AdditiveBlending,
  MathUtils,
  type Group,
  type ShaderMaterial,
} from "three";
import { createSurface } from "./geometry";
const vertex = `uniform float uTime; varying float vPulse;
void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vPulse = .5 + .5*sin(position.y*1.8-uTime*.7); gl_PointSize = (6.0+vPulse*5.0)*(5.0/-mv.z); gl_Position = projectionMatrix*mv; }`;
const fragment = `varying float vPulse;
void main(){ float d=length(gl_PointCoord-.5); float glow=exp(-d*9.0); float core=1.0-smoothstep(.06,.2,d); gl_FragColor=vec4(mix(vec3(.05,.35,1.),vec3(.5,.85,1.),core), (glow*.65+core*.7)*(.5+vPulse*.5)); }`;
function Network({
  active,
  compact,
  variant,
}: {
  active: boolean;
  compact: boolean;
  variant: string;
}) {
  const group = useRef<Group>(null);
  const shader = useRef<ShaderMaterial>(null);
  const elapsed = useRef(0);
  const scroll = useRef(0);
  const { invalidate } = useThree();
  const data = useMemo(
    () => createSurface(compact ? 16 : 26, compact ? 22 : 34),
    [compact],
  );
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useEffect(() => {
    const update = () => {
      scroll.current = Math.min(scrollY / innerHeight, 1.5);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    invalidate();
    if (!active) return;
    const timer = window.setInterval(invalidate, compact ? 66 : 33);
    return () => window.clearInterval(timer);
  }, [active, compact, invalidate]);
  useFrame(({ pointer, camera }, delta) => {
    if (!group.current || !active) return;
    elapsed.current += Math.min(delta, 0.07);
    const t = elapsed.current;
    const transition = variant === "hero" ? scroll.current : 0;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      -0.7 + Math.sin(t * 0.12) * 0.14 + pointer.x * 0.2 + transition * 0.45,
      3,
      delta,
    );
    group.current.rotation.z = MathUtils.damp(
      group.current.rotation.z,
      -0.3 + pointer.y * 0.05 + transition * 0.16,
      3,
      delta,
    );
    group.current.position.y = Math.sin(t * 0.3) * 0.08;
    camera.position.z = MathUtils.damp(
      camera.position.z,
      (compact ? 11 : 10) + transition * 1.8,
      3,
      delta,
    );
    if (shader.current) shader.current.uniforms.uTime.value = t;
  });
  return (
    <>
      <Float
        speed={active ? 0.65 : 0}
        rotationIntensity={0.08}
        floatIntensity={0.1}
      >
        <group
          ref={group}
          rotation={[0.14, -0.7, -0.3]}
          scale={
            variant === "contact"
              ? 0.85
              : variant === "transition"
                ? [1.4, 0.65, 1]
                : 1
          }
        >
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[data.connections, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#2781ff"
              transparent
              opacity={0.27}
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
      </Float>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[data.stars, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#5da3ff"
          size={0.015}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </points>
    </>
  );
}
export default function NetworkScene({
  active,
  compact,
  onFailure,
  variant = "hero",
}: {
  active: boolean;
  compact: boolean;
  onFailure: () => void;
  variant?: string;
}) {
  const [degraded, setDegraded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasReady, setCanvasReady] = useState(0);
  const low = compact || degraded;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener("webglcontextlost", onFailure);
    canvas.setAttribute("data-scene-ready", "true");
    return () => {
      canvas.removeEventListener("webglcontextlost", onFailure);
      canvas.removeAttribute("data-scene-ready");
    };
  }, [canvasReady, onFailure]);
  return (
    <Canvas
      dpr={low ? 1 : [1, 1.5]}
      frameloop="demand"
      camera={{ position: [0, 0, low ? 11 : 10], fov: 43 }}
      gl={{ antialias: !low, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
      onCreated={({ gl }) => {
        canvasRef.current = gl.domElement;
        setCanvasReady((n) => n + 1);
      }}
    >
      <PerformanceMonitor
        bounds={() => [12, 50]}
        onDecline={() => setDegraded(true)}
        flipflops={1}
        onFallback={() => setDegraded(true)}
      />
      <Network active={active} compact={low} variant={variant} />
    </Canvas>
  );
}
