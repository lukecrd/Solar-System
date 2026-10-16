export type BodyId =
  | "sun"
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

export type TextureKind =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

export type Satellite = {
  name: string;
  radius: number;
  orbit: number;
  period: number;
  phase: number;
  color: string;
};

export type Fact = { label: string; value: string };

export type Planet = {
  id: Exclude<BodyId, "sun">;
  name: string;
  kind: string;
  color: string;
  radius: number;
  orbit: number;
  eccentricity: number;
  inclination: number;
  periapsis: number;
  /** Secondi visivi per un'orbita a velocità 1. Ordine reale, scala compressa. */
  period: number;
  phase: number;
  /**
   * Radianti al secondo di simulazione, a velocità 1 (rotation.y attorno all'asse inclinato).
   * Le orbite (orbit.ts e lune in Stage) girano in senso orario visto da +y, quindi una rotazione
   * prograda ha segno NEGATIVO. Venere e Urano sono retrogradi tramite `tilt` (> 90°, convenzione
   * IAU) e mantengono lo stesso segno degli altri: invertirlo li renderebbe di nuovo progradi.
   */
  spin: number;
  tilt: number;
  texture: TextureKind;
  blurb: string;
  facts: Fact[];
  atmosphere?: string;
  ring?: { inner: number; outer: number; color: string; opacity: number };
  satellites?: Satellite[];
};

export type SunBody = {
  id: "sun";
  name: string;
  kind: string;
  color: string;
  radius: number;
  blurb: string;
  facts: Fact[];
};

export const SUN: SunBody = {
  id: "sun",
  name: "Sole",
  kind: "Stella G2V",
  color: "#ffc56a",
  radius: 2.55,
  blurb:
    "Contiene quasi tutta la massa del sistema. La luce che lascia la fotosfera impiega otto minuti per raggiungere la Terra.",
  facts: [
    { label: "Classe", value: "G2V" },
    { label: "Diametro", value: "1,39 milioni di km" },
    { label: "Massa", value: "333 000 Terre" },
    { label: "Fotosfera", value: "5 500 °C" },
    { label: "Nucleo", value: "15 milioni di °C" },
    { label: "Età", value: "4,6 miliardi di anni" },
  ],
};

