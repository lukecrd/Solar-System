import { OrbitControls, Line, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  DodecahedronGeometry,
  DoubleSide,
  GLSL3,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  ShaderMaterial,
  Sprite,
  SRGBColorSpace,
  Vector3,
  type Group,
  type Mesh,
} from "three";
import { place, placeTheta } from "@/solar/orbit";
import {
  focusDistance,
  PLANETS,
  SUN,
  type BodyId,
  type Planet,
  type Satellite,
} from "@/solar/planets";
import { sim } from "@/solar/sim";
import { useSolar } from "@/solar/store";
import { cloudTexture, glowTexture, planetTexture } from "@/solar/textures";

const HOME = new Vector3(0, 38, 88);
const ORIGIN = new Vector3(0, 0, 0);
const scratchVec = new Vector3();
const ACCENT = "#d7b15a";
const SCENE = "#06070c";
const scratch = { x: 0, y: 0, z: 0 };

const BELT_COUNT = 520;

function Clock() {
  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    const { paused, speed } = useSolar.getState();
    if (!paused) sim.elapsed += dt * speed;
  });
  return null;
}

function OrbitTrail({ planet }: { planet: Planet }) {
  const selected = useSolar((state) => state.selected);
  const trails = useSolar((state) => state.trails);
  const points = useMemo(() => {
    const sampled: [number, number, number][] = [];
    const steps = 180;
    for (let i = 0; i <= steps; i++) {
      placeTheta(scratch, planet, (i / steps) * Math.PI * 2);
      sampled.push([scratch.x, scratch.y, scratch.z]);
    }
    return sampled;
  }, [planet]);
  if (!trails) return null;
  const active = selected === planet.id;
  return (
    <Line
      points={points}
      color={active ? ACCENT : planet.color}
      transparent
      opacity={active ? 0.9 : 0.38}
      lineWidth={active ? 1.6 : 1}
    />
  );
}

function Rings({
  inner,
  outer,
  color,
  opacity,
}: {
  inner: number;
  outer: number;
  color: string;
  opacity: number;
}) {
  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        side: DoubleSide,
        depthWrite: false,
        glslVersion: GLSL3,
        uniforms: {
          uColor: { value: new Color(color) },
          uInner: { value: inner },
          uOuter: { value: outer },
          uOpacity: { value: opacity },
        },
        vertexShader: `
          out vec2 vXy;
          void main() {
            vXy = position.xy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          in vec2 vXy;
          uniform vec3 uColor;
          uniform float uInner;
          uniform float uOuter;
          uniform float uOpacity;
          out vec4 fragColor;
          void main() {
            float r = length(vXy);
            float t = clamp((r - uInner) / max(0.0001, uOuter - uInner), 0.0, 1.0);
            float bands = 0.55 + 0.45 * sin(t * 54.0 + sin(t * 17.0));
            float gap = smoothstep(0.02, 0.0, abs(t - 0.48));
            float edge = smoothstep(0.0, 0.04, t) * smoothstep(1.0, 0.9, t);
            float alpha = uOpacity * bands * (1.0 - gap * 0.9) * edge;
            fragColor = vec4(uColor, alpha);
          }
        `,
      }),
    [color, inner, opacity, outer],
  );

  useEffect(() => () => material.dispose(), [material]);

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} material={material}>
      <ringGeometry args={[inner, outer, 128]} />
    </mesh>
  );
}

function Moon({ satellite, onPick }: { satellite: Satellite; onPick: (event: ThreeEvent<MouseEvent>) => void }) {
  const ref = useRef<Mesh>(null);
  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const theta = (sim.elapsed / satellite.period) * Math.PI * 2 + satellite.phase;
    mesh.position.set(Math.cos(theta) * satellite.orbit, 0, Math.sin(theta) * satellite.orbit);
    mesh.rotation.y = theta;
  });

  return (
    <mesh ref={ref} onClick={onPick}>
      <sphereGeometry args={[satellite.radius, 20, 16]} />
      <meshStandardMaterial color={satellite.color} roughness={0.9} metalness={0} emissive={satellite.color} emissiveIntensity={0.08} />
    </mesh>
  );
}

