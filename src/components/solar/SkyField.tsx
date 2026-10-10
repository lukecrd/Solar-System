import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  GLSL3,
  Group,
  ShaderMaterial,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Vector3,
  type Texture,
} from "three";
import { CHART_FIGURES, CHART_GALAXIES, CHART_LINES, CHART_STARS, type ChartFigure, type ChartGalaxy, type ChartStar } from "@/solar/skycatalog";
import { useSolar, type SkyPick } from "@/solar/store";

const STAR_VERT = `
  attribute float aSize;
  attribute float aPhase;
  varying vec3 vColor;
  uniform float uTime;
  uniform float uPixelRatio;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.86 + 0.14 * sin(uTime * (0.45 + aPhase) + aPhase * 12.0);
    gl_PointSize = clamp(aSize * tw * uPixelRatio * (520.0 / max(12.0, -mv.z)), 0.7, 6.5);
    gl_Position = projectionMatrix * mv;
  }
`;

const STAR_FRAG = `
  uniform sampler2D uStar;
  varying vec3 vColor;
  out vec4 fragColor;
  void main() {
    vec4 tex = texture(uStar, gl_PointCoord);
    if (tex.a < 0.04) discard;
    fragColor = vec4(vColor * tex.rgb, tex.a);
  }
`;

const POOL = 48;
const STAR_R = 532;
const GALAXY_R = 518;
const LINE_R = 504;

