import type { Planet } from "@/solar/planets";

export type Vec = { x: number; y: number; z: number };

const TAU = Math.PI * 2;

/**
 * Solve Kepler's equation M = E - e·sin(E) for the eccentric anomaly E.
 * Newton iteration from a starting guess that converges for 0 <= e < 1.
 * The result keeps the same revolution count as M (E - M is in [-e, e]).
 */
export function solveKepler(meanAnomaly: number, eccentricity: number): number {
  if (!Number.isFinite(meanAnomaly)) return 0;
  const e = Math.min(Math.max(eccentricity, 0), 0.99);
  const turns = Math.floor(meanAnomaly / TAU);
  const m = meanAnomaly - turns * TAU; // [0, 2π): keeps precision for huge times
  let E = e > 0.8 ? Math.PI : m;
  for (let i = 0; i < 30; i++) {
    const delta = (E - e * Math.sin(E) - m) / (1 - e * Math.cos(E));
    E -= delta;
    if (Math.abs(delta) < 1e-12) break;
  }
  return E + turns * TAU;
}

/** Position on the orbit for a given eccentric anomaly `theta` (geometry only). */
export function placeTheta(out: Vec, planet: Planet, theta: number) {
  const eccentricity = planet.eccentricity;
  const semiMajor = planet.orbit;
  const semiMinor = semiMajor * Math.sqrt(Math.max(0, 1 - eccentricity * eccentricity));
  const focus = semiMajor * eccentricity;
  let x = Math.cos(theta) * semiMajor - focus;
  let z = Math.sin(theta) * semiMinor;
  const peri = planet.periapsis;
  const xr = x * Math.cos(peri) - z * Math.sin(peri);
  const zr = x * Math.sin(peri) + z * Math.cos(peri);
  x = xr;
  z = zr;
  const incl = planet.inclination;
  out.x = x;
  out.y = -z * Math.sin(incl);
  out.z = z * Math.cos(incl);
}

/**
 * Position at simulation time `time`. Time advances the mean anomaly uniformly;
 * Kepler's equation converts it to the eccentric anomaly, so bodies speed up
 * near periapsis (second law) instead of moving at constant eccentric anomaly.
 */
export function place(out: Vec, planet: Planet, time: number) {
  const t = Number.isFinite(time) ? time : 0;
  const meanAnomaly = (t / planet.period) * TAU + planet.phase;
  placeTheta(out, planet, solveKepler(meanAnomaly, planet.eccentricity));
}