export const PLANETS: Planet[] = [
  {
    id: "mercury",
    name: "Mercurio",
    kind: "Roccioso",
    color: "#c2b6a6",
    radius: 0.34,
    orbit: 8,
    eccentricity: 0.206,
    inclination: 0.12,
    periapsis: 0.7,
    period: 7.2,
    phase: 0.4,
    spin: -0.35,
    tilt: 0.01,
    texture: "mercury",
    blurb:
      "Il più piccolo e il più interno. Senza aria degna di questo nome, passa dal gelo notturno a un giorno abbastanza caldo da fondere il piombo.",
    facts: [
      { label: "Diametro", value: "4 879 km" },
      { label: "Distanza", value: "0,39 UA" },
      { label: "Anno", value: "88 giorni" },
      { label: "Giorno", value: "59 giorni" },
      { label: "Lune", value: "Nessuna" },
      { label: "Temperatura", value: "−180 / 430 °C" },
    ],
  },
  {
    id: "venus",
    name: "Venere",
    kind: "Roccioso",
    color: "#e6d2a4",
    radius: 0.52,
    orbit: 10.6,
    eccentricity: 0.007,
    inclination: 0.059,
    periapsis: 1.8,
    period: 12.4,
    phase: 1.7,
    spin: -0.18,
    tilt: 3.09,
    texture: "venus",
    atmosphere: "#f0ddb0",
    blurb:
      "Un gemello rovesciato della Terra: atmosfera di anidride carbonica, nubi di acido solforico e una rotazione lenta, al contrario.",
    facts: [
      { label: "Diametro", value: "12 104 km" },
      { label: "Distanza", value: "0,72 UA" },
      { label: "Anno", value: "225 giorni" },
      { label: "Giorno", value: "243 giorni, retrogrado" },
      { label: "Lune", value: "Nessuna" },
      { label: "Temperatura", value: "464 °C" },
    ],
  },
  {
    id: "earth",
    name: "Terra",
    kind: "Roccioso",
    color: "#6ea0d4",
    radius: 0.54,
    orbit: 13.6,
    eccentricity: 0.017,
    inclination: 0,
    periapsis: 0.35,
    period: 20,
    phase: 0.9,
    spin: -1.35,
    tilt: 0.41,
    texture: "earth",
    atmosphere: "#9ec4ff",
    blurb:
      "Oceani stabili, un'atmosfera sottile e l'unico mondo, finora, dove la vita ha avuto il tempo di cambiare il cielo.",
    facts: [
      { label: "Diametro", value: "12 742 km" },
      { label: "Distanza", value: "1,00 UA" },
      { label: "Anno", value: "365,25 giorni" },
      { label: "Giorno", value: "24 ore" },
      { label: "Lune", value: "1" },
      { label: "Temperatura", value: "15 °C" },
    ],
    satellites: [
      {
        name: "Luna",
        radius: 0.15,
        orbit: 1.45,
        period: 2.4,
        phase: 0.6,
        color: "#d5d0c8",
      },
    ],
  },
  {
    id: "mars",
    name: "Marte",
    kind: "Roccioso",
    color: "#c46a45",
    radius: 0.4,
    orbit: 17.2,
    eccentricity: 0.093,
    inclination: 0.032,
    periapsis: 2.5,
    period: 28,
    phase: 2.4,
    spin: -1.3,
    tilt: 0.44,
    texture: "mars",
    blurb:
      "Ossido di ferro, calotte polari e Olympus Mons. Un deserto freddo con valli che sembrano aver portato acqua.",
    facts: [
      { label: "Diametro", value: "6 779 km" },
      { label: "Distanza", value: "1,52 UA" },
      { label: "Anno", value: "687 giorni" },
      { label: "Giorno", value: "24,6 ore" },
      { label: "Lune", value: "2" },
      { label: "Temperatura", value: "−63 °C" },
    ],
    satellites: [
      {
        name: "Fobos",
        radius: 0.06,
        orbit: 0.78,
        period: 0.7,
        phase: 0.2,
        color: "#b3a89a",
      },
      {
        name: "Deimos",
        radius: 0.045,
        orbit: 1.05,
        period: 1.5,
        phase: 2.1,
        color: "#9a9186",
      },
    ],
  },
  {
    id: "jupiter",
    name: "Giove",
    kind: "Gigante gassoso",
    color: "#d7b48a",
    radius: 1.62,
    orbit: 24.2,
    eccentricity: 0.049,
    inclination: 0.023,
    periapsis: 1.15,
    period: 46,
    phase: 0.2,
    spin: -2.4,
    tilt: 0.05,
    texture: "jupiter",
    blurb:
      "Più massiccio di tutti gli altri pianeti messi insieme. La Grande Macchia Rossa è una tempesta più larga della Terra.",
    facts: [
      { label: "Diametro", value: "139 820 km" },
      { label: "Distanza", value: "5,20 UA" },
      { label: "Anno", value: "11,9 anni" },
      { label: "Giorno", value: "9,9 ore" },
      { label: "Lune", value: "97" },
      { label: "Temperatura", value: "−110 °C" },
    ],
    satellites: [
      { name: "Io", radius: 0.07, orbit: 2.25, period: 2.6, phase: 0.3, color: "#e6d3a0" },
      { name: "Europa", radius: 0.062, orbit: 2.65, period: 4.1, phase: 1.5, color: "#e4e8ee" },
      { name: "Ganimede", radius: 0.09, orbit: 3.15, period: 6.2, phase: 2.4, color: "#b7a48a" },
      { name: "Callisto", radius: 0.08, orbit: 3.7, period: 9.4, phase: 0.8, color: "#8d8478" },
    ],
  },
  {
    id: "saturn",
    name: "Saturno",
    kind: "Gigante gassoso",
    color: "#e6d7ad",
    radius: 1.38,
    orbit: 31,
    eccentricity: 0.057,
    inclination: 0.044,
    periapsis: 2.05,
    period: 62,
    phase: 1.1,
    spin: -2.2,
    tilt: 0.47,
    texture: "saturn",
    blurb:
      "Gli anelli sono ghiaccio e polvere, spessi poche decine di metri e larghi centinaia di migliaia di chilometri.",
    facts: [
      { label: "Diametro", value: "116 460 km" },
      { label: "Distanza", value: "9,58 UA" },
      { label: "Anno", value: "29,5 anni" },
      { label: "Giorno", value: "10,7 ore" },
      { label: "Lune", value: "274" },
      { label: "Temperatura", value: "−140 °C" },
    ],
    ring: { inner: 1.72, outer: 2.45, color: "#ead9b4", opacity: 0.9 },
    satellites: [
      { name: "Titano", radius: 0.088, orbit: 3.15, period: 8.5, phase: 0.4, color: "#e3c27a" },
    ],
  },
  {
    id: "uranus",
    name: "Urano",
    kind: "Gigante di ghiaccio",
    color: "#b7e0e4",
    radius: 0.92,
    orbit: 37.4,
    eccentricity: 0.046,
    inclination: 0.014,
    periapsis: 2.8,
    period: 84,
    phase: 2.8,
    spin: -1.5,
    tilt: 1.71,
    texture: "uranus",
    blurb:
      "Ruota quasi sdraiato, come se un urto antico ne avesse rovesciato l'asse. Gli anelli sono sottili e scuri.",
    facts: [
      { label: "Diametro", value: "50 724 km" },
      { label: "Distanza", value: "19,2 UA" },
      { label: "Anno", value: "84 anni" },
      { label: "Giorno", value: "17,2 ore" },
      { label: "Lune", value: "29" },
      { label: "Temperatura", value: "−195 °C" },
    ],
    ring: { inner: 1.2, outer: 1.55, color: "#c5dde4", opacity: 0.55 },
  },
  {
    id: "neptune",
    name: "Nettuno",
    kind: "Gigante di ghiaccio",
    color: "#4d6fce",
    radius: 0.9,
    orbit: 43.6,
    eccentricity: 0.01,
    inclination: 0.031,
    periapsis: 0.55,
    period: 108,
    phase: 4.2,
    spin: -1.7,
    tilt: 0.49,
    texture: "neptune",
    blurb:
      "Il vento più veloce del sistema solare corre qui, sopra un mantello di acqua, ammoniaca e metano sotto pressione.",
    facts: [
      { label: "Diametro", value: "49 244 km" },
      { label: "Distanza", value: "30,1 UA" },
      { label: "Anno", value: "165 anni" },
      { label: "Giorno", value: "16,1 ore" },
      { label: "Lune", value: "16" },
      { label: "Temperatura", value: "−200 °C" },
    ],
    satellites: [
      { name: "Tritone", radius: 0.054, orbit: 1.7, period: 6.8, phase: 1.2, color: "#d5dbe6" },
    ],
  },
];

export const BODIES: Array<SunBody | Planet> = [SUN, ...PLANETS];

export function findBody(id: BodyId | null): SunBody | Planet | null {
  if (!id) return null;
  if (id === "sun") return SUN;
  return PLANETS.find((planet) => planet.id === id) ?? null;
}

export function isPlanet(body: SunBody | Planet): body is Planet {
  return body.id !== "sun";
}

export function focusDistance(id: BodyId): number {
  if (id === "sun") return 12;
  const planet = PLANETS.find((item) => item.id === id);
  if (!planet) return 8;
  const ring = planet.ring ? planet.ring.outer * 0.35 : 0;
  return Math.max(4.4, planet.radius * 6.2 + ring + 1.6);
}
