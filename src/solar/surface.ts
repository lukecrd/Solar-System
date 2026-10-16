import {
  AdditiveBlending,
  ClampToEdgeWrapping,
  Color,
  DoubleSide,
  GLSL3,
  NoColorSpace,
  RepeatWrapping,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  Vector3,
} from "three";
import type { TextureKind } from "@/solar/planets";

let sphere: SphereGeometry | null = null;

export function unitSphere() {
  if (!sphere) {
    sphere = new SphereGeometry(1, 128, 96);
    sphere.computeTangents();
  }
  return sphere;
}

let sphereLow: SphereGeometry | null = null;

/** Shared low-poly unit sphere for small bodies (moons never exceed ~0.15 units). */
export function unitSphereLow() {
  if (!sphereLow) {
    sphereLow = new SphereGeometry(1, 48, 32);
    sphereLow.computeTangents();
  }
  return sphereLow;
}

export type CosmosMaps = Record<TextureKind, Texture> & {
  earthNight: Texture;
  earthSpec: Texture;
  earthNormal: Texture;
  earthClouds: Texture;
  saturnRing: Texture;
  sun: Texture;
  moon: Texture;
  stars: Texture;
};

export function prepareMaps(maps: CosmosMaps) {
  for (const tex of Object.values(maps)) {
    tex.colorSpace = NoColorSpace;
    tex.anisotropy = 8;
    tex.wrapS = RepeatWrapping;
    tex.wrapT = ClampToEdgeWrapping;
    tex.needsUpdate = true;
  }
  maps.stars.wrapS = ClampToEdgeWrapping;
  maps.stars.colorSpace = SRGBColorSpace;
  maps.stars.needsUpdate = true;
  maps.saturnRing.wrapS = ClampToEdgeWrapping;
  maps.saturnRing.wrapT = ClampToEdgeWrapping;
}

const VERT = `
  attribute vec4 tangent;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec3 vTangentW;
  varying float vTangentSign;
  varying vec2 vUv;
  varying vec3 vLocal;
  varying vec3 vSunLocal;
  void main() {
    vUv = uv;
    vLocal = position;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    mat3 rot = mat3(modelMatrix);
    vNormalW = normalize(rot * normal);
    vTangentW = normalize(rot * tangent.xyz);
    vTangentSign = tangent.w;
    vec3 worldL = normalize(-world.xyz);
    vSunLocal = normalize(transpose(rot) * worldL);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const FRAG = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec3 vTangentW;
  varying float vTangentSign;
  varying vec2 vUv;
  varying vec3 vLocal;
  varying vec3 vSunLocal;
  uniform sampler2D uMap;
  uniform sampler2D uNight;
  uniform sampler2D uSpec;
  uniform sampler2D uNormal;
  uniform sampler2D uRing;
  uniform float uHasNight;
  uniform float uHasSpec;
  uniform float uHasNormal;
  uniform float uBump;
  uniform float uGloss;
  uniform float uSpecStrength;
  uniform vec3 uTint;
  uniform float uSoft;
  uniform float uLimb;
  uniform float uNightStrength;
  uniform float uNormalScale;
  uniform float uRingInner;
  uniform float uRingOuter;
  uniform float uHasRing;
  out vec4 fragColor;

  float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  void main() {
    vec3 N = normalize(vNormalW);
    vec3 T = normalize(vTangentW);
    vec3 B = normalize(cross(N, T) * vTangentSign);
    vec3 albedo = texture(uMap, vUv).rgb * uTint;
    if (uHasNormal > 0.5) {
      vec3 nTex = texture(uNormal, vUv).xyz * 2.0 - 1.0;
      nTex.xy *= uNormalScale;
      N = normalize(T * nTex.x + B * nTex.y + N * nTex.z);
    } else if (uBump > 0.0) {
      vec2 e = vec2(0.0015, 0.003);
      float h0 = luma(texture(uMap, vUv).rgb);
      float hx = luma(texture(uMap, vUv + vec2(e.x, 0.0)).rgb);
      float hy = luma(texture(uMap, vUv + vec2(0.0, e.y)).rgb);
      vec3 nb = vec3((h0 - hx) * uBump, (h0 - hy) * uBump, 1.0);
      N = normalize(T * nb.x + B * nb.y + N * nb.z);
    }
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 L = normalize(-vWorld);
    float ndl = dot(N, L);
    float day = clamp((ndl + uSoft) / (1.0 + uSoft), 0.0, 1.0);
    float lit = max(ndl, 0.0);
    vec3 H = normalize(L + V);
    float water = uHasSpec > 0.5 ? texture(uSpec, vUv).r : uSpecStrength;
    float gloss = mix(max(6.0, uGloss * 0.35), uGloss, clamp(water, 0.0, 1.0));
    float spec = pow(max(dot(N, H), 0.0), gloss) * max(water, 0.0) * lit;
    float mu = clamp(dot(normalize(vNormalW), V), 0.0, 1.0);
    float limb = mix(1.0, pow(max(mu, 0.001), 0.4), uLimb);
    float night = smoothstep(0.12, -0.32, ndl);
    vec3 lights = uHasNight > 0.5 ? texture(uNight, vUv).rgb * night * uNightStrength : vec3(0.0);
    float shadow = 1.0;
    if (uHasRing > 0.5) {
      vec3 sunLocal = normalize(vSunLocal);
      if (abs(sunLocal.y) > 0.001 && vLocal.y * sunLocal.y < 0.0) {
        float t = -vLocal.y / sunLocal.y;
        if (t > 0.0) {
          vec3 hit = vLocal + sunLocal * t;
          float rr = length(hit.xz);
          if (rr > uRingInner && rr < uRingOuter) {
            float u = clamp((rr - uRingInner) / (uRingOuter - uRingInner), 0.0, 1.0);
            float dens = texture(uRing, vec2(u, 0.5)).a;
            shadow = mix(1.0, 0.16, dens);
          }
        }
      }
    }
    vec3 sunCol = vec3(1.0, 0.96, 0.9);
    vec3 color = albedo * (day * limb * shadow * sunCol + 0.04) + spec * sunCol * shadow + lights;
    fragColor = vec4(color, 1.0);
  }
`;

