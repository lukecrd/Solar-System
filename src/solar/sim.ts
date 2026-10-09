import { place } from "@/solar/orbit";
import { PLANETS, SUN, type BodyId } from "@/solar/planets";
import type { Vec } from "@/solar/orbit";

export const EARTH_PERIOD = PLANETS.find((planet) => planet.id === "earth")!.period;

export const sim: {
  elapsed: number;
  positions: Record<BodyId, Vec>;
} = {
  elapsed: 0,
  positions: {
    sun: { x: 0, y: 0, z: 0 },
    mercury: { x: 0, y: 0, z: 0 },
    venus: { x: 0, y: 0, z: 0 },
    earth: { x: 0, y: 0, z: 0 },
    mars: { x: 0, y: 0, z: 0 },
    jupiter: { x: 0, y: 0, z: 0 },
    saturn: { x: 0, y: 0, z: 0 },
    uranus: { x: 0, y: 0, z: 0 },
    neptune: { x: 0, y: 0, z: 0 },
  },
};

for (const planet of PLANETS) {
  place(sim.positions[planet.id], planet, 0);
}

void SUN;