function starSprite() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const glow = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  glow.addColorStop(0, "rgba(255,255,255,1)");
  glow.addColorStop(0.16, "rgba(255,255,255,0.95)");
  glow.addColorStop(0.42, "rgba(255,255,255,0.22)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function galaxySprite() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const glow = ctx.createRadialGradient(128, 128, 8, 128, 128, 124);
  glow.addColorStop(0, "rgba(255,248,236,0.95)");
  glow.addColorStop(0.18, "rgba(214,226,255,0.55)");
  glow.addColorStop(0.45, "rgba(170,190,255,0.18)");
  glow.addColorStop(1, "rgba(140,160,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function labelTexture(name: string) {
  const canvas = document.createElement("canvas");
  const width = Math.max(220, Math.ceil(name.length * 34));
  canvas.width = width;
  canvas.height = 72;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.clearRect(0, 0, width, 72);
  ctx.font = "600 40px 'IBM Plex Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 8;
  ctx.strokeStyle = "rgba(6,7,12,0.9)";
  ctx.strokeText(name, width / 2, 38);
  ctx.fillStyle = "#f6f1e4";
  ctx.fillText(name, width / 2, 38);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return { texture, aspect: width / 72 };
}

function bvColor(bv: number): [number, number, number] {
  const t = Math.max(-0.3, Math.min(1.8, bv));
  if (t < 0) return [0.7, 0.82, 1];
  if (t < 0.25) return [0.84, 0.9, 1];
  if (t < 0.55) return [1, 0.97, 0.92];
  if (t < 0.95) return [1, 0.86, 0.62];
  return [1, 0.66, 0.45];
}

function pointSize(mag: number) {
  return Math.max(0.85, (5.5 - mag) ** 1.12 * 0.48);
}

function buildStars() {
  const count = CHART_STARS.length;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  CHART_STARS.forEach((star, index) => {
    positions[index * 3] = star.x * STAR_R;
    positions[index * 3 + 1] = star.y * STAR_R;
    positions[index * 3 + 2] = star.z * STAR_R;
    const [r, g, b] = bvColor(star.bv);
    colors[index * 3] = r;
    colors[index * 3 + 1] = g;
    colors[index * 3 + 2] = b;
    sizes[index] = pointSize(star.mag);
    phases[index] = (index % 97) / 97;
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  geometry.setAttribute("aSize", new BufferAttribute(sizes, 1));
  geometry.setAttribute("aPhase", new BufferAttribute(phases, 1));
  return geometry;
}

type Named =
  | { kind: "stella"; star: ChartStar }
  | { kind: "galassia"; galaxy: ChartGalaxy }
  | { kind: "costellazione"; figure: ChartFigure };

const NAMED: Named[] = [
  ...CHART_GALAXIES.map((galaxy) => ({ kind: "galassia" as const, galaxy })),
  ...CHART_FIGURES.map((figure) => ({ kind: "costellazione" as const, figure })),
  ...CHART_STARS.map((star) => ({ kind: "stella" as const, star })),
];

function namedPoint(item: Named, target: Vector3) {
  if (item.kind === "galassia") target.set(item.galaxy.x, item.galaxy.y, item.galaxy.z);
  else if (item.kind === "costellazione") target.set(item.figure.x, item.figure.y, item.figure.z);
  else target.set(item.star.x, item.star.y, item.star.z);
  return target;
}

function namedPick(item: Named): SkyPick {
  if (item.kind === "galassia") {
    return { kind: "galassia", name: item.galaxy.name, detail: item.galaxy.detail };
  }
  if (item.kind === "costellazione") {
    return { kind: "costellazione", name: item.figure.name, detail: "Costellazione · carta IAU" };
  }
  return { kind: "stella", name: item.star.name, detail: item.star.detail };
}

function namedLabel(item: Named) {
  if (item.kind === "galassia") return item.galaxy.name;
  if (item.kind === "costellazione") return item.figure.name;
  return item.star.name;
}

function namedRadius(item: Named) {
  if (item.kind === "galassia") return GALAXY_R;
  if (item.kind === "costellazione") return STAR_R * 0.99;
  return STAR_R;
}

function galaxyTint(kind: string) {
  if (kind === "irregolare") return "#f0c2ae";
  if (kind === "ellittica") return "#f3e6cf";
  return "#c5d4ff";
}

export function SkyField({ map }: { map: Texture }) {
  const group = useRef<Group>(null);
  const dpr = useThree((state) => state.gl.getPixelRatio());
  const camera = useThree((state) => state.camera);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sprite = useMemo(() => starSprite(), []);
  const glow = useMemo(() => galaxySprite(), []);
  const geometry = useMemo(() => buildStars(), []);
  const lines = useMemo(() => {
    const positions: number[] = [];
    for (const line of CHART_LINES) {
      for (let index = 1; index < line.length; index++) {
        const from = line[index - 1]!;
        const to = line[index]!;
        positions.push(from[0] * LINE_R, from[1] * LINE_R, from[2] * LINE_R);
        positions.push(to[0] * LINE_R, to[1] * LINE_R, to[2] * LINE_R);
      }
    }
    const lineGeometry = new BufferGeometry();
    lineGeometry.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    return lineGeometry;
  }, []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        vertexColors: true,
        glslVersion: GLSL3,
        toneMapped: false,
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: dpr },
          uStar: { value: sprite },
        },
        vertexShader: STAR_VERT,
        fragmentShader: STAR_FRAG,
      }),
    [dpr, sprite],
  );
  const labelCache = useMemo(() => new Map<string, { texture: CanvasTexture; aspect: number }>(), []);
  const pool = useRef<Sprite[]>([]);
  const down = useRef({ x: 0, y: 0 });
  const local = useMemo(() => new Vector3(), []);
  const world = useMemo(() => new Vector3(), []);
  const ndc = useMemo(() => new Vector3(), []);
  const hit = useMemo(() => new Vector3(), []);

  useEffect(
    () => () => {
      geometry.dispose();
      lines.dispose();
      material.dispose();
      sprite.dispose();
      glow.dispose();
      for (const entry of labelCache.values()) entry.texture.dispose();
      labelCache.clear();
    },
    [geometry, glow, labelCache, lines, material, sprite],
  );

  useFrame((_, delta) => {
    if (!reduce) material.uniforms.uTime!.value += Math.min(delta, 0.05);
    const root = group.current;
    if (!root) return;
    root.updateWorldMatrix(true, false);
    const labelsOn = useSolar.getState().labels;
    const overview = camera.position.length() > 58;
    type Candidate = { item: Named; rank: number; x: number; y: number; aspect: number };
    const candidates: Candidate[] = [];
    if (labelsOn) {
      for (const item of NAMED) {
        namedPoint(item, local);
        const radius = namedRadius(item);
        world.set(local.x * radius, local.y * radius, local.z * radius);
        root.localToWorld(world);
        ndc.copy(world).project(camera);
        if (ndc.z < -1 || ndc.z > 1) continue;
        if (Math.abs(ndc.x) > 1.02 || Math.abs(ndc.y) > 1.02) continue;
        const radial = Math.hypot(ndc.x, ndc.y);
        const name = namedLabel(item);
        let rank = 0;
        if (item.kind === "galassia") {
          if (overview && radial < 0.16) continue;
          rank = 42 - item.galaxy.mag;
        } else if (item.kind === "costellazione") {
          if (overview && radial < 0.3) continue;
          if (!overview && radial > 0.72) continue;
          rank = 5.2;
        } else {
          if (overview && radial < 0.2) continue;
          const { mag, proper } = item.star;
          if (!proper && mag > 4.5 && radial > 0.4) continue;
          if (!proper && mag > 3.5 && radial > 0.68) continue;
          rank = -mag + (proper ? 15 : 0);
          if (mag <= 1.5) rank += 4;
        }
        candidates.push({ item, rank, x: ndc.x, y: ndc.y, aspect: Math.max(2.2, name.length * 0.42) });
      }
      candidates.sort((a, b) => b.rank - a.rank);
    }
    const placed: { x: number; y: number; w: number; h: number }[] = [];
    const chosen: Candidate[] = [];
    for (const candidate of candidates) {
      const w = 0.02 + candidate.aspect * 0.012;
      const h = 0.034;
      const hitBox = placed.some(
        (box) => Math.abs(box.x - candidate.x) < (box.w + w) * 0.5 && Math.abs(box.y - candidate.y) < (box.h + h) * 0.5,
      );
      if (hitBox) continue;
      placed.push({ x: candidate.x, y: candidate.y, w, h });
      chosen.push(candidate);
      if (chosen.length === POOL) break;
    }
    const sprites = pool.current;
    for (let index = 0; index < sprites.length; index++) {
      const spriteLabel = sprites[index];
      if (!spriteLabel) continue;
      const candidate = chosen[index];
      if (!candidate) {
        spriteLabel.visible = false;
        continue;
      }
      const name = namedLabel(candidate.item);
      let entry = labelCache.get(name);
      if (!entry) {
        entry = labelTexture(name);
        labelCache.set(name, entry);
      }
      const mat = spriteLabel.material as SpriteMaterial;
      if (mat.map !== entry.texture) mat.map = entry.texture;
      mat.color.set(
        candidate.item.kind === "galassia" ? "#f4e7c8" : candidate.item.kind === "costellazione" ? "#9ec0ea" : "#f7f4ee",
      );
      namedPoint(candidate.item, local);
      const lift =
        candidate.item.kind === "galassia" ? GALAXY_R * 0.985 : candidate.item.kind === "costellazione" ? STAR_R * 0.955 : STAR_R * 0.975;
      spriteLabel.position.set(local.x * lift, local.y * lift, local.z * lift);
      root.localToWorld(world.copy(spriteLabel.position));
      const dist = Math.max(30, camera.position.distanceTo(world));
      const height = dist * (candidate.item.kind === "galassia" ? 0.016 : candidate.item.kind === "costellazione" ? 0.014 : 0.012);
      spriteLabel.scale.set(height * entry.aspect, height, 1);
      spriteLabel.visible = true;
    }
  });

  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    down.current.x = event.clientX;
    down.current.y = event.clientY;
  };

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    const dx = event.clientX - down.current.x;
    const dy = event.clientY - down.current.y;
    if (dx * dx + dy * dy > 36) return;
    event.stopPropagation();
    const root = group.current;
    if (!root) return;
    root.updateWorldMatrix(true, false);
    hit.copy(event.point).normalize();
    let best: Named | null = null;
    let bestDot = -1;
    for (const item of NAMED) {
      namedPoint(item, local);
      world.copy(local);
      root.localToWorld(world);
      world.normalize();
      const dot = hit.dot(world);
      const gate =
        item.kind === "galassia"
          ? Math.cos((Math.max(1.5, item.galaxy.span * 0.55) * Math.PI) / 180)
          : item.kind === "costellazione"
            ? Math.cos((1.15 * Math.PI) / 180)
            : Math.cos((((item.star.proper ? 1.7 : item.star.mag < 2 ? 1.35 : 0.72) * Math.PI) / 180));
      if (dot < gate || dot < bestDot) continue;
      bestDot = dot;
      best = item;
    }
    if (!best) {
      useSolar.getState().pickSky(null);
      return;
    }
    const next = namedPick(best);
    const current = useSolar.getState().sky;
    useSolar.getState().pickSky(current && current.name === next.name ? null : next);
  };

  return (
    <group ref={group} rotation={[0, Math.PI / 2, 0]}>
      <mesh frustumCulled={false} onPointerDown={onPointerDown} onClick={onClick}>
        <sphereGeometry args={[560, 48, 32]} />
        <meshBasicMaterial map={map} side={BackSide} toneMapped={false} />
      </mesh>
      <points geometry={geometry} material={material} frustumCulled={false} raycast={() => null} />
      <lineSegments geometry={lines} frustumCulled={false} raycast={() => null}>
        <lineBasicMaterial color="#9eb0cc" transparent opacity={0.38} depthWrite={false} toneMapped={false} />
      </lineSegments>
      {CHART_GALAXIES.map((galaxy) => {
        const span = (galaxy.span * Math.PI) / 180;
        const width = GALAXY_R * span;
        const height = width * (galaxy.kind === "irregolare" ? 0.72 : 0.62);
        return (
          <sprite
            key={galaxy.name}
            position={[galaxy.x * GALAXY_R, galaxy.y * GALAXY_R, galaxy.z * GALAXY_R]}
            scale={[width, height, 1]}
            frustumCulled={false}
            raycast={() => null}
          >
            <spriteMaterial
              map={glow}
              color={galaxyTint(galaxy.kind)}
              transparent
              depthWrite={false}
              blending={AdditiveBlending}
              toneMapped={false}
              opacity={galaxy.span > 3 ? 0.9 : 0.75}
            />
          </sprite>
        );
      })}
      {Array.from({ length: POOL }, (_, index) => (
        <sprite
          key={index}
          ref={(node) => {
            if (node) pool.current[index] = node;
          }}
          visible={false}
          frustumCulled={false}
          raycast={() => null}
        >
          <spriteMaterial transparent depthWrite={false} toneMapped={false} />
        </sprite>
      ))}
    </group>
  );
}
