import { Line, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  CanvasTexture,
  DodecahedronGeometry,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  Sprite,
  SRGBColorSpace,
  Vector3,
  type Group,
  type Mesh,
  type ShaderMaterial,
  type Texture,
} from "three";
import { SkyField } from "@/components/solar/SkyField";
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
import {
  createAtmoMaterial,
  createCloudMaterial,
  createSunMaterial,
  createSurfaceMaterial,
  createTexturedRingMaterial,
  createThinRingMaterial,
  prepareMaps,
  unitSphere,
  unitSphereLow,
  type CosmosMaps,
} from "@/solar/surface";
import { glowTexture } from "@/solar/textures";

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
  // Boolean selector: only the trails whose highlight actually flips re-render on selection.
  const active = useSolar((state) => state.selected === planet.id);
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

const ATMOS: Partial<Record<BodyId, { color: string; strength: number; power: number; scale: number }>> = {
  venus: { color: "#f3d7a6", strength: 0.78, power: 1.65, scale: 1.03 },
  earth: { color: "#8eb6ff", strength: 0.9, power: 3.05, scale: 1.055 },
  mars: { color: "#e8aa90", strength: 0.38, power: 3.3, scale: 1.026 },
  jupiter: { color: "#e8c59a", strength: 0.48, power: 2.5, scale: 1.032 },
  saturn: { color: "#f3e0b8", strength: 0.4, power: 2.7, scale: 1.028 },
  uranus: { color: "#c5f4ee", strength: 0.62, power: 2.35, scale: 1.04 },
  neptune: { color: "#7c97ff", strength: 0.7, power: 2.45, scale: 1.038 },
};