function BodyLabel({ name, lift }: { name: string; lift: number }) {
  const labels = useSolar((state) => state.labels);
  const ref = useRef<Sprite>(null);
  const map = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "600 64px 'IBM Plex Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgba(6,7,12,0.85)";
    ctx.strokeText(name.toUpperCase(), 256, 64);
    ctx.fillStyle = "#e7edf6";
    ctx.fillText(name.toUpperCase(), 256, 64);
    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, [name]);

  useEffect(() => () => map?.dispose(), [map]);

  useFrame(({ camera: cam }) => {
    const sprite = ref.current;
    if (!sprite) return;
    sprite.getWorldPosition(scratchVec);
    const distance = Math.max(4, cam.position.distanceTo(scratchVec));
    const height = distance * 0.034;
    sprite.scale.set(height * 4, height, 1);
  });

  if (!labels || !map) return null;
  return (
    <sprite ref={ref} position={[0, lift, 0]} raycast={() => null}>
      <spriteMaterial map={map} transparent depthWrite={false} toneMapped={false} />
    </sprite>
  );
}

function PlanetBody({ planet }: { planet: Planet }) {
  const group = useRef<Group>(null);
  const spin = useRef<Mesh>(null);
  const clouds = useRef<Mesh>(null);
  const selected = useSolar((state) => state.selected === planet.id);
  const map = useMemo(() => planetTexture(planet.texture), [planet.texture]);
  const cloudsMap = useMemo(() => (planet.texture === "earth" ? cloudTexture() : null), [planet.texture]);

  useFrame(() => {
    const anchor = group.current;
    if (!anchor) return;
    place(scratch, planet, sim.elapsed);
    anchor.position.set(scratch.x, scratch.y, scratch.z);
    const slot = sim.positions[planet.id];
    slot.x = scratch.x;
    slot.y = scratch.y;
    slot.z = scratch.z;
    if (spin.current) spin.current.rotation.y = sim.elapsed * planet.spin;
    if (clouds.current) clouds.current.rotation.y = sim.elapsed * planet.spin * 1.2 + 0.4;
  });

  const pick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    useSolar.getState().select(planet.id);
  };
  const lift = (planet.ring ? planet.ring.outer : planet.radius) + 0.42;

  return (
    <group ref={group}>
      <BodyLabel name={planet.name} lift={lift} />
      <group rotation={[0, 0, planet.tilt]}>
        <mesh
          ref={spin}
          onClick={pick}
          onPointerOver={(event) => {
            event.stopPropagation();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "";
          }}
        >
          <sphereGeometry args={[planet.radius, 48, 32]} />
          <meshStandardMaterial
            map={map}
            roughness={0.82}
            metalness={0.02}
            emissive={planet.color}
            emissiveIntensity={0.16}
          />
        </mesh>
        {cloudsMap ? (
          <mesh ref={clouds} scale={1.03}>
            <sphereGeometry args={[planet.radius, 40, 28]} />
            <meshStandardMaterial
              map={cloudsMap}
              transparent
              opacity={0.9}
              depthWrite={false}
              roughness={1}
              metalness={0}
            />
          </mesh>
        ) : null}
        {planet.atmosphere ? (
          <mesh scale={1.08} raycast={() => null}>
            <sphereGeometry args={[planet.radius, 32, 24]} />
            <meshBasicMaterial color={planet.atmosphere} transparent opacity={0.12} depthWrite={false} />
          </mesh>
        ) : null}
        {planet.ring ? <Rings {...planet.ring} /> : null}
      </group>
      {planet.satellites?.map((satellite) => (
        <Moon key={satellite.name} satellite={satellite} onPick={pick} />
      ))}
      {selected ? (
        <mesh rotation={[Math.PI / 2, 0, 0]} raycast={() => null}>
          <torusGeometry args={[lift * 0.72, Math.max(0.012, planet.radius * 0.02), 10, 72]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.85} />
        </mesh>
      ) : null}
    </group>
  );
}

