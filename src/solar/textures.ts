import { CanvasTexture, ClampToEdgeWrapping, RepeatWrapping, SRGBColorSpace, type Texture } from "three";
import type { TextureKind } from "@/solar/planets";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(width: number, height: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  draw(ctx, width, height);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function fill(ctx: CanvasRenderingContext2D, color: string, w: number, h: number) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
}

function craters(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number, count: number, color: string) {
  const random = rng(seed);
  ctx.fillStyle = color;
  for (let i = 0; i < count; i++) {
    const x = random() * w;
    const y = random() * h;
    const r = 2 + random() * (h * 0.035);
    ctx.globalAlpha = 0.18 + random() * 0.45;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function bands(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  colors: string[],
  waves: number,
  seed: number,
) {
  const random = rng(seed);
  const image = ctx.getImageData(0, 0, w, h);
  const data = image.data;
  const parsed = colors.map((hex) => {
    const n = Number.parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
  });
  for (let y = 0; y < h; y++) {
    const v = y / h;
    const wave = Math.sin(v * waves * Math.PI * 2 + Math.sin(v * 9) * 0.6) * 0.5 + 0.5;
    const jitter = Math.sin(v * 40 + random() * 0.2) * 0.04;
    const t = Math.min(parsed.length - 1.001, Math.max(0, (wave + jitter) * (parsed.length - 1)));
    const i0 = Math.floor(t);
    const f = t - i0;
    const a = parsed[i0]!;
    const b = parsed[i0 + 1]!;
    const r = a[0] + (b[0] - a[0]) * f;
    const g = a[1] + (b[1] - a[1]) * f;
    const bl = a[2] + (b[2] - a[2]) * f;
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      const grain = (random() - 0.5) * 18;
      data[o] = r + grain;
      data[o + 1] = g + grain;
      data[o + 2] = bl + grain;
      data[o + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
}

function drawMercury(ctx: CanvasRenderingContext2D, w: number, h: number) {
  fill(ctx, "#b7ab9d", w, h);
  craters(ctx, w, h, 3, 220, "#6f675e");
  craters(ctx, w, h, 9, 80, "#ddd4c8");
}

function drawVenus(ctx: CanvasRenderingContext2D, w: number, h: number) {
  bands(ctx, w, h, ["#f3e2b8", "#e7c98a", "#f7edd4", "#d9b56a"], 6, 11);
}

function drawEarth(ctx: CanvasRenderingContext2D, w: number, h: number) {
  fill(ctx, "#1a4f86", w, h);
  const random = rng(21);
  const lands = ["#2f6b3a", "#3e7d45", "#c2b36a", "#2a5a34"];
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = lands[i % lands.length]!;
    ctx.globalAlpha = 0.92;
    ctx.beginPath();
    const x = random() * w;
    const y = h * (0.18 + random() * 0.64);
    ctx.ellipse(x, y, 40 + random() * 120, 24 + random() * 70, random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  const ice = ctx.createLinearGradient(0, 0, 0, h);
  ice.addColorStop(0, "rgba(245,248,252,0.95)");
  ice.addColorStop(0.12, "rgba(245,248,252,0)");
  ice.addColorStop(0.88, "rgba(245,248,252,0)");
  ice.addColorStop(1, "rgba(245,248,252,0.95)");
  ctx.fillStyle = ice;
  ctx.fillRect(0, 0, w, h);
}

function drawClouds(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
  const random = rng(44);
  for (let i = 0; i < 70; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.18 + random() * 0.45})`;
    ctx.beginPath();
    ctx.ellipse(
      random() * w,
      random() * h,
      30 + random() * 110,
      8 + random() * 22,
      random() * 0.4,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
}

function drawMars(ctx: CanvasRenderingContext2D, w: number, h: number) {
  fill(ctx, "#c2653e", w, h);
  const random = rng(17);
  ctx.fillStyle = "#8d3d28";
  for (let i = 0; i < 10; i++) {
    ctx.globalAlpha = 0.45;
    ctx.beginPath();
    ctx.ellipse(random() * w, random() * h, 30 + random() * 90, 16 + random() * 40, random(), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  craters(ctx, w, h, 19, 40, "#6a3224");
  const ice = ctx.createLinearGradient(0, 0, 0, h);
  ice.addColorStop(0, "rgba(245,240,236,0.9)");
  ice.addColorStop(0.08, "rgba(245,240,236,0)");
  ice.addColorStop(0.93, "rgba(245,240,236,0)");
  ice.addColorStop(1, "rgba(245,240,236,0.85)");
  ctx.fillStyle = ice;
  ctx.fillRect(0, 0, w, h);
}

function drawJupiter(ctx: CanvasRenderingContext2D, w: number, h: number) {
  bands(ctx, w, h, ["#e6d2b0", "#c48a62", "#f3e6cf", "#c98458", "#a86b48", "#efe2c8", "#d7a57a"], 14, 23);
  ctx.fillStyle = "#b55246";
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.ellipse(w * 0.62, h * 0.58, w * 0.07, h * 0.055, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#f2d2c4";
  ctx.beginPath();
  ctx.ellipse(w * 0.61, h * 0.56, w * 0.03, h * 0.02, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawSaturn(ctx: CanvasRenderingContext2D, w: number, h: number) {
  bands(ctx, w, h, ["#f3e7c8", "#e4d2a4", "#f7f1df", "#d8c08a", "#efe4c6"], 10, 29);
}

function drawUranus(ctx: CanvasRenderingContext2D, w: number, h: number) {
  bands(ctx, w, h, ["#d5f2f1", "#9fd4d8", "#e7f7f6", "#7fc4cc"], 5, 31);
}

function drawNeptune(ctx: CanvasRenderingContext2D, w: number, h: number) {
  bands(ctx, w, h, ["#2450b8", "#3d6ad4", "#1a3c96", "#4e7ee0", "#16327f"], 8, 37);
  ctx.fillStyle = "#16306e";
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  ctx.ellipse(w * 0.4, h * 0.42, w * 0.035, h * 0.04, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

const painters: Record<TextureKind, (ctx: CanvasRenderingContext2D, w: number, h: number) => void> = {
  mercury: drawMercury,
  venus: drawVenus,
  earth: drawEarth,
  mars: drawMars,
  jupiter: drawJupiter,
  saturn: drawSaturn,
  uranus: drawUranus,
  neptune: drawNeptune,
};

const cache = new Map<string, Texture>();

export function planetTexture(kind: TextureKind) {
  const hit = cache.get(kind);
  if (hit) return hit;
  const texture = makeCanvas(1024, 512, painters[kind]);
  cache.set(kind, texture);
  return texture;
}

export function cloudTexture() {
  const hit = cache.get("clouds");
  if (hit) return hit;
  const texture = makeCanvas(1024, 512, drawClouds);
  cache.set("clouds", texture);
  return texture;
}

export function glowTexture() {
  const hit = cache.get("glow");
  if (hit) return hit;
  const texture = makeCanvas(256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, w * 0.08, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,244,214,0.95)");
    g.addColorStop(0.22, "rgba(255,196,90,0.45)");
    g.addColorStop(0.5, "rgba(255,140,40,0.12)");
    g.addColorStop(1, "rgba(255,120,20,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
  cache.set("glow", texture);
  return texture;
}
