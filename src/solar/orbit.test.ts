// Run: node --experimental-strip-types --test src/solar/orbit.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";
import { place, solveKepler, type Vec } from "./orbit.ts";
import type { Planet } from "./planets.ts";

const TAU = Math.PI * 2;

test("solveKepler satisfies M = E - e sin E across eccentricities", () => {
  for (const e of [0, 0.017, 0.206, 0.5, 0.9, 0.99]) {
    for (let k = -40; k <= 40; k++) {
      const M = k * 0.37;
      const E = solveKepler(M, e);
      assert.ok(Math.abs(E - e * Math.sin(E) - M) < 1e-9, `e=${e} M=${M} E=${E}`);
    }
  }
});

test("solveKepler is stable for huge and non-finite inputs", () => {
  const M = 1e9 * TAU + 1;
  const E = solveKepler(M, 0.2);
  const r = E - 0.2 * Math.sin(E) - M;
  assert.ok(Math.abs(r) < 1e-5, `residual ${r}`);
  assert.equal(solveKepler(Number.NaN, 0.2), 0);
  assert.equal(solveKepler(Number.POSITIVE_INFINITY, 0.2), 0);
});

const body = {
  orbit: 10,
  eccentricity: 0.2,
  inclination: 0,
  periapsis: 0,
  period: 10,
  phase: 0,
} as Planet;

const dist = (p: Vec) => Math.hypot(p.x, p.y, p.z);

test("place obeys Kepler's second law: perihelion at t=0, aphelion at t=P/2", () => {
  const p: Vec = { x: 0, y: 0, z: 0 };
  place(p, body, 0);
  assert.ok(Math.abs(dist(p) - 10 * (1 - 0.2)) < 1e-9);
  place(p, body, 5);
  assert.ok(Math.abs(dist(p) - 10 * (1 + 0.2)) < 1e-9);
  // Faster near perihelion: a small time step there covers more arc than at aphelion.
  const a: Vec = { x: 0, y: 0, z: 0 };
  const b: Vec = { x: 0, y: 0, z: 0 };
  place(a, body, 0);
  place(b, body, 0.1);
  const nearPeri = Math.hypot(a.x - b.x, a.z - b.z);
  place(a, body, 5);
  place(b, body, 5.1);
  const nearApo = Math.hypot(a.x - b.x, a.z - b.z);
  assert.ok(nearPeri > nearApo * 1.4, `${nearPeri} vs ${nearApo}`);
});

test("place returns finite positions for NaN time", () => {
  const p: Vec = { x: 0, y: 0, z: 0 };
  place(p, body, Number.NaN);
  assert.ok(Number.isFinite(p.x) && Number.isFinite(p.z));
});