function Sun() {
  const spin = useRef<Mesh>(null);
  const glow = useRef<Sprite>(null);
  const map = useMemo(() => glowTexture(), []);

  useFrame(() => {
    if (spin.current) spin.current.rotation.y = sim.elapsed * 0.12;
    if (glow.current) {
      const scale = 9.2 + Math.sin(sim.elapsed * 0.85) * 0.28;
      glow.current.scale.set(scale, scale, 1);
    }
  });

  const pick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    useSolar.getState().select("sun");
  };

  return (
    <group>
      <BodyLabel name={SUN.name} lift={SUN.radius + 0.7} />
      <sprite ref={glow} scale={[9.2, 9.2, 1]} raycast={() => null}>
        <spriteMaterial map={map} transparent depthWrite={false} blending={AdditiveBlending} toneMapped={false} />
      </sprite>
      <mesh
        ref={spin}
        onClick={pick}
        onPointerOver={(event) => {
          event.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "";
        }}
      >
        <sphereGeometry args={[SUN.radius, 48, 32]} />
        <meshBasicMaterial color="#ffd28a" toneMapped={false} />
      </mesh>
      <mesh scale={1.08} raycast={() => null}>
        <sphereGeometry args={[SUN.radius, 32, 24]} />
        <meshBasicMaterial color="#ff9a3c" transparent opacity={0.28} depthWrite={false} toneMapped={false} />
      </mesh>
      <pointLight color="#fff1cc" intensity={90} distance={160} decay={1.15} />
    </group>
  );
}

function Belt() {
  const mesh = useRef<InstancedMesh>(null);
  const geo = useMemo(() => new DodecahedronGeometry(1, 0), []);
  const mat = useMemo(
    () => new MeshStandardMaterial({ color: "#8a7d6b", roughness: 1, metalness: 0.02 }),
    [],
  );

  useLayoutEffect(() => {
    const inst = mesh.current;
    if (!inst) return;
    const dummy = new Object3D();
    let seed = 99;
    const random = () => {
      seed = (seed * 16807 + 13) % 2147483647;
      return (seed & 2147483647) / 2147483647;
    };
    for (let i = 0; i < BELT_COUNT; i++) {
      const theta = random() * Math.PI * 2;
      const radius = 19.4 + random() * 2.5;
      dummy.position.set(Math.cos(theta) * radius, (random() - 0.5) * 0.42, Math.sin(theta) * radius);
      dummy.rotation.set(random() * 6, random() * 6, random() * 6);
      const scale = 0.035 + random() * 0.07;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    inst.computeBoundingSphere();
  }, []);

  useEffect(
    () => () => {
      geo.dispose();
      mat.dispose();
    },
    [geo, mat],
  );

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y = sim.elapsed * 0.01;
  }, 0);

  return <instancedMesh ref={mesh} args={[geo, mat, BELT_COUNT]} frustumCulled={false} />;
}

