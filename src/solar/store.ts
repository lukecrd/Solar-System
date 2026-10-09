import { create } from "zustand";
import type { BodyId } from "@/solar/planets";

type SolarState = {
  paused: boolean;
  speed: number;
  trails: boolean;
  labels: boolean;
  selected: BodyId | null;
  nonce: number;
  togglePaused: () => void;
  setSpeed: (speed: number) => void;
  setTrails: (trails: boolean) => void;
  setLabels: (labels: boolean) => void;
  select: (id: BodyId | null) => void;
};

export const useSolar = create<SolarState>((set, get) => ({
  paused: false,
  speed: 1,
  trails: true,
  labels: true,
  selected: null,
  nonce: 0,
  togglePaused: () => set({ paused: !get().paused }),
  setSpeed: (speed) => set({ speed }),
  setTrails: (trails) => set({ trails }),
  setLabels: (labels) => set({ labels }),
  select: (selected) => set({ selected, nonce: get().nonce + 1 }),
}));