export type SurfaceOptions = {
  map: Texture;
  night?: Texture | null;
  spec?: Texture | null;
  normal?: Texture | null;
  ring?: Texture | null;
  bump?: number;
  gloss?: number;
  specStrength?: number;
  tint?: string;
  soft?: number;
  limb?: number;
  nightStrength?: number;
  normalScale?: number;
  ringInner?: number;
  ringOuter?: number;
};

export function createSurfaceMaterial(opts: SurfaceOptions) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    uniforms: {
      uMap: { value: opts.map },
      uNight: { value: opts.night ?? opts.map },
      uSpec: { value: opts.spec ?? opts.map },
      uNormal: { value: opts.normal ?? opts.map },
      uRing: { value: opts.ring ?? opts.map },
      uHasNight: { value: opts.night ? 1 : 0 },
      uHasSpec: { value: opts.spec ? 1 : 0 },
      uHasNormal: { value: opts.normal ? 1 : 0 },
      uBump: { value: opts.bump ?? 0 },
      uGloss: { value: opts.gloss ?? 24 },
      uSpecStrength: { value: opts.specStrength ?? 0.08 },
      uTint: { value: new Color(opts.tint ?? "#ffffff") },
      uSoft: { value: opts.soft ?? 0.04 },
      uLimb: { value: opts.limb ?? 0.15 },
      uNightStrength: { value: opts.nightStrength ?? 0 },
      uNormalScale: { value: opts.normalScale ?? 0.85 },
      uRingInner: { value: opts.ringInner ?? 0 },
      uRingOuter: { value: opts.ringOuter ?? 1 },
      uHasRing: { value: opts.ring ? 1 : 0 },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
  });
  return mat;
}

const CLOUD_FRAG = `
  varying vec2 vUv;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  uniform sampler2D uMap;
  out vec4 fragColor;
  void main() {
    vec4 tex = texture(uMap, vUv);
    if (tex.a < 0.05) discard;
    vec3 N = normalize(vNormalW);
    vec3 L = normalize(-vWorld);
    float lit = smoothstep(-0.08, 0.32, dot(N, L));
    float alpha = tex.a * (0.12 + 0.88 * lit) * 0.88;
    fragColor = vec4(vec3(0.96, 0.97, 1.0) * (0.1 + lit), alpha);
  }
`;

export function createCloudMaterial(map: Texture) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    depthWrite: false,
    uniforms: { uMap: { value: map } },
    vertexShader: VERT,
    fragmentShader: CLOUD_FRAG,
  });
  return mat;
}

