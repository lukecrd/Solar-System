import { create } from "zustand";
import type { BodyId } from "@/solar/planets";

export type SkyPick = {
  name: string;
  detail: string;
  kind: "stella" | "galassia" | "costellazione";
};

type SolarState = {
  paused: boolean;
  speed: number;
  trails: boolean;
  labels: boolean;
  selected: BodyId | null;
  sky: SkyPick | null;
  nonce: number;
  togglePaused: () => void;
  setSpeed: (speed: number) => void;
  setTrails: (trails: boolean) => void;
  setLabels: (labels: boolean) => void;
  select: (id: BodyId | null) => void;
  pickSky: (sky: SkyPick | null) => void;
};

const MAX_SPEED = 1000;

export const useSolar = create<SolarState>((set, get) => ({
  paused: false,
  speed: 1,
  trails: true,
  labels: true,
  selected: null,
  sky: null,
  nonce: 0,
  togglePaused: () => set({ paused: !get().paused }),
  // NaN/Infinity (e.g. Number("") from a cleared input) would poison sim.elapsed
  // permanently; ignore them and cap the magnitude so a frame can't skip whole orbits.
  setSpeed: (speed) => {
    if (!Number.isFinite(speed)) return;
    set({ speed: Math.max(-MAX_SPEED, Math.min(MAX_SPEED, speed)) });
  },
  setTrails: (trails) => set({ trails }),
  setLabels: (labels) => set({ labels }),
  select: (selected) => set({ selected, sky: null, nonce: get().nonce + 1 }),
  pickSky: (sky) => set({ sky }),
}));