function PlanetRings({
  material,
  inner,
  outer,
}: {
  material: ShaderMaterial;
  inner: number;
  outer: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame(() => {
    const mesh = ref.current;
    const center = material.uniforms.uCenter?.value as Vector3 | undefined;
    if (!mesh || !center) return;
    mesh.getWorldPosition(center);
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} material={material} raycast={() => null}>
      <ringGeometry args={[inner, outer, 196]} />
    </mesh>
  );
}

function Moon({
  satellite,
  map,
  onPick,
}: {
  satellite: Satellite;
  map: Texture;
  onPick: (event: ThreeEvent<MouseEvent>) => void;
}) {
  const ref = useRef<Mesh>(null);
  const material = useMemo(
    () =>
      createSurfaceMaterial({
        map,
        tint: satellite.color,
        bump: satellite.radius > 0.07 ? 1.15 : 0.65,
        gloss: 26,
        specStrength: 0.05,
        soft: 0.02,
        limb: 0.04,
      }),
    [map, satellite.color, satellite.radius],
  );
  useEffect(() => () => material.dispose(), [material]);
  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const theta = (sim.elapsed / satellite.period) * Math.PI * 2 + satellite.phase;
    mesh.position.set(Math.cos(theta) * satellite.orbit, 0, Math.sin(theta) * satellite.orbit);
    mesh.rotation.y = -theta; // tidally locked: same face toward the planet
  });

  return (
    <mesh ref={ref} geometry={unitSphereLow()} material={material} dispose={null} scale={satellite.radius} onClick={onPick} />
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

function PlanetBody({ planet, maps }: { planet: Planet; maps: CosmosMaps }) {
  const group = useRef<Group>(null);
  const spin = useRef<Mesh>(null);
  const clouds = useRef<Mesh>(null);
  const selected = useSolar((state) => state.selected === planet.id);
  const geometry = useMemo(() => unitSphere(), []);
  const material = useMemo(() => {
    const ring = planet.ring;
    return createSurfaceMaterial({
      map: maps[planet.texture],
      night: planet.texture === "earth" ? maps.earthNight : null,
      spec: planet.texture === "earth" ? maps.earthSpec : null,
      normal: planet.texture === "earth" ? maps.earthNormal : null,
      ring: ring && planet.id === "saturn" ? maps.saturnRing : null,
      ringInner: ring ? ring.inner / planet.radius : 0,
      ringOuter: ring ? ring.outer / planet.radius : 1,
      bump: planet.texture === "mercury" || planet.texture === "mars" ? 0.85 : 0,
      gloss: planet.texture === "earth" ? 96 : planet.texture === "venus" ? 14 : planet.kind.includes("gassoso") || planet.kind.includes("ghiaccio") ? 20 : 36,
      specStrength: planet.texture === "venus" ? 0.22 : planet.kind.startsWith("Gigante") ? 0.16 : 0.05,
      soft: planet.texture === "venus" ? 0.2 : planet.texture === "earth" ? 0.06 : planet.kind.startsWith("Gigante") ? 0.09 : 0.025,
      limb: planet.texture === "venus" ? 0.42 : planet.kind.startsWith("Gigante") ? 0.5 : planet.texture === "earth" ? 0.12 : 0.05,
      nightStrength: planet.texture === "earth" ? 2.35 : 0,
      normalScale: 0.72,
    });
  }, [maps, planet]);
  const cloudMat = useMemo(
    () => (planet.texture === "earth" ? createCloudMaterial(maps.earthClouds) : null),
    [maps.earthClouds, planet.texture],
  );
  const atmo = ATMOS[planet.id];
  const atmoMat = useMemo(
    () => (atmo ? createAtmoMaterial(atmo.color, atmo.strength, atmo.power) : null),
    [atmo],
  );
  const ringMat = useMemo(() => {
    if (!planet.ring) return null;
    if (planet.id === "saturn") {
      return createTexturedRingMaterial(maps.saturnRing, planet.ring.inner, planet.ring.outer, planet.radius);
    }
    return createThinRingMaterial(planet.ring.inner, planet.ring.outer, planet.ring.color, planet.ring.opacity);
  }, [maps.saturnRing, planet]);

  useEffect(
    () => () => {
      material.dispose();
      cloudMat?.dispose();
      atmoMat?.dispose();
      ringMat?.dispose();
    },
    [atmoMat, cloudMat, material, ringMat],
  );

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
    if (clouds.current) clouds.current.rotation.y = sim.elapsed * planet.spin * 1.15 + 0.4;
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
          geometry={geometry}
          material={material}
          dispose={null}
          scale={planet.radius}
          onClick={pick}
          onPointerOver={(event) => {
            event.stopPropagation();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "";
          }}
        />
        {cloudMat ? (
          <mesh ref={clouds} geometry={geometry} material={cloudMat} dispose={null} scale={planet.radius * 1.012} raycast={() => null} />
        ) : null}
        {atmo && atmoMat ? (
          <mesh geometry={geometry} material={atmoMat} dispose={null} scale={planet.radius * atmo.scale} raycast={() => null} />
        ) : null}
        {planet.ring && ringMat ? (
          <PlanetRings material={ringMat} inner={planet.ring.inner} outer={planet.ring.outer} />
        ) : null}
      </group>
      {planet.satellites?.map((satellite) => (
        <Moon key={satellite.name} satellite={satellite} map={maps.moon} onPick={pick} />
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

function Sun({ map }: { map: Texture }) {
  const spin = useRef<Mesh>(null);
  const glow = useRef<Sprite>(null);
  const corona = useMemo(() => glowTexture(), []);
  const material = useMemo(() => createSunMaterial(map), [map]);
  useEffect(() => () => material.dispose(), [material]);

  useFrame(() => {
    if (spin.current) spin.current.rotation.y = -sim.elapsed * 0.04;
    if (glow.current) {
      const scale = 11.4 + Math.sin(sim.elapsed * 0.85) * 0.22;
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
      <sprite ref={glow} scale={[11.4, 11.4, 1]} raycast={() => null}>
        <spriteMaterial map={corona} transparent depthWrite={false} blending={AdditiveBlending} toneMapped={false} />
      </sprite>
      <mesh
        ref={spin}
        material={material}
        onClick={pick}
        onPointerOver={(event) => {
          event.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "";
        }}
      >
        <sphereGeometry args={[SUN.radius, 64, 48]} />
      </mesh>
      <pointLight color="#fff1cc" intensity={70} distance={180} decay={1.2} />
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

// Module-level so useTexture keeps a stable result: an inline object literal would
// produce a new `maps` on every Scene render, re-running prepareMaps (re-uploading
// every texture) and rebuilding every planet material.
const MAP_URLS = {
  mercury: "/cosmos/mercury.jpg",
  venus: "/cosmos/venus.jpg",
  earth: "/cosmos/earth_day.jpg",
  mars: "/cosmos/mars.jpg",
  jupiter: "/cosmos/jupiter.jpg",
  saturn: "/cosmos/saturn.jpg",
  uranus: "/cosmos/uranus.jpg",
  neptune: "/cosmos/neptune.jpg",
  earthNight: "/cosmos/earth_night.png",
  earthSpec: "/cosmos/earth_spec.jpg",
  earthNormal: "/cosmos/earth_normal.jpg",
  earthClouds: "/cosmos/earth_clouds.png",
  saturnRing: "/cosmos/saturn_ring.png",
  sun: "/cosmos/sun.jpg",
  moon: "/cosmos/moon.jpg",
  stars: "/cosmos/sky.jpg",
};

function Scene() {
  const maps = useTexture(MAP_URLS) as CosmosMaps;

  useLayoutEffect(() => {
    prepareMaps(maps);
  }, [maps]);

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
      <ambientLight intensity={0.05} />
      <SkyField map={maps.stars} />
      <Sun map={maps.sun} />
      <Belt />
      {PLANETS.map((planet) => (
        <group key={planet.id}>
          <OrbitTrail planet={planet} />
          <PlanetBody planet={planet} maps={maps} />
        </group>
      ))}
      <CameraRig />
    </>
  );
}

// Phones/tablets: full-screen custom shaders + MSAA at DPR 1.6 is fill-rate bound on
// mobile GPUs, so cap lower there. Stage only mounts client-side.
const DPR: [number, number] =
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches ? [1, 1.3] : [1, 1.6];

export default function Stage() {
  return (
    <Canvas
      camera={{ position: [HOME.x, HOME.y, HOME.z], fov: 42, near: 0.08, far: 1400 }}
      dpr={DPR}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(SCENE);
        gl.outputColorSpace = SRGBColorSpace;
        gl.domElement.style.touchAction = "none";
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