const ATMO_VERT = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const ATMO_FRAG = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  uniform vec3 uColor;
  uniform float uStrength;
  uniform float uPower;
  out vec4 fragColor;
  void main() {
    vec3 N = normalize(vNormalW);
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 L = normalize(-vWorld);
    float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), uPower);
    float sun = 0.15 + 0.95 * pow(clamp(dot(N, L), 0.0, 1.0), 0.5);
    vec3 glow = uColor * fres * sun * uStrength;
    fragColor = vec4(glow, 1.0);
  }
`;

export function createAtmoMaterial(color: string, strength: number, power: number) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uColor: { value: new Color(color) },
      uStrength: { value: strength },
      uPower: { value: power },
    },
    vertexShader: ATMO_VERT,
    fragmentShader: ATMO_FRAG,
  });
  mat.toneMapped = false;
  return mat;
}

const SUN_VERT = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const SUN_FRAG = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec2 vUv;
  uniform sampler2D uMap;
  out vec4 fragColor;
  void main() {
    vec3 N = normalize(vNormalW);
    vec3 V = normalize(cameraPosition - vWorld);
    float limb = pow(clamp(dot(N, V), 0.0, 1.0), 0.36);
    vec3 tex = texture(uMap, vUv).rgb;
    fragColor = vec4(tex * (0.4 + 0.9 * limb) * 1.28, 1.0);
  }
`;

export function createSunMaterial(map: Texture) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    toneMapped: false,
    uniforms: { uMap: { value: map } },
    vertexShader: SUN_VERT,
    fragmentShader: SUN_FRAG,
  });
  return mat;
}

const RING_VERT = `
  varying vec2 vXy;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  void main() {
    vXy = position.xy;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const RING_FRAG = `
  varying vec2 vXy;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  uniform sampler2D uMap;
  uniform float uInner;
  uniform float uOuter;
  uniform float uRadius;
  uniform vec3 uCenter;
  out vec4 fragColor;
  void main() {
    float r = length(vXy);
    float t = clamp((r - uInner) / max(0.0001, uOuter - uInner), 0.0, 1.0);
    vec4 ring = texture(uMap, vec2(t, 0.5));
    float dens = ring.a;
    float edge = smoothstep(0.0, 0.02, t) * smoothstep(1.0, 0.965, t);
    vec3 L = normalize(-uCenter);
    float light = 0.07 + 0.93 * abs(dot(normalize(vNormalW), L));
    vec3 oc = vWorld - uCenter;
    vec3 dir = normalize(-vWorld);
    float b = dot(oc, dir);
    float c = dot(oc, oc) - uRadius * uRadius;
    float disc = b * b - c;
    float shadow = 1.0;
    if (disc > 0.0) {
      float tHit = -b - sqrt(disc);
      if (tHit > 0.03) shadow = 0.1;
    }
    vec3 color = ring.rgb * 1.9;
    float alpha = dens * edge * light * shadow;
    if (alpha < 0.012) discard;
    fragColor = vec4(color, alpha);
  }
`;

export function createTexturedRingMaterial(map: Texture, inner: number, outer: number, planetRadius: number) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: DoubleSide,
    depthWrite: false,
    uniforms: {
      uMap: { value: map },
      uInner: { value: inner },
      uOuter: { value: outer },
      uRadius: { value: planetRadius },
      uCenter: { value: new Vector3() },
    },
    vertexShader: RING_VERT,
    fragmentShader: RING_FRAG,
  });
  return mat;
}

const THIN_FRAG = `
  varying vec2 vXy;
  uniform vec3 uColor;
  uniform float uInner;
  uniform float uOuter;
  uniform float uOpacity;
  out vec4 fragColor;
  void main() {
    float r = length(vXy);
    float t = clamp((r - uInner) / max(0.0001, uOuter - uInner), 0.0, 1.0);
    float lines = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(t * 90.0), 4.0);
    float gap = smoothstep(0.015, 0.0, abs(t - 0.42)) + smoothstep(0.012, 0.0, abs(t - 0.71));
    float edge = smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.82, t);
    float alpha = uOpacity * lines * (1.0 - clamp(gap, 0.0, 1.0)) * edge;
    fragColor = vec4(uColor, alpha);
  }
`;

export function createThinRingMaterial(inner: number, outer: number, color: string, opacity: number) {
  const mat = new ShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: DoubleSide,
    depthWrite: false,
    uniforms: {
      uColor: { value: new Color(color) },
      uInner: { value: inner },
      uOuter: { value: outer },
      uOpacity: { value: opacity },
    },
    vertexShader: RING_VERT,
    fragmentShader: THIN_FRAG,
  });
  return mat;
}
