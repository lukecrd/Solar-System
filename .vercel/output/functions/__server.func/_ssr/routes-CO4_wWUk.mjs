import { i as __toESM } from "../_runtime.mjs";
import { _ as Vector3, a as useFrame, b as require_jsx_runtime, c as ClampToEdgeWrapping, d as GLSL3, f as MeshStandardMaterial, g as ShaderMaterial, h as SRGBColorSpace, i as Canvas, l as Color, m as RepeatWrapping, n as OrbitControls, o as useThree, p as Object3D, r as Line, s as CanvasTexture, t as Stars, u as DodecahedronGeometry, x as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { a as Play, i as Route, o as Pause, r as Tag, s as Orbit, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CO4_wWUk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUN = {
	id: "sun",
	name: "Sole",
	kind: "Stella G2V",
	color: "#ffc56a",
	radius: 2.55,
	blurb: "Contiene quasi tutta la massa del sistema. La luce che lascia la fotosfera impiega otto minuti per raggiungere la Terra.",
	facts: [
		{
			label: "Classe",
			value: "G2V"
		},
		{
			label: "Diametro",
			value: "1,39 milioni di km"
		},
		{
			label: "Massa",
			value: "333 000 Terre"
		},
		{
			label: "Fotosfera",
			value: "5 500 °C"
		},
		{
			label: "Nucleo",
			value: "15 milioni di °C"
		},
		{
			label: "Età",
			value: "4,6 miliardi di anni"
		}
	]
};
var PLANETS = [
	{
		id: "mercury",
		name: "Mercurio",
		kind: "Roccioso",
		color: "#c2b6a6",
		radius: .34,
		orbit: 8,
		eccentricity: .206,
		inclination: .12,
		periapsis: .7,
		period: 7.2,
		phase: .4,
		spin: .35,
		tilt: .01,
		texture: "mercury",
		blurb: "Il più piccolo e il più interno. Senza aria degna di questo nome, passa dal gelo notturno a un giorno abbastanza caldo da fondere il piombo.",
		facts: [
			{
				label: "Diametro",
				value: "4 879 km"
			},
			{
				label: "Distanza",
				value: "0,39 UA"
			},
			{
				label: "Anno",
				value: "88 giorni"
			},
			{
				label: "Giorno",
				value: "59 giorni"
			},
			{
				label: "Lune",
				value: "Nessuna"
			},
			{
				label: "Temperatura",
				value: "−180 / 430 °C"
			}
		]
	},
	{
		id: "venus",
		name: "Venere",
		kind: "Roccioso",
		color: "#e6d2a4",
		radius: .52,
		orbit: 10.6,
		eccentricity: .007,
		inclination: .059,
		periapsis: 1.8,
		period: 12.4,
		phase: 1.7,
		spin: -.18,
		tilt: 3.09,
		texture: "venus",
		atmosphere: "#f0ddb0",
		blurb: "Un gemello rovesciato della Terra: atmosfera di anidride carbonica, nubi di acido solforico e una rotazione lenta, al contrario.",
		facts: [
			{
				label: "Diametro",
				value: "12 104 km"
			},
			{
				label: "Distanza",
				value: "0,72 UA"
			},
			{
				label: "Anno",
				value: "225 giorni"
			},
			{
				label: "Giorno",
				value: "243 giorni, retrogrado"
			},
			{
				label: "Lune",
				value: "Nessuna"
			},
			{
				label: "Temperatura",
				value: "464 °C"
			}
		]
	},
	{
		id: "earth",
		name: "Terra",
		kind: "Roccioso",
		color: "#6ea0d4",
		radius: .54,
		orbit: 13.6,
		eccentricity: .017,
		inclination: 0,
		periapsis: .35,
		period: 20,
		phase: .9,
		spin: 1.35,
		tilt: .41,
		texture: "earth",
		atmosphere: "#9ec4ff",
		blurb: "Oceani stabili, un'atmosfera sottile e l'unico mondo, finora, dove la vita ha avuto il tempo di cambiare il cielo.",
		facts: [
			{
				label: "Diametro",
				value: "12 742 km"
			},
			{
				label: "Distanza",
				value: "1,00 UA"
			},
			{
				label: "Anno",
				value: "365,25 giorni"
			},
			{
				label: "Giorno",
				value: "24 ore"
			},
			{
				label: "Lune",
				value: "1"
			},
			{
				label: "Temperatura",
				value: "15 °C"
			}
		],
		satellites: [{
			name: "Luna",
			radius: .15,
			orbit: 1.45,
			period: 2.4,
			phase: .6,
			color: "#d5d0c8"
		}]
	},
	{
		id: "mars",
		name: "Marte",
		kind: "Roccioso",
		color: "#c46a45",
		radius: .4,
		orbit: 17.2,
		eccentricity: .093,
		inclination: .032,
		periapsis: 2.5,
		period: 28,
		phase: 2.4,
		spin: 1.3,
		tilt: .44,
		texture: "mars",
		blurb: "Ossido di ferro, calotte polari e Olympus Mons. Un deserto freddo con valli che sembrano aver portato acqua.",
		facts: [
			{
				label: "Diametro",
				value: "6 779 km"
			},
			{
				label: "Distanza",
				value: "1,52 UA"
			},
			{
				label: "Anno",
				value: "687 giorni"
			},
			{
				label: "Giorno",
				value: "24,6 ore"
			},
			{
				label: "Lune",
				value: "2"
			},
			{
				label: "Temperatura",
				value: "−63 °C"
			}
		],
		satellites: [{
			name: "Fobos",
			radius: .06,
			orbit: .78,
			period: .7,
			phase: .2,
			color: "#b3a89a"
		}, {
			name: "Deimos",
			radius: .045,
			orbit: 1.05,
			period: 1.5,
			phase: 2.1,
			color: "#9a9186"
		}]
	},
	{
		id: "jupiter",
		name: "Giove",
		kind: "Gigante gassoso",
		color: "#d7b48a",
		radius: 1.62,
		orbit: 24.2,
		eccentricity: .049,
		inclination: .023,
		periapsis: 1.15,
		period: 46,
		phase: .2,
		spin: 2.4,
		tilt: .05,
		texture: "jupiter",
		blurb: "Più massiccio di tutti gli altri pianeti messi insieme. La Grande Macchia Rossa è una tempesta più larga della Terra.",
		facts: [
			{
				label: "Diametro",
				value: "139 820 km"
			},
			{
				label: "Distanza",
				value: "5,20 UA"
			},
			{
				label: "Anno",
				value: "11,9 anni"
			},
			{
				label: "Giorno",
				value: "9,9 ore"
			},
			{
				label: "Lune",
				value: "95"
			},
			{
				label: "Temperatura",
				value: "−110 °C"
			}
		],
		satellites: [
			{
				name: "Io",
				radius: .07,
				orbit: 2.25,
				period: 2.6,
				phase: .3,
				color: "#e6d3a0"
			},
			{
				name: "Europa",
				radius: .062,
				orbit: 2.65,
				period: 4.1,
				phase: 1.5,
				color: "#e4e8ee"
			},
			{
				name: "Ganimede",
				radius: .09,
				orbit: 3.15,
				period: 6.2,
				phase: 2.4,
				color: "#b7a48a"
			},
			{
				name: "Callisto",
				radius: .08,
				orbit: 3.7,
				period: 9.4,
				phase: .8,
				color: "#8d8478"
			}
		]
	},
	{
		id: "saturn",
		name: "Saturno",
		kind: "Gigante gassoso",
		color: "#e6d7ad",
		radius: 1.38,
		orbit: 31,
		eccentricity: .057,
		inclination: .044,
		periapsis: 2.05,
		period: 62,
		phase: 1.1,
		spin: 2.2,
		tilt: .47,
		texture: "saturn",
		blurb: "Gli anelli sono ghiaccio e polvere, spessi poche decine di metri e larghi centinaia di migliaia di chilometri.",
		facts: [
			{
				label: "Diametro",
				value: "116 460 km"
			},
			{
				label: "Distanza",
				value: "9,58 UA"
			},
			{
				label: "Anno",
				value: "29,5 anni"
			},
			{
				label: "Giorno",
				value: "10,7 ore"
			},
			{
				label: "Lune",
				value: "146"
			},
			{
				label: "Temperatura",
				value: "−140 °C"
			}
		],
		ring: {
			inner: 1.72,
			outer: 2.45,
			color: "#ead9b4",
			opacity: .9
		},
		satellites: [{
			name: "Titano",
			radius: .12,
			orbit: 3.15,
			period: 8.5,
			phase: .4,
			color: "#e3c27a"
		}]
	},
	{
		id: "uranus",
		name: "Urano",
		kind: "Gigante di ghiaccio",
		color: "#b7e0e4",
		radius: .92,
		orbit: 37.4,
		eccentricity: .046,
		inclination: .014,
		periapsis: 2.8,
		period: 84,
		phase: 2.8,
		spin: -1.5,
		tilt: 1.71,
		texture: "uranus",
		blurb: "Ruota quasi sdraiato, come se un urto antico ne avesse rovesciato l'asse. Gli anelli sono sottili e scuri.",
		facts: [
			{
				label: "Diametro",
				value: "50 724 km"
			},
			{
				label: "Distanza",
				value: "19,2 UA"
			},
			{
				label: "Anno",
				value: "84 anni"
			},
			{
				label: "Giorno",
				value: "17,2 ore"
			},
			{
				label: "Lune",
				value: "28"
			},
			{
				label: "Temperatura",
				value: "−195 °C"
			}
		],
		ring: {
			inner: 1.2,
			outer: 1.55,
			color: "#c5dde4",
			opacity: .55
		}
	},
	{
		id: "neptune",
		name: "Nettuno",
		kind: "Gigante di ghiaccio",
		color: "#4d6fce",
		radius: .9,
		orbit: 43.6,
		eccentricity: .01,
		inclination: .031,
		periapsis: .55,
		period: 108,
		phase: 4.2,
		spin: 1.7,
		tilt: .49,
		texture: "neptune",
		blurb: "Il vento più veloce del sistema solare corre qui, sopra un mantello di acqua, ammoniaca e metano sotto pressione.",
		facts: [
			{
				label: "Diametro",
				value: "49 244 km"
			},
			{
				label: "Distanza",
				value: "30,1 UA"
			},
			{
				label: "Anno",
				value: "165 anni"
			},
			{
				label: "Giorno",
				value: "16,1 ore"
			},
			{
				label: "Lune",
				value: "16"
			},
			{
				label: "Temperatura",
				value: "−200 °C"
			}
		],
		satellites: [{
			name: "Tritone",
			radius: .1,
			orbit: 1.7,
			period: 6.8,
			phase: 1.2,
			color: "#d5dbe6"
		}]
	}
];
var BODIES = [SUN, ...PLANETS];
function findBody(id) {
	if (!id) return null;
	if (id === "sun") return SUN;
	return PLANETS.find((planet) => planet.id === id) ?? null;
}
function isPlanet(body) {
	return body.id !== "sun";
}
function focusDistance(id) {
	if (id === "sun") return 12;
	const planet = PLANETS.find((item) => item.id === id);
	if (!planet) return 8;
	const ring = planet.ring ? planet.ring.outer * .35 : 0;
	return Math.max(4.4, planet.radius * 6.2 + ring + 1.6);
}
function placeTheta(out, planet, theta) {
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
function place(out, planet, time) {
	placeTheta(out, planet, time / planet.period * Math.PI * 2 + planet.phase);
}
var EARTH_PERIOD = PLANETS.find((planet) => planet.id === "earth").period;
var sim = {
	elapsed: 0,
	positions: {
		sun: {
			x: 0,
			y: 0,
			z: 0
		},
		mercury: {
			x: 0,
			y: 0,
			z: 0
		},
		venus: {
			x: 0,
			y: 0,
			z: 0
		},
		earth: {
			x: 0,
			y: 0,
			z: 0
		},
		mars: {
			x: 0,
			y: 0,
			z: 0
		},
		jupiter: {
			x: 0,
			y: 0,
			z: 0
		},
		saturn: {
			x: 0,
			y: 0,
			z: 0
		},
		uranus: {
			x: 0,
			y: 0,
			z: 0
		},
		neptune: {
			x: 0,
			y: 0,
			z: 0
		}
	}
};
for (const planet of PLANETS) place(sim.positions[planet.id], planet, 0);
var useSolar = create((set, get) => ({
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
	select: (selected) => set({
		selected,
		nonce: get().nonce + 1
	})
}));
function formatDate(elapsed) {
	const days = elapsed / EARTH_PERIOD * 365.25;
	const stamp = Date.UTC(2026, 0, 1) + days * 864e5;
	return new Intl.DateTimeFormat("it-IT", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		timeZone: "UTC"
	}).format(new Date(stamp));
}
function Hud() {
	const paused = useSolar((state) => state.paused);
	const speed = useSolar((state) => state.speed);
	const trails = useSolar((state) => state.trails);
	const labels = useSolar((state) => state.labels);
	const selected = useSolar((state) => state.selected);
	const togglePaused = useSolar((state) => state.togglePaused);
	const setSpeed = useSolar((state) => state.setSpeed);
	const setTrails = useSolar((state) => state.setTrails);
	const setLabels = useSolar((state) => state.setLabels);
	const select = useSolar((state) => state.select);
	const [date, setDate] = (0, import_react.useState)(() => formatDate(0));
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setDate(formatDate(sim.elapsed)), 200);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) useSolar.setState({ speed: .35 });
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
			if (event.code === "Space") {
				event.preventDefault();
				useSolar.getState().togglePaused();
			} else if (event.key === "Escape") useSolar.getState().select(null);
			else if (event.key === "0") useSolar.getState().select("sun");
			else if (event.key >= "1" && event.key <= "8") {
				const planet = PLANETS[Number(event.key) - 1];
				if (planet) useSolar.getState().select(planet.id);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const body = findBody(selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "topbar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wordmark",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Osservatorio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Elios" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "Sistema solare. Clicca un pianeta: la camera lo segue."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass clock",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: paused ? "In pausa" : date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: paused ? date : "tempo compresso" })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "rail",
			"aria-label": "Corpi del sistema solare",
			children: BODIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "nav-btn",
				"data-active": selected === item.id,
				onClick: () => select(item.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "swatch",
					style: { background: item.color }
				}), item.name]
			}, item.id))
		}),
		body ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "glass dossier",
			"aria-label": `Scheda di ${body.name}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dossier-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kind",
						children: body.kind
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: body.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						"aria-label": "Chiudi scheda",
						onClick: () => select(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "blurb",
					children: body.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "facts",
					children: body.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: fact.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fact.value })] }, fact.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "note",
					children: isPlanet(body) ? "Scala visiva compressa: i periodi rispettano l’ordine reale, non la durata esatta. Trascina per orbitare intorno al corpo seguito." : "Trascina per girare intorno al Sole. Esc oppure Vista torna al sistema intero."
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "glass dock",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "transport",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "icon-btn",
							"data-on": paused ? "false" : "true",
							"aria-pressed": !paused,
							"aria-label": paused ? "Riprendi simulazione" : "Metti in pausa",
							onClick: togglePaused,
							children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "text-btn",
							onClick: () => select(null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orbit, { size: 16 }), "Vista"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "speed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "speed",
									children: "Velocità"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "speed",
									type: "range",
									min: .2,
									max: 12,
									step: .1,
									value: speed,
									"aria-valuetext": `${speed.toFixed(1)} volte`,
									onChange: (event) => setSpeed(Number(event.target.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", { children: [speed.toFixed(1), "×"] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "toggles",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-btn",
						"data-on": trails,
						"aria-pressed": trails,
						onClick: () => setTrails(!trails),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { size: 16 }), "Sentieri"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-btn",
						"data-on": labels,
						"aria-pressed": labels,
						onClick: () => setLabels(!labels),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { size: 16 }), "Etichette"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "keys",
					children: "Spazio pausa · Esc vista · 0–8 corpi"
				})
			]
		})
	] });
}
function rng(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function makeCanvas(width, height, draw) {
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
function fill(ctx, color, w, h) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, w, h);
}
function craters(ctx, w, h, seed, count, color) {
	const random = rng(seed);
	ctx.fillStyle = color;
	for (let i = 0; i < count; i++) {
		const x = random() * w;
		const y = random() * h;
		const r = 2 + random() * (h * .035);
		ctx.globalAlpha = .18 + random() * .45;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.globalAlpha = 1;
}
function bands(ctx, w, h, colors, waves, seed) {
	const random = rng(seed);
	const image = ctx.getImageData(0, 0, w, h);
	const data = image.data;
	const parsed = colors.map((hex) => {
		const n = Number.parseInt(hex.slice(1), 16);
		return [
			n >> 16 & 255,
			n >> 8 & 255,
			n & 255
		];
	});
	for (let y = 0; y < h; y++) {
		const v = y / h;
		const wave = Math.sin(v * waves * Math.PI * 2 + Math.sin(v * 9) * .6) * .5 + .5;
		const jitter = Math.sin(v * 40 + random() * .2) * .04;
		const t = Math.min(parsed.length - 1.001, Math.max(0, (wave + jitter) * (parsed.length - 1)));
		const i0 = Math.floor(t);
		const f = t - i0;
		const a = parsed[i0];
		const b = parsed[i0 + 1];
		const r = a[0] + (b[0] - a[0]) * f;
		const g = a[1] + (b[1] - a[1]) * f;
		const bl = a[2] + (b[2] - a[2]) * f;
		for (let x = 0; x < w; x++) {
			const o = (y * w + x) * 4;
			const grain = (random() - .5) * 18;
			data[o] = r + grain;
			data[o + 1] = g + grain;
			data[o + 2] = bl + grain;
			data[o + 3] = 255;
		}
	}
	ctx.putImageData(image, 0, 0);
}
function drawMercury(ctx, w, h) {
	fill(ctx, "#b7ab9d", w, h);
	craters(ctx, w, h, 3, 220, "#6f675e");
	craters(ctx, w, h, 9, 80, "#ddd4c8");
}
function drawVenus(ctx, w, h) {
	bands(ctx, w, h, [
		"#f3e2b8",
		"#e7c98a",
		"#f7edd4",
		"#d9b56a"
	], 6, 11);
}
function drawEarth(ctx, w, h) {
	fill(ctx, "#1a4f86", w, h);
	const random = rng(21);
	const lands = [
		"#2f6b3a",
		"#3e7d45",
		"#c2b36a",
		"#2a5a34"
	];
	for (let i = 0; i < 18; i++) {
		ctx.fillStyle = lands[i % lands.length];
		ctx.globalAlpha = .92;
		ctx.beginPath();
		const x = random() * w;
		const y = h * (.18 + random() * .64);
		ctx.ellipse(x, y, 40 + random() * 120, 24 + random() * 70, random() * 2, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.globalAlpha = 1;
	const ice = ctx.createLinearGradient(0, 0, 0, h);
	ice.addColorStop(0, "rgba(245,248,252,0.95)");
	ice.addColorStop(.12, "rgba(245,248,252,0)");
	ice.addColorStop(.88, "rgba(245,248,252,0)");
	ice.addColorStop(1, "rgba(245,248,252,0.95)");
	ctx.fillStyle = ice;
	ctx.fillRect(0, 0, w, h);
}
function drawClouds(ctx, w, h) {
	ctx.clearRect(0, 0, w, h);
	const random = rng(44);
	for (let i = 0; i < 70; i++) {
		ctx.fillStyle = `rgba(255,255,255,${.18 + random() * .45})`;
		ctx.beginPath();
		ctx.ellipse(random() * w, random() * h, 30 + random() * 110, 8 + random() * 22, random() * .4, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawMars(ctx, w, h) {
	fill(ctx, "#c2653e", w, h);
	const random = rng(17);
	ctx.fillStyle = "#8d3d28";
	for (let i = 0; i < 10; i++) {
		ctx.globalAlpha = .45;
		ctx.beginPath();
		ctx.ellipse(random() * w, random() * h, 30 + random() * 90, 16 + random() * 40, random(), 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.globalAlpha = 1;
	craters(ctx, w, h, 19, 40, "#6a3224");
	const ice = ctx.createLinearGradient(0, 0, 0, h);
	ice.addColorStop(0, "rgba(245,240,236,0.9)");
	ice.addColorStop(.08, "rgba(245,240,236,0)");
	ice.addColorStop(.93, "rgba(245,240,236,0)");
	ice.addColorStop(1, "rgba(245,240,236,0.85)");
	ctx.fillStyle = ice;
	ctx.fillRect(0, 0, w, h);
}
function drawJupiter(ctx, w, h) {
	bands(ctx, w, h, [
		"#e6d2b0",
		"#c48a62",
		"#f3e6cf",
		"#c98458",
		"#a86b48",
		"#efe2c8",
		"#d7a57a"
	], 14, 23);
	ctx.fillStyle = "#b55246";
	ctx.globalAlpha = .9;
	ctx.beginPath();
	ctx.ellipse(w * .62, h * .58, w * .07, h * .055, -.3, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalAlpha = .35;
	ctx.fillStyle = "#f2d2c4";
	ctx.beginPath();
	ctx.ellipse(w * .61, h * .56, w * .03, h * .02, -.3, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalAlpha = 1;
}
function drawSaturn(ctx, w, h) {
	bands(ctx, w, h, [
		"#f3e7c8",
		"#e4d2a4",
		"#f7f1df",
		"#d8c08a",
		"#efe4c6"
	], 10, 29);
}
function drawUranus(ctx, w, h) {
	bands(ctx, w, h, [
		"#d5f2f1",
		"#9fd4d8",
		"#e7f7f6",
		"#7fc4cc"
	], 5, 31);
}
function drawNeptune(ctx, w, h) {
	bands(ctx, w, h, [
		"#2450b8",
		"#3d6ad4",
		"#1a3c96",
		"#4e7ee0",
		"#16327f"
	], 8, 37);
	ctx.fillStyle = "#16306e";
	ctx.globalAlpha = .8;
	ctx.beginPath();
	ctx.ellipse(w * .4, h * .42, w * .035, h * .04, .2, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalAlpha = 1;
}
var painters = {
	mercury: drawMercury,
	venus: drawVenus,
	earth: drawEarth,
	mars: drawMars,
	jupiter: drawJupiter,
	saturn: drawSaturn,
	uranus: drawUranus,
	neptune: drawNeptune
};
var cache = /* @__PURE__ */ new Map();
function planetTexture(kind) {
	const hit = cache.get(kind);
	if (hit) return hit;
	const texture = makeCanvas(1024, 512, painters[kind]);
	cache.set(kind, texture);
	return texture;
}
function cloudTexture() {
	const hit = cache.get("clouds");
	if (hit) return hit;
	const texture = makeCanvas(1024, 512, drawClouds);
	cache.set("clouds", texture);
	return texture;
}
function glowTexture() {
	const hit = cache.get("glow");
	if (hit) return hit;
	const texture = makeCanvas(256, 256, (ctx, w, h) => {
		const g = ctx.createRadialGradient(w / 2, h / 2, w * .08, w / 2, h / 2, w / 2);
		g.addColorStop(0, "rgba(255,244,214,0.95)");
		g.addColorStop(.22, "rgba(255,196,90,0.45)");
		g.addColorStop(.5, "rgba(255,140,40,0.12)");
		g.addColorStop(1, "rgba(255,120,20,0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, w, h);
	});
	cache.set("glow", texture);
	return texture;
}
var HOME = new Vector3(0, 38, 88);
var ORIGIN = new Vector3(0, 0, 0);
var scratchVec = new Vector3();
var ACCENT = "#d7b15a";
var SCENE = "#06070c";
var scratch = {
	x: 0,
	y: 0,
	z: 0
};
var BELT_COUNT = 520;
function Clock() {
	useFrame((_, delta) => {
		const dt = Math.min(delta, .05);
		const { paused, speed } = useSolar.getState();
		if (!paused) sim.elapsed += dt * speed;
	});
	return null;
}
function OrbitTrail({ planet }) {
	const selected = useSolar((state) => state.selected);
	const trails = useSolar((state) => state.trails);
	const points = (0, import_react.useMemo)(() => {
		const sampled = [];
		const steps = 180;
		for (let i = 0; i <= steps; i++) {
			placeTheta(scratch, planet, i / steps * Math.PI * 2);
			sampled.push([
				scratch.x,
				scratch.y,
				scratch.z
			]);
		}
		return sampled;
	}, [planet]);
	if (!trails) return null;
	const active = selected === planet.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
		points,
		color: active ? ACCENT : planet.color,
		transparent: true,
		opacity: active ? .9 : .38,
		lineWidth: active ? 1.6 : 1
	});
}
function Rings({ inner, outer, color, opacity }) {
	const material = (0, import_react.useMemo)(() => new ShaderMaterial({
		transparent: true,
		side: 2,
		depthWrite: false,
		glslVersion: GLSL3,
		uniforms: {
			uColor: { value: new Color(color) },
			uInner: { value: inner },
			uOuter: { value: outer },
			uOpacity: { value: opacity }
		},
		vertexShader: `
          out vec2 vXy;
          void main() {
            vXy = position.xy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
		fragmentShader: `
          in vec2 vXy;
          uniform vec3 uColor;
          uniform float uInner;
          uniform float uOuter;
          uniform float uOpacity;
          out vec4 fragColor;
          void main() {
            float r = length(vXy);
            float t = clamp((r - uInner) / max(0.0001, uOuter - uInner), 0.0, 1.0);
            float bands = 0.55 + 0.45 * sin(t * 54.0 + sin(t * 17.0));
            float gap = smoothstep(0.02, 0.0, abs(t - 0.48));
            float edge = smoothstep(0.0, 0.04, t) * smoothstep(1.0, 0.9, t);
            float alpha = uOpacity * bands * (1.0 - gap * 0.9) * edge;
            fragColor = vec4(uColor, alpha);
          }
        `
	}), [
		color,
		inner,
		opacity,
		outer
	]);
	(0, import_react.useEffect)(() => () => material.dispose(), [material]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		material,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
			inner,
			outer,
			128
		] })
	});
}
function Moon({ satellite, onPick }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(() => {
		const mesh = ref.current;
		if (!mesh) return;
		const theta = sim.elapsed / satellite.period * Math.PI * 2 + satellite.phase;
		mesh.position.set(Math.cos(theta) * satellite.orbit, 0, Math.sin(theta) * satellite.orbit);
		mesh.rotation.y = theta;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		onClick: onPick,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			satellite.radius,
			20,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: satellite.color,
			roughness: .9,
			metalness: 0,
			emissive: satellite.color,
			emissiveIntensity: .08
		})]
	});
}
function BodyLabel({ name, lift }) {
	const labels = useSolar((state) => state.labels);
	const ref = (0, import_react.useRef)(null);
	const map = (0, import_react.useMemo)(() => {
		const canvas = document.createElement("canvas");
		canvas.width = 512;
		canvas.height = 128;
		const ctx = canvas.getContext("2d");
		if (!ctx) return null;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = "600 64px 'IBM Plex Sans', sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.lineWidth = 10;
		ctx.strokeStyle = "rgba(6,7,12,0.85)";
		ctx.strokeText(name.toUpperCase(), 256, 64);
		ctx.fillStyle = "#e7edf6";
		ctx.fillText(name.toUpperCase(), 256, 64);
		const texture = new CanvasTexture(canvas);
		texture.colorSpace = SRGBColorSpace;
		texture.needsUpdate = true;
		return texture;
	}, [name]);
	(0, import_react.useEffect)(() => () => map?.dispose(), [map]);
	useFrame(({ camera: cam }) => {
		const sprite = ref.current;
		if (!sprite) return;
		sprite.getWorldPosition(scratchVec);
		const height = Math.max(4, cam.position.distanceTo(scratchVec)) * .034;
		sprite.scale.set(height * 4, height, 1);
	});
	if (!labels || !map) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
		ref,
		position: [
			0,
			lift,
			0
		],
		raycast: () => null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
			map,
			transparent: true,
			depthWrite: false,
			toneMapped: false
		})
	});
}
function PlanetBody({ planet }) {
	const group = (0, import_react.useRef)(null);
	const spin = (0, import_react.useRef)(null);
	const clouds = (0, import_react.useRef)(null);
	const selected = useSolar((state) => state.selected === planet.id);
	const map = (0, import_react.useMemo)(() => planetTexture(planet.texture), [planet.texture]);
	const cloudsMap = (0, import_react.useMemo)(() => planet.texture === "earth" ? cloudTexture() : null, [planet.texture]);
	useFrame(() => {
		const anchor = group.current;
		if (!anchor) return;
		place(scratch, planet, sim.elapsed);
		anchor.position.set(scratch.x, scratch.y, scratch.z);
		const slot = sim.positions[planet.id];
		slot.x = scratch.x;
		slot.y = scratch.y;
		slot.z = scratch.z;
		if (spin.current) spin.current.rotation.y = sim.elapsed * planet.spin;
		if (clouds.current) clouds.current.rotation.y = sim.elapsed * planet.spin * 1.2 + .4;
	});
	const pick = (event) => {
		event.stopPropagation();
		useSolar.getState().select(planet.id);
	};
	const lift = (planet.ring ? planet.ring.outer : planet.radius) + .42;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyLabel, {
				name: planet.name,
				lift
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				rotation: [
					0,
					0,
					planet.tilt
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						ref: spin,
						onClick: pick,
						onPointerOver: (event) => {
							event.stopPropagation();
							document.body.style.cursor = "pointer";
						},
						onPointerOut: () => {
							document.body.style.cursor = "";
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							planet.radius,
							48,
							32
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map,
							roughness: .82,
							metalness: .02,
							emissive: planet.color,
							emissiveIntensity: .16
						})]
					}),
					cloudsMap ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						ref: clouds,
						scale: 1.03,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							planet.radius,
							40,
							28
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map: cloudsMap,
							transparent: true,
							opacity: .9,
							depthWrite: false,
							roughness: 1,
							metalness: 0
						})]
					}) : null,
					planet.atmosphere ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						scale: 1.08,
						raycast: () => null,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							planet.radius,
							32,
							24
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
							color: planet.atmosphere,
							transparent: true,
							opacity: .12,
							depthWrite: false
						})]
					}) : null,
					planet.ring ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rings, { ...planet.ring }) : null
				]
			}),
			planet.satellites?.map((satellite) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
				satellite,
				onPick: pick
			}, satellite.name)),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				raycast: () => null,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					lift * .72,
					Math.max(.012, planet.radius * .02),
					10,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: ACCENT,
					transparent: true,
					opacity: .85
				})]
			}) : null
		]
	});
}
function Sun() {
	const spin = (0, import_react.useRef)(null);
	const glow = (0, import_react.useRef)(null);
	const map = (0, import_react.useMemo)(() => glowTexture(), []);
	useFrame(() => {
		if (spin.current) spin.current.rotation.y = sim.elapsed * .12;
		if (glow.current) {
			const scale = 9.2 + Math.sin(sim.elapsed * .85) * .28;
			glow.current.scale.set(scale, scale, 1);
		}
	});
	const pick = (event) => {
		event.stopPropagation();
		useSolar.getState().select("sun");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyLabel, {
			name: SUN.name,
			lift: SUN.radius + .7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
			ref: glow,
			scale: [
				9.2,
				9.2,
				1
			],
			raycast: () => null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map,
				transparent: true,
				depthWrite: false,
				blending: 2,
				toneMapped: false
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: spin,
			onClick: pick,
			onPointerOver: (event) => {
				event.stopPropagation();
				document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				document.body.style.cursor = "";
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				SUN.radius,
				48,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#ffd28a",
				toneMapped: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			scale: 1.08,
			raycast: () => null,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				SUN.radius,
				32,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#ff9a3c",
				transparent: true,
				opacity: .28,
				depthWrite: false,
				toneMapped: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			color: "#fff1cc",
			intensity: 90,
			distance: 160,
			decay: 1.15
		})
	] });
}
function Belt() {
	const mesh = (0, import_react.useRef)(null);
	const geo = (0, import_react.useMemo)(() => new DodecahedronGeometry(1, 0), []);
	const mat = (0, import_react.useMemo)(() => new MeshStandardMaterial({
		color: "#8a7d6b",
		roughness: 1,
		metalness: .02
	}), []);
	(0, import_react.useLayoutEffect)(() => {
		const inst = mesh.current;
		if (!inst) return;
		const dummy = new Object3D();
		let seed = 99;
		const random = () => {
			seed = (seed * 16807 + 13) % 2147483647;
			return (seed & 2147483647) / 2147483647;
		};
		for (let i = 0; i < BELT_COUNT; i++) {
			const theta = random() * Math.PI * 2;
			const radius = 19.4 + random() * 2.5;
			dummy.position.set(Math.cos(theta) * radius, (random() - .5) * .42, Math.sin(theta) * radius);
			dummy.rotation.set(random() * 6, random() * 6, random() * 6);
			const scale = .035 + random() * .07;
			dummy.scale.setScalar(scale);
			dummy.updateMatrix();
			inst.setMatrixAt(i, dummy.matrix);
		}
		inst.instanceMatrix.needsUpdate = true;
		inst.computeBoundingSphere();
	}, []);
	(0, import_react.useEffect)(() => () => {
		geo.dispose();
		mat.dispose();
	}, [geo, mat]);
	useFrame(() => {
		if (mesh.current) mesh.current.rotation.y = sim.elapsed * .01;
	}, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("instancedMesh", {
		ref: mesh,
		args: [
			geo,
			mat,
			BELT_COUNT
		],
		frustumCulled: false
	});
}
function CameraRig() {
	const controls = (0, import_react.useRef)(null);
	const camera = useThree((state) => state.camera);
	const selected = useSolar((state) => state.selected);
	const nonce = useSolar((state) => state.nonce);
	const rig = (0, import_react.useRef)({
		mode: "free",
		id: null,
		offset: new Vector3(0, 8, 16)
	});
	const body = (0, import_react.useMemo)(() => new Vector3(), []);
	const offset = (0, import_react.useMemo)(() => new Vector3(), []);
	const prev = (0, import_react.useMemo)(() => new Vector3(), []);
	const skipBoot = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		const ctrl = controls.current;
		if (!ctrl) return;
		if (skipBoot.current) {
			skipBoot.current = false;
			return;
		}
		const id = selected;
		rig.current.id = id;
		if (id === null) {
			rig.current.mode = "chase";
			ctrl.enabled = false;
			return;
		}
		const slot = sim.positions[id];
		body.set(slot.x, slot.y, slot.z);
		offset.copy(camera.position).sub(ctrl.target);
		if (offset.lengthSq() < 1e-4) offset.set(.35, .5, 1);
		offset.normalize();
		if (offset.y < .22) {
			offset.y = .22;
			offset.normalize();
		}
		rig.current.offset.copy(offset).multiplyScalar(focusDistance(id));
		rig.current.mode = "chase";
		ctrl.enabled = false;
	}, [
		body,
		camera,
		nonce,
		offset,
		selected
	]);
	useFrame((_, delta) => {
		const ctrl = controls.current;
		if (!ctrl) return;
		const ease = 1 - Math.exp(-3.6 * Math.min(delta, .05));
		const state = rig.current;
		if (state.mode === "chase" && state.id === null) {
			camera.position.lerp(HOME, ease);
			ctrl.target.lerp(ORIGIN, ease);
			if (camera.position.distanceTo(HOME) < .4 && ctrl.target.length() < .25) {
				camera.position.copy(HOME);
				ctrl.target.set(0, 0, 0);
				state.mode = "free";
				ctrl.enabled = true;
				ctrl.update();
			}
			return;
		}
		if (state.mode === "chase" && state.id) {
			const slot = sim.positions[state.id];
			body.set(slot.x, slot.y, slot.z);
			offset.copy(camera.position).sub(body);
			offset.lerp(state.offset, ease);
			camera.position.copy(body).add(offset);
			ctrl.target.copy(body);
			if (offset.distanceTo(state.offset) < .18) {
				state.mode = "follow";
				prev.copy(body);
				ctrl.enabled = true;
				ctrl.update();
			}
			return;
		}
		if (state.mode === "follow" && state.id) {
			const slot = sim.positions[state.id];
			body.set(slot.x, slot.y, slot.z);
			offset.copy(body).sub(prev);
			camera.position.add(offset);
			ctrl.target.add(offset);
			prev.copy(body);
		}
	}, -2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
		ref: controls,
		enablePan: false,
		enableDamping: true,
		dampingFactor: .08,
		rotateSpeed: .72,
		zoomSpeed: .75,
		minDistance: 1.4,
		maxDistance: 210,
		minPolarAngle: .12,
		maxPolarAngle: Math.PI - .12
	});
}
function Scene() {
	const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	(0, import_react.useEffect)(() => {
		Object.assign(window, { __elios: () => {
			const state = useSolar.getState();
			const earth = sim.positions.earth;
			return {
				paused: state.paused,
				speed: state.speed,
				selected: state.selected,
				elapsed: sim.elapsed,
				earthX: earth.x,
				earthZ: earth.z
			};
		} });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: [SCENE]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .22 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#24324a",
			"#07080c",
			.38
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 200,
			depth: 70,
			count: 2800,
			factor: 3.4,
			saturation: 0,
			fade: true,
			speed: reduce ? 0 : .18
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Belt, {}),
		PLANETS.map((planet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitTrail, { planet }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetBody, { planet })] }, planet.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraRig, {})
	] });
}
function Stage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		camera: {
			position: [
				HOME.x,
				HOME.y,
				HOME.z
			],
			fov: 42,
			near: .08,
			far: 500
		},
		dpr: [1, 1.6],
		gl: {
			antialias: true,
			alpha: false,
			powerPreference: "high-performance",
			preserveDrawingBuffer: true
		},
		onCreated: ({ gl }) => {
			gl.setClearColor(SCENE);
			gl.outputColorSpace = SRGBColorSpace;
			gl.domElement.style.touchAction = "none";
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})
	});
}
function Home() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "app-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stage",
			children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {})]
	});
}
//#endregion
export { Home as component };
