import type { Planet } from "@/solar/planets";

export type Vec = { x: number; y: number; z: number };

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

export function place(out: Vec, planet: Planet, time: number) {
  const theta = (time / planet.period) * Math.PI * 2 + planet.phase;
  placeTheta(out, planet, theta);
}
