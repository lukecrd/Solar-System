import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  GLSL3,
  Points,
  ShaderMaterial,
  SRGBColorSpace,
  type Texture,
} from "three";

const STAR_VERT = `
  attribute float aSize;
  attribute float aPhase;
  varying vec3 vColor;
  varying float vPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  void main() {
    vColor = color;
    vPhase = aPhase;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.78 + 0.22 * sin(uTime * (0.55 + aPhase * 1.4) + aPhase * 18.0);
    gl_PointSize = clamp(aSize * tw * uPixelRatio * (460.0 / max(8.0, -mv.z)), 0.8, 4.8);
    gl_Position = projectionMatrix * mv;
  }
`;

const STAR_FRAG = `
  uniform sampler2D uStar;
  varying vec3 vColor;
  varying float vPhase;
  out vec4 fragColor;
  void main() {
    vec4 tex = texture(uStar, gl_PointCoord);
    if (tex.a < 0.05) discard;
    fragColor = vec4(vColor * tex.rgb, tex.a);
  }
`;

function starSprite() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.18, "rgba(255,255,255,0.9)");
  g.addColorStop(0.45, "rgba(255,255,255,0.25)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function starField() {
  const count = 1100;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  const palette = [
    [0.68, 0.8, 1],
    [0.82, 0.9, 1],
    [1, 0.98, 0.95],
    [1, 0.93, 0.78],
    [1, 0.72, 0.48],
  ];
  let seed = 20260321;
  const rnd = () => {
    seed = (seed * 16807 + 11) % 2147483647;
    return (seed & 2147483647) / 2147483647;
  };
  for (let i = 0; i < count; i++) {
    const z = rnd() * 2 - 1;
    const phi = rnd() * Math.PI * 2;
    const rad = Math.sqrt(Math.max(0, 1 - z * z));
    const radius = 500;
    positions[i * 3] = rad * Math.cos(phi) * radius;
    positions[i * 3 + 1] = z * radius;
    positions[i * 3 + 2] = rad * Math.sin(phi) * radius;
    const bright = rnd() ** 2.4;
    const tint = palette[Math.min(palette.length - 1, Math.floor(rnd() * palette.length))]!;
    colors[i * 3] = tint[0]! * (0.45 + bright * 0.7);
    colors[i * 3 + 1] = tint[1]! * (0.45 + bright * 0.7);
    colors[i * 3 + 2] = tint[2]! * (0.45 + bright * 0.7);
    sizes[i] = 1.1 + bright * 3.4;
    phases[i] = rnd();
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(positions, 3));
  geo.setAttribute("color", new BufferAttribute(colors, 3));
  geo.setAttribute("aSize", new BufferAttribute(sizes, 1));
  geo.setAttribute("aPhase", new BufferAttribute(phases, 1));
  return geo;
}

export function SkyField({ map }: { map: Texture }) {
  const points = useRef<Points>(null);
  const dpr = useThree((state) => state.gl.getPixelRatio());
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sprite = useMemo(() => starSprite(), []);
  const geometry = useMemo(() => starField(), []);
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

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
      sprite.dispose();
    },
    [geometry, material, sprite],
  );

  useFrame((_, delta) => {
    if (!reduce) material.uniforms.uTime!.value += Math.min(delta, 0.05);
  });

  return (
    <group>
      <mesh rotation={[0, Math.PI / 2, 0]} frustumCulled={false}>
        <sphereGeometry args={[560, 48, 32]} />
        <meshBasicMaterial map={map} side={BackSide} toneMapped={false} />
      </mesh>
      <points ref={points} geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
}