import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function CameraRig() {
  const controls = useRef<OrbitControlsImpl>(null);
  const camera = useThree((state) => state.camera);
  const selected = useSolar((state) => state.selected);
  const nonce = useSolar((state) => state.nonce);
  const rig = useRef({
    mode: "free" as "free" | "chase" | "follow",
    id: null as BodyId | null,
    offset: new Vector3(0, 8, 16),
  });
  const body = useMemo(() => new Vector3(), []);
  const offset = useMemo(() => new Vector3(), []);
  const prev = useMemo(() => new Vector3(), []);

  const skipBoot = useRef(true);

  useEffect(() => {
    const ctrl = controls.current;
    if (!ctrl) return;
    if (skipBoot.current) {
      skipBoot.current = false;
      return;
    }
    const id = selected;
    rig.current.id = id;
    if (id === null) {
      rig.current.mode = "chase";
      ctrl.enabled = false;
      return;
    }
    const slot = sim.positions[id];
    body.set(slot.x, slot.y, slot.z);
    offset.copy(camera.position).sub(ctrl.target);
    if (offset.lengthSq() < 1e-4) offset.set(0.35, 0.5, 1);
    offset.normalize();
    if (offset.y < 0.22) {
      offset.y = 0.22;
      offset.normalize();
    }
    rig.current.offset.copy(offset).multiplyScalar(focusDistance(id));
    rig.current.mode = "chase";
    ctrl.enabled = false;
  }, [body, camera, nonce, offset, selected]);

  useFrame((_, delta) => {
    const ctrl = controls.current;
    if (!ctrl) return;
    const dt = Math.min(delta, 0.05);
    const ease = 1 - Math.exp(-3.6 * dt);
    const state = rig.current;

    if (state.mode === "chase" && state.id === null) {
      camera.position.lerp(HOME, ease);
      ctrl.target.lerp(ORIGIN, ease);
      if (camera.position.distanceTo(HOME) < 0.4 && ctrl.target.length() < 0.25) {
        camera.position.copy(HOME);
        ctrl.target.set(0, 0, 0);
        state.mode = "free";
        ctrl.enabled = true;
        ctrl.update();
      }
      return;
    }

    if (state.mode === "chase" && state.id) {
      const slot = sim.positions[state.id];
      body.set(slot.x, slot.y, slot.z);
      offset.copy(camera.position).sub(body);
      offset.lerp(state.offset, ease);
      camera.position.copy(body).add(offset);
      ctrl.target.copy(body);
      if (offset.distanceTo(state.offset) < 0.18) {
        state.mode = "follow";
        prev.copy(body);
        ctrl.enabled = true;
        ctrl.update();
      }
      return;
    }

    if (state.mode === "follow" && state.id) {
      const slot = sim.positions[state.id];
      body.set(slot.x, slot.y, slot.z);
      offset.copy(body).sub(prev);
      camera.position.add(offset);
      ctrl.target.add(offset);
      prev.copy(body);
    }
  }, -2);

  return (
    <OrbitControls
      ref={controls}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.72}
      zoomSpeed={0.75}
      minDistance={1.4}
      maxDistance={210}
      minPolarAngle={0.12}
      maxPolarAngle={Math.PI - 0.12}
    />
  );
}

function Scene() {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    Object.assign(window, {
      __elios: () => {
        const state = useSolar.getState();
        const earth = sim.positions.earth;
        return {
          paused: state.paused,
          speed: state.speed,
          selected: state.selected,
          elapsed: sim.elapsed,
          earthX: earth.x,
          earthZ: earth.z,
        };
      },
    });
  }, []);

  return (
    <>
      <color attach="background" args={[SCENE]} />
      <Clock />
      <ambientLight intensity={0.22} />
      <hemisphereLight args={["#24324a", "#07080c", 0.38]} />
      <Stars radius={200} depth={70} count={2800} factor={3.4} saturation={0} fade speed={reduce ? 0 : 0.18} />
      <Sun />
      <Belt />
      {PLANETS.map((planet) => (
        <group key={planet.id}>
          <OrbitTrail planet={planet} />
          <PlanetBody planet={planet} />
        </group>
      ))}
      <CameraRig />
    </>
  );
}

export default function Stage() {
  return (
    <Canvas
      camera={{ position: [HOME.x, HOME.y, HOME.z], fov: 42, near: 0.08, far: 500 }}
      dpr={[1, 1.6]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(SCENE);
        gl.outputColorSpace = SRGBColorSpace;
        gl.domElement.style.touchAction = "none";
      }}
    >
      <Scene />
    </Canvas>
  );
}
