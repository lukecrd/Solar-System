import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, _ as SRGBColorSpace, a as useFrame, b as Vector3, c as BufferGeometry, d as Color, f as DodecahedronGeometry, g as RepeatWrapping, h as Object3D, i as Canvas, l as CanvasTexture, m as MeshStandardMaterial, n as useTexture, o as useThree, p as GLSL3, r as Line, s as BufferAttribute, t as OrbitControls, u as ClampToEdgeWrapping, v as ShaderMaterial, w as require_react, y as SphereGeometry } from "../_libs/@react-three/drei+[...].mjs";
import { a as Play, i as Route, o as Pause, r as Tag, s as Orbit, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEFD91aD.js
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
	sky: null,
	nonce: 0,
	togglePaused: () => set({ paused: !get().paused }),
	setSpeed: (speed) => set({ speed }),
	setTrails: (trails) => set({ trails }),
	setLabels: (labels) => set({ labels }),
	select: (selected) => set({
		selected,
		sky: null,
		nonce: get().nonce + 1
	}),
	pickSky: (sky) => set({ sky })
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
	const sky = useSolar((state) => state.sky);
	const pickSky = useSolar((state) => state.pickSky);
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
						children: "Carta del cielo. Clicca una stella, una costellazione o una galassia."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "credit",
						children: "Hipparcos · Messier · Via Lattea"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "top-side",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass clock",
					"aria-live": "polite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: paused ? "In pausa" : date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: paused ? date : "tempo compresso" })]
				}), sky ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass sky-chip",
					"aria-live": "polite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kind",
							children: sky.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: sky.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sky.detail })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						"aria-label": "Chiudi scheda celeste",
						onClick: () => pickSky(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})]
				}) : null]
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
									suppressHydrationWarning: true,
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
var CHART_STARS = [
	{
		x: .45792,
		y: -.63893,
		z: .61813,
		mag: 4.78,
		bv: 1.254,
		name: "θ Ottante",
		detail: "Ottante · mag 4,78",
		proper: false
	},
	{
		x: -.03619,
		y: -.89208,
		z: -.45042,
		mag: 5.13,
		bv: -.128,
		name: "29 Pesci",
		detail: "Pesci · mag 5,13",
		proper: false
	},
	{
		x: -.01131,
		y: -.91232,
		z: -.40932,
		mag: 4.37,
		bv: 1.631,
		name: "30 Pesci",
		detail: "Pesci · mag 4,37",
		proper: false
	},
	{
		x: .1845,
		y: -.9813,
		z: -.05483,
		mag: 5.04,
		bv: -.15,
		name: "ζ Scultore",
		detail: "Scultore · mag 5,04",
		proper: false
	},
	{
		x: .07819,
		y: -.9671,
		z: -.24209,
		mag: 4.55,
		bv: -.047,
		name: "2 Balena",
		detail: "Balena · mag 4,55",
		proper: false
	},
	{
		x: .01744,
		y: -.93994,
		z: -.34089,
		mag: 4.99,
		bv: 1.619,
		name: "3 Balena",
		detail: "Balena · mag 4,99",
		proper: false
	},
	{
		x: -.0267,
		y: -.91307,
		z: -.40693,
		mag: 4.61,
		bv: 1.029,
		name: "33 Pesci",
		detail: "Pesci · mag 4,61",
		proper: false
	},
	{
		x: -.31108,
		y: -.54234,
		z: -.78044,
		mag: 2.07,
		bv: -.038,
		name: "Alpheratz",
		detail: "α Andromeda · mag 2,07",
		proper: true
	},
	{
		x: -.46143,
		y: -.05718,
		z: -.88533,
		mag: 2.28,
		bv: .38,
		name: "Caph",
		detail: "β Cassiopeia · mag 2,28",
		proper: true
	},
	{
		x: .28327,
		y: -.93725,
		z: .20327,
		mag: 3.88,
		bv: 1.013,
		name: "ε Fenice",
		detail: "Fenice · mag 3,88",
		proper: false
	},
	{
		x: .46679,
		y: -.57025,
		z: .67596,
		mag: 5.29,
		bv: 1.049,
		name: "γ3 Ottante",
		detail: "Ottante · mag 5,29",
		proper: false
	},
	{
		x: -.41378,
		y: -.27911,
		z: -.86654,
		mag: 5.01,
		bv: .405,
		name: "22 Andromeda",
		detail: "Andromeda · mag 5,01",
		proper: false
	},
	{
		x: .03486,
		y: -.96622,
		z: -.25535,
		mag: 4.89,
		bv: .487,
		name: "6 Balena",
		detail: "Balena · mag 4,89",
		proper: false
	},
	{
		x: .19706,
		y: -.97936,
		z: .04493,
		mag: 5.24,
		bv: .459,
		name: "θ Scultore",
		detail: "Scultore · mag 5,24",
		proper: false
	},
	{
		x: .05279,
		y: -.97476,
		z: -.21691,
		mag: 5.29,
		bv: 1.478,
		name: "HIP 983",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.22825,
		y: -.72759,
		z: -.64693,
		mag: 2.83,
		bv: -.19,
		name: "Algenib",
		detail: "γ Pegaso · mag 2,83",
		proper: true
	},
	{
		x: -.04333,
		y: -.93207,
		z: -.35967,
		mag: 5.13,
		bv: 1.601,
		name: "HD 1014",
		detail: "Balena · mag 5,13",
		proper: false
	},
	{
		x: -.27071,
		y: -.66695,
		z: -.69419,
		mag: 4.79,
		bv: 1.572,
		name: "χ Pegaso",
		detail: "Pegaso · mag 4,79",
		proper: false
	},
	{
		x: .05244,
		y: -.97896,
		z: -.1972,
		mag: 4.44,
		bv: 1.64,
		name: "7 Balena",
		detail: "Balena · mag 4,44",
		proper: false
	},
	{
		x: -.39591,
		y: -.40198,
		z: -.82563,
		mag: 4.61,
		bv: .059,
		name: "θ Andromeda",
		detail: "Andromeda · mag 4,61",
		proper: false
	},
	{
		x: -.38942,
		y: -.4323,
		z: -.81331,
		mag: 4.51,
		bv: .054,
		name: "σ Andromeda",
		detail: "Andromeda · mag 4,51",
		proper: false
	},
	{
		x: -.05289,
		y: -.94084,
		z: -.3347,
		mag: 3.56,
		bv: 1.214,
		name: "Deneb Kaitos Shemali",
		detail: "ι Balena · mag 3,56",
		proper: true
	},
	{
		x: .38241,
		y: -.78719,
		z: .48383,
		mag: 4.23,
		bv: .576,
		name: "ζ Tucano",
		detail: "Tucano · mag 4,23",
		proper: false
	},
	{
		x: -.40412,
		y: -.41496,
		z: -.81517,
		mag: 5.16,
		bv: .442,
		name: "ρ Andromeda",
		detail: "Andromeda · mag 5,16",
		proper: false
	},
	{
		x: .115,
		y: -.99285,
		z: -.03191,
		mag: 5.18,
		bv: 1.006,
		name: "ι Scultore",
		detail: "Scultore · mag 5,18",
		proper: false
	},
	{
		x: .43828,
		y: -.63987,
		z: .63125,
		mag: 2.82,
		bv: .618,
		name: "β Idra maschio",
		detail: "Idra maschio · mag 2,82",
		proper: false
	},
	{
		x: .22266,
		y: -.95467,
		z: .19758,
		mag: 3.93,
		bv: .175,
		name: "κ Fenice",
		detail: "Fenice · mag 3,93",
		proper: false
	},
	{
		x: .21143,
		y: -.96116,
		z: .17741,
		mag: 2.4,
		bv: 1.083,
		name: "Ankaa",
		detail: "α Fenice · mag 2,40",
		proper: true
	},
	{
		x: .12885,
		y: -.99082,
		z: .04097,
		mag: 4.86,
		bv: 1.634,
		name: "η Scultore",
		detail: "Scultore · mag 4,86",
		proper: false
	},
	{
		x: -.30196,
		y: -.70244,
		z: -.64452,
		mag: 5.01,
		bv: 1.584,
		name: "47 Pesci",
		detail: "Pesci · mag 5,01",
		proper: false
	},
	{
		x: -.45408,
		y: -.31367,
		z: -.83392,
		mag: 5.18,
		bv: .043,
		name: "HIP 2225",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: -.38671,
		y: -.54306,
		z: -.74535,
		mag: 5.2,
		bv: .271,
		name: "28 Andromeda",
		detail: "Andromeda · mag 5,20",
		proper: false
	},
	{
		x: .03975,
		y: -.99486,
		z: -.09308,
		mag: 5.17,
		bv: .128,
		name: "HIP 2381",
		detail: "mag 5,17",
		proper: false
	},
	{
		x: .24965,
		y: -.92706,
		z: .27972,
		mag: 4.76,
		bv: .018,
		name: "λ1 Fenice",
		detail: "Fenice · mag 4,76",
		proper: false
	},
	{
		x: .35174,
		y: -.80923,
		z: .47055,
		mag: 4.36,
		bv: -.064,
		name: "β1 Tucano",
		detail: "Tucano · mag 4,36",
		proper: false
	},
	{
		x: .35177,
		y: -.80916,
		z: .47066,
		mag: 4.53,
		bv: .147,
		name: "β2 Tucano",
		detail: "Tucano · mag 4,53",
		proper: false
	},
	{
		x: -.4956,
		y: -.14331,
		z: -.85664,
		mag: 4.74,
		bv: -.098,
		name: "λ Cassiopeia",
		detail: "Cassiopeia · mag 4,74",
		proper: false
	},
	{
		x: .35021,
		y: -.80866,
		z: .47267,
		mag: 5.07,
		bv: .038,
		name: "β3 Tucano",
		detail: "Tucano · mag 5,07",
		proper: false
	},
	{
		x: -.51258,
		y: .00236,
		z: -.85863,
		mag: 4.17,
		bv: .13,
		name: "κ Cassiopeia",
		detail: "Cassiopeia · mag 4,17",
		proper: false
	},
	{
		x: -.15734,
		y: -.9146,
		z: -.3725,
		mag: 5.2,
		bv: .567,
		name: "13 Balena",
		detail: "Balena · mag 5,20",
		proper: false
	},
	{
		x: -.50428,
		y: -.15016,
		z: -.85038,
		mag: 5.08,
		bv: -.098,
		name: "HIP 2854",
		detail: "mag 5,08",
		proper: false
	},
	{
		x: -.47725,
		y: -.31407,
		z: -.82072,
		mag: 5.14,
		bv: 1.587,
		name: "HD 3346",
		detail: "Andromeda · mag 5,14",
		proper: false
	},
	{
		x: -.43005,
		y: -.48564,
		z: -.76106,
		mag: 4.34,
		bv: -.123,
		name: "π Andromeda",
		detail: "Andromeda · mag 4,34",
		proper: false
	},
	{
		x: -.5055,
		y: -.15496,
		z: -.8488,
		mag: 3.69,
		bv: -.196,
		name: "Fulu",
		detail: "ζ Cassiopeia · mag 3,69",
		proper: true
	},
	{
		x: -.41156,
		y: -.55158,
		z: -.72551,
		mag: 4.34,
		bv: .871,
		name: "ε Andromeda",
		detail: "Andromeda · mag 4,34",
		proper: false
	},
	{
		x: -.42263,
		y: -.52901,
		z: -.73589,
		mag: 3.27,
		bv: 1.268,
		name: "δ Andromeda",
		detail: "Andromeda · mag 3,27",
		proper: false
	},
	{
		x: -.5181,
		y: -.10977,
		z: -.84824,
		mag: 2.24,
		bv: 1.17,
		name: "Shedar",
		detail: "α Cassiopeia · mag 2,24",
		proper: true
	},
	{
		x: -.46952,
		y: -.39666,
		z: -.7888,
		mag: 5.3,
		bv: .891,
		name: "32 Andromeda",
		detail: "Andromeda · mag 5,30",
		proper: false
	},
	{
		x: .20245,
		y: -.94516,
		z: .25628,
		mag: 4.59,
		bv: .953,
		name: "μ Fenice",
		detail: "Fenice · mag 4,59",
		proper: false
	},
	{
		x: -.50909,
		y: -.21357,
		z: -.8338,
		mag: 4.8,
		bv: -.105,
		name: "ξ Cassiopeia",
		detail: "Cassiopeia · mag 4,80",
		proper: false
	},
	{
		x: .29057,
		y: -.86279,
		z: .41372,
		mag: 4.36,
		bv: .024,
		name: "η Fenice",
		detail: "Fenice · mag 4,36",
		proper: false
	},
	{
		x: -.50299,
		y: -.27271,
		z: -.82014,
		mag: 4.95,
		bv: .17,
		name: "π Cassiopeia",
		detail: "Cassiopeia · mag 4,95",
		proper: false
	},
	{
		x: -.0589,
		y: -.9868,
		z: -.15084,
		mag: 2.04,
		bv: 1.019,
		name: "Diphda",
		detail: "β Balena · mag 2,04",
		proper: true
	},
	{
		x: -.12837,
		y: -.95829,
		z: -.25535,
		mag: 4.77,
		bv: .998,
		name: "Alnitham",
		detail: "φ1 Balena · mag 4,77",
		proper: true
	},
	{
		x: -.50969,
		y: -.2516,
		z: -.82275,
		mag: 4.48,
		bv: -.069,
		name: "ο Cassiopeia",
		detail: "Cassiopeia · mag 4,48",
		proper: false
	},
	{
		x: -.0257,
		y: -.99565,
		z: -.08951,
		mag: 5.22,
		bv: .35,
		name: "HD 4247",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.41112,
		y: -.62381,
		z: -.66471,
		mag: 4.08,
		bv: 1.1,
		name: "ζ Andromeda",
		detail: "Andromeda · mag 4,08",
		proper: false
	},
	{
		x: .40542,
		y: -.67177,
		z: .61997,
		mag: 5.09,
		bv: 1.345,
		name: "λ Idra maschio",
		detail: "Idra maschio · mag 5,09",
		proper: false
	},
	{
		x: -.29957,
		y: -.82195,
		z: -.48442,
		mag: 4.44,
		bv: 1.5,
		name: "Kuton",
		detail: "δ Pesci · mag 4,44",
		proper: true
	},
	{
		x: -.52594,
		y: -.20623,
		z: -.82514,
		mag: 4.9,
		bv: -.091,
		name: "ν Cassiopeia",
		detail: "Cassiopeia · mag 4,90",
		proper: false
	},
	{
		x: -.36949,
		y: -.71846,
		z: -.58932,
		mag: 5.07,
		bv: .502,
		name: "64 Pesci",
		detail: "Pesci · mag 5,07",
		proper: false
	},
	{
		x: -.53697,
		y: -.08811,
		z: -.83899,
		mag: 3.46,
		bv: .587,
		name: "Achird",
		detail: "η Cassiopeia · mag 3,46",
		proper: true
	},
	{
		x: -.5003,
		y: -.37124,
		z: -.78223,
		mag: 4.53,
		bv: -.136,
		name: "ν Andromeda",
		detail: "Andromeda · mag 4,53",
		proper: false
	},
	{
		x: -.14953,
		y: -.95888,
		z: -.2412,
		mag: 5.17,
		bv: .514,
		name: "φ2 Balena",
		detail: "Balena · mag 5,17",
		proper: false
	},
	{
		x: .22163,
		y: -.91454,
		z: .33837,
		mag: 5.24,
		bv: .356,
		name: "ρ Fenice",
		detail: "Fenice · mag 5,24",
		proper: false
	},
	{
		x: -.54235,
		y: .02401,
		z: -.83981,
		mag: 5.35,
		bv: .528,
		name: "HIP 3951",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: -.24392,
		y: -.8989,
		z: -.36399,
		mag: 4.78,
		bv: 1.55,
		name: "20 Balena",
		detail: "Balena · mag 4,78",
		proper: false
	},
	{
		x: -.54627,
		y: -.03049,
		z: -.83705,
		mag: 4.8,
		bv: .54,
		name: "HD 5015",
		detail: "mag 4,80",
		proper: false
	},
	{
		x: -.5491,
		y: -.06794,
		z: -.83299,
		mag: 4.83,
		bv: 1.216,
		name: "υ1 Cassiopeia",
		detail: "Cassiopeia · mag 4,83",
		proper: false
	},
	{
		x: -.16501,
		y: -.96175,
		z: -.21865,
		mag: 5.35,
		bv: 1.505,
		name: "φ3 Balena",
		detail: "Balena · mag 5,35",
		proper: false
	},
	{
		x: -.55229,
		y: -.06425,
		z: -.83117,
		mag: 4.62,
		bv: .957,
		name: "Castula",
		detail: "υ2 Cassiopeia · mag 4,62",
		proper: true
	},
	{
		x: -.55267,
		y: -.03749,
		z: -.83256,
		mag: 2.15,
		bv: -.046,
		name: "Navi",
		detail: "γ Cassiopeia · mag 2,15",
		proper: true
	},
	{
		x: -.51038,
		y: -.41248,
		z: -.75457,
		mag: 3.86,
		bv: .13,
		name: "μ Andromeda",
		detail: "Andromeda · mag 3,86",
		proper: false
	},
	{
		x: -.43908,
		y: -.6352,
		z: -.6354,
		mag: 4.4,
		bv: .94,
		name: "η Andromeda",
		detail: "Andromeda · mag 4,40",
		proper: false
	},
	{
		x: -.00162,
		y: -.99886,
		z: .04763,
		mag: 4.3,
		bv: -.154,
		name: "α Scultore",
		detail: "Scultore · mag 4,30",
		proper: false
	},
	{
		x: -.35337,
		y: -.81786,
		z: -.45413,
		mag: 4.27,
		bv: .952,
		name: "ε Pesci",
		detail: "Pesci · mag 4,27",
		proper: false
	},
	{
		x: -.45587,
		y: -.65969,
		z: -.59748,
		mag: 5.33,
		bv: .003,
		name: "ψ1 Pesci",
		detail: "Pesci · mag 5,33",
		proper: false
	},
	{
		x: .14588,
		y: -.94087,
		z: .30575,
		mag: 3.32,
		bv: .885,
		name: "β Fenice",
		detail: "Fenice · mag 3,32",
		proper: false
	},
	{
		x: .09045,
		y: -.96706,
		z: .23792,
		mag: 5.21,
		bv: .159,
		name: "υ Fenice",
		detail: "Fenice · mag 5,21",
		proper: false
	},
	{
		x: -.55745,
		y: -.32273,
		z: -.76492,
		mag: 5.04,
		bv: .109,
		name: "41 Andromeda",
		detail: "Andromeda · mag 5,04",
		proper: false
	},
	{
		x: -.57343,
		y: -.13695,
		z: -.80772,
		mag: 5.17,
		bv: .704,
		name: "Marfak",
		detail: "μ Cassiopeia · mag 5,17",
		proper: true
	},
	{
		x: .22125,
		y: -.8806,
		z: .41905,
		mag: 3.94,
		bv: -.12,
		name: "Wurren",
		detail: "ζ Fenice · mag 3,94",
		proper: true
	},
	{
		x: -.21954,
		y: -.95413,
		z: -.20357,
		mag: 3.46,
		bv: 1.161,
		name: "Dheneb",
		detail: "η Balena · mag 3,46",
		proper: true
	},
	{
		x: -.50307,
		y: .39708,
		z: -.76762,
		mag: 4.24,
		bv: 1.213,
		name: "2 Orsa Minore",
		detail: "Orsa Minore · mag 4,24",
		proper: false
	},
	{
		x: -.56788,
		y: -.26755,
		z: -.77841,
		mag: 4.26,
		bv: .012,
		name: "φ Andromeda",
		detail: "Andromeda · mag 4,26",
		proper: false
	},
	{
		x: -.53706,
		y: -.45559,
		z: -.70993,
		mag: 2.07,
		bv: 1.576,
		name: "Mirach",
		detail: "β Andromeda · mag 2,07",
		proper: true
	},
	{
		x: -.56589,
		y: .10404,
		z: -.81789,
		mag: 5.32,
		bv: -.014,
		name: "31 Cassiopeia",
		detail: "Cassiopeia · mag 5,32",
		proper: false
	},
	{
		x: -.57929,
		y: -.13249,
		z: -.80428,
		mag: 4.34,
		bv: .17,
		name: "Marfak",
		detail: "θ Cassiopeia · mag 4,34",
		proper: true
	},
	{
		x: -.52442,
		y: -.51891,
		z: -.67506,
		mag: 5.15,
		bv: .261,
		name: "g Pesci",
		detail: "Pesci · mag 5,15",
		proper: false
	},
	{
		x: -.47249,
		y: -.66385,
		z: -.57971,
		mag: 4.66,
		bv: 1.024,
		name: "χ Pesci",
		detail: "Pesci · mag 4,66",
		proper: false
	},
	{
		x: -.52022,
		y: -.53845,
		z: -.6629,
		mag: 4.51,
		bv: 1.092,
		name: "τ Pesci",
		detail: "Pesci · mag 4,51",
		proper: false
	},
	{
		x: -.38916,
		y: -.81794,
		z: -.42372,
		mag: 5.21,
		bv: .32,
		name: "Revati",
		detail: "ζ Pesci · mag 5,21",
		proper: true
	},
	{
		x: -.49983,
		y: -.61578,
		z: -.60909,
		mag: 4.67,
		bv: 1.047,
		name: "φ Pesci",
		detail: "Pesci · mag 4,67",
		proper: false
	},
	{
		x: -.26076,
		y: -.93992,
		z: -.22034,
		mag: 5.14,
		bv: .448,
		name: "37 Balena",
		detail: "Balena · mag 5,14",
		proper: false
	},
	{
		x: .11175,
		y: -.94551,
		z: .30581,
		mag: 4.97,
		bv: .571,
		name: "ν Fenice",
		detail: "Fenice · mag 4,97",
		proper: false
	},
	{
		x: .33044,
		y: -.74428,
		z: .5804,
		mag: 4.25,
		bv: .48,
		name: "κ Tucano",
		detail: "Tucano · mag 4,25",
		proper: false
	},
	{
		x: -.3724,
		y: -.8536,
		z: -.36425,
		mag: 5.13,
		bv: .071,
		name: "f Pesci",
		detail: "Pesci · mag 5,13",
		proper: false
	},
	{
		x: -.53136,
		y: -.57632,
		z: -.62089,
		mag: 4.74,
		bv: .032,
		name: "υ Pesci",
		detail: "Pesci · mag 4,74",
		proper: false
	},
	{
		x: -.59593,
		y: -.07724,
		z: -.79931,
		mag: 4.95,
		bv: .683,
		name: "φ Cassiopeia",
		detail: "Cassiopeia · mag 4,95",
		proper: false
	},
	{
		x: -.54322,
		y: -.55459,
		z: -.63035,
		mag: 5.23,
		bv: 1.396,
		name: "l Pesci",
		detail: "Pesci · mag 5,23",
		proper: false
	},
	{
		x: -.59639,
		y: -.29243,
		z: -.74753,
		mag: 4.87,
		bv: 1.077,
		name: "Adhil",
		detail: "ξ Andromeda · mag 4,87",
		proper: true
	},
	{
		x: -.29175,
		y: -.93694,
		z: -.19242,
		mag: 3.6,
		bv: 1.065,
		name: "Al Naymat",
		detail: "θ Balena · mag 3,60",
		proper: true
	},
	{
		x: -.23597,
		y: -.96662,
		z: -.0998,
		mag: 4.9,
		bv: 1.231,
		name: "46 Balena",
		detail: "Balena · mag 4,90",
		proper: false
	},
	{
		x: -.60395,
		y: -.04104,
		z: -.79596,
		mag: 2.66,
		bv: .16,
		name: "Ruchbah",
		detail: "δ Cassiopeia · mag 2,66",
		proper: true
	},
	{
		x: -.58719,
		y: .09539,
		z: -.80381,
		mag: 4.72,
		bv: 1.047,
		name: "ψ Cassiopeia",
		detail: "Cassiopeia · mag 4,72",
		proper: false
	},
	{
		x: -.51031,
		y: -.68119,
		z: -.52493,
		mag: 5.35,
		bv: .395,
		name: "ρ Pesci",
		detail: "Pesci · mag 5,35",
		proper: false
	},
	{
		x: -.60915,
		y: -.29234,
		z: -.73721,
		mag: 4.83,
		bv: .421,
		name: "ω Andromeda",
		detail: "Andromeda · mag 4,83",
		proper: false
	},
	{
		x: .05595,
		y: -.95196,
		z: .30108,
		mag: 3.41,
		bv: 1.542,
		name: "γ Fenice",
		detail: "Fenice · mag 3,41",
		proper: false
	},
	{
		x: -.17823,
		y: -.98395,
		z: .00826,
		mag: 5.11,
		bv: .028,
		name: "48 Balena",
		detail: "Balena · mag 5,11",
		proper: false
	},
	{
		x: -.61663,
		y: -.26475,
		z: -.7414,
		mag: 5.27,
		bv: .999,
		name: "Thail",
		detail: "A Andromeda · mag 5,27",
		proper: true
	},
	{
		x: -.43515,
		y: -.82346,
		z: -.36409,
		mag: 4.84,
		bv: 1.372,
		name: "μ Pesci",
		detail: "Pesci · mag 4,84",
		proper: false
	},
	{
		x: .11057,
		y: -.91877,
		z: .37899,
		mag: 3.93,
		bv: .972,
		name: "δ Fenice",
		detail: "Fenice · mag 3,93",
		proper: false
	},
	{
		x: -.50417,
		y: -.72451,
		z: -.46999,
		mag: 3.62,
		bv: .974,
		name: "Alpherg",
		detail: "η Pesci · mag 3,62",
		proper: true
	},
	{
		x: -.61953,
		y: -.05568,
		z: -.783,
		mag: 4.68,
		bv: .991,
		name: "χ Cassiopeia",
		detail: "Cassiopeia · mag 4,68",
		proper: false
	},
	{
		x: -.62608,
		y: -.35292,
		z: -.69532,
		mag: 4.1,
		bv: .536,
		name: "Titawin",
		detail: "υ Andromeda · mag 4,10",
		proper: true
	},
	{
		x: .18435,
		y: -.85529,
		z: .48424,
		mag: .45,
		bv: -.158,
		name: "Achernar",
		detail: "α Fiume Eridano · mag 0,45",
		proper: true
	},
	{
		x: -.63547,
		y: -.23395,
		z: -.73583,
		mag: 3.59,
		bv: 1.275,
		name: "Nembus",
		detail: "51 Andromeda · mag 3,59",
		proper: true
	},
	{
		x: -.58352,
		y: .182,
		z: -.79144,
		mag: 5.28,
		bv: .972,
		name: "40 Cassiopeia",
		detail: "Cassiopeia · mag 5,28",
		proper: false
	},
	{
		x: -.63622,
		y: -.30322,
		z: -.70943,
		mag: 5.01,
		bv: .883,
		name: "χ Andromeda",
		detail: "Andromeda · mag 5,01",
		proper: false
	},
	{
		x: -.63434,
		y: -.36389,
		z: -.68205,
		mag: 4.96,
		bv: -.068,
		name: "τ Andromeda",
		detail: "Andromeda · mag 4,96",
		proper: false
	},
	{
		x: -.46798,
		y: -.82131,
		z: -.32626,
		mag: 4.45,
		bv: 1.347,
		name: "ν Pesci",
		detail: "Pesci · mag 4,45",
		proper: false
	},
	{
		x: -.64023,
		y: -.33051,
		z: -.69344,
		mag: 4.96,
		bv: .618,
		name: "HD 10307",
		detail: "mag 4,96",
		proper: false
	},
	{
		x: -.10127,
		y: -.97756,
		z: .18474,
		mag: 5.25,
		bv: 1.044,
		name: "π Scultore",
		detail: "Scultore · mag 5,25",
		proper: false
	},
	{
		x: -.56837,
		y: -.65628,
		z: -.49624,
		mag: 5.24,
		bv: .836,
		name: "107 Pesci",
		detail: "Pesci · mag 5,24",
		proper: false
	},
	{
		x: -.39594,
		y: -.89534,
		z: -.20393,
		mag: 4.98,
		bv: 1.378,
		name: "HIP 7999",
		detail: "mag 4,98",
		proper: false
	},
	{
		x: -.59865,
		y: .14229,
		z: -.78827,
		mag: 5.18,
		bv: -.022,
		name: "42 Cassiopeia",
		detail: "Cassiopeia · mag 5,18",
		proper: false
	},
	{
		x: -.64746,
		y: -.19646,
		z: -.73634,
		mag: 4.01,
		bv: -.098,
		name: "φ Perseo",
		detail: "Perseo · mag 4,01",
		proper: false
	},
	{
		x: -.28296,
		y: -.95852,
		z: -.03424,
		mag: 3.49,
		bv: .727,
		name: "τ Balena",
		detail: "Balena · mag 3,49",
		proper: false
	},
	{
		x: -.50827,
		y: -.78184,
		z: -.36111,
		mag: 4.26,
		bv: .942,
		name: "Torcular",
		detail: "ο Pesci · mag 4,26",
		proper: true
	},
	{
		x: -.19161,
		y: -.9769,
		z: .09466,
		mag: 5.29,
		bv: .395,
		name: "ε Scultore",
		detail: "Scultore · mag 5,29",
		proper: false
	},
	{
		x: .12795,
		y: -.88078,
		z: .45591,
		mag: 5.04,
		bv: .031,
		name: "q2 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,04",
		proper: false
	},
	{
		x: -.35309,
		y: -.93111,
		z: -.09143,
		mag: 4.66,
		bv: .333,
		name: "χ Balena",
		detail: "Balena · mag 4,66",
		proper: false
	},
	{
		x: -.36254,
		y: -.9275,
		z: -.09118,
		mag: 3.74,
		bv: 1.136,
		name: "Baten Kaitos",
		detail: "ζ Balena · mag 3,74",
		proper: true
	},
	{
		x: -.64064,
		y: -.52109,
		z: -.56396,
		mag: 3.42,
		bv: .488,
		name: "Mothallah",
		detail: "α Triangolo · mag 3,42",
		proper: true
	},
	{
		x: -.59731,
		y: -.6587,
		z: -.45754,
		mag: 3.88,
		bv: -.047,
		name: "Mesarthim",
		detail: "γ1 Ariete · mag 3,88",
		proper: true
	},
	{
		x: -.48974,
		y: -.83082,
		z: -.26438,
		mag: 4.61,
		bv: .928,
		name: "ξ Pesci",
		detail: "Pesci · mag 4,61",
		proper: false
	},
	{
		x: .02936,
		y: -.92201,
		z: .38605,
		mag: 4.39,
		bv: 1.597,
		name: "ψ Fenice",
		detail: "Fenice · mag 4,39",
		proper: false
	},
	{
		x: -.01687,
		y: -.93966,
		z: .3417,
		mag: 5.12,
		bv: -.06,
		name: "φ Fenice",
		detail: "Fenice · mag 5,12",
		proper: false
	},
	{
		x: -.64045,
		y: .02873,
		z: -.76746,
		mag: 3.35,
		bv: -.15,
		name: "Segin",
		detail: "ε Cassiopeia · mag 3,35",
		proper: true
	},
	{
		x: -.60848,
		y: -.63852,
		z: -.47122,
		mag: 2.64,
		bv: .165,
		name: "Sheratan",
		detail: "β Ariete · mag 2,64",
		proper: true
	},
	{
		x: .26949,
		y: -.74728,
		z: .60741,
		mag: 4.68,
		bv: .931,
		name: "η2 Idra maschio",
		detail: "Idra maschio · mag 4,68",
		proper: false
	},
	{
		x: .08653,
		y: -.88834,
		z: .45095,
		mag: 3.69,
		bv: .844,
		name: "χ Fiume Eridano",
		detail: "Fiume Eridano · mag 3,69",
		proper: false
	},
	{
		x: -.62211,
		y: .11404,
		z: -.77458,
		mag: 4.97,
		bv: -.084,
		name: "ω Cassiopeia",
		detail: "Cassiopeia · mag 4,97",
		proper: false
	},
	{
		x: -.2521,
		y: -.9637,
		z: .0879,
		mag: 4.92,
		bv: 1.434,
		name: "56 Balena",
		detail: "Balena · mag 4,92",
		proper: false
	},
	{
		x: .03433,
		y: -.91354,
		z: .40531,
		mag: 4.82,
		bv: .864,
		name: "HIP 9095",
		detail: "mag 4,82",
		proper: false
	},
	{
		x: -.60101,
		y: -.67298,
		z: -.43115,
		mag: 5.09,
		bv: .921,
		name: "ι Ariete",
		detail: "Ariete · mag 5,09",
		proper: false
	},
	{
		x: -.63137,
		y: -.59897,
		z: -.49255,
		mag: 4.79,
		bv: .29,
		name: "λ Ariete",
		detail: "Ariete · mag 4,79",
		proper: false
	},
	{
		x: .19681,
		y: -.80655,
		z: .55745,
		mag: 2.86,
		bv: .29,
		name: "α Idra maschio",
		detail: "Idra maschio · mag 2,86",
		proper: false
	},
	{
		x: -.64419,
		y: .0473,
		z: -.7634,
		mag: 5.29,
		bv: .002,
		name: "HIP 9312",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.27785,
		y: -.95754,
		z: .07691,
		mag: 3.99,
		bv: 1.554,
		name: "υ Balena",
		detail: "Balena · mag 3,99",
		proper: false
	},
	{
		x: -.18085,
		y: -.96327,
		z: .19853,
		mag: 5.34,
		bv: .883,
		name: "π Fornace",
		detail: "Fornace · mag 5,34",
		proper: false
	},
	{
		x: -.00756,
		y: -.92377,
		z: .38287,
		mag: 5.15,
		bv: 1.471,
		name: "χ Fenice",
		detail: "Fenice · mag 5,15",
		proper: false
	},
	{
		x: -.61765,
		y: .15346,
		z: -.77134,
		mag: 4.49,
		bv: .164,
		name: "A Cassiopeia",
		detail: "Cassiopeia · mag 4,49",
		proper: false
	},
	{
		x: -.51349,
		y: -.82511,
		z: -.23563,
		mag: 3.82,
		bv: .024,
		name: "Alrescha",
		detail: "α Pesci · mag 3,82",
		proper: true
	},
	{
		x: -.67936,
		y: -.12129,
		z: -.72371,
		mag: 4.99,
		bv: -.071,
		name: "g Perseo",
		detail: "Perseo · mag 4,99",
		proper: false
	},
	{
		x: -.61077,
		y: .17906,
		z: -.77129,
		mag: 3.95,
		bv: -.002,
		name: "50 Cassiopeia",
		detail: "Cassiopeia · mag 3,95",
		proper: false
	},
	{
		x: -.69292,
		y: -.31828,
		z: -.64696,
		mag: 2.1,
		bv: 1.37,
		name: "Almach",
		detail: "γ1 Andromeda · mag 2,10",
		proper: true
	},
	{
		x: -.19792,
		y: -.96019,
		z: .19715,
		mag: 4.68,
		bv: -.156,
		name: "ν Fornace",
		detail: "Fornace · mag 4,68",
		proper: false
	},
	{
		x: -.58214,
		y: .25889,
		z: -.77077,
		mag: 5.27,
		bv: .345,
		name: "47 Cassiopeia",
		detail: "Cassiopeia · mag 5,27",
		proper: false
	},
	{
		x: -.59009,
		y: .24015,
		z: -.7708,
		mag: 5.22,
		bv: .954,
		name: "49 Cassiopeia",
		detail: "Cassiopeia · mag 5,22",
		proper: false
	},
	{
		x: -.6523,
		y: -.60203,
		z: -.4605,
		mag: 5.03,
		bv: .121,
		name: "κ Ariete",
		detail: "Ariete · mag 5,03",
		proper: false
	},
	{
		x: -.65755,
		y: -.59068,
		z: -.46767,
		mag: 2.01,
		bv: 1.151,
		name: "Hamal",
		detail: "α Ariete · mag 2,01",
		proper: true
	},
	{
		x: -.70031,
		y: -.38348,
		z: -.60209,
		mag: 4.78,
		bv: .12,
		name: "58 Andromeda",
		detail: "Andromeda · mag 4,78",
		proper: false
	},
	{
		x: -.67368,
		y: -.55498,
		z: -.48802,
		mag: 4.98,
		bv: .339,
		name: "14 Ariete",
		detail: "Ariete · mag 4,98",
		proper: false
	},
	{
		x: -.69868,
		y: -.42575,
		z: -.57496,
		mag: 3,
		bv: .14,
		name: "Mizan",
		detail: "β Triangolo · mag 3,00",
		proper: true
	},
	{
		x: -.69556,
		y: -.49089,
		z: -.52462,
		mag: 4.94,
		bv: .77,
		name: "6 Triangolo",
		detail: "Triangolo · mag 4,94",
		proper: false
	},
	{
		x: -.66373,
		y: -.61298,
		z: -.42863,
		mag: 5.23,
		bv: .457,
		name: "η Ariete",
		detail: "Ariete · mag 5,23",
		proper: false
	},
	{
		x: -.2037,
		y: -.9502,
		z: .23586,
		mag: 5.27,
		bv: -.013,
		name: "μ Fornace",
		detail: "Fornace · mag 5,27",
		proper: false
	},
	{
		x: -.59296,
		y: -.75417,
		z: -.28218,
		mag: 4.36,
		bv: .878,
		name: "Al Kaff al Jidhmah",
		detail: "ξ1 Balena · mag 4,36",
		proper: true
	},
	{
		x: -.71402,
		y: -.27945,
		z: -.64194,
		mag: 4.84,
		bv: 1.476,
		name: "b Andromeda",
		detail: "Andromeda · mag 4,84",
		proper: false
	},
	{
		x: -.70731,
		y: -.16904,
		z: -.68639,
		mag: 5.31,
		bv: .926,
		name: "6 Perseo",
		detail: "Perseo · mag 5,31",
		proper: false
	},
	{
		x: -.71184,
		y: -.44266,
		z: -.54528,
		mag: 5.25,
		bv: -.004,
		name: "7 Triangolo",
		detail: "Triangolo · mag 5,25",
		proper: false
	},
	{
		x: .04548,
		y: -.87308,
		z: .48546,
		mag: 3.56,
		bv: -.12,
		name: "φ Fiume Eridano",
		detail: "Fiume Eridano · mag 3,56",
		proper: false
	},
	{
		x: -.71622,
		y: -.42867,
		z: -.5507,
		mag: 4.84,
		bv: .607,
		name: "δ Triangolo",
		detail: "Triangolo · mag 4,84",
		proper: false
	},
	{
		x: -.71621,
		y: -.4339,
		z: -.5466,
		mag: 4.03,
		bv: .019,
		name: "γ Triangolo",
		detail: "Triangolo · mag 4,03",
		proper: false
	},
	{
		x: -.7083,
		y: -.50625,
		z: -.49197,
		mag: 5.29,
		bv: .037,
		name: "10 Triangolo",
		detail: "Triangolo · mag 5,29",
		proper: false
	},
	{
		x: -.72425,
		y: -.22337,
		z: -.65236,
		mag: 5.31,
		bv: .006,
		name: "c Andromeda",
		detail: "Andromeda · mag 5,31",
		proper: false
	},
	{
		x: .25009,
		y: -.72377,
		z: .64312,
		mag: 4.08,
		bv: .034,
		name: "δ Idra maschio",
		detail: "Idra maschio · mag 4,08",
		proper: false
	},
	{
		x: -.55504,
		y: -.81832,
		z: -.14926,
		mag: 5.29,
		bv: 1.648,
		name: "69 Balena",
		detail: "Balena · mag 5,29",
		proper: false
	},
	{
		x: -.71082,
		y: -.08352,
		z: -.6984,
		mag: 5.16,
		bv: .369,
		name: "i Perseo",
		detail: "Perseo · mag 5,16",
		proper: false
	},
	{
		x: -.31098,
		y: -.93484,
		z: .17135,
		mag: 5.19,
		bv: .608,
		name: "κ Fornace",
		detail: "Fornace · mag 5,19",
		proper: false
	},
	{
		x: -.72995,
		y: -.17623,
		z: -.66039,
		mag: 5.19,
		bv: .979,
		name: "64 Andromeda",
		detail: "Andromeda · mag 5,19",
		proper: false
	},
	{
		x: -.73165,
		y: -.17067,
		z: -.65997,
		mag: 4.73,
		bv: 1.532,
		name: "65 Andromeda",
		detail: "Andromeda · mag 4,73",
		proper: false
	},
	{
		x: -.4476,
		y: -.89375,
		z: .02931,
		mag: 4.88,
		bv: -.027,
		name: "Sadr al Kaitos",
		detail: "ρ Balena · mag 4,88",
		proper: true
	},
	{
		x: -.02337,
		y: -.88491,
		z: .46518,
		mag: 4.24,
		bv: -.136,
		name: "κ Fiume Eridano",
		detail: "Fiume Eridano · mag 4,24",
		proper: false
	},
	{
		x: -.204,
		y: -.9285,
		z: .31028,
		mag: 5.13,
		bv: .089,
		name: "φ Fornace",
		detail: "Fornace · mag 5,13",
		proper: false
	},
	{
		x: -.63492,
		y: -.73598,
		z: -.23498,
		mag: 4.3,
		bv: -.053,
		name: "ξ2 Balena",
		detail: "Balena · mag 4,30",
		proper: false
	},
	{
		x: -.73473,
		y: -.47974,
		z: -.47961,
		mag: 5.29,
		bv: .311,
		name: "12 Triangolo",
		detail: "Triangolo · mag 5,29",
		proper: false
	},
	{
		x: -.6667,
		y: .10956,
		z: -.73723,
		mag: 4.46,
		bv: .153,
		name: "ι Cassiopeia",
		detail: "Cassiopeia · mag 4,46",
		proper: false
	},
	{
		x: -.59825,
		y: -.78783,
		z: -.14638,
		mag: 5.27,
		bv: 1.271,
		name: "HD 15694",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: .36553,
		y: -.60009,
		z: .71153,
		mag: 5.27,
		bv: .981,
		name: "μ Idra maschio",
		detail: "Idra maschio · mag 5,27",
		proper: false
	},
	{
		x: -.49125,
		y: .44559,
		z: -.74841,
		mag: 1.97,
		bv: .636,
		name: "Stella Polare",
		detail: "α Orsa Minore · mag 1,97",
		proper: true
	},
	{
		x: -.43356,
		y: -.89709,
		z: .08522,
		mag: 4.74,
		bv: .454,
		name: "σ Balena",
		detail: "Balena · mag 4,74",
		proper: false
	},
	{
		x: -.75478,
		y: -.38148,
		z: -.53365,
		mag: 5.15,
		bv: 1.472,
		name: "14 Triangolo",
		detail: "Triangolo · mag 5,15",
		proper: false
	},
	{
		x: -.28762,
		y: -.92283,
		z: .25625,
		mag: 4.96,
		bv: -.05,
		name: "ω Fornace",
		detail: "Fornace · mag 4,96",
		proper: false
	},
	{
		x: -.6363,
		y: -.75092,
		z: -.17672,
		mag: 4.87,
		bv: .88,
		name: "ν Balena",
		detail: "Balena · mag 4,87",
		proper: false
	},
	{
		x: .02145,
		y: -.84639,
		z: .53213,
		mag: 5.3,
		bv: .289,
		name: "η Orologio",
		detail: "Orologio · mag 5,30",
		proper: false
	},
	{
		x: -.6389,
		y: .20066,
		z: -.74266,
		mag: 5.17,
		bv: .896,
		name: "HIP 12273",
		detail: "mag 5,17",
		proper: false
	},
	{
		x: -.6048,
		y: -.79028,
		z: -.09835,
		mag: 4.08,
		bv: -.212,
		name: "δ Balena",
		detail: "Balena · mag 4,08",
		proper: false
	},
	{
		x: -.48984,
		y: -.86961,
		z: .06185,
		mag: 4.83,
		bv: .447,
		name: "ε Balena",
		detail: "Balena · mag 4,83",
		proper: false
	},
	{
		x: .22641,
		y: -.7171,
		z: .65917,
		mag: 4.12,
		bv: -.061,
		name: "ε Idra maschio",
		detail: "Idra maschio · mag 4,12",
		proper: false
	},
	{
		x: -.11242,
		y: -.89085,
		z: .44016,
		mag: 4.74,
		bv: .061,
		name: "s Fiume Eridano",
		detail: "Fiume Eridano · mag 4,74",
		proper: false
	},
	{
		x: .04307,
		y: -.83012,
		z: .55591,
		mag: 5.21,
		bv: .411,
		name: "ζ Orologio",
		detail: "Orologio · mag 5,21",
		proper: false
	},
	{
		x: -.15461,
		y: -.89929,
		z: .40911,
		mag: 4.11,
		bv: 1.006,
		name: "ι Fiume Eridano",
		detail: "Fiume Eridano · mag 4,11",
		proper: false
	},
	{
		x: -.7592,
		y: -.49676,
		z: -.42052,
		mag: 5.3,
		bv: .081,
		name: "Barani",
		detail: "33 Ariete · mag 5,30",
		proper: true
	},
	{
		x: -.77795,
		y: -.30762,
		z: -.54787,
		mag: 4.91,
		bv: .582,
		name: "12 Perseo",
		detail: "Perseo · mag 4,91",
		proper: false
	},
	{
		x: -.63887,
		y: -.75907,
		z: -.12512,
		mag: 3.47,
		bv: .093,
		name: "Kaffaljidhma",
		detail: "γ Balena · mag 3,47",
		proper: true
	},
	{
		x: -.76763,
		y: -.48368,
		z: -.42049,
		mag: 4.65,
		bv: -.122,
		name: "35 Ariete",
		detail: "Ariete · mag 4,65",
		proper: false
	},
	{
		x: -.48099,
		y: -.87094,
		z: .10055,
		mag: 4.24,
		bv: -.122,
		name: "π Balena",
		detail: "Balena · mag 4,24",
		proper: false
	},
	{
		x: -.76803,
		y: -.16694,
		z: -.61827,
		mag: 4.1,
		bv: .514,
		name: "θ Perseo",
		detail: "Perseo · mag 4,10",
		proper: false
	},
	{
		x: -.69238,
		y: -.69081,
		z: -.20832,
		mag: 4.27,
		bv: .311,
		name: "μ Balena",
		detail: "Balena · mag 4,27",
		proper: false
	},
	{
		x: -.70682,
		y: -.66635,
		z: -.23746,
		mag: 5.17,
		bv: .234,
		name: "38 Ariete",
		detail: "Ariete · mag 5,17",
		proper: false
	},
	{
		x: -.43117,
		y: -.88722,
		z: .16408,
		mag: 4.47,
		bv: .481,
		name: "τ1 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,47",
		proper: false
	},
	{
		x: .21181,
		y: -.71939,
		z: .66152,
		mag: 4.83,
		bv: .058,
		name: "ζ Idra maschio",
		detail: "Idra maschio · mag 4,83",
		proper: false
	},
	{
		x: -.7817,
		y: -.45561,
		z: -.42587,
		mag: 4.52,
		bv: 1.112,
		name: "Lilii Borea",
		detail: "39 Ariete · mag 4,52",
		proper: true
	},
	{
		x: .14338,
		y: -.75994,
		z: .63399,
		mag: 5.25,
		bv: .101,
		name: "ν Orologio",
		detail: "Orologio · mag 5,25",
		proper: false
	},
	{
		x: -.27102,
		y: -.89891,
		z: .34426,
		mag: 4.45,
		bv: .981,
		name: "β Fornace",
		detail: "Fornace · mag 4,45",
		proper: false
	},
	{
		x: -.74489,
		y: -.60232,
		z: -.28696,
		mag: 5.26,
		bv: -.066,
		name: "Al Butain",
		detail: "π Ariete · mag 5,26",
		proper: true
	},
	{
		x: -.78209,
		y: -.47879,
		z: -.39888,
		mag: 3.61,
		bv: -.1,
		name: "Bharani",
		detail: "c Ariete · mag 3,61",
		proper: true
	},
	{
		x: .30469,
		y: -.63968,
		z: .70567,
		mag: 4.76,
		bv: 1.337,
		name: "ν Idra maschio",
		detail: "Idra maschio · mag 4,76",
		proper: false
	},
	{
		x: -.79592,
		y: -.32328,
		z: -.51186,
		mag: 4.22,
		bv: .343,
		name: "16 Perseo",
		detail: "Perseo · mag 4,22",
		proper: false
	},
	{
		x: -.7552,
		y: -.05541,
		z: -.65314,
		mag: 3.77,
		bv: 1.69,
		name: "Miram",
		detail: "η Perseo · mag 3,77",
		proper: true
	},
	{
		x: -.41779,
		y: -.8837,
		z: .21101,
		mag: 4.76,
		bv: .906,
		name: "Angetenar",
		detail: "τ2 Fiume Eridano · mag 4,76",
		proper: true
	},
	{
		x: -.79733,
		y: -.36885,
		z: -.47771,
		mag: 4.56,
		bv: 1.554,
		name: "17 Perseo",
		detail: "Perseo · mag 4,56",
		proper: false
	},
	{
		x: -.80234,
		y: -.31822,
		z: -.50496,
		mag: 5.34,
		bv: .423,
		name: "20 Perseo",
		detail: "Perseo · mag 5,34",
		proper: false
	},
	{
		x: -.77351,
		y: -.10003,
		z: -.62584,
		mag: 3.93,
		bv: .758,
		name: "τ Perseo",
		detail: "Perseo · mag 3,93",
		proper: false
	},
	{
		x: -.56469,
		y: -.82226,
		z: .07089,
		mag: 3.89,
		bv: 1.088,
		name: "Azha",
		detail: "η Fiume Eridano · mag 3,89",
		proper: true
	},
	{
		x: -.61513,
		y: -.78841,
		z: .00383,
		mag: 5.16,
		bv: .084,
		name: "HIP 13717",
		detail: "mag 5,16",
		proper: false
	},
	{
		x: -.80714,
		y: -.40306,
		z: -.43135,
		mag: 5.1,
		bv: -.007,
		name: "21 Perseo",
		detail: "Perseo · mag 5,10",
		proper: false
	},
	{
		x: -.18426,
		y: -.87238,
		z: .45277,
		mag: 2.88,
		bv: .128,
		name: "Acamar",
		detail: "θ1 Fiume Eridano · mag 2,88",
		proper: true
	},
	{
		x: -.62886,
		y: -.77751,
		z: -.0023,
		mag: 5.22,
		bv: .014,
		name: "HIP 13874",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.81172,
		y: -.29105,
		z: -.50636,
		mag: 4.68,
		bv: .065,
		name: "Gorgonea Secunda",
		detail: "π Perseo · mag 4,68",
		proper: true
	},
	{
		x: .14944,
		y: -.74068,
		z: .65503,
		mag: 4.98,
		bv: .126,
		name: "β Orologio",
		detail: "Orologio · mag 4,98",
		proper: false
	},
	{
		x: -.81334,
		y: -.35477,
		z: -.46111,
		mag: 4.94,
		bv: 1.235,
		name: "24 Perseo",
		detail: "Perseo · mag 4,94",
		proper: false
	},
	{
		x: -.78562,
		y: -.5375,
		z: -.30642,
		mag: 4.63,
		bv: .048,
		name: "ε Ariete",
		detail: "Ariete · mag 4,63",
		proper: false
	},
	{
		x: -.7227,
		y: -.67448,
		z: -.1509,
		mag: 4.71,
		bv: -.109,
		name: "Menkar",
		detail: "λ Balena · mag 4,71",
		proper: true
	},
	{
		x: -.78538,
		y: -.09817,
		z: -.61119,
		mag: 5.24,
		bv: -.049,
		name: "HIP 14043",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: -.69496,
		y: -.71442,
		z: -.08144,
		mag: 2.54,
		bv: 1.63,
		name: "Menkar",
		detail: "α Balena · mag 2,54",
		proper: true
	},
	{
		x: -.41301,
		y: -.8686,
		z: .27377,
		mag: 4.08,
		bv: .163,
		name: "τ3 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,08",
		proper: false
	},
	{
		x: -.59254,
		y: -.80222,
		z: .07313,
		mag: 5.32,
		bv: .941,
		name: "ρ2 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,32",
		proper: false
	},
	{
		x: .08254,
		y: -.76982,
		z: .63291,
		mag: 5.12,
		bv: .349,
		name: "μ Orologio",
		detail: "Orologio · mag 5,12",
		proper: false
	},
	{
		x: -.59724,
		y: -.7984,
		z: .07655,
		mag: 5.26,
		bv: .193,
		name: "ρ3 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,26",
		proper: false
	},
	{
		x: -.78648,
		y: -.07562,
		z: -.61297,
		mag: 2.91,
		bv: .716,
		name: "γ Perseo",
		detail: "Perseo · mag 2,91",
		proper: false
	},
	{
		x: -.82477,
		y: -.29252,
		z: -.48393,
		mag: 3.32,
		bv: 1.528,
		name: "Gorgonea Tertia",
		detail: "ρ Perseo · mag 3,32",
		proper: true
	},
	{
		x: -.77233,
		y: -.02614,
		z: -.63469,
		mag: 4.77,
		bv: 1.018,
		name: "k Perseo",
		detail: "Perseo · mag 4,77",
		proper: false
	},
	{
		x: -.6176,
		y: -.78393,
		z: .06348,
		mag: 5.23,
		bv: 1.575,
		name: "HIP 14456",
		detail: "mag 5,23",
		proper: false
	},
	{
		x: -.82814,
		y: -.25714,
		z: -.49806,
		mag: 2.09,
		bv: -.003,
		name: "Algol",
		detail: "β Perseo · mag 2,09",
		proper: true
	},
	{
		x: -.80835,
		y: -.12845,
		z: -.57451,
		mag: 4.05,
		bv: .595,
		name: "ι Perseo",
		detail: "Perseo · mag 4,05",
		proper: false
	},
	{
		x: -.82318,
		y: -.19821,
		z: -.53207,
		mag: 3.79,
		bv: .98,
		name: "Misam",
		detail: "κ Perseo · mag 3,79",
		proper: true
	},
	{
		x: -.83552,
		y: -.27117,
		z: -.47789,
		mag: 4.61,
		bv: 1.115,
		name: "Gorgonea Quarta",
		detail: "ω Perseo · mag 4,61",
		proper: true
	},
	{
		x: -.80804,
		y: -.53194,
		z: -.25319,
		mag: 4.35,
		bv: 1.033,
		name: "Botein",
		detail: "δ Ariete · mag 4,35",
		proper: true
	},
	{
		x: -.65046,
		y: .24334,
		z: -.71951,
		mag: 4.85,
		bv: .035,
		name: "HIP 14862",
		detail: "mag 4,85",
		proper: false
	},
	{
		x: -.36557,
		y: -.85744,
		z: .36215,
		mag: 3.8,
		bv: .543,
		name: "Dalim",
		detail: "α Fornace · mag 3,80",
		proper: true
	},
	{
		x: -.67739,
		y: -.73541,
		z: .01779,
		mag: 5.07,
		bv: .575,
		name: "94 Balena",
		detail: "Balena · mag 5,07",
		proper: false
	},
	{
		x: -.82018,
		y: -.50939,
		z: -.26043,
		mag: 4.87,
		bv: -.007,
		name: "ζ Ariete",
		detail: "Ariete · mag 4,87",
		proper: false
	},
	{
		x: -.61241,
		y: -.78052,
		z: .12547,
		mag: 4.8,
		bv: .232,
		name: "Zibal",
		detail: "ζ Fiume Eridano · mag 4,80",
		proper: true
	},
	{
		x: -.81406,
		y: -.09857,
		z: -.57235,
		mag: 5.04,
		bv: 1.107,
		name: "HIP 15219",
		detail: "mag 5,04",
		proper: false
	},
	{
		x: .1059,
		y: -.73393,
		z: .67092,
		mag: 5.24,
		bv: .6,
		name: "ζ2 Reticolo",
		detail: "Reticolo · mag 5,24",
		proper: false
	},
	{
		x: -.46202,
		y: -.8335,
		z: .30301,
		mag: 4.86,
		bv: .904,
		name: "15 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,86",
		proper: false
	},
	{
		x: -.82051,
		y: -.10553,
		z: -.56181,
		mag: 5.16,
		bv: -.073,
		name: "29 Perseo",
		detail: "Perseo · mag 5,16",
		proper: false
	},
	{
		x: -.85214,
		y: -.33262,
		z: -.40401,
		mag: 4.85,
		bv: 1.491,
		name: "HIP 15416",
		detail: "mag 4,85",
		proper: false
	},
	{
		x: -.82174,
		y: -.10665,
		z: -.55979,
		mag: 5.05,
		bv: -.067,
		name: "31 Perseo",
		detail: "Perseo · mag 5,05",
		proper: false
	},
	{
		x: -.73014,
		y: -.68292,
		z: -.02265,
		mag: 4.84,
		bv: .681,
		name: "κ Balena",
		detail: "Balena · mag 4,84",
		proper: false
	},
	{
		x: -.47382,
		y: -.82899,
		z: .2971,
		mag: 3.7,
		bv: 1.614,
		name: "Angetenar",
		detail: "τ4 Fiume Eridano · mag 3,70",
		proper: true
	},
	{
		x: -.18403,
		y: -.82979,
		z: .52687,
		mag: 4.26,
		bv: .711,
		name: "e Fiume Eridano",
		detail: "Fiume Eridano · mag 4,26",
		proper: false
	},
	{
		x: -.73118,
		y: .12293,
		z: -.67102,
		mag: 4.74,
		bv: -.108,
		name: "HD 20336",
		detail: "Giraffa · mag 4,74",
		proper: false
	},
	{
		x: -.85136,
		y: -.39812,
		z: -.3416,
		mag: 4.47,
		bv: 1.555,
		name: "HIP 15549",
		detail: "mag 4,47",
		proper: false
	},
	{
		x: -.83407,
		y: -.49449,
		z: -.24457,
		mag: 5.27,
		bv: -.067,
		name: "τ Ariete",
		detail: "Ariete · mag 5,27",
		proper: false
	},
	{
		x: -.84674,
		y: -.20071,
		z: -.49269,
		mag: 4.96,
		bv: .051,
		name: "l Perseo",
		detail: "Perseo · mag 4,96",
		proper: false
	},
	{
		x: -.83586,
		y: -.4959,
		z: -.23544,
		mag: 5.1,
		bv: 1.231,
		name: "63 Ariete",
		detail: "Ariete · mag 5,10",
		proper: false
	},
	{
		x: -.83118,
		y: -.11323,
		z: -.54435,
		mag: 5.32,
		bv: -.076,
		name: "HD 20809",
		detail: "Perseo · mag 5,32",
		proper: false
	},
	{
		x: -.83018,
		y: -.10214,
		z: -.54806,
		mag: 1.79,
		bv: .481,
		name: "Mirfak",
		detail: "α Perseo · mag 1,79",
		proper: true
	},
	{
		x: -.74378,
		y: .11216,
		z: -.65895,
		mag: 5.13,
		bv: 2.038,
		name: "HD 20797",
		detail: "Giraffa · mag 5,13",
		proper: false
	},
	{
		x: -.78219,
		y: -.61781,
		z: -.08059,
		mag: 3.61,
		bv: .887,
		name: "ο Toro",
		detail: "Toro · mag 3,61",
		proper: false
	},
	{
		x: -.79169,
		y: -.60526,
		z: -.08299,
		mag: 3.73,
		bv: -.082,
		name: "ξ Toro",
		detail: "Toro · mag 3,73",
		proper: false
	},
	{
		x: -.83869,
		y: -.10774,
		z: -.53384,
		mag: 4.99,
		bv: -.091,
		name: "HIP 16147",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: -.78159,
		y: .05021,
		z: -.62176,
		mag: 4.21,
		bv: .419,
		name: "HD 21291",
		detail: "Giraffa · mag 4,21",
		proper: false
	},
	{
		x: -.83872,
		y: -.09925,
		z: -.53543,
		mag: 4.67,
		bv: -.096,
		name: "34 Perseo",
		detail: "Perseo · mag 4,67",
		proper: false
	},
	{
		x: .101,
		y: -.71857,
		z: .68809,
		mag: 4.71,
		bv: .41,
		name: "κ Reticolo",
		detail: "Reticolo · mag 4,71",
		proper: false
	},
	{
		x: -.78952,
		y: .03602,
		z: -.61267,
		mag: 4.55,
		bv: .489,
		name: "HD 21389",
		detail: "Giraffa · mag 4,55",
		proper: false
	},
	{
		x: -.81043,
		y: -.01308,
		z: -.58569,
		mag: 5.09,
		bv: .022,
		name: "HIP 16292",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: -.80814,
		y: -.58135,
		z: -.09458,
		mag: 5.14,
		bv: -.041,
		name: "s Toro",
		detail: "Toro · mag 5,14",
		proper: false
	},
	{
		x: -.84642,
		y: -.11884,
		z: -.51909,
		mag: 4.36,
		bv: 1.367,
		name: "σ Perseo",
		detail: "Perseo · mag 4,36",
		proper: false
	},
	{
		x: -.68201,
		y: -.72147,
		z: .11977,
		mag: 4.74,
		bv: -.092,
		name: "v Fiume Eridano",
		detail: "Fiume Eridano · mag 4,74",
		proper: false
	},
	{
		x: -.81804,
		y: -.56376,
		z: -.11398,
		mag: 4.14,
		bv: 1.112,
		name: "f Toro",
		detail: "Toro · mag 4,14",
		proper: false
	},
	{
		x: -.856,
		y: -.14305,
		z: -.4968,
		mag: 5.3,
		bv: .398,
		name: "36 Perseo",
		detail: "Perseo · mag 5,30",
		proper: false
	},
	{
		x: -.64307,
		y: -.74374,
		z: .18251,
		mag: 3.72,
		bv: .881,
		name: "Ran",
		detail: "ε Fiume Eridano · mag 3,72",
		proper: true
	},
	{
		x: -.50423,
		y: -.79637,
		z: .334,
		mag: 4.26,
		bv: -.106,
		name: "τ5 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,26",
		proper: false
	},
	{
		x: -.56015,
		y: -.7755,
		z: .29125,
		mag: 5.24,
		bv: -.117,
		name: "20 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,24",
		proper: false
	},
	{
		x: -.85387,
		y: -.10609,
		z: -.50956,
		mag: 4.32,
		bv: -.058,
		name: "ψ Perseo",
		detail: "Perseo · mag 4,32",
		proper: false
	},
	{
		x: -.74404,
		y: -.6648,
		z: .06672,
		mag: 4.29,
		bv: .575,
		name: "10 Toro",
		detail: "Toro · mag 4,29",
		proper: false
	},
	{
		x: -.25266,
		y: -.804,
		z: .53828,
		mag: 4.57,
		bv: 1.023,
		name: "y Fiume Eridano",
		detail: "Fiume Eridano · mag 4,57",
		proper: false
	},
	{
		x: -.77043,
		y: .11224,
		z: -.62756,
		mag: 5.06,
		bv: 1.651,
		name: "HD 22649",
		detail: "Giraffa · mag 5,06",
		proper: false
	},
	{
		x: -.38169,
		y: -.79625,
		z: .46937,
		mag: 4.99,
		bv: -.159,
		name: "δ Fornace",
		detail: "Fornace · mag 4,99",
		proper: false
	},
	{
		x: -.89371,
		y: -.28741,
		z: -.3445,
		mag: 4.97,
		bv: -.048,
		name: "o Perseo",
		detail: "Perseo · mag 4,97",
		proper: false
	},
	{
		x: -.30523,
		y: -.79535,
		z: .52369,
		mag: 4.59,
		bv: 1.191,
		name: "h Fiume Eridano",
		detail: "Fiume Eridano · mag 4,59",
		proper: false
	},
	{
		x: -.86409,
		y: -.10051,
		z: -.4932,
		mag: 3.01,
		bv: -.125,
		name: "δ Perseo",
		detail: "Perseo · mag 3,01",
		proper: false
	},
	{
		x: -.66038,
		y: -.71929,
		z: .21568,
		mag: 3.52,
		bv: .915,
		name: "Rana",
		detail: "δ Fiume Eridano · mag 3,52",
		proper: true
	},
	{
		x: .11635,
		y: -.68882,
		z: .71554,
		mag: 3.84,
		bv: 1.133,
		name: "β Reticolo",
		detail: "Reticolo · mag 3,84",
		proper: false
	},
	{
		x: -.89706,
		y: -.3047,
		z: -.32007,
		mag: 3.84,
		bv: .022,
		name: "Atik",
		detail: "ο Perseo · mag 3,84",
		proper: true
	},
	{
		x: -.7458,
		y: -.65718,
		z: .10908,
		mag: 5.24,
		bv: -.088,
		name: "24 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,24",
		proper: false
	},
	{
		x: -.88814,
		y: -.40432,
		z: -.21847,
		mag: 3.72,
		bv: -.105,
		name: "Elettra",
		detail: "17 Toro · mag 3,72",
		proper: true
	},
	{
		x: -.88485,
		y: -.16733,
		z: -.43479,
		mag: 3.77,
		bv: .425,
		name: "ν Perseo",
		detail: "Perseo · mag 3,77",
		proper: false
	},
	{
		x: -.88952,
		y: -.3993,
		z: -.22205,
		mag: 4.3,
		bv: -.11,
		name: "Taigete",
		detail: "q Toro · mag 4,30",
		proper: true
	},
	{
		x: -.80479,
		y: -.59329,
		z: .01801,
		mag: 5.34,
		bv: -.099,
		name: "u Toro",
		detail: "Toro · mag 5,34",
		proper: false
	},
	{
		x: -.89038,
		y: -.39898,
		z: -.21918,
		mag: 3.87,
		bv: -.063,
		name: "Maia",
		detail: "20 Toro · mag 3,87",
		proper: true
	},
	{
		x: -.77278,
		y: .11863,
		z: -.62348,
		mag: 4.78,
		bv: .747,
		name: "HIP 17587",
		detail: "mag 4,78",
		proper: false
	},
	{
		x: -.64061,
		y: -.72498,
		z: .25304,
		mag: 4.43,
		bv: 1.604,
		name: "π Fiume Eridano",
		detail: "Fiume Eridano · mag 4,43",
		proper: false
	},
	{
		x: -.89029,
		y: -.40273,
		z: -.21259,
		mag: 4.14,
		bv: -.051,
		name: "Merope",
		detail: "23 Toro · mag 4,14",
		proper: true
	},
	{
		x: -.50752,
		y: -.76967,
		z: .38734,
		mag: 4.22,
		bv: .434,
		name: "τ6 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,22",
		proper: false
	},
	{
		x: .25894,
		y: -.61288,
		z: .74654,
		mag: 3.26,
		bv: 1.59,
		name: "γ Idra maschio",
		detail: "Idra maschio · mag 3,26",
		proper: false
	},
	{
		x: -.89265,
		y: -.39803,
		z: -.21153,
		mag: 2.85,
		bv: -.086,
		name: "Alcione",
		detail: "η Toro · mag 2,85",
		proper: true
	},
	{
		x: -.50077,
		y: -.76943,
		z: .3965,
		mag: 5.24,
		bv: .075,
		name: "τ7 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,24",
		proper: false
	},
	{
		x: -.84205,
		y: -.5378,
		z: -.04161,
		mag: 5.08,
		bv: -.125,
		name: "e Toro",
		detail: "Toro · mag 5,08",
		proper: false
	},
	{
		x: -.30943,
		y: -.78295,
		z: .53967,
		mag: 4.3,
		bv: -.038,
		name: "f Fiume Eridano",
		detail: "Fiume Eridano · mag 4,30",
		proper: false
	},
	{
		x: -.8954,
		y: -.39449,
		z: -.20649,
		mag: 3.62,
		bv: -.07,
		name: "Atlante",
		detail: "27 Toro · mag 3,62",
		proper: true
	},
	{
		x: -.89563,
		y: -.39345,
		z: -.20748,
		mag: 5.05,
		bv: -.082,
		name: "Pleione",
		detail: "28 Toro · mag 5,05",
		proper: true
	},
	{
		x: -.33166,
		y: -.78152,
		z: .52842,
		mag: 4.17,
		bv: .927,
		name: "g Fiume Eridano",
		detail: "Fiume Eridano · mag 4,17",
		proper: false
	},
	{
		x: -.75739,
		y: .15213,
		z: -.63499,
		mag: 4.39,
		bv: 1.87,
		name: "HD 23475",
		detail: "Giraffa · mag 4,39",
		proper: false
	},
	{
		x: -.90532,
		y: -.28262,
		z: -.31704,
		mag: 5.14,
		bv: .057,
		name: "n Perseo",
		detail: "Perseo · mag 5,14",
		proper: false
	},
	{
		x: -.90047,
		y: -.37353,
		z: -.22277,
		mag: 5.24,
		bv: .231,
		name: "HIP 17954",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: -.70382,
		y: .22962,
		z: -.67225,
		mag: 4.59,
		bv: .064,
		name: "γ Giraffa",
		detail: "Giraffa · mag 4,59",
		proper: false
	},
	{
		x: -.35942,
		y: -.77197,
		z: .52429,
		mag: 5.11,
		bv: -.133,
		name: "i Fiume Eridano",
		detail: "Fiume Eridano · mag 5,11",
		proper: false
	},
	{
		x: -.50116,
		y: -.75634,
		z: .42046,
		mag: 4.64,
		bv: -.136,
		name: "τ8 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,64",
		proper: false
	},
	{
		x: -.91247,
		y: -.2872,
		z: -.2914,
		mag: 2.84,
		bv: .271,
		name: "Atik",
		detail: "ζ Perseo · mag 2,84",
		proper: true
	},
	{
		x: -.74795,
		y: -.64411,
		z: .16028,
		mag: 4.46,
		bv: .672,
		name: "w Fiume Eridano",
		detail: "Fiume Eridano · mag 4,46",
		proper: false
	},
	{
		x: -.86721,
		y: -.03671,
		z: -.49658,
		mag: 5.28,
		bv: .425,
		name: "A Perseo",
		detail: "Perseo · mag 5,28",
		proper: false
	},
	{
		x: -.79996,
		y: .10284,
		z: -.59118,
		mag: 4.99,
		bv: 1.435,
		name: "HIP 18488",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: -.78436,
		y: .12909,
		z: -.60673,
		mag: 4.95,
		bv: -.074,
		name: "HIP 18505",
		detail: "mag 4,95",
		proper: false
	},
	{
		x: -.90863,
		y: -.17517,
		z: -.37909,
		mag: 2.9,
		bv: -.199,
		name: "ε Perseo",
		detail: "Perseo · mag 2,90",
		proper: false
	},
	{
		x: -.64587,
		y: -.70057,
		z: .3034,
		mag: 2.97,
		bv: 1.588,
		name: "Zaurak",
		detail: "γ Fiume Eridano · mag 2,97",
		proper: true
	},
	{
		x: .0506,
		y: -.69184,
		z: .72028,
		mag: 4.56,
		bv: 1.59,
		name: "δ Reticolo",
		detail: "Reticolo · mag 4,56",
		proper: false
	},
	{
		x: -.91736,
		y: -.22676,
		z: -.32716,
		mag: 3.98,
		bv: .016,
		name: "Menkib",
		detail: "ξ Perseo · mag 3,98",
		proper: true
	},
	{
		x: -.51896,
		y: -.73874,
		z: .43004,
		mag: 4.62,
		bv: -.121,
		name: "τ9 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,62",
		proper: false
	},
	{
		x: -.87107,
		y: -.49053,
		z: -.02476,
		mag: 3.41,
		bv: -.099,
		name: "λ Toro",
		detail: "Toro · mag 3,41",
		proper: false
	},
	{
		x: .06105,
		y: -.68473,
		z: .72624,
		mag: 4.48,
		bv: 1.5,
		name: "γ Reticolo",
		detail: "Reticolo · mag 4,48",
		proper: false
	},
	{
		x: .04335,
		y: -.69008,
		z: .72243,
		mag: 4.97,
		bv: 1.386,
		name: "ι Reticolo",
		detail: "Reticolo · mag 4,97",
		proper: false
	},
	{
		x: -.77307,
		y: -.6131,
		z: .16268,
		mag: 5.28,
		bv: -.133,
		name: "35 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,28",
		proper: false
	},
	{
		x: -.83532,
		y: -.5455,
		z: .06838,
		mag: 3.91,
		bv: .032,
		name: "ν Toro",
		detail: "Toro · mag 3,91",
		proper: false
	},
	{
		x: -.83239,
		y: -.54877,
		z: .07735,
		mag: 5.32,
		bv: -.08,
		name: "40 Toro",
		detail: "Toro · mag 5,32",
		proper: false
	},
	{
		x: -.82109,
		y: .08767,
		z: -.56402,
		mag: 5,
		bv: .495,
		name: "HIP 19018",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: -.91548,
		y: -.37705,
		z: -.14045,
		mag: 4.36,
		bv: 1.064,
		name: "A1 Toro",
		detail: "Toro · mag 4,36",
		proper: false
	},
	{
		x: -.87963,
		y: -.02306,
		z: -.4751,
		mag: 4.25,
		bv: -.011,
		name: "λ Perseo",
		detail: "Perseo · mag 4,25",
		proper: false
	},
	{
		x: -.92847,
		y: -.30834,
		z: -.20706,
		mag: 5.18,
		bv: -.124,
		name: "41 Toro",
		detail: "Toro · mag 5,18",
		proper: false
	},
	{
		x: -.93023,
		y: -.2907,
		z: -.22397,
		mag: 5.21,
		bv: .359,
		name: "ψ Toro",
		detail: "Toro · mag 5,21",
		proper: false
	},
	{
		x: -.89487,
		y: -.05312,
		z: -.44316,
		mag: 3.96,
		bv: -.025,
		name: "Nembus",
		detail: "c Perseo · mag 3,96",
		proper: true
	},
	{
		x: -.6068,
		y: .35686,
		z: -.71024,
		mag: 5.1,
		bv: .589,
		name: "HIP 19461",
		detail: "mag 5,10",
		proper: false
	},
	{
		x: -.2719,
		y: -.73156,
		z: .62521,
		mag: 4.93,
		bv: .334,
		name: "δ Orologio",
		detail: "Orologio · mag 4,93",
		proper: false
	},
	{
		x: -.73963,
		y: -.62103,
		z: .25936,
		mag: 4.04,
		bv: .327,
		name: "Beid",
		detail: "ο1 Fiume Eridano · mag 4,04",
		proper: true
	},
	{
		x: -.86315,
		y: -.49942,
		z: .07448,
		mag: 5.29,
		bv: .366,
		name: "46 Toro",
		detail: "Toro · mag 5,29",
		proper: false
	},
	{
		x: -.87344,
		y: -.48383,
		z: .05489,
		mag: 4.84,
		bv: .799,
		name: "47 Toro",
		detail: "Toro · mag 4,84",
		proper: false
	},
	{
		x: -.27072,
		y: -.72434,
		z: .63407,
		mag: 3.85,
		bv: 1.085,
		name: "α Orologio",
		detail: "Orologio · mag 3,85",
		proper: false
	},
	{
		x: -.7077,
		y: -.63542,
		z: .30887,
		mag: 4.87,
		bv: 1.156,
		name: "A Fiume Eridano",
		detail: "Fiume Eridano · mag 4,87",
		proper: false
	},
	{
		x: .05621,
		y: -.66462,
		z: .74506,
		mag: 3.33,
		bv: .915,
		name: "α Reticolo",
		detail: "Reticolo · mag 3,33",
		proper: false
	},
	{
		x: -.87887,
		y: -.47476,
		z: .04672,
		mag: 5.22,
		bv: -.085,
		name: "HIP 19799",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.92827,
		y: -.13122,
		z: -.34798,
		mag: 4.67,
		bv: 1.007,
		name: "f Perseo",
		detail: "Perseo · mag 4,67",
		proper: false
	},
	{
		x: -.89787,
		y: -.03184,
		z: -.4391,
		mag: 4.12,
		bv: .935,
		name: "μ Perseo",
		detail: "Perseo · mag 4,12",
		proper: false
	},
	{
		x: -.7364,
		y: -.61632,
		z: .27904,
		mag: 4.43,
		bv: .82,
		name: "Keid",
		detail: "ο2 Fiume Eridano · mag 4,43",
		proper: true
	},
	{
		x: -.87349,
		y: -.48258,
		z: .06425,
		mag: 4.27,
		bv: -.054,
		name: "μ Toro",
		detail: "Toro · mag 4,27",
		proper: false
	},
	{
		x: -.12526,
		y: -.70445,
		z: .69861,
		mag: 4.26,
		bv: .312,
		name: "γ Pesce Dorato",
		detail: "Pesce Dorato · mag 4,26",
		proper: false
	},
	{
		x: .00263,
		y: -.6764,
		z: .73653,
		mag: 4.44,
		bv: 1.078,
		name: "ε Reticolo",
		detail: "Reticolo · mag 4,44",
		proper: false
	},
	{
		x: -.87011,
		y: .0371,
		z: -.49146,
		mag: 5.2,
		bv: .052,
		name: "HIP 19949",
		detail: "mag 5,20",
		proper: false
	},
	{
		x: -.92924,
		y: -.35891,
		z: -.08775,
		mag: 4.93,
		bv: .259,
		name: "ω Toro",
		detail: "Toro · mag 4,93",
		proper: false
	},
	{
		x: -.40548,
		y: -.7129,
		z: .57215,
		mag: 3.55,
		bv: -.108,
		name: "Beemim",
		detail: "υ4 Fiume Eridano · mag 3,55",
		proper: true
	},
	{
		x: -.89117,
		y: -.00155,
		z: -.45366,
		mag: 4.6,
		bv: .043,
		name: "b Perseo",
		detail: "Perseo · mag 4,60",
		proper: false
	},
	{
		x: -.24501,
		y: -.711,
		z: .65913,
		mag: 5.33,
		bv: 1.066,
		name: "HIP 20161",
		detail: "mag 5,33",
		proper: false
	},
	{
		x: -.93563,
		y: -.3392,
		z: -.09762,
		mag: 5.34,
		bv: -.107,
		name: "56 Toro",
		detail: "Toro · mag 5,34",
		proper: false
	},
	{
		x: -.91473,
		y: -.40379,
		z: -.01463,
		mag: 3.65,
		bv: .981,
		name: "Prima Hyadum",
		detail: "γ Toro · mag 3,65",
		proper: true
	},
	{
		x: -.94644,
		y: -.27469,
		z: -.16971,
		mag: 4.97,
		bv: 1.15,
		name: "Alkalbain",
		detail: "φ Toro · mag 4,97",
		proper: true
	},
	{
		x: -.94594,
		y: -.19004,
		z: -.26285,
		mag: 4.93,
		bv: .95,
		name: "54 Perseo",
		detail: "Perseo · mag 4,93",
		proper: false
	},
	{
		x: -.91349,
		y: -.40682,
		z: -.00529,
		mag: 5.26,
		bv: .225,
		name: "58 Toro",
		detail: "Toro · mag 5,26",
		proper: false
	},
	{
		x: -.78193,
		y: .18498,
		z: -.59529,
		mag: 5.26,
		bv: .82,
		name: "HIP 20266",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: -.91331,
		y: -.04195,
		z: -.4051,
		mag: 4.8,
		bv: -.022,
		name: "d Perseo",
		detail: "Perseo · mag 4,80",
		proper: false
	},
	{
		x: .0664,
		y: -.64976,
		z: .75724,
		mag: 5.24,
		bv: .955,
		name: "η Reticolo",
		detail: "Reticolo · mag 5,24",
		proper: false
	},
	{
		x: -.92657,
		y: -.37475,
		z: -.03211,
		mag: 3.77,
		bv: .983,
		name: "Secunda Hyadum",
		detail: "δ Toro · mag 3,77",
		proper: true
	},
	{
		x: -.78646,
		y: -.5635,
		z: .25288,
		mag: 5.17,
		bv: .072,
		name: "ξ Fiume Eridano",
		detail: "Fiume Eridano · mag 5,17",
		proper: false
	},
	{
		x: -.88844,
		y: -.45207,
		z: .07945,
		mag: 5.1,
		bv: .074,
		name: "r Toro",
		detail: "Toro · mag 5,10",
		proper: false
	},
	{
		x: -.40924,
		y: -.6975,
		z: .58822,
		mag: 3.97,
		bv: 1.468,
		name: "Beemim",
		detail: "undefined3 Fiume Eridano · mag 3,97",
		proper: true
	},
	{
		x: -.92768,
		y: -.37233,
		z: -.02772,
		mag: 4.8,
		bv: .154,
		name: "64 Toro",
		detail: "Toro · mag 4,80",
		proper: false
	},
	{
		x: -.94415,
		y: -.31703,
		z: -.08983,
		mag: 4.21,
		bv: .136,
		name: "κ Toro",
		detail: "Toro · mag 4,21",
		proper: false
	},
	{
		x: -.94398,
		y: -.31791,
		z: -.08845,
		mag: 5.27,
		bv: .25,
		name: "67 Toro",
		detail: "Toro · mag 5,27",
		proper: false
	},
	{
		x: -.93122,
		y: -.36317,
		z: -.0306,
		mag: 4.3,
		bv: .049,
		name: "68 Toro",
		detail: "Toro · mag 4,30",
		proper: false
	},
	{
		x: -.95455,
		y: -.21205,
		z: -.20942,
		mag: 5.29,
		bv: .986,
		name: "HIP 20704",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.94647,
		y: -.30867,
		z: -.09444,
		mag: 4.28,
		bv: .263,
		name: "υ Toro",
		detail: "Toro · mag 4,28",
		proper: false
	},
	{
		x: -.92319,
		y: -.38434,
		z: .00293,
		mag: 4.48,
		bv: .262,
		name: "71 Toro",
		detail: "Toro · mag 4,48",
		proper: false
	},
	{
		x: -.91954,
		y: -.39267,
		z: .01588,
		mag: 4.69,
		bv: .979,
		name: "π Toro",
		detail: "Toro · mag 4,69",
		proper: false
	},
	{
		x: -.92884,
		y: -.37048,
		z: -.0016,
		mag: 4.96,
		bv: 1.137,
		name: "75 Toro",
		detail: "Toro · mag 4,96",
		proper: false
	},
	{
		x: -.92737,
		y: -.37411,
		z: .00415,
		mag: 3.84,
		bv: .952,
		name: "θ1 Toro",
		detail: "Toro · mag 3,84",
		proper: false
	},
	{
		x: -.93932,
		y: -.34077,
		z: -.03943,
		mag: 3.53,
		bv: 1.014,
		name: "Ain",
		detail: "ε Toro · mag 3,53",
		proper: true
	},
	{
		x: -.9271,
		y: -.37478,
		z: .00562,
		mag: 3.4,
		bv: .179,
		name: "Chamukuy",
		detail: "θ2 Toro · mag 3,40",
		proper: true
	},
	{
		x: -.91439,
		y: -.40238,
		z: .04441,
		mag: 5.02,
		bv: .215,
		name: "b Toro",
		detail: "Toro · mag 5,02",
		proper: false
	},
	{
		x: -.9307,
		y: -.36573,
		z: .00622,
		mag: 4.78,
		bv: .17,
		name: "HD 28527",
		detail: "mag 4,78",
		proper: false
	},
	{
		x: -.2448,
		y: -.68478,
		z: .6864,
		mag: 5.07,
		bv: -.194,
		name: "δ Bulino dello Incisore",
		detail: "Bulino dello Incisore · mag 5,07",
		proper: false
	},
	{
		x: -.82987,
		y: -.50943,
		z: .22758,
		mag: 4.91,
		bv: 1.32,
		name: "45 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,91",
		proper: false
	},
	{
		x: -.48218,
		y: -.66377,
		z: .57176,
		mag: 4.49,
		bv: .972,
		name: "Beemim",
		detail: "υ1 Fiume Eridano · mag 4,49",
		proper: true
	},
	{
		x: -.92876,
		y: -.36918,
		z: .03325,
		mag: 4.65,
		bv: .255,
		name: "ρ Toro",
		detail: "Toro · mag 4,65",
		proper: false
	},
	{
		x: -.08057,
		y: -.66151,
		z: .74559,
		mag: 3.3,
		bv: -.079,
		name: "α Pesce Dorato",
		detail: "Pesce Dorato · mag 3,30",
		proper: false
	},
	{
		x: -.75515,
		y: -.56179,
		z: .33786,
		mag: 5.2,
		bv: 1.708,
		name: "47 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,20",
		proper: false
	},
	{
		x: -.74737,
		y: -.56663,
		z: .34694,
		mag: 5.24,
		bv: 1.465,
		name: "HIP 21297",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: -.47261,
		y: -.66008,
		z: .58389,
		mag: 3.81,
		bv: .957,
		name: "Theemin",
		detail: "υ2 Fiume Eridano · mag 3,81",
		proper: true
	},
	{
		x: -.90696,
		y: -.40874,
		z: .10178,
		mag: 4.25,
		bv: .184,
		name: "d Toro",
		detail: "Toro · mag 4,25",
		proper: false
	},
	{
		x: -.93807,
		y: -.34609,
		z: .01591,
		mag: .87,
		bv: 1.538,
		name: "Aldebaran",
		detail: "α Toro · mag 0,87",
		proper: true
	},
	{
		x: -.80573,
		y: -.52065,
		z: .28235,
		mag: 3.93,
		bv: -.21,
		name: "ν Fiume Eridano",
		detail: "Fiume Eridano · mag 3,93",
		proper: false
	},
	{
		x: -.94741,
		y: -.07031,
		z: -.3122,
		mag: 4.25,
		bv: 1.171,
		name: "e Perseo",
		detail: "Perseo · mag 4,25",
		proper: false
	},
	{
		x: -.84478,
		y: -.48388,
		z: .22848,
		mag: 5.32,
		bv: -.107,
		name: "49 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,32",
		proper: false
	},
	{
		x: -.81524,
		y: -.50991,
		z: .27456,
		mag: 5.22,
		bv: .283,
		name: "c Fiume Eridano",
		detail: "Fiume Eridano · mag 5,22",
		proper: false
	},
	{
		x: -.92244,
		y: -.3785,
		z: .07644,
		mag: 4.27,
		bv: .122,
		name: "c1 Toro",
		detail: "Toro · mag 4,27",
		proper: false
	},
	{
		x: -.69204,
		y: -.58631,
		z: .42109,
		mag: 3.86,
		bv: 1.082,
		name: "Sceptrum",
		detail: "l Fiume Eridano · mag 3,86",
		proper: true
	},
	{
		x: -.71802,
		y: -.57141,
		z: .39741,
		mag: 4.99,
		bv: .074,
		name: "HIP 21644",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: -.93867,
		y: -.34315,
		z: .03402,
		mag: 5.08,
		bv: .141,
		name: "σ1 Toro",
		detail: "Toro · mag 5,08",
		proper: false
	},
	{
		x: -.93928,
		y: -.34159,
		z: .03272,
		mag: 4.67,
		bv: .147,
		name: "σ2 Toro",
		detail: "Toro · mag 4,67",
		proper: false
	},
	{
		x: -.89107,
		y: .0743,
		z: -.44775,
		mag: 5.07,
		bv: 1.079,
		name: "3 Giraffa",
		detail: "Giraffa · mag 5,07",
		proper: false
	},
	{
		x: -.62811,
		y: -.60685,
		z: .48705,
		mag: 4.32,
		bv: 1.599,
		name: "54 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,32",
		proper: false
	},
	{
		x: -.30278,
		y: -.66256,
		z: .68508,
		mag: 4.44,
		bv: .342,
		name: "α Bulino dello Incisore",
		detail: "Bulino dello Incisore · mag 4,44",
		proper: false
	},
	{
		x: -.3788,
		y: -.65489,
		z: .65394,
		mag: 5.04,
		bv: .391,
		name: "β Bulino dello Incisore",
		detail: "Bulino dello Incisore · mag 5,04",
		proper: false
	},
	{
		x: -.96395,
		y: -.26003,
		z: -.05652,
		mag: 4.27,
		bv: -.112,
		name: "τ Toro",
		detail: "Toro · mag 4,27",
		proper: false
	},
	{
		x: -.16284,
		y: -.65325,
		z: .73942,
		mag: 5.3,
		bv: .977,
		name: "λ Pittore",
		detail: "Pittore · mag 5,30",
		proper: false
	},
	{
		x: -.94478,
		y: -.03104,
		z: -.32622,
		mag: 5.3,
		bv: .028,
		name: "59 Perseo",
		detail: "Perseo · mag 5,30",
		proper: false
	},
	{
		x: -.00756,
		y: -.63002,
		z: .77654,
		mag: 5.28,
		bv: .206,
		name: "κ Pesce Dorato",
		detail: "Pesce Dorato · mag 5,28",
		proper: false
	},
	{
		x: -.81639,
		y: -.48994,
		z: .30572,
		mag: 4.01,
		bv: -.148,
		name: "μ Fiume Eridano",
		detail: "Fiume Eridano · mag 4,01",
		proper: false
	},
	{
		x: -.92631,
		y: -.36092,
		z: .10807,
		mag: 5.35,
		bv: .197,
		name: "HIP 22157",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: -.86933,
		y: .13112,
		z: -.47652,
		mag: 5.29,
		bv: .246,
		name: "4 Giraffa",
		detail: "Giraffa · mag 5,29",
		proper: false
	},
	{
		x: -.90175,
		y: -.39177,
		z: .18268,
		mag: 3.19,
		bv: .484,
		name: "Tabit",
		detail: "π3 Orione · mag 3,19",
		proper: true
	},
	{
		x: -.96847,
		y: -.07965,
		z: -.23607,
		mag: 4.89,
		bv: 1.447,
		name: "1 Auriga",
		detail: "Auriga · mag 4,89",
		proper: false
	},
	{
		x: -.68076,
		y: -.55865,
		z: .4738,
		mag: 5.03,
		bv: .992,
		name: "60 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,03",
		proper: false
	},
	{
		x: -.91469,
		y: -.37183,
		z: .15837,
		mag: 4.35,
		bv: .01,
		name: "Al Taj",
		detail: "π2 Orione · mag 4,35",
		proper: true
	},
	{
		x: -.8938,
		y: -.39911,
		z: .20455,
		mag: 3.68,
		bv: -.157,
		name: "π4 Orione",
		detail: "Orione · mag 3,68",
		proper: false
	},
	{
		x: -.96142,
		y: -.27411,
		z: .0231,
		mag: 5.08,
		bv: .214,
		name: "i Toro",
		detail: "Toro · mag 5,08",
		proper: false
	},
	{
		x: -.94468,
		y: -.31548,
		z: .08976,
		mag: 4.71,
		bv: 1.773,
		name: "Al Kumm",
		detail: "ο1 Orione · mag 4,71",
		proper: true
	},
	{
		x: -.97216,
		y: -.08102,
		z: -.21988,
		mag: 4.79,
		bv: 1.414,
		name: "2 Auriga",
		detail: "Auriga · mag 4,79",
		proper: false
	},
	{
		x: -.80227,
		y: -.48142,
		z: .35298,
		mag: 4.36,
		bv: .257,
		name: "ω Fiume Eridano",
		detail: "Fiume Eridano · mag 4,36",
		proper: false
	},
	{
		x: -.87288,
		y: -.41807,
		z: .25159,
		mag: 5.33,
		bv: 1.632,
		name: "5 Orione",
		detail: "Orione · mag 5,33",
		proper: false
	},
	{
		x: -.78549,
		y: .24264,
		z: -.56932,
		mag: 4.26,
		bv: -.008,
		name: "α Giraffa",
		detail: "Giraffa · mag 4,26",
		proper: false
	},
	{
		x: -.8731,
		y: -.41568,
		z: .25476,
		mag: 3.71,
		bv: -.179,
		name: "π5 Orione",
		detail: "Orione · mag 3,71",
		proper: false
	},
	{
		x: -.93265,
		y: -.33478,
		z: .13453,
		mag: 5.18,
		bv: .121,
		name: "Manica",
		detail: "g Orione · mag 5,18",
		proper: true
	},
	{
		x: -.91136,
		y: -.36794,
		z: .1845,
		mag: 5.33,
		bv: 1.214,
		name: "HIP 22834",
		detail: "mag 5,33",
		proper: false
	},
	{
		x: -.92572,
		y: -.34617,
		z: .15236,
		mag: 4.64,
		bv: .085,
		name: "π1 Orione",
		detail: "Orione · mag 4,64",
		proper: false
	},
	{
		x: -.94442,
		y: -.30988,
		z: .10971,
		mag: 4.06,
		bv: 1.158,
		name: "ο2 Orione",
		detail: "Orione · mag 4,06",
		proper: false
	},
	{
		x: -.98085,
		y: -.1073,
		z: -.16255,
		mag: 2.69,
		bv: 1.49,
		name: "Hassaleh",
		detail: "ι Auriga · mag 2,69",
		proper: true
	},
	{
		x: -.8962,
		y: .11633,
		z: -.42813,
		mag: 4.43,
		bv: -.017,
		name: "7 Giraffa",
		detail: "Giraffa · mag 4,43",
		proper: false
	},
	{
		x: -.87085,
		y: -.40704,
		z: .27555,
		mag: 4.47,
		bv: 1.369,
		name: "π6 Orione",
		detail: "Orione · mag 4,47",
		proper: false
	},
	{
		x: -.97373,
		y: -.05019,
		z: -.22211,
		mag: 4.93,
		bv: .037,
		name: "4 Auriga",
		detail: "Auriga · mag 4,93",
		proper: false
	},
	{
		x: -.73234,
		y: -.5052,
		z: .45656,
		mag: 4.78,
		bv: .267,
		name: "64 Fiume Eridano",
		detail: "Fiume Eridano · mag 4,78",
		proper: false
	},
	{
		x: -.6095,
		y: .38712,
		z: -.69184,
		mag: 5.09,
		bv: 1.304,
		name: "HIP 23265",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: -.64098,
		y: -.54242,
		z: .54307,
		mag: 4.91,
		bv: -.047,
		name: "HIP 23362",
		detail: "mag 4,91",
		proper: false
	},
	{
		x: -.7918,
		y: -.46467,
		z: .3964,
		mag: 4.8,
		bv: -.164,
		name: "Kursi al Jauzah",
		detail: "ψ Fiume Eridano · mag 4,80",
		proper: true
	},
	{
		x: -.95502,
		y: .02057,
		z: -.29584,
		mag: 3.03,
		bv: .537,
		name: "Almaaz",
		detail: "ε Auriga · mag 3,03",
		proper: true
	},
	{
		x: -.55649,
		y: -.5681,
		z: .60628,
		mag: 5.01,
		bv: 1.056,
		name: "HIP 23430",
		detail: "mag 5,01",
		proper: false
	},
	{
		x: -.96598,
		y: -.00748,
		z: -.25849,
		mag: 3.69,
		bv: 1.154,
		name: "Saclateni",
		detail: "ζ Auriga · mag 3,69",
		proper: true
	},
	{
		x: .18285,
		y: -.56219,
		z: .80654,
		mag: 5.3,
		bv: .996,
		name: "β Mensa",
		detail: "Mensa · mag 5,30",
		proper: false
	},
	{
		x: -.97782,
		y: -.20901,
		z: .01317,
		mag: 4.62,
		bv: .155,
		name: "ι Toro",
		detail: "Toro · mag 4,62",
		proper: false
	},
	{
		x: -.84529,
		y: .19729,
		z: -.49656,
		mag: 4.03,
		bv: .921,
		name: "β Giraffa",
		detail: "Giraffa · mag 4,03",
		proper: false
	},
	{
		x: -.42029,
		y: -.59096,
		z: .68857,
		mag: 4.55,
		bv: 1.177,
		name: "γ Bulino dello Incisore",
		detail: "Bulino dello Incisore · mag 4,55",
		proper: false
	},
	{
		x: -.95874,
		y: -.26463,
		z: .10386,
		mag: 4.65,
		bv: -.064,
		name: "11 Orione",
		detail: "Orione · mag 4,65",
		proper: false
	},
	{
		x: -.19022,
		y: -.60569,
		z: .77263,
		mag: 5.05,
		bv: 1.484,
		name: "η2 Pittore",
		detail: "Pittore · mag 5,05",
		proper: false
	},
	{
		x: -.61275,
		y: -.5407,
		z: .57635,
		mag: 3.19,
		bv: 1.46,
		name: "ε Lepre",
		detail: "Lepre · mag 3,19",
		proper: false
	},
	{
		x: -.05545,
		y: -.59785,
		z: .79969,
		mag: 4.71,
		bv: .526,
		name: "ζ Pesce Dorato",
		detail: "Pesce Dorato · mag 4,71",
		proper: false
	},
	{
		x: -.85903,
		y: .18731,
		z: -.47642,
		mag: 5.22,
		bv: -.08,
		name: "11 Giraffa",
		detail: "Giraffa · mag 5,22",
		proper: false
	},
	{
		x: -.96749,
		y: .00474,
		z: -.25285,
		mag: 3.18,
		bv: -.148,
		name: "Haedus",
		detail: "η Auriga · mag 3,18",
		proper: true
	},
	{
		x: -.91497,
		y: .11334,
		z: -.38728,
		mag: 4.98,
		bv: .343,
		name: "9 Auriga",
		detail: "Auriga · mag 4,98",
		proper: false
	},
	{
		x: -.8205,
		y: -.42822,
		z: .3787,
		mag: 5.12,
		bv: -.059,
		name: "66 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,12",
		proper: false
	},
	{
		x: -.97244,
		y: -.22385,
		z: .06523,
		mag: 4.91,
		bv: .657,
		name: "m Toro",
		detail: "Toro · mag 4,91",
		proper: false
	},
	{
		x: .04615,
		y: -.58221,
		z: .81173,
		mag: 5.19,
		bv: 1.646,
		name: "HD 33684",
		detail: "Pesce Dorato · mag 5,19",
		proper: false
	},
	{
		x: -.97783,
		y: -.20534,
		z: .04097,
		mag: 5.28,
		bv: .118,
		name: "l Toro",
		detail: "Toro · mag 5,28",
		proper: false
	},
	{
		x: -.81701,
		y: -.4276,
		z: .38685,
		mag: 2.78,
		bv: .161,
		name: "Cursa",
		detail: "β Fiume Eridano · mag 2,78",
		proper: true
	},
	{
		x: -.92534,
		y: -.31694,
		z: .20805,
		mag: 5.33,
		bv: .338,
		name: "i Orione",
		detail: "Orione · mag 5,33",
		proper: false
	},
	{
		x: -.82364,
		y: -.4199,
		z: .38118,
		mag: 5.11,
		bv: .455,
		name: "68 Fiume Eridano",
		detail: "Fiume Eridano · mag 5,11",
		proper: false
	},
	{
		x: -.7804,
		y: -.44909,
		z: .43508,
		mag: 4.25,
		bv: -.187,
		name: "λ Fiume Eridano",
		detail: "Fiume Eridano · mag 4,25",
		proper: false
	},
	{
		x: -.96269,
		y: -.24556,
		z: .11371,
		mag: 4.81,
		bv: .313,
		name: "15 Orione",
		detail: "Orione · mag 4,81",
		proper: false
	},
	{
		x: -.9656,
		y: -.23457,
		z: .11222,
		mag: 5.18,
		bv: 1.525,
		name: "HIP 24197",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: -.7479,
		y: -.4589,
		z: .47964,
		mag: 4.45,
		bv: -.099,
		name: "ι Lepre",
		detail: "Lepre · mag 4,45",
		proper: false
	},
	{
		x: -.69682,
		y: -.48338,
		z: .52989,
		mag: 3.29,
		bv: -.11,
		name: "μ Lepre",
		detail: "Lepre · mag 3,29",
		proper: false
	},
	{
		x: -.73607,
		y: -.46253,
		z: .49423,
		mag: 4.36,
		bv: -.094,
		name: "κ Lepre",
		detail: "Lepre · mag 4,36",
		proper: false
	},
	{
		x: -.88954,
		y: -.34637,
		z: .29791,
		mag: 4.46,
		bv: 1.166,
		name: "ρ Orione",
		detail: "Orione · mag 4,46",
		proper: false
	},
	{
		x: -.9794,
		y: -.00517,
		z: -.20187,
		mag: 4.82,
		bv: .189,
		name: "Alhiba",
		detail: "μ Auriga · mag 4,82",
		proper: true
	},
	{
		x: .10991,
		y: -.56298,
		z: .81913,
		mag: 4.81,
		bv: 1.274,
		name: "θ Pesce Dorato",
		detail: "Pesce Dorato · mag 4,81",
		proper: false
	},
	{
		x: -.78923,
		y: -.42649,
		z: .44183,
		mag: .18,
		bv: -.03,
		name: "Rigel",
		detail: "β Orione · mag 0,18",
		proper: true
	},
	{
		x: -.99147,
		y: -.0585,
		z: -.1165,
		mag: 5.01,
		bv: .222,
		name: "14 Auriga",
		detail: "Auriga · mag 5,01",
		proper: false
	},
	{
		x: -.55416,
		y: -.52941,
		z: .64236,
		mag: 5.06,
		bv: -.067,
		name: "HIP 24505",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: -.95115,
		y: .07961,
		z: -.29828,
		mag: .08,
		bv: .795,
		name: "Capella",
		detail: "α Auriga · mag 0,08",
		proper: true
	},
	{
		x: -.43561,
		y: -.5518,
		z: .71117,
		mag: 4.81,
		bv: .987,
		name: "ο Colomba",
		detail: "Colomba · mag 4,81",
		proper: false
	},
	{
		x: -.80478,
		y: -.4061,
		z: .43291,
		mag: 3.59,
		bv: -.115,
		name: "τ Orione",
		detail: "Orione · mag 3,59",
		proper: false
	},
	{
		x: -.99177,
		y: -.04335,
		z: -.12046,
		mag: 4.54,
		bv: 1.252,
		name: "16 Auriga",
		detail: "Auriga · mag 4,54",
		proper: false
	},
	{
		x: -.97662,
		y: .02689,
		z: -.2133,
		mag: 4.69,
		bv: .63,
		name: "λ Auriga",
		detail: "Auriga · mag 4,69",
		proper: false
	},
	{
		x: -.89037,
		y: -.32763,
		z: .31608,
		mag: 5.34,
		bv: .412,
		name: "21 Orione",
		detail: "Orione · mag 5,34",
		proper: false
	},
	{
		x: -.98753,
		y: -.15121,
		z: .04376,
		mag: 4.96,
		bv: .937,
		name: "n Toro",
		detail: "Toro · mag 4,96",
		proper: false
	},
	{
		x: -.73633,
		y: -.44206,
		z: .51226,
		mag: 4.29,
		bv: -.235,
		name: "λ Lepre",
		detail: "Lepre · mag 4,29",
		proper: false
	},
	{
		x: -.74648,
		y: -.4351,
		z: .50345,
		mag: 5.29,
		bv: -.104,
		name: "ν Lepre",
		detail: "Lepre · mag 5,29",
		proper: false
	},
	{
		x: -.99164,
		y: -.03202,
		z: -.12503,
		mag: 5.05,
		bv: .287,
		name: "19 Auriga",
		detail: "Auriga · mag 5,05",
		proper: false
	},
	{
		x: -.63552,
		y: -.48594,
		z: .59998,
		mag: 4.7,
		bv: -.048,
		name: "HIP 24927",
		detail: "mag 4,70",
		proper: false
	},
	{
		x: -.86717,
		y: -.34246,
		z: .36157,
		mag: 4.72,
		bv: -.168,
		name: "o Orione",
		detail: "Orione · mag 4,72",
		proper: false
	},
	{
		x: -.58759,
		y: -.49923,
		z: .6368,
		mag: 5.06,
		bv: .662,
		name: "HIP 25045",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: -.97137,
		y: .05106,
		z: -.23204,
		mag: 5.22,
		bv: -.129,
		name: "ρ Auriga",
		detail: "Auriga · mag 5,22",
		proper: false
	},
	{
		x: -.63801,
		y: .38507,
		z: -.66683,
		mag: 5.08,
		bv: .506,
		name: "HD 33564",
		detail: "mag 5,08",
		proper: false
	},
	{
		x: -.89908,
		y: -.30674,
		z: .31235,
		mag: 4.99,
		bv: -.096,
		name: "m Orione",
		detail: "Orione · mag 4,99",
		proper: false
	},
	{
		x: -.87572,
		y: .2059,
		z: -.43671,
		mag: 5.24,
		bv: -.011,
		name: "16 Giraffa",
		detail: "Giraffa · mag 5,24",
		proper: false
	},
	{
		x: -.72902,
		y: -.43312,
		z: .53003,
		mag: 5.25,
		bv: -.219,
		name: "8 Lepre",
		detail: "Lepre · mag 5,25",
		proper: false
	},
	{
		x: -.79744,
		y: -.39043,
		z: .46005,
		mag: 4.13,
		bv: .943,
		name: "e Orione",
		detail: "Orione · mag 4,13",
		proper: false
	},
	{
		x: -.97617,
		y: -.17854,
		z: .12333,
		mag: 5,
		bv: .544,
		name: "111 Toro",
		detail: "Toro · mag 5,00",
		proper: false
	},
	{
		x: -.85044,
		y: -.34843,
		z: .39414,
		mag: 3.35,
		bv: -.24,
		name: "Saif al Jabbar",
		detail: "η Orione · mag 3,35",
		proper: true
	},
	{
		x: -.86381,
		y: -.33669,
		z: .3748,
		mag: 5.07,
		bv: .961,
		name: "p Orione",
		detail: "Orione · mag 5,07",
		proper: false
	},
	{
		x: -.98624,
		y: .01543,
		z: -.16461,
		mag: 5.02,
		bv: 1.445,
		name: "σ Auriga",
		detail: "Auriga · mag 5,02",
		proper: false
	},
	{
		x: -.88667,
		y: -.31381,
		z: .33962,
		mag: 4.89,
		bv: -.2,
		name: "25 Orione",
		detail: "Orione · mag 4,89",
		proper: false
	},
	{
		x: -.91983,
		y: -.27485,
		z: .27995,
		mag: 1.64,
		bv: -.224,
		name: "Bellatrix",
		detail: "γ Orione · mag 1,64",
		proper: true
	},
	{
		x: -.99725,
		y: -.06532,
		z: -.03492,
		mag: 1.65,
		bv: -.13,
		name: "Elnath",
		detail: "β Toro · mag 1,65",
		proper: true
	},
	{
		x: -.03594,
		y: -.55727,
		z: .82955,
		mag: 5.14,
		bv: .986,
		name: "λ Pesce Dorato",
		detail: "Pesce Dorato · mag 5,14",
		proper: false
	},
	{
		x: -.89708,
		y: -.29603,
		z: .32805,
		mag: 4.59,
		bv: -.199,
		name: "ψ Orione",
		detail: "Orione · mag 4,59",
		proper: false
	},
	{
		x: -.99005,
		y: -.12484,
		z: .06494,
		mag: 4.88,
		bv: -.14,
		name: "o Toro",
		detail: "Toro · mag 4,88",
		proper: false
	},
	{
		x: -.99311,
		y: -.00418,
		z: -.11709,
		mag: 5.08,
		bv: 1.4,
		name: "φ Auriga",
		detail: "Auriga · mag 5,08",
		proper: false
	},
	{
		x: -.6445,
		y: -.45712,
		z: .61291,
		mag: 2.81,
		bv: .807,
		name: "Nihal",
		detail: "β Lepre · mag 2,81",
		proper: true
	},
	{
		x: -.86368,
		y: -.31924,
		z: .39006,
		mag: 4.71,
		bv: 1.592,
		name: "31 Orione",
		detail: "Orione · mag 4,71",
		proper: false
	},
	{
		x: -.91876,
		y: -.25787,
		z: .29896,
		mag: 4.2,
		bv: -.143,
		name: "32 Orione",
		detail: "Orione · mag 4,20",
		proper: false
	},
	{
		x: -.43057,
		y: -.51317,
		z: .74247,
		mag: 3.86,
		bv: 1.13,
		name: "ε Colomba",
		detail: "Colomba · mag 3,86",
		proper: false
	},
	{
		x: .26386,
		y: -.51458,
		z: .81583,
		mag: 5.18,
		bv: 1.13,
		name: "γ Mensa",
		detail: "Mensa · mag 5,18",
		proper: false
	},
	{
		x: -.80502,
		y: -.35809,
		z: .47298,
		mag: 4.62,
		bv: -.261,
		name: "Thabit",
		detail: "υ Orione · mag 4,62",
		proper: true
	},
	{
		x: -.87108,
		y: -.30469,
		z: .38521,
		mag: 2.25,
		bv: -.175,
		name: "Mintaka",
		detail: "δ Orione · mag 2,25",
		proper: true
	},
	{
		x: -.98233,
		y: -.14043,
		z: .12369,
		mag: 4.32,
		bv: 2.06,
		name: "The Ruby Star",
		detail: "119 Toro · mag 4,32",
		proper: true
	},
	{
		x: -.85999,
		y: -.31237,
		z: .40354,
		mag: 5.34,
		bv: -.188,
		name: "HIP 25980",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.99721,
		y: -.01068,
		z: -.07382,
		mag: 4.71,
		bv: .281,
		name: "χ Auriga",
		detail: "Auriga · mag 4,71",
		proper: false
	},
	{
		x: -.68376,
		y: -.42485,
		z: .59328,
		mag: 2.58,
		bv: .211,
		name: "Arneb",
		detail: "α Lepre · mag 2,58",
		proper: true
	},
	{
		x: .05577,
		y: -.54051,
		z: .83949,
		mag: 5.34,
		bv: 1.039,
		name: "28 Pesce Dorato",
		detail: "Pesce Dorato · mag 5,34",
		proper: false
	},
	{
		x: .02544,
		y: -.54133,
		z: .84042,
		mag: 3.76,
		bv: .64,
		name: "β Pesce Dorato",
		detail: "Pesce Dorato · mag 3,76",
		proper: false
	},
	{
		x: -.90399,
		y: -.26341,
		z: .33679,
		mag: 5.32,
		bv: .051,
		name: "n2 Orione",
		detail: "Orione · mag 5,32",
		proper: false
	},
	{
		x: -.94199,
		y: -.21284,
		z: .25951,
		mag: 4.39,
		bv: -.157,
		name: "Heka",
		detail: "φ1 Orione · mag 4,39",
		proper: true
	},
	{
		x: -.81884,
		y: -.33728,
		z: .46448,
		mag: 4.78,
		bv: -.248,
		name: "HIP 26199",
		detail: "mag 4,78",
		proper: false
	},
	{
		x: -.94461,
		y: -.20783,
		z: .25402,
		mag: 3.39,
		bv: -.16,
		name: "Meissa",
		detail: "λ Orione · mag 3,39",
		proper: true
	},
	{
		x: -.82498,
		y: -.33192,
		z: .45743,
		mag: 4.98,
		bv: .4,
		name: "Trapezium",
		detail: "θ1 Orione · mag 4,98",
		proper: true
	},
	{
		x: -.82496,
		y: -.3319,
		z: .45748,
		mag: 5.13,
		bv: .02,
		name: "Becklin's Star",
		detail: "θ1 Orione · mag 5,13",
		proper: true
	},
	{
		x: -.82471,
		y: -.3317,
		z: .45806,
		mag: 4.98,
		bv: -.097,
		name: "θ2 Orione",
		detail: "Orione · mag 4,98",
		proper: false
	},
	{
		x: -.83036,
		y: -.32737,
		z: .45092,
		mag: 4.58,
		bv: -.183,
		name: "Mizan Batil",
		detail: "c Orione · mag 4,58",
		proper: true
	},
	{
		x: -.81983,
		y: -.33518,
		z: .46426,
		mag: 2.75,
		bv: -.21,
		name: "Hatysa",
		detail: "ι Orione · mag 2,75",
		proper: true
	},
	{
		x: -.83024,
		y: -.32651,
		z: .45178,
		mag: 5.24,
		bv: .269,
		name: "45 Orione",
		detail: "Orione · mag 5,24",
		proper: false
	},
	{
		x: -.86408,
		y: -.2964,
		z: .40683,
		mag: 1.69,
		bv: -.184,
		name: "Alnilam",
		detail: "ε Orione · mag 1,69",
		proper: true
	},
	{
		x: -.94117,
		y: -.20701,
		z: .26712,
		mag: 4.09,
		bv: .951,
		name: "φ2 Orione",
		detail: "Orione · mag 4,09",
		proper: false
	},
	{
		x: -.99027,
		y: -.09821,
		z: .0986,
		mag: 2.97,
		bv: -.148,
		name: "Tianguan",
		detail: "ζ Toro · mag 2,97",
		proper: true
	},
	{
		x: -.53499,
		y: -.46564,
		z: .70495,
		mag: 5.28,
		bv: .486,
		name: "ν2 Colomba",
		detail: "Colomba · mag 5,28",
		proper: false
	},
	{
		x: -.85192,
		y: -.29798,
		z: .43064,
		mag: 3.77,
		bv: -.19,
		name: "σ Orione",
		detail: "Orione · mag 3,77",
		proper: false
	},
	{
		x: -.80711,
		y: -.33212,
		z: .48813,
		mag: 4.77,
		bv: .139,
		name: "d Orione",
		detail: "Orione · mag 4,77",
		proper: false
	},
	{
		x: -.90733,
		y: -.24247,
		z: .34347,
		mag: 4.5,
		bv: -.098,
		name: "ω Orione",
		detail: "Orione · mag 4,50",
		proper: false
	},
	{
		x: -.45358,
		y: -.48263,
		z: .74922,
		mag: 2.65,
		bv: -.12,
		name: "Phact",
		detail: "α Colomba · mag 2,65",
		proper: true
	},
	{
		x: -.99833,
		y: -.04726,
		z: .0331,
		mag: 5.18,
		bv: -.15,
		name: "125 Toro",
		detail: "Toro · mag 5,18",
		proper: false
	},
	{
		x: -.85806,
		y: -.28544,
		z: .42692,
		mag: 1.74,
		bv: -.199,
		name: "Alnitak",
		detail: "ζ Orione · mag 1,74",
		proper: true
	},
	{
		x: -.86527,
		y: -.27875,
		z: .41667,
		mag: 4.95,
		bv: -.197,
		name: "HIP 26736",
		detail: "mag 4,95",
		proper: false
	},
	{
		x: -.97652,
		y: -.1273,
		z: .17382,
		mag: 4.84,
		bv: -.125,
		name: "126 Toro",
		detail: "Toro · mag 4,84",
		proper: false
	},
	{
		x: -.4445,
		y: -.477,
		z: .75822,
		mag: 5.29,
		bv: -.032,
		name: "HD 38170",
		detail: "Colomba · mag 5,29",
		proper: false
	},
	{
		x: -.88724,
		y: -.25195,
		z: .38643,
		mag: 4.9,
		bv: 1.144,
		name: "b Orione",
		detail: "Orione · mag 4,90",
		proper: false
	},
	{
		x: -.62408,
		y: -.41109,
		z: .66448,
		mag: 3.59,
		bv: .481,
		name: "Kursi al Jabbar",
		detail: "γ Lepre · mag 3,59",
		proper: true
	},
	{
		x: .08145,
		y: -.52059,
		z: .84991,
		mag: 4.34,
		bv: .217,
		name: "δ Pesce Dorato",
		detail: "Pesce Dorato · mag 4,34",
		proper: false
	},
	{
		x: -.4811,
		y: -.45558,
		z: .74899,
		mag: 5.18,
		bv: -.274,
		name: "μ Colomba",
		detail: "Colomba · mag 5,18",
		proper: false
	},
	{
		x: -.24981,
		y: -.50237,
		z: .82778,
		mag: 5.31,
		bv: 1.04,
		name: "HIP 27243",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: -.72225,
		y: -.35554,
		z: .59325,
		mag: 3.55,
		bv: .104,
		name: "ζ Lepre",
		detail: "Lepre · mag 3,55",
		proper: false
	},
	{
		x: -.17359,
		y: -.50922,
		z: .84295,
		mag: 3.85,
		bv: .171,
		name: "β Pittore",
		detail: "Pittore · mag 3,85",
		proper: false
	},
	{
		x: -.96572,
		y: -.12759,
		z: .22605,
		mag: 5.28,
		bv: -.156,
		name: "133 Toro",
		detail: "Toro · mag 5,28",
		proper: false
	},
	{
		x: -.78142,
		y: -.31725,
		z: .53734,
		mag: 2.07,
		bv: -.168,
		name: "Saiph",
		detail: "κ Orione · mag 2,07",
		proper: true
	},
	{
		x: -.92395,
		y: -.1904,
		z: .33175,
		mag: 5.26,
		bv: .234,
		name: "52 Orione",
		detail: "Orione · mag 5,26",
		proper: false
	},
	{
		x: -.99701,
		y: -.02816,
		z: .072,
		mag: 4.88,
		bv: 1.021,
		name: "132 Toro",
		detail: "Toro · mag 4,88",
		proper: false
	},
	{
		x: -.98397,
		y: .10295,
		z: -.14558,
		mag: 4.51,
		bv: .949,
		name: "τ Auriga",
		detail: "Auriga · mag 4,51",
		proper: false
	},
	{
		x: -.95975,
		y: -.13179,
		z: .248,
		mag: 4.89,
		bv: -.068,
		name: "134 Toro",
		detail: "Toro · mag 4,89",
		proper: false
	},
	{
		x: -.08528,
		y: -.51038,
		z: .85571,
		mag: 4.5,
		bv: 1.075,
		name: "γ Pittore",
		detail: "Pittore · mag 4,50",
		proper: false
	},
	{
		x: .10176,
		y: -.51207,
		z: .85289,
		mag: 5.1,
		bv: -.128,
		name: "ε Pesce Dorato",
		detail: "Pesce Dorato · mag 5,10",
		proper: false
	},
	{
		x: -.15552,
		y: -.50259,
		z: .85042,
		mag: 5.16,
		bv: .96,
		name: "HIP 27621",
		detail: "mag 5,16",
		proper: false
	},
	{
		x: -.42709,
		y: -.45488,
		z: .78146,
		mag: 3.12,
		bv: 1.146,
		name: "Wazn",
		detail: "β Colomba · mag 3,12",
		proper: true
	},
	{
		x: -.98916,
		y: .09195,
		z: -.11453,
		mag: 4.72,
		bv: 1.621,
		name: "υ Auriga",
		detail: "Auriga · mag 4,72",
		proper: false
	},
	{
		x: -.645,
		y: -.37814,
		z: .66407,
		mag: 3.76,
		bv: .984,
		name: "Arsh al Jauzah",
		detail: "δ Lepre · mag 3,76",
		proper: true
	},
	{
		x: -.98393,
		y: .10939,
		z: -.14109,
		mag: 3.97,
		bv: 1.132,
		name: "ν Auriga",
		detail: "Auriga · mag 3,97",
		proper: false
	},
	{
		x: -.88998,
		y: -.2117,
		z: .40389,
		mag: 4.76,
		bv: 1.382,
		name: "56 Orione",
		detail: "Orione · mag 4,76",
		proper: false
	},
	{
		x: -.45768,
		y: -.43985,
		z: .7727,
		mag: 4.88,
		bv: -.154,
		name: "λ Colomba",
		detail: "Colomba · mag 4,88",
		proper: false
	},
	{
		x: -.99929,
		y: .01352,
		z: .03504,
		mag: 4.56,
		bv: -.008,
		name: "136 Toro",
		detail: "Toro · mag 4,56",
		proper: false
	},
	{
		x: .03562,
		y: -.50633,
		z: .8616,
		mag: 4.65,
		bv: 1.022,
		name: "36 Pesce Dorato",
		detail: "Pesce Dorato · mag 4,65",
		proper: false
	},
	{
		x: -.988,
		y: -.04767,
		z: .14692,
		mag: 4.39,
		bv: .594,
		name: "χ1 Orione",
		detail: "Orione · mag 4,39",
		proper: false
	},
	{
		x: -.14614,
		y: -.49446,
		z: .85683,
		mag: 5.29,
		bv: .295,
		name: "HIP 27947",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.89242,
		y: .25415,
		z: -.37283,
		mag: 4.96,
		bv: .052,
		name: "ξ Auriga",
		detail: "Auriga · mag 4,96",
		proper: false
	},
	{
		x: -.85723,
		y: .28554,
		z: -.42851,
		mag: 5.2,
		bv: .01,
		name: "31 Giraffa",
		detail: "Giraffa · mag 5,20",
		proper: false
	},
	{
		x: -.92948,
		y: -.15572,
		z: .3344,
		mag: .45,
		bv: 1.5,
		name: "Betelgeuse",
		detail: "α Orione · mag 0,45",
		proper: true
	},
	{
		x: -.40518,
		y: -.44668,
		z: .79769,
		mag: 4.97,
		bv: 1.102,
		name: "ξ Colomba",
		detail: "Colomba · mag 4,97",
		proper: false
	},
	{
		x: -.72918,
		y: -.31683,
		z: .60656,
		mag: 3.71,
		bv: .337,
		name: "η Lepre",
		detail: "Lepre · mag 3,71",
		proper: false
	},
	{
		x: -.43396,
		y: -.43268,
		z: .79023,
		mag: 4.36,
		bv: -.165,
		name: "γ Colomba",
		detail: "Colomba · mag 4,36",
		proper: false
	},
	{
		x: -.9975,
		y: .01464,
		z: .06915,
		mag: 4.81,
		bv: -.088,
		name: "139 Toro",
		detail: "Toro · mag 4,81",
		proper: false
	},
	{
		x: -.87834,
		y: -.19811,
		z: .43506,
		mag: 5.21,
		bv: .009,
		name: "60 Orione",
		detail: "Orione · mag 5,21",
		proper: false
	},
	{
		x: -.78118,
		y: -.27451,
		z: .56071,
		mag: 5.04,
		bv: .189,
		name: "2 Unicorno",
		detail: "Unicorno · mag 5,04",
		proper: false
	},
	{
		x: -.31202,
		y: -.45757,
		z: .83263,
		mag: 3.96,
		bv: 1.146,
		name: "η Colomba",
		detail: "Colomba · mag 3,96",
		proper: false
	},
	{
		x: -.90278,
		y: .25355,
		z: -.34742,
		mag: 3.72,
		bv: 1.01,
		name: "δ Auriga",
		detail: "Auriga · mag 3,72",
		proper: false
	},
	{
		x: -.96007,
		y: .18068,
		z: -.2136,
		mag: 1.9,
		bv: .077,
		name: "Menkalinan",
		detail: "β Auriga · mag 1,90",
		proper: true
	},
	{
		x: -.98827,
		y: .11718,
		z: -.09797,
		mag: 2.65,
		bv: -.083,
		name: "Mahasim",
		detail: "θ Auriga · mag 2,65",
		proper: true
	},
	{
		x: -.95512,
		y: .18973,
		z: -.2275,
		mag: 4.3,
		bv: 1.701,
		name: "π Auriga",
		detail: "Auriga · mag 4,30",
		proper: false
	},
	{
		x: -.84622,
		y: -.22203,
		z: .48437,
		mag: 4.53,
		bv: 1.202,
		name: "HIP 28413",
		detail: "mag 4,53",
		proper: false
	},
	{
		x: -.76909,
		y: -.27171,
		z: .57851,
		mag: 4.92,
		bv: -.128,
		name: "3 Unicorno",
		detail: "Unicorno · mag 4,92",
		proper: false
	},
	{
		x: -.94156,
		y: -.10995,
		z: .3184,
		mag: 4.12,
		bv: .17,
		name: "μ Orione",
		detail: "Orione · mag 4,12",
		proper: false
	},
	{
		x: -.56809,
		y: -.36844,
		z: .73588,
		mag: 5.03,
		bv: 1.335,
		name: "HIP 28675",
		detail: "mag 5,03",
		proper: false
	},
	{
		x: -.98451,
		y: -.02051,
		z: .1741,
		mag: 5.14,
		bv: -.097,
		name: "64 Orione",
		detail: "Orione · mag 5,14",
		proper: false
	},
	{
		x: -.98562,
		y: -.01502,
		z: .16833,
		mag: 4.64,
		bv: .236,
		name: "χ2 Orione",
		detail: "Orione · mag 4,64",
		proper: false
	},
	{
		x: -.99248,
		y: .01248,
		z: .12173,
		mag: 4.16,
		bv: .835,
		name: "Propus",
		detail: "1 Gemelli · mag 4,16",
		proper: true
	},
	{
		x: -.80978,
		y: -.23407,
		z: .53802,
		mag: 5.19,
		bv: -.066,
		name: "HD 41335",
		detail: "Unicorno · mag 5,19",
		proper: false
	},
	{
		x: -.6989,
		y: -.30118,
		z: .64871,
		mag: 4.92,
		bv: .196,
		name: "17 Lepre",
		detail: "Lepre · mag 4,92",
		proper: false
	},
	{
		x: -.7175,
		y: -.28632,
		z: .63499,
		mag: 4.67,
		bv: .046,
		name: "θ Lepre",
		detail: "Lepre · mag 4,67",
		proper: false
	},
	{
		x: -.98329,
		y: .14827,
		z: -.10565,
		mag: 5.35,
		bv: .251,
		name: "40 Auriga",
		detail: "Auriga · mag 5,35",
		proper: false
	},
	{
		x: .02082,
		y: -.48318,
		z: .87527,
		mag: 5.04,
		bv: 1.256,
		name: "HIP 28991",
		detail: "mag 5,04",
		proper: false
	},
	{
		x: -.40054,
		y: -.41092,
		z: .81897,
		mag: 5,
		bv: -.095,
		name: "Elkurud",
		detail: "θ Colomba · mag 5,00",
		proper: true
	},
	{
		x: -.9657,
		y: -.04748,
		z: .25527,
		mag: 4.42,
		bv: -.164,
		name: "ν Orione",
		detail: "Orione · mag 4,42",
		proper: false
	},
	{
		x: -.66397,
		y: -.30918,
		z: .68084,
		mag: 5.28,
		bv: 1.661,
		name: "19 Lepre",
		detail: "Lepre · mag 5,28",
		proper: false
	},
	{
		x: .13697,
		y: -.48475,
		z: .86386,
		mag: 5.06,
		bv: -.072,
		name: "ν Pesce Dorato",
		detail: "Pesce Dorato · mag 5,06",
		proper: false
	},
	{
		x: -.86348,
		y: .30798,
		z: -.39944,
		mag: 5.35,
		bv: 1.096,
		name: "37 Giraffa",
		detail: "Giraffa · mag 5,35",
		proper: false
	},
	{
		x: .23798,
		y: -.48178,
		z: .84336,
		mag: 5.08,
		bv: .714,
		name: "α Mensa",
		detail: "Mensa · mag 5,08",
		proper: false
	},
	{
		x: -.10327,
		y: -.46459,
		z: .87948,
		mag: 4.72,
		bv: -.229,
		name: "δ Pittore",
		detail: "Pittore · mag 4,72",
		proper: false
	},
	{
		x: .08116,
		y: -.47939,
		z: .87384,
		mag: 5.01,
		bv: 1.599,
		name: "η2 Pesce Dorato",
		detail: "Pesce Dorato · mag 5,01",
		proper: false
	},
	{
		x: -.80856,
		y: -.20393,
		z: .55195,
		mag: 5.06,
		bv: -.201,
		name: "HIP 29417",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: -.96156,
		y: -.03603,
		z: .27223,
		mag: 4.45,
		bv: -.18,
		name: "ξ Orione",
		detail: "Orione · mag 4,45",
		proper: false
	},
	{
		x: -.96954,
		y: -.01951,
		z: .24415,
		mag: 4.95,
		bv: -.149,
		name: "f1 Orione",
		detail: "Orione · mag 4,95",
		proper: false
	},
	{
		x: -.97875,
		y: .01598,
		z: .20441,
		mag: 5.2,
		bv: .43,
		name: "71 Orione",
		detail: "Orione · mag 5,20",
		proper: false
	},
	{
		x: -.80997,
		y: -.19045,
		z: .55469,
		mag: 3.99,
		bv: 1.319,
		name: "γ Unicorno",
		detail: "Unicorno · mag 3,99",
		proper: false
	},
	{
		x: -.98713,
		y: .04394,
		z: .15376,
		mag: 3.31,
		bv: 1.6,
		name: "Propus",
		detail: "η Gemelli · mag 3,31",
		proper: true
	},
	{
		x: -.99354,
		y: .10315,
		z: .04732,
		mag: 4.32,
		bv: 1.021,
		name: "κ Auriga",
		detail: "Auriga · mag 4,32",
		proper: false
	},
	{
		x: -.96808,
		y: -.00702,
		z: .25054,
		mag: 5.34,
		bv: -.101,
		name: "f2 Orione",
		detail: "Orione · mag 5,34",
		proper: false
	},
	{
		x: -.72812,
		y: -.24223,
		z: .64122,
		mag: 5,
		bv: -.078,
		name: "HIP 29735",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: -.95028,
		y: -.03535,
		z: .30938,
		mag: 5.04,
		bv: .431,
		name: "k Orione",
		detail: "Orione · mag 5,04",
		proper: false
	},
	{
		x: -.43066,
		y: -.37281,
		z: .82192,
		mag: 4.37,
		bv: .978,
		name: "κ Colomba",
		detail: "Colomba · mag 4,37",
		proper: false
	},
	{
		x: -.68957,
		y: -.25689,
		z: .67712,
		mag: 5.15,
		bv: 1.293,
		name: "HIP 29895",
		detail: "mag 5,15",
		proper: false
	},
	{
		x: -.83851,
		y: .33892,
		z: -.42665,
		mag: 5.01,
		bv: 1.843,
		name: "1 Lince",
		detail: "Lince · mag 5,01",
		proper: false
	},
	{
		x: -.75848,
		y: .38206,
		z: -.52796,
		mag: 4.76,
		bv: .025,
		name: "HIP 29997",
		detail: "mag 4,76",
		proper: false
	},
	{
		x: -.86042,
		y: .32749,
		z: -.39041,
		mag: 4.44,
		bv: .032,
		name: "2 Lince",
		detail: "Lince · mag 4,44",
		proper: false
	},
	{
		x: -.79158,
		y: -.18373,
		z: .58279,
		mag: 5.27,
		bv: -.177,
		name: "7 Unicorno",
		detail: "Unicorno · mag 5,27",
		proper: false
	},
	{
		x: -.83934,
		y: -.14499,
		z: .52392,
		mag: 4.91,
		bv: 1.613,
		name: "HIP 30093",
		detail: "mag 4,91",
		proper: false
	},
	{
		x: -.50638,
		y: -.33271,
		z: .79554,
		mag: 3.02,
		bv: -.16,
		name: "Furud",
		detail: "ζ Cane Maggiore · mag 3,02",
		proper: true
	},
	{
		x: -.90338,
		y: .2979,
		z: -.30849,
		mag: 5.34,
		bv: .448,
		name: "45 Auriga",
		detail: "Auriga · mag 5,34",
		proper: false
	},
	{
		x: -.45448,
		y: -.34602,
		z: .8208,
		mag: 3.85,
		bv: .858,
		name: "δ Colomba",
		detail: "Colomba · mag 3,85",
		proper: false
	},
	{
		x: -.6725,
		y: -.24646,
		z: .69785,
		mag: 1.98,
		bv: -.24,
		name: "Mirzam",
		detail: "β Cane Maggiore · mag 1,98",
		proper: true
	},
	{
		x: -.98302,
		y: .0727,
		z: .1685,
		mag: 2.87,
		bv: 1.621,
		name: "Tejat",
		detail: "μ Gemelli · mag 2,87",
		proper: true
	},
	{
		x: -.89904,
		y: -.07033,
		z: .43219,
		mag: 4.39,
		bv: .215,
		name: "ε Unicorno",
		detail: "Unicorno · mag 4,39",
		proper: false
	},
	{
		x: -.13813,
		y: -.42723,
		z: .89353,
		mag: -.62,
		bv: .164,
		name: "Canopo",
		detail: "α Carena · mag −0,62",
		proper: true
	},
	{
		x: -.74868,
		y: -.19464,
		z: .63371,
		mag: 5.21,
		bv: 1.23,
		name: "HIP 30457",
		detail: "mag 5,21",
		proper: false
	},
	{
		x: -.92921,
		y: .27856,
		z: -.24283,
		mag: 4.92,
		bv: 1.905,
		name: "Dolones",
		detail: "ψ1 Auriga · mag 4,92",
		proper: true
	},
	{
		x: -.86313,
		y: .33846,
		z: -.37476,
		mag: 5.21,
		bv: 1.538,
		name: "5 Lince",
		detail: "Lince · mag 5,21",
		proper: false
	},
	{
		x: -.86329,
		y: -.09145,
		z: .49635,
		mag: 5.19,
		bv: 1.186,
		name: "77 Orione",
		detail: "Orione · mag 5,19",
		proper: false
	},
	{
		x: -.81713,
		y: -.12856,
		z: .56194,
		mag: 5.06,
		bv: -.175,
		name: "10 Unicorno",
		detail: "Unicorno · mag 5,06",
		proper: false
	},
	{
		x: -.46424,
		y: -.32154,
		z: .82528,
		mag: 4.47,
		bv: -.169,
		name: "λ Cane Maggiore",
		detail: "Cane Maggiore · mag 4,47",
		proper: false
	},
	{
		x: -.79395,
		y: -.14287,
		z: .59096,
		mag: 3.76,
		bv: -.113,
		name: "β Unicorno",
		detail: "Unicorno · mag 3,76",
		proper: false
	},
	{
		x: -.97379,
		y: .07577,
		z: .21447,
		mag: 4.13,
		bv: -.115,
		name: "Nucatai",
		detail: "ν Gemelli · mag 4,13",
		proper: true
	},
	{
		x: -.0647,
		y: -.42835,
		z: .9013,
		mag: 5.2,
		bv: 1.087,
		name: "61 Pittore",
		detail: "Pittore · mag 5,20",
		proper: false
	},
	{
		x: -.17743,
		y: -.40414,
		z: .89732,
		mag: 5.28,
		bv: .371,
		name: "HIP 30953",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: -.73395,
		y: -.17382,
		z: .65658,
		mag: 5.16,
		bv: 1.262,
		name: "HIP 31084",
		detail: "mag 5,16",
		proper: false
	},
	{
		x: -.93693,
		y: .01665,
		z: .34912,
		mag: 5.22,
		bv: .185,
		name: "HIP 31119",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.59449,
		y: -.25092,
		z: .76395,
		mag: 4.34,
		bv: -.245,
		name: "ξ1 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,34",
		proper: false
	},
	{
		x: -.38227,
		y: -.33739,
		z: .86025,
		mag: 5.25,
		bv: .982,
		name: "HIP 31165",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: -.91135,
		y: -.01311,
		z: .41143,
		mag: 4.47,
		bv: .023,
		name: "13 Unicorno",
		detail: "Unicorno · mag 4,47",
		proper: false
	},
	{
		x: -.84553,
		y: -.07877,
		z: .52809,
		mag: 5.09,
		bv: -.132,
		name: "HIP 31278",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: -.12852,
		y: -.40251,
		z: .90635,
		mag: 4.35,
		bv: -.021,
		name: "N Carena",
		detail: "Carena · mag 4,35",
		proper: false
	},
	{
		x: -.59835,
		y: -.23643,
		z: .76556,
		mag: 4.54,
		bv: -.035,
		name: "ξ2 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,54",
		proper: false
	},
	{
		x: -.98186,
		y: .15861,
		z: .10385,
		mag: 5.26,
		bv: -.008,
		name: "49 Auriga",
		detail: "Auriga · mag 5,26",
		proper: false
	},
	{
		x: -.64621,
		y: -.20443,
		z: .73527,
		mag: 3.95,
		bv: 1.037,
		name: "ν2 Cane Maggiore",
		detail: "Cane Maggiore · mag 3,95",
		proper: false
	},
	{
		x: -.95456,
		y: .07763,
		z: .28772,
		mag: 1.93,
		bv: .001,
		name: "Alhena",
		detail: "γ Gemelli · mag 1,93",
		proper: true
	},
	{
		x: -.29038,
		y: -.35081,
		z: .89028,
		mag: 3.17,
		bv: -.103,
		name: "ν Poppa",
		detail: "Poppa · mag 3,17",
		proper: false
	},
	{
		x: -.46152,
		y: -.28866,
		z: .83885,
		mag: 5.25,
		bv: 1.177,
		name: "HIP 31688",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: -.65825,
		y: -.19264,
		z: .72773,
		mag: 4.42,
		bv: 1.137,
		name: "ν3 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,42",
		proper: false
	},
	{
		x: -.20676,
		y: -.37316,
		z: .90443,
		mag: 5.05,
		bv: .997,
		name: "HIP 31765",
		detail: "mag 5,05",
		proper: false
	},
	{
		x: -.96373,
		y: .25494,
		z: -.07892,
		mag: 5.34,
		bv: -.075,
		name: "ψ3 Auriga",
		detail: "Auriga · mag 5,34",
		proper: false
	},
	{
		x: -.70722,
		y: -.1572,
		z: .68929,
		mag: 4.82,
		bv: 1.459,
		name: "HIP 31827",
		detail: "mag 4,82",
		proper: false
	},
	{
		x: -.95451,
		y: .27334,
		z: -.11912,
		mag: 4.8,
		bv: 1.236,
		name: "ψ2 Auriga",
		detail: "Auriga · mag 4,80",
		proper: false
	},
	{
		x: -.92026,
		y: .03836,
		z: .38942,
		mag: 4.66,
		bv: -.233,
		name: "15 Unicorno",
		detail: "Unicorno · mag 4,66",
		proper: false
	},
	{
		x: -.76094,
		y: -.10905,
		z: .63959,
		mag: 5.21,
		bv: 1.525,
		name: "HIP 32064",
		detail: "mag 5,21",
		proper: false
	},
	{
		x: -.95518,
		y: .1048,
		z: .27686,
		mag: 5.2,
		bv: .063,
		name: "26 Gemelli",
		detail: "Gemelli · mag 5,20",
		proper: false
	},
	{
		x: -.94371,
		y: .29661,
		z: -.14641,
		mag: 5.04,
		bv: 1.479,
		name: "ψ4 Auriga",
		detail: "Auriga · mag 5,04",
		proper: false
	},
	{
		x: -.97229,
		y: .16727,
		z: .16333,
		mag: 3.06,
		bv: 1.377,
		name: "Mebsuta",
		detail: "ε Gemelli · mag 3,06",
		proper: true
	},
	{
		x: -.93517,
		y: .07618,
		z: .3459,
		mag: 4.49,
		bv: 1.167,
		name: "30 Gemelli",
		detail: "Gemelli · mag 4,49",
		proper: false
	},
	{
		x: -.47532,
		y: -.25849,
		z: .84099,
		mag: 5.23,
		bv: -.127,
		name: "10 Cane Maggiore",
		detail: "Cane Maggiore · mag 5,23",
		proper: false
	},
	{
		x: -.6709,
		y: -.15454,
		z: .72527,
		mag: -1.44,
		bv: .009,
		name: "Sirio",
		detail: "α Cane Maggiore · mag −1,44",
		proper: true
	},
	{
		x: -.93232,
		y: .07849,
		z: .35302,
		mag: 3.35,
		bv: .443,
		name: "Alzirr",
		detail: "ξ Gemelli · mag 3,35",
		proper: true
	},
	{
		x: -.69339,
		y: -.1369,
		z: .70744,
		mag: 5.3,
		bv: .075,
		name: "HIP 32411",
		detail: "mag 5,30",
		proper: false
	},
	{
		x: -.84611,
		y: .38238,
		z: -.37133,
		mag: 4.86,
		bv: .084,
		name: "12 Lince",
		detail: "Lince · mag 4,86",
		proper: false
	},
	{
		x: -.94512,
		y: .30111,
		z: -.12685,
		mag: 5.24,
		bv: .575,
		name: "ψ5 Auriga",
		detail: "Auriga · mag 5,24",
		proper: false
	},
	{
		x: -.86421,
		y: .37344,
		z: -.33717,
		mag: 5.34,
		bv: .964,
		name: "13 Lince",
		detail: "Lince · mag 5,34",
		proper: false
	},
	{
		x: -.69696,
		y: -.13085,
		z: .70507,
		mag: 5.28,
		bv: -.024,
		name: "11 Cane Maggiore",
		detail: "Cane Maggiore · mag 5,28",
		proper: false
	},
	{
		x: -.90299,
		y: .04796,
		z: .42698,
		mag: 4.77,
		bv: 1.396,
		name: "17 Unicorno",
		detail: "Unicorno · mag 4,77",
		proper: false
	},
	{
		x: -.36799,
		y: -.29279,
		z: .88253,
		mag: 5.27,
		bv: -.078,
		name: "x Poppa",
		detail: "Poppa · mag 5,27",
		proper: false
	},
	{
		x: -.75727,
		y: -.08596,
		z: .64741,
		mag: 5.08,
		bv: 1.795,
		name: "HIP 32558",
		detail: "mag 5,08",
		proper: false
	},
	{
		x: -.91957,
		y: .33337,
		z: -.20799,
		mag: 5.22,
		bv: 1.131,
		name: "ψ6 Auriga",
		detail: "Auriga · mag 5,22",
		proper: false
	},
	{
		x: -.8627,
		y: .00531,
		z: .50569,
		mag: 4.48,
		bv: 1.099,
		name: "18 Unicorno",
		detail: "Unicorno · mag 4,48",
		proper: false
	},
	{
		x: .03056,
		y: -.40832,
		z: .91233,
		mag: 3.24,
		bv: .225,
		name: "α Pittore",
		detail: "Pittore · mag 3,24",
		proper: false
	},
	{
		x: -.44922,
		y: -.25029,
		z: .85765,
		mag: 3.5,
		bv: -.116,
		name: "κ Cane Maggiore",
		detail: "Cane Maggiore · mag 3,50",
		proper: false
	},
	{
		x: -.10926,
		y: -.37077,
		z: .92228,
		mag: 4.41,
		bv: .899,
		name: "A Carena",
		detail: "Carena · mag 4,41",
		proper: false
	},
	{
		x: -.22602,
		y: -.33546,
		z: .91454,
		mag: 5.14,
		bv: .46,
		name: "HD 50223",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: -.15964,
		y: -.35613,
		z: .9207,
		mag: 2.94,
		bv: 1.207,
		name: "τ Poppa",
		detail: "Poppa · mag 2,94",
		proper: false
	},
	{
		x: -.94879,
		y: .30187,
		z: -.09315,
		mag: 4.99,
		bv: 1.256,
		name: "ψ7 Auriga",
		detail: "Auriga · mag 4,99",
		proper: false
	},
	{
		x: -.42018,
		y: -.25921,
		z: .86963,
		mag: 4.99,
		bv: 1.379,
		name: "HIP 32855",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: -.76766,
		y: .42077,
		z: -.48338,
		mag: 5.14,
		bv: -.152,
		name: "42 Giraffa",
		detail: "Giraffa · mag 5,14",
		proper: false
	},
	{
		x: -.95877,
		y: .16946,
		z: .22814,
		mag: 5.28,
		bv: -.02,
		name: "d Gemelli",
		detail: "Gemelli · mag 5,28",
		proper: false
	},
	{
		x: -.9652,
		y: .25908,
		z: .03548,
		mag: 3.6,
		bv: .102,
		name: "θ Gemelli",
		detail: "Gemelli · mag 3,60",
		proper: false
	},
	{
		x: -.84238,
		y: .39593,
		z: -.36555,
		mag: 5.34,
		bv: .675,
		name: "14 Lince",
		detail: "Lince · mag 5,34",
		proper: false
	},
	{
		x: -.61813,
		y: -.14994,
		z: .77164,
		mag: 4.82,
		bv: -.212,
		name: "15 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,82",
		proper: false
	},
	{
		x: -.75277,
		y: .42855,
		z: -.49968,
		mag: 5.11,
		bv: -.114,
		name: "43 Giraffa",
		detail: "Giraffa · mag 5,11",
		proper: false
	},
	{
		x: -.56473,
		y: -.17726,
		z: .80602,
		mag: 3.89,
		bv: 1.74,
		name: "Udra",
		detail: "ο1 Cane Maggiore · mag 3,89",
		proper: true
	},
	{
		x: -.71697,
		y: -.08465,
		z: .69194,
		mag: 4.08,
		bv: 1.418,
		name: "θ Cane Maggiore",
		detail: "Cane Maggiore · mag 4,08",
		proper: false
	},
	{
		x: -.92406,
		y: .11607,
		z: .3642,
		mag: 4.73,
		bv: .321,
		name: "e Gemelli",
		detail: "Gemelli · mag 4,73",
		proper: false
	},
	{
		x: -.61707,
		y: -.14171,
		z: .77404,
		mag: 4.66,
		bv: .374,
		name: "π Cane Maggiore",
		detail: "Cane Maggiore · mag 4,66",
		proper: false
	},
	{
		x: -.57987,
		y: -.1622,
		z: .7984,
		mag: 5.29,
		bv: -.163,
		name: "HIP 33316",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.69175,
		y: -.09304,
		z: .71611,
		mag: 5,
		bv: 1.182,
		name: "Isis",
		detail: "μ Cane Maggiore · mag 5,00",
		proper: true
	},
	{
		x: -.65549,
		y: -.11628,
		z: .7462,
		mag: 4.36,
		bv: -.063,
		name: "ι Cane Maggiore",
		detail: "Cane Maggiore · mag 4,36",
		proper: false
	},
	{
		x: -.18654,
		y: -.33031,
		z: .92526,
		mag: 4.94,
		bv: 1.668,
		name: "HIP 33357",
		detail: "mag 4,94",
		proper: false
	},
	{
		x: -.84825,
		y: .40034,
		z: -.34669,
		mag: 4.35,
		bv: .85,
		name: "15 Lince",
		detail: "Lince · mag 4,35",
		proper: false
	},
	{
		x: -.93026,
		y: .3399,
		z: -.13814,
		mag: 4.9,
		bv: .027,
		name: "16 Lince",
		detail: "Lince · mag 4,90",
		proper: false
	},
	{
		x: -.417,
		y: -.23328,
		z: .87846,
		mag: 5.07,
		bv: -.154,
		name: "t Poppa",
		detail: "Poppa · mag 5,07",
		proper: false
	},
	{
		x: -.49276,
		y: -.19645,
		z: .8477,
		mag: 1.5,
		bv: -.211,
		name: "Adhara",
		detail: "ε Cane Maggiore · mag 1,50",
		proper: true
	},
	{
		x: .13642,
		y: -.41026,
		z: .90171,
		mag: 5.18,
		bv: 1.396,
		name: "HD 53501",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: -.65828,
		y: .45181,
		z: -.60211,
		mag: 4.55,
		bv: 1.365,
		name: "HIP 33694",
		detail: "mag 4,55",
		proper: false
	},
	{
		x: -.13867,
		y: -.33356,
		z: .93248,
		mag: 5.14,
		bv: 1.652,
		name: "23 Carena",
		detail: "Carena · mag 5,14",
		proper: false
	},
	{
		x: -.50429,
		y: -.17835,
		z: .84491,
		mag: 3.49,
		bv: 1.729,
		name: "Unurgunite",
		detail: "σ Cane Maggiore · mag 3,49",
		proper: true
	},
	{
		x: -.77472,
		y: -.0049,
		z: .63229,
		mag: 5.22,
		bv: 1.687,
		name: "HIP 33878",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.95222,
		y: .22589,
		z: .20556,
		mag: 5.2,
		bv: .953,
		name: "ω Gemelli",
		detail: "Gemelli · mag 5,20",
		proper: false
	},
	{
		x: -.78783,
		y: .01071,
		z: .61579,
		mag: 4.99,
		bv: -.195,
		name: "19 Unicorno",
		detail: "Unicorno · mag 4,99",
		proper: false
	},
	{
		x: -.5598,
		y: -.14311,
		z: .81618,
		mag: 3.02,
		bv: -.077,
		name: "Al Zara",
		detail: "ο2 Cane Maggiore · mag 3,02",
		proper: true
	},
	{
		x: -.90184,
		y: .13311,
		z: .41106,
		mag: 5.14,
		bv: 1.391,
		name: "HIP 34033",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: -.66389,
		y: -.07683,
		z: .74387,
		mag: 4.11,
		bv: -.112,
		name: "Muliphein",
		detail: "γ Cane Maggiore · mag 4,11",
		proper: true
	},
	{
		x: -.16625,
		y: -.31582,
		z: .93414,
		mag: 4.92,
		bv: .14,
		name: "H Poppa",
		detail: "Poppa · mag 4,92",
		proper: false
	},
	{
		x: -.28354,
		y: -.27093,
		z: .91989,
		mag: 5.2,
		bv: .198,
		name: "C Poppa",
		detail: "Poppa · mag 5,20",
		proper: false
	},
	{
		x: -.94178,
		y: .20626,
		z: .26555,
		mag: 4.01,
		bv: .899,
		name: "Mekbuda",
		detail: "ζ Gemelli · mag 4,01",
		proper: true
	},
	{
		x: -.04722,
		y: -.35395,
		z: .93407,
		mag: 5.14,
		bv: -.032,
		name: "HD 54118",
		detail: "Carena · mag 5,14",
		proper: false
	},
	{
		x: -.51828,
		y: -.14378,
		z: .84304,
		mag: 1.83,
		bv: .671,
		name: "Wezen",
		detail: "δ Cane Maggiore · mag 1,83",
		proper: true
	},
	{
		x: .18294,
		y: -.40741,
		z: .89474,
		mag: 3.78,
		bv: 1.006,
		name: "γ2 Pesce volante",
		detail: "Pesce volante · mag 3,78",
		proper: false
	},
	{
		x: -.32106,
		y: -.23899,
		z: .91641,
		mag: 4.83,
		bv: -.179,
		name: "A Poppa",
		detail: "Poppa · mag 4,83",
		proper: false
	},
	{
		x: -.77822,
		y: .039,
		z: .62678,
		mag: 4.91,
		bv: 1.02,
		name: "20 Unicorno",
		detail: "Unicorno · mag 4,91",
		proper: false
	},
	{
		x: -.17091,
		y: -.29447,
		z: .94025,
		mag: 5.12,
		bv: 1.251,
		name: "HD 55526",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: -.94771,
		y: .29569,
		z: .12004,
		mag: 4.41,
		bv: 1.261,
		name: "τ Gemelli",
		detail: "Gemelli · mag 4,41",
		proper: false
	},
	{
		x: -.93647,
		y: .3496,
		z: -.02831,
		mag: 4.91,
		bv: 1.451,
		name: "63 Auriga",
		detail: "Auriga · mag 4,91",
		proper: false
	},
	{
		x: -.80973,
		y: .07529,
		z: .58195,
		mag: 4.15,
		bv: -.005,
		name: "δ Unicorno",
		detail: "Unicorno · mag 4,15",
		proper: false
	},
	{
		x: -.30428,
		y: -.23472,
		z: .92321,
		mag: 5.3,
		bv: .072,
		name: "E Poppa",
		detail: "Poppa · mag 5,30",
		proper: false
	},
	{
		x: -.20445,
		y: -.27606,
		z: .93914,
		mag: 4.49,
		bv: .324,
		name: "I Poppa",
		detail: "Poppa · mag 4,49",
		proper: false
	},
	{
		x: -.22913,
		y: -.26392,
		z: .93694,
		mag: 4.87,
		bv: -.003,
		name: "L1 Poppa",
		detail: "Poppa · mag 4,87",
		proper: false
	},
	{
		x: -.91437,
		y: .20859,
		z: .34701,
		mag: 5.07,
		bv: 1.653,
		name: "51 Gemelli",
		detail: "Gemelli · mag 5,07",
		proper: false
	},
	{
		x: -.23748,
		y: -.25942,
		z: .93611,
		mag: 4.42,
		bv: 1.331,
		name: "L2 Poppa",
		detail: "Poppa · mag 4,42",
		proper: false
	},
	{
		x: -.51152,
		y: -.12315,
		z: .8504,
		mag: 4.42,
		bv: -.17,
		name: "27 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,42",
		proper: false
	},
	{
		x: -.17802,
		y: -.28045,
		z: .94322,
		mag: 4.75,
		bv: -.091,
		name: "HIP 35020",
		detail: "mag 4,75",
		proper: false
	},
	{
		x: -.50497,
		y: -.12451,
		z: .85411,
		mag: 4.01,
		bv: -.15,
		name: "ω Cane Maggiore",
		detail: "Cane Maggiore · mag 4,01",
		proper: false
	},
	{
		x: -.82595,
		y: .4414,
		z: -.35068,
		mag: 5.2,
		bv: 1.081,
		name: "18 Lince",
		detail: "Lince · mag 5,20",
		proper: false
	},
	{
		x: -.48717,
		y: -.1271,
		z: .86401,
		mag: 4.66,
		bv: 1.589,
		name: "HIP 35205",
		detail: "mag 4,66",
		proper: false
	},
	{
		x: -.54967,
		y: -.09087,
		z: .83042,
		mag: 4.83,
		bv: 1.601,
		name: "145 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,83",
		proper: false
	},
	{
		x: -.35933,
		y: -.19283,
		z: .91307,
		mag: 5.03,
		bv: -.161,
		name: "HIP 35226",
		detail: "mag 5,03",
		proper: false
	},
	{
		x: .14569,
		y: -.38572,
		z: .91104,
		mag: 3.97,
		bv: .76,
		name: "δ Pesce volante",
		detail: "Pesce volante · mag 3,97",
		proper: false
	},
	{
		x: -.35128,
		y: -.19559,
		z: .91562,
		mag: 2.71,
		bv: 1.616,
		name: "π Poppa",
		detail: "Poppa · mag 2,71",
		proper: false
	},
	{
		x: -.90932,
		y: .22882,
		z: .34754,
		mag: 3.58,
		bv: .106,
		name: "λ Gemelli",
		detail: "Gemelli · mag 3,58",
		proper: false
	},
	{
		x: -.35541,
		y: -.1893,
		z: .91534,
		mag: 4.65,
		bv: -.099,
		name: "v1 Poppa",
		detail: "Poppa · mag 4,65",
		proper: false
	},
	{
		x: -.89039,
		y: .41477,
		z: -.18752,
		mag: 5,
		bv: .087,
		name: "HIP 35384",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: -.31724,
		y: -.20685,
		z: .92551,
		mag: 5.24,
		bv: .026,
		name: "F Poppa",
		detail: "Poppa · mag 5,24",
		proper: false
	},
	{
		x: -.35488,
		y: -.18834,
		z: .91574,
		mag: 5.11,
		bv: -.17,
		name: "v2 Poppa",
		detail: "Poppa · mag 5,11",
		proper: false
	},
	{
		x: -.53018,
		y: -.09355,
		z: .84271,
		mag: 4.88,
		bv: -.16,
		name: "29 Cane Maggiore",
		detail: "Cane Maggiore · mag 4,88",
		proper: false
	},
	{
		x: -.52477,
		y: -.09659,
		z: .84574,
		mag: 4.37,
		bv: -.132,
		name: "τ Cane Maggiore",
		detail: "Cane Maggiore · mag 4,37",
		proper: false
	},
	{
		x: -.50222,
		y: -.10909,
		z: .85783,
		mag: 5.29,
		bv: .956,
		name: "HIP 35427",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: -.92462,
		y: .27371,
		z: .26487,
		mag: 3.5,
		bv: .374,
		name: "Wasat",
		detail: "δ Gemelli · mag 3,50",
		proper: true
	},
	{
		x: -.91766,
		y: .26996,
		z: .29158,
		mag: 5.09,
		bv: 1.528,
		name: "56 Gemelli",
		detail: "Gemelli · mag 5,09",
		proper: false
	},
	{
		x: -.92955,
		y: .36783,
		z: .02543,
		mag: 5.12,
		bv: 1.082,
		name: "65 Auriga",
		detail: "Auriga · mag 5,12",
		proper: false
	},
	{
		x: -.59732,
		y: -.03589,
		z: .8012,
		mag: 4.94,
		bv: -.039,
		name: "HIP 35727",
		detail: "mag 4,94",
		proper: false
	},
	{
		x: -.92652,
		y: .30541,
		z: .21972,
		mag: 5.04,
		bv: .902,
		name: "A Gemelli",
		detail: "Gemelli · mag 5,04",
		proper: false
	},
	{
		x: -.457,
		y: -.11295,
		z: .88227,
		mag: 2.45,
		bv: -.083,
		name: "Aludra",
		detail: "η Cane Maggiore · mag 2,45",
		proper: true
	},
	{
		x: -.9187,
		y: .39317,
		z: -.03742,
		mag: 5.23,
		bv: 1.249,
		name: "66 Auriga",
		detail: "Auriga · mag 5,23",
		proper: false
	},
	{
		x: -.62813,
		y: -.00374,
		z: .7781,
		mag: 5.18,
		bv: -.035,
		name: "HD 58343",
		detail: "Cane Maggiore · mag 5,18",
		proper: false
	},
	{
		x: -.42023,
		y: -.13086,
		z: .89793,
		mag: 5.35,
		bv: 1.071,
		name: "HIP 35957",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: -.86074,
		y: .20413,
		z: .46633,
		mag: 4.99,
		bv: .991,
		name: "ε Cane Minore",
		detail: "Cane Minore · mag 4,99",
		proper: false
	},
	{
		x: -.92712,
		y: .33,
		z: .17763,
		mag: 3.78,
		bv: 1.024,
		name: "Propus",
		detail: "ι Gemelli · mag 3,78",
		proper: true
	},
	{
		x: -.12209,
		y: -.26947,
		z: .95524,
		mag: 5.09,
		bv: 1.038,
		name: "HIP 36114",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: -.88331,
		y: .43437,
		z: -.17628,
		mag: 4.61,
		bv: -.001,
		name: "21 Lince",
		detail: "Lince · mag 4,61",
		proper: false
	},
	{
		x: -.85217,
		y: .20242,
		z: .48253,
		mag: 2.89,
		bv: -.097,
		name: "Gomeisa",
		detail: "β Cane Minore · mag 2,89",
		proper: true
	},
	{
		x: -.91193,
		y: .29737,
		z: .28275,
		mag: 5.2,
		bv: .455,
		name: "63 Gemelli",
		detail: "Gemelli · mag 5,20",
		proper: false
	},
	{
		x: -.84192,
		y: .19559,
		z: .50291,
		mag: 5.22,
		bv: .221,
		name: "η Cane Minore",
		detail: "Cane Minore · mag 5,22",
		proper: false
	},
	{
		x: -.85452,
		y: .21103,
		z: .47461,
		mag: 4.33,
		bv: 1.425,
		name: "γ Cane Minore",
		detail: "Cane Minore · mag 4,33",
		proper: false
	},
	{
		x: -.9242,
		y: .36398,
		z: .11567,
		mag: 4.16,
		bv: .32,
		name: "ρ Gemelli",
		detail: "Gemelli · mag 4,16",
		proper: false
	},
	{
		x: -.24109,
		y: -.20641,
		z: .9483,
		mag: 3.25,
		bv: 1.509,
		name: "σ Poppa",
		detail: "Poppa · mag 3,25",
		proper: false
	},
	{
		x: -.92219,
		y: .34413,
		z: .17646,
		mag: 5.07,
		bv: .12,
		name: "64 Gemelli",
		detail: "Gemelli · mag 5,07",
		proper: false
	},
	{
		x: -.86974,
		y: .23988,
		z: .43129,
		mag: 4.55,
		bv: 1.276,
		name: "6 Cane Minore",
		detail: "Cane Minore · mag 4,55",
		proper: false
	},
	{
		x: -.92129,
		y: .34455,
		z: .1803,
		mag: 5.01,
		bv: 1.117,
		name: "b Gemelli",
		detail: "Gemelli · mag 5,01",
		proper: false
	},
	{
		x: -.53432,
		y: -.04168,
		z: .84425,
		mag: 4.85,
		bv: .243,
		name: "HIP 36431",
		detail: "mag 4,85",
		proper: false
	},
	{
		x: -.87756,
		y: .44391,
		z: -.18119,
		mag: 5.35,
		bv: .47,
		name: "22 Lince",
		detail: "Lince · mag 5,35",
		proper: false
	},
	{
		x: -.42401,
		y: -.10446,
		z: .89961,
		mag: 4.65,
		bv: .904,
		name: "HIP 36514",
		detail: "mag 4,65",
		proper: false
	},
	{
		x: -.58315,
		y: .47222,
		z: -.66102,
		mag: 4.92,
		bv: 1.633,
		name: "HD 55966",
		detail: "Giraffa · mag 4,92",
		proper: false
	},
	{
		x: -.79812,
		y: .17222,
		z: .57736,
		mag: 5.24,
		bv: .23,
		name: "δ1 Cane Minore",
		detail: "Cane Minore · mag 5,24",
		proper: false
	},
	{
		x: -.88219,
		y: .28102,
		z: .37785,
		mag: 5.27,
		bv: .055,
		name: "68 Gemelli",
		detail: "Gemelli · mag 5,27",
		proper: false
	},
	{
		x: -.63321,
		y: .04399,
		z: .77273,
		mag: 4.82,
		bv: 1.362,
		name: "HD 60414",
		detail: "Poppa · mag 4,82",
		proper: false
	},
	{
		x: -.53721,
		y: -.02076,
		z: .84319,
		mag: 4.44,
		bv: .521,
		name: "HD 60532",
		detail: "mag 4,44",
		proper: false
	},
	{
		x: -.52141,
		y: -.02981,
		z: .85278,
		mag: 5.06,
		bv: .468,
		name: "n Poppa",
		detail: "Poppa · mag 5,06",
		proper: false
	},
	{
		x: -.91624,
		y: .38235,
		z: .11966,
		mag: 1.58,
		bv: .034,
		name: "Castore",
		detail: "α Gemelli · mag 1,58",
		proper: true
	},
	{
		x: -.9153,
		y: .37925,
		z: .13565,
		mag: 5.34,
		bv: 1.01,
		name: "HIP 36896",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.45352,
		y: -.06743,
		z: .88869,
		mag: 4.65,
		bv: -.111,
		name: "p Poppa",
		detail: "Poppa · mag 4,65",
		proper: false
	},
	{
		x: -.08813,
		y: -.2581,
		z: .96209,
		mag: 4.93,
		bv: 1.373,
		name: "Q Carena",
		detail: "Carena · mag 4,93",
		proper: false
	},
	{
		x: -.9107,
		y: .35937,
		z: .20366,
		mag: 4.06,
		bv: 1.54,
		name: "υ Gemelli",
		detail: "Gemelli · mag 4,06",
		proper: false
	},
	{
		x: -.73666,
		y: .14368,
		z: .66083,
		mag: 5.14,
		bv: .442,
		name: "25 Unicorno",
		detail: "Unicorno · mag 5,14",
		proper: false
	},
	{
		x: -.35629,
		y: -.11615,
		z: .92713,
		mag: 4.53,
		bv: -.081,
		name: "f Poppa",
		detail: "Poppa · mag 4,53",
		proper: false
	},
	{
		x: -.48986,
		y: -.03204,
		z: .87121,
		mag: 4.69,
		bv: -.1,
		name: "m Poppa",
		detail: "Poppa · mag 4,69",
		proper: false
	},
	{
		x: -.46957,
		y: -.04252,
		z: .88187,
		mag: 3.8,
		bv: -.159,
		name: "Markab",
		detail: "κ1 Poppa · mag 3,80",
		proper: true
	},
	{
		x: -.90851,
		y: .41031,
		z: .07905,
		mag: 4.89,
		bv: .413,
		name: "Jishui",
		detail: "ο Gemelli · mag 4,89",
		proper: true
	},
	{
		x: -.81055,
		y: .22528,
		z: .54061,
		mag: .4,
		bv: .432,
		name: "Procione",
		detail: "α Cane Minore · mag 0,40",
		proper: true
	},
	{
		x: -.30382,
		y: -.13741,
		z: .94277,
		mag: 4.84,
		bv: -.189,
		name: "d1 Poppa",
		detail: "Poppa · mag 4,84",
		proper: false
	},
	{
		x: -.87995,
		y: .31488,
		z: .35573,
		mag: 5.04,
		bv: 1.616,
		name: "f Gemelli",
		detail: "Gemelli · mag 5,04",
		proper: false
	},
	{
		x: -.61324,
		y: .06194,
		z: .78746,
		mag: 4.98,
		bv: 1.543,
		name: "140 Poppa",
		detail: "Poppa · mag 4,98",
		proper: false
	},
	{
		x: -.52308,
		y: .4652,
		z: -.71413,
		mag: 5.05,
		bv: 1.604,
		name: "HD 51802",
		detail: "Cefeo · mag 5,05",
		proper: false
	},
	{
		x: -.67522,
		y: .11359,
		z: .72882,
		mag: 3.94,
		bv: 1.022,
		name: "α Unicorno",
		detail: "Unicorno · mag 3,94",
		proper: false
	},
	{
		x: .233,
		y: -.37711,
		z: .89638,
		mag: 3.93,
		bv: 1.033,
		name: "ζ Pesce volante",
		detail: "Pesce volante · mag 3,93",
		proper: false
	},
	{
		x: -.1947,
		y: -.18356,
		z: .96353,
		mag: 5.04,
		bv: .765,
		name: "HD 62644",
		detail: "mag 5,04",
		proper: false
	},
	{
		x: -.80966,
		y: .49279,
		z: -.31876,
		mag: 4.93,
		bv: .104,
		name: "24 Lince",
		detail: "Lince · mag 4,93",
		proper: false
	},
	{
		x: -.90116,
		y: .39514,
		z: .17826,
		mag: 4.23,
		bv: 1.118,
		name: "σ Gemelli",
		detail: "Gemelli · mag 4,23",
		proper: false
	},
	{
		x: -.43989,
		y: -.04052,
		z: .89714,
		mag: 4.63,
		bv: 1.632,
		name: "1 Poppa",
		detail: "Poppa · mag 4,63",
		proper: false
	},
	{
		x: -.25833,
		y: -.14676,
		z: .95484,
		mag: 5.12,
		bv: 1.104,
		name: "HIP 37664",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: -.43195,
		y: -.04435,
		z: .90081,
		mag: 3.94,
		bv: .16,
		name: "l Poppa",
		detail: "Poppa · mag 3,94",
		proper: false
	},
	{
		x: -.85762,
		y: .48056,
		z: -.18316,
		mag: 5.31,
		bv: -.001,
		name: "HIP 37701",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: -.89548,
		y: .38092,
		z: .23023,
		mag: 5.3,
		bv: 1.535,
		name: "c Gemelli",
		detail: "Gemelli · mag 5,30",
		proper: false
	},
	{
		x: -.89212,
		y: .37416,
		z: .25325,
		mag: 3.57,
		bv: .932,
		name: "κ Gemelli",
		detail: "Gemelli · mag 3,57",
		proper: false
	},
	{
		x: -.30038,
		y: -.11729,
		z: .94658,
		mag: 3.62,
		bv: 1.706,
		name: "c Poppa",
		detail: "Poppa · mag 3,62",
		proper: false
	},
	{
		x: -.89689,
		y: .39725,
		z: .19439,
		mag: 1.16,
		bv: .991,
		name: "Polluce",
		detail: "β Gemelli · mag 1,16",
		proper: true
	},
	{
		x: -.61129,
		y: .08829,
		z: .78647,
		mag: 5.03,
		bv: .342,
		name: "4 Poppa",
		detail: "Poppa · mag 5,03",
		proper: false
	},
	{
		x: -.87139,
		y: .34423,
		z: .34954,
		mag: 4.89,
		bv: 1.425,
		name: "g Gemelli",
		detail: "Gemelli · mag 4,89",
		proper: false
	},
	{
		x: -.83374,
		y: .29239,
		z: .46839,
		mag: 5.25,
		bv: .018,
		name: "11 Cane Minore",
		detail: "Cane Minore · mag 5,25",
		proper: false
	},
	{
		x: -.89423,
		y: .44613,
		z: .03626,
		mag: 5.15,
		bv: 1.588,
		name: "HD 62647",
		detail: "Lince · mag 5,15",
		proper: false
	},
	{
		x: -.28909,
		y: -.11551,
		z: .95031,
		mag: 5.07,
		bv: -.112,
		name: "HIP 38010",
		detail: "mag 5,07",
		proper: false
	},
	{
		x: -.89605,
		y: .43104,
		z: .10627,
		mag: 5.14,
		bv: 1.635,
		name: "π Gemelli",
		detail: "Gemelli · mag 5,14",
		proper: false
	},
	{
		x: -.16656,
		y: -.18321,
		z: .96886,
		mag: 5.22,
		bv: -.151,
		name: "HIP 38020",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.46567,
		y: -.00363,
		z: .88495,
		mag: 4.4,
		bv: -.07,
		name: "ο Poppa",
		detail: "Poppa · mag 4,40",
		proper: false
	},
	{
		x: -.15827,
		y: -.18498,
		z: .96991,
		mag: 4.69,
		bv: 1.039,
		name: "Q Poppa",
		detail: "Poppa · mag 4,69",
		proper: false
	},
	{
		x: -.47761,
		y: .00863,
		z: .87853,
		mag: 5.32,
		bv: .751,
		name: "188 Poppa",
		detail: "Poppa · mag 5,32",
		proper: false
	},
	{
		x: -.16787,
		y: -.17683,
		z: .96982,
		mag: 4.1,
		bv: -.16,
		name: "P Poppa",
		detail: "Poppa · mag 4,10",
		proper: false
	},
	{
		x: -.47782,
		y: .01,
		z: .8784,
		mag: 3.34,
		bv: 1.218,
		name: "Azmidi",
		detail: "ξ Poppa · mag 3,34",
		proper: true
	},
	{
		x: -.57307,
		y: .07868,
		z: .81572,
		mag: 5.17,
		bv: 1.282,
		name: "6 Poppa",
		detail: "Poppa · mag 5,17",
		proper: false
	},
	{
		x: -.7606,
		y: .24528,
		z: .6011,
		mag: 5.12,
		bv: -.116,
		name: "ζ Cane Minore",
		detail: "Cane Minore · mag 5,12",
		proper: false
	},
	{
		x: -.60784,
		y: .11529,
		z: .78564,
		mag: 5.16,
		bv: .6,
		name: "9 Poppa",
		detail: "Poppa · mag 5,16",
		proper: false
	},
	{
		x: -.25115,
		y: -.11942,
		z: .96055,
		mag: 3.71,
		bv: 1.012,
		name: "a Poppa",
		detail: "Poppa · mag 3,71",
		proper: false
	},
	{
		x: -.33691,
		y: -.06771,
		z: .9391,
		mag: 5.01,
		bv: .47,
		name: "212 Poppa",
		detail: "Poppa · mag 5,01",
		proper: false
	},
	{
		x: -.27584,
		y: -.10323,
		z: .95564,
		mag: 4.49,
		bv: -.188,
		name: "b Poppa",
		detail: "Poppa · mag 4,49",
		proper: false
	},
	{
		x: -.11309,
		y: -.19412,
		z: .97444,
		mag: 4.63,
		bv: -.228,
		name: "HIP 38500",
		detail: "mag 4,63",
		proper: false
	},
	{
		x: -.13591,
		y: -.18092,
		z: .97406,
		mag: 4.22,
		bv: -.13,
		name: "J Poppa",
		detail: "Poppa · mag 4,22",
		proper: false
	},
	{
		x: -.88077,
		y: .4179,
		z: .22271,
		mag: 4.97,
		bv: .098,
		name: "φ Gemelli",
		detail: "Gemelli · mag 4,97",
		proper: false
	},
	{
		x: -.05663,
		y: -.21338,
		z: .97533,
		mag: 3.46,
		bv: -.177,
		name: "χ Carena",
		detail: "Carena · mag 3,46",
		proper: false
	},
	{
		x: -.48956,
		y: .05361,
		z: .87032,
		mag: 4.2,
		bv: .718,
		name: "j Poppa",
		detail: "Poppa · mag 4,20",
		proper: false
	},
	{
		x: -.19069,
		y: -.13624,
		z: .97215,
		mag: 5.08,
		bv: -.166,
		name: "N Poppa",
		detail: "Poppa · mag 5,08",
		proper: false
	},
	{
		x: -.38904,
		y: -.01139,
		z: .92115,
		mag: 4.76,
		bv: .151,
		name: "χ Poppa",
		detail: "Poppa · mag 4,76",
		proper: false
	},
	{
		x: -.16783,
		y: -.14763,
		z: .9747,
		mag: 5.14,
		bv: 1.263,
		name: "O Poppa",
		detail: "Poppa · mag 5,14",
		proper: false
	},
	{
		x: -.1118,
		y: -.17844,
		z: .97758,
		mag: 4.47,
		bv: -.18,
		name: "HD 65818",
		detail: "Poppa · mag 4,47",
		proper: false
	},
	{
		x: -.75069,
		y: .27365,
		z: .60131,
		mag: 5.3,
		bv: .933,
		name: "14 Cane Minore",
		detail: "Cane Minore · mag 5,30",
		proper: false
	},
	{
		x: -.47977,
		y: .05736,
		z: .87552,
		mag: 5.09,
		bv: 1.111,
		name: "12 Poppa",
		detail: "Poppa · mag 5,09",
		proper: false
	},
	{
		x: -.25857,
		y: -.08732,
		z: .96204,
		mag: 5.22,
		bv: .4,
		name: "HIP 39061",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: .06308,
		y: -.26908,
		z: .96105,
		mag: 5.19,
		bv: 1.758,
		name: "HD 66342",
		detail: "Carena · mag 5,19",
		proper: false
	},
	{
		x: -.69698,
		y: .23151,
		z: .67869,
		mag: 4.93,
		bv: 1.205,
		name: "27 Unicorno",
		detail: "Unicorno · mag 4,93",
		proper: false
	},
	{
		x: -.53927,
		y: .10449,
		z: .83563,
		mag: 4.61,
		bv: .087,
		name: "HIP 39095",
		detail: "mag 4,61",
		proper: false
	},
	{
		x: .10907,
		y: -.29101,
		z: .95048,
		mag: 4.81,
		bv: -.173,
		name: "D Carena",
		detail: "Carena · mag 4,81",
		proper: false
	},
	{
		x: -.71441,
		y: .25567,
		z: .65134,
		mag: 4.69,
		bv: 1.475,
		name: "28 Unicorno",
		detail: "Unicorno · mag 4,69",
		proper: false
	},
	{
		x: -.74327,
		y: .28904,
		z: .60333,
		mag: 4.39,
		bv: 1.252,
		name: "G Cane Minore",
		detail: "Cane Minore · mag 4,39",
		proper: false
	},
	{
		x: -.86384,
		y: .45618,
		z: .21375,
		mag: 4.94,
		bv: 1.13,
		name: "χ Gemelli",
		detail: "Gemelli · mag 4,94",
		proper: false
	},
	{
		x: -.24151,
		y: -.08204,
		z: .96692,
		mag: 2.21,
		bv: -.269,
		name: "Naos",
		detail: "ζ Poppa · mag 2,21",
		proper: true
	},
	{
		x: -.34471,
		y: -.01209,
		z: .93863,
		mag: 5.25,
		bv: 1.882,
		name: "HD 66888",
		detail: "Poppa · mag 5,25",
		proper: false
	},
	{
		x: -.80915,
		y: .37722,
		z: .45053,
		mag: 5.14,
		bv: .018,
		name: "8 Cancro",
		detail: "Cancro · mag 5,14",
		proper: false
	},
	{
		x: -.15922,
		y: -.12197,
		z: .97968,
		mag: 5.04,
		bv: 1.488,
		name: "HIP 39690",
		detail: "mag 5,04",
		proper: false
	},
	{
		x: -.49791,
		y: .11074,
		z: .86013,
		mag: 5.33,
		bv: .1,
		name: "HIP 39734",
		detail: "mag 5,33",
		proper: false
	},
	{
		x: -.45035,
		y: .07675,
		z: .88955,
		mag: 2.83,
		bv: .458,
		name: "Tureis",
		detail: "ρ Poppa · mag 2,83",
		proper: true
	},
	{
		x: -.8402,
		y: .43828,
		z: .31933,
		mag: 5.3,
		bv: .642,
		name: "μ Cancro",
		detail: "Cancro · mag 5,30",
		proper: false
	},
	{
		x: .19101,
		y: -.31829,
		z: .92855,
		mag: 4.35,
		bv: -.113,
		name: "ε Pesce volante",
		detail: "Pesce volante · mag 4,35",
		proper: false
	},
	{
		x: -.82099,
		y: .53957,
		z: -.18665,
		mag: 4.78,
		bv: .048,
		name: "27 Lince",
		detail: "Lince · mag 4,78",
		proper: false
	},
	{
		x: -.68417,
		y: .26986,
		z: .67756,
		mag: 4.36,
		bv: .97,
		name: "ζ Unicorno",
		detail: "Unicorno · mag 4,36",
		proper: false
	},
	{
		x: .08377,
		y: -.25807,
		z: .96249,
		mag: 4.74,
		bv: .437,
		name: "B Carena",
		detail: "Carena · mag 4,74",
		proper: false
	},
	{
		x: -.51023,
		y: .12877,
		z: .85034,
		mag: 4.4,
		bv: -.16,
		name: "16 Poppa",
		detail: "Poppa · mag 4,40",
		proper: false
	},
	{
		x: -.12416,
		y: -.13374,
		z: .98321,
		mag: 1.75,
		bv: -.145,
		name: "Regor",
		detail: "γ2 Vela · mag 1,75",
		proper: true
	},
	{
		x: -.17144,
		y: -.10377,
		z: .97971,
		mag: 5.2,
		bv: -.173,
		name: "HIP 39961",
		detail: "mag 5,20",
		proper: false
	},
	{
		x: -.11498,
		y: -.13881,
		z: .98362,
		mag: 5.23,
		bv: -.199,
		name: "HD 68324",
		detail: "Vela · mag 5,23",
		proper: false
	},
	{
		x: -.57821,
		y: .19408,
		z: .79247,
		mag: 4.72,
		bv: .939,
		name: "19 Poppa",
		detail: "Poppa · mag 4,72",
		proper: false
	},
	{
		x: -.23384,
		y: -.05652,
		z: .97063,
		mag: 4.44,
		bv: 1.59,
		name: "h1 Poppa",
		detail: "Poppa · mag 4,44",
		proper: false
	},
	{
		x: -.18503,
		y: -.08826,
		z: .97876,
		mag: 4.73,
		bv: .164,
		name: "HIP 40096",
		detail: "mag 4,73",
		proper: false
	},
	{
		x: -.81579,
		y: .431,
		z: .38565,
		mag: 4.67,
		bv: .531,
		name: "Tegmine",
		detail: "ζ1 Cancro · mag 4,67",
		proper: true
	},
	{
		x: -.70722,
		y: .53771,
		z: -.45903,
		mag: 5.34,
		bv: 1.037,
		name: "55 Giraffa",
		detail: "Giraffa · mag 5,34",
		proper: false
	},
	{
		x: -.54156,
		y: .17549,
		z: .82214,
		mag: 4.99,
		bv: 1.066,
		name: "20 Poppa",
		detail: "Poppa · mag 4,99",
		proper: false
	},
	{
		x: -.2827,
		y: -.01474,
		z: .95909,
		mag: 4.78,
		bv: -.11,
		name: "r Poppa",
		detail: "Poppa · mag 4,78",
		proper: false
	},
	{
		x: -.12297,
		y: -.12043,
		z: .98508,
		mag: 5.14,
		bv: -.139,
		name: "HD 69144",
		detail: "Vela · mag 5,14",
		proper: false
	},
	{
		x: -.27589,
		y: -.01741,
		z: .96103,
		mag: 5.09,
		bv: -.184,
		name: "HD 69081",
		detail: "Poppa · mag 5,09",
		proper: false
	},
	{
		x: -.21868,
		y: -.05598,
		z: .97419,
		mag: 4.42,
		bv: 1.17,
		name: "h2 Poppa",
		detail: "Poppa · mag 4,42",
		proper: false
	},
	{
		x: .11428,
		y: -.26105,
		z: .95854,
		mag: 5.16,
		bv: .086,
		name: "C Carena",
		detail: "Carena · mag 5,16",
		proper: false
	},
	{
		x: -.76058,
		y: .39149,
		z: .51792,
		mag: 3.53,
		bv: 1.481,
		name: "Tarf",
		detail: "β Cancro · mag 3,53",
		proper: true
	},
	{
		x: .15659,
		y: -.27932,
		z: .94734,
		mag: 5.06,
		bv: 1.129,
		name: "HIP 40680",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: .31569,
		y: -.36944,
		z: .87399,
		mag: 4.05,
		bv: .413,
		name: "α Camaleonte",
		detail: "Camaleonte · mag 4,05",
		proper: false
	},
	{
		x: -.26258,
		y: -.00735,
		z: .96488,
		mag: 4.44,
		bv: .222,
		name: "q Poppa",
		detail: "Poppa · mag 4,44",
		proper: false
	},
	{
		x: .24186,
		y: -.32632,
		z: .91379,
		mag: 5.33,
		bv: -.063,
		name: "κ1 Pesce volante",
		detail: "Pesce volante · mag 5,33",
		proper: false
	},
	{
		x: -.82942,
		y: .50704,
		z: .23445,
		mag: 5.13,
		bv: .487,
		name: "χ Cancro",
		detail: "Cancro · mag 5,13",
		proper: false
	},
	{
		x: .32444,
		y: -.37196,
		z: .8697,
		mag: 4.34,
		bv: 1.161,
		name: "θ Camaleonte",
		detail: "Camaleonte · mag 4,34",
		proper: false
	},
	{
		x: -.25967,
		y: .00246,
		z: .9657,
		mag: 5.18,
		bv: -.187,
		name: "HIP 40943",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: -.30663,
		y: .03659,
		z: .95113,
		mag: 4.83,
		bv: 1.419,
		name: "w Poppa",
		detail: "Poppa · mag 4,83",
		proper: false
	},
	{
		x: .26968,
		y: -.33903,
		z: .9013,
		mag: 5.28,
		bv: .014,
		name: "η Pesce volante",
		detail: "Pesce volante · mag 5,28",
		proper: false
	},
	{
		x: .07293,
		y: -.21816,
		z: .97318,
		mag: 1.86,
		bv: 1.196,
		name: "Avior",
		detail: "ε Carena · mag 1,86",
		proper: true
	},
	{
		x: -.08698,
		y: -.11315,
		z: .98976,
		mag: 4.79,
		bv: -.146,
		name: "B Vela",
		detail: "Vela · mag 4,79",
		proper: false
	},
	{
		x: -.82489,
		y: .56405,
		z: -.03761,
		mag: 4.25,
		bv: 1.55,
		name: "Alsciaukat",
		detail: "31 Lince · mag 4,25",
		proper: true
	},
	{
		x: -.41633,
		y: .13706,
		z: .89882,
		mag: 5.32,
		bv: 1.476,
		name: "HIP 41260",
		detail: "mag 5,32",
		proper: false
	},
	{
		x: -.03556,
		y: -.13798,
		z: .9898,
		mag: 5.18,
		bv: -.164,
		name: "HIP 41296",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: -.63579,
		y: .32378,
		z: .70067,
		mag: 3.91,
		bv: -.012,
		name: "C Idra femmina",
		detail: "Idra femmina · mag 3,91",
		proper: false
	},
	{
		x: .17137,
		y: -.27301,
		z: .94663,
		mag: 3.77,
		bv: 1.132,
		name: "β Pesce volante",
		detail: "Pesce volante · mag 3,77",
		proper: false
	},
	{
		x: -.72756,
		y: .4135,
		z: .54743,
		mag: 5.13,
		bv: .934,
		name: "HIP 41325",
		detail: "mag 5,13",
		proper: false
	},
	{
		x: -.01283,
		y: -.14682,
		z: .98908,
		mag: 5.08,
		bv: .256,
		name: "F Vela",
		detail: "Vela · mag 5,08",
		proper: false
	},
	{
		x: -.08431,
		y: -.09204,
		z: .99218,
		mag: 5.33,
		bv: -.14,
		name: "A Vela",
		detail: "Vela · mag 5,33",
		proper: false
	},
	{
		x: -.12909,
		y: -.0586,
		z: .9899,
		mag: 5.03,
		bv: -.168,
		name: "HIP 41639",
		detail: "mag 5,03",
		proper: false
	},
	{
		x: -.74427,
		y: .57966,
		z: -.33174,
		mag: 3.35,
		bv: .856,
		name: "Muscida",
		detail: "ο Orsa Maggiore · mag 3,35",
		proper: true
	},
	{
		x: -.77337,
		y: .49967,
		z: .39016,
		mag: 5.33,
		bv: 1.567,
		name: "θ Cancro",
		detail: "Cancro · mag 5,33",
		proper: false
	},
	{
		x: -.78057,
		y: .51588,
		z: .35296,
		mag: 5.33,
		bv: 1.252,
		name: "η Cancro",
		detail: "Cancro · mag 5,33",
		proper: false
	},
	{
		x: -.04637,
		y: -.09955,
		z: .99395,
		mag: 5.01,
		bv: 1.304,
		name: "C Vela",
		detail: "Vela · mag 5,01",
		proper: false
	},
	{
		x: .07105,
		y: -.18252,
		z: .98063,
		mag: 5.27,
		bv: -.133,
		name: "e1 Carena",
		detail: "Carena · mag 5,27",
		proper: false
	},
	{
		x: .06812,
		y: -.18025,
		z: .98126,
		mag: 4.84,
		bv: .981,
		name: "e2 Carena",
		detail: "Carena · mag 4,84",
		proper: false
	},
	{
		x: -.13823,
		y: -.01991,
		z: .9902,
		mag: 4.11,
		bv: .109,
		name: "e Vela",
		detail: "Vela · mag 4,11",
		proper: false
	},
	{
		x: -.68488,
		y: .44122,
		z: .57989,
		mag: 4.14,
		bv: .003,
		name: "Minazal",
		detail: "δ Idra femmina · mag 4,14",
		proper: true
	},
	{
		x: -.3594,
		y: .15577,
		z: .92009,
		mag: 5.24,
		bv: -.03,
		name: "η Bussola",
		detail: "Bussola · mag 5,24",
		proper: false
	},
	{
		x: -.6642,
		y: .42758,
		z: .6132,
		mag: 4.45,
		bv: 1.216,
		name: "Minchir",
		detail: "σ Idra femmina · mag 4,45",
		proper: true
	},
	{
		x: .2422,
		y: -.29431,
		z: .92451,
		mag: 5.19,
		bv: .013,
		name: "θ Pesce volante",
		detail: "Pesce volante · mag 5,19",
		proper: false
	},
	{
		x: -.40057,
		y: .19619,
		z: .89502,
		mag: 5.05,
		bv: .72,
		name: "HD 73752",
		detail: "mag 5,05",
		proper: false
	},
	{
		x: -.31328,
		y: .1273,
		z: .94109,
		mag: 4.86,
		bv: .9,
		name: "ζ Bussola",
		detail: "Bussola · mag 4,86",
		proper: false
	},
	{
		x: .00566,
		y: -.12049,
		z: .9927,
		mag: 5.18,
		bv: -.147,
		name: "HD 74146",
		detail: "Vela · mag 5,18",
		proper: false
	},
	{
		x: -.51427,
		y: .29798,
		z: .80419,
		mag: 4.98,
		bv: 1.415,
		name: "a Idra femmina",
		detail: "Idra femmina · mag 4,98",
		proper: false
	},
	{
		x: -.23736,
		y: .06805,
		z: .96903,
		mag: 3.97,
		bv: .936,
		name: "β Bussola",
		detail: "Bussola · mag 3,97",
		proper: false
	},
	{
		x: -.71041,
		y: .58718,
		z: -.38799,
		mag: 4.59,
		bv: 1.179,
		name: "Museida",
		detail: "π2 Orsa Maggiore · mag 4,59",
		proper: true
	},
	{
		x: .00435,
		y: -.11841,
		z: .99296,
		mag: 3.6,
		bv: -.168,
		name: "ο Vela",
		detail: "Vela · mag 3,60",
		proper: false
	},
	{
		x: -.1703,
		y: .01594,
		z: .98526,
		mag: 5.2,
		bv: -.027,
		name: "HD 74067",
		detail: "Vela · mag 5,20",
		proper: false
	},
	{
		x: .09962,
		y: -.18841,
		z: .97703,
		mag: 4.31,
		bv: -.117,
		name: "d Carena",
		detail: "Carena · mag 4,31",
		proper: false
	},
	{
		x: -.08214,
		y: -.05139,
		z: .9953,
		mag: 3.77,
		bv: .67,
		name: "b Vela",
		detail: "Vela · mag 3,77",
		proper: false
	},
	{
		x: -.7868,
		y: .61241,
		z: -.07684,
		mag: 5.35,
		bv: .993,
		name: "34 Lince",
		detail: "Lince · mag 5,35",
		proper: false
	},
	{
		x: -.07183,
		y: -.05711,
		z: .99578,
		mag: 4.74,
		bv: .137,
		name: "n Vela",
		detail: "Vela · mag 4,74",
		proper: false
	},
	{
		x: -.47216,
		y: .27083,
		z: .83888,
		mag: 4.87,
		bv: 1.063,
		name: "9 Idra femmina",
		detail: "Idra femmina · mag 4,87",
		proper: false
	},
	{
		x: -.09677,
		y: -.035,
		z: .99469,
		mag: 5.2,
		bv: .171,
		name: "HD 74371",
		detail: "Vela · mag 5,20",
		proper: false
	},
	{
		x: .0104,
		y: -.11601,
		z: .99319,
		mag: 4.83,
		bv: -.173,
		name: "HD 74560",
		detail: "Vela · mag 4,83",
		proper: false
	},
	{
		x: -.65285,
		y: .44339,
		z: .61416,
		mag: 4.3,
		bv: -.192,
		name: "η Idra femmina",
		detail: "Idra femmina · mag 4,30",
		proper: false
	},
	{
		x: -.75881,
		y: .55523,
		z: .34047,
		mag: 4.66,
		bv: .01,
		name: "Asellus Borealis",
		detail: "γ Cancro · mag 4,66",
		proper: true
	},
	{
		x: -.25762,
		y: .10053,
		z: .961,
		mag: 3.68,
		bv: -.18,
		name: "α Bussola",
		detail: "Bussola · mag 3,68",
		proper: false
	},
	{
		x: -.03295,
		y: -.07832,
		z: .99638,
		mag: 5.15,
		bv: -.197,
		name: "D Vela",
		detail: "Vela · mag 5,15",
		proper: false
	},
	{
		x: -.55818,
		y: .35788,
		z: .74857,
		mag: 4.63,
		bv: .84,
		name: "F Idra femmina",
		detail: "Idra femmina · mag 4,63",
		proper: false
	},
	{
		x: -.12977,
		y: 8e-4,
		z: .99154,
		mag: 4.05,
		bv: .874,
		name: "d Vela",
		detail: "Vela · mag 4,05",
		proper: false
	},
	{
		x: -.74117,
		y: .54316,
		z: .39452,
		mag: 3.94,
		bv: 1.083,
		name: "Asellus Australis",
		detail: "δ Cancro · mag 3,94",
		proper: true
	},
	{
		x: .03597,
		y: -.12829,
		z: .99108,
		mag: 1.93,
		bv: .043,
		name: "Alsephina",
		detail: "δ Vela · mag 1,93",
		proper: true
	},
	{
		x: -.0805,
		y: -.03206,
		z: .99624,
		mag: 3.87,
		bv: .015,
		name: "a Vela",
		detail: "Vela · mag 3,87",
		proper: false
	},
	{
		x: -.48628,
		y: .30914,
		z: .81729,
		mag: 4.32,
		bv: .9,
		name: "D Idra femmina",
		detail: "Idra femmina · mag 4,32",
		proper: false
	},
	{
		x: -.77273,
		y: .59543,
		z: .21987,
		mag: 4.03,
		bv: 1.007,
		name: "Zubanah",
		detail: "ι Cancro · mag 4,03",
		proper: true
	},
	{
		x: .06721,
		y: -.14633,
		z: .98695,
		mag: 4.5,
		bv: -.169,
		name: "f Carena",
		detail: "Carena · mag 4,50",
		proper: false
	},
	{
		x: -.66593,
		y: .47751,
		z: .57316,
		mag: 3.38,
		bv: .685,
		name: "Ashlesha",
		detail: "ε Idra femmina · mag 3,38",
		proper: true
	},
	{
		x: -.59806,
		y: .4155,
		z: .68533,
		mag: 5.28,
		bv: .058,
		name: "HIP 43142",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: -.65723,
		y: .47897,
		z: .58192,
		mag: 4.35,
		bv: -.044,
		name: "ρ Idra femmina",
		detail: "Idra femmina · mag 4,35",
		proper: false
	},
	{
		x: -.57849,
		y: .40982,
		z: .70526,
		mag: 5.3,
		bv: -.08,
		name: "14 Idra femmina",
		detail: "Idra femmina · mag 5,30",
		proper: false
	},
	{
		x: -.08327,
		y: -.01509,
		z: .99641,
		mag: 4.94,
		bv: .043,
		name: "g Vela",
		detail: "Vela · mag 4,94",
		proper: false
	},
	{
		x: -.24861,
		y: .12277,
		z: .96079,
		mag: 5.19,
		bv: .876,
		name: "HIP 43352",
		detail: "mag 5,19",
		proper: false
	},
	{
		x: -.31101,
		y: .17923,
		z: .93335,
		mag: 4.02,
		bv: 1.272,
		name: "γ Bussola",
		detail: "Bussola · mag 4,02",
		proper: false
	},
	{
		x: -.06534,
		y: -.02681,
		z: .9975,
		mag: 5.09,
		bv: -.205,
		name: "f Vela",
		detail: "Vela · mag 5,09",
		proper: false
	},
	{
		x: .20617,
		y: -.24487,
		z: .94738,
		mag: 5.34,
		bv: .423,
		name: "HIP 43414",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.76912,
		y: .63799,
		z: -.03772,
		mag: 5.15,
		bv: .971,
		name: "35 Lince",
		detail: "Lince · mag 5,15",
		proper: false
	},
	{
		x: -.04581,
		y: -.03034,
		z: .99849,
		mag: 5.31,
		bv: .275,
		name: "HIP 43671",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: .13107,
		y: -.17336,
		z: .9761,
		mag: 3.84,
		bv: -.104,
		name: "c Carena",
		detail: "Carena · mag 3,84",
		proper: false
	},
	{
		x: -.63882,
		y: .503,
		z: .58215,
		mag: 3.11,
		bv: .978,
		name: "ζ Idra femmina",
		detail: "Idra femmina · mag 3,11",
		proper: false
	},
	{
		x: -.29904,
		y: .19434,
		z: .93424,
		mag: 4.87,
		bv: .142,
		name: "δ Bussola",
		detail: "Bussola · mag 4,87",
		proper: false
	},
	{
		x: -.7489,
		y: .61921,
		z: .23607,
		mag: 5.23,
		bv: 1,
		name: "ρ2 Cancro",
		detail: "Cancro · mag 5,23",
		proper: false
	},
	{
		x: .0281,
		y: -.08344,
		z: .99612,
		mag: 4.68,
		bv: -.115,
		name: "H Vela",
		detail: "Vela · mag 4,68",
		proper: false
	},
	{
		x: .11519,
		y: -.15467,
		z: .98123,
		mag: 4.93,
		bv: -.182,
		name: "b1 Carena",
		detail: "Carena · mag 4,93",
		proper: false
	},
	{
		x: -.69365,
		y: .56838,
		z: .44248,
		mag: 5.22,
		bv: .149,
		name: "ο1 Cancro",
		detail: "Cancro · mag 5,22",
		proper: false
	},
	{
		x: -.67011,
		y: .55219,
		z: .49603,
		mag: 4.26,
		bv: .141,
		name: "Acubens",
		detail: "α Cancro · mag 4,26",
		proper: true
	},
	{
		x: -.04,
		y: -.01579,
		z: .99908,
		mag: 5.17,
		bv: .268,
		name: "HD 77140",
		detail: "Vela · mag 5,17",
		proper: false
	},
	{
		x: -.7483,
		y: .6539,
		z: -.11167,
		mag: 3.12,
		bv: .223,
		name: "Talitha",
		detail: "ι Orsa Maggiore · mag 3,12",
		proper: true
	},
	{
		x: .11683,
		y: -.14894,
		z: .98192,
		mag: 5.17,
		bv: .417,
		name: "b2 Carena",
		detail: "Carena · mag 5,17",
		proper: false
	},
	{
		x: -.74909,
		y: .64287,
		z: .15994,
		mag: 5.23,
		bv: .913,
		name: "σ3 Cancro",
		detail: "Cancro · mag 5,23",
		proper: false
	},
	{
		x: -.11592,
		y: .05551,
		z: .99171,
		mag: 4.45,
		bv: .646,
		name: "w Vela",
		detail: "Vela · mag 4,45",
		proper: false
	},
	{
		x: -.75262,
		y: .65845,
		z: -.00258,
		mag: 3.96,
		bv: .463,
		name: "10 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 3,96",
		proper: false
	},
	{
		x: .03047,
		y: -.06647,
		z: .99732,
		mag: 5.23,
		bv: -.12,
		name: "HD 77653",
		detail: "Vela · mag 5,23",
		proper: false
	},
	{
		x: .21441,
		y: -.22504,
		z: .95047,
		mag: 4,
		bv: .145,
		name: "α Pesce volante",
		detail: "Pesce volante · mag 4,00",
		proper: false
	},
	{
		x: -.66493,
		y: .60504,
		z: -.43795,
		mag: 4.74,
		bv: 1.542,
		name: "ρ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,74",
		proper: false
	},
	{
		x: -.74123,
		y: .66436,
		z: -.09591,
		mag: 3.57,
		bv: .007,
		name: "Alkaphrah",
		detail: "κ Orsa Maggiore · mag 3,57",
		proper: true
	},
	{
		x: -.03144,
		y: -.00245,
		z: .9995,
		mag: 3.75,
		bv: 1.174,
		name: "c Vela",
		detail: "Vela · mag 3,75",
		proper: false
	},
	{
		x: .29309,
		y: -.28853,
		z: .91151,
		mag: 4.47,
		bv: .607,
		name: "G Carena",
		detail: "Carena · mag 4,47",
		proper: false
	},
	{
		x: .26879,
		y: -.26605,
		z: .92573,
		mag: 4.66,
		bv: -.149,
		name: "E Carena",
		detail: "Carena · mag 4,66",
		proper: false
	},
	{
		x: -.60224,
		y: .53148,
		z: .59569,
		mag: 4.99,
		bv: 1.189,
		name: "ω Idra femmina",
		detail: "Idra femmina · mag 4,99",
		proper: false
	},
	{
		x: -.73933,
		y: .67101,
		z: .05599,
		mag: 4.56,
		bv: 1.037,
		name: "HIP 44700",
		detail: "mag 4,56",
		proper: false
	},
	{
		x: -.63625,
		y: .57446,
		z: .51496,
		mag: 5.23,
		bv: -.092,
		name: "κ Cancro",
		detail: "Cancro · mag 5,23",
		proper: false
	},
	{
		x: -.0708,
		y: .04922,
		z: .99628,
		mag: 2.23,
		bv: 1.665,
		name: "Suhail",
		detail: "λ Vela · mag 2,23",
		proper: true
	},
	{
		x: -.28877,
		y: .25073,
		z: .92398,
		mag: 4.62,
		bv: 1.594,
		name: "κ Bussola",
		detail: "Bussola · mag 4,62",
		proper: false
	},
	{
		x: -.6627,
		y: .61601,
		z: -.42586,
		mag: 5.15,
		bv: 1.514,
		name: "σ1 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,15",
		proper: false
	},
	{
		x: -.72265,
		y: .66933,
		z: -.17256,
		mag: 4.46,
		bv: .288,
		name: "Alhaud",
		detail: "f Orsa Maggiore · mag 4,46",
		proper: true
	},
	{
		x: -.69281,
		y: .63815,
		z: .33582,
		mag: 5.16,
		bv: .97,
		name: "Nahn",
		detail: "ξ Cancro · mag 5,16",
		proper: true
	},
	{
		x: -.65893,
		y: .61722,
		z: -.42994,
		mag: 4.8,
		bv: .489,
		name: "σ2 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,80",
		proper: false
	},
	{
		x: -.67696,
		y: .63505,
		z: -.37207,
		mag: 4.67,
		bv: .381,
		name: "τ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,67",
		proper: false
	},
	{
		x: .13272,
		y: -.12832,
		z: .98281,
		mag: 3.43,
		bv: -.19,
		name: "a Carena",
		detail: "Carena · mag 3,43",
		proper: false
	},
	{
		x: -.04594,
		y: .03928,
		z: .99817,
		mag: 4.99,
		bv: .222,
		name: "HD 79186",
		detail: "Vela · mag 4,99",
		proper: false
	},
	{
		x: .17488,
		y: -.16687,
		z: .97035,
		mag: 3.96,
		bv: -.18,
		name: "i Carena",
		detail: "Carena · mag 3,96",
		proper: false
	},
	{
		x: .26662,
		y: -.24881,
		z: .93113,
		mag: 1.67,
		bv: .07,
		name: "Miaplacidus",
		detail: "β Carena · mag 1,67",
		proper: true
	},
	{
		x: -.72357,
		y: .68972,
		z: -.02702,
		mag: 5.3,
		bv: -.13,
		name: "36 Lince",
		detail: "Lince · mag 5,30",
		proper: false
	},
	{
		x: .09559,
		y: -.08235,
		z: .99201,
		mag: 5.26,
		bv: .98,
		name: "HIP 45328",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: -.68158,
		y: .64901,
		z: -.33798,
		mag: 5.18,
		bv: .605,
		name: "c Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,18",
		proper: false
	},
	{
		x: -.55566,
		y: .53773,
		z: .6341,
		mag: 3.89,
		bv: -.06,
		name: "θ Idra femmina",
		detail: "Idra femmina · mag 3,89",
		proper: false
	},
	{
		x: -.05949,
		y: .0665,
		z: .99601,
		mag: 5.24,
		bv: -.137,
		name: "z Vela",
		detail: "Vela · mag 5,24",
		proper: false
	},
	{
		x: -.1149,
		y: .12514,
		z: .98546,
		mag: 4.92,
		bv: 1.084,
		name: "l Vela",
		detail: "Vela · mag 4,92",
		proper: false
	},
	{
		x: -.12889,
		y: .13925,
		z: .98183,
		mag: 4.63,
		bv: .473,
		name: "Markeb",
		detail: "k Vela · mag 4,63",
		proper: true
	},
	{
		x: -.69641,
		y: .66886,
		z: -.26007,
		mag: 5.28,
		bv: 1.568,
		name: "17 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,28",
		proper: false
	},
	{
		x: -.70351,
		y: .67771,
		z: -.21397,
		mag: 4.8,
		bv: .199,
		name: "e Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,80",
		proper: false
	},
	{
		x: .12327,
		y: -.10271,
		z: .98704,
		mag: 4.34,
		bv: 1.602,
		name: "g Carena",
		detail: "Carena · mag 4,34",
		proper: false
	},
	{
		x: -.04215,
		y: .05847,
		z: .9974,
		mag: 5.12,
		bv: 1.636,
		name: "HIP 45505",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: -.47271,
		y: .47337,
		z: .74328,
		mag: 5.24,
		bv: 1.172,
		name: "23 Idra femmina",
		detail: "Idra femmina · mag 5,24",
		proper: false
	},
	{
		x: -.10144,
		y: .11845,
		z: .98776,
		mag: 5.31,
		bv: 1.166,
		name: "HIP 45544",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: .146,
		y: -.12206,
		z: .98172,
		mag: 2.21,
		bv: .189,
		name: "Aspidiske",
		detail: "ι Carena · mag 2,21",
		proper: true
	},
	{
		x: .3297,
		y: -.30228,
		z: .89438,
		mag: 5.28,
		bv: .021,
		name: "HIP 45581",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: .04611,
		y: -.02054,
		z: .99873,
		mag: 5.26,
		bv: -.062,
		name: "K Vela",
		detail: "Vela · mag 5,26",
		proper: false
	},
	{
		x: -.70857,
		y: .70055,
		z: .08462,
		mag: 3.82,
		bv: .066,
		name: "38 Lince",
		detail: "Lince · mag 3,82",
		proper: false
	},
	{
		x: -.40839,
		y: .43036,
		z: .80499,
		mag: 4.77,
		bv: .927,
		name: "26 Idra femmina",
		detail: "Idra femmina · mag 4,77",
		proper: false
	},
	{
		x: -.4304,
		y: .45567,
		z: .77918,
		mag: 4.8,
		bv: .913,
		name: "P Idra femmina",
		detail: "Idra femmina · mag 4,80",
		proper: false
	},
	{
		x: .18955,
		y: -.15384,
		z: .96974,
		mag: 4.79,
		bv: .926,
		name: "k Carena",
		detail: "Carena · mag 4,79",
		proper: false
	},
	{
		x: -.69922,
		y: .70367,
		z: .12625,
		mag: 3.14,
		bv: 1.55,
		name: "α Lince",
		detail: "Lince · mag 3,14",
		proper: false
	},
	{
		x: -.251,
		y: .28761,
		z: .92427,
		mag: 4.71,
		bv: 1.633,
		name: "θ Bussola",
		detail: "Bussola · mag 4,71",
		proper: false
	},
	{
		x: .10229,
		y: -.0617,
		z: .99284,
		mag: 2.47,
		bv: -.141,
		name: "Markeb",
		detail: "κ Vela · mag 2,47",
		proper: true
	},
	{
		x: -.21299,
		y: .25946,
		z: .94197,
		mag: 4.71,
		bv: .892,
		name: "λ Bussola",
		detail: "Bussola · mag 4,71",
		proper: false
	},
	{
		x: .39649,
		y: -.36202,
		z: .84364,
		mag: 5.34,
		bv: .454,
		name: "ι Camaleonte",
		detail: "Camaleonte · mag 5,34",
		proper: false
	},
	{
		x: -.66665,
		y: .69624,
		z: .26613,
		mag: 4.47,
		bv: 1.222,
		name: "Al Minlear al Asad",
		detail: "κ Leone · mag 4,47",
		proper: true
	},
	{
		x: .09016,
		y: -.03392,
		z: .99535,
		mag: 5.09,
		bv: -.102,
		name: "I Vela",
		detail: "Vela · mag 5,09",
		proper: false
	},
	{
		x: -.27545,
		y: .34432,
		z: .89753,
		mag: 4.72,
		bv: 1.154,
		name: "G Idra femmina",
		detail: "Idra femmina · mag 4,72",
		proper: false
	},
	{
		x: -.41731,
		y: .4855,
		z: .76821,
		mag: 1.99,
		bv: 1.44,
		name: "Alphard",
		detail: "α Idra femmina · mag 1,99",
		proper: true
	},
	{
		x: -.46693,
		y: .54255,
		z: .6983,
		mag: 4.59,
		bv: .411,
		name: "Ukdah",
		detail: "τ1 Idra femmina · mag 4,59",
		proper: true
	},
	{
		x: -.11307,
		y: .19009,
		z: .97523,
		mag: 4.51,
		bv: 1.408,
		name: "ε Macchina Pneumatica",
		detail: "Macchina Pneumatica · mag 4,51",
		proper: false
	},
	{
		x: -.0557,
		y: .13761,
		z: .98892,
		mag: 3.6,
		bv: .371,
		name: "ψ Vela",
		detail: "Vela · mag 3,60",
		proper: false
	},
	{
		x: .14241,
		y: -.07163,
		z: .98721,
		mag: 3.16,
		bv: 1.538,
		name: "N Vela",
		detail: "Vela · mag 3,16",
		proper: false
	},
	{
		x: -.6503,
		y: .66579,
		z: -.36583,
		mag: 3.65,
		bv: .36,
		name: "h Orsa Maggiore",
		detail: "Orsa Maggiore · mag 3,65",
		proper: false
	},
	{
		x: -.63325,
		y: .70543,
		z: .31839,
		mag: 4.32,
		bv: 1.541,
		name: "Alterf",
		detail: "λ Leone · mag 4,32",
		proper: true
	},
	{
		x: -.56746,
		y: .65181,
		z: .50313,
		mag: 4.99,
		bv: 1.046,
		name: "ξ Leone",
		detail: "Leone · mag 4,99",
		proper: false
	},
	{
		x: -.55669,
		y: .64235,
		z: .52677,
		mag: 5.07,
		bv: 1.364,
		name: "h Leone",
		detail: "Leone · mag 5,07",
		proper: false
	},
	{
		x: -.47177,
		y: .56414,
		z: .67763,
		mag: 4.54,
		bv: .109,
		name: "τ2 Idra femmina",
		detail: "Idra femmina · mag 4,54",
		proper: false
	},
	{
		x: -.0496,
		y: .13899,
		z: .98905,
		mag: 5.35,
		bv: .897,
		name: "HIP 46811",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: -.67666,
		y: .71508,
		z: -.17547,
		mag: 3.17,
		bv: .475,
		name: "θ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 3,17",
		proper: false
	},
	{
		x: -.27157,
		y: .37429,
		z: .88666,
		mag: 5.02,
		bv: 1.023,
		name: "HD 82734",
		detail: "mag 5,02",
		proper: false
	},
	{
		x: .05276,
		y: .03559,
		z: .99797,
		mag: 5.12,
		bv: -.114,
		name: "HIP 46914",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: .40289,
		y: -.35908,
		z: .84187,
		mag: 5.07,
		bv: -.139,
		name: "ζ Camaleonte",
		detail: "Camaleonte · mag 5,07",
		proper: false
	},
	{
		x: .08011,
		y: .00741,
		z: .99676,
		mag: 5.01,
		bv: -.18,
		name: "L Vela",
		detail: "Vela · mag 5,01",
		proper: false
	},
	{
		x: -.66921,
		y: .73768,
		z: .08939,
		mag: 4.54,
		bv: .914,
		name: "10 Leone Minore",
		detail: "Leone Minore · mag 4,54",
		proper: false
	},
	{
		x: .17323,
		y: -.09457,
		z: .98033,
		mag: 4.08,
		bv: -.013,
		name: "h Carena",
		detail: "Carena · mag 4,08",
		proper: false
	},
	{
		x: -.61756,
		y: .62838,
		z: -.47303,
		mag: 4.54,
		bv: .781,
		name: "d Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,54",
		proper: false
	},
	{
		x: -.67227,
		y: .71753,
		z: -.18222,
		mag: 4.47,
		bv: .027,
		name: "26 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,47",
		proper: false
	},
	{
		x: -.67213,
		y: .73969,
		z: .03316,
		mag: 4.81,
		bv: .992,
		name: "HIP 47029",
		detail: "mag 4,81",
		proper: false
	},
	{
		x: .06336,
		y: .03699,
		z: .99731,
		mag: 4.34,
		bv: .173,
		name: "M Vela",
		detail: "Vela · mag 4,34",
		proper: false
	},
	{
		x: -.5485,
		y: .53955,
		z: -.63878,
		mag: 4.28,
		bv: 1.488,
		name: "HIP 47193",
		detail: "mag 4,28",
		proper: false
	},
	{
		x: -.51937,
		y: .63915,
		z: .56722,
		mag: 5,
		bv: 1.051,
		name: "10 Leone",
		detail: "Leone · mag 5,00",
		proper: false
	},
	{
		x: -.66473,
		y: .74677,
		z: .02162,
		mag: 5.28,
		bv: .223,
		name: "42 Lince",
		detail: "Lince · mag 5,28",
		proper: false
	},
	{
		x: -.49876,
		y: .62769,
		z: .5977,
		mag: 4.68,
		bv: 1.31,
		name: "2 Sestante",
		detail: "Sestante · mag 4,68",
		proper: false
	},
	{
		x: .20469,
		y: -.11447,
		z: .97211,
		mag: 4.51,
		bv: -.07,
		name: "m Carena",
		detail: "Carena · mag 4,51",
		proper: false
	},
	{
		x: -.44676,
		y: .58751,
		z: .67471,
		mag: 3.9,
		bv: 1.313,
		name: "Ukdah",
		detail: "ι Idra femmina · mag 3,90",
		proper: true
	},
	{
		x: -.3211,
		y: .46653,
		z: .82416,
		mag: 5.07,
		bv: -.149,
		name: "Al Sharasif",
		detail: "κ Idra femmina · mag 5,07",
		proper: true
	},
	{
		x: .1697,
		y: -.06897,
		z: .98308,
		mag: 5.3,
		bv: .195,
		name: "HIP 47479",
		detail: "mag 5,30",
		proper: false
	},
	{
		x: -.52867,
		y: .66985,
		z: .52135,
		mag: 3.52,
		bv: .516,
		name: "Subra",
		detail: "ο Leone · mag 3,52",
		proper: true
	},
	{
		x: -.22044,
		y: .36812,
		z: .90327,
		mag: 4.76,
		bv: -.117,
		name: "I Idra femmina",
		detail: "Idra femmina · mag 4,76",
		proper: false
	},
	{
		x: -.21404,
		y: .36689,
		z: .90531,
		mag: 4.93,
		bv: .534,
		name: "HD 84117",
		detail: "mag 4,93",
		proper: false
	},
	{
		x: -.59687,
		y: .61888,
		z: -.51062,
		mag: 5.15,
		bv: 1.029,
		name: "27 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,15",
		proper: false
	},
	{
		x: -.1659,
		y: .32653,
		z: .93051,
		mag: 4.78,
		bv: .516,
		name: "θ Macchina Pneumatica",
		detail: "Macchina Pneumatica · mag 4,78",
		proper: false
	},
	{
		x: .22663,
		y: -.12194,
		z: .96632,
		mag: 3.69,
		bv: 1.01,
		name: "l Carena",
		detail: "Carena · mag 3,69",
		proper: false
	},
	{
		x: -.5948,
		y: .74553,
		z: .30067,
		mag: 2.97,
		bv: .808,
		name: "Algenubi",
		detail: "ε Leone · mag 2,97",
		proper: true
	},
	{
		x: -.64224,
		y: .71715,
		z: -.27061,
		mag: 5.09,
		bv: 1.594,
		name: "44 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,09",
		proper: false
	},
	{
		x: .2564,
		y: -.15333,
		z: .95433,
		mag: 2.92,
		bv: .273,
		name: "υ Carena",
		detail: "Carena · mag 2,92",
		proper: false
	},
	{
		x: -.64517,
		y: .75965,
		z: -.08173,
		mag: 5.08,
		bv: .619,
		name: "15 Leone Minore",
		detail: "Leone Minore · mag 5,08",
		proper: false
	},
	{
		x: .05109,
		y: .10988,
		z: .99263,
		mag: 5.09,
		bv: -.098,
		name: "u Vela",
		detail: "Vela · mag 5,09",
		proper: false
	},
	{
		x: -.63082,
		y: .71414,
		z: -.30345,
		mag: 3.78,
		bv: .291,
		name: "υ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 3,78",
		proper: false
	},
	{
		x: -.28013,
		y: .49158,
		z: .82455,
		mag: 4.11,
		bv: .918,
		name: "Zhang",
		detail: "υ1 Idra femmina · mag 4,11",
		proper: true
	},
	{
		x: .06417,
		y: .10225,
		z: .99269,
		mag: 4.58,
		bv: 1.172,
		name: "m Vela",
		detail: "Vela · mag 4,58",
		proper: false
	},
	{
		x: -.57934,
		y: .76258,
		z: .28782,
		mag: 5.29,
		bv: .229,
		name: "g Leone",
		detail: "Leone · mag 5,29",
		proper: false
	},
	{
		x: -.63587,
		y: .73961,
		z: -.22059,
		mag: 4.55,
		bv: .038,
		name: "φ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,55",
		proper: false
	},
	{
		x: -.34225,
		y: .56164,
		z: .75327,
		mag: 5.07,
		bv: .038,
		name: "γ Sestante",
		detail: "Sestante · mag 5,07",
		proper: false
	},
	{
		x: -.584,
		y: .76879,
		z: .26057,
		mag: 3.88,
		bv: 1.222,
		name: "Rasalas",
		detail: "μ Leone · mag 3,88",
		proper: true
	},
	{
		x: -.15613,
		y: .37334,
		z: .91446,
		mag: 4.87,
		bv: 1.199,
		name: "HIP 48559",
		detail: "mag 4,87",
		proper: false
	},
	{
		x: -.22687,
		y: .45532,
		z: .86094,
		mag: 4.94,
		bv: 1.559,
		name: "Felis",
		detail: "HIP 48615 · mag 4,94",
		proper: true
	},
	{
		x: -.63017,
		y: .76192,
		z: -.14953,
		mag: 5.27,
		bv: .086,
		name: "31 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,27",
		proper: false
	},
	{
		x: .1624,
		y: .00184,
		z: .98672,
		mag: 3.52,
		bv: -.067,
		name: "φ Vela",
		detail: "Vela · mag 3,52",
		proper: false
	},
	{
		x: -.61722,
		y: .78679,
		z: 81e-5,
		mag: 5.11,
		bv: .481,
		name: "19 Leone Minore",
		detail: "Leone Minore · mag 5,11",
		proper: false
	},
	{
		x: -.49024,
		y: .73072,
		z: .4751,
		mag: 5.26,
		bv: -.035,
		name: "ν Leone",
		detail: "Leone · mag 5,26",
		proper: false
	},
	{
		x: -.03478,
		y: .25878,
		z: .96531,
		mag: 5.23,
		bv: .3,
		name: "η Macchina Pneumatica",
		detail: "Macchina Pneumatica · mag 5,23",
		proper: false
	},
	{
		x: -.45235,
		y: .71033,
		z: .53927,
		mag: 4.68,
		bv: 1.589,
		name: "π Leone",
		detail: "Leone · mag 4,68",
		proper: false
	},
	{
		x: -.25258,
		y: .54545,
		z: .79918,
		mag: 4.6,
		bv: -.087,
		name: "υ2 Idra femmina",
		detail: "Idra femmina · mag 4,60",
		proper: false
	},
	{
		x: .10682,
		y: .11725,
		z: .98734,
		mag: 5.06,
		bv: .88,
		name: "HIP 49485",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: -.488,
		y: .77439,
		z: .40271,
		mag: 3.48,
		bv: -.031,
		name: "Al Jabhah",
		detail: "η Leone · mag 3,48",
		proper: true
	},
	{
		x: -.57614,
		y: .81168,
		z: .09612,
		mag: 4.49,
		bv: .19,
		name: "21 Leone Minore",
		detail: "Leone Minore · mag 4,49",
		proper: false
	},
	{
		x: -.44043,
		y: .74181,
		z: .5057,
		mag: 4.39,
		bv: 1.448,
		name: "A Leone",
		detail: "Leone · mag 4,39",
		proper: false
	},
	{
		x: -.35867,
		y: .66998,
		z: .64998,
		mag: 4.48,
		bv: -.032,
		name: "α Sestante",
		detail: "Sestante · mag 4,48",
		proper: false
	},
	{
		x: -.4528,
		y: .75396,
		z: .47594,
		mag: 1.36,
		bv: -.087,
		name: "Regolo",
		detail: "α Leone · mag 1,36",
		proper: true
	},
	{
		x: .29424,
		y: -.13946,
		z: .9455,
		mag: 5.26,
		bv: .973,
		name: "HIP 49698",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: .15874,
		y: .05923,
		z: .98554,
		mag: 4.85,
		bv: -.12,
		name: "Q Vela",
		detail: "Vela · mag 4,85",
		proper: false
	},
	{
		x: -.23814,
		y: .56037,
		z: .79327,
		mag: 5.3,
		bv: .368,
		name: "HIP 49809",
		detail: "mag 5,30",
		proper: false
	},
	{
		x: -.2409,
		y: .56635,
		z: .78817,
		mag: 3.61,
		bv: 1.007,
		name: "λ Idra femmina",
		detail: "Idra femmina · mag 3,61",
		proper: false
	},
	{
		x: .1626,
		y: .07439,
		z: .98388,
		mag: 5.27,
		bv: .257,
		name: "HD 88824",
		detail: "Vela · mag 5,27",
		proper: false
	},
	{
		x: .30607,
		y: -.14246,
		z: .94129,
		mag: 5.15,
		bv: .217,
		name: "M Carena",
		detail: "Carena · mag 5,15",
		proper: false
	},
	{
		x: .33816,
		y: -.19388,
		z: .9209,
		mag: 3.29,
		bv: -.074,
		name: "ω Carena",
		detail: "Carena · mag 3,29",
		proper: false
	},
	{
		x: .07379,
		y: .2059,
		z: .97579,
		mag: 3.85,
		bv: .051,
		name: "q Vela",
		detail: "Vela · mag 3,85",
		proper: false
	},
	{
		x: -.49614,
		y: .8187,
		z: .28908,
		mag: 3.43,
		bv: .307,
		name: "Adhafera",
		detail: "ζ Leone · mag 3,43",
		proper: true
	},
	{
		x: .26634,
		y: -.06636,
		z: .96159,
		mag: 3.39,
		bv: 1.541,
		name: "q Carena",
		detail: "Carena · mag 3,39",
		proper: false
	},
	{
		x: -.5709,
		y: .81998,
		z: -.04121,
		mag: 3.45,
		bv: .029,
		name: "Tania Borealis",
		detail: "λ Orsa Maggiore · mag 3,45",
		proper: true
	},
	{
		x: -.25665,
		y: .62607,
		z: .73632,
		mag: 5.25,
		bv: .336,
		name: "ε Sestante",
		detail: "Sestante · mag 5,25",
		proper: false
	},
	{
		x: .21262,
		y: .02855,
		z: .97672,
		mag: 4.59,
		bv: 1.6,
		name: "HD 89682",
		detail: "Vela · mag 4,59",
		proper: false
	},
	{
		x: -.46329,
		y: .81388,
		z: .35067,
		mag: 4.78,
		bv: .452,
		name: "40 Leone",
		detail: "Leone · mag 4,78",
		proper: false
	},
	{
		x: -.46475,
		y: .81566,
		z: .34455,
		mag: 2.01,
		bv: 1.128,
		name: "Algieba",
		detail: "γ1 Leone · mag 2,01",
		proper: true
	},
	{
		x: .22473,
		y: .01548,
		z: .9743,
		mag: 4.5,
		bv: -.102,
		name: "J Vela",
		detail: "Vela · mag 4,50",
		proper: false
	},
	{
		x: .08908,
		y: .22612,
		z: .97002,
		mag: 4.82,
		bv: 1.095,
		name: "r Vela",
		detail: "Vela · mag 4,82",
		proper: false
	},
	{
		x: -.5536,
		y: .83254,
		z: -.02027,
		mag: 3.06,
		bv: 1.603,
		name: "Tania Australis",
		detail: "μ Orsa Maggiore · mag 3,06",
		proper: true
	},
	{
		x: .3239,
		y: -.14101,
		z: .93553,
		mag: 4.97,
		bv: -.128,
		name: "L Carena",
		detail: "Carena · mag 4,97",
		proper: false
	},
	{
		x: .05609,
		y: .27932,
		z: .95856,
		mag: 5.34,
		bv: .251,
		name: "HIP 50888",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.56652,
		y: .70982,
		z: -.41858,
		mag: 4.94,
		bv: -.052,
		name: "HD 89822",
		detail: "Orsa Maggiore · mag 4,94",
		proper: false
	},
	{
		x: .38161,
		y: -.24224,
		z: .89202,
		mag: 3.99,
		bv: .369,
		name: "I Carena",
		detail: "Carena · mag 3,99",
		proper: false
	},
	{
		x: -.517,
		y: .84908,
		z: .10853,
		mag: 4.72,
		bv: .26,
		name: "30 Leone Minore",
		detail: "Leone Minore · mag 4,72",
		proper: false
	},
	{
		x: -.14474,
		y: .55413,
		z: .81975,
		mag: 3.83,
		bv: 1.456,
		name: "μ Idra femmina",
		detail: "Idra femmina · mag 3,83",
		proper: false
	},
	{
		x: -.00199,
		y: .38086,
		z: .92463,
		mag: 4.28,
		bv: 1.429,
		name: "α Macchina Pneumatica",
		detail: "Macchina Pneumatica · mag 4,28",
		proper: false
	},
	{
		x: .25192,
		y: 19e-5,
		z: .96775,
		mag: 4.65,
		bv: .474,
		name: "P Carena",
		detail: "Carena · mag 4,65",
		proper: false
	},
	{
		x: .26248,
		y: -.01562,
		z: .96481,
		mag: 3.81,
		bv: .317,
		name: "s Carena",
		detail: "Carena · mag 3,81",
		proper: false
	},
	{
		x: -.52265,
		y: .8506,
		z: .05758,
		mag: 4.2,
		bv: .908,
		name: "β Leone Minore",
		detail: "Leone Minore · mag 4,20",
		proper: false
	},
	{
		x: .3102,
		y: -.09532,
		z: .94588,
		mag: 5.27,
		bv: 1.856,
		name: "HIP 51313",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: -.26199,
		y: .70203,
		z: .66221,
		mag: 5.19,
		bv: -.05,
		name: "δ Sestante",
		detail: "Sestante · mag 5,19",
		proper: false
	},
	{
		x: -.2771,
		y: .72136,
		z: .63471,
		mag: 5.08,
		bv: -.138,
		name: "β Sestante",
		detail: "Sestante · mag 5,08",
		proper: false
	},
	{
		x: .37285,
		y: -.20904,
		z: .90404,
		mag: 4.72,
		bv: .042,
		name: "K Carena",
		detail: "Carena · mag 4,72",
		proper: false
	},
	{
		x: -.5584,
		y: .7848,
		z: -.26884,
		mag: 4.82,
		bv: .541,
		name: "36 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,82",
		proper: false
	},
	{
		x: .38246,
		y: -.22638,
		z: .89581,
		mag: 4.94,
		bv: 1.677,
		name: "HIP 51495",
		detail: "mag 4,94",
		proper: false
	},
	{
		x: -.51598,
		y: .54646,
		z: -.65966,
		mag: 5.25,
		bv: .399,
		name: "HD 90089",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: .22513,
		y: .06378,
		z: .97224,
		mag: 4.89,
		bv: .5,
		name: "HD 91324",
		detail: "mag 4,89",
		proper: false
	},
	{
		x: .29493,
		y: -.05502,
		z: .95393,
		mag: 3.3,
		bv: -.089,
		name: "p Carena",
		detail: "Carena · mag 3,30",
		proper: false
	},
	{
		x: -.34802,
		y: .79619,
		z: .49494,
		mag: 3.84,
		bv: -.148,
		name: "ρ Leone",
		detail: "Leone · mag 3,84",
		proper: false
	},
	{
		x: .16778,
		y: .16595,
		z: .97176,
		mag: 5.02,
		bv: 1.045,
		name: "t Vela",
		detail: "Vela · mag 5,02",
		proper: false
	},
	{
		x: -.52069,
		y: .85369,
		z: -.00972,
		mag: 4.72,
		bv: .222,
		name: "HIP 51658",
		detail: "mag 4,72",
		proper: false
	},
	{
		x: -.05141,
		y: .48892,
		z: .87081,
		mag: 5.08,
		bv: 1.596,
		name: "44 Idra femmina",
		detail: "Idra femmina · mag 5,08",
		proper: false
	},
	{
		x: -.32277,
		y: .78623,
		z: .52693,
		mag: 5.07,
		bv: .921,
		name: "48 Leone",
		detail: "Leone · mag 5,07",
		proper: false
	},
	{
		x: -.53429,
		y: .62378,
		z: -.57047,
		mag: 4.86,
		bv: .957,
		name: "HIP 51808",
		detail: "mag 4,86",
		proper: false
	},
	{
		x: -.55008,
		y: .78341,
		z: -.28928,
		mag: 5.16,
		bv: .349,
		name: "37 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,16",
		proper: false
	},
	{
		x: .42221,
		y: -.30125,
		z: .85498,
		mag: 4.11,
		bv: 1.58,
		name: "γ Camaleonte",
		detail: "Camaleonte · mag 4,11",
		proper: false
	},
	{
		x: .26709,
		y: .01117,
		z: .96361,
		mag: 4.45,
		bv: 1.604,
		name: "r Carena",
		detail: "Carena · mag 4,45",
		proper: false
	},
	{
		x: .28518,
		y: -.01839,
		z: .9583,
		mag: 5.08,
		bv: 1.172,
		name: "t1 Carena",
		detail: "Carena · mag 5,08",
		proper: false
	},
	{
		x: -.00565,
		y: .44848,
		z: .89377,
		mag: 4.87,
		bv: 1.626,
		name: "HIP 51979",
		detail: "mag 4,87",
		proper: false
	},
	{
		x: .1896,
		y: .15416,
		z: .96968,
		mag: 3.84,
		bv: .3,
		name: "p Vela",
		detail: "Vela · mag 3,84",
		proper: false
	},
	{
		x: -.13715,
		y: .61668,
		z: .77517,
		mag: 4.89,
		bv: 2.8,
		name: "HD 92055",
		detail: "Idra femmina · mag 4,89",
		proper: false
	},
	{
		x: -.10102,
		y: .58015,
		z: .80822,
		mag: 4.91,
		bv: .922,
		name: "φ Idra femmina",
		detail: "Idra femmina · mag 4,91",
		proper: false
	},
	{
		x: -.46986,
		y: .87334,
		z: .12851,
		mag: 4.68,
		bv: .823,
		name: "37 Leone Minore",
		detail: "Leone Minore · mag 4,68",
		proper: false
	},
	{
		x: .28655,
		y: -.00997,
		z: .95801,
		mag: 4.69,
		bv: 1.562,
		name: "t2 Carena",
		detail: "Carena · mag 4,69",
		proper: false
	},
	{
		x: .25817,
		y: .04525,
		z: .96504,
		mag: 4.29,
		bv: 1.025,
		name: "x Vela",
		detail: "Vela · mag 4,29",
		proper: false
	},
	{
		x: -.53974,
		y: .72476,
		z: -.42825,
		mag: 5.12,
		bv: 1.207,
		name: "38 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,12",
		proper: false
	},
	{
		x: .33358,
		y: -.08719,
		z: .93868,
		mag: 4.76,
		bv: -.139,
		name: "HD 92938",
		detail: "Carena · mag 4,76",
		proper: false
	},
	{
		x: .33419,
		y: -.08545,
		z: .93862,
		mag: 2.74,
		bv: -.22,
		name: "θ Carena",
		detail: "Carena · mag 2,74",
		proper: false
	},
	{
		x: -.53618,
		y: .69518,
		z: -.47878,
		mag: 5.01,
		bv: 1.406,
		name: "HIP 52425",
		detail: "mag 5,01",
		proper: false
	},
	{
		x: -.40619,
		y: .87328,
		z: .26905,
		mag: 5.08,
		bv: .042,
		name: "41 Leone Minore",
		detail: "Leone Minore · mag 5,08",
		proper: false
	},
	{
		x: .30631,
		y: -.02613,
		z: .95157,
		mag: 4.58,
		bv: 1.7,
		name: "w Carena",
		detail: "Carena · mag 4,58",
		proper: false
	},
	{
		x: -.51128,
		y: .85165,
		z: -.11525,
		mag: 5.18,
		bv: .324,
		name: "HIP 52469",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: .33286,
		y: -.07777,
		z: .93977,
		mag: 4.8,
		bv: -.134,
		name: "HIP 52502",
		detail: "mag 4,80",
		proper: false
	},
	{
		x: .44013,
		y: -.32495,
		z: .83708,
		mag: 4.45,
		bv: -.188,
		name: "δ2 Camaleonte",
		detail: "Camaleonte · mag 4,45",
		proper: false
	},
	{
		x: .34033,
		y: -.08437,
		z: .93651,
		mag: 5.33,
		bv: -.096,
		name: "HIP 52678",
		detail: "mag 5,33",
		proper: false
	},
	{
		x: .33888,
		y: -.08031,
		z: .9374,
		mag: 5.23,
		bv: -.077,
		name: "HIP 52701",
		detail: "mag 5,23",
		proper: false
	},
	{
		x: .22289,
		y: .14906,
		z: .96338,
		mag: 2.69,
		bv: .901,
		name: "μ Vela",
		detail: "Vela · mag 2,69",
		proper: false
	},
	{
		x: .34032,
		y: -.08185,
		z: .93674,
		mag: 4.87,
		bv: -.149,
		name: "HIP 52736",
		detail: "mag 4,87",
		proper: false
	},
	{
		x: .2832,
		y: .0363,
		z: .95837,
		mag: 5.14,
		bv: -.08,
		name: "HIP 52742",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: -.29801,
		y: .83699,
		z: .45895,
		mag: 5.32,
		bv: .035,
		name: "l Leone",
		detail: "Leone · mag 5,32",
		proper: false
	},
	{
		x: -.06837,
		y: .6096,
		z: .78975,
		mag: 3.11,
		bv: 1.232,
		name: "ν Idra femmina",
		detail: "Idra femmina · mag 3,11",
		proper: false
	},
	{
		x: .29813,
		y: .03473,
		z: .95389,
		mag: 5.26,
		bv: .13,
		name: "HD 94367",
		detail: "Carena · mag 5,26",
		proper: false
	},
	{
		x: -.43581,
		y: .89675,
		z: .07693,
		mag: 3.79,
		bv: 1.04,
		name: "Praecipua",
		detail: "46 Leone Minore · mag 3,79",
		proper: true
	},
	{
		x: -.0187,
		y: .57035,
		z: .82119,
		mag: 5.23,
		bv: .48,
		name: "b3 Idra femmina",
		detail: "Idra femmina · mag 5,23",
		proper: false
	},
	{
		x: .31202,
		y: .01046,
		z: .95002,
		mag: 3.78,
		bv: .945,
		name: "u Carena",
		detail: "Carena · mag 3,78",
		proper: false
	},
	{
		x: -.5085,
		y: .82065,
		z: -.26071,
		mag: 5.12,
		bv: 1.355,
		name: "44 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,12",
		proper: false
	},
	{
		x: -.47371,
		y: .87759,
		z: -.0737,
		mag: 4.66,
		bv: -.039,
		name: "ω Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,66",
		proper: false
	},
	{
		x: -.3746,
		y: .8981,
		z: .23041,
		mag: 4.3,
		bv: .016,
		name: "54 Leone",
		detail: "Leone · mag 4,30",
		proper: false
	},
	{
		x: -.42466,
		y: .90124,
		z: .08619,
		mag: 5.02,
		bv: 1.101,
		name: "46 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,02",
		proper: false
	},
	{
		x: .14437,
		y: .34715,
		z: .92663,
		mag: 4.6,
		bv: 1.006,
		name: "ι Macchina Pneumatica",
		detail: "Macchina Pneumatica · mag 4,60",
		proper: false
	},
	{
		x: -.44703,
		y: .89391,
		z: -.03297,
		mag: 5.03,
		bv: .624,
		name: "Chalawan",
		detail: "47 Orsa Maggiore · mag 5,03",
		proper: true
	},
	{
		x: -.0132,
		y: .60349,
		z: .79726,
		mag: 4.08,
		bv: 1.079,
		name: "Alkes",
		detail: "α Coppa · mag 4,08",
		proper: true
	},
	{
		x: .19744,
		y: .27641,
		z: .94054,
		mag: 4.37,
		bv: .116,
		name: "i Vela",
		detail: "Vela · mag 4,37",
		proper: false
	},
	{
		x: -.20114,
		y: .81505,
		z: .54335,
		mag: 4.84,
		bv: 1.144,
		name: "d Leone",
		detail: "Leone · mag 4,84",
		proper: false
	},
	{
		x: -.22072,
		y: .83219,
		z: .50867,
		mag: 4.98,
		bv: .166,
		name: "c Leone",
		detail: "Leone · mag 4,98",
		proper: false
	},
	{
		x: -.43752,
		y: .8991,
		z: -.0141,
		mag: 5.06,
		bv: .255,
		name: "49 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,06",
		proper: false
	},
	{
		x: -.14508,
		y: .76962,
		z: .62181,
		mag: 4.73,
		bv: 1.593,
		name: "p2 Leone",
		detail: "Leone · mag 4,73",
		proper: false
	},
	{
		x: -.49491,
		y: .81719,
		z: -.29542,
		mag: 2.34,
		bv: .033,
		name: "Merak",
		detail: "β Orsa Maggiore · mag 2,34",
		proper: true
	},
	{
		x: -.32115,
		y: .89976,
		z: .29545,
		mag: 4.42,
		bv: .053,
		name: "b Leone",
		detail: "Leone · mag 4,42",
		proper: false
	},
	{
		x: -.5015,
		y: .77724,
		z: -.37999,
		mag: 1.81,
		bv: 1.061,
		name: "Dubhe",
		detail: "α Orsa Maggiore · mag 1,81",
		proper: true
	},
	{
		x: -.21475,
		y: .84746,
		z: .48548,
		mag: 4.62,
		bv: .332,
		name: "χ Leone",
		detail: "Leone · mag 4,62",
		proper: false
	},
	{
		x: .08585,
		y: .49855,
		z: .8626,
		mag: 4.92,
		bv: .369,
		name: "χ1 Idra femmina",
		detail: "Idra femmina · mag 4,92",
		proper: false
	},
	{
		x: .36012,
		y: -.03459,
		z: .93226,
		mag: 4.62,
		bv: .988,
		name: "z Carena",
		detail: "Carena · mag 4,62",
		proper: false
	},
	{
		x: .22053,
		y: .27938,
		z: .93451,
		mag: 5.15,
		bv: .029,
		name: "HD 96616",
		detail: "Centauro · mag 5,15",
		proper: false
	},
	{
		x: .36074,
		y: -.02532,
		z: .93232,
		mag: 5.11,
		bv: .195,
		name: "z2 Carena",
		detail: "Carena · mag 5,11",
		proper: false
	},
	{
		x: .34205,
		y: .02254,
		z: .93941,
		mag: 3.93,
		bv: 1.225,
		name: "x Carena",
		detail: "Carena · mag 3,93",
		proper: false
	},
	{
		x: -.43665,
		y: .89283,
		z: -.11046,
		mag: 3,
		bv: 1.144,
		name: "ψ Orsa Maggiore",
		detail: "Orsa Maggiore · mag 3,00",
		proper: false
	},
	{
		x: .0686,
		y: .56688,
		z: .82094,
		mag: 4.46,
		bv: .025,
		name: "Al Sharasif",
		detail: "β Coppa · mag 4,46",
		proper: true
	},
	{
		x: .35813,
		y: .00421,
		z: .93366,
		mag: 4.59,
		bv: .541,
		name: "y Carena",
		detail: "Carena · mag 4,59",
		proper: false
	},
	{
		x: .381,
		y: -.05805,
		z: .92275,
		mag: 5.22,
		bv: -.082,
		name: "HIP 54767",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.28197,
		y: .91932,
		z: .27448,
		mag: 2.56,
		bv: .128,
		name: "Zosma",
		detail: "δ Leone · mag 2,56",
		proper: true
	},
	{
		x: -.24387,
		y: .90322,
		z: .35315,
		mag: 3.33,
		bv: -.003,
		name: "Chertan",
		detail: "θ Leone · mag 3,33",
		proper: true
	},
	{
		x: -.29632,
		y: .92641,
		z: .23231,
		mag: 4.56,
		bv: 1.657,
		name: "Zubrah",
		detail: "72 Leone · mag 4,56",
		proper: true
	},
	{
		x: -.22163,
		y: .89683,
		z: .38286,
		mag: 5.31,
		bv: 1.189,
		name: "n Leone",
		detail: "Leone · mag 5,31",
		proper: false
	},
	{
		x: -.07925,
		y: .78427,
		z: .61534,
		mag: 4.45,
		bv: .21,
		name: "φ Leone",
		detail: "Leone · mag 4,45",
		proper: false
	},
	{
		x: -.12481,
		y: .83144,
		z: .54142,
		mag: 5.18,
		bv: 1.511,
		name: "75 Leone",
		detail: "Leone · mag 5,18",
		proper: false
	},
	{
		x: -.3421,
		y: .93512,
		z: .09232,
		mag: 3.79,
		bv: .606,
		name: "Alula Australis",
		detail: "ξ Orsa Maggiore · mag 3,79",
		proper: true
	},
	{
		x: -.35081,
		y: .93409,
		z: .06646,
		mag: 3.49,
		bv: 1.4,
		name: "Alula Borealis",
		detail: "ν Orsa Maggiore · mag 3,49",
		proper: true
	},
	{
		x: -.37844,
		y: .92546,
		z: -.01756,
		mag: 4.76,
		bv: .113,
		name: "55 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,76",
		proper: false
	},
	{
		x: .0266,
		y: .67568,
		z: .73671,
		mag: 3.56,
		bv: 1.112,
		name: "Labr",
		detail: "δ Coppa · mag 3,56",
		proper: true
	},
	{
		x: .33937,
		y: .10603,
		z: .93466,
		mag: 3.9,
		bv: -.157,
		name: "π Centauro",
		detail: "Centauro · mag 3,90",
		proper: false
	},
	{
		x: -.14362,
		y: .86514,
		z: .48052,
		mag: 4.05,
		bv: -.058,
		name: "σ Leone",
		detail: "Leone · mag 4,05",
		proper: false
	},
	{
		x: -.39599,
		y: .91187,
		z: -.10809,
		mag: 4.99,
		bv: .998,
		name: "56 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,99",
		proper: false
	},
	{
		x: .21654,
		y: .39684,
		z: .89198,
		mag: 5,
		bv: 1.464,
		name: "HIP 55588",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: .40241,
		y: -.06383,
		z: .91323,
		mag: 5.09,
		bv: -.061,
		name: "HIP 55597",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: .07543,
		y: .63435,
		z: .76935,
		mag: 5.08,
		bv: .439,
		name: "λ Coppa",
		detail: "Coppa · mag 5,08",
		proper: false
	},
	{
		x: -.16975,
		y: .89531,
		z: .41184,
		mag: 4,
		bv: .423,
		name: "ι Leone",
		detail: "Leone · mag 4,00",
		proper: false
	},
	{
		x: .01247,
		y: .72616,
		z: .68741,
		mag: 4.81,
		bv: 1.556,
		name: "ε Coppa",
		detail: "Coppa · mag 4,81",
		proper: false
	},
	{
		x: .07163,
		y: .64966,
		z: .75684,
		mag: 4.06,
		bv: .216,
		name: "γ Coppa",
		detail: "Coppa · mag 4,06",
		proper: false
	},
	{
		x: .22277,
		y: .40101,
		z: .88857,
		mag: 5.21,
		bv: .979,
		name: "HIP 55756",
		detail: "mag 5,21",
		proper: false
	},
	{
		x: .40146,
		y: -.04621,
		z: .91471,
		mag: 5.18,
		bv: .495,
		name: "HD 99453",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: .38858,
		y: .00153,
		z: .92141,
		mag: 5.22,
		bv: -.077,
		name: "HIP 55831",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: -.09148,
		y: .85326,
		z: .5134,
		mag: 4.95,
		bv: 1,
		name: "τ Leone",
		detail: "Leone · mag 4,95",
		proper: false
	},
	{
		x: .28017,
		y: .30296,
		z: .91089,
		mag: 5.14,
		bv: -.028,
		name: "HIP 56000",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: -.35553,
		y: .9334,
		z: -.04852,
		mag: 5.3,
		bv: .019,
		name: "57 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,30",
		proper: false
	},
	{
		x: -.03297,
		y: .80977,
		z: .58581,
		mag: 4.77,
		bv: 1.529,
		name: "e Leone",
		detail: "Leone · mag 4,77",
		proper: false
	},
	{
		x: -.47184,
		y: .72181,
		z: -.50631,
		mag: 3.82,
		bv: 1.613,
		name: "Giausar",
		detail: "λ Dragone · mag 3,82",
		proper: true
	},
	{
		x: .38976,
		y: .03276,
		z: .92033,
		mag: 5.07,
		bv: 1.026,
		name: "ο1 Centauro",
		detail: "Centauro · mag 5,07",
		proper: false
	},
	{
		x: .39022,
		y: .03157,
		z: .92018,
		mag: 5.12,
		bv: .432,
		name: "ο2 Centauro",
		detail: "Centauro · mag 5,12",
		proper: false
	},
	{
		x: .19206,
		y: .50769,
		z: .83986,
		mag: 4.93,
		bv: .54,
		name: "17 Coppa",
		detail: "Coppa · mag 4,93",
		proper: false
	},
	{
		x: .20826,
		y: .48241,
		z: .85083,
		mag: 5.13,
		bv: 1.581,
		name: "HIP 56332",
		detail: "mag 5,13",
		proper: false
	},
	{
		x: .21447,
		y: .47141,
		z: .85544,
		mag: 3.54,
		bv: .947,
		name: "ξ Idra femmina",
		detail: "Idra femmina · mag 3,54",
		proper: false
	},
	{
		x: .36853,
		y: .12085,
		z: .92173,
		mag: 4.62,
		bv: -.077,
		name: "A Centauro",
		detail: "Centauro · mag 4,62",
		proper: false
	},
	{
		x: .41414,
		y: -.02439,
		z: .90989,
		mag: 3.11,
		bv: -.044,
		name: "λ Centauro",
		detail: "Centauro · mag 3,11",
		proper: false
	},
	{
		x: .33259,
		y: .23044,
		z: .91448,
		mag: 5.26,
		bv: .257,
		name: "C2 Centauro",
		detail: "Centauro · mag 5,26",
		proper: false
	},
	{
		x: -.46557,
		y: .72402,
		z: -.50896,
		mag: 5.19,
		bv: .974,
		name: "2 Dragone",
		detail: "Dragone · mag 5,19",
		proper: false
	},
	{
		x: .04875,
		y: .75312,
		z: .65607,
		mag: 4.7,
		bv: -.073,
		name: "θ Coppa",
		detail: "Coppa · mag 4,70",
		proper: false
	},
	{
		x: -.02614,
		y: .83675,
		z: .54696,
		mag: 4.3,
		bv: .983,
		name: "υ Leone",
		detail: "Leone · mag 4,30",
		proper: false
	},
	{
		x: .40853,
		y: .00537,
		z: .91273,
		mag: 5.14,
		bv: 1.105,
		name: "HIP 56656",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: .41299,
		y: -.00308,
		z: .91073,
		mag: 5.15,
		bv: -.04,
		name: "HIP 56754",
		detail: "mag 5,15",
		proper: false
	},
	{
		x: -.09552,
		y: .90126,
		z: .42261,
		mag: 5.24,
		bv: 1.499,
		name: "ω Vergine",
		detail: "Vergine · mag 5,24",
		proper: false
	},
	{
		x: .43017,
		y: -.06218,
		z: .9006,
		mag: 5.01,
		bv: .804,
		name: "HD 101379",
		detail: "Mosca · mag 5,01",
		proper: false
	},
	{
		x: .25878,
		y: .4364,
		z: .86174,
		mag: 4.7,
		bv: -.07,
		name: "ο Idra femmina",
		detail: "Idra femmina · mag 4,70",
		proper: false
	},
	{
		x: -.19336,
		y: .95585,
		z: .22129,
		mag: 5.26,
		bv: .984,
		name: "92 Leone",
		detail: "Leone · mag 5,26",
		proper: false
	},
	{
		x: .41911,
		y: -.00594,
		z: .90792,
		mag: 4.93,
		bv: 1.111,
		name: "HIP 56986",
		detail: "mag 4,93",
		proper: false
	},
	{
		x: -.2864,
		y: .95795,
		z: .01777,
		mag: 5.31,
		bv: .723,
		name: "61 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,31",
		proper: false
	},
	{
		x: .24744,
		y: .47117,
		z: .84663,
		mag: 5.2,
		bv: 1.475,
		name: "HIP 57047",
		detail: "mag 5,20",
		proper: false
	},
	{
		x: -.44927,
		y: .75454,
		z: -.47836,
		mag: 5.32,
		bv: 1.267,
		name: "3 Dragone",
		detail: "Dragone · mag 5,32",
		proper: false
	},
	{
		x: .42542,
		y: -.01125,
		z: .90493,
		mag: 5,
		bv: .784,
		name: "HD 101947",
		detail: "Centauro · mag 5,00",
		proper: false
	},
	{
		x: .14922,
		y: .66567,
		z: .73117,
		mag: 4.71,
		bv: .958,
		name: "ζ Coppa",
		detail: "Coppa · mag 4,71",
		proper: false
	},
	{
		x: -.07076,
		y: .90982,
		z: .40893,
		mag: 4.84,
		bv: .174,
		name: "ξ Vergine",
		detail: "Vergine · mag 4,84",
		proper: false
	},
	{
		x: .44445,
		y: -.08167,
		z: .89207,
		mag: 3.63,
		bv: .16,
		name: "λ Mosca",
		detail: "Mosca · mag 3,63",
		proper: false
	},
	{
		x: .34652,
		y: .27003,
		z: .89834,
		mag: 5.28,
		bv: -.118,
		name: "HIP 57371",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: -.05411,
		y: .90011,
		z: .43228,
		mag: 4.04,
		bv: 1.501,
		name: "ν Vergine",
		detail: "Vergine · mag 4,04",
		proper: false
	},
	{
		x: -.35721,
		y: .91157,
		z: -.20358,
		mag: 3.69,
		bv: 1.181,
		name: "Taiyangshou",
		detail: "χ Orsa Maggiore · mag 3,69",
		proper: true
	},
	{
		x: .42554,
		y: .01245,
		z: .90485,
		mag: 4.11,
		bv: .895,
		name: "HIP 57439",
		detail: "mag 4,11",
		proper: false
	},
	{
		x: .31684,
		y: .35364,
		z: .88009,
		mag: 4.89,
		bv: .664,
		name: "HD 102365",
		detail: "mag 4,89",
		proper: false
	},
	{
		x: -.39654,
		y: .85904,
		z: -.32373,
		mag: 5.27,
		bv: 1.276,
		name: "HIP 57477",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: -.06072,
		y: .91257,
		z: .40439,
		mag: 5.31,
		bv: .038,
		name: "A1 Vergine",
		detail: "Vergine · mag 5,31",
		proper: false
	},
	{
		x: -.15874,
		y: .96093,
		z: .22673,
		mag: 4.5,
		bv: .547,
		name: "93 Leone",
		detail: "Leone · mag 4,50",
		proper: false
	},
	{
		x: .4487,
		y: -.082,
		z: .88991,
		mag: 4.75,
		bv: 1.522,
		name: "μ Mosca",
		detail: "Mosca · mag 4,75",
		proper: false
	},
	{
		x: .22845,
		y: .55996,
		z: .7964,
		mag: 5.1,
		bv: 1.594,
		name: "HD 102620",
		detail: "Idra femmina · mag 5,10",
		proper: false
	},
	{
		x: -.10902,
		y: .94438,
		z: .31027,
		mag: 2.14,
		bv: .09,
		name: "Denebola",
		detail: "β Leone · mag 2,14",
		proper: true
	},
	{
		x: .44094,
		y: -.03018,
		z: .89703,
		mag: 4.3,
		bv: -.149,
		name: "j Centauro",
		detail: "Centauro · mag 4,30",
		proper: false
	},
	{
		x: .46089,
		y: -.13877,
		z: .87654,
		mag: 4.98,
		bv: 1.36,
		name: "HIP 57696",
		detail: "mag 4,98",
		proper: false
	},
	{
		x: .00447,
		y: .87255,
		z: .48851,
		mag: 3.59,
		bv: .518,
		name: "Zavijava",
		detail: "β Vergine · mag 3,59",
		proper: true
	},
	{
		x: .35803,
		y: .28242,
		z: .88998,
		mag: 4.47,
		bv: 1.283,
		name: "B Centauro",
		detail: "Centauro · mag 4,47",
		proper: false
	},
	{
		x: .44922,
		y: -.05327,
		z: .89183,
		mag: 4.89,
		bv: -.123,
		name: "HIP 57851",
		detail: "mag 4,89",
		proper: false
	},
	{
		x: .29301,
		y: .4603,
		z: .83802,
		mag: 4.29,
		bv: -.1,
		name: "β Idra femmina",
		detail: "Idra femmina · mag 4,29",
		proper: false
	},
	{
		x: -.37135,
		y: .87786,
		z: -.30244,
		mag: 2.41,
		bv: .044,
		name: "Phecda",
		detail: "γ Orsa Maggiore · mag 2,41",
		proper: true
	},
	{
		x: .24119,
		y: .57957,
		z: .77841,
		mag: 5.26,
		bv: .883,
		name: "HIP 58082",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: .1806,
		y: .6912,
		z: .69973,
		mag: 5.17,
		bv: -.022,
		name: "η Coppa",
		detail: "Coppa · mag 5,17",
		proper: false
	},
	{
		x: .48456,
		y: -.26934,
		z: .83226,
		mag: 4.88,
		bv: -.054,
		name: "ε Camaleonte",
		detail: "Camaleonte · mag 4,88",
		proper: false
	},
	{
		x: .21751,
		y: .66438,
		z: .71505,
		mag: 5.28,
		bv: -.192,
		name: "31 Corvo",
		detail: "Corvo · mag 5,28",
		proper: false
	},
	{
		x: .00209,
		y: .91516,
		z: .40309,
		mag: 4.65,
		bv: .122,
		name: "π Vergine",
		detail: "Vergine · mag 4,65",
		proper: false
	},
	{
		x: -.28427,
		y: .94665,
		z: -.15179,
		mag: 5.22,
		bv: .283,
		name: "67 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 5,22",
		proper: false
	},
	{
		x: .46211,
		y: -.01658,
		z: .88667,
		mag: 4.32,
		bv: .28,
		name: "θ1 Croce del Sud",
		detail: "Croce del Sud · mag 4,32",
		proper: false
	},
	{
		x: .37725,
		y: .33497,
		z: .86341,
		mag: 5.15,
		bv: .417,
		name: "HD 104731",
		detail: "mag 5,15",
		proper: false
	},
	{
		x: .46393,
		y: -.01359,
		z: .88577,
		mag: 4.72,
		bv: -.081,
		name: "θ2 Croce del Sud",
		detail: "Croce del Sud · mag 4,72",
		proper: false
	},
	{
		x: .47644,
		y: -.10193,
		z: .87328,
		mag: 5.34,
		bv: -.012,
		name: "HIP 58884",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: .48754,
		y: -.24023,
		z: .8394,
		mag: 5.04,
		bv: 1.491,
		name: "κ Camaleonte",
		detail: "Camaleonte · mag 5,04",
		proper: false
	},
	{
		x: 38e-5,
		y: .93107,
		z: .36485,
		mag: 4.12,
		bv: .967,
		name: "ο Vergine",
		detail: "Vergine · mag 4,12",
		proper: false
	},
	{
		x: .47187,
		y: -.03759,
		z: .88087,
		mag: 4.14,
		bv: .353,
		name: "η Croce del Sud",
		detail: "Croce del Sud · mag 4,14",
		proper: false
	},
	{
		x: .48953,
		y: -.22042,
		z: .84367,
		mag: 5.17,
		bv: 1.278,
		name: "HIP 59151",
		detail: "mag 5,17",
		proper: false
	},
	{
		x: .4285,
		y: .20144,
		z: .8808,
		mag: 4.46,
		bv: -.163,
		name: "HD 105382",
		detail: "Centauro · mag 4,46",
		proper: false
	},
	{
		x: .42038,
		y: .23455,
		z: .87651,
		mag: 5.34,
		bv: -.01,
		name: "E Centauro",
		detail: "Centauro · mag 5,34",
		proper: false
	},
	{
		x: .42941,
		y: .20054,
		z: .88056,
		mag: 2.58,
		bv: -.128,
		name: "δ Centauro",
		detail: "Centauro · mag 2,58",
		proper: false
	},
	{
		x: .28133,
		y: .60342,
		z: .74615,
		mag: 4.02,
		bv: .334,
		name: "Alchiba",
		detail: "α Corvo · mag 4,02",
		proper: true
	},
	{
		x: .2723,
		y: .63284,
		z: .72482,
		mag: 3.02,
		bv: 1.326,
		name: "Minkar",
		detail: "ε Corvo · mag 3,02",
		proper: true
	},
	{
		x: .44374,
		y: .17412,
		z: .87908,
		mag: 3.97,
		bv: -.156,
		name: "ρ Centauro",
		detail: "Centauro · mag 3,97",
		proper: false
	},
	{
		x: -.45086,
		y: .63345,
		z: -.62886,
		mag: 5.14,
		bv: .358,
		name: "HD 106112",
		detail: "Giraffa · mag 5,14",
		proper: false
	},
	{
		x: .422,
		y: .28659,
		z: .86011,
		mag: 5.31,
		bv: 1.4,
		name: "D Centauro",
		detail: "Centauro · mag 5,31",
		proper: false
	},
	{
		x: .47196,
		y: .06612,
		z: .87914,
		mag: 2.79,
		bv: -.193,
		name: "Imai",
		detail: "δ Croce del Sud · mag 2,79",
		proper: true
	},
	{
		x: -.34417,
		y: .86089,
		z: -.37472,
		mag: 3.32,
		bv: .077,
		name: "Megrez",
		detail: "δ Orsa Maggiore · mag 3,32",
		proper: true
	},
	{
		x: .25542,
		y: .70093,
		z: .66593,
		mag: 2.58,
		bv: -.107,
		name: "Gienah",
		detail: "γ Corvo · mag 2,58",
		proper: true
	},
	{
		x: -.01261,
		y: .96705,
		z: .25428,
		mag: 5.09,
		bv: .068,
		name: "6 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 5,09",
		proper: false
	},
	{
		x: -.08947,
		y: .98894,
		z: .1183,
		mag: 4.93,
		bv: .957,
		name: "7 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,93",
		proper: false
	},
	{
		x: -.16542,
		y: .98599,
		z: -.0213,
		mag: 4.99,
		bv: 1.14,
		name: "HIP 59856",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: .49411,
		y: -.09234,
		z: .86448,
		mag: 4.06,
		bv: 1.603,
		name: "ε Mosca",
		detail: "Mosca · mag 4,06",
		proper: false
	},
	{
		x: .49854,
		y: -.28474,
		z: .81877,
		mag: 4.24,
		bv: -.123,
		name: "β Camaleonte",
		detail: "Camaleonte · mag 4,24",
		proper: false
	},
	{
		x: .48962,
		y: -.02378,
		z: .87161,
		mag: 4.06,
		bv: -.168,
		name: "ζ Croce del Sud",
		detail: "Croce del Sud · mag 4,06",
		proper: false
	},
	{
		x: .46961,
		y: .1294,
		z: .87334,
		mag: 5.01,
		bv: 1.6,
		name: "F Centauro",
		detail: "Centauro · mag 5,01",
		proper: false
	},
	{
		x: -.2797,
		y: .92257,
		z: -.26577,
		mag: 5.28,
		bv: 1.623,
		name: "3 Cani da Caccia",
		detail: "Cani da Caccia · mag 5,28",
		proper: false
	},
	{
		x: .13606,
		y: .87621,
		z: .46232,
		mag: 3.89,
		bv: .026,
		name: "Zaniah",
		detail: "η Vergine · mag 3,89",
		proper: true
	},
	{
		x: .10393,
		y: .90669,
		z: .4088,
		mag: 4.97,
		bv: 1.172,
		name: "c Vergine",
		detail: "Vergine · mag 4,97",
		proper: false
	},
	{
		x: .30598,
		y: .64405,
		z: .70113,
		mag: 5.2,
		bv: -.09,
		name: "ζ Corvo",
		detail: "Corvo · mag 5,20",
		proper: false
	},
	{
		x: -.02074,
		y: .97915,
		z: .20206,
		mag: 4.72,
		bv: 1.01,
		name: "11 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,72",
		proper: false
	},
	{
		x: .24404,
		y: .75055,
		z: .6141,
		mag: 5.14,
		bv: 1.048,
		name: "HIP 60221",
		detail: "mag 5,14",
		proper: false
	},
	{
		x: .48783,
		y: .03933,
		z: .87205,
		mag: 3.59,
		bv: 1.389,
		name: "Ginan",
		detail: "ε Croce del Sud · mag 3,59",
		proper: true
	},
	{
		x: .50014,
		y: -.08385,
		z: .86187,
		mag: 5.15,
		bv: .195,
		name: "ζ2 Mosca",
		detail: "Mosca · mag 5,15",
		proper: false
	},
	{
		x: -.08472,
		y: .99338,
		z: .07764,
		mag: 4.78,
		bv: .515,
		name: "12 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,78",
		proper: false
	},
	{
		x: .39799,
		y: .45577,
		z: .79616,
		mag: 5.32,
		bv: -.066,
		name: "x1 Centauro",
		detail: "Centauro · mag 5,32",
		proper: false
	},
	{
		x: -.28824,
		y: .90648,
		z: -.30855,
		mag: 4.76,
		bv: .877,
		name: "5 Cani da Caccia",
		detail: "Cani da Caccia · mag 4,76",
		proper: false
	},
	{
		x: -.0808,
		y: .99425,
		z: .07033,
		mag: 5.17,
		bv: .082,
		name: "13 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 5,17",
		proper: false
	},
	{
		x: -.18587,
		y: .97424,
		z: -.12772,
		mag: 5.01,
		bv: .955,
		name: "6 Cani da Caccia",
		detail: "Cani da Caccia · mag 5,01",
		proper: false
	},
	{
		x: -.08398,
		y: .99528,
		z: .04861,
		mag: 4.92,
		bv: .277,
		name: "14 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,92",
		proper: false
	},
	{
		x: .47523,
		y: .19475,
		z: .85804,
		mag: 4.82,
		bv: -.141,
		name: "G Centauro",
		detail: "Centauro · mag 4,82",
		proper: false
	},
	{
		x: .5019,
		y: -.00633,
		z: .8649,
		mag: .77,
		bv: -.243,
		name: "Acrux",
		detail: "α1 Croce del Sud · mag 0,77",
		proper: true
	},
	{
		x: -.09094,
		y: .99533,
		z: .03246,
		mag: 4.35,
		bv: 1.128,
		name: "Al Dafirah",
		detail: "γ Chioma di Berenice · mag 4,35",
		proper: true
	},
	{
		x: -.07814,
		y: .99547,
		z: .05415,
		mag: 4.98,
		bv: .088,
		name: "16 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,98",
		proper: false
	},
	{
		x: .47492,
		y: .21588,
		z: .85314,
		mag: 3.91,
		bv: -.192,
		name: "σ Centauro",
		detail: "Centauro · mag 3,91",
		proper: false
	},
	{
		x: -.06363,
		y: .99591,
		z: .06413,
		mag: 5.29,
		bv: -.056,
		name: "17 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 5,29",
		proper: false
	},
	{
		x: .29852,
		y: .71987,
		z: .62664,
		mag: 2.94,
		bv: -.012,
		name: "Algorab",
		detail: "δ Corvo · mag 2,94",
		proper: true
	},
	{
		x: -.39236,
		y: .74093,
		z: -.54506,
		mag: 5.01,
		bv: 1.621,
		name: "4 Dragone",
		detail: "Dragone · mag 5,01",
		proper: false
	},
	{
		x: .50011,
		y: .09845,
		z: .86035,
		mag: 1.59,
		bv: 1.6,
		name: "Gacrux",
		detail: "γ Croce del Sud · mag 1,59",
		proper: true
	},
	{
		x: .30413,
		y: .72443,
		z: .61863,
		mag: 4.3,
		bv: .388,
		name: "η Corvo",
		detail: "Corvo · mag 4,30",
		proper: false
	},
	{
		x: .515,
		y: -.16187,
		z: .84177,
		mag: 3.84,
		bv: -.157,
		name: "γ Mosca",
		detail: "Mosca · mag 3,84",
		proper: false
	},
	{
		x: -.39135,
		y: .73445,
		z: -.55447,
		mag: 3.85,
		bv: -.116,
		name: "κ Dragone",
		detail: "Dragone · mag 3,85",
		proper: false
	},
	{
		x: -.18278,
		y: .96733,
		z: -.17569,
		mag: 4.24,
		bv: .588,
		name: "Chara",
		detail: "β Cani da Caccia · mag 4,24",
		proper: true
	},
	{
		x: .36175,
		y: .63348,
		z: .68399,
		mag: 2.65,
		bv: .893,
		name: "Kraz",
		detail: "β Corvo · mag 2,65",
		proper: true
	},
	{
		x: -.39113,
		y: .73181,
		z: -.55809,
		mag: 4.95,
		bv: 1.312,
		name: "6 Dragone",
		detail: "Dragone · mag 4,95",
		proper: false
	},
	{
		x: -.01397,
		y: .99477,
		z: .1012,
		mag: 4.8,
		bv: .012,
		name: "23 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,80",
		proper: false
	},
	{
		x: .02548,
		y: .98622,
		z: .16346,
		mag: 5.03,
		bv: 1.152,
		name: "24 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 5,03",
		proper: false
	},
	{
		x: .46086,
		y: .3706,
		z: .80639,
		mag: 5.12,
		bv: .224,
		name: "HIP 61468",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: .52165,
		y: -.10972,
		z: .84608,
		mag: 2.69,
		bv: -.176,
		name: "α Mosca",
		detail: "Mosca · mag 2,69",
		proper: false
	},
	{
		x: .49315,
		y: .24646,
		z: .8343,
		mag: 3.85,
		bv: .049,
		name: "τ Centauro",
		detail: "Centauro · mag 3,85",
		proper: false
	},
	{
		x: .26824,
		y: .81666,
		z: .51099,
		mag: 4.66,
		bv: 1.24,
		name: "χ Vergine",
		detail: "Vergine · mag 4,66",
		proper: false
	},
	{
		x: .46818,
		y: .38801,
		z: .79389,
		mag: 4.63,
		bv: -.082,
		name: "l Centauro",
		detail: "Centauro · mag 4,63",
		proper: false
	},
	{
		x: .31396,
		y: .76359,
		z: .56423,
		mag: 5.17,
		bv: .432,
		name: "HD 110317",
		detail: "Corvo · mag 5,17",
		proper: false
	},
	{
		x: .5037,
		y: .23988,
		z: .82991,
		mag: 2.2,
		bv: -.023,
		name: "Muhlifain",
		detail: "γ Centauro · mag 2,20",
		proper: true
	},
	{
		x: .22404,
		y: .87736,
		z: .42432,
		mag: 2.74,
		bv: .368,
		name: "Porrima",
		detail: "γ Vergine · mag 2,74",
		proper: true
	},
	{
		x: .12334,
		y: .95609,
		z: .26586,
		mag: 4.88,
		bv: .076,
		name: "ρ Vergine",
		detail: "Vergine · mag 4,88",
		proper: false
	},
	{
		x: .52515,
		y: .05519,
		z: .84922,
		mag: 4.91,
		bv: -.044,
		name: "39 Croce del Sud",
		detail: "Croce del Sud · mag 4,91",
		proper: false
	},
	{
		x: .50591,
		y: .24248,
		z: .82781,
		mag: 4.66,
		bv: 1.075,
		name: "w Centauro",
		detail: "Centauro · mag 4,66",
		proper: false
	},
	{
		x: .52929,
		y: -.00355,
		z: .84843,
		mag: 5.27,
		bv: .195,
		name: "HD 110432",
		detail: "Croce del Sud · mag 5,27",
		proper: false
	},
	{
		x: .15987,
		y: .94262,
		z: .29311,
		mag: 5.22,
		bv: .322,
		name: "d2 Vergine",
		detail: "Vergine · mag 5,22",
		proper: false
	},
	{
		x: .533,
		y: .03285,
		z: .84548,
		mag: 4.69,
		bv: 1.049,
		name: "ι Croce del Sud",
		detail: "Croce del Sud · mag 4,69",
		proper: false
	},
	{
		x: .53431,
		y: -.09135,
		z: .84034,
		mag: 3.04,
		bv: -.178,
		name: "β Mosca",
		detail: "Mosca · mag 3,04",
		proper: false
	},
	{
		x: .53001,
		y: .11105,
		z: .84069,
		mag: 4.62,
		bv: -.15,
		name: "HIP 62327",
		detail: "mag 4,62",
		proper: false
	},
	{
		x: .08267,
		y: .98291,
		z: .16449,
		mag: 5.12,
		bv: 1.346,
		name: "27 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 5,12",
		proper: false
	},
	{
		x: .53592,
		y: .05547,
		z: .84245,
		mag: 1.25,
		bv: -.238,
		name: "Mimosa",
		detail: "β Croce del Sud · mag 1,25",
		proper: true
	},
	{
		x: .47378,
		y: .48286,
		z: .73646,
		mag: 4.9,
		bv: -.031,
		name: "p Centauro",
		detail: "Centauro · mag 4,90",
		proper: false
	},
	{
		x: -.00307,
		y: .99997,
		z: -.00659,
		mag: 4.93,
		bv: .681,
		name: "Polaris Galacticus Borealis",
		detail: "31 Chioma di Berenice · mag 4,93",
		proper: true
	},
	{
		x: .53169,
		y: .24069,
		z: .81202,
		mag: 4.33,
		bv: 1.344,
		name: "e Centauro",
		detail: "Centauro · mag 4,33",
		proper: false
	},
	{
		x: .06206,
		y: .99471,
		z: .08191,
		mag: 4.89,
		bv: .904,
		name: "35 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,89",
		proper: false
	},
	{
		x: .50714,
		y: .38577,
		z: .77071,
		mag: 4.25,
		bv: .224,
		name: "n Centauro",
		detail: "Centauro · mag 4,25",
		proper: false
	},
	{
		x: -.25686,
		y: .87601,
		z: -.4082,
		mag: 1.76,
		bv: -.022,
		name: "Alioth",
		detail: "ε Orsa Maggiore · mag 1,76",
		proper: true
	},
	{
		x: .33515,
		y: .80205,
		z: .49436,
		mag: 4.77,
		bv: 1.59,
		name: "ψ Vergine",
		detail: "Vergine · mag 4,77",
		proper: false
	},
	{
		x: .54721,
		y: .09917,
		z: .8311,
		mag: 4.03,
		bv: -.18,
		name: "μ1 Croce del Sud",
		detail: "Croce del Sud · mag 4,03",
		proper: false
	},
	{
		x: .54725,
		y: .09933,
		z: .83106,
		mag: 5.08,
		bv: -.089,
		name: "μ2 Croce del Sud",
		detail: "Croce del Sud · mag 5,08",
		proper: false
	},
	{
		x: .54852,
		y: .06492,
		z: .83361,
		mag: 4.62,
		bv: -.153,
		name: "λ Croce del Sud",
		detail: "Croce del Sud · mag 4,62",
		proper: false
	},
	{
		x: -.33088,
		y: .78461,
		z: -.52432,
		mag: 5.23,
		bv: .303,
		name: "Taiyi",
		detail: "8 Dragone · mag 5,23",
		proper: true
	},
	{
		x: .23397,
		y: .9153,
		z: .32785,
		mag: 3.39,
		bv: 1.571,
		name: "Minelauva",
		detail: "δ Vergine · mag 3,39",
		proper: true
	},
	{
		x: .54965,
		y: .10506,
		z: .82877,
		mag: 5.34,
		bv: .01,
		name: "HIP 63117",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.09235,
		y: .98085,
		z: -.17148,
		mag: 2.89,
		bv: -.115,
		name: "Cor Caroli",
		detail: "α2 Cani da Caccia · mag 2,89",
		proper: true
	},
	{
		x: .54528,
		y: .20216,
		z: .81351,
		mag: 5.17,
		bv: -.066,
		name: "H Centauro",
		detail: "Centauro · mag 5,17",
		proper: false
	},
	{
		x: .1178,
		y: .98519,
		z: .12455,
		mag: 4.76,
		bv: 1.568,
		name: "36 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,76",
		proper: false
	},
	{
		x: -.00704,
		y: .9974,
		z: -.07178,
		mag: 4.88,
		bv: 1.165,
		name: "37 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,88",
		proper: false
	},
	{
		x: -.24681,
		y: .87219,
		z: -.42233,
		mag: 4.93,
		bv: .368,
		name: "78 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,93",
		proper: false
	},
	{
		x: .18972,
		y: .95949,
		z: .20831,
		mag: 2.85,
		bv: .934,
		name: "Vindemiatrix",
		detail: "ε Vergine · mag 2,85",
		proper: true
	},
	{
		x: .54988,
		y: -.15118,
		z: .82145,
		mag: 3.61,
		bv: 1.19,
		name: "δ Mosca",
		detail: "Mosca · mag 3,61",
		proper: false
	},
	{
		x: .55753,
		y: .23,
		z: .79766,
		mag: 4.83,
		bv: .029,
		name: "ξ1 Centauro",
		detail: "Centauro · mag 4,83",
		proper: false
	},
	{
		x: -.03989,
		y: .98717,
		z: -.15463,
		mag: 5.2,
		bv: -.059,
		name: "14 Cani da Caccia",
		detail: "Cani da Caccia · mag 5,20",
		proper: false
	},
	{
		x: .56221,
		y: .2476,
		z: .78906,
		mag: 4.71,
		bv: -.148,
		name: "f Centauro",
		detail: "Centauro · mag 4,71",
		proper: false
	},
	{
		x: .56589,
		y: .22306,
		z: .79374,
		mag: 4.27,
		bv: -.182,
		name: "ξ2 Centauro",
		detail: "Centauro · mag 4,27",
		proper: false
	},
	{
		x: .04581,
		y: .9981,
		z: -.04113,
		mag: 4.8,
		bv: 1.482,
		name: "41 Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,80",
		proper: false
	},
	{
		x: .39226,
		y: .78717,
		z: .47592,
		mag: 5.15,
		bv: 1.138,
		name: "49 Vergine",
		detail: "Vergine · mag 5,15",
		proper: false
	},
	{
		x: .47656,
		y: .63707,
		z: .60583,
		mag: 4.94,
		bv: 1.048,
		name: "ψ Idra femmina",
		detail: "Idra femmina · mag 4,94",
		proper: false
	},
	{
		x: .36004,
		y: .83893,
		z: .40813,
		mag: 4.38,
		bv: -.008,
		name: "Apami-Atsa",
		detail: "θ Vergine · mag 4,38",
		proper: true
	},
	{
		x: .15459,
		y: .98322,
		z: .09685,
		mag: 4.32,
		bv: .455,
		name: "Diadem",
		detail: "α Chioma di Berenice · mag 4,32",
		proper: true
	},
	{
		x: .56481,
		y: .33141,
		z: .75575,
		mag: 5.24,
		bv: 1.049,
		name: "HIP 64348",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .05808,
		y: .99679,
		z: -.05512,
		mag: 4.23,
		bv: .572,
		name: "β Chioma di Berenice",
		detail: "Chioma di Berenice · mag 4,23",
		proper: false
	},
	{
		x: .44449,
		y: .72399,
		z: .52751,
		mag: 5.04,
		bv: .46,
		name: "53 Vergine",
		detail: "Vergine · mag 5,04",
		proper: false
	},
	{
		x: .55121,
		y: .42086,
		z: .72045,
		mag: 4.85,
		bv: .693,
		name: "HD 114613",
		detail: "mag 4,85",
		proper: false
	},
	{
		x: .58063,
		y: .04964,
		z: .81265,
		mag: 4.58,
		bv: -.073,
		name: "HD 114529",
		detail: "Centauro · mag 4,58",
		proper: false
	},
	{
		x: -.06116,
		y: .97106,
		z: -.23086,
		mag: 4.94,
		bv: 1.061,
		name: "HIP 64540",
		detail: "mag 4,94",
		proper: false
	},
	{
		x: .47501,
		y: .67713,
		z: .56202,
		mag: 5.31,
		bv: .862,
		name: "55 Vergine",
		detail: "Vergine · mag 5,31",
		proper: false
	},
	{
		x: .58467,
		y: .06346,
		z: .80879,
		mag: 4.9,
		bv: .489,
		name: "HD 114837",
		detail: "mag 4,90",
		proper: false
	},
	{
		x: .57381,
		y: -.08936,
		z: .8141,
		mag: 4.79,
		bv: -.078,
		name: "η Mosca",
		detail: "Mosca · mag 4,79",
		proper: false
	},
	{
		x: .48105,
		y: .67629,
		z: .55787,
		mag: 5.21,
		bv: 1.011,
		name: "57 Vergine",
		detail: "Vergine · mag 5,21",
		proper: false
	},
	{
		x: .25518,
		y: .94728,
		z: .19376,
		mag: 5.19,
		bv: .585,
		name: "e Vergine",
		detail: "Vergine · mag 5,19",
		proper: false
	},
	{
		x: .54219,
		y: .51582,
		z: .66329,
		mag: 5.1,
		bv: .959,
		name: "r Centauro",
		detail: "Centauro · mag 5,10",
		proper: false
	},
	{
		x: .5789,
		y: -.07044,
		z: .81235,
		mag: 4.86,
		bv: 1.48,
		name: "HIP 64820",
		detail: "mag 4,86",
		proper: false
	},
	{
		x: .21664,
		y: .96708,
		z: .13351,
		mag: 5.33,
		bv: 1.304,
		name: "HIP 64823",
		detail: "mag 5,33",
		proper: false
	},
	{
		x: -.05516,
		y: .96822,
		z: -.24396,
		mag: 4.72,
		bv: .306,
		name: "20 Cani da Caccia",
		detail: "Cani da Caccia · mag 4,72",
		proper: false
	},
	{
		x: .29422,
		y: .92363,
		z: .24563,
		mag: 4.78,
		bv: 1.638,
		name: "σ Vergine",
		detail: "Vergine · mag 4,78",
		proper: false
	},
	{
		x: -.14624,
		y: .91959,
		z: -.36466,
		mag: 5.14,
		bv: -.049,
		name: "21 Cani da Caccia",
		detail: "Cani da Caccia · mag 5,14",
		proper: false
	},
	{
		x: .47927,
		y: .69582,
		z: .53492,
		mag: 4.74,
		bv: .709,
		name: "61 Vergine",
		detail: "Vergine · mag 4,74",
		proper: false
	},
	{
		x: .50895,
		y: .6329,
		z: .58345,
		mag: 2.99,
		bv: .92,
		name: "γ Idra femmina",
		detail: "Idra femmina · mag 2,99",
		proper: false
	},
	{
		x: .57172,
		y: .4351,
		z: .69557,
		mag: 2.75,
		bv: .068,
		name: "ι Centauro",
		detail: "Centauro · mag 2,75",
		proper: false
	},
	{
		x: .59747,
		y: .02887,
		z: .80137,
		mag: 4.52,
		bv: -.141,
		name: "J Centauro",
		detail: "Centauro · mag 4,52",
		proper: false
	},
	{
		x: -.18681,
		y: .87947,
		z: -.43775,
		mag: 2.23,
		bv: .057,
		name: "Mizar",
		detail: "ζ Orsa Maggiore · mag 2,23",
		proper: true
	},
	{
		x: .59345,
		y: -.03289,
		z: .8042,
		mag: 4.52,
		bv: .822,
		name: "m Centauro",
		detail: "Centauro · mag 4,52",
		proper: false
	},
	{
		x: .56308,
		y: -.21069,
		z: .7991,
		mag: 5.04,
		bv: 1.11,
		name: "ι1 Mosca",
		detail: "Mosca · mag 5,04",
		proper: false
	},
	{
		x: .45507,
		y: .77544,
		z: .43773,
		mag: .98,
		bv: -.235,
		name: "Spica",
		detail: "α Vergine · mag 0,98",
		proper: true
	},
	{
		x: -.18485,
		y: .87856,
		z: -.44042,
		mag: 3.99,
		bv: .169,
		name: "Alcor",
		detail: "g Orsa Maggiore · mag 3,99",
		proper: true
	},
	{
		x: .59538,
		y: -.03231,
		z: .80279,
		mag: 5.32,
		bv: .411,
		name: "HIP 65479",
		detail: "mag 5,32",
		proper: false
	},
	{
		x: .59511,
		y: .38478,
		z: .70554,
		mag: 5.11,
		bv: 1.181,
		name: "HIP 65535",
		detail: "mag 5,11",
		proper: false
	},
	{
		x: .47094,
		y: .75761,
		z: .45193,
		mag: 5.27,
		bv: 1.477,
		name: "i Vergine",
		detail: "Vergine · mag 5,27",
		proper: false
	},
	{
		x: .49481,
		y: .7196,
		z: .48718,
		mag: 4.76,
		bv: 1.096,
		name: "69 Vergine",
		detail: "Vergine · mag 4,76",
		proper: false
	},
	{
		x: .2534,
		y: .96174,
		z: .1041,
		mag: 4.97,
		bv: .714,
		name: "70 Vergine",
		detail: "Vergine · mag 4,97",
		proper: false
	},
	{
		x: .61703,
		y: .19525,
		z: .76233,
		mag: 5.04,
		bv: .059,
		name: "K Centauro",
		detail: "Centauro · mag 5,04",
		proper: false
	},
	{
		x: .60735,
		y: .38794,
		z: .69328,
		mag: 3.9,
		bv: 1.186,
		name: "d Centauro",
		detail: "Centauro · mag 3,90",
		proper: false
	},
	{
		x: .44206,
		y: .82121,
		z: .36084,
		mag: 4.68,
		bv: 1.606,
		name: "l Vergine",
		detail: "Vergine · mag 4,68",
		proper: false
	},
	{
		x: .47428,
		y: .7812,
		z: .40593,
		mag: 5.21,
		bv: .964,
		name: "h Vergine",
		detail: "Vergine · mag 5,21",
		proper: false
	},
	{
		x: .36736,
		y: .90191,
		z: .22717,
		mag: 4.92,
		bv: .029,
		name: "o Vergine",
		detail: "Vergine · mag 4,92",
		proper: false
	},
	{
		x: -.10281,
		y: .91766,
		z: -.38383,
		mag: 4.68,
		bv: .132,
		name: "24 Cani da Caccia",
		detail: "Cani da Caccia · mag 4,68",
		proper: false
	},
	{
		x: .40597,
		y: .86939,
		z: .28167,
		mag: 3.38,
		bv: .114,
		name: "Heze",
		detail: "ζ Vergine · mag 3,38",
		proper: true
	},
	{
		x: .02732,
		y: .97199,
		z: -.23342,
		mag: 4.91,
		bv: .404,
		name: "HD 118216",
		detail: "Cani da Caccia · mag 4,91",
		proper: false
	},
	{
		x: .04431,
		y: .97281,
		z: -.22731,
		mag: 4.82,
		bv: .239,
		name: "25 Cani da Caccia",
		detail: "Cani da Caccia · mag 4,82",
		proper: false
	},
	{
		x: .63789,
		y: .15162,
		z: .75506,
		mag: 2.29,
		bv: -.171,
		name: "ε Centauro",
		detail: "Centauro · mag 2,29",
		proper: false
	},
	{
		x: -.1512,
		y: .87472,
		z: -.46043,
		mag: 4.63,
		bv: 1.63,
		name: "83 Orsa Maggiore",
		detail: "Orsa Maggiore · mag 4,63",
		proper: false
	},
	{
		x: .49259,
		y: .78975,
		z: .3656,
		mag: 5.03,
		bv: 1.623,
		name: "m Vergine",
		detail: "Vergine · mag 5,03",
		proper: false
	},
	{
		x: .64046,
		y: .13219,
		z: .75653,
		mag: 4.99,
		bv: -.055,
		name: "Q Centauro",
		detail: "Centauro · mag 4,99",
		proper: false
	},
	{
		x: .39842,
		y: .89399,
		z: .20505,
		mag: 5.35,
		bv: 1.091,
		name: "84 Vergine",
		detail: "Vergine · mag 5,35",
		proper: false
	},
	{
		x: .63082,
		y: .4766,
		z: .61231,
		mag: 4.23,
		bv: .39,
		name: "i Centauro",
		detail: "Centauro · mag 4,23",
		proper: false
	},
	{
		x: .65323,
		y: .1823,
		z: .73488,
		mag: 4.64,
		bv: .955,
		name: "M Centauro",
		detail: "Centauro · mag 4,64",
		proper: false
	},
	{
		x: .6425,
		y: .42713,
		z: .63621,
		mag: 5.15,
		bv: -.007,
		name: "z Centauro",
		detail: "Centauro · mag 5,15",
		proper: false
	},
	{
		x: .27745,
		y: .96073,
		z: .00515,
		mag: 4.5,
		bv: .508,
		name: "τ Boote",
		detail: "Boote · mag 4,50",
		proper: false
	},
	{
		x: -.07749,
		y: .90867,
		z: -.41026,
		mag: 1.85,
		bv: -.099,
		name: "Alkaid",
		detail: "η Orsa Maggiore · mag 1,85",
		proper: true
	},
	{
		x: .64492,
		y: .45256,
		z: .61585,
		mag: 4.19,
		bv: 1.52,
		name: "g Centauro",
		detail: "Centauro · mag 4,19",
		proper: false
	},
	{
		x: .30154,
		y: .9532,
		z: .02209,
		mag: 4.05,
		bv: 1.52,
		name: "υ Boote",
		detail: "Boote · mag 4,05",
		proper: false
	},
	{
		x: .65811,
		y: .34015,
		z: .67171,
		mag: 3.41,
		bv: -.225,
		name: "ν Centauro",
		detail: "Centauro · mag 3,41",
		proper: false
	},
	{
		x: .65916,
		y: .3275,
		z: .67694,
		mag: 3.47,
		bv: -.17,
		name: "μ Centauro",
		detail: "Centauro · mag 3,47",
		proper: false
	},
	{
		x: .24487,
		y: .9681,
		z: -.05316,
		mag: 4.92,
		bv: 1.432,
		name: "e Boote",
		detail: "Boote · mag 4,92",
		proper: false
	},
	{
		x: .57972,
		y: .67652,
		z: .45414,
		mag: 4.96,
		bv: 1.059,
		name: "89 Vergine",
		detail: "Vergine · mag 4,96",
		proper: false
	},
	{
		x: -.24252,
		y: .7794,
		z: -.57769,
		mag: 4.58,
		bv: 1.572,
		name: "i Dragone",
		detail: "Dragone · mag 4,58",
		proper: false
	},
	{
		x: .1039,
		y: .96656,
		z: -.23446,
		mag: 4.76,
		bv: 1.611,
		name: "HD 120933",
		detail: "Cani da Caccia · mag 4,76",
		proper: false
	},
	{
		x: .64756,
		y: .47239,
		z: .59793,
		mag: 4.32,
		bv: -.146,
		name: "k Centauro",
		detail: "Centauro · mag 4,32",
		proper: false
	},
	{
		x: .66275,
		y: .15596,
		z: .73242,
		mag: 5.26,
		bv: -.084,
		name: "N Centauro",
		detail: "Centauro · mag 5,26",
		proper: false
	},
	{
		x: .64835,
		y: .48693,
		z: .58527,
		mag: 4.75,
		bv: -.111,
		name: "h Centauro",
		detail: "Centauro · mag 4,75",
		proper: false
	},
	{
		x: .29062,
		y: .95646,
		z: -.0269,
		mag: 2.68,
		bv: .58,
		name: "Muphrid",
		detail: "η Boote · mag 2,68",
		proper: true
	},
	{
		x: .47979,
		y: .84404,
		z: .23957,
		mag: 5.16,
		bv: 1.093,
		name: "p Vergine",
		detail: "Vergine · mag 5,16",
		proper: false
	},
	{
		x: .67429,
		y: .24518,
		z: .69658,
		mag: 2.55,
		bv: -.176,
		name: "Alnair",
		detail: "ζ Centauro · mag 2,55",
		proper: true
	},
	{
		x: .19648,
		y: .96831,
		z: -.15416,
		mag: 5.02,
		bv: 1.441,
		name: "9 Boote",
		detail: "Boote · mag 5,02",
		proper: false
	},
	{
		x: .64503,
		y: -.03057,
		z: .76355,
		mag: 4.71,
		bv: 1.075,
		name: "HIP 68191",
		detail: "mag 4,71",
		proper: false
	},
	{
		x: .67958,
		y: .32675,
		z: .65681,
		mag: 3.83,
		bv: -.224,
		name: "φ Centauro",
		detail: "Centauro · mag 3,83",
		proper: false
	},
	{
		x: .63896,
		y: .57997,
		z: .50534,
		mag: 5.2,
		bv: -.086,
		name: "47 Idra femmina",
		detail: "Idra femmina · mag 5,20",
		proper: false
	},
	{
		x: .68154,
		y: .28316,
		z: .67477,
		mag: 3.87,
		bv: -.208,
		name: "υ1 Centauro",
		detail: "Centauro · mag 3,87",
		proper: false
	},
	{
		x: .47625,
		y: .86053,
		z: .18074,
		mag: 4.23,
		bv: .121,
		name: "τ Vergine",
		detail: "Vergine · mag 4,23",
		proper: false
	},
	{
		x: .68832,
		y: .26779,
		z: .67417,
		mag: 4.34,
		bv: .598,
		name: "υ2 Centauro",
		detail: "Centauro · mag 4,34",
		proper: false
	},
	{
		x: .66594,
		y: .02183,
		z: .74568,
		mag: .61,
		bv: -.231,
		name: "Hadar",
		detail: "β Centauro · mag 0,61",
		proper: true
	},
	{
		x: -.22083,
		y: .77669,
		z: -.5899,
		mag: 3.67,
		bv: -.049,
		name: "Thuban",
		detail: "α Dragone · mag 3,67",
		proper: true
	},
	{
		x: .69738,
		y: .33444,
		z: .63389,
		mag: 4.36,
		bv: -.198,
		name: "χ Centauro",
		detail: "Centauro · mag 4,36",
		proper: false
	},
	{
		x: .66788,
		y: .54833,
		z: .50327,
		mag: 3.25,
		bv: 1.091,
		name: "π Idra femmina",
		detail: "Idra femmina · mag 3,25",
		proper: false
	},
	{
		x: .69377,
		y: .40795,
		z: .59351,
		mag: 2.06,
		bv: 1.011,
		name: "Menkent",
		detail: "θ Centauro · mag 2,06",
		proper: true
	},
	{
		x: .03195,
		y: .92228,
		z: -.38521,
		mag: 5.13,
		bv: 1.493,
		name: "HD 123657",
		detail: "Boote · mag 5,13",
		proper: false
	},
	{
		x: -.036,
		y: .89279,
		z: -.44903,
		mag: 5.26,
		bv: 1.637,
		name: "13 Boote",
		detail: "Boote · mag 5,26",
		proper: false
	},
	{
		x: -.36205,
		y: .62632,
		z: -.69039,
		mag: 4.8,
		bv: 1.368,
		name: "4 Orsa Minore",
		detail: "Orsa Minore · mag 4,80",
		proper: false
	},
	{
		x: .69559,
		y: .13311,
		z: .706,
		mag: 4.74,
		bv: .938,
		name: "HIP 69191",
		detail: "mag 4,74",
		proper: false
	},
	{
		x: .26286,
		y: .952,
		z: -.15683,
		mag: 4.82,
		bv: .541,
		name: "d Boote",
		detail: "Boote · mag 4,82",
		proper: false
	},
	{
		x: .63315,
		y: .67545,
		z: .37799,
		mag: 4.93,
		bv: 1.684,
		name: "HD 123934",
		detail: "Vergine · mag 4,93",
		proper: false
	},
	{
		x: -.26963,
		y: .72043,
		z: -.63897,
		mag: 5.18,
		bv: 1.595,
		name: "HIP 69373",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: .50174,
		y: .85364,
		z: .13983,
		mag: 4.99,
		bv: -.118,
		name: "HD 124224",
		detail: "Vergine · mag 4,99",
		proper: false
	},
	{
		x: .68749,
		y: .53298,
		z: .49325,
		mag: 5.07,
		bv: 1.13,
		name: "50 Idra femmina",
		detail: "Idra femmina · mag 5,07",
		proper: false
	},
	{
		x: .60236,
		y: .73966,
		z: .30012,
		mag: 4.18,
		bv: 1.323,
		name: "Kang",
		detail: "κ Vergine · mag 4,18",
		proper: true
	},
	{
		x: -.05465,
		y: .87389,
		z: -.48305,
		mag: 4.53,
		bv: .233,
		name: "Asellus Tertius",
		detail: "κ2 Boote · mag 4,53",
		proper: true
	},
	{
		x: .43735,
		y: .89877,
		z: .03058,
		mag: 5.29,
		bv: 1.007,
		name: "15 Boote",
		detail: "Boote · mag 5,29",
		proper: false
	},
	{
		x: .69457,
		y: .06905,
		z: .71611,
		mag: 5.03,
		bv: -.074,
		name: "HD 124367",
		detail: "Centauro · mag 5,03",
		proper: false
	},
	{
		x: .34432,
		y: .93427,
		z: -.09258,
		mag: -.05,
		bv: 1.239,
		name: "Arturo",
		detail: "α Boote · mag −0,05",
		proper: true
	},
	{
		x: .58161,
		y: .77786,
		z: .23806,
		mag: 4.07,
		bv: .511,
		name: "Syrma",
		detail: "ι Vergine · mag 4,07",
		proper: true
	},
	{
		x: -.0443,
		y: .8743,
		z: -.48336,
		mag: 4.75,
		bv: .236,
		name: "Asellus Secundus",
		detail: "ι Boote · mag 4,75",
		proper: true
	},
	{
		x: .02254,
		y: .90383,
		z: -.4273,
		mag: 4.18,
		bv: .087,
		name: "Xuange",
		detail: "λ Boote · mag 4,18",
		proper: true
	},
	{
		x: .15849,
		y: .93826,
		z: -.30749,
		mag: 4.8,
		bv: 1.057,
		name: "A Boote",
		detail: "Boote · mag 4,80",
		proper: false
	},
	{
		x: .56239,
		y: -.32113,
		z: .76197,
		mag: 4.89,
		bv: .243,
		name: "η Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 4,89",
		proper: false
	},
	{
		x: .64044,
		y: .69783,
		z: .32074,
		mag: 4.52,
		bv: .128,
		name: "Khambaliya",
		detail: "λ Vergine · mag 4,52",
		proper: true
	},
	{
		x: .72599,
		y: .24432,
		z: .64285,
		mag: 3.55,
		bv: -.184,
		name: "ι Lupo",
		detail: "Lupo · mag 3,55",
		proper: false
	},
	{
		x: .56326,
		y: .80636,
		z: .18031,
		mag: 5.14,
		bv: 1.023,
		name: "υ Vergine",
		detail: "Vergine · mag 5,14",
		proper: false
	},
	{
		x: .38741,
		y: .91958,
		z: -.06548,
		mag: 4.84,
		bv: 1.228,
		name: "20 Boote",
		detail: "Boote · mag 4,84",
		proper: false
	},
	{
		x: .68648,
		y: -.00354,
		z: .72714,
		mag: 5.22,
		bv: .281,
		name: "HIP 70035",
		detail: "mag 5,22",
		proper: false
	},
	{
		x: .70569,
		y: .07635,
		z: .70439,
		mag: 4.3,
		bv: .082,
		name: "v Centauro",
		detail: "Centauro · mag 4,30",
		proper: false
	},
	{
		x: .7293,
		y: .36996,
		z: .57554,
		mag: 4.05,
		bv: -.03,
		name: "ψ Centauro",
		detail: "Centauro · mag 4,05",
		proper: false
	},
	{
		x: .7295,
		y: .25679,
		z: .63395,
		mag: 4.78,
		bv: .31,
		name: "HIP 70104",
		detail: "mag 4,78",
		proper: false
	},
	{
		x: .57164,
		y: -.30821,
		z: .76042,
		mag: 5.06,
		bv: -.108,
		name: "ε Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 5,06",
		proper: false
	},
	{
		x: .70201,
		y: .04058,
		z: .71101,
		mag: 4.76,
		bv: .795,
		name: "HIP 70264",
		detail: "mag 4,76",
		proper: false
	},
	{
		x: .73597,
		y: .34239,
		z: .58405,
		mag: 4.41,
		bv: -.185,
		name: "Bidelman's Helium Variable Star",
		detail: "a Centauro · mag 4,41",
		proper: true
	},
	{
		x: .71657,
		y: .51311,
		z: .47249,
		mag: 4.78,
		bv: 1.3,
		name: "k Idra femmina",
		detail: "Idra femmina · mag 4,78",
		proper: false
	},
	{
		x: .47886,
		y: .87742,
		z: .0288,
		mag: 4.86,
		bv: .01,
		name: "HIP 70327",
		detail: "mag 4,86",
		proper: false
	},
	{
		x: .5064,
		y: .86012,
		z: .06128,
		mag: 5.1,
		bv: .124,
		name: "HIP 70400",
		detail: "mag 5,10",
		proper: false
	},
	{
		x: .71148,
		y: .55044,
		z: .43683,
		mag: 5.34,
		bv: .962,
		name: "HIP 70469",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.03377,
		y: .86298,
		z: -.50411,
		mag: 4.04,
		bv: .497,
		name: "Asellus Primus",
		detail: "θ Boote · mag 4,04",
		proper: true
	},
	{
		x: .74074,
		y: .25045,
		z: .62336,
		mag: 4.56,
		bv: -.147,
		name: "τ1 Lupo",
		detail: "Lupo · mag 4,56",
		proper: false
	},
	{
		x: .74067,
		y: .24792,
		z: .62446,
		mag: 4.33,
		bv: .434,
		name: "τ2 Lupo",
		detail: "Lupo · mag 4,33",
		proper: false
	},
	{
		x: .54335,
		y: -.36344,
		z: .75676,
		mag: 4.31,
		bv: 1.3,
		name: "δ Ottante",
		detail: "Ottante · mag 4,31",
		proper: false
	},
	{
		x: -.32848,
		y: .64269,
		z: -.69214,
		mag: 4.25,
		bv: 1.431,
		name: "5 Orsa Minore",
		detail: "Orsa Minore · mag 4,25",
		proper: false
	},
	{
		x: .73431,
		y: .4822,
		z: .47777,
		mag: 4.97,
		bv: -.074,
		name: "l Idra femmina",
		detail: "Idra femmina · mag 4,97",
		proper: false
	},
	{
		x: .58844,
		y: .79349,
		z: .15528,
		mag: 4.81,
		bv: .693,
		name: "Elgafar",
		detail: "φ Vergine · mag 4,81",
		proper: true
	},
	{
		x: .25621,
		y: .9259,
		z: -.27761,
		mag: 3.57,
		bv: 1.298,
		name: "ρ Boote",
		detail: "Boote · mag 3,57",
		proper: false
	},
	{
		x: .15614,
		y: .91476,
		z: -.37259,
		mag: 3.04,
		bv: .191,
		name: "Seginus",
		detail: "γ Boote · mag 3,04",
		proper: true
	},
	{
		x: .74412,
		y: .16066,
		z: .64844,
		mag: 4.44,
		bv: -.177,
		name: "σ Lupo",
		detail: "Lupo · mag 4,44",
		proper: false
	},
	{
		x: .27099,
		y: .92187,
		z: -.27698,
		mag: 4.47,
		bv: .364,
		name: "σ Boote",
		detail: "Boote · mag 4,47",
		proper: false
	},
	{
		x: .76279,
		y: .28684,
		z: .57954,
		mag: 2.33,
		bv: -.157,
		name: "η Centauro",
		detail: "Centauro · mag 2,33",
		proper: false
	},
	{
		x: .7562,
		y: .1712,
		z: .63154,
		mag: 4.05,
		bv: -.152,
		name: "ρ Lupo",
		detail: "Lupo · mag 4,05",
		proper: false
	},
	{
		x: .71601,
		y: -.01189,
		z: .69799,
		mag: 1.35,
		bv: .9,
		name: "Alfa Centauri",
		detail: "α2 Centauro · mag 1,35",
		proper: true
	},
	{
		x: .71606,
		y: -.01186,
		z: .69794,
		mag: -.01,
		bv: .71,
		name: "Alfa Centauri",
		detail: "α1 Centauro · mag −0,01",
		proper: true
	},
	{
		x: .44403,
		y: .88734,
		z: -.12433,
		mag: 4.49,
		bv: -.002,
		name: "π1 Boote",
		detail: "Boote · mag 4,49",
		proper: false
	},
	{
		x: .47449,
		y: .87559,
		z: -.09055,
		mag: 3.78,
		bv: .044,
		name: "ζ Boote",
		detail: "Boote · mag 3,78",
		proper: false
	},
	{
		x: .53316,
		y: .8458,
		z: -.01909,
		mag: 4.86,
		bv: .992,
		name: "31 Boote",
		detail: "Boote · mag 4,86",
		proper: false
	},
	{
		x: .76825,
		y: .19828,
		z: .60867,
		mag: 2.3,
		bv: -.154,
		name: "Men",
		detail: "α Lupo · mag 2,30",
		proper: true
	},
	{
		x: .77765,
		y: .34365,
		z: .52647,
		mag: 4.01,
		bv: -.157,
		name: "b Centauro",
		detail: "Centauro · mag 4,01",
		proper: false
	},
	{
		x: .69661,
		y: -.08005,
		z: .71297,
		mag: 3.18,
		bv: .256,
		name: "α Compasso",
		detail: "Compasso · mag 3,18",
		proper: false
	},
	{
		x: .6566,
		y: .73771,
		z: .15702,
		mag: 3.87,
		bv: .385,
		name: "Rijl al Awwa",
		detail: "μ Vergine · mag 3,87",
		proper: true
	},
	{
		x: .33225,
		y: .90676,
		z: -.2596,
		mag: 4.8,
		bv: 1.672,
		name: "34 Boote",
		detail: "Boote · mag 4,80",
		proper: false
	},
	{
		x: .7802,
		y: .37933,
		z: .49738,
		mag: 4.06,
		bv: 1.356,
		name: "c1 Centauro",
		detail: "Centauro · mag 4,06",
		proper: false
	},
	{
		x: .78317,
		y: .37708,
		z: .49443,
		mag: 4.92,
		bv: .013,
		name: "c2 Centauro",
		detail: "Centauro · mag 4,92",
		proper: false
	},
	{
		x: .32928,
		y: .90471,
		z: -.27032,
		mag: 2.35,
		bv: .966,
		name: "Izar",
		detail: "ε Boote · mag 2,35",
		proper: true
	},
	{
		x: .44975,
		y: .8815,
		z: -.14382,
		mag: 4.6,
		bv: .972,
		name: "ο Boote",
		detail: "Boote · mag 4,60",
		proper: false
	},
	{
		x: .7676,
		y: .50944,
		z: .38892,
		mag: 5.15,
		bv: .315,
		name: "m Idra femmina",
		detail: "Idra femmina · mag 5,15",
		proper: false
	},
	{
		x: .60421,
		y: .79527,
		z: .04988,
		mag: 3.73,
		bv: -.005,
		name: "109 Vergine",
		detail: "Vergine · mag 3,73",
		proper: false
	},
	{
		x: .76327,
		y: .1144,
		z: .63587,
		mag: 5.22,
		bv: .984,
		name: "b Lupo",
		detail: "Lupo · mag 5,22",
		proper: false
	},
	{
		x: .77368,
		y: .49806,
		z: .3916,
		mag: 5.23,
		bv: .938,
		name: "56 Idra femmina",
		detail: "Idra femmina · mag 5,23",
		proper: false
	},
	{
		x: .59377,
		y: -.2999,
		z: .74666,
		mag: 3.83,
		bv: 1.433,
		name: "α Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 3,83",
		proper: false
	},
	{
		x: .72793,
		y: .63987,
		z: .24634,
		mag: 5.32,
		bv: .066,
		name: "μ Bilancia",
		detail: "Bilancia · mag 5,32",
		proper: false
	},
	{
		x: .78447,
		y: .46895,
		z: .40582,
		mag: 4.42,
		bv: 1.366,
		name: "E Idra femmina",
		detail: "Idra femmina · mag 4,42",
		proper: false
	},
	{
		x: .74121,
		y: .61664,
		z: .26526,
		mag: 5.15,
		bv: .401,
		name: "Zubenelgenubi",
		detail: "α1 Bilancia · mag 5,15",
		proper: true
	},
	{
		x: -.29279,
		y: .64948,
		z: -.70175,
		mag: 2.07,
		bv: 1.465,
		name: "Kochab",
		detail: "β Orsa Minore · mag 2,07",
		proper: true
	},
	{
		x: .74192,
		y: .61578,
		z: .26527,
		mag: 2.75,
		bv: .147,
		name: "Zubenelgenubi",
		detail: "α2 Bilancia · mag 2,75",
		proper: true
	},
	{
		x: .65213,
		y: .75265,
		z: .09075,
		mag: 4.93,
		bv: .988,
		name: "11 Bilancia",
		detail: "Bilancia · mag 4,93",
		proper: false
	},
	{
		x: .44097,
		y: .87762,
		z: -.18796,
		mag: 4.54,
		bv: .72,
		name: "ξ Boote",
		detail: "Boote · mag 4,54",
		proper: false
	},
	{
		x: .79345,
		y: .24379,
		z: .55767,
		mag: 4.32,
		bv: -.154,
		name: "ο Lupo",
		detail: "Lupo · mag 4,32",
		proper: false
	},
	{
		x: .8007,
		y: .32731,
		z: .50174,
		mag: 5.02,
		bv: -.155,
		name: "HD 131120",
		detail: "Centauro · mag 5,02",
		proper: false
	},
	{
		x: .78519,
		y: .50527,
		z: .35803,
		mag: 5.27,
		bv: 1.336,
		name: "12 Bilancia",
		detail: "Bilancia · mag 5,27",
		proper: false
	},
	{
		x: .74094,
		y: -.01537,
		z: .67139,
		mag: 5.18,
		bv: 1.161,
		name: "HIP 73036",
		detail: "mag 5,18",
		proper: false
	},
	{
		x: .80565,
		y: .37898,
		z: .45532,
		mag: 5.32,
		bv: .046,
		name: "HIP 73049",
		detail: "mag 5,32",
		proper: false
	},
	{
		x: .72669,
		y: -.05775,
		z: .68453,
		mag: 5.08,
		bv: -.023,
		name: "θ Compasso",
		detail: "Compasso · mag 5,08",
		proper: false
	},
	{
		x: .68405,
		y: .72261,
		z: .09949,
		mag: 4.47,
		bv: .318,
		name: "16 Bilancia",
		detail: "Bilancia · mag 4,47",
		proper: false
	},
	{
		x: -.17658,
		y: .72569,
		z: -.66498,
		mag: 4.63,
		bv: 1.59,
		name: "HD 132813",
		detail: "Orsa Minore · mag 4,63",
		proper: false
	},
	{
		x: .80711,
		y: .24038,
		z: .53925,
		mag: 2.68,
		bv: -.184,
		name: "KeKouan",
		detail: "β Lupo · mag 2,68",
		proper: true
	},
	{
		x: .80984,
		y: .25466,
		z: .52849,
		mag: 3.13,
		bv: -.208,
		name: "Ke Kwan",
		detail: "κ Centauro · mag 3,13",
		proper: true
	},
	{
		x: .72327,
		y: .67574,
		z: .14233,
		mag: 4.91,
		bv: 0,
		name: "Zuben Elakribi",
		detail: "δ Bilancia · mag 4,91",
		proper: true
	},
	{
		x: .19016,
		y: .86636,
		z: -.4618,
		mag: 3.49,
		bv: .956,
		name: "Nekkar",
		detail: "β Boote · mag 3,49",
		proper: true
	},
	{
		x: .39514,
		y: .87173,
		z: -.28974,
		mag: 4.8,
		bv: 1.506,
		name: "ω Boote",
		detail: "Boote · mag 4,80",
		proper: false
	},
	{
		x: .64559,
		y: .76368,
		z: -84e-5,
		mag: 4.39,
		bv: 1.026,
		name: "110 Vergine",
		detail: "Vergine · mag 4,39",
		proper: false
	},
	{
		x: .09095,
		y: .8393,
		z: -.53601,
		mag: 4.83,
		bv: .647,
		name: "i Boote",
		detail: "Boote · mag 4,83",
		proper: false
	},
	{
		x: .80938,
		y: .47896,
		z: .33986,
		mag: 3.25,
		bv: 1.674,
		name: "Brachium",
		detail: "σ Bilancia · mag 3,25",
		proper: true
	},
	{
		x: .37578,
		y: .8701,
		z: -.31894,
		mag: 4.52,
		bv: 1.24,
		name: "Aulad Alnathlat",
		detail: "ψ Boote · mag 4,52",
		proper: true
	},
	{
		x: .72766,
		y: -.08438,
		z: .68073,
		mag: 5.16,
		bv: .935,
		name: "η Compasso",
		detail: "Compasso · mag 5,16",
		proper: false
	},
	{
		x: .81009,
		y: .17236,
		z: .5604,
		mag: 3.91,
		bv: -.144,
		name: "π Lupo",
		detail: "Lupo · mag 3,91",
		proper: false
	},
	{
		x: .82275,
		y: .26017,
		z: .50537,
		mag: 5.13,
		bv: 1.011,
		name: "HIP 73826",
		detail: "mag 5,13",
		proper: false
	},
	{
		x: -.00446,
		y: .80081,
		z: -.5989,
		mag: 5.24,
		bv: .958,
		name: "HIP 73909",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .78142,
		y: .58237,
		z: .22412,
		mag: 5.19,
		bv: 1.589,
		name: "Zuben Hakrabi",
		detail: "ν Bilancia · mag 5,19",
		proper: true
	},
	{
		x: .4085,
		y: .86145,
		z: -.30173,
		mag: 4.93,
		bv: .429,
		name: "c Boote",
		detail: "Boote · mag 4,93",
		proper: false
	},
	{
		x: .82104,
		y: .19301,
		z: .53725,
		mag: 4.07,
		bv: -.162,
		name: "λ Lupo",
		detail: "Lupo · mag 4,07",
		proper: false
	},
	{
		x: .81589,
		y: .13731,
		z: .56167,
		mag: 3.88,
		bv: -.029,
		name: "κ1 Lupo",
		detail: "Lupo · mag 3,88",
		proper: false
	},
	{
		x: .80962,
		y: .52993,
		z: .25237,
		mag: 4.54,
		bv: -.071,
		name: "ι Bilancia",
		detail: "Bilancia · mag 4,54",
		proper: false
	},
	{
		x: .80349,
		y: .08688,
		z: .58895,
		mag: 3.41,
		bv: .918,
		name: "ζ Lupo",
		detail: "Lupo · mag 3,41",
		proper: false
	},
	{
		x: .82967,
		y: .19816,
		z: .5219,
		mag: 4.83,
		bv: -.177,
		name: "e Lupo",
		detail: "Lupo · mag 4,83",
		proper: false
	},
	{
		x: .3682,
		y: .85284,
		z: -.37027,
		mag: 5.28,
		bv: .062,
		name: "χ Boote",
		detail: "Boote · mag 5,28",
		proper: false
	},
	{
		x: .84283,
		y: .37699,
		z: .38407,
		mag: 4.91,
		bv: .374,
		name: "i Lupo",
		detail: "Lupo · mag 4,91",
		proper: false
	},
	{
		x: -.17997,
		y: .69882,
		z: -.69228,
		mag: 5.15,
		bv: .55,
		name: "HD 136064",
		detail: "mag 5,15",
		proper: false
	},
	{
		x: .64907,
		y: .75717,
		z: -.07348,
		mag: 5.32,
		bv: 1.092,
		name: "3 Serpente",
		detail: "Serpente · mag 5,32",
		proper: false
	},
	{
		x: .31424,
		y: .85201,
		z: -.41872,
		mag: 3.46,
		bv: .961,
		name: "Thiba",
		detail: "δ Boote · mag 3,46",
		proper: true
	},
	{
		x: .8414,
		y: .23616,
		z: .48608,
		mag: 5.15,
		bv: .564,
		name: "HIP 74707",
		detail: "mag 5,15",
		proper: false
	},
	{
		x: .76155,
		y: -.05079,
		z: .64611,
		mag: 5.04,
		bv: -.077,
		name: "δ Compasso",
		detail: "Compasso · mag 5,04",
		proper: false
	},
	{
		x: .76707,
		y: .63249,
		z: .1075,
		mag: 2.61,
		bv: -.071,
		name: "Zubeneschamali",
		detail: "β Bilancia · mag 2,61",
		proper: true
	},
	{
		x: -.24204,
		y: .65664,
		z: -.71431,
		mag: 5.02,
		bv: 1.369,
		name: "Pherkad Minore",
		detail: "11 Orsa Minore · mag 5,02",
		proper: true
	},
	{
		x: .77579,
		y: -.01953,
		z: .63069,
		mag: 4.07,
		bv: .088,
		name: "β Compasso",
		detail: "Compasso · mag 4,07",
		proper: false
	},
	{
		x: .7441,
		y: -.0907,
		z: .66188,
		mag: 4.85,
		bv: 1.26,
		name: "ε Compasso",
		detail: "Compasso · mag 4,85",
		proper: false
	},
	{
		x: .84781,
		y: .38884,
		z: .36059,
		mag: 4.35,
		bv: 1.1,
		name: "f Lupo",
		detail: "Lupo · mag 4,35",
		proper: false
	},
	{
		x: .82907,
		y: .13997,
		z: .54135,
		mag: 4.27,
		bv: -.086,
		name: "μ Lupo",
		detail: "Lupo · mag 4,27",
		proper: false
	},
	{
		x: .70592,
		y: -.1659,
		z: .68859,
		mag: 2.87,
		bv: .014,
		name: "γ Triangolo Australe",
		detail: "Triangolo Australe · mag 2,87",
		proper: false
	},
	{
		x: .68757,
		y: .72478,
		z: -.04416,
		mag: 5.04,
		bv: .54,
		name: "5 Serpente",
		detail: "Serpente · mag 5,04",
		proper: false
	},
	{
		x: -.23961,
		y: .65391,
		z: -.71763,
		mag: 3,
		bv: .058,
		name: "Pherkad",
		detail: "γ Orsa Minore · mag 3,00",
		proper: true
	},
	{
		x: .7006,
		y: .71267,
		z: -.03547,
		mag: 5.35,
		bv: 1.191,
		name: "6 Serpente",
		detail: "Serpente · mag 5,35",
		proper: false
	},
	{
		x: .85195,
		y: .23881,
		z: .466,
		mag: 3.22,
		bv: -.227,
		name: "δ Lupo",
		detail: "Lupo · mag 3,22",
		proper: false
	},
	{
		x: .8574,
		y: .29892,
		z: .41893,
		mag: 3.57,
		bv: 1.534,
		name: "φ1 Lupo",
		detail: "Lupo · mag 3,57",
		proper: false
	},
	{
		x: .83435,
		y: .13353,
		z: .53482,
		mag: 4.99,
		bv: .515,
		name: "ν1 Lupo",
		detail: "Lupo · mag 4,99",
		proper: false
	},
	{
		x: .8453,
		y: .17919,
		z: .50334,
		mag: 3.37,
		bv: -.191,
		name: "ε Lupo",
		detail: "Lupo · mag 3,37",
		proper: false
	},
	{
		x: .85947,
		y: .28816,
		z: .42223,
		mag: 4.54,
		bv: -.155,
		name: "φ2 Lupo",
		detail: "Lupo · mag 4,54",
		proper: false
	},
	{
		x: .37041,
		y: .83604,
		z: -.40475,
		mag: 4.99,
		bv: .577,
		name: "η Corona Boreale",
		detail: "Corona Boreale · mag 4,99",
		proper: false
	},
	{
		x: .77937,
		y: -.03425,
		z: .62563,
		mag: 4.48,
		bv: .169,
		name: "γ Compasso",
		detail: "Compasso · mag 4,48",
		proper: false
	},
	{
		x: .7889,
		y: .60647,
		z: .0991,
		mag: 4.92,
		bv: .453,
		name: "ε Bilancia",
		detail: "Bilancia · mag 4,92",
		proper: false
	},
	{
		x: .27399,
		y: .83211,
		z: -.4822,
		mag: 4.31,
		bv: .309,
		name: "Alkalurops",
		detail: "μ1 Boote · mag 4,31",
		proper: true
	},
	{
		x: -.04577,
		y: .75043,
		z: -.65936,
		mag: 3.29,
		bv: 1.166,
		name: "Edasich",
		detail: "ι Dragone · mag 3,29",
		proper: true
	},
	{
		x: .86147,
		y: .25821,
		z: .43726,
		mag: 4.6,
		bv: 0,
		name: "k Lupo",
		detail: "Lupo · mag 4,60",
		proper: false
	},
	{
		x: .5627,
		y: .7919,
		z: -.23721,
		mag: 5.16,
		bv: 1.65,
		name: "τ1 Serpente",
		detail: "Serpente · mag 5,16",
		proper: false
	},
	{
		x: .39521,
		y: .82528,
		z: -.40339,
		mag: 3.66,
		bv: .319,
		name: "Nusakan",
		detail: "β Corona Boreale · mag 3,66",
		proper: true
	},
	{
		x: .70751,
		y: .70301,
		z: -.07216,
		mag: 5.15,
		bv: .245,
		name: "10 Serpente",
		detail: "Serpente · mag 5,15",
		proper: false
	},
	{
		x: .84928,
		y: .13872,
		z: .50939,
		mag: 5.26,
		bv: 1.731,
		name: "HIP 75828",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: .2347,
		y: .81495,
		z: -.52988,
		mag: 5.04,
		bv: 1.589,
		name: "ν1 Boote",
		detail: "Boote · mag 5,04",
		proper: false
	},
	{
		x: -.31236,
		y: .59424,
		z: -.74116,
		mag: 5,
		bv: 1.545,
		name: "θ Orsa Minore",
		detail: "Orsa Minore · mag 5,00",
		proper: false
	},
	{
		x: .23509,
		y: .81322,
		z: -.53236,
		mag: 4.98,
		bv: .086,
		name: "ν2 Boote",
		detail: "Boote · mag 4,98",
		proper: false
	},
	{
		x: .37374,
		y: .81628,
		z: -.44046,
		mag: 4.14,
		bv: -.127,
		name: "θ Corona Boreale",
		detail: "Corona Boreale · mag 4,14",
		proper: false
	},
	{
		x: .80837,
		y: .58481,
		z: .06734,
		mag: 4.61,
		bv: 1,
		name: "37 Bilancia",
		detail: "Bilancia · mag 4,61",
		proper: false
	},
	{
		x: .80346,
		y: .5928,
		z: .0551,
		mag: 5.16,
		bv: -.09,
		name: "HIP 76243",
		detail: "mag 5,16",
		proper: false
	},
	{
		x: .8771,
		y: .38023,
		z: .29345,
		mag: 5.13,
		bv: 1.306,
		name: "36 Bilancia",
		detail: "Bilancia · mag 5,13",
		proper: false
	},
	{
		x: .44009,
		y: .80667,
		z: -.39445,
		mag: 2.22,
		bv: .032,
		name: "Alphecca",
		detail: "α Corona Boreale · mag 2,22",
		proper: true
	},
	{
		x: .6355,
		y: .74534,
		z: -.2015,
		mag: 3.8,
		bv: .268,
		name: "Nasak Yamani",
		detail: "δ Serpente · mag 3,80",
		proper: true
	},
	{
		x: .87339,
		y: .20606,
		z: .44129,
		mag: 2.8,
		bv: -.216,
		name: "γ Lupo",
		detail: "Lupo · mag 2,80",
		proper: false
	},
	{
		x: .26838,
		y: .80932,
		z: -.52247,
		mag: 5.14,
		bv: 1.65,
		name: "μ Corona Boreale",
		detail: "Corona Boreale · mag 5,14",
		proper: false
	},
	{
		x: .83697,
		y: .53281,
		z: .12486,
		mag: 3.91,
		bv: 1.007,
		name: "Zubenelhakrabi",
		detail: "γ Bilancia · mag 3,91",
		proper: true
	},
	{
		x: .86456,
		y: .15229,
		z: .4789,
		mag: 4.55,
		bv: -.175,
		name: "d Lupo",
		detail: "Lupo · mag 4,55",
		proper: false
	},
	{
		x: .64452,
		y: .73806,
		z: -.19963,
		mag: 5.26,
		bv: .925,
		name: "16 Serpente",
		detail: "Serpente · mag 5,26",
		proper: false
	},
	{
		x: .74047,
		y: -.1491,
		z: .65534,
		mag: 4.11,
		bv: 1.161,
		name: "ε Triangolo Australe",
		detail: "Triangolo Australe · mag 4,11",
		proper: false
	},
	{
		x: .88157,
		y: .37372,
		z: .2884,
		mag: 3.6,
		bv: 1.361,
		name: "υ Bilancia",
		detail: "Bilancia · mag 3,60",
		proper: false
	},
	{
		x: .25262,
		y: .80245,
		z: -.54061,
		mag: 5.25,
		bv: .886,
		name: "Ceginus",
		detail: "φ Boote · mag 5,25",
		proper: true
	},
	{
		x: .87454,
		y: .18129,
		z: .44979,
		mag: 4.34,
		bv: 1.412,
		name: "ω Lupo",
		detail: "Lupo · mag 4,34",
		proper: false
	},
	{
		x: .88628,
		y: .34936,
		z: .30406,
		mag: 3.66,
		bv: -.177,
		name: "τ Bilancia",
		detail: "Bilancia · mag 3,66",
		proper: false
	},
	{
		x: .30968,
		y: .80295,
		z: -.50928,
		mag: 4.64,
		bv: -.103,
		name: "ζ1 Corona Boreale",
		detail: "Corona Boreale · mag 4,64",
		proper: false
	},
	{
		x: .88928,
		y: .28725,
		z: .3559,
		mag: 4.66,
		bv: .964,
		name: "ψ1 Lupo",
		detail: "Lupo · mag 4,66",
		proper: false
	},
	{
		x: .87924,
		y: .41891,
		z: .22684,
		mag: 4.97,
		bv: 1.302,
		name: "42 Bilancia",
		detail: "Bilancia · mag 4,97",
		proper: false
	},
	{
		x: .87306,
		y: .14666,
		z: .46503,
		mag: 4.64,
		bv: .413,
		name: "g Lupo",
		detail: "Lupo · mag 4,64",
		proper: false
	},
	{
		x: .54339,
		y: .77109,
		z: -.33189,
		mag: 4.51,
		bv: .062,
		name: "ι Serpente",
		detail: "Serpente · mag 4,51",
		proper: false
	},
	{
		x: .62412,
		y: .74023,
		z: -.25007,
		mag: 5.34,
		bv: .033,
		name: "χ Serpente",
		detail: "Serpente · mag 5,34",
		proper: false
	},
	{
		x: .86988,
		y: .46303,
		z: .17002,
		mag: 4.75,
		bv: 1.574,
		name: "κ Bilancia",
		detail: "Bilancia · mag 4,75",
		proper: false
	},
	{
		x: .89136,
		y: .24148,
		z: .38362,
		mag: 5.23,
		bv: .987,
		name: "h Lupo",
		detail: "Lupo · mag 5,23",
		proper: false
	},
	{
		x: .89388,
		y: .27705,
		z: .35244,
		mag: 4.75,
		bv: -.151,
		name: "ψ2 Lupo",
		detail: "Lupo · mag 4,75",
		proper: false
	},
	{
		x: .46016,
		y: .78719,
		z: -.41058,
		mag: 3.81,
		bv: .02,
		name: "γ Corona Boreale",
		detail: "Corona Boreale · mag 3,81",
		proper: false
	},
	{
		x: -.3133,
		y: .58294,
		z: -.74968,
		mag: 4.29,
		bv: .038,
		name: "Akfa Farkadain",
		detail: "ζ Orsa Minore · mag 4,29",
		proper: true
	},
	{
		x: .69642,
		y: .69565,
		z: -.17626,
		mag: 2.63,
		bv: 1.167,
		name: "Unukalhai",
		detail: "α Serpente · mag 2,63",
		proper: true
	},
	{
		x: .603,
		y: .74165,
		z: -.29384,
		mag: 3.65,
		bv: .073,
		name: "Nasak Shamiya",
		detail: "β Serpente · mag 3,65",
		proper: true
	},
	{
		x: .69131,
		y: .69595,
		z: -.19428,
		mag: 4.42,
		bv: .604,
		name: "λ Serpente",
		detail: "Serpente · mag 4,42",
		proper: false
	},
	{
		x: -.07984,
		y: .70041,
		z: -.70926,
		mag: 5.19,
		bv: .062,
		name: "HIP 77277",
		detail: "mag 5,19",
		proper: false
	},
	{
		x: .57518,
		y: .74701,
		z: -.33339,
		mag: 4.09,
		bv: 1.616,
		name: "Gudja",
		detail: "κ Serpente · mag 4,09",
		proper: true
	},
	{
		x: .4749,
		y: .77021,
		z: -.42574,
		mag: 4.59,
		bv: .794,
		name: "δ Corona Boreale",
		detail: "Corona Boreale · mag 4,59",
		proper: false
	},
	{
		x: .79301,
		y: .60587,
		z: -.0637,
		mag: 3.54,
		bv: -.036,
		name: "μ Serpente",
		detail: "Serpente · mag 3,54",
		proper: false
	},
	{
		x: .74757,
		y: .64947,
		z: -.13907,
		mag: 5.21,
		bv: 1.019,
		name: "ω Serpente",
		detail: "Serpente · mag 5,21",
		proper: false
	},
	{
		x: .72752,
		y: .6647,
		z: -.16999,
		mag: 3.71,
		bv: .147,
		name: "ε Serpente",
		detail: "Serpente · mag 3,71",
		proper: false
	},
	{
		x: .90734,
		y: .27258,
		z: .32006,
		mag: 3.97,
		bv: -.045,
		name: "χ Lupo",
		detail: "Lupo · mag 3,97",
		proper: false
	},
	{
		x: .90188,
		y: .36984,
		z: .22323,
		mag: 4.63,
		bv: -.072,
		name: "b Scorpione",
		detail: "Scorpione · mag 4,63",
		proper: false
	},
	{
		x: .34229,
		y: .7776,
		z: -.52742,
		mag: 4.79,
		bv: .996,
		name: "κ Corona Boreale",
		detail: "Corona Boreale · mag 4,79",
		proper: false
	},
	{
		x: .79342,
		y: .60431,
		z: -.07285,
		mag: 5.09,
		bv: .135,
		name: "b Serpente",
		detail: "Serpente · mag 5,09",
		proper: false
	},
	{
		x: .54431,
		y: .75129,
		z: -.37321,
		mag: 4.74,
		bv: 1.534,
		name: "ρ Serpente",
		detail: "Serpente · mag 4,74",
		proper: false
	},
	{
		x: .24232,
		y: .7696,
		z: -.59076,
		mag: 4.6,
		bv: .563,
		name: "χ Ercole",
		detail: "Ercole · mag 4,60",
		proper: false
	},
	{
		x: .89167,
		y: .42862,
		z: .14563,
		mag: 5.04,
		bv: -.014,
		name: "λ Bilancia",
		detail: "Bilancia · mag 5,04",
		proper: false
	},
	{
		x: .90541,
		y: .36834,
		z: .21108,
		mag: 4.59,
		bv: -.073,
		name: "A Scorpione",
		detail: "Scorpione · mag 4,59",
		proper: false
	},
	{
		x: .87964,
		y: .46511,
		z: .09951,
		mag: 4.13,
		bv: 1.003,
		name: "θ Bilancia",
		detail: "Bilancia · mag 4,13",
		proper: false
	},
	{
		x: .23434,
		y: .76456,
		z: -.60045,
		mag: 5.35,
		bv: 1.645,
		name: "2 Ercole",
		detail: "Ercole · mag 5,35",
		proper: false
	},
	{
		x: .77957,
		y: -.13094,
		z: .61247,
		mag: 2.83,
		bv: .315,
		name: "β Triangolo Australe",
		detail: "Triangolo Australe · mag 2,83",
		proper: false
	},
	{
		x: .73361,
		y: -.19906,
		z: .64976,
		mag: 5.11,
		bv: 1.108,
		name: "κ Triangolo Australe",
		detail: "Triangolo Australe · mag 5,11",
		proper: false
	},
	{
		x: .61825,
		y: .71564,
		z: -.32499,
		mag: 3.85,
		bv: .478,
		name: "γ Serpente",
		detail: "Serpente · mag 3,85",
		proper: false
	},
	{
		x: .91562,
		y: .31351,
		z: .25171,
		mag: 3.87,
		bv: -.199,
		name: "Iklil",
		detail: "ρ Scorpione · mag 3,87",
		proper: true
	},
	{
		x: .91599,
		y: .25461,
		z: .31007,
		mag: 5.14,
		bv: .129,
		name: "ξ1 Lupo",
		detail: "Lupo · mag 5,14",
		proper: false
	},
	{
		x: .47675,
		y: .75222,
		z: -.45484,
		mag: 4.14,
		bv: 1.231,
		name: "ε Corona Boreale",
		detail: "Corona Boreale · mag 4,14",
		proper: false
	},
	{
		x: .0551,
		y: .72538,
		z: -.68614,
		mag: 4.96,
		bv: .269,
		name: "HD 143466",
		detail: "Dragone · mag 4,96",
		proper: false
	},
	{
		x: .87597,
		y: .47918,
		z: .05532,
		mag: 4.95,
		bv: -.08,
		name: "48 Bilancia",
		detail: "Bilancia · mag 4,95",
		proper: false
	},
	{
		x: .91505,
		y: .3458,
		z: .20764,
		mag: 2.89,
		bv: -.18,
		name: "Fang",
		detail: "π Scorpione · mag 2,89",
		proper: true
	},
	{
		x: .90637,
		y: .14914,
		z: .3953,
		mag: 4.99,
		bv: .988,
		name: "HIP 78323",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: .915,
		y: .19096,
		z: .35539,
		mag: 3.42,
		bv: -.206,
		name: "η Lupo",
		detail: "Lupo · mag 3,42",
		proper: false
	},
	{
		x: .91018,
		y: .38253,
		z: .1589,
		mag: 2.29,
		bv: -.117,
		name: "Dschubba",
		detail: "δ Scorpione · mag 2,29",
		proper: true
	},
	{
		x: .60019,
		y: .7125,
		z: -.36347,
		mag: 5.1,
		bv: .992,
		name: "r Ercole",
		detail: "Ercole · mag 5,10",
		proper: false
	},
	{
		x: .44114,
		y: .74844,
		z: -.4952,
		mag: 4.98,
		bv: -.05,
		name: "ι Corona Boreale",
		detail: "Corona Boreale · mag 4,98",
		proper: false
	},
	{
		x: -.00236,
		y: .70196,
		z: -.71221,
		mag: 4.01,
		bv: .528,
		name: "θ Dragone",
		detail: "Dragone · mag 4,01",
		proper: false
	},
	{
		x: .53861,
		y: .72874,
		z: -.4229,
		mag: 4.82,
		bv: .066,
		name: "π Serpente",
		detail: "Serpente · mag 4,82",
		proper: false
	},
	{
		x: .19915,
		y: .7429,
		z: -.63909,
		mag: 4.72,
		bv: -.094,
		name: "υ Ercole",
		detail: "Ercole · mag 4,72",
		proper: false
	},
	{
		x: .88182,
		y: .04398,
		z: .46953,
		mag: 4.65,
		bv: .902,
		name: "η Squadra",
		detail: "Squadra · mag 4,65",
		proper: false
	},
	{
		x: .92144,
		y: .33718,
		z: .19301,
		mag: 4.96,
		bv: 1.234,
		name: "HIP 78650",
		detail: "mag 4,96",
		proper: false
	},
	{
		x: .9189,
		y: .18098,
		z: .35053,
		mag: 4.9,
		bv: -.146,
		name: "HIP 78655",
		detail: "mag 4,90",
		proper: false
	},
	{
		x: .83044,
		y: -.06834,
		z: .5529,
		mag: 4.63,
		bv: .252,
		name: "ι1 Squadra",
		detail: "Squadra · mag 4,63",
		proper: false
	},
	{
		x: .871,
		y: .49129,
		z: -26e-5,
		mag: 4.16,
		bv: .46,
		name: "Grafias",
		detail: "HIP 78727 · mag 4,16",
		proper: true
	},
	{
		x: .90991,
		y: .40034,
		z: .10862,
		mag: 2.56,
		bv: -.065,
		name: "Acrab",
		detail: "β1 Scorpione · mag 2,56",
		proper: true
	},
	{
		x: .9099,
		y: .40037,
		z: .10855,
		mag: 4.9,
		bv: -.024,
		name: "β2 Scorpione",
		detail: "Scorpione · mag 4,90",
		proper: false
	},
	{
		x: .9033,
		y: .09017,
		z: .41944,
		mag: 4.73,
		bv: .23,
		name: "δ Squadra",
		detail: "Squadra · mag 4,73",
		proper: false
	},
	{
		x: .92619,
		y: .19634,
		z: .32191,
		mag: 4.22,
		bv: -.184,
		name: "θ Lupo",
		detail: "Lupo · mag 4,22",
		proper: false
	},
	{
		x: .91467,
		y: .38708,
		z: .11637,
		mag: 3.93,
		bv: -.046,
		name: "Jabhat Acrabi",
		detail: "ω1 Scorpione · mag 3,93",
		proper: true
	},
	{
		x: .91616,
		y: .38323,
		z: .11742,
		mag: 4.31,
		bv: .831,
		name: "ω2 Scorpione",
		detail: "Scorpione · mag 4,31",
		proper: false
	},
	{
		x: .62022,
		y: .69012,
		z: -.37291,
		mag: 5,
		bv: .931,
		name: "Marsic",
		detail: "κ Ercole · mag 5,00",
		proper: true
	},
	{
		x: .92905,
		y: .31929,
		z: .18685,
		mag: 5.35,
		bv: 1.643,
		name: "HIP 79050",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: .2233,
		y: .73263,
		z: -.64295,
		mag: 4.23,
		bv: -.045,
		name: "φ Ercole",
		detail: "Ercole · mag 4,23",
		proper: false
	},
	{
		x: .35421,
		y: .73696,
		z: -.57569,
		mag: 4.73,
		bv: 1.015,
		name: "τ Corona Boreale",
		detail: "Corona Boreale · mag 4,73",
		proper: false
	},
	{
		x: .93596,
		y: .27541,
		z: .21939,
		mag: 5.09,
		bv: 1.131,
		name: "HIP 79302",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: .91846,
		y: .38591,
		z: .08668,
		mag: 4,
		bv: .076,
		name: "Jabbah",
		detail: "ν Scorpione · mag 4,00",
		proper: true
	},
	{
		x: .87534,
		y: .48194,
		z: -.03884,
		mag: 4.93,
		bv: .087,
		name: "ψ Scorpione",
		detail: "Scorpione · mag 4,93",
		proper: false
	},
	{
		x: .93663,
		y: .28962,
		z: .1971,
		mag: 4.58,
		bv: -.172,
		name: "c2 Scorpione",
		detail: "Scorpione · mag 4,58",
		proper: false
	},
	{
		x: .86073,
		y: -.04421,
		z: .50714,
		mag: 4.95,
		bv: 1.017,
		name: "κ Squadra",
		detail: "Squadra · mag 4,95",
		proper: false
	},
	{
		x: .88804,
		y: .45932,
		z: -.02019,
		mag: 5.24,
		bv: 1.394,
		name: "χ Scorpione",
		detail: "Scorpione · mag 5,24",
		proper: false
	},
	{
		x: .83617,
		y: .53283,
		z: -.13009,
		mag: 2.73,
		bv: 1.584,
		name: "Yed Prior",
		detail: "δ Ofiucho · mag 2,73",
		proper: true
	},
	{
		x: .40071,
		y: .72105,
		z: -.56526,
		mag: 5.23,
		bv: .599,
		name: "σ Corona Boreale",
		detail: "Corona Boreale · mag 5,23",
		proper: false
	},
	{
		x: .9032,
		y: .04419,
		z: .42694,
		mag: 5.13,
		bv: -.114,
		name: "θ Squadra",
		detail: "Squadra · mag 5,13",
		proper: false
	},
	{
		x: .792,
		y: -.16045,
		z: .58906,
		mag: 3.86,
		bv: 1.105,
		name: "δ Triangolo Australe",
		detail: "Triangolo Australe · mag 3,86",
		proper: false
	},
	{
		x: .89129,
		y: .00679,
		z: .45338,
		mag: 4.97,
		bv: .788,
		name: "γ1 Squadra",
		detail: "Squadra · mag 4,97",
		proper: false
	},
	{
		x: -.26934,
		y: .57824,
		z: -.77013,
		mag: 4.95,
		bv: .393,
		name: "Anwa Farkadain",
		detail: "η Orsa Minore · mag 4,95",
		proper: true
	},
	{
		x: .94489,
		y: .26569,
		z: .19129,
		mag: 4.8,
		bv: .008,
		name: "d Scorpione",
		detail: "Scorpione · mag 4,80",
		proper: false
	},
	{
		x: .84929,
		y: .51219,
		z: -.12793,
		mag: 3.23,
		bv: .966,
		name: "Yed Posterior",
		detail: "ε Ofiucho · mag 3,23",
		proper: true
	},
	{
		x: .21266,
		y: .70756,
		z: -.6739,
		mag: 3.91,
		bv: -.151,
		name: "τ Ercole",
		detail: "Ercole · mag 3,91",
		proper: false
	},
	{
		x: .89338,
		y: 18e-5,
		z: .4493,
		mag: 4.01,
		bv: 1.08,
		name: "γ2 Squadra",
		detail: "Squadra · mag 4,01",
		proper: false
	},
	{
		x: .63426,
		y: -.34028,
		z: .69421,
		mag: 4.68,
		bv: 1.68,
		name: "δ1 Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 4,68",
		proper: false
	},
	{
		x: .63463,
		y: -.34003,
		z: .69399,
		mag: 5.27,
		bv: 1.413,
		name: "δ2 Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 5,27",
		proper: false
	},
	{
		x: .94227,
		y: .30985,
		z: .12693,
		mag: 4.55,
		bv: .758,
		name: "ο Scorpione",
		detail: "Scorpione · mag 4,55",
		proper: false
	},
	{
		x: .94534,
		y: .29235,
		z: .14444,
		mag: 2.9,
		bv: .299,
		name: "Alniyat",
		detail: "σ Scorpione · mag 2,90",
		proper: true
	},
	{
		x: -.16059,
		y: .61879,
		z: -.76896,
		mag: 5.26,
		bv: 1.115,
		name: "HIP 80161",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: .61345,
		y: .66,
		z: -.43368,
		mag: 3.74,
		bv: .299,
		name: "γ Ercole",
		detail: "Ercole · mag 3,74",
		proper: false
	},
	{
		x: .80883,
		y: .54794,
		z: -.21346,
		mag: 4.82,
		bv: .338,
		name: "σ Serpente",
		detail: "Serpente · mag 4,82",
		proper: false
	},
	{
		x: .45327,
		y: .6973,
		z: -.55527,
		mag: 4.86,
		bv: .97,
		name: "ξ Corona Boreale",
		detail: "Corona Boreale · mag 4,86",
		proper: false
	},
	{
		x: .41063,
		y: .70152,
		z: -.58245,
		mag: 5.2,
		bv: 1.631,
		name: "ν1 Corona Boreale",
		detail: "Corona Boreale · mag 5,20",
		proper: false
	},
	{
		x: .89889,
		y: .00218,
		z: .43817,
		mag: 5.32,
		bv: -.047,
		name: "HIP 80208",
		detail: "mag 5,32",
		proper: false
	},
	{
		x: -.03406,
		y: .65541,
		z: -.7545,
		mag: 2.73,
		bv: .91,
		name: "Athebyne",
		detail: "η Dragone · mag 2,73",
		proper: true
	},
	{
		x: .9365,
		y: .34501,
		z: .06271,
		mag: 4.48,
		bv: .996,
		name: "ψ Ofiucho",
		detail: "Ofiucho · mag 4,48",
		proper: false
	},
	{
		x: .68025,
		y: .62422,
		z: -.38419,
		mag: 4.57,
		bv: .002,
		name: "Cujam",
		detail: "ω Ercole · mag 4,57",
		proper: true
	},
	{
		x: .94695,
		y: .30381,
		z: .10478,
		mag: 4.57,
		bv: .227,
		name: "ρ Ofiucho",
		detail: "Ofiucho · mag 4,57",
		proper: false
	},
	{
		x: .93498,
		y: .35309,
		z: .03375,
		mag: 4.22,
		bv: .217,
		name: "χ Ofiucho",
		detail: "Ofiucho · mag 4,22",
		proper: false
	},
	{
		x: .91341,
		y: .0171,
		z: .40668,
		mag: 4.46,
		bv: -.07,
		name: "ε Squadra",
		detail: "Squadra · mag 4,46",
		proper: false
	},
	{
		x: .88182,
		y: .45735,
		z: -.11499,
		mag: 5.24,
		bv: 1.721,
		name: "HD 148349",
		detail: "Ofiucho · mag 5,24",
		proper: false
	},
	{
		x: .88685,
		y: .45002,
		z: -.10481,
		mag: 4.62,
		bv: .185,
		name: "υ Ofiucho",
		detail: "Ofiucho · mag 4,62",
		proper: false
	},
	{
		x: .79616,
		y: -.1819,
		z: .5771,
		mag: 5.28,
		bv: .383,
		name: "ι Triangolo Australe",
		detail: "Triangolo Australe · mag 5,28",
		proper: false
	},
	{
		x: -.15207,
		y: .61386,
		z: -.77463,
		mag: 4.94,
		bv: -.051,
		name: "A Dragone",
		detail: "Dragone · mag 4,94",
		proper: false
	},
	{
		x: .73628,
		y: -.25163,
		z: .62816,
		mag: 4.9,
		bv: .555,
		name: "ζ Triangolo Australe",
		detail: "Triangolo Australe · mag 4,90",
		proper: false
	},
	{
		x: .29216,
		y: .69107,
		z: -.66111,
		mag: 4.83,
		bv: 1.289,
		name: "g Ercole",
		detail: "Ercole · mag 4,83",
		proper: false
	},
	{
		x: .95611,
		y: .2599,
		z: .13527,
		mag: 1.06,
		bv: 1.865,
		name: "Antares",
		detail: "α Scorpione · mag 1,06",
		proper: true
	},
	{
		x: .92182,
		y: .0275,
		z: .38664,
		mag: 5.35,
		bv: .488,
		name: "HD 148379",
		detail: "Squadra · mag 5,35",
		proper: false
	},
	{
		x: .95526,
		y: .27221,
		z: .11563,
		mag: 4.79,
		bv: -.116,
		name: "i Scorpione",
		detail: "Scorpione · mag 4,79",
		proper: false
	},
	{
		x: .5934,
		y: .64563,
		z: -.48066,
		mag: 2.78,
		bv: .947,
		name: "Kornephoros",
		detail: "β Ercole · mag 2,78",
		proper: true
	},
	{
		x: .60699,
		y: .64036,
		z: -.47064,
		mag: 5.24,
		bv: 1.274,
		name: "s Ercole",
		detail: "Ercole · mag 5,24",
		proper: false
	},
	{
		x: .81959,
		y: -.15777,
		z: .5508,
		mag: 5.19,
		bv: 1.236,
		name: "HIP 80874",
		detail: "mag 5,19",
		proper: false
	},
	{
		x: .81183,
		y: .52762,
		z: -.2501,
		mag: 3.82,
		bv: .022,
		name: "Marfik",
		detail: "λ Ofiucho · mag 3,82",
		proper: true
	},
	{
		x: .93306,
		y: .35971,
		z: -.00204,
		mag: 4.29,
		bv: .924,
		name: "φ Ofiucho",
		detail: "Ofiucho · mag 4,29",
		proper: false
	},
	{
		x: .95752,
		y: .1602,
		z: .23978,
		mag: 4.24,
		bv: -.168,
		name: "N Scorpione",
		detail: "Scorpione · mag 4,24",
		proper: false
	},
	{
		x: .9412,
		y: .0758,
		z: .32924,
		mag: 5.31,
		bv: .299,
		name: "HD 148688",
		detail: "Scorpione · mag 5,31",
		proper: false
	},
	{
		x: .95001,
		y: .30612,
		z: .06144,
		mag: 4.45,
		bv: .13,
		name: "ω Ofiucho",
		detail: "Ofiucho · mag 4,45",
		proper: false
	},
	{
		x: .71811,
		y: .58742,
		z: -.37317,
		mag: 4.84,
		bv: 1.495,
		name: "h Ercole",
		detail: "Ercole · mag 4,84",
		proper: false
	},
	{
		x: .63502,
		y: -.35038,
		z: .68846,
		mag: 3.86,
		bv: .923,
		name: "γ Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 3,86",
		proper: false
	},
	{
		x: .93503,
		y: .04384,
		z: .35183,
		mag: 4.86,
		bv: .045,
		name: "μ Squadra",
		detail: "Squadra · mag 4,86",
		proper: false
	},
	{
		x: .28821,
		y: .67815,
		z: -.67606,
		mag: 4.2,
		bv: -.013,
		name: "σ Ercole",
		detail: "Ercole · mag 4,20",
		proper: false
	},
	{
		x: .96449,
		y: .22169,
		z: .14355,
		mag: 2.82,
		bv: -.206,
		name: "Paikauhale",
		detail: "τ Scorpione · mag 2,82",
		proper: true
	},
	{
		x: .11758,
		y: .6623,
		z: -.73996,
		mag: 5.07,
		bv: -.027,
		name: "17 Dragone",
		detail: "Dragone · mag 5,07",
		proper: false
	},
	{
		x: .96155,
		y: .14073,
		z: .23583,
		mag: 4.18,
		bv: 1.535,
		name: "H Scorpione",
		detail: "Scorpione · mag 4,18",
		proper: false
	},
	{
		x: .91095,
		y: .40015,
		z: -.10027,
		mag: 2.54,
		bv: .038,
		name: "Saik",
		detail: "ζ Ofiucho · mag 2,54",
		proper: true
	},
	{
		x: .06686,
		y: .65164,
		z: -.75558,
		mag: 5.28,
		bv: 1.055,
		name: "HIP 81437",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: .18592,
		y: .6637,
		z: -.72452,
		mag: 4.86,
		bv: 1.562,
		name: "42 Ercole",
		detail: "Ercole · mag 4,86",
		proper: false
	},
	{
		x: -.07635,
		y: .61779,
		z: -.78262,
		mag: 4.84,
		bv: 1.212,
		name: "g Dragone",
		detail: "Dragone · mag 4,84",
		proper: false
	},
	{
		x: .46266,
		y: .64665,
		z: -.60646,
		mag: 2.81,
		bv: .65,
		name: "Rutilicus",
		detail: "ζ Ercole · mag 2,81",
		proper: true
	},
	{
		x: .94864,
		y: .31607,
		z: -.01356,
		mag: 4.91,
		bv: 1.095,
		name: "24 Scorpione",
		detail: "Scorpione · mag 4,91",
		proper: false
	},
	{
		x: .35155,
		y: .65479,
		z: -.66908,
		mag: 3.48,
		bv: .916,
		name: "η Ercole",
		detail: "Ercole · mag 3,48",
		proper: false
	},
	{
		x: .65456,
		y: -.34301,
		z: .67372,
		mag: 4.23,
		bv: 1.06,
		name: "β Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 4,23",
		proper: false
	},
	{
		x: .05815,
		y: .63648,
		z: -.7691,
		mag: 4.84,
		bv: .375,
		name: "HD 151613",
		detail: "mag 4,84",
		proper: false
	},
	{
		x: .76387,
		y: .52657,
		z: -.37312,
		mag: 5.15,
		bv: 1.535,
		name: "i Ercole",
		detail: "Ercole · mag 5,15",
		proper: false
	},
	{
		x: -.36202,
		y: .51576,
		z: -.77649,
		mag: 4.21,
		bv: .897,
		name: "Circitores",
		detail: "ε Orsa Minore · mag 4,21",
		proper: true
	},
	{
		x: .77494,
		y: -.24078,
		z: .58437,
		mag: 5.1,
		bv: -.08,
		name: "HD 150549",
		detail: "Triangolo Australe · mag 5,10",
		proper: false
	},
	{
		x: .79964,
		y: .49704,
		z: -.33695,
		mag: 5.22,
		bv: -.001,
		name: "l Ercole",
		detail: "Ercole · mag 5,22",
		proper: false
	},
	{
		x: .75539,
		y: -.26318,
		z: .6001,
		mag: 1.91,
		bv: 1.447,
		name: "Atria",
		detail: "α Triangolo Australe · mag 1,91",
		proper: true
	},
	{
		x: .24187,
		y: .64226,
		z: -.72733,
		mag: 4.82,
		bv: .087,
		name: "52 Ercole",
		detail: "Ercole · mag 4,82",
		proper: false
	},
	{
		x: .85181,
		y: -.15926,
		z: .49905,
		mag: 3.77,
		bv: 1.562,
		name: "η Altare",
		detail: "Altare · mag 3,77",
		proper: false
	},
	{
		x: .92488,
		y: .35711,
		z: -.13061,
		mag: 4.64,
		bv: .478,
		name: "20 Ofiucho",
		detail: "Ofiucho · mag 4,64",
		proper: false
	},
	{
		x: .97457,
		y: .11426,
		z: .19277,
		mag: 2.29,
		bv: 1.144,
		name: "Larawag",
		detail: "ε Scorpione · mag 2,29",
		proper: true
	},
	{
		x: .95884,
		y: .03382,
		z: .28192,
		mag: 5.23,
		bv: .047,
		name: "HD 151804",
		detail: "Scorpione · mag 5,23",
		proper: false
	},
	{
		x: .57166,
		y: .59368,
		z: -.56635,
		mag: 5.03,
		bv: 1.246,
		name: "51 Ercole",
		detail: "Ercole · mag 5,03",
		proper: false
	},
	{
		x: .96852,
		y: .06826,
		z: .23941,
		mag: 3,
		bv: -.2,
		name: "Xamidimura",
		detail: "μ1 Scorpione · mag 3,00",
		proper: true
	},
	{
		x: .96891,
		y: .06735,
		z: .23805,
		mag: 3.56,
		bv: -.21,
		name: "Pipirima",
		detail: "μ2 Scorpione · mag 3,56",
		proper: true
	},
	{
		x: .47076,
		y: .61383,
		z: -.63371,
		mag: 5.34,
		bv: .319,
		name: "53 Ercole",
		detail: "Ercole · mag 5,34",
		proper: false
	},
	{
		x: .95634,
		y: .01518,
		z: .29188,
		mag: 4.7,
		bv: .444,
		name: "ζ1 Scorpione",
		detail: "Scorpione · mag 4,70",
		proper: false
	},
	{
		x: .75428,
		y: .50995,
		z: -.41354,
		mag: 4.39,
		bv: -.088,
		name: "ι Ofiucho",
		detail: "Ofiucho · mag 4,39",
		proper: false
	},
	{
		x: .95671,
		y: .01372,
		z: .29073,
		mag: 3.62,
		bv: 1.393,
		name: "Grafias",
		detail: "ζ2 Scorpione · mag 3,62",
		proper: true
	},
	{
		x: .90051,
		y: .38295,
		z: -.206,
		mag: 5.23,
		bv: 1.1,
		name: "23 Ofiucho",
		detail: "Ofiucho · mag 5,23",
		proper: false
	},
	{
		x: .65739,
		y: .55374,
		z: -.51109,
		mag: 5.35,
		bv: 1.407,
		name: "54 Ercole",
		detail: "Ercole · mag 5,35",
		proper: false
	},
	{
		x: -.07957,
		y: .5943,
		z: -.8003,
		mag: 4.88,
		bv: .481,
		name: "h Dragone",
		detail: "Dragone · mag 4,88",
		proper: false
	},
	{
		x: .76582,
		y: .49249,
		z: -.41347,
		mag: 3.19,
		bv: 1.16,
		name: "κ Ofiucho",
		detail: "Ofiucho · mag 3,19",
		proper: false
	},
	{
		x: .88032,
		y: -.14271,
		z: .4524,
		mag: 3.12,
		bv: 1.552,
		name: "ζ Altare",
		detail: "Altare · mag 3,12",
		proper: false
	},
	{
		x: .9014,
		y: -.11471,
		z: .41752,
		mag: 4.06,
		bv: 1.452,
		name: "ε1 Altare",
		detail: "Altare · mag 4,06",
		proper: false
	},
	{
		x: .48744,
		y: .59026,
		z: -.64343,
		mag: 3.92,
		bv: -.018,
		name: "ε Ercole",
		detail: "Ercole · mag 3,92",
		proper: false
	},
	{
		x: .89196,
		y: .37756,
		z: -.2487,
		mag: 4.82,
		bv: 1.483,
		name: "30 Ofiucho",
		detail: "Ofiucho · mag 4,82",
		proper: false
	},
	{
		x: .44827,
		y: .59406,
		z: -.66794,
		mag: 5.27,
		bv: .028,
		name: "d Ercole",
		detail: "Ercole · mag 5,27",
		proper: false
	},
	{
		x: .98498,
		y: .10408,
		z: .1378,
		mag: 5.03,
		bv: -.1,
		name: "HIP 83336",
		detail: "mag 5,03",
		proper: false
	},
	{
		x: .71647,
		y: .50394,
		z: -.4824,
		mag: 4.97,
		bv: 1.6,
		name: "32 Ofiucho",
		detail: "Ofiucho · mag 4,97",
		proper: false
	},
	{
		x: .90243,
		y: -.12287,
		z: .41295,
		mag: 5.27,
		bv: .498,
		name: "ε2 Altare",
		detail: "Altare · mag 5,27",
		proper: false
	},
	{
		x: .98446,
		y: .07472,
		z: .15894,
		mag: 4.83,
		bv: .257,
		name: "k Scorpione",
		detail: "Scorpione · mag 4,83",
		proper: false
	},
	{
		x: .10699,
		y: .60206,
		z: -.79125,
		mag: 4.91,
		bv: .471,
		name: "Alrakis",
		detail: "μ Dragone · mag 4,91",
		proper: true
	},
	{
		x: .73378,
		y: .4881,
		z: -.47257,
		mag: 4.89,
		bv: .125,
		name: "60 Ercole",
		detail: "Ercole · mag 4,89",
		proper: false
	},
	{
		x: -.08572,
		y: .57415,
		z: -.81425,
		mag: 3.17,
		bv: -.12,
		name: "Aldhibah",
		detail: "ζ Dragone · mag 3,17",
		proper: true
	},
	{
		x: .33853,
		y: .58765,
		z: -.73489,
		mag: 5.07,
		bv: 1.275,
		name: "HIP 83947",
		detail: "mag 5,07",
		proper: false
	},
	{
		x: .96359,
		y: .24206,
		z: -.11356,
		mag: 2.43,
		bv: .059,
		name: "Sabik",
		detail: "η Ofiucho · mag 2,43",
		proper: true
	},
	{
		x: .95584,
		y: -.05009,
		z: .28959,
		mag: 5.06,
		bv: .867,
		name: "HIP 84033",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: .96222,
		y: -.0402,
		z: .2693,
		mag: 3.32,
		bv: .441,
		name: "η Scorpione",
		detail: "Scorpione · mag 3,32",
		proper: false
	},
	{
		x: .7624,
		y: .44994,
		z: -.46508,
		mag: 5.32,
		bv: 1.593,
		name: "37 Ofiucho",
		detail: "Ofiucho · mag 5,32",
		proper: false
	},
	{
		x: .71973,
		y: .46667,
		z: -.51402,
		mag: 2.78,
		bv: 1.164,
		name: "Rasalgethi",
		detail: "α1 Ercole · mag 2,78",
		proper: true
	},
	{
		x: .58389,
		y: .52136,
		z: -.6223,
		mag: 3.12,
		bv: .08,
		name: "Sarin",
		detail: "δ Ercole · mag 3,12",
		proper: true
	},
	{
		x: .40457,
		y: .56414,
		z: -.71978,
		mag: 3.16,
		bv: 1.437,
		name: "π Ercole",
		detail: "Ercole · mag 3,16",
		proper: false
	},
	{
		x: .99236,
		y: .11976,
		z: .02982,
		mag: 4.33,
		bv: .855,
		name: "Guniibuu",
		detail: "A Ofiucho · mag 4,33",
		proper: true
	},
	{
		x: .87189,
		y: .35427,
		z: -.33808,
		mag: 4.72,
		bv: 1.119,
		name: "41 Ofiucho",
		detail: "Ofiucho · mag 4,72",
		proper: false
	},
	{
		x: .46333,
		y: .54664,
		z: -.6975,
		mag: 4.8,
		bv: -.166,
		name: "u Ercole",
		detail: "Ercole · mag 4,80",
		proper: false
	},
	{
		x: .39793,
		y: .55794,
		z: -.72825,
		mag: 4.64,
		bv: .043,
		name: "e Ercole",
		detail: "Ercole · mag 4,64",
		proper: false
	},
	{
		x: .99093,
		y: .13406,
		z: -.00938,
		mag: 5.14,
		bv: 1.046,
		name: "ο Ofiucho",
		detail: "Ofiucho · mag 5,14",
		proper: false
	},
	{
		x: .76232,
		y: .43034,
		z: -.4834,
		mag: 5.03,
		bv: 1.539,
		name: "e Ofiucho",
		detail: "Ofiucho · mag 5,03",
		proper: false
	},
	{
		x: .67702,
		y: .46898,
		z: -.56719,
		mag: 5.01,
		bv: 1.654,
		name: "HD 157049",
		detail: "Ercole · mag 5,01",
		proper: false
	},
	{
		x: .95584,
		y: .23281,
		z: -.17935,
		mag: 4.32,
		bv: .037,
		name: "ν Serpente",
		detail: "Serpente · mag 4,32",
		proper: false
	},
	{
		x: .5911,
		y: .50075,
		z: -.63234,
		mag: 5.13,
		bv: 0,
		name: "70 Ercole",
		detail: "Ercole · mag 5,13",
		proper: false
	},
	{
		x: .98599,
		y: .15492,
		z: -.06186,
		mag: 4.39,
		bv: .394,
		name: "Aggia",
		detail: "ξ Ofiucho · mag 4,39",
		proper: true
	},
	{
		x: .7772,
		y: -.294,
		z: .55635,
		mag: 4.76,
		bv: 1.194,
		name: "ζ Uccello del Paradiso",
		detail: "Uccello del Paradiso · mag 4,76",
		proper: false
	},
	{
		x: .99344,
		y: .11411,
		z: -.00805,
		mag: 3.27,
		bv: -.186,
		name: "Garafsa",
		detail: "θ Ofiucho · mag 3,27",
		proper: true
	},
	{
		x: .94533,
		y: -.11023,
		z: .30691,
		mag: 5.21,
		bv: -.097,
		name: "ι Altare",
		detail: "Altare · mag 5,21",
		proper: false
	},
	{
		x: .99627,
		y: .07915,
		z: .03445,
		mag: 5.3,
		bv: 1.549,
		name: "43 Ofiucho",
		detail: "Ofiucho · mag 5,30",
		proper: false
	},
	{
		x: .40223,
		y: .54039,
		z: -.73904,
		mag: 4.15,
		bv: -.011,
		name: "ρ Ercole",
		detail: "Ercole · mag 4,15",
		proper: false
	},
	{
		x: .96216,
		y: -.08053,
		z: .26031,
		mag: 5.1,
		bv: -.052,
		name: "HIP 85162",
		detail: "mag 5,10",
		proper: false
	},
	{
		x: .89226,
		y: -.19103,
		z: .40913,
		mag: 2.84,
		bv: 1.479,
		name: "β Altare",
		detail: "Altare · mag 2,84",
		proper: false
	},
	{
		x: .8856,
		y: -.199,
		z: .41966,
		mag: 3.31,
		bv: -.15,
		name: "γ Altare",
		detail: "Altare · mag 3,31",
		proper: false
	},
	{
		x: .92712,
		y: -.14692,
		z: .34477,
		mag: 5.19,
		bv: 1.055,
		name: "κ Altare",
		detail: "Altare · mag 5,19",
		proper: false
	},
	{
		x: .99374,
		y: .10776,
		z: -.02964,
		mag: 4.16,
		bv: .283,
		name: "b Ofiucho",
		detail: "Ofiucho · mag 4,16",
		proper: false
	},
	{
		x: .83491,
		y: .35437,
		z: -.42113,
		mag: 4.34,
		bv: 1.48,
		name: "σ Ofiucho",
		detail: "Ofiucho · mag 4,34",
		proper: false
	},
	{
		x: .91162,
		y: .28017,
		z: -.30076,
		mag: 4.53,
		bv: .385,
		name: "47 Ofiucho",
		detail: "Ofiucho · mag 4,53",
		proper: false
	},
	{
		x: .95474,
		y: -.10351,
		z: .27885,
		mag: 5.28,
		bv: -.058,
		name: "HIP 85389",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: .99746,
		y: .04977,
		z: .05097,
		mag: 4.28,
		bv: .402,
		name: "d Ofiucho",
		detail: "Ofiucho · mag 4,28",
		proper: false
	},
	{
		x: .88205,
		y: .29968,
		z: -.36356,
		mag: 5.31,
		bv: .715,
		name: "HD 158614",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: .15116,
		y: .54917,
		z: -.82192,
		mag: 2.79,
		bv: .954,
		name: "Rastaban",
		detail: "β Dragone · mag 2,79",
		proper: true
	},
	{
		x: .57125,
		y: .4763,
		z: -.66844,
		mag: 4.41,
		bv: 1.434,
		name: "Maasym",
		detail: "λ Ercole · mag 4,41",
		proper: true
	},
	{
		x: .98791,
		y: -.03219,
		z: .15163,
		mag: 2.7,
		bv: -.179,
		name: "Lesath",
		detail: "υ Scorpione · mag 2,70",
		proper: true
	},
	{
		x: .84951,
		y: -.24794,
		z: .46567,
		mag: 3.6,
		bv: -.104,
		name: "δ Altare",
		detail: "Altare · mag 3,60",
		proper: false
	},
	{
		x: .9947,
		y: .09304,
		z: -.04378,
		mag: 4.78,
		bv: .016,
		name: "c Ofiucho",
		detail: "Ofiucho · mag 4,78",
		proper: false
	},
	{
		x: .93294,
		y: -.15345,
		z: .3257,
		mag: 2.84,
		bv: -.136,
		name: "Choo",
		detail: "α Altare · mag 2,84",
		proper: true
	},
	{
		x: -.12368,
		y: .53583,
		z: -.83522,
		mag: 5.07,
		bv: 1.077,
		name: "Adfar Aldib",
		detail: "f Dragone · mag 5,07",
		proper: true
	},
	{
		x: .10158,
		y: .54661,
		z: -.8312,
		mag: 4.89,
		bv: .251,
		name: "Kuma",
		detail: "ν1 Dragone · mag 4,89",
		proper: true
	},
	{
		x: -.43096,
		y: .47313,
		z: -.76839,
		mag: 4.35,
		bv: .021,
		name: "Yildun",
		detail: "δ Orsa Minore · mag 4,35",
		proper: true
	},
	{
		x: .10179,
		y: .54642,
		z: -.8313,
		mag: 4.86,
		bv: .279,
		name: "Kuma",
		detail: "ν2 Dragone · mag 4,86",
		proper: true
	},
	{
		x: .9889,
		y: -.03864,
		z: .14348,
		mag: 1.62,
		bv: -.231,
		name: "Shaula",
		detail: "λ Scorpione · mag 1,62",
		proper: true
	},
	{
		x: .74807,
		y: .38378,
		z: -.54139,
		mag: 2.08,
		bv: .155,
		name: "Rasalhague",
		detail: "α Ofiucho · mag 2,08",
		proper: true
	},
	{
		x: -.01459,
		y: .5395,
		z: -.84186,
		mag: 5.23,
		bv: .602,
		name: "26 Dragone",
		detail: "Dragone · mag 5,23",
		proper: false
	},
	{
		x: .95278,
		y: -.13192,
		z: .2735,
		mag: 4.56,
		bv: -.02,
		name: "σ Altare",
		detail: "Altare · mag 4,56",
		proper: false
	},
	{
		x: .98517,
		y: -.06155,
		z: .16016,
		mag: 4.26,
		bv: 1.075,
		name: "Q Scorpione",
		detail: "Scorpione · mag 4,26",
		proper: false
	},
	{
		x: .21562,
		y: .53074,
		z: -.81965,
		mag: 5.35,
		bv: 1.142,
		name: "y Ercole",
		detail: "Ercole · mag 5,35",
		proper: false
	},
	{
		x: -.13411,
		y: .52797,
		z: -.83861,
		mag: 4.77,
		bv: .43,
		name: "Al Dhih",
		detail: "ω Dragone · mag 4,77",
		proper: true
	},
	{
		x: .96962,
		y: -.10411,
		z: .22138,
		mag: 1.86,
		bv: .406,
		name: "Sargas",
		detail: "θ Scorpione · mag 1,86",
		proper: true
	},
	{
		x: .9717,
		y: .15065,
		z: -.18195,
		mag: 3.54,
		bv: .262,
		name: "ξ Serpente",
		detail: "Serpente · mag 3,54",
		proper: false
	},
	{
		x: .93422,
		y: .21368,
		z: -.28561,
		mag: 4.58,
		bv: .132,
		name: "μ Ofiucho",
		detail: "Ofiucho · mag 4,58",
		proper: false
	},
	{
		x: .90183,
		y: -.20864,
		z: .37839,
		mag: 5.25,
		bv: .195,
		name: "π Altare",
		detail: "Altare · mag 5,25",
		proper: false
	},
	{
		x: .25957,
		y: .519,
		z: -.81441,
		mag: 3.82,
		bv: -.179,
		name: "ι Ercole",
		detail: "Ercole · mag 3,82",
		proper: false
	},
	{
		x: .93665,
		y: -.16968,
		z: .30642,
		mag: 4.76,
		bv: .415,
		name: "λ Altare",
		detail: "Altare · mag 4,76",
		proper: false
	},
	{
		x: .96082,
		y: .15937,
		z: -.22675,
		mag: 4.24,
		bv: .086,
		name: "ο Serpente",
		detail: "Serpente · mag 4,24",
		proper: false
	},
	{
		x: -.1923,
		y: .5155,
		z: -.83503,
		mag: 4.57,
		bv: .434,
		name: "Dziban",
		detail: "ψ Dragone · mag 4,57",
		proper: true
	},
	{
		x: .98446,
		y: -.08227,
		z: .15515,
		mag: 2.39,
		bv: -.171,
		name: "Mula",
		detail: "κ Scorpione · mag 2,39",
		proper: true
	},
	{
		x: .99196,
		y: .07335,
		z: -.10312,
		mag: 4.86,
		bv: .469,
		name: "58 Ofiucho",
		detail: "Ofiucho · mag 4,86",
		proper: false
	},
	{
		x: .83381,
		y: .29556,
		z: -.46626,
		mag: 2.76,
		bv: 1.168,
		name: "Cebalrai",
		detail: "β Ofiucho · mag 2,76",
		proper: true
	},
	{
		x: .92119,
		y: -.19934,
		z: .33418,
		mag: 5.12,
		bv: .694,
		name: "Cervantes",
		detail: "μ Altare · mag 5,12",
		proper: true
	},
	{
		x: .81119,
		y: -.30487,
		z: .49903,
		mag: 3.61,
		bv: 1.161,
		name: "η Pavone",
		detail: "Pavone · mag 3,61",
		proper: false
	},
	{
		x: .54965,
		y: .4325,
		z: -.71473,
		mag: 3.42,
		bv: .75,
		name: "μ Ercole",
		detail: "Ercole · mag 3,42",
		proper: false
	},
	{
		x: .99979,
		y: .00365,
		z: -.02035,
		mag: 4.53,
		bv: .6,
		name: "3 Sagittario",
		detail: "Sagittario · mag 4,53",
		proper: false
	},
	{
		x: .98096,
		y: -.10672,
		z: .16225,
		mag: 2.99,
		bv: .509,
		name: "Girtab",
		detail: "ι1 Scorpione · mag 2,99",
		proper: true
	},
	{
		x: .85129,
		y: .26488,
		z: -.45293,
		mag: 3.75,
		bv: .043,
		name: "Muliphen",
		detail: "γ Ofiucho · mag 3,75",
		proper: true
	},
	{
		x: .57979,
		y: .41373,
		z: -.70191,
		mag: 5.09,
		bv: 1.141,
		name: "87 Ercole",
		detail: "Ercole · mag 5,09",
		proper: false
	},
	{
		x: .17844,
		y: .50452,
		z: -.84476,
		mag: 5.02,
		bv: .043,
		name: "30 Dragone",
		detail: "Dragone · mag 5,02",
		proper: false
	},
	{
		x: .99874,
		y: -.03644,
		z: .03437,
		mag: 4.79,
		bv: -.028,
		name: "HIP 87220",
		detail: "mag 4,79",
		proper: false
	},
	{
		x: -.27397,
		y: .49787,
		z: -.82284,
		mag: 5.02,
		bv: .518,
		name: "35 Dragone",
		detail: "Dragone · mag 5,02",
		proper: false
	},
	{
		x: .98989,
		y: -.08611,
		z: .11274,
		mag: 3.19,
		bv: 1.192,
		name: "Fuyue",
		detail: "G Scorpione · mag 3,19",
		proper: true
	},
	{
		x: .98098,
		y: -.11384,
		z: .15724,
		mag: 4.78,
		bv: .259,
		name: "Vanant",
		detail: "ι2 Scorpione · mag 4,78",
		proper: true
	},
	{
		x: .3589,
		y: .46423,
		z: -.80974,
		mag: 5.17,
		bv: 1.166,
		name: "f Ercole",
		detail: "Ercole · mag 5,17",
		proper: false
	},
	{
		x: .0728,
		y: .50346,
		z: -.86095,
		mag: 3.73,
		bv: 1.177,
		name: "Grumium",
		detail: "ξ Dragone · mag 3,73",
		proper: true
	},
	{
		x: .40301,
		y: .44495,
		z: -.79975,
		mag: 3.86,
		bv: 1.35,
		name: "θ Ercole",
		detail: "Ercole · mag 3,86",
		proper: false
	},
	{
		x: .16571,
		y: .48812,
		z: -.8569,
		mag: 2.24,
		bv: 1.521,
		name: "Eltanin",
		detail: "γ Dragone · mag 2,24",
		proper: true
	},
	{
		x: .96332,
		y: -.16837,
		z: .20894,
		mag: 4.85,
		bv: 1.176,
		name: "HIP 87846",
		detail: "mag 4,85",
		proper: false
	},
	{
		x: .52612,
		y: .40299,
		z: -.74886,
		mag: 3.7,
		bv: .935,
		name: "ξ Ercole",
		detail: "Ercole · mag 3,70",
		proper: false
	},
	{
		x: .9743,
		y: -.14936,
		z: .16859,
		mag: 4.88,
		bv: 1.617,
		name: "HIP 87936",
		detail: "mag 4,88",
		proper: false
	},
	{
		x: .51196,
		y: .4054,
		z: -.75732,
		mag: 4.41,
		bv: .38,
		name: "ν Ercole",
		detail: "Ercole · mag 4,41",
		proper: false
	},
	{
		x: .94312,
		y: .12143,
		z: -.3095,
		mag: 3.32,
		bv: .987,
		name: "Sinistra",
		detail: "ν Ofiucho · mag 3,32",
		proper: true
	},
	{
		x: .99843,
		y: -.05565,
		z: -.0062,
		mag: 5,
		bv: 1.654,
		name: "HIP 88060",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: .99448,
		y: -.0022,
		z: -.10491,
		mag: 4.74,
		bv: -.03,
		name: "4 Sagittario",
		detail: "Sagittario · mag 4,74",
		proper: false
	},
	{
		x: .69691,
		y: .32089,
		z: -.64136,
		mag: 4.67,
		bv: 1.254,
		name: "93 Ercole",
		detail: "Ercole · mag 4,67",
		proper: false
	},
	{
		x: .83398,
		y: .23124,
		z: -.501,
		mag: 4.79,
		bv: -.1,
		name: "66 Ofiucho",
		detail: "Ofiucho · mag 4,79",
		proper: false
	},
	{
		x: .90265,
		y: .16649,
		z: -.39687,
		mag: 4.62,
		bv: .39,
		name: "Alava",
		detail: "ζ Serpente · mag 4,62",
		proper: true
	},
	{
		x: .84739,
		y: .2187,
		z: -.48384,
		mag: 3.93,
		bv: .029,
		name: "67 Ofiucho",
		detail: "Ofiucho · mag 3,93",
		proper: false
	},
	{
		x: .63369,
		y: .34669,
		z: -.69155,
		mag: 4.26,
		bv: .406,
		name: "95 Ercole",
		detail: "Ercole · mag 4,26",
		proper: false
	},
	{
		x: .86175,
		y: .20177,
		z: -.46549,
		mag: 4.42,
		bv: .046,
		name: "68 Ofiucho",
		detail: "Ofiucho · mag 4,42",
		proper: false
	},
	{
		x: .64367,
		y: .33885,
		z: -.68619,
		mag: 5.25,
		bv: -.1,
		name: "96 Ercole",
		detail: "Ercole · mag 5,25",
		proper: false
	},
	{
		x: .93259,
		y: .11961,
		z: -.34055,
		mag: 4.77,
		bv: .41,
		name: "τ Ofiucho",
		detail: "Ofiucho · mag 4,77",
		proper: false
	},
	{
		x: .99721,
		y: -.0694,
		z: -.02743,
		mag: 4.66,
		bv: .774,
		name: "Nash",
		detail: "Sagittario · mag 4,66",
		proper: true
	},
	{
		x: .84995,
		y: .19709,
		z: -.48861,
		mag: 4.03,
		bv: .86,
		name: "p Ofiucho",
		detail: "Ofiucho · mag 4,03",
		proper: false
	},
	{
		x: .99674,
		y: -.07912,
		z: -.01598,
		mag: 2.98,
		bv: .981,
		name: "Alnasl",
		detail: "γ2 Sagittario · mag 2,98",
		proper: true
	},
	{
		x: .624,
		y: .3346,
		z: -.70616,
		mag: 4.96,
		bv: 1.656,
		name: "98 Ercole",
		detail: "Ercole · mag 4,96",
		proper: false
	},
	{
		x: .93025,
		y: -.23885,
		z: .27855,
		mag: 3.65,
		bv: -.101,
		name: "θ Altare",
		detail: "Altare · mag 3,65",
		proper: false
	},
	{
		x: .96548,
		y: -.18843,
		z: .17986,
		mag: 4.92,
		bv: .255,
		name: "HIP 88726",
		detail: "mag 4,92",
		proper: false
	},
	{
		x: .50428,
		y: .37943,
		z: -.77571,
		mag: 5.05,
		bv: .528,
		name: "b Ercole",
		detail: "Ercole · mag 5,05",
		proper: false
	},
	{
		x: .78767,
		y: .23758,
		z: -.56844,
		mag: 4.64,
		bv: .951,
		name: "71 Ofiucho",
		detail: "Ofiucho · mag 4,64",
		proper: false
	},
	{
		x: .77873,
		y: .24355,
		z: -.57815,
		mag: 3.71,
		bv: .159,
		name: "72 Ofiucho",
		detail: "Ofiucho · mag 3,71",
		proper: false
	},
	{
		x: .29951,
		y: .4368,
		z: -.84823,
		mag: 5,
		bv: .913,
		name: "HIP 88788",
		detail: "mag 5,00",
		proper: false
	},
	{
		x: .53086,
		y: .36793,
		z: -.76342,
		mag: 3.84,
		bv: -.018,
		name: "ο Ercole",
		detail: "Ercole · mag 3,84",
		proper: false
	},
	{
		x: .99627,
		y: -.07014,
		z: -.05022,
		mag: 4.55,
		bv: .938,
		name: "HIP 88839",
		detail: "mag 4,55",
		proper: false
	},
	{
		x: .81988,
		y: -.33528,
		z: .4641,
		mag: 4.33,
		bv: .228,
		name: "π Pavone",
		detail: "Pavone · mag 4,33",
		proper: false
	},
	{
		x: .64195,
		y: .31606,
		z: -.69858,
		mag: 4.37,
		bv: -.164,
		name: "102 Ercole",
		detail: "Ercole · mag 4,37",
		proper: false
	},
	{
		x: .65207,
		y: .31065,
		z: -.69159,
		mag: 5.1,
		bv: .176,
		name: "101 Ercole",
		detail: "Ercole · mag 5,10",
		proper: false
	},
	{
		x: .95242,
		y: -.21976,
		z: .21121,
		mag: 4.52,
		bv: 1.009,
		name: "ε Telescopio",
		detail: "Telescopio · mag 4,52",
		proper: false
	},
	{
		x: .99064,
		y: -.04278,
		z: -.12965,
		mag: 4.96,
		bv: 1.055,
		name: "11 Sagittario",
		detail: "Sagittario · mag 4,96",
		proper: false
	},
	{
		x: .48992,
		y: .36799,
		z: -.79029,
		mag: 4.96,
		bv: 1.643,
		name: "A Ercole",
		detail: "Ercole · mag 4,96",
		proper: false
	},
	{
		x: .98441,
		y: -.02793,
		z: -.17364,
		mag: 3.84,
		bv: .195,
		name: "Polis",
		detail: "μ Sagittario · mag 3,84",
		proper: true
	},
	{
		x: -.06102,
		y: .47393,
		z: -.87845,
		mag: 4.99,
		bv: .44,
		name: "36 Dragone",
		detail: "Dragone · mag 4,99",
		proper: false
	},
	{
		x: .98294,
		y: -.03038,
		z: -.18139,
		mag: 5.29,
		bv: .007,
		name: "15 Sagittario",
		detail: "Sagittario · mag 5,29",
		proper: false
	},
	{
		x: .98386,
		y: -.1681,
		z: .06133,
		mag: 3.1,
		bv: 1.582,
		name: "Hamalwarid",
		detail: "η Sagittario · mag 3,10",
		proper: true
	},
	{
		x: .99166,
		y: -.09225,
		z: -.08998,
		mag: 4.66,
		bv: 1.629,
		name: "HIP 89678",
		detail: "mag 4,66",
		proper: false
	},
	{
		x: .58795,
		y: .30237,
		z: -.75026,
		mag: 5.3,
		bv: 1.508,
		name: "105 Ercole",
		detail: "Ercole · mag 5,30",
		proper: false
	},
	{
		x: .41473,
		y: .36724,
		z: -.83255,
		mag: 4.33,
		bv: 1.162,
		name: "κ Lira",
		detail: "Lira · mag 4,33",
		proper: false
	},
	{
		x: .62144,
		y: .28233,
		z: -.73082,
		mag: 4.92,
		bv: 1.594,
		name: "106 Ercole",
		detail: "Ercole · mag 4,92",
		proper: false
	},
	{
		x: -.18164,
		y: .47002,
		z: -.86376,
		mag: 4.22,
		bv: -.093,
		name: "Aldhiba",
		detail: "φ Dragone · mag 4,22",
		proper: true
	},
	{
		x: .83483,
		y: .14502,
		z: -.53107,
		mag: 4.85,
		bv: .911,
		name: "74 Ofiucho",
		detail: "Ofiucho · mag 4,85",
		proper: false
	},
	{
		x: .99085,
		y: -.12455,
		z: -.05194,
		mag: 2.72,
		bv: 1.38,
		name: "Kaus Media",
		detail: "δ Sagittario · mag 2,72",
		proper: true
	},
	{
		x: .52366,
		y: .32331,
		z: -.78819,
		mag: 5.12,
		bv: .212,
		name: "t Ercole",
		detail: "Ercole · mag 5,12",
		proper: false
	},
	{
		x: -.20536,
		y: .47035,
		z: -.85825,
		mag: 3.55,
		bv: .489,
		name: "Alahakan",
		detail: "χ Dragone · mag 3,55",
		proper: true
	},
	{
		x: .88793,
		y: .09345,
		z: -.45038,
		mag: 3.23,
		bv: .941,
		name: "η Serpente",
		detail: "Serpente · mag 3,23",
		proper: false
	},
	{
		x: .1999,
		y: .42053,
		z: -.88498,
		mag: 5.02,
		bv: 1.619,
		name: "HIP 89981",
		detail: "mag 5,02",
		proper: false
	},
	{
		x: .9769,
		y: -.19674,
		z: .08338,
		mag: 5.09,
		bv: 1.498,
		name: "HIP 90037",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: .67407,
		y: .24513,
		z: -.69681,
		mag: 5.25,
		bv: 1.25,
		name: "HIP 90067",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: .98165,
		y: -.18361,
		z: .05157,
		mag: 5.33,
		bv: -.121,
		name: "HD 168733",
		detail: "Sagittario · mag 5,33",
		proper: false
	},
	{
		x: .83724,
		y: -.34855,
		z: .42136,
		mag: 4.35,
		bv: 1.462,
		name: "ξ Pavone",
		detail: "Pavone · mag 4,35",
		proper: false
	},
	{
		x: .9278,
		y: .03549,
		z: -.37138,
		mag: 4.66,
		bv: .932,
		name: "ζ Scudo",
		detail: "Scudo · mag 4,66",
		proper: false
	},
	{
		x: .62211,
		y: .26891,
		z: -.7353,
		mag: 3.85,
		bv: 1.168,
		name: "109 Ercole",
		detail: "Ercole · mag 3,85",
		proper: false
	},
	{
		x: .03318,
		y: .44528,
		z: -.89478,
		mag: 4.98,
		bv: .082,
		name: "b Dragone",
		detail: "Dragone · mag 4,98",
		proper: false
	},
	{
		x: .98529,
		y: -.17034,
		z: .01386,
		mag: 1.79,
		bv: -.031,
		name: "Kaus Australe",
		detail: "ε Sagittario · mag 1,79",
		proper: true
	},
	{
		x: .35786,
		y: .37141,
		z: -.85673,
		mag: 5.11,
		bv: .047,
		name: "Al Athfar",
		detail: "μ Lira · mag 5,11",
		proper: true
	},
	{
		x: .9562,
		y: -.24191,
		z: .16479,
		mag: 5.24,
		bv: -.163,
		name: "HIP 90200",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .977,
		y: -.06534,
		z: -.20297,
		mag: 4.81,
		bv: 1.31,
		name: "21 Sagittario",
		detail: "Sagittario · mag 4,81",
		proper: false
	},
	{
		x: -.08405,
		y: .45594,
		z: -.88603,
		mag: 4.82,
		bv: 1.179,
		name: "Fafnir",
		detail: "42 Dragone · mag 4,82",
		proper: true
	},
	{
		x: .94626,
		y: -.26193,
		z: .18968,
		mag: 3.49,
		bv: -.179,
		name: "α Telescopio",
		detail: "Telescopio · mag 3,49",
		proper: false
	},
	{
		x: .85913,
		y: .09548,
		z: -.50277,
		mag: 5.2,
		bv: .487,
		name: "d Serpente",
		detail: "Serpente · mag 5,20",
		proper: false
	},
	{
		x: .98466,
		y: -.11358,
		z: -.13244,
		mag: 2.82,
		bv: 1.025,
		name: "Kaus Boreale",
		detail: "λ Sagittario · mag 2,82",
		proper: true
	},
	{
		x: .92873,
		y: -.28708,
		z: .23463,
		mag: 4.1,
		bv: .995,
		name: "ζ Telescopio",
		detail: "Telescopio · mag 4,10",
		proper: false
	},
	{
		x: .95345,
		y: -.03122,
		z: -.29994,
		mag: 4.67,
		bv: .076,
		name: "γ Scudo",
		detail: "Scudo · mag 4,67",
		proper: false
	},
	{
		x: .82732,
		y: -.36745,
		z: .42489,
		mag: 4.63,
		bv: -.116,
		name: "ν Pavone",
		detail: "Pavone · mag 4,63",
		proper: false
	},
	{
		x: .96661,
		y: -.07035,
		z: -.24641,
		mag: 5.12,
		bv: .016,
		name: "HIP 90806",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: .94412,
		y: -.27443,
		z: .18257,
		mag: 4.92,
		bv: -.101,
		name: "δ1 Telescopio",
		detail: "Telescopio · mag 4,92",
		proper: false
	},
	{
		x: .94473,
		y: -.27415,
		z: .17978,
		mag: 5.07,
		bv: -.127,
		name: "δ2 Telescopio",
		detail: "Telescopio · mag 5,07",
		proper: false
	},
	{
		x: .96844,
		y: -.23435,
		z: .08487,
		mag: 5.16,
		bv: .079,
		name: "HIP 90887",
		detail: "mag 5,16",
		proper: false
	},
	{
		x: .06012,
		y: .42242,
		z: -.90441,
		mag: 4.77,
		bv: .611,
		name: "d Dragone",
		detail: "Dragone · mag 4,77",
		proper: false
	},
	{
		x: .9588,
		y: -.25551,
		z: .12419,
		mag: 4.62,
		bv: .994,
		name: "θ Corona Australe",
		detail: "Corona Australe · mag 4,62",
		proper: false
	},
	{
		x: .9812,
		y: -.19161,
		z: -.02306,
		mag: 5.28,
		bv: -.115,
		name: "HIP 91014",
		detail: "mag 5,28",
		proper: false
	},
	{
		x: .93138,
		y: -.02437,
		z: -.36323,
		mag: 5.12,
		bv: .926,
		name: "HIP 91105",
		detail: "mag 5,12",
		proper: false
	},
	{
		x: .9153,
		y: -.00306,
		z: -.40276,
		mag: 3.85,
		bv: 1.317,
		name: "α Scudo",
		detail: "Scudo · mag 3,85",
		proper: false
	},
	{
		x: .3621,
		y: .32948,
		z: -.87197,
		mag: .03,
		bv: -.001,
		name: "Vega",
		detail: "α Lira · mag 0,03",
		proper: true
	},
	{
		x: .91411,
		y: -.03661,
		z: -.4038,
		mag: 4.7,
		bv: .358,
		name: "δ Scudo",
		detail: "Scudo · mag 4,70",
		proper: false
	},
	{
		x: .08102,
		y: .39531,
		z: -.91497,
		mag: 5.03,
		bv: -.07,
		name: "c Dragone",
		detail: "Dragone · mag 5,03",
		proper: false
	},
	{
		x: .72867,
		y: -.42185,
		z: .53952,
		mag: 4.01,
		bv: 1.134,
		name: "ζ Pavone",
		detail: "Pavone · mag 4,01",
		proper: false
	},
	{
		x: .90819,
		y: -.03521,
		z: -.41707,
		mag: 4.88,
		bv: 1.112,
		name: "ε Scudo",
		detail: "Scudo · mag 4,88",
		proper: false
	},
	{
		x: .96462,
		y: -.25944,
		z: .04697,
		mag: 5.11,
		bv: .075,
		name: "λ Corona Australe",
		detail: "Corona Australe · mag 5,11",
		proper: false
	},
	{
		x: .96996,
		y: -.24326,
		z: .00334,
		mag: 4.86,
		bv: -.168,
		name: "HIP 91918",
		detail: "mag 4,86",
		proper: false
	},
	{
		x: .34279,
		y: .3123,
		z: -.88598,
		mag: 4.67,
		bv: .17,
		name: "Double Double",
		detail: "ε1 Lira · mag 4,67",
		proper: true
	},
	{
		x: .34367,
		y: .31185,
		z: -.8858,
		mag: 4.59,
		bv: .18,
		name: "ε2 Lira",
		detail: "Lira · mag 4,59",
		proper: false
	},
	{
		x: .37512,
		y: .29875,
		z: -.87751,
		mag: 4.34,
		bv: .192,
		name: "Nasr Alwaki",
		detail: "ζ1 Lira · mag 4,34",
		proper: true
	},
	{
		x: .82817,
		y: .04202,
		z: -.55889,
		mag: 5.02,
		bv: -.055,
		name: "4 Aquila",
		detail: "Aquila · mag 5,02",
		proper: false
	},
	{
		x: .79709,
		y: -.40295,
		z: .44975,
		mag: 4.78,
		bv: .199,
		name: "HIP 92024",
		detail: "mag 4,78",
		proper: false
	},
	{
		x: .97282,
		y: -.18694,
		z: -.13666,
		mag: 3.17,
		bv: -.107,
		name: "Namalsadirah",
		detail: "φ Sagittario · mag 3,17",
		proper: true
	},
	{
		x: .62172,
		y: .18103,
		z: -.76203,
		mag: 4.19,
		bv: .483,
		name: "110 Ercole",
		detail: "Ercole · mag 4,19",
		proper: false
	},
	{
		x: -.23354,
		y: .44453,
		z: -.86478,
		mag: 5.25,
		bv: .953,
		name: "HIP 92056",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: .53794,
		y: .22322,
		z: -.81289,
		mag: 4.83,
		bv: 1.199,
		name: "HIP 92088",
		detail: "mag 4,83",
		proper: false
	},
	{
		x: .65083,
		y: .15857,
		z: -.74248,
		mag: 4.34,
		bv: .148,
		name: "111 Ercole",
		detail: "Ercole · mag 4,34",
		proper: false
	},
	{
		x: .88094,
		y: -.02124,
		z: -.47276,
		mag: 4.22,
		bv: 1.087,
		name: "β Scudo",
		detail: "Scudo · mag 4,22",
		proper: false
	},
	{
		x: .9557,
		y: -.28465,
		z: .07498,
		mag: 5.2,
		bv: .781,
		name: "μ Corona Australe",
		detail: "Corona Australe · mag 5,20",
		proper: false
	},
	{
		x: .95689,
		y: -.15194,
		z: -.24755,
		mag: 5.22,
		bv: 1.404,
		name: "29 Sagittario",
		detail: "Sagittario · mag 5,22",
		proper: false
	},
	{
		x: .44854,
		y: .25044,
		z: -.85796,
		mag: 5.22,
		bv: .1,
		name: "ν Lira",
		detail: "Lira · mag 5,22",
		proper: false
	},
	{
		x: .43614,
		y: .25517,
		z: -.86294,
		mag: 3.52,
		bv: .003,
		name: "Sheliak",
		detail: "β Lira · mag 3,52",
		proper: true
	},
	{
		x: .01112,
		y: .3929,
		z: -.91951,
		mag: 4.63,
		bv: 1.185,
		name: "ο Dragone",
		detail: "Dragone · mag 4,63",
		proper: false
	},
	{
		x: .81915,
		y: -.40472,
		z: .40643,
		mag: 4.22,
		bv: -.15,
		name: "λ Pavone",
		detail: "Pavone · mag 4,22",
		proper: false
	},
	{
		x: .8965,
		y: -.36276,
		z: .25435,
		mag: 5.18,
		bv: .962,
		name: "κ Telescopio",
		detail: "Telescopio · mag 5,18",
		proper: false
	},
	{
		x: .15582,
		y: .3485,
		z: -.92426,
		mag: 4.92,
		bv: .903,
		name: "HIP 92689",
		detail: "mag 4,92",
		proper: false
	},
	{
		x: .95833,
		y: -.18608,
		z: -.21673,
		mag: 4.86,
		bv: 1.412,
		name: "Ainalrami",
		detail: "ν1 Sagittario · mag 4,86",
		proper: true
	},
	{
		x: -.1902,
		y: .42822,
		z: -.88343,
		mag: 4.82,
		bv: 1.151,
		name: "Athafi",
		detail: "υ Dragone · mag 4,82",
		proper: true
	},
	{
		x: .37799,
		y: .26425,
		z: -.8873,
		mag: 4.22,
		bv: 1.575,
		name: "δ2 Lira",
		detail: "Lira · mag 4,22",
		proper: false
	},
	{
		x: .93502,
		y: -.13492,
		z: -.32791,
		mag: 5.08,
		bv: .141,
		name: "HIP 92814",
		detail: "mag 5,08",
		proper: false
	},
	{
		x: .58494,
		y: .1637,
		z: -.79438,
		mag: 4.57,
		bv: .782,
		name: "113 Ercole",
		detail: "Ercole · mag 4,57",
		proper: false
	},
	{
		x: .51832,
		y: -.45613,
		z: .72339,
		mag: 5.29,
		bv: 1.304,
		name: "χ Ottante",
		detail: "Ottante · mag 5,29",
		proper: false
	},
	{
		x: .95718,
		y: -.18895,
		z: -.21932,
		mag: 5,
		bv: 1.348,
		name: "ν2 Sagittario",
		detail: "Sagittario · mag 5,00",
		proper: false
	},
	{
		x: .96299,
		y: -.21533,
		z: -.16212,
		mag: 2.05,
		bv: -.134,
		name: "Nunki",
		detail: "σ Sagittario · mag 2,05",
		proper: true
	},
	{
		x: .26541,
		y: .30555,
		z: -.91444,
		mag: 4.08,
		bv: 1.397,
		name: "13 Lira",
		detail: "Lira · mag 4,08",
		proper: false
	},
	{
		x: .79625,
		y: .01491,
		z: -.60478,
		mag: 4.62,
		bv: .161,
		name: "Alya",
		detail: "θ1 Serpente · mag 4,62",
		proper: true
	},
	{
		x: .79624,
		y: .0148,
		z: -.6048,
		mag: 4.98,
		bv: .204,
		name: "θ2 Serpente",
		detail: "Serpente · mag 4,98",
		proper: false
	},
	{
		x: .94092,
		y: -.32311,
		z: .10136,
		mag: 5.35,
		bv: .998,
		name: "HIP 92953",
		detail: "mag 5,35",
		proper: false
	},
	{
		x: .76853,
		y: -.42874,
		z: .47491,
		mag: 4.4,
		bv: .53,
		name: "κ Pavone",
		detail: "Pavone · mag 4,40",
		proper: false
	},
	{
		x: .4366,
		y: .22947,
		z: -.8699,
		mag: 5.2,
		bv: .594,
		name: "HD 176051",
		detail: "mag 5,20",
		proper: false
	},
	{
		x: .87793,
		y: -.06817,
		z: -.4739,
		mag: 4.83,
		bv: 1.057,
		name: "η Scudo",
		detail: "Scudo · mag 4,83",
		proper: false
	},
	{
		x: .9498,
		y: -.1823,
		z: -.25424,
		mag: 5.02,
		bv: .137,
		name: "ξ1 Sagittario",
		detail: "Sagittario · mag 5,02",
		proper: false
	},
	{
		x: .9506,
		y: -.18699,
		z: -.24779,
		mag: 3.52,
		bv: 1.151,
		name: "ξ2 Sagittario",
		detail: "Sagittario · mag 3,52",
		proper: false
	},
	{
		x: .64933,
		y: .11083,
		z: -.75239,
		mag: 5.33,
		bv: .731,
		name: "HD 176155",
		detail: "Aquila · mag 5,33",
		proper: false
	},
	{
		x: .88711,
		y: -.38031,
		z: .26153,
		mag: 4.85,
		bv: -.051,
		name: "λ Telescopio",
		detail: "Telescopio · mag 4,85",
		proper: false
	},
	{
		x: .83291,
		y: -.40952,
		z: .37222,
		mag: 5.14,
		bv: 1.355,
		name: "ω Pavone",
		detail: "Pavone · mag 5,14",
		proper: false
	},
	{
		x: .95464,
		y: -.29766,
		z: .00762,
		mag: 4.83,
		bv: .396,
		name: "ε Corona Australe",
		detail: "Corona Australe · mag 4,83",
		proper: false
	},
	{
		x: .43785,
		y: .22175,
		z: -.87127,
		mag: 3.25,
		bv: -.049,
		name: "Sulafat",
		detail: "γ Lira · mag 3,25",
		proper: true
	},
	{
		x: .69325,
		y: .0785,
		z: -.71641,
		mag: 5.27,
		bv: .573,
		name: "11 Aquila",
		detail: "Aquila · mag 5,27",
		proper: false
	},
	{
		x: .67561,
		y: .08786,
		z: -.732,
		mag: 4.02,
		bv: 1.082,
		name: "Deneb al Okab Borealis",
		detail: "ε Aquila · mag 4,02",
		proper: true
	},
	{
		x: .53047,
		y: .17256,
		z: -.82995,
		mag: 5.26,
		bv: 1.228,
		name: "HIP 93256",
		detail: "mag 5,26",
		proper: false
	},
	{
		x: .44487,
		y: .21443,
		z: -.86955,
		mag: 4.94,
		bv: 1.465,
		name: "λ Lira",
		detail: "Lira · mag 4,94",
		proper: false
	},
	{
		x: .2117,
		y: .30662,
		z: -.92799,
		mag: 5,
		bv: .186,
		name: "16 Lira",
		detail: "Lira · mag 5,00",
		proper: false
	},
	{
		x: .87164,
		y: -.08516,
		z: -.48269,
		mag: 4.02,
		bv: 1.079,
		name: "i Aquila",
		detail: "Aquila · mag 4,02",
		proper: false
	},
	{
		x: .95745,
		y: -.26477,
		z: -.11485,
		mag: 2.6,
		bv: .062,
		name: "Ascella",
		detail: "ζ Sagittario · mag 2,60",
		proper: true
	},
	{
		x: .93697,
		y: -.33931,
		z: .08341,
		mag: 4.74,
		bv: -.027,
		name: "ζ Corona Australe",
		detail: "Corona Australe · mag 4,74",
		proper: false
	},
	{
		x: .94423,
		y: -.21666,
		z: -.24796,
		mag: 3.76,
		bv: 1.012,
		name: "Manubrij",
		detail: "ο Sagittario · mag 3,76",
		proper: true
	},
	{
		x: .68276,
		y: .05661,
		z: -.72845,
		mag: 2.99,
		bv: .014,
		name: "Okab",
		detail: "ζ Aquila · mag 2,99",
		proper: true
	},
	{
		x: .85976,
		y: -.09608,
		z: -.50159,
		mag: 3.43,
		bv: -.096,
		name: "Al Thalimain Prior",
		detail: "λ Aquila · mag 3,43",
		proper: true
	},
	{
		x: .88491,
		y: -.3963,
		z: .24473,
		mag: 5.17,
		bv: .532,
		name: "ρ Telescopio",
		detail: "Telescopio · mag 5,17",
		proper: false
	},
	{
		x: .947,
		y: -.32121,
		z: -.00263,
		mag: 4.23,
		bv: .523,
		name: "γ Corona Australe",
		detail: "Corona Australe · mag 4,23",
		proper: false
	},
	{
		x: .95147,
		y: -.26503,
		z: -.15639,
		mag: 3.32,
		bv: 1.169,
		name: "τ Sagittario",
		detail: "Sagittario · mag 3,32",
		proper: false
	},
	{
		x: .71241,
		y: .02839,
		z: -.70119,
		mag: 5.07,
		bv: -.055,
		name: "18 Aquila",
		detail: "Aquila · mag 5,07",
		proper: false
	},
	{
		x: .37761,
		y: .21893,
		z: -.89971,
		mag: 5.25,
		bv: -.109,
		name: "ι Lira",
		detail: "Lira · mag 5,25",
		proper: false
	},
	{
		x: .43159,
		y: .19269,
		z: -.88125,
		mag: 5.2,
		bv: .367,
		name: "17 Lira",
		detail: "Lira · mag 5,20",
		proper: false
	},
	{
		x: .93682,
		y: -.34601,
		z: .05135,
		mag: 4.57,
		bv: 1.07,
		name: "δ Corona Australe",
		detail: "Corona Australe · mag 4,57",
		proper: false
	},
	{
		x: .7621,
		y: -.0195,
		z: -.64717,
		mag: 5.23,
		bv: .346,
		name: "19 Aquila",
		detail: "Aquila · mag 5,23",
		proper: false
	},
	{
		x: -.28055,
		y: .42751,
		z: -.85937,
		mag: 5.11,
		bv: .308,
		name: "59 Dragone",
		detail: "Dragone · mag 5,11",
		proper: false
	},
	{
		x: .94207,
		y: -.33533,
		z: .00754,
		mag: 4.11,
		bv: .042,
		name: "Meridiana",
		detail: "α Corona Australe · mag 4,11",
		proper: true
	},
	{
		x: .93604,
		y: -.22994,
		z: -.26639,
		mag: 2.88,
		bv: .377,
		name: "Albaldah",
		detail: "π Sagittario · mag 2,88",
		proper: true
	},
	{
		x: .75025,
		y: -.45034,
		z: .48406,
		mag: 5.31,
		bv: .901,
		name: "HIP 94150",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: .93817,
		y: -.34484,
		z: .03049,
		mag: 4.1,
		bv: 1.163,
		name: "β Corona Australe",
		detail: "Corona Australe · mag 4,10",
		proper: false
	},
	{
		x: .03998,
		y: .3389,
		z: -.93997,
		mag: 5.13,
		bv: 1.008,
		name: "53 Dragone",
		detail: "Dragone · mag 5,13",
		proper: false
	},
	{
		x: -.13854,
		y: .39064,
		z: -.91006,
		mag: 3.07,
		bv: .99,
		name: "Altais",
		detail: "δ Dragone · mag 3,07",
		proper: true
	},
	{
		x: .87181,
		y: -.14456,
		z: -.46802,
		mag: 5.35,
		bv: .094,
		name: "20 Aquila",
		detail: "Aquila · mag 5,35",
		proper: false
	},
	{
		x: .79129,
		y: -.06804,
		z: -.60765,
		mag: 5.14,
		bv: -.071,
		name: "21 Aquila",
		detail: "Aquila · mag 5,14",
		proper: false
	},
	{
		x: .3237,
		y: .22075,
		z: -.92005,
		mag: 4.43,
		bv: -.15,
		name: "Aladfar",
		detail: "η Lira · mag 4,43",
		proper: true
	},
	{
		x: .02431,
		y: .33888,
		z: -.94052,
		mag: 5,
		bv: 1.156,
		name: "54 Dragone",
		detail: "Dragone · mag 5,00",
		proper: false
	},
	{
		x: .93779,
		y: -.27905,
		z: -.20657,
		mag: 4.86,
		bv: .569,
		name: "Al Kiladah",
		detail: "ψ Sagittario · mag 4,86",
		proper: true
	},
	{
		x: -.23194,
		y: .41011,
		z: -.88205,
		mag: 4.45,
		bv: 1.257,
		name: "τ Dragone",
		detail: "Dragone · mag 4,45",
		proper: false
	},
	{
		x: .57557,
		y: .07688,
		z: -.81413,
		mag: 4.76,
		bv: -.058,
		name: "1 Volpetta",
		detail: "Volpetta · mag 4,76",
		proper: false
	},
	{
		x: .33635,
		y: .20557,
		z: -.91903,
		mag: 4.35,
		bv: 1.258,
		name: "θ Lira",
		detail: "Lira · mag 4,35",
		proper: false
	},
	{
		x: .09285,
		y: .30658,
		z: -.94731,
		mag: 3.8,
		bv: .95,
		name: "Fawaris",
		detail: "κ Cigno · mag 3,80",
		proper: true
	},
	{
		x: .91904,
		y: -.24411,
		z: -.30949,
		mag: 4.88,
		bv: 1.013,
		name: "d Sagittario",
		detail: "Sagittario · mag 4,88",
		proper: false
	},
	{
		x: .69161,
		y: -.00847,
		z: -.72222,
		mag: 5.28,
		bv: .196,
		name: "ω1 Aquila",
		detail: "Aquila · mag 5,28",
		proper: false
	},
	{
		x: .7949,
		y: -.09635,
		z: -.59904,
		mag: 5.1,
		bv: 1.143,
		name: "23 Aquila",
		detail: "Aquila · mag 5,10",
		proper: false
	},
	{
		x: .84324,
		y: -.15527,
		z: -.51462,
		mag: 4.98,
		bv: .937,
		name: "f Aquila",
		detail: "Aquila · mag 4,98",
		proper: false
	},
	{
		x: -.11159,
		y: .36907,
		z: -.92268,
		mag: 4.6,
		bv: .033,
		name: "Tais",
		detail: "π Dragone · mag 4,60",
		proper: true
	},
	{
		x: .90923,
		y: -.25119,
		z: -.33197,
		mag: 3.92,
		bv: .228,
		name: "ρ1 Sagittario",
		detail: "Sagittario · mag 3,92",
		proper: false
	},
	{
		x: .90154,
		y: -.2381,
		z: -.3613,
		mag: 4.52,
		bv: .079,
		name: "υ Sagittario",
		detail: "Sagittario · mag 4,52",
		proper: false
	},
	{
		x: .90839,
		y: -.40558,
		z: .10168,
		mag: 3.96,
		bv: -.085,
		name: "Arkab Prior",
		detail: "β1 Sagittario · mag 3,96",
		proper: true
	},
	{
		x: .50116,
		y: .09272,
		z: -.86037,
		mag: 5.22,
		bv: -.119,
		name: "3 Volpetta",
		detail: "Volpetta · mag 5,22",
		proper: false
	},
	{
		x: .85754,
		y: -.44163,
		z: .26381,
		mag: 5.03,
		bv: .02,
		name: "η Telescopio",
		detail: "Telescopio · mag 5,03",
		proper: false
	},
	{
		x: .90645,
		y: -.40859,
		z: .10676,
		mag: 4.27,
		bv: .35,
		name: "Arkab Posterior",
		detail: "β2 Sagittario · mag 4,27",
		proper: true
	},
	{
		x: .91916,
		y: -.39217,
		z: .03673,
		mag: 3.96,
		bv: -.105,
		name: "Rukbat",
		detail: "α Sagittario · mag 3,96",
		proper: true
	},
	{
		x: .45244,
		y: .1154,
		z: -.88429,
		mag: 4.99,
		bv: -.12,
		name: "2 Cigno",
		detail: "Cigno · mag 4,99",
		proper: false
	},
	{
		x: .67688,
		y: -.03257,
		z: -.73537,
		mag: 5.17,
		bv: .761,
		name: "b Aquila",
		detail: "Aquila · mag 5,17",
		proper: false
	},
	{
		x: .92291,
		y: -.30828,
		z: -.23063,
		mag: 5.02,
		bv: .235,
		name: "χ1 Sagittario",
		detail: "Sagittario · mag 5,02",
		proper: false
	},
	{
		x: .58262,
		y: .03053,
		z: -.81217,
		mag: 5.14,
		bv: .999,
		name: "4 Volpetta",
		detail: "Volpetta · mag 5,14",
		proper: false
	},
	{
		x: .7659,
		y: -.10681,
		z: -.63403,
		mag: 3.36,
		bv: .319,
		name: "Almizan",
		detail: "δ Aquila · mag 3,36",
		proper: true
	},
	{
		x: .35183,
		y: .16186,
		z: -.92196,
		mag: 5.17,
		bv: -.12,
		name: "4 Cigno",
		detail: "Cigno · mag 5,17",
		proper: false
	},
	{
		x: .78884,
		y: -.133,
		z: -.60004,
		mag: 4.64,
		bv: .576,
		name: "ν Aquila",
		detail: "Aquila · mag 4,64",
		proper: false
	},
	{
		x: .5143,
		y: .05935,
		z: -.85556,
		mag: 4.44,
		bv: 1.502,
		name: "Anser",
		detail: "α Volpetta · mag 4,44",
		proper: true
	},
	{
		x: .10724,
		y: .26638,
		z: -.95788,
		mag: 3.76,
		bv: .148,
		name: "ι Cigno",
		detail: "Cigno · mag 3,76",
		proper: false
	},
	{
		x: .80744,
		y: -.17359,
		z: -.56383,
		mag: 5.03,
		bv: 1.77,
		name: "e Aquila",
		detail: "Aquila · mag 5,03",
		proper: false
	},
	{
		x: .46629,
		y: .0797,
		z: -.88103,
		mag: 3.05,
		bv: 1.088,
		name: "Albireo",
		detail: "β1 Cigno · mag 3,05",
		proper: true
	},
	{
		x: .46616,
		y: .07963,
		z: -.88111,
		mag: 5.12,
		bv: -.095,
		name: "β2 Cigno",
		detail: "Cigno · mag 5,12",
		proper: false
	},
	{
		x: .37189,
		y: .12947,
		z: -.9192,
		mag: 4.74,
		bv: -.15,
		name: "8 Cigno",
		detail: "Cigno · mag 4,74",
		proper: false
	},
	{
		x: -.18189,
		y: .37261,
		z: -.90999,
		mag: 4.67,
		bv: .786,
		name: "Alsafi",
		detail: "σ Dragone · mag 4,67",
		proper: true
	},
	{
		x: .71037,
		y: -.10475,
		z: -.69599,
		mag: 4.45,
		bv: 1.176,
		name: "μ Aquila",
		detail: "Aquila · mag 4,45",
		proper: false
	},
	{
		x: .56854,
		y: -.00247,
		z: -.82265,
		mag: 5,
		bv: -.093,
		name: "9 Volpetta",
		detail: "Volpetta · mag 5,00",
		proper: false
	},
	{
		x: .24801,
		y: .18428,
		z: -.95107,
		mag: 5.34,
		bv: .06,
		name: "HIP 96288",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: .85266,
		y: -.24932,
		z: -.45913,
		mag: 5.12,
		bv: 1.122,
		name: "37 Aquila",
		detail: "Aquila · mag 5,12",
		proper: false
	},
	{
		x: .87902,
		y: -.45224,
		z: .15099,
		mag: 4.88,
		bv: 1.096,
		name: "ι Telescopio",
		detail: "Telescopio · mag 4,88",
		proper: false
	},
	{
		x: .12391,
		y: .23933,
		z: -.963,
		mag: 4.49,
		bv: .395,
		name: "θ Cigno",
		detail: "Cigno · mag 4,49",
		proper: false
	},
	{
		x: .21025,
		y: .19675,
		z: -.95764,
		mag: 5.17,
		bv: .928,
		name: "HIP 96459",
		detail: "mag 5,17",
		proper: false
	},
	{
		x: .90605,
		y: -.35031,
		z: -.2374,
		mag: 4.59,
		bv: -.075,
		name: "h2 Sagittario",
		detail: "Sagittario · mag 4,59",
		proper: false
	},
	{
		x: .78499,
		y: -.1849,
		z: -.59127,
		mag: 4.36,
		bv: -.079,
		name: "Al Thalimain Posterior",
		detail: "ι Aquila · mag 4,36",
		proper: true
	},
	{
		x: .8274,
		y: -.22982,
		z: -.51243,
		mag: 4.93,
		bv: -.046,
		name: "κ Aquila",
		detail: "Aquila · mag 4,93",
		proper: false
	},
	{
		x: .72095,
		y: -.1404,
		z: -.67861,
		mag: 5.18,
		bv: -.001,
		name: "σ Aquila",
		detail: "Aquila · mag 5,18",
		proper: false
	},
	{
		x: .42238,
		y: .06925,
		z: -.90377,
		mag: 4.68,
		bv: .971,
		name: "φ Cigno",
		detail: "Cigno · mag 4,68",
		proper: false
	},
	{
		x: .58095,
		y: -.03733,
		z: -.81308,
		mag: 4.39,
		bv: .777,
		name: "Sham",
		detail: "α Freccia · mag 4,39",
		proper: true
	},
	{
		x: .87202,
		y: -.31022,
		z: -.37861,
		mag: 5.3,
		bv: 1.109,
		name: "e1 Sagittario",
		detail: "Sagittario · mag 5,30",
		proper: false
	},
	{
		x: .19203,
		y: .19201,
		z: -.96242,
		mag: 5.06,
		bv: .426,
		name: "HIP 96825",
		detail: "mag 5,06",
		proper: false
	},
	{
		x: .58581,
		y: -.0454,
		z: -.80918,
		mag: 4.39,
		bv: 1.041,
		name: "β Freccia",
		detail: "Freccia · mag 4,39",
		proper: false
	},
	{
		x: .86809,
		y: -.31562,
		z: -.38316,
		mag: 5.06,
		bv: .319,
		name: "e2 Sagittario",
		detail: "Sagittario · mag 5,06",
		proper: false
	},
	{
		x: .6483,
		y: -.09927,
		z: -.75489,
		mag: 5.28,
		bv: .575,
		name: "χ Aquila",
		detail: "Aquila · mag 5,28",
		proper: false
	},
	{
		x: .31093,
		y: .115,
		z: -.94345,
		mag: 4.89,
		bv: .948,
		name: "15 Cigno",
		detail: "Cigno · mag 4,89",
		proper: false
	},
	{
		x: .19266,
		y: .17782,
		z: -.96502,
		mag: 2.86,
		bv: -.002,
		name: "Fawaris",
		detail: "δ Cigno · mag 2,86",
		proper: true
	},
	{
		x: .65463,
		y: -.12327,
		z: -.74583,
		mag: 2.72,
		bv: 1.507,
		name: "Tarazed",
		detail: "γ Aquila · mag 2,72",
		proper: true
	},
	{
		x: .87552,
		y: -.35298,
		z: -.32994,
		mag: 4.87,
		bv: 1.061,
		name: "f Sagittario",
		detail: "Sagittario · mag 4,87",
		proper: false
	},
	{
		x: .36041,
		y: .07728,
		z: -.92959,
		mag: 5,
		bv: .476,
		name: "17 Cigno",
		detail: "Cigno · mag 5,00",
		proper: false
	},
	{
		x: .56158,
		y: -.05902,
		z: -.82531,
		mag: 3.68,
		bv: 1.313,
		name: "δ Freccia",
		detail: "Freccia · mag 3,68",
		proper: false
	},
	{
		x: .82009,
		y: -.50011,
		z: .27809,
		mag: 5.33,
		bv: .196,
		name: "ν Telescopio",
		detail: "Telescopio · mag 5,33",
		proper: false
	},
	{
		x: -.2012,
		y: .35558,
		z: -.91273,
		mag: 3.84,
		bv: .888,
		name: "Tyl",
		detail: "ε Dragone · mag 3,84",
		proper: true
	},
	{
		x: .55122,
		y: -.05936,
		z: -.83225,
		mag: 5.01,
		bv: .095,
		name: "ζ Freccia",
		detail: "Freccia · mag 5,01",
		proper: false
	},
	{
		x: .28114,
		y: .10808,
		z: -.95356,
		mag: 5.18,
		bv: 1.665,
		name: "19 Cigno",
		detail: "Cigno · mag 5,18",
		proper: false
	},
	{
		x: .06404,
		y: .22727,
		z: -.97172,
		mag: 5.03,
		bv: 1.286,
		name: "d Cigno",
		detail: "Cigno · mag 5,03",
		proper: false
	},
	{
		x: .66433,
		y: -.15487,
		z: -.73122,
		mag: .76,
		bv: .221,
		name: "Altair",
		detail: "α Aquila · mag 0,76",
		proper: true
	},
	{
		x: .64759,
		y: -.1426,
		z: -.74853,
		mag: 5.12,
		bv: .563,
		name: "ο Aquila",
		detail: "Aquila · mag 5,12",
		proper: false
	},
	{
		x: .50385,
		y: -.03606,
		z: -.86304,
		mag: 4.9,
		bv: -.153,
		name: "12 Volpetta",
		detail: "Volpetta · mag 4,90",
		proper: false
	},
	{
		x: .88252,
		y: -.47028,
		z: -44e-5,
		mag: 5.32,
		bv: -.045,
		name: "HD 187474",
		detail: "Sagittario · mag 5,32",
		proper: false
	},
	{
		x: .73588,
		y: -.22619,
		z: -.63821,
		mag: 3.87,
		bv: .63,
		name: "Tarazed",
		detail: "η Aquila · mag 3,87",
		proper: true
	},
	{
		x: -.0093,
		y: .25726,
		z: -.9663,
		mag: 5.14,
		bv: -.125,
		name: "23 Cigno",
		detail: "Cigno · mag 5,14",
		proper: false
	},
	{
		x: .48048,
		y: -.03118,
		z: -.87645,
		mag: 4.57,
		bv: -.047,
		name: "13 Volpetta",
		detail: "Volpetta · mag 4,57",
		proper: false
	},
	{
		x: .66164,
		y: -.17115,
		z: -.73002,
		mag: 4.71,
		bv: 1.023,
		name: "Libertas",
		detail: "ξ Aquila · mag 4,71",
		proper: true
	},
	{
		x: .87312,
		y: -.48652,
		z: .03096,
		mag: 4.12,
		bv: 1.063,
		name: "ι Sagittario",
		detail: "Sagittario · mag 4,12",
		proper: false
	},
	{
		x: .68013,
		y: -.19244,
		z: -.70739,
		mag: 3.71,
		bv: .855,
		name: "Alshain",
		detail: "β Aquila · mag 3,71",
		proper: true
	},
	{
		x: .0664,
		y: .21148,
		z: -.97512,
		mag: 4.91,
		bv: .124,
		name: "ψ Cigno",
		detail: "Cigno · mag 4,91",
		proper: false
	},
	{
		x: .87567,
		y: -.42329,
		z: -.23244,
		mag: 4.7,
		bv: .748,
		name: "Terebellum",
		detail: "ω Sagittario · mag 4,70",
		proper: true
	},
	{
		x: .27625,
		y: .09051,
		z: -.95681,
		mag: 4.95,
		bv: -.086,
		name: "22 Cigno",
		detail: "Cigno · mag 4,95",
		proper: false
	},
	{
		x: -.03253,
		y: .26237,
		z: -.96442,
		mag: 4.98,
		bv: 1.584,
		name: "HIP 98073",
		detail: "mag 4,98",
		proper: false
	},
	{
		x: .62641,
		y: -.15307,
		z: -.76432,
		mag: 5.28,
		bv: .014,
		name: "φ Aquila",
		detail: "Aquila · mag 5,28",
		proper: false
	},
	{
		x: .32475,
		y: .05869,
		z: -.94398,
		mag: 3.89,
		bv: 1.019,
		name: "η Cigno",
		detail: "Cigno · mag 3,89",
		proper: false
	},
	{
		x: .87516,
		y: -.43147,
		z: -.21894,
		mag: 4.54,
		bv: 1.462,
		name: "Terebellum",
		detail: "b1 Sagittario · mag 4,54",
		proper: true
	},
	{
		x: .79395,
		y: -.52037,
		z: .31441,
		mag: 5.24,
		bv: .014,
		name: "HIP 98174",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .83587,
		y: -.36722,
		z: -.40801,
		mag: 5.01,
		bv: .055,
		name: "g Sagittario",
		detail: "Sagittario · mag 5,01",
		proper: false
	},
	{
		x: .52822,
		y: -.09076,
		z: -.84424,
		mag: 3.51,
		bv: 1.571,
		name: "γ Freccia",
		detail: "Freccia · mag 3,51",
		proper: false
	},
	{
		x: .86967,
		y: -.43316,
		z: -.23675,
		mag: 4.84,
		bv: .882,
		name: "Terebellum",
		detail: "A Sagittario · mag 4,84",
		proper: true
	},
	{
		x: .875,
		y: -.47667,
		z: -.08459,
		mag: 4.37,
		bv: -.15,
		name: "θ1 Sagittario",
		detail: "Sagittario · mag 4,37",
		proper: false
	},
	{
		x: .87502,
		y: -.47478,
		z: -.09452,
		mag: 5.3,
		bv: .17,
		name: "θ2 Sagittario",
		detail: "Sagittario · mag 5,30",
		proper: false
	},
	{
		x: .29053,
		y: .06557,
		z: -.95462,
		mag: 5.15,
		bv: -.133,
		name: "25 Cigno",
		detail: "Cigno · mag 5,15",
		proper: false
	},
	{
		x: .54944,
		y: -.11308,
		z: -.82784,
		mag: 5.33,
		bv: 1.576,
		name: "13 Freccia",
		detail: "Freccia · mag 5,33",
		proper: false
	},
	{
		x: .67633,
		y: -.51358,
		z: .52804,
		mag: 3.97,
		bv: -.032,
		name: "ε Pavone",
		detail: "Pavone · mag 3,97",
		proper: false
	},
	{
		x: .41774,
		y: -.02339,
		z: -.90826,
		mag: 4.66,
		bv: .184,
		name: "15 Volpetta",
		detail: "Volpetta · mag 4,66",
		proper: false
	},
	{
		x: .0945,
		y: .17838,
		z: -.97941,
		mag: 5.06,
		bv: 1.122,
		name: "e Cigno",
		detail: "Cigno · mag 5,06",
		proper: false
	},
	{
		x: -.12905,
		y: .29874,
		z: -.94557,
		mag: 5.22,
		bv: 1.598,
		name: "e Dragone",
		detail: "Dragone · mag 5,22",
		proper: false
	},
	{
		x: .78581,
		y: -.5293,
		z: .31992,
		mag: 4.95,
		bv: 1.356,
		name: "HD 189124",
		detail: "Pavone · mag 4,95",
		proper: false
	},
	{
		x: .72912,
		y: -.525,
		z: .43904,
		mag: 5.32,
		bv: 1.218,
		name: "μ2 Pavone",
		detail: "Pavone · mag 5,32",
		proper: false
	},
	{
		x: .45311,
		y: -.05238,
		z: -.88992,
		mag: 5.23,
		bv: .374,
		name: "16 Volpetta",
		detail: "Volpetta · mag 5,23",
		proper: false
	},
	{
		x: .86534,
		y: -.45296,
		z: -.2145,
		mag: 4.43,
		bv: 1.64,
		name: "Terebellum",
		detail: "c Sagittario · mag 4,43",
		proper: true
	},
	{
		x: -.17589,
		y: .31968,
		z: -.93106,
		mag: 4.51,
		bv: 1.313,
		name: "ρ Dragone",
		detail: "Dragone · mag 4,51",
		proper: false
	},
	{
		x: .8664,
		y: -.4976,
		z: -.04183,
		mag: 4.77,
		bv: 1.417,
		name: "HIP 98761",
		detail: "mag 4,77",
		proper: false
	},
	{
		x: .86677,
		y: -.47788,
		z: -.14261,
		mag: 4.99,
		bv: 1.208,
		name: "HIP 98842",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: .50923,
		y: -.10853,
		z: -.85376,
		mag: 5.09,
		bv: 1.058,
		name: "η Freccia",
		detail: "Freccia · mag 5,09",
		proper: false
	},
	{
		x: .46048,
		y: -.08099,
		z: -.88397,
		mag: 5.08,
		bv: -.162,
		name: "17 Volpetta",
		detail: "Volpetta · mag 5,08",
		proper: false
	},
	{
		x: .81608,
		y: -.53834,
		z: .21026,
		mag: 4.93,
		bv: 1.591,
		name: "ξ Telescopio",
		detail: "Telescopio · mag 4,93",
		proper: false
	},
	{
		x: .72936,
		y: -.53607,
		z: .42505,
		mag: 3.55,
		bv: .751,
		name: "δ Pavone",
		detail: "Pavone · mag 3,55",
		proper: false
	},
	{
		x: -.32171,
		y: .38273,
		z: -.86604,
		mag: 4.38,
		bv: -.046,
		name: "Al Aghnam",
		detail: "κ Cefeo · mag 4,38",
		proper: true
	},
	{
		x: .27689,
		y: .03567,
		z: -.96024,
		mag: 4.93,
		bv: -.139,
		name: "b2 Cigno",
		detail: "Cigno · mag 4,93",
		proper: false
	},
	{
		x: .85427,
		y: -.51391,
		z: -.07824,
		mag: 5.32,
		bv: .868,
		name: "HD 191408",
		detail: "mag 5,32",
		proper: false
	},
	{
		x: .71108,
		y: -.31041,
		z: -.63088,
		mag: 3.24,
		bv: -.066,
		name: "θ Aquila",
		detail: "Aquila · mag 3,24",
		proper: false
	},
	{
		x: .12602,
		y: .11953,
		z: -.9848,
		mag: 4.8,
		bv: .1,
		name: "30 Cigno",
		detail: "Cigno · mag 4,80",
		proper: false
	},
	{
		x: -.01842,
		y: .2089,
		z: -.97776,
		mag: 4.28,
		bv: .114,
		name: "33 Cigno",
		detail: "Cigno · mag 4,28",
		proper: false
	},
	{
		x: .1266,
		y: .118,
		z: -.98491,
		mag: 3.8,
		bv: 1.27,
		name: "ο1 Cigno",
		detail: "Cigno · mag 3,80",
		proper: false
	},
	{
		x: .37953,
		y: -.05703,
		z: -.92342,
		mag: 5.19,
		bv: .191,
		name: "21 Volpetta",
		detail: "Volpetta · mag 5,19",
		proper: false
	},
	{
		x: .54619,
		y: -.18419,
		z: -.81716,
		mag: 4.94,
		bv: .072,
		name: "ρ Aquila",
		detail: "Aquila · mag 4,94",
		proper: false
	},
	{
		x: .26805,
		y: .02044,
		z: -.96319,
		mag: 4.93,
		bv: .151,
		name: "b3 Cigno",
		detail: "Cigno · mag 4,93",
		proper: false
	},
	{
		x: .41794,
		y: -.09012,
		z: -.90399,
		mag: 4.79,
		bv: -.181,
		name: "HD 192685",
		detail: "Volpetta · mag 4,79",
		proper: false
	},
	{
		x: .10944,
		y: .12266,
		z: -.9864,
		mag: 3.96,
		bv: 1.451,
		name: "ο2 Cigno",
		detail: "Cigno · mag 3,96",
		proper: false
	},
	{
		x: .44393,
		y: -.1108,
		z: -.88918,
		mag: 5.18,
		bv: 1.016,
		name: "22 Volpetta",
		detail: "Volpetta · mag 5,18",
		proper: false
	},
	{
		x: .38803,
		y: -.07039,
		z: -.91896,
		mag: 4.5,
		bv: 1.258,
		name: "23 Volpetta",
		detail: "Volpetta · mag 4,50",
		proper: false
	},
	{
		x: .42651,
		y: -.10393,
		z: -.89849,
		mag: 5.3,
		bv: .951,
		name: "24 Volpetta",
		detail: "Volpetta · mag 5,30",
		proper: false
	},
	{
		x: .21335,
		y: .04821,
		z: -.97579,
		mag: 5.27,
		bv: 1.65,
		name: "HIP 99968",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: .77799,
		y: -.41794,
		z: -.4691,
		mag: 4.3,
		bv: .928,
		name: "Prima Giedi",
		detail: "α1 Capricorno · mag 4,30",
		proper: true
	},
	{
		x: .24479,
		y: .02303,
		z: -.9693,
		mag: 4.77,
		bv: .377,
		name: "Immortale del Cogno",
		detail: "P Cigno · mag 4,77",
		proper: true
	},
	{
		x: .77726,
		y: -.41961,
		z: -.46882,
		mag: 3.58,
		bv: .883,
		name: "Algedi",
		detail: "α2 Capricorno · mag 3,58",
		proper: true
	},
	{
		x: .28565,
		y: -.00941,
		z: -.95829,
		mag: 5.14,
		bv: .66,
		name: "35 Cigno",
		detail: "Cigno · mag 5,14",
		proper: false
	},
	{
		x: .8061,
		y: -.4642,
		z: -.36703,
		mag: 5.28,
		bv: 1.394,
		name: "σ Capricorno",
		detail: "Capricorno · mag 5,28",
		proper: false
	},
	{
		x: .77242,
		y: -.43017,
		z: -.46724,
		mag: 4.77,
		bv: -.047,
		name: "Alshat",
		detail: "ν Capricorno · mag 4,77",
		proper: true
	},
	{
		x: .78247,
		y: -.44417,
		z: -.43641,
		mag: 3.05,
		bv: .79,
		name: "Dabih",
		detail: "β Capricorno · mag 3,05",
		proper: true
	},
	{
		x: .20526,
		y: .03258,
		z: -.97816,
		mag: 2.23,
		bv: .673,
		name: "Sadr",
		detail: "γ Cigno · mag 2,23",
		proper: true
	},
	{
		x: .62837,
		y: -.30285,
		z: -.71654,
		mag: 5.3,
		bv: .983,
		name: "HIP 100541",
		detail: "mag 5,30",
		proper: false
	},
	{
		x: .31324,
		y: -.05265,
		z: -.94821,
		mag: 4.43,
		bv: 1.331,
		name: "39 Cigno",
		detail: "Cigno · mag 4,43",
		proper: false
	},
	{
		x: .77225,
		y: -.57633,
		z: .26735,
		mag: 1.94,
		bv: -.118,
		name: "Pavone",
		detail: "α Pavone · mag 1,94",
		proper: true
	},
	{
		x: .78406,
		y: -.48597,
		z: -.38611,
		mag: 5.08,
		bv: -.049,
		name: "Okul",
		detail: "π Capricorno · mag 5,08",
		proper: true
	},
	{
		x: .77865,
		y: -.48893,
		z: -.39326,
		mag: 4.77,
		bv: .386,
		name: "ρ Capricorno",
		detail: "Capricorno · mag 4,77",
		proper: false
	},
	{
		x: .32574,
		y: -.08778,
		z: -.94138,
		mag: 4.01,
		bv: .404,
		name: "41 Cigno",
		detail: "Cigno · mag 4,01",
		proper: false
	},
	{
		x: -.13112,
		y: .23844,
		z: -.96226,
		mag: 4.21,
		bv: .199,
		name: "Al Kidr",
		detail: "θ Cefeo · mag 4,21",
		proper: true
	},
	{
		x: .68393,
		y: -.39231,
		z: -.61508,
		mag: 4.91,
		bv: 1.16,
		name: "69 Aquila",
		detail: "Aquila · mag 4,91",
		proper: false
	},
	{
		x: .06813,
		y: .10007,
		z: -.99264,
		mag: 4.94,
		bv: -.087,
		name: "Ruchba",
		detail: "ω1 Cigno · mag 4,94",
		proper: true
	},
	{
		x: -.29703,
		y: .34265,
		z: -.89127,
		mag: 5.18,
		bv: .1,
		name: "73 Dragone",
		detail: "Dragone · mag 5,18",
		proper: false
	},
	{
		x: .54394,
		y: -.28557,
		z: -.78904,
		mag: 4.03,
		bv: -.123,
		name: "Aldulfin",
		detail: "ε Delfino · mag 4,03",
		proper: true
	},
	{
		x: .25127,
		y: -.05105,
		z: -.96657,
		mag: 4.61,
		bv: 1.593,
		name: "47 Cigno",
		detail: "Cigno · mag 4,61",
		proper: false
	},
	{
		x: .80243,
		y: -.5941,
		z: .05618,
		mag: 5.12,
		bv: .999,
		name: "ν Microscopio",
		detail: "Microscopio · mag 5,12",
		proper: false
	},
	{
		x: .5024,
		y: -.26147,
		z: -.82415,
		mag: 4.64,
		bv: .12,
		name: "ζ Delfino",
		detail: "Delfino · mag 4,64",
		proper: false
	},
	{
		x: .73843,
		y: -.58907,
		z: .32822,
		mag: 4.75,
		bv: .291,
		name: "φ1 Pavone",
		detail: "Pavone · mag 4,75",
		proper: false
	},
	{
		x: .66326,
		y: -.41454,
		z: -.62309,
		mag: 4.91,
		bv: 1.606,
		name: "70 Aquila",
		detail: "Aquila · mag 4,91",
		proper: false
	},
	{
		x: .49766,
		y: -.26977,
		z: -.82436,
		mag: 3.64,
		bv: .425,
		name: "Rotanev",
		detail: "β Delfino · mag 3,64",
		proper: true
	},
	{
		x: .78975,
		y: -.60472,
		z: .10304,
		mag: 3.11,
		bv: .998,
		name: "Persian",
		detail: "α Indiano · mag 3,11",
		proper: true
	},
	{
		x: .73047,
		y: -.59039,
		z: .34329,
		mag: 4.86,
		bv: .447,
		name: "ρ Pavone",
		detail: "Pavone · mag 4,86",
		proper: false
	},
	{
		x: .64739,
		y: -.40896,
		z: -.64315,
		mag: 4.31,
		bv: .949,
		name: "l Aquila",
		detail: "Aquila · mag 4,31",
		proper: false
	},
	{
		x: .41956,
		y: -.20884,
		z: -.88338,
		mag: 4.81,
		bv: -.03,
		name: "29 Volpetta",
		detail: "Volpetta · mag 4,81",
		proper: false
	},
	{
		x: .38433,
		y: -.17961,
		z: -.90556,
		mag: 5.06,
		bv: -.133,
		name: "28 Volpetta",
		detail: "Volpetta · mag 5,06",
		proper: false
	},
	{
		x: .54154,
		y: -.31689,
		z: -.77866,
		mag: 5.07,
		bv: .702,
		name: "κ Delfino",
		detail: "Delfino · mag 5,07",
		proper: false
	},
	{
		x: .73906,
		y: -.50748,
		z: -.44302,
		mag: 5.24,
		bv: -.129,
		name: "τ Capricorno",
		detail: "Capricorno · mag 5,24",
		proper: false
	},
	{
		x: .63123,
		y: -.40008,
		z: -.66445,
		mag: 5.15,
		bv: 1.06,
		name: "1 Acquario",
		detail: "Acquario · mag 5,15",
		proper: false
	},
	{
		x: .4778,
		y: -.26422,
		z: -.83779,
		mag: 3.77,
		bv: -.057,
		name: "Sualocin",
		detail: "α Delfino · mag 3,77",
		proper: true
	},
	{
		x: .73289,
		y: -.59675,
		z: .32674,
		mag: 5.11,
		bv: .544,
		name: "φ2 Pavone",
		detail: "Pavone · mag 5,11",
		proper: false
	},
	{
		x: .75282,
		y: -.52793,
		z: -.39312,
		mag: 5.15,
		bv: 1.647,
		name: "υ Capricorno",
		detail: "Capricorno · mag 5,15",
		proper: false
	},
	{
		x: .09952,
		y: .03486,
		z: -.99442,
		mag: 1.25,
		bv: .092,
		name: "Deneb",
		detail: "α Cigno · mag 1,25",
		proper: true
	},
	{
		x: .69263,
		y: -.58183,
		z: .4263,
		mag: 5.14,
		bv: -.061,
		name: "υ Pavone",
		detail: "Pavone · mag 5,14",
		proper: false
	},
	{
		x: .47731,
		y: -.28492,
		z: -.83126,
		mag: 4.43,
		bv: .302,
		name: "Al Ukud",
		detail: "δ Delfino · mag 4,43",
		proper: true
	},
	{
		x: .76514,
		y: -.61789,
		z: .18101,
		mag: 4.51,
		bv: .278,
		name: "η Indiano",
		detail: "Indiano · mag 4,51",
		proper: false
	},
	{
		x: .35488,
		y: -.18763,
		z: -.91589,
		mag: 4.92,
		bv: 1.183,
		name: "30 Volpetta",
		detail: "Volpetta · mag 4,92",
		proper: false
	},
	{
		x: .69311,
		y: -.58791,
		z: .41708,
		mag: 3.42,
		bv: .163,
		name: "β Pavone",
		detail: "Pavone · mag 3,42",
		proper: false
	},
	{
		x: -.13408,
		y: .20182,
		z: -.9702,
		mag: 3.41,
		bv: .912,
		name: "Kabalfird",
		detail: "η Cefeo · mag 3,41",
		proper: true
	},
	{
		x: -.07626,
		y: .1574,
		z: -.98459,
		mag: 4.52,
		bv: .535,
		name: "υ1 Cefeo",
		detail: "Cefeo · mag 4,52",
		proper: false
	},
	{
		x: .28473,
		y: -.1328,
		z: -.94936,
		mag: 4.22,
		bv: 1.051,
		name: "52 Cigno",
		detail: "Cigno · mag 4,22",
		proper: false
	},
	{
		x: .76499,
		y: -.58071,
		z: -.27849,
		mag: 4.13,
		bv: .426,
		name: "Wei",
		detail: "ψ Capricorno · mag 4,13",
		proper: true
	},
	{
		x: .24154,
		y: -.09959,
		z: -.96527,
		mag: 2.48,
		bv: 1.021,
		name: "Aljanah",
		detail: "ε Cigno · mag 2,48",
		proper: true
	},
	{
		x: .45745,
		y: -.28529,
		z: -.84223,
		mag: 5.15,
		bv: .495,
		name: "γ1 Delfino",
		detail: "Delfino · mag 5,15",
		proper: false
	},
	{
		x: .45742,
		y: -.28532,
		z: -.84224,
		mag: 4.27,
		bv: 1.042,
		name: "Al Salib",
		detail: "γ2 Delfino · mag 4,27",
		proper: true
	},
	{
		x: .23411,
		y: -.09795,
		z: -.96726,
		mag: 4.93,
		bv: 1.294,
		name: "HD 198134",
		detail: "Cigno · mag 4,93",
		proper: false
	},
	{
		x: .20588,
		y: -.07564,
		z: -.97565,
		mag: 4.53,
		bv: -.083,
		name: "λ Cigno",
		detail: "Cigno · mag 4,53",
		proper: false
	},
	{
		x: .68467,
		y: -.50159,
		z: -.52881,
		mag: 3.78,
		bv: 0,
		name: "Albali",
		detail: "ε Acquario · mag 3,78",
		proper: true
	},
	{
		x: .65313,
		y: -.47079,
		z: -.59311,
		mag: 4.43,
		bv: 1.639,
		name: "k Acquario",
		detail: "Acquario · mag 4,43",
		proper: false
	},
	{
		x: .77566,
		y: -.62968,
		z: .04297,
		mag: 5.11,
		bv: .361,
		name: "ι Microscopio",
		detail: "Microscopio · mag 5,11",
		proper: false
	},
	{
		x: .07402,
		y: .026,
		z: -.99692,
		mag: 4.81,
		bv: .571,
		name: "55 Cigno",
		detail: "Cigno · mag 4,81",
		proper: false
	},
	{
		x: .7702,
		y: -.63255,
		z: .08166,
		mag: 4.9,
		bv: 1.494,
		name: "ζ Indiano",
		detail: "Indiano · mag 4,90",
		proper: false
	},
	{
		x: .77352,
		y: -.61928,
		z: -.13473,
		mag: 4.89,
		bv: 1.004,
		name: "α Microscopio",
		detail: "Microscopio · mag 4,89",
		proper: false
	},
	{
		x: .0995,
		y: 59e-5,
		z: -.99504,
		mag: 5.06,
		bv: .198,
		name: "56 Cigno",
		detail: "Cigno · mag 5,06",
		proper: false
	},
	{
		x: .75355,
		y: -.63388,
		z: .17423,
		mag: 5.06,
		bv: 1.125,
		name: "ι Indiano",
		detail: "Indiano · mag 5,06",
		proper: false
	},
	{
		x: .7557,
		y: -.60437,
		z: -.25232,
		mag: 4.12,
		bv: 1.633,
		name: "ω Capricorno",
		detail: "Capricorno · mag 4,12",
		proper: false
	},
	{
		x: .31466,
		y: -.19051,
		z: -.92989,
		mag: 4.56,
		bv: .835,
		name: "31 Volpetta",
		detail: "Volpetta · mag 4,56",
		proper: false
	},
	{
		x: .66774,
		y: -.51477,
		z: -.53771,
		mag: 4.73,
		bv: .325,
		name: "Albulan",
		detail: "μ Acquario · mag 4,73",
		proper: true
	},
	{
		x: .08883,
		y: -.00338,
		z: -.99604,
		mag: 4.8,
		bv: -.134,
		name: "57 Cigno",
		detail: "Cigno · mag 4,80",
		proper: false
	},
	{
		x: .76815,
		y: -.63952,
		z: -.03083,
		mag: 5.34,
		bv: 1.318,
		name: "HIP 103127",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: .29681,
		y: -.18745,
		z: -.93636,
		mag: 5.03,
		bv: 1.481,
		name: "32 Volpetta",
		detail: "Volpetta · mag 5,03",
		proper: false
	},
	{
		x: .72286,
		y: -.62732,
		z: .28974,
		mag: 3.67,
		bv: 1.25,
		name: "β Indiano",
		detail: "Indiano · mag 3,67",
		proper: false
	},
	{
		x: .45963,
		y: -.3377,
		z: -.8214,
		mag: 5.19,
		bv: 1.119,
		name: "17 Delfino",
		detail: "Delfino · mag 5,19",
		proper: false
	},
	{
		x: .1233,
		y: -.04925,
		z: -.99115,
		mag: 3.94,
		bv: .027,
		name: "ν Cigno",
		detail: "Cigno · mag 3,94",
		proper: false
	},
	{
		x: .35619,
		y: -.2595,
		z: -.89766,
		mag: 5.3,
		bv: 1.419,
		name: "33 Volpetta",
		detail: "Volpetta · mag 5,30",
		proper: false
	},
	{
		x: .5436,
		y: -.43497,
		z: -.71784,
		mag: 5.3,
		bv: .464,
		name: "ε Cavallo",
		detail: "Cavallo · mag 5,30",
		proper: false
	},
	{
		x: .54356,
		y: -.43499,
		z: -.71786,
		mag: 5.24,
		bv: .457,
		name: "HIP 103571",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .03438,
		y: .01694,
		z: -.99927,
		mag: 4.74,
		bv: -.084,
		name: "f1 Cigno",
		detail: "Cigno · mag 4,74",
		proper: false
	},
	{
		x: .74458,
		y: -.64735,
		z: -.16293,
		mag: 4.67,
		bv: .89,
		name: "γ Microscopio",
		detail: "Microscopio · mag 4,67",
		proper: false
	},
	{
		x: .74754,
		y: -.66213,
		z: -.05261,
		mag: 5.32,
		bv: .424,
		name: "ζ Microscopio",
		detail: "Microscopio · mag 5,32",
		proper: false
	},
	{
		x: .69677,
		y: -.61374,
		z: -.37127,
		mag: 4.82,
		bv: .169,
		name: "Arm",
		detail: "η Capricorno · mag 4,82",
		proper: true
	},
	{
		x: .59839,
		y: -.55412,
		z: .57869,
		mag: 5.13,
		bv: .49,
		name: "α Ottante",
		detail: "Ottante · mag 5,13",
		proper: false
	},
	{
		x: .07094,
		y: -.03626,
		z: -.99682,
		mag: 3.72,
		bv: 1.609,
		name: "ξ Cigno",
		detail: "Cigno · mag 3,72",
		proper: false
	},
	{
		x: .72051,
		y: -.65556,
		z: .22608,
		mag: 5.17,
		bv: 1.201,
		name: "μ Indiano",
		detail: "Indiano · mag 5,17",
		proper: false
	},
	{
		x: .67971,
		y: -.60583,
		z: -.41348,
		mag: 4.08,
		bv: -.01,
		name: "θ Capricorno",
		detail: "Capricorno · mag 4,08",
		proper: false
	},
	{
		x: .73215,
		y: -.66161,
		z: -.16193,
		mag: 5.2,
		bv: 1.104,
		name: "2 Pesce Australe",
		detail: "Pesce Australe · mag 5,20",
		proper: false
	},
	{
		x: .01947,
		y: .00353,
		z: -.9998,
		mag: 4.56,
		bv: 1.569,
		name: "f2 Cigno",
		detail: "Cigno · mag 4,56",
		proper: false
	},
	{
		x: .13296,
		y: -.10137,
		z: -.98592,
		mag: 5.2,
		bv: 1.069,
		name: "61 Cigno",
		detail: "Cigno · mag 5,20",
		proper: false
	},
	{
		x: .71033,
		y: -.64287,
		z: -.28663,
		mag: 4.49,
		bv: 1.604,
		name: "A Capricorno",
		detail: "Capricorno · mag 4,49",
		proper: false
	},
	{
		x: .69135,
		y: -.63223,
		z: -.34976,
		mag: 5.3,
		bv: 0,
		name: "χ Capricorno",
		detail: "Capricorno · mag 5,30",
		proper: false
	},
	{
		x: .63542,
		y: -.5846,
		z: -.50447,
		mag: 4.5,
		bv: .926,
		name: "Albulaan",
		detail: "ν Acquario · mag 4,50",
		proper: true
	},
	{
		x: .45495,
		y: -.41887,
		z: -.78586,
		mag: 4.7,
		bv: .262,
		name: "γ Cavallo",
		detail: "Cavallo · mag 4,70",
		proper: false
	},
	{
		x: .22375,
		y: -.21563,
		z: -.9505,
		mag: 3.21,
		bv: .99,
		name: "ζ Cigno",
		detail: "Cigno · mag 3,21",
		proper: false
	},
	{
		x: .72479,
		y: -.68786,
		z: -.03918,
		mag: 5.25,
		bv: .46,
		name: "HIP 104738",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: .63847,
		y: -.60442,
		z: .47649,
		mag: 5.06,
		bv: 1.578,
		name: "ο Pavone",
		detail: "Pavone · mag 5,06",
		proper: false
	},
	{
		x: .44398,
		y: -.43296,
		z: -.78449,
		mag: 4.47,
		bv: .529,
		name: "δ Cavallo",
		detail: "Cavallo · mag 4,47",
		proper: false
	},
	{
		x: .12336,
		y: -.12935,
		z: -.9839,
		mag: 3.74,
		bv: .393,
		name: "τ Cigno",
		detail: "Cigno · mag 3,74",
		proper: false
	},
	{
		x: .66914,
		y: -.6509,
		z: -.35859,
		mag: 5.17,
		bv: 1.161,
		name: "φ Capricorno",
		detail: "Capricorno · mag 5,17",
		proper: false
	},
	{
		x: .64045,
		y: -.62516,
		z: -.44609,
		mag: 5.31,
		bv: 1.639,
		name: "29 Capricorno",
		detail: "Capricorno · mag 5,31",
		proper: false
	},
	{
		x: .48566,
		y: -.48043,
		z: -.73029,
		mag: 3.92,
		bv: .549,
		name: "Kitalpha",
		detail: "α Cavallo · mag 3,92",
		proper: true
	},
	{
		x: .10043,
		y: -.11966,
		z: -.98772,
		mag: 4.22,
		bv: .098,
		name: "σ Cigno",
		detail: "Cigno · mag 4,22",
		proper: false
	},
	{
		x: .15443,
		y: -.17455,
		z: -.97246,
		mag: 4.41,
		bv: -.103,
		name: "υ Cigno",
		detail: "Cigno · mag 4,41",
		proper: false
	},
	{
		x: .70262,
		y: -.69222,
		z: -.16482,
		mag: 4.71,
		bv: .07,
		name: "ε Microscopio",
		detail: "Microscopio · mag 4,71",
		proper: false
	},
	{
		x: .04161,
		y: -.06699,
		z: -.99689,
		mag: 5.04,
		bv: -.061,
		name: "A Cigno",
		detail: "Cigno · mag 5,04",
		proper: false
	},
	{
		x: -.18835,
		y: .1594,
		z: -.96908,
		mag: 2.45,
		bv: .257,
		name: "Alderamin",
		detail: "α Cefeo · mag 2,45",
		proper: true
	},
	{
		x: -.21667,
		y: .18548,
		z: -.95846,
		mag: 5.19,
		bv: -.045,
		name: "6 Cefeo",
		detail: "Cefeo · mag 5,19",
		proper: false
	},
	{
		x: .69824,
		y: -.68607,
		z: .20437,
		mag: 4.39,
		bv: .191,
		name: "θ Indiano",
		detail: "Indiano · mag 4,39",
		proper: false
	},
	{
		x: .70756,
		y: -.7065,
		z: -.01466,
		mag: 4.8,
		bv: .029,
		name: "θ1 Microscopio",
		detail: "Microscopio · mag 4,80",
		proper: false
	},
	{
		x: .31869,
		y: -.35713,
		z: -.878,
		mag: 4.08,
		bv: 1.108,
		name: "1 Pegaso",
		detail: "Pegaso · mag 4,08",
		proper: false
	},
	{
		x: .63063,
		y: -.65301,
		z: -.41939,
		mag: 4.28,
		bv: .888,
		name: "ι Capricorno",
		detail: "Capricorno · mag 4,28",
		proper: false
	},
	{
		x: .44948,
		y: -.48833,
		z: -.748,
		mag: 5.16,
		bv: .064,
		name: "β Cavallo",
		detail: "Cavallo · mag 5,16",
		proper: false
	},
	{
		x: .64796,
		y: -.64669,
		z: .40243,
		mag: 4.21,
		bv: .494,
		name: "γ Pavone",
		detail: "Pavone · mag 4,21",
		proper: false
	},
	{
		x: .64549,
		y: -.68948,
		z: -.32858,
		mag: 3.77,
		bv: 1.002,
		name: "Yen",
		detail: "ζ Capricorno · mag 3,77",
		proper: true
	},
	{
		x: -.03639,
		y: -.02424,
		z: -.99904,
		mag: 5.29,
		bv: .108,
		name: "HIP 105898",
		detail: "mag 5,29",
		proper: false
	},
	{
		x: .10397,
		y: -.17126,
		z: -.97972,
		mag: 5.3,
		bv: -.14,
		name: "70 Cigno",
		detail: "Cigno · mag 5,30",
		proper: false
	},
	{
		x: -.29237,
		y: .24236,
		z: -.92508,
		mag: 3.23,
		bv: -.201,
		name: "Alfirk",
		detail: "β Cefeo · mag 3,23",
		proper: true
	},
	{
		x: .63673,
		y: -.69299,
		z: -.33814,
		mag: 4.5,
		bv: .889,
		name: "b Capricorno",
		detail: "Capricorno · mag 4,50",
		proper: false
	},
	{
		x: -.01421,
		y: -.05843,
		z: -.99819,
		mag: 5.22,
		bv: .965,
		name: "g Cigno",
		detail: "Cigno · mag 5,22",
		proper: false
	},
	{
		x: .25336,
		y: -.33717,
		z: -.90671,
		mag: 4.52,
		bv: 1.618,
		name: "2 Pegaso",
		detail: "Pegaso · mag 4,52",
		proper: false
	},
	{
		x: .52792,
		y: -.614,
		z: -.58678,
		mag: 2.9,
		bv: .828,
		name: "Sadalsuud",
		detail: "β Acquario · mag 2,90",
		proper: true
	},
	{
		x: .68098,
		y: -.73228,
		z: -.00665,
		mag: 5.29,
		bv: 1.109,
		name: "ξ Gru",
		detail: "Gru · mag 5,29",
		proper: false
	},
	{
		x: -.01291,
		y: -.07984,
		z: -.99672,
		mag: 3.98,
		bv: .885,
		name: "ρ Cigno",
		detail: "Cigno · mag 3,98",
		proper: false
	},
	{
		x: .06853,
		y: -.17115,
		z: -.98286,
		mag: 4.87,
		bv: 1.085,
		name: "72 Cigno",
		detail: "Cigno · mag 4,87",
		proper: false
	},
	{
		x: .04108,
		y: -.15231,
		z: -.98748,
		mag: 5.04,
		bv: .198,
		name: "74 Cigno",
		detail: "Cigno · mag 5,04",
		proper: false
	},
	{
		x: .60014,
		y: -.70699,
		z: -.37417,
		mag: 4.51,
		bv: -.18,
		name: "Kastra",
		detail: "ε Capricorno · mag 4,51",
		proper: true
	},
	{
		x: .52511,
		y: -.64741,
		z: -.55238,
		mag: 4.68,
		bv: .175,
		name: "Bunda",
		detail: "ξ Acquario · mag 4,68",
		proper: true
	},
	{
		x: -.21084,
		y: .12614,
		z: -.96935,
		mag: 4.76,
		bv: .246,
		name: "9 Cefeo",
		detail: "Cefeo · mag 4,76",
		proper: false
	},
	{
		x: .43819,
		y: -.57755,
		z: -.68879,
		mag: 5.1,
		bv: 1.034,
		name: "d Acquario",
		detail: "Acquario · mag 5,10",
		proper: false
	},
	{
		x: .57533,
		y: -.70306,
		z: -.41797,
		mag: 3.69,
		bv: .32,
		name: "Nashira",
		detail: "γ Capricorno · mag 3,69",
		proper: true
	},
	{
		x: -7e-5,
		y: -.12259,
		z: -.99246,
		mag: 5.09,
		bv: 1.601,
		name: "75 Cigno",
		detail: "Cigno · mag 5,09",
		proper: false
	},
	{
		x: .57067,
		y: -.57627,
		z: .58502,
		mag: 3.73,
		bv: 1.008,
		name: "ν Ottante",
		detail: "Ottante · mag 3,73",
		proper: false
	},
	{
		x: .55493,
		y: -.69427,
		z: -.4583,
		mag: 5.16,
		bv: .672,
		name: "42 Capricorno",
		detail: "Capricorno · mag 5,16",
		proper: false
	},
	{
		x: -.31421,
		y: .23884,
		z: -.91882,
		mag: 4.55,
		bv: 1.108,
		name: "11 Cefeo",
		detail: "Cefeo · mag 4,55",
		proper: false
	},
	{
		x: .60401,
		y: -.73398,
		z: -.31055,
		mag: 5.24,
		bv: .991,
		name: "41 Capricorno",
		detail: "Capricorno · mag 5,24",
		proper: false
	},
	{
		x: -.09549,
		y: -.0227,
		z: -.99517,
		mag: 4.69,
		bv: -.119,
		name: "Azelfafage",
		detail: "π1 Cigno · mag 4,69",
		proper: true
	},
	{
		x: .39856,
		y: -.55552,
		z: -.72976,
		mag: 5.3,
		bv: 1.653,
		name: "7 Pegaso",
		detail: "Pegaso · mag 5,30",
		proper: false
	},
	{
		x: .57976,
		y: -.71971,
		z: -.38197,
		mag: 4.72,
		bv: .868,
		name: "κ Capricorno",
		detail: "Capricorno · mag 4,72",
		proper: false
	},
	{
		x: -.32553,
		y: .25043,
		z: -.91176,
		mag: 5.18,
		bv: 1.063,
		name: "78 Dragone",
		detail: "Dragone · mag 5,18",
		proper: false
	},
	{
		x: -.18335,
		y: .07524,
		z: -.98016,
		mag: 4.23,
		bv: 2.242,
		name: "The Garnet Star",
		detail: "μ Cefeo · mag 4,23",
		proper: true
	},
	{
		x: .15528,
		y: -.31467,
		z: -.93642,
		mag: 4.49,
		bv: .512,
		name: "μ1 Cigno",
		detail: "Cigno · mag 4,49",
		proper: false
	},
	{
		x: .35278,
		y: -.52187,
		z: -.77666,
		mag: 2.38,
		bv: 1.52,
		name: "Enif",
		detail: "ε Pegaso · mag 2,38",
		proper: true
	},
	{
		x: .27688,
		y: -.44628,
		z: -.85098,
		mag: 4.34,
		bv: 1.161,
		name: "9 Pegaso",
		detail: "Pegaso · mag 4,34",
		proper: false
	},
	{
		x: .18798,
		y: -.35292,
		z: -.91658,
		mag: 4.14,
		bv: .425,
		name: "κ Pegaso",
		detail: "Pegaso · mag 4,14",
		proper: false
	},
	{
		x: .63244,
		y: -.761,
		z: -.14456,
		mag: 4.35,
		bv: -.053,
		name: "ι Pesce Australe",
		detail: "Pesce Australe · mag 4,35",
		proper: false
	},
	{
		x: .51048,
		y: -.67572,
		z: -.53181,
		mag: 5.1,
		bv: 1.108,
		name: "c Capricorno",
		detail: "Capricorno · mag 5,10",
		proper: false
	},
	{
		x: -.21206,
		y: .10339,
		z: -.97177,
		mag: 4.25,
		bv: .474,
		name: "Castula",
		detail: "ν Cefeo · mag 4,25",
		proper: true
	},
	{
		x: .21291,
		y: -.38799,
		z: -.89673,
		mag: 5.29,
		bv: 1.381,
		name: "12 Pegaso",
		detail: "Pegaso · mag 5,29",
		proper: false
	},
	{
		x: -.08411,
		y: -.05615,
		z: -.99487,
		mag: 4.23,
		bv: -.12,
		name: "π2 Cigno",
		detail: "Cigno · mag 4,23",
		proper: false
	},
	{
		x: .55023,
		y: -.7195,
		z: -.42375,
		mag: 2.85,
		bv: .18,
		name: "Deneb Algedi",
		detail: "δ Capricorno · mag 2,85",
		proper: true
	},
	{
		x: .61791,
		y: -.76537,
		z: -.17999,
		mag: 5.02,
		bv: .042,
		name: "θ Pesce Australe",
		detail: "Pesce Australe · mag 5,02",
		proper: false
	},
	{
		x: .12296,
		y: -.31106,
		z: -.9424,
		mag: 5.07,
		bv: .01,
		name: "14 Pegaso",
		detail: "Pegaso · mag 5,07",
		proper: false
	},
	{
		x: .25968,
		y: -.462,
		z: -.84801,
		mag: 5.34,
		bv: .394,
		name: "13 Pegaso",
		detail: "Pegaso · mag 5,34",
		proper: false
	},
	{
		x: .53316,
		y: -.53188,
		z: .65791,
		mag: 5.27,
		bv: .756,
		name: "λ Ottante",
		detail: "Ottante · mag 5,27",
		proper: false
	},
	{
		x: .15967,
		y: -.37063,
		z: -.91495,
		mag: 5.09,
		bv: -.155,
		name: "16 Pegaso",
		detail: "Pegaso · mag 5,09",
		proper: false
	},
	{
		x: .51386,
		y: -.72358,
		z: -.46084,
		mag: 5.08,
		bv: .378,
		name: "μ Capricorno",
		detail: "Capricorno · mag 5,08",
		proper: false
	},
	{
		x: .61935,
		y: -.78231,
		z: -.06626,
		mag: 3,
		bv: -.084,
		name: "Aldhanab",
		detail: "γ Gru · mag 3,00",
		proper: true
	},
	{
		x: -.25551,
		y: .12267,
		z: -.95899,
		mag: 5.11,
		bv: 1.547,
		name: "HD 208816",
		detail: "Cefeo · mag 5,11",
		proper: false
	},
	{
		x: .62365,
		y: -.74458,
		z: .23805,
		mag: 4.4,
		bv: .297,
		name: "δ Indiano",
		detail: "Indiano · mag 4,40",
		proper: false
	},
	{
		x: -.34977,
		y: .24827,
		z: -.90334,
		mag: 5.04,
		bv: .439,
		name: "16 Cefeo",
		detail: "Cefeo · mag 5,04",
		proper: false
	},
	{
		x: .61166,
		y: -.74367,
		z: .26987,
		mag: 4.69,
		bv: 1.056,
		name: "ε Indiano",
		detail: "Indiano · mag 4,69",
		proper: false
	},
	{
		x: .39575,
		y: -.67775,
		z: -.61971,
		mag: 4.74,
		bv: -.1,
		name: "Sadalmulk",
		detail: "ο Acquario · mag 4,74",
		proper: true
	},
	{
		x: -.27598,
		y: .12821,
		z: -.95258,
		mag: 4.26,
		bv: .379,
		name: "Kurhah",
		detail: "ξ Cefeo · mag 4,26",
		proper: true
	},
	{
		x: -.26162,
		y: .10716,
		z: -.9592,
		mag: 5.26,
		bv: 1.557,
		name: "18 Cefeo",
		detail: "Cefeo · mag 5,26",
		proper: false
	},
	{
		x: .38033,
		y: -.67202,
		z: -.6354,
		mag: 5.29,
		bv: .231,
		name: "32 Acquario",
		detail: "Acquario · mag 5,29",
		proper: false
	},
	{
		x: -.26016,
		y: .10118,
		z: -.96025,
		mag: 5.27,
		bv: 1.413,
		name: "20 Cefeo",
		detail: "Cefeo · mag 5,27",
		proper: false
	},
	{
		x: -.2555,
		y: .09395,
		z: -.96223,
		mag: 5.07,
		bv: .24,
		name: "19 Cefeo",
		detail: "Cefeo · mag 5,07",
		proper: false
	},
	{
		x: .32555,
		y: -.62438,
		z: -.71005,
		mag: 4.86,
		bv: 1.443,
		name: "Fum al Faras",
		detail: "ν Pegaso · mag 4,86",
		proper: true
	},
	{
		x: .37199,
		y: -.66999,
		z: -.64245,
		mag: 2.95,
		bv: .969,
		name: "Sadalmelik",
		detail: "α Acquario · mag 2,95",
		proper: true
	},
	{
		x: -.08175,
		y: -.14978,
		z: -.98533,
		mag: 5.09,
		bv: 1.568,
		name: "HIP 109102",
		detail: "mag 5,09",
		proper: false
	},
	{
		x: .59193,
		y: -.80566,
		z: -.0229,
		mag: 4.47,
		bv: 1.349,
		name: "λ Gru",
		detail: "Gru · mag 4,47",
		proper: false
	},
	{
		x: .47231,
		y: -.75892,
		z: -.44829,
		mag: 4.29,
		bv: -.075,
		name: "ι Acquario",
		detail: "Acquario · mag 4,29",
		proper: false
	},
	{
		x: .12279,
		y: -.41085,
		z: -.9034,
		mag: 3.77,
		bv: .435,
		name: "ι Pegaso",
		detail: "Pegaso · mag 3,77",
		proper: false
	},
	{
		x: .59987,
		y: -.79307,
		z: .10579,
		mag: 1.73,
		bv: -.07,
		name: "Alnair",
		detail: "α Gru · mag 1,73",
		proper: true
	},
	{
		x: .56562,
		y: -.81368,
		z: -.13417,
		mag: 4.5,
		bv: .054,
		name: "μ Pesce Australe",
		detail: "Pesce Australe · mag 4,50",
		proper: false
	},
	{
		x: .56924,
		y: -.81393,
		z: -.11611,
		mag: 4.99,
		bv: 1.499,
		name: "υ Pesce Australe",
		detail: "Pesce Australe · mag 4,99",
		proper: false
	},
	{
		x: -.35326,
		y: .22892,
		z: -.90709,
		mag: 4.79,
		bv: .919,
		name: "24 Cefeo",
		detail: "Cefeo · mag 4,79",
		proper: false
	},
	{
		x: .03208,
		y: -.31805,
		z: -.94753,
		mag: 4.28,
		bv: .471,
		name: "π Pegaso",
		detail: "Pegaso · mag 4,28",
		proper: false
	},
	{
		x: .55881,
		y: -.81729,
		z: -.14061,
		mag: 4.94,
		bv: .489,
		name: "τ Pesce Australe",
		detail: "Pesce Australe · mag 4,94",
		proper: false
	},
	{
		x: .29963,
		y: -.62547,
		z: -.72042,
		mag: 3.52,
		bv: .086,
		name: "Biham",
		detail: "θ Pegaso · mag 3,52",
		proper: true
	},
	{
		x: -.22592,
		y: .02906,
		z: -.97371,
		mag: 3.39,
		bv: 1.558,
		name: "ζ Cefeo",
		detail: "Cefeo · mag 3,39",
		proper: false
	},
	{
		x: -.23876,
		y: .04555,
		z: -.97001,
		mag: 5.05,
		bv: .192,
		name: "λ Cefeo",
		detail: "Cefeo · mag 5,05",
		proper: false
	},
	{
		x: -.21453,
		y: .00829,
		z: -.97668,
		mag: 5.24,
		bv: .534,
		name: "HIP 109572",
		detail: "mag 5,24",
		proper: false
	},
	{
		x: .00906,
		y: -.30498,
		z: -.95231,
		mag: 5.34,
		bv: 1.134,
		name: "HIP 109654",
		detail: "mag 5,34",
		proper: false
	},
	{
		x: -.4594,
		y: .40836,
		z: -.78879,
		mag: 5.27,
		bv: -.03,
		name: "HIP 109693",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: -.04681,
		y: -.23774,
		z: -.9702,
		mag: 4.5,
		bv: 1.385,
		name: "HIP 109754",
		detail: "mag 4,50",
		proper: false
	},
	{
		x: .49083,
		y: -.80675,
		z: -.329,
		mag: 5.33,
		bv: .812,
		name: "41 Acquario",
		detail: "Acquario · mag 5,33",
		proper: false
	},
	{
		x: -.22267,
		y: .00689,
		z: -.97487,
		mag: 4.18,
		bv: .278,
		name: "ε Cefeo",
		detail: "Cefeo · mag 4,18",
		proper: false
	},
	{
		x: .57107,
		y: -.82079,
		z: .01345,
		mag: 4.79,
		bv: .79,
		name: "μ1 Gru",
		detail: "Gru · mag 4,79",
		proper: false
	},
	{
		x: -.03237,
		y: -.26876,
		z: -.96266,
		mag: 4.14,
		bv: 1.447,
		name: "1 Lucertola",
		detail: "Lucertola · mag 4,14",
		proper: false
	},
	{
		x: .56957,
		y: -.82173,
		z: .01875,
		mag: 5.11,
		bv: .93,
		name: "μ2 Gru",
		detail: "Gru · mag 5,11",
		proper: false
	},
	{
		x: .42993,
		y: -.77888,
		z: -.45662,
		mag: 5.34,
		bv: 1.132,
		name: "42 Acquario",
		detail: "Acquario · mag 5,34",
		proper: false
	},
	{
		x: .3931,
		y: -.7504,
		z: -.53139,
		mag: 4.17,
		bv: .979,
		name: "Ancha",
		detail: "θ Acquario · mag 4,17",
		proper: true
	},
	{
		x: .58119,
		y: -.74271,
		z: .33256,
		mag: 2.87,
		bv: 1.39,
		name: "α Tucano",
		detail: "Tucano · mag 2,87",
		proper: false
	},
	{
		x: .53015,
		y: -.56636,
		z: .63101,
		mag: 5.09,
		bv: 1.276,
		name: "ε Ottante",
		detail: "Ottante · mag 5,09",
		proper: false
	},
	{
		x: .38157,
		y: -.75865,
		z: -.52808,
		mag: 5.35,
		bv: -.048,
		name: "ρ Acquario",
		detail: "Acquario · mag 5,35",
		proper: false
	},
	{
		x: -.13397,
		y: -.15407,
		z: -.97893,
		mag: 4.55,
		bv: -.1,
		name: "2 Lucertola",
		detail: "Lucertola · mag 4,55",
		proper: false
	},
	{
		x: .04739,
		y: -.40487,
		z: -.91314,
		mag: 4.78,
		bv: -.01,
		name: "32 Pegaso",
		detail: "Pegaso · mag 4,78",
		proper: false
	},
	{
		x: .20461,
		y: -.5939,
		z: -.77809,
		mag: 4.82,
		bv: -.132,
		name: "31 Pegaso",
		detail: "Pegaso · mag 4,82",
		proper: false
	},
	{
		x: .4698,
		y: -.82469,
		z: -.31494,
		mag: 5.12,
		bv: 1.057,
		name: "47 Acquario",
		detail: "Acquario · mag 5,12",
		proper: false
	},
	{
		x: .32512,
		y: -.71742,
		z: -.61612,
		mag: 3.86,
		bv: -.057,
		name: "Sadachbia",
		detail: "γ Acquario · mag 3,86",
		proper: true
	},
	{
		x: -.1946,
		y: -.07509,
		z: -.978,
		mag: 4.42,
		bv: 1.015,
		name: "β Lucertola",
		detail: "Lucertola · mag 4,42",
		proper: false
	},
	{
		x: -.17072,
		y: -.11686,
		z: -.97837,
		mag: 4.55,
		bv: .092,
		name: "4 Lucertola",
		detail: "Lucertola · mag 4,55",
		proper: false
	},
	{
		x: .55314,
		y: -.65175,
		z: .5189,
		mag: 5.28,
		bv: .66,
		name: "ν Indiano",
		detail: "Indiano · mag 5,28",
		proper: false
	},
	{
		x: .57022,
		y: -.76648,
		z: .29555,
		mag: 5.31,
		bv: .665,
		name: "HD 212330",
		detail: "mag 5,31",
		proper: false
	},
	{
		x: .28883,
		y: -.70388,
		z: -.64894,
		mag: 4.8,
		bv: -.171,
		name: "Sedia",
		detail: "π Acquario · mag 4,80",
		proper: true
	},
	{
		x: .56244,
		y: -.71772,
		z: .41054,
		mag: 4.51,
		bv: -.029,
		name: "δ Tucano",
		detail: "Tucano · mag 4,51",
		proper: false
	},
	{
		x: .25069,
		y: -.68123,
		z: -.68781,
		mag: 4.78,
		bv: 1.039,
		name: "35 Pegaso",
		detail: "Pegaso · mag 4,78",
		proper: false
	},
	{
		x: .28794,
		y: -.72334,
		z: -.62759,
		mag: 3.65,
		bv: .406,
		name: "Sadaltager",
		detail: "ζ1 Acquario · mag 3,65",
		proper: true
	},
	{
		x: -.26208,
		y: .00926,
		z: -.965,
		mag: 4.07,
		bv: .778,
		name: "δ Cefeo",
		detail: "Cefeo · mag 4,07",
		proper: false
	},
	{
		x: .54063,
		y: -.83919,
		z: .05899,
		mag: 3.97,
		bv: 1.022,
		name: "δ1 Gru",
		detail: "Gru · mag 3,97",
		proper: false
	},
	{
		x: -.16595,
		y: -.15041,
		z: -.9746,
		mag: 4.34,
		bv: 1.679,
		name: "5 Lucertola",
		detail: "Lucertola · mag 4,34",
		proper: false
	},
	{
		x: .54004,
		y: -.83923,
		z: .06364,
		mag: 4.12,
		bv: 1.57,
		name: "δ2 Gru",
		detail: "Gru · mag 4,12",
		proper: false
	},
	{
		x: -.12506,
		y: -.21886,
		z: -.96771,
		mag: 4.52,
		bv: -.086,
		name: "6 Lucertola",
		detail: "Lucertola · mag 4,52",
		proper: false
	},
	{
		x: .36599,
		y: -.79916,
		z: -.47685,
		mag: 4.82,
		bv: -.053,
		name: "σ Acquario",
		detail: "Acquario · mag 4,82",
		proper: false
	},
	{
		x: -.19396,
		y: -.1149,
		z: -.97426,
		mag: 3.76,
		bv: .031,
		name: "α Lucertola",
		detail: "Lucertola · mag 3,76",
		proper: false
	},
	{
		x: .49382,
		y: -.86001,
		z: -.12858,
		mag: 4.29,
		bv: .011,
		name: "Fum al Hui",
		detail: "β Pesce Australe · mag 4,29",
		proper: true
	},
	{
		x: .55522,
		y: -.74663,
		z: .36642,
		mag: 4.91,
		bv: 1.612,
		name: "ν Tucano",
		detail: "Tucano · mag 4,91",
		proper: false
	},
	{
		x: .4204,
		y: -.84989,
		z: -.31772,
		mag: 5.21,
		bv: .446,
		name: "υ Acquario",
		detail: "Acquario · mag 5,21",
		proper: false
	},
	{
		x: .26512,
		y: -.73859,
		z: -.61984,
		mag: 4.04,
		bv: -.083,
		name: "η Acquario",
		detail: "Acquario · mag 4,04",
		proper: false
	},
	{
		x: -.39029,
		y: .22954,
		z: -.89162,
		mag: 5.08,
		bv: .395,
		name: "31 Cefeo",
		detail: "Cefeo · mag 5,08",
		proper: false
	},
	{
		x: -.2192,
		y: -.10438,
		z: -.97008,
		mag: 4.64,
		bv: .254,
		name: "9 Lucertola",
		detail: "Lucertola · mag 4,64",
		proper: false
	},
	{
		x: .29035,
		y: -.77443,
		z: -.5621,
		mag: 5.04,
		bv: 1.14,
		name: "Situla",
		detail: "κ Acquario · mag 5,04",
		proper: true
	},
	{
		x: -.26674,
		y: -.02629,
		z: -.96341,
		mag: 5.11,
		bv: 1.537,
		name: "HIP 111795",
		detail: "mag 5,11",
		proper: false
	},
	{
		x: -.32116,
		y: .07706,
		z: -.94388,
		mag: 5.19,
		bv: .083,
		name: "30 Cefeo",
		detail: "Cefeo · mag 5,19",
		proper: false
	},
	{
		x: -.11077,
		y: -.29209,
		z: -.94995,
		mag: 4.89,
		bv: -.207,
		name: "10 Lucertola",
		detail: "Lucertola · mag 4,89",
		proper: false
	},
	{
		x: -.16216,
		y: -.21771,
		z: -.96245,
		mag: 4.5,
		bv: 1.318,
		name: "11 Lucertola",
		detail: "Lucertola · mag 4,50",
		proper: false
	},
	{
		x: .43799,
		y: -.8744,
		z: -.20878,
		mag: 4.18,
		bv: -.105,
		name: "ε Pesce Australe",
		detail: "Pesce Australe · mag 4,18",
		proper: false
	},
	{
		x: .14658,
		y: -.6516,
		z: -.74427,
		mag: 3.41,
		bv: -.086,
		name: "Homam",
		detail: "ζ Pegaso · mag 3,41",
		proper: true
	},
	{
		x: -.12788,
		y: -.27869,
		z: -.95183,
		mag: 5.25,
		bv: -.137,
		name: "12 Lucertola",
		detail: "Lucertola · mag 5,25",
		proper: false
	},
	{
		x: -.02692,
		y: -.43191,
		z: -.90151,
		mag: 4.8,
		bv: -.013,
		name: "Sadalmatar",
		detail: "ο Pegaso · mag 4,80",
		proper: true
	},
	{
		x: .51543,
		y: -.84762,
		z: .12596,
		mag: 2.07,
		bv: 1.61,
		name: "Tiaki",
		detail: "β Gru · mag 2,07",
		proper: true
	},
	{
		x: -.03948,
		y: -.42188,
		z: -.90579,
		mag: 2.93,
		bv: .852,
		name: "Matar",
		detail: "η Pegaso · mag 2,93",
		proper: true
	},
	{
		x: .49578,
		y: -.86775,
		z: .03473,
		mag: 4.84,
		bv: 1.027,
		name: "ρ Gru",
		detail: "Gru · mag 4,84",
		proper: false
	},
	{
		x: .37764,
		y: -.86182,
		z: -.3386,
		mag: 4.68,
		bv: 1.358,
		name: "g Acquario",
		detail: "Acquario · mag 4,68",
		proper: false
	},
	{
		x: -.14961,
		y: -.25944,
		z: -.9541,
		mag: 5.11,
		bv: .96,
		name: "13 Lucertola",
		detail: "Lucertola · mag 5,11",
		proper: false
	},
	{
		x: .52364,
		y: -.81815,
		z: .23754,
		mag: 4.84,
		bv: 1.18,
		name: "η Gru",
		detail: "Gru · mag 4,84",
		proper: false
	},
	{
		x: .51207,
		y: -.56474,
		z: .64719,
		mag: 4.13,
		bv: .208,
		name: "β Ottante",
		detail: "Ottante · mag 4,13",
		proper: false
	},
	{
		x: .0111,
		y: -.51528,
		z: -.85695,
		mag: 3.97,
		bv: 1.07,
		name: "Sadalnazi",
		detail: "λ Pegaso · mag 3,97",
		proper: true
	},
	{
		x: .11552,
		y: -.64811,
		z: -.75274,
		mag: 4.2,
		bv: .502,
		name: "Suudalnujum",
		detail: "ξ Pegaso · mag 4,20",
		proper: true
	},
	{
		x: -.4542,
		y: .36178,
		z: -.81413,
		mag: 4.77,
		bv: 1.257,
		name: "HIP 112519",
		detail: "mag 4,77",
		proper: false
	},
	{
		x: .36906,
		y: -.87188,
		z: -.3219,
		mag: 5.24,
		bv: .941,
		name: "68 Acquario",
		detail: "Acquario · mag 5,24",
		proper: false
	},
	{
		x: .51248,
		y: -.83414,
		z: .20389,
		mag: 3.49,
		bv: .083,
		name: "ε Gru",
		detail: "Gru · mag 3,49",
		proper: false
	},
	{
		x: .3196,
		y: -.85282,
		z: -.41298,
		mag: 4.05,
		bv: 1.57,
		name: "τ2 Acquario",
		detail: "Acquario · mag 4,05",
		proper: false
	},
	{
		x: -.35734,
		y: .10757,
		z: -.92776,
		mag: 3.5,
		bv: 1.053,
		name: "ι Cefeo",
		detail: "Cefeo · mag 3,50",
		proper: false
	},
	{
		x: -.01021,
		y: -.50841,
		z: -.86105,
		mag: 3.51,
		bv: .933,
		name: "Sadalbari",
		detail: "μ Pegaso · mag 3,51",
		proper: true
	},
	{
		x: .5125,
		y: -.58107,
		z: .63222,
		mag: 5.32,
		bv: -.126,
		name: "ξ Ottante",
		detail: "Ottante · mag 5,32",
		proper: false
	},
	{
		x: -.18436,
		y: -.24886,
		z: -.95083,
		mag: 4.95,
		bv: 1.559,
		name: "15 Lucertola",
		detail: "Lucertola · mag 4,95",
		proper: false
	},
	{
		x: .11579,
		y: -.68337,
		z: -.72083,
		mag: 5.16,
		bv: .487,
		name: "σ Pegaso",
		detail: "Pegaso · mag 5,16",
		proper: false
	},
	{
		x: .43139,
		y: -.8966,
		z: -.10006,
		mag: 4.46,
		bv: -.037,
		name: "γ Pesce Australe",
		detail: "Pesce Australe · mag 4,46",
		proper: false
	},
	{
		x: .26267,
		y: -.82642,
		z: -.49803,
		mag: 3.73,
		bv: 1.626,
		name: "Hydor",
		detail: "λ Acquario · mag 3,73",
		proper: true
	},
	{
		x: -.46238,
		y: .37727,
		z: -.80242,
		mag: 4.7,
		bv: 1.418,
		name: "HIP 113116",
		detail: "mag 4,70",
		proper: false
	},
	{
		x: .31763,
		y: -.8718,
		z: -.37293,
		mag: 3.27,
		bv: .066,
		name: "Skat",
		detail: "δ Acquario · mag 3,27",
		proper: true
	},
	{
		x: .11447,
		y: -.69893,
		z: -.70597,
		mag: 4.91,
		bv: -.003,
		name: "ρ Pegaso",
		detail: "Pegaso · mag 4,91",
		proper: false
	},
	{
		x: .4189,
		y: -.90228,
		z: -.10204,
		mag: 4.2,
		bv: .952,
		name: "δ Pesce Australe",
		detail: "Pesce Australe · mag 4,20",
		proper: false
	},
	{
		x: -.24872,
		y: -.15638,
		z: -.95587,
		mag: 4.99,
		bv: 1.778,
		name: "HIP 113288",
		detail: "mag 4,99",
		proper: false
	},
	{
		x: -.24193,
		y: -.17345,
		z: -.95467,
		mag: 5.34,
		bv: -.102,
		name: "HD 217050",
		detail: "Lucertola · mag 5,34",
		proper: false
	},
	{
		x: .39722,
		y: -.90564,
		z: -.14842,
		mag: 1.17,
		bv: .145,
		name: "Fomalhaut",
		detail: "α Pesce Australe · mag 1,17",
		proper: true
	},
	{
		x: -.31131,
		y: -.04707,
		z: -.94914,
		mag: 5.1,
		bv: 1.011,
		name: "HD 217476",
		detail: "Cassiopeia · mag 5,10",
		proper: false
	},
	{
		x: .4879,
		y: -.84017,
		z: .23679,
		mag: 4.11,
		bv: .96,
		name: "ζ Gru",
		detail: "Gru · mag 4,11",
		proper: false
	},
	{
		x: -.20317,
		y: -.27725,
		z: -.93907,
		mag: 3.62,
		bv: -.099,
		name: "ο Andromeda",
		detail: "Andromeda · mag 3,62",
		proper: false
	},
	{
		x: -.20858,
		y: -.27159,
		z: -.93954,
		mag: 5.09,
		bv: .094,
		name: "2 Andromeda",
		detail: "Andromeda · mag 5,09",
		proper: false
	},
	{
		x: .4072,
		y: -.91155,
		z: -.05714,
		mag: 5.12,
		bv: .305,
		name: "π Pesce Australe",
		detail: "Pesce Australe · mag 5,12",
		proper: false
	},
	{
		x: -.38418,
		y: .11313,
		z: -.9163,
		mag: 5.25,
		bv: 1.248,
		name: "HIP 113864",
		detail: "mag 5,25",
		proper: false
	},
	{
		x: -.08757,
		y: -.4855,
		z: -.86984,
		mag: 2.44,
		bv: 1.655,
		name: "Scheat",
		detail: "β Pegaso · mag 2,44",
		proper: true
	},
	{
		x: .12593,
		y: -.76162,
		z: -.63567,
		mag: 4.48,
		bv: -.115,
		name: "Fumalsamakah",
		detail: "β Pesci · mag 4,48",
		proper: true
	},
	{
		x: -.26988,
		y: -.16044,
		z: -.94943,
		mag: 4.64,
		bv: 1.058,
		name: "3 Andromeda",
		detail: "Andromeda · mag 4,64",
		proper: false
	},
	{
		x: .02287,
		y: -.64787,
		z: -.76141,
		mag: 2.49,
		bv: -.002,
		name: "Markab",
		detail: "α Pegaso · mag 2,49",
		proper: true
	},
	{
		x: -.34113,
		y: -.01367,
		z: -.93992,
		mag: 4.84,
		bv: -.06,
		name: "1 Cassiopeia",
		detail: "Cassiopeia · mag 4,84",
		proper: false
	},
	{
		x: .33026,
		y: -.91462,
		z: -.23322,
		mag: 4.48,
		bv: .892,
		name: "c1 Acquario",
		detail: "Acquario · mag 4,48",
		proper: false
	},
	{
		x: .43994,
		y: -.89335,
		z: .09157,
		mag: 4.28,
		bv: .423,
		name: "θ Gru",
		detail: "Gru · mag 4,28",
		proper: false
	},
	{
		x: .06568,
		y: -.71388,
		z: -.69719,
		mag: 4.54,
		bv: 1.559,
		name: "55 Pegaso",
		detail: "Pegaso · mag 4,54",
		proper: false
	},
	{
		x: -.07592,
		y: -.5256,
		z: -.84734,
		mag: 4.76,
		bv: 1.285,
		name: "56 Pegaso",
		detail: "Pegaso · mag 4,76",
		proper: false
	},
	{
		x: -.25076,
		y: -.22188,
		z: -.94228,
		mag: 5.3,
		bv: 1.409,
		name: "4 Andromeda",
		detail: "Andromeda · mag 5,30",
		proper: false
	},
	{
		x: -.43201,
		y: .23923,
		z: -.86956,
		mag: 4.41,
		bv: .802,
		name: "π Cefeo",
		detail: "Cefeo · mag 4,41",
		proper: false
	},
	{
		x: .30302,
		y: -.91377,
		z: -.27056,
		mag: 3.68,
		bv: 1.202,
		name: "c2 Acquario",
		detail: "Acquario · mag 3,68",
		proper: false
	},
	{
		x: .0627,
		y: -.72545,
		z: -.68542,
		mag: 5.05,
		bv: 1.484,
		name: "HIP 114347",
		detail: "mag 5,05",
		proper: false
	},
	{
		x: .31032,
		y: -.91729,
		z: -.24956,
		mag: 4.71,
		bv: .674,
		name: "c3 Acquario",
		detail: "Acquario · mag 4,71",
		proper: false
	},
	{
		x: .43802,
		y: -.89045,
		z: .12341,
		mag: 3.88,
		bv: .998,
		name: "ι Gru",
		detail: "Gru · mag 3,88",
		proper: false
	},
	{
		x: .05407,
		y: -.72863,
		z: -.68277,
		mag: 5.15,
		bv: .139,
		name: "59 Pegaso",
		detail: "Pegaso · mag 5,15",
		proper: false
	},
	{
		x: -.28551,
		y: -.17978,
		z: -.94136,
		mag: 4.53,
		bv: .302,
		name: "7 Andromeda",
		detail: "Andromeda · mag 4,53",
		proper: false
	},
	{
		x: .16946,
		y: -.85481,
		z: -.4905,
		mag: 4.22,
		bv: 1.545,
		name: "φ Acquario",
		detail: "Acquario · mag 4,22",
		proper: false
	},
	{
		x: .1882,
		y: -.87557,
		z: -.44493,
		mag: 4.24,
		bv: 1.107,
		name: "ψ1 Acquario",
		detail: "Acquario · mag 4,24",
		proper: false
	},
	{
		x: .17363,
		y: -.86916,
		z: -.46305,
		mag: 4.93,
		bv: 1.613,
		name: "χ Acquario",
		detail: "Acquario · mag 4,93",
		proper: false
	},
	{
		x: .0805,
		y: -.7883,
		z: -.61,
		mag: 3.7,
		bv: .916,
		name: "γ Pesci",
		detail: "Pesci · mag 3,70",
		proper: false
	},
	{
		x: .46789,
		y: -.81733,
		z: .33622,
		mag: 3.99,
		bv: .41,
		name: "γ Tucano",
		detail: "Tucano · mag 3,99",
		proper: false
	},
	{
		x: -.2956,
		y: -.19139,
		z: -.93594,
		mag: 4.82,
		bv: 1.668,
		name: "8 Andromeda",
		detail: "Andromeda · mag 4,82",
		proper: false
	},
	{
		x: .18144,
		y: -.87919,
		z: -.44058,
		mag: 4.41,
		bv: -.144,
		name: "ψ2 Acquario",
		detail: "Acquario · mag 4,41",
		proper: false
	},
	{
		x: -.41061,
		y: .11816,
		z: -.90412,
		mag: 4.75,
		bv: .836,
		name: "ο Cefeo",
		detail: "Cefeo · mag 4,75",
		proper: false
	},
	{
		x: .34626,
		y: -.93512,
		z: -.07519,
		mag: 4.41,
		bv: 1.109,
		name: "γ Scultore",
		detail: "Scultore · mag 4,41",
		proper: false
	},
	{
		x: .18092,
		y: -.88315,
		z: -.43279,
		mag: 4.99,
		bv: -.022,
		name: "ψ3 Acquario",
		detail: "Acquario · mag 4,99",
		proper: false
	},
	{
		x: .21083,
		y: -.90236,
		z: -.3759,
		mag: 5.19,
		bv: .895,
		name: "HIP 115125",
		detail: "mag 5,19",
		proper: false
	},
	{
		x: .21084,
		y: -.90238,
		z: -.37583,
		mag: 5.2,
		bv: .787,
		name: "94 Acquario",
		detail: "Acquario · mag 5,20",
		proper: false
	},
	{
		x: .05053,
		y: -.77423,
		z: -.63089,
		mag: 5.05,
		bv: 1.204,
		name: "b Pesci",
		detail: "Pesci · mag 5,05",
		proper: false
	},
	{
		x: -.10763,
		y: -.56799,
		z: -.81596,
		mag: 4.58,
		bv: .18,
		name: "Salm",
		detail: "τ Pegaso · mag 4,58",
		proper: true
	},
	{
		x: -.17827,
		y: -.45896,
		z: -.87039,
		mag: 5.35,
		bv: -.101,
		name: "64 Pegaso",
		detail: "Pegaso · mag 5,35",
		proper: false
	},
	{
		x: .2101,
		y: -.91413,
		z: -.34673,
		mag: 5.19,
		bv: .203,
		name: "97 Acquario",
		detail: "Acquario · mag 5,19",
		proper: false
	},
	{
		x: .24737,
		y: -.93099,
		z: -.26846,
		mag: 3.96,
		bv: 1.082,
		name: "b1 Acquario",
		detail: "Acquario · mag 3,96",
		proper: false
	},
	{
		x: -.01922,
		y: -.70844,
		z: -.70551,
		mag: 5.09,
		bv: 1.315,
		name: "66 Pegaso",
		detail: "Pegaso · mag 5,09",
		proper: false
	},
	{
		x: -.39146,
		y: .01892,
		z: -.92,
		mag: 4.96,
		bv: 1.676,
		name: "4 Cassiopeia",
		detail: "Cassiopeia · mag 4,96",
		proper: false
	},
	{
		x: -.12135,
		y: -.57873,
		z: -.80644,
		mag: 4.42,
		bv: .617,
		name: "Alkarab",
		detail: "υ Pegaso · mag 4,42",
		proper: true
	},
	{
		x: .24043,
		y: -.93645,
		z: -.25544,
		mag: 4.38,
		bv: 1.46,
		name: "b2 Acquario",
		detail: "Acquario · mag 4,38",
		proper: false
	},
	{
		x: .06066,
		y: -.81998,
		z: -.56917,
		mag: 4.95,
		bv: .036,
		name: "κ Pesci",
		detail: "Pesci · mag 4,95",
		proper: false
	},
	{
		x: .01316,
		y: -.7758,
		z: -.63084,
		mag: 4.27,
		bv: 1.062,
		name: "θ Pesci",
		detail: "Pesci · mag 4,27",
		proper: false
	},
	{
		x: -.0456,
		y: -.71194,
		z: -.70075,
		mag: 4.54,
		bv: .939,
		name: "70 Pegaso",
		detail: "Pegaso · mag 4,54",
		proper: false
	},
	{
		x: -.38172,
		y: -.04639,
		z: -.92311,
		mag: 4.89,
		bv: -.122,
		name: "HD 221253",
		detail: "Cassiopeia · mag 4,89",
		proper: false
	},
	{
		x: -.26368,
		y: -.35919,
		z: -.89524,
		mag: 5.22,
		bv: 1.029,
		name: "Veritate",
		detail: "14 Andromeda · mag 5,22",
		proper: true
	},
	{
		x: .33481,
		y: -.94184,
		z: .02906,
		mag: 4.38,
		bv: -.095,
		name: "β Scultore",
		detail: "Scultore · mag 4,38",
		proper: false
	},
	{
		x: .21672,
		y: -.94625,
		z: -.24011,
		mag: 4.7,
		bv: .02,
		name: "b3 Acquario",
		detail: "Acquario · mag 4,70",
		proper: false
	},
	{
		x: -.1423,
		y: -.60063,
		z: -.78676,
		mag: 5.33,
		bv: 1.481,
		name: "71 Pegaso",
		detail: "Pegaso · mag 5,33",
		proper: false
	},
	{
		x: -.2135,
		y: -.48015,
		z: -.85081,
		mag: 4.97,
		bv: 1.383,
		name: "72 Pegaso",
		detail: "Pegaso · mag 4,97",
		proper: false
	},
	{
		x: .35721,
		y: -.92767,
		z: .10875,
		mag: 4.69,
		bv: .078,
		name: "ι Fenice",
		detail: "Fenice · mag 4,69",
		proper: false
	},
	{
		x: -.32953,
		y: -.25099,
		z: -.91017,
		mag: 3.81,
		bv: .984,
		name: "λ Andromeda",
		detail: "Andromeda · mag 3,81",
		proper: false
	},
	{
		x: .36585,
		y: -.91719,
		z: .15787,
		mag: 4.74,
		bv: .082,
		name: "HIP 116602",
		detail: "mag 4,74",
		proper: false
	},
	{
		x: -.31082,
		y: -.30265,
		z: -.901,
		mag: 4.29,
		bv: -.083,
		name: "ι Andromeda",
		detail: "Andromeda · mag 4,29",
		proper: false
	},
	{
		x: -.35744,
		y: -.18678,
		z: -.91507,
		mag: 5.35,
		bv: -.061,
		name: "18 Andromeda",
		detail: "Andromeda · mag 5,35",
		proper: false
	},
	{
		x: -.46748,
		y: .26413,
		z: -.84362,
		mag: 3.21,
		bv: 1.031,
		name: "Errai",
		detail: "γ Cefeo · mag 3,21",
		proper: true
	},
	{
		x: .14047,
		y: -.93292,
		z: -.33157,
		mag: 4.97,
		bv: .257,
		name: "ω1 Acquario",
		detail: "Acquario · mag 4,97",
		proper: false
	},
	{
		x: -.02589,
		y: -.79826,
		z: -.60176,
		mag: 4.13,
		bv: .507,
		name: "ι Pesci",
		detail: "Pesci · mag 4,13",
		proper: false
	},
	{
		x: -.32389,
		y: -.2876,
		z: -.90132,
		mag: 4.15,
		bv: -.071,
		name: "κ Andromeda",
		detail: "Andromeda · mag 4,15",
		proper: false
	},
	{
		x: .27304,
		y: -.96058,
		z: -.05236,
		mag: 5.3,
		bv: .965,
		name: "μ Scultore",
		detail: "Scultore · mag 5,30",
		proper: false
	},
	{
		x: .16206,
		y: -.94797,
		z: -.27403,
		mag: 4.82,
		bv: .822,
		name: "A2 Acquario",
		detail: "Acquario · mag 4,82",
		proper: false
	},
	{
		x: -.00139,
		y: -.83493,
		z: -.55035,
		mag: 4.49,
		bv: .2,
		name: "λ Pesci",
		detail: "Pesci · mag 4,49",
		proper: false
	},
	{
		x: .14049,
		y: -.94074,
		z: -.30867,
		mag: 5.27,
		bv: 1.344,
		name: "HIP 116957",
		detail: "mag 5,27",
		proper: false
	},
	{
		x: .13222,
		y: -.93755,
		z: -.32175,
		mag: 4.49,
		bv: -.032,
		name: "ω2 Acquario",
		detail: "Acquario · mag 4,49",
		proper: false
	},
	{
		x: -.07833,
		y: -.75545,
		z: -.65051,
		mag: 5.09,
		bv: 1.692,
		name: "77 Pegaso",
		detail: "Pegaso · mag 5,09",
		proper: false
	},
	{
		x: -.23181,
		y: -.51874,
		z: -.8229,
		mag: 4.93,
		bv: .935,
		name: "78 Pegaso",
		detail: "Pegaso · mag 4,93",
		proper: false
	},
	{
		x: .15688,
		y: -.95198,
		z: -.2629,
		mag: 5.24,
		bv: -.084,
		name: "i1 Acquario",
		detail: "Acquario · mag 5,24",
		proper: false
	},
	{
		x: .15352,
		y: -.95503,
		z: -.25369,
		mag: 5.28,
		bv: .299,
		name: "i2 Acquario",
		detail: "Acquario · mag 5,28",
		proper: false
	},
	{
		x: -.35159,
		y: -.25839,
		z: -.89979,
		mag: 4.97,
		bv: 1.086,
		name: "ψ Andromeda",
		detail: "Andromeda · mag 4,97",
		proper: false
	},
	{
		x: -.03237,
		y: -.82507,
		z: -.5641,
		mag: 4.95,
		bv: 2.508,
		name: "19 Pesci",
		detail: "Pesci · mag 4,95",
		proper: false
	},
	{
		x: -.41606,
		y: -.05543,
		z: -.90764,
		mag: 4.88,
		bv: 1.122,
		name: "τ Cassiopeia",
		detail: "Cassiopeia · mag 4,88",
		proper: false
	},
	{
		x: .36784,
		y: -.89766,
		z: .24269,
		mag: 5.18,
		bv: -.164,
		name: "σ Fenice",
		detail: "Fenice · mag 5,18",
		proper: false
	},
	{
		x: -.4513,
		y: .09886,
		z: -.88688,
		mag: 5.05,
		bv: .007,
		name: "HIP 117371",
		detail: "mag 5,05",
		proper: false
	},
	{
		x: .21699,
		y: -.97083,
		z: -.102,
		mag: 4.59,
		bv: .001,
		name: "δ Scultore",
		detail: "Scultore · mag 4,59",
		proper: false
	},
	{
		x: .13608,
		y: -.96096,
		z: -.24091,
		mag: 5.17,
		bv: -.122,
		name: "i3 Acquario",
		detail: "Acquario · mag 5,17",
		proper: false
	},
	{
		x: .47571,
		y: -.57102,
		z: .66905,
		mag: 5.1,
		bv: .934,
		name: "γ1 Ottante",
		detail: "Ottante · mag 5,10",
		proper: false
	},
	{
		x: -.18326,
		y: -.66387,
		z: -.72505,
		mag: 5.06,
		bv: 1.587,
		name: "φ Pegaso",
		detail: "Pegaso · mag 5,06",
		proper: false
	},
	{
		x: -.11812,
		y: -.75858,
		z: -.64079,
		mag: 5.3,
		bv: .186,
		name: "82 Pegaso",
		detail: "Pegaso · mag 5,30",
		proper: false
	},
	{
		x: -.42604,
		y: -.07889,
		z: -.90126,
		mag: 4.51,
		bv: 1.19,
		name: "ρ Cassiopeia",
		detail: "Cassiopeia · mag 4,51",
		proper: false
	},
	{
		x: .41616,
		y: -.78624,
		z: .45677,
		mag: 5,
		bv: .06,
		name: "η Tucano",
		detail: "Tucano · mag 5,00",
		proper: false
	},
	{
		x: -.2475,
		y: -.58995,
		z: -.76857,
		mag: 4.63,
		bv: 1.584,
		name: "ψ Pegaso",
		detail: "Pegaso · mag 4,63",
		proper: false
	},
	{
		x: -.01971,
		y: -.89312,
		z: -.44939,
		mag: 4.88,
		bv: .93,
		name: "27 Pesci",
		detail: "Pesci · mag 4,88",
		proper: false
	},
	{
		x: .35436,
		y: -.88762,
		z: .2942,
		mag: 5.13,
		bv: 1.121,
		name: "π Fenice",
		detail: "Fenice · mag 5,13",
		proper: false
	},
	{
		x: -.42871,
		y: -.11085,
		z: -.89662,
		mag: 4.88,
		bv: -.071,
		name: "σ Cassiopeia",
		detail: "Cassiopeia · mag 4,88",
		proper: false
	},
	{
		x: -.1097,
		y: -.80636,
		z: -.58116,
		mag: 4.03,
		bv: .419,
		name: "ω Pesci",
		detail: "Pesci · mag 4,03",
		proper: false
	},
	{
		x: .41798,
		y: -.7739,
		z: .47578,
		mag: 4.49,
		bv: -.075,
		name: "ε Tucano",
		detail: "Tucano · mag 4,49",
		proper: false
	}
];
var CHART_GALAXIES = [
	{
		x: -.48127,
		y: -.36772,
		z: -.79572,
		name: "Andromeda",
		detail: "Galassia di Andromeda · spirale · mag 3,40",
		mag: 3.4,
		span: 3.33,
		kind: "spirale"
	},
	{
		x: -.47971,
		y: -.3742,
		z: -.79363,
		name: "M32",
		detail: "Galassia M32 · ellittica · mag 8,20",
		mag: 8.2,
		span: .42,
		kind: "ellittica"
	},
	{
		x: -.58928,
		y: -.5201,
		z: -.61826,
		name: "Triangolo",
		detail: "Galassia del Triangolo · spirale · mag 5,70",
		mag: 5.7,
		span: 1.24,
		kind: "spirale"
	},
	{
		x: .0987,
		y: .94086,
		z: .32409,
		name: "M49",
		detail: "Galassia M49 · ellittica · mag 8,40",
		mag: 8.4,
		span: .42,
		kind: "ellittica"
	},
	{
		x: -.09369,
		y: .93077,
		z: -.3534,
		name: "Vortice",
		detail: "Galassia Vortice · spirale · mag 8,10",
		mag: 8.1,
		span: .42,
		kind: "spirale"
	},
	{
		x: .09391,
		y: .96294,
		z: .25284,
		name: "M58",
		detail: "Galassia M58 · spirale · mag 9,80",
		mag: 9.8,
		span: .42,
		kind: "spirale"
	},
	{
		x: .11104,
		y: .96299,
		z: .24559,
		name: "M59",
		detail: "Galassia M59 · ellittica · mag 9,80",
		mag: 9.8,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .1181,
		y: .96277,
		z: .24317,
		name: "M60",
		detail: "Galassia M60 · ellittica · mag 8,80",
		mag: 8.8,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .09986,
		y: .91544,
		z: .38987,
		name: "M61",
		detail: "Galassia M61 · spirale · mag 9,70",
		mag: 9.7,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.07473,
		y: .96262,
		z: -.26034,
		name: "Girasole",
		detail: "Galassia Girasole · spirale · mag 8,60",
		mag: 8.6,
		span: .85,
		kind: "spirale"
	},
	{
		x: .06943,
		y: .99527,
		z: .06795,
		name: "Occhio Nero",
		detail: "Galassia Occhio Nero · spirale · mag 8,50",
		mag: 8.5,
		span: .72,
		kind: "spirale"
	},
	{
		x: -.20868,
		y: .9004,
		z: .38176,
		name: "M65",
		detail: "M65, tripletto del Leone · spirale · mag 9,30",
		mag: 9.3,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.20309,
		y: .90186,
		z: .38131,
		name: "M66",
		detail: "M66, tripletto del Leone · spirale · mag 9,00",
		mag: 9,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.52399,
		y: -.71576,
		z: -.46166,
		name: "M74",
		detail: "Galassia Fantasma · spirale · mag 9,20",
		mag: 9.2,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.61076,
		y: -.78729,
		z: -.0846,
		name: "M77",
		detail: "Galassia M77 · spirale · mag 8,80",
		mag: 8.8,
		span: .42,
		kind: "spirale"
	},
	{
		x: -.59631,
		y: .65477,
		z: -.46443,
		name: "Bode",
		detail: "Galassia di Bode · spirale · mag 6,80",
		mag: 6.8,
		span: .47,
		kind: "spirale"
	},
	{
		x: -.59383,
		y: .65024,
		z: -.47387,
		name: "Sigaro",
		detail: "Galassia Sigaro · irregolare · mag 8,40",
		mag: 8.4,
		span: .42,
		kind: "irregolare"
	},
	{
		x: .59542,
		y: .52951,
		z: .60423,
		name: "Girandola del Sud",
		detail: "Galassia Girandola del Sud · spirale · mag 7,60",
		mag: 7.6,
		span: .42,
		kind: "spirale"
	},
	{
		x: .03836,
		y: .96353,
		z: .26484,
		name: "M84",
		detail: "Galassia M84 · ellittica · mag 9,30",
		mag: 9.3,
		span: .55,
		kind: "ellittica"
	},
	{
		x: -.00739,
		y: .98239,
		z: .18671,
		name: "M85",
		detail: "Galassia M85 · ellittica · mag 9,20",
		mag: 9.2,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .0418,
		y: .96429,
		z: .26155,
		name: "M86",
		detail: "Galassia M86 · ellittica · mag 9,20",
		mag: 9.2,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .06351,
		y: .96362,
		z: .25962,
		name: "Vergine A",
		detail: "Galassia Vergine A · ellittica · mag 8,60",
		mag: 8.6,
		span: .85,
		kind: "ellittica"
	},
	{
		x: .0499,
		y: .97239,
		z: .22796,
		name: "M88",
		detail: "Galassia M88 · spirale · mag 9,50",
		mag: 9.5,
		span: .42,
		kind: "spirale"
	},
	{
		x: .08005,
		y: .96576,
		z: .24679,
		name: "M89",
		detail: "Galassia M89 · ellittica · mag 9,80",
		mag: 9.8,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .07851,
		y: .96869,
		z: .23553,
		name: "M90",
		detail: "Galassia M90 · spirale · mag 9,50",
		mag: 9.5,
		span: .42,
		kind: "spirale"
	},
	{
		x: .06145,
		y: .9737,
		z: .21939,
		name: "M91",
		detail: "Galassia M91 · spirale · mag 10,20",
		mag: 10.2,
		span: .42,
		kind: "spirale"
	},
	{
		x: -.1329,
		y: .97034,
		z: -.20193,
		name: "M94",
		detail: "Galassia M94 · spirale · mag 8,10",
		mag: 8.1,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.32576,
		y: .83267,
		z: .44782,
		name: "M95",
		detail: "Galassia M95 · spirale · mag 9,70",
		mag: 9.7,
		span: .42,
		kind: "spirale"
	},
	{
		x: -.31652,
		y: .83883,
		z: .44292,
		name: "M96",
		detail: "Galassia M96 · spirale · mag 9,20",
		mag: 9.2,
		span: .42,
		kind: "spirale"
	},
	{
		x: -.02068,
		y: .96574,
		z: .25869,
		name: "M98",
		detail: "Galassia M98 · spirale · mag 10,10",
		mag: 10.1,
		span: .42,
		kind: "spirale"
	},
	{
		x: .00182,
		y: .96676,
		z: .25566,
		name: "M99",
		detail: "Galassia M99 · spirale · mag 9,80",
		mag: 9.8,
		span: .55,
		kind: "spirale"
	},
	{
		x: .00449,
		y: .97395,
		z: .22674,
		name: "M100",
		detail: "Galassia M100 · spirale · mag 9,40",
		mag: 9.4,
		span: .62,
		kind: "spirale"
	},
	{
		x: -.10502,
		y: .86402,
		z: -.49238,
		name: "Girandola",
		detail: "Galassia Girandola · spirale · mag 7,70",
		mag: 7.7,
		span: 1.05,
		kind: "spirale"
	},
	{
		x: -.02157,
		y: .79326,
		z: -.6085,
		name: "Fuso",
		detail: "Galassia Fuso · spirale · mag 9,90",
		mag: 9.9,
		span: .7,
		kind: "spirale"
	},
	{
		x: .29893,
		y: .77886,
		z: .55139,
		name: "Sombrero",
		detail: "Galassia Sombrero · spirale · mag 8,30",
		mag: 8.3,
		span: 1.05,
		kind: "spirale"
	},
	{
		x: -.31862,
		y: .84459,
		z: .43029,
		name: "M105",
		detail: "Galassia M105 · ellittica · mag 9,30",
		mag: 9.3,
		span: .42,
		kind: "ellittica"
	},
	{
		x: -.26944,
		y: .93263,
		z: -.24002,
		name: "M106",
		detail: "Galassia M106 · spirale · mag 8,30",
		mag: 8.3,
		span: .42,
		kind: "spirale"
	},
	{
		x: -.47275,
		y: .83152,
		z: -.29168,
		name: "M108",
		detail: "Galassia M108 · spirale · mag 10,00",
		mag: 10,
		span: .55,
		kind: "spirale"
	},
	{
		x: -.36107,
		y: .88225,
		z: -.30208,
		name: "M109",
		detail: "Galassia M109 · spirale · mag 9,80",
		mag: 9.8,
		span: .55,
		kind: "spirale"
	},
	{
		x: -.4765,
		y: -.36067,
		z: -.80179,
		name: "M110",
		detail: "Galassia M110 · ellittica · mag 8,00",
		mag: 8,
		span: .42,
		kind: "ellittica"
	},
	{
		x: .15253,
		y: -.543,
		z: .82576,
		name: "Grande Nube",
		detail: "Grande Nube di Magellano · irregolare · mag 0,40",
		mag: .4,
		span: 6.6,
		kind: "irregolare"
	},
	{
		x: .3876,
		y: -.69876,
		z: .60125,
		name: "Piccola Nube",
		detail: "Piccola Nube di Magellano · irregolare · mag 2,20",
		mag: 2.2,
		span: 3.4,
		kind: "irregolare"
	},
	{
		x: -.00456,
		y: -.99937,
		z: -.03523,
		name: "Scultore",
		detail: "Galassia dello Scultore · spirale · mag 7,10",
		mag: 7.1,
		span: .49,
		kind: "spirale"
	},
	{
		x: .6001,
		y: .33245,
		z: .72757,
		name: "Centauro A",
		detail: "Galassia Centauro A · ellittica · mag 6,80",
		mag: 6.8,
		span: .46,
		kind: "ellittica"
	}
];
var CHART_FIGURES = [
	{
		x: -.37847,
		y: -.32543,
		z: -.86652,
		name: "Andromeda"
	},
	{
		x: .03754,
		y: .30807,
		z: .95062,
		name: "Macchina Pneumatica"
	},
	{
		x: .68115,
		y: -.27146,
		z: .67996,
		name: "Uccello del Paradiso"
	},
	{
		x: .32464,
		y: -.7628,
		z: -.55924,
		name: "Acquario"
	},
	{
		x: .72068,
		y: -.06134,
		z: -.69055,
		name: "Aquila"
	},
	{
		x: .88524,
		y: -.16881,
		z: .43341,
		name: "Altare"
	},
	{
		x: -.76095,
		y: -.54992,
		z: -.3443,
		name: "Ariete"
	},
	{
		x: -.98849,
		y: .02713,
		z: -.14883,
		name: "Auriga"
	},
	{
		x: .24759,
		y: .88879,
		z: -.38568,
		name: "Boote"
	},
	{
		x: -.31019,
		y: -.62938,
		z: .7125,
		name: "Bulino dello Incisore"
	},
	{
		x: -.73036,
		y: .34476,
		z: -.58968,
		name: "Giraffa"
	},
	{
		x: -.80055,
		y: .54703,
		z: .24469,
		name: "Cancro"
	},
	{
		x: -.15791,
		y: .9618,
		z: -.22361,
		name: "Cani da Caccia"
	},
	{
		x: -.55979,
		y: -.2746,
		z: .78181,
		name: "Cane Maggiore"
	},
	{
		x: -.84413,
		y: .14227,
		z: .51692,
		name: "Cane Minore"
	},
	{
		x: .71791,
		y: -.60981,
		z: -.33576,
		name: "Capricorno"
	},
	{
		x: .25125,
		y: -.1784,
		z: .95134,
		name: "Carena"
	},
	{
		x: -.37794,
		y: -.10125,
		z: -.92028,
		name: "Cassiopeia"
	},
	{
		x: .57398,
		y: .3841,
		z: .7232,
		name: "Centauro"
	},
	{
		x: -.36516,
		y: .19484,
		z: -.91033,
		name: "Cefeo"
	},
	{
		x: -.42106,
		y: -.89351,
		z: -.15603,
		name: "Balena"
	},
	{
		x: .50773,
		y: -.31146,
		z: .80324,
		name: "Camaleonte"
	},
	{
		x: .67014,
		y: -.10365,
		z: .73496,
		name: "Compasso"
	},
	{
		x: -.37555,
		y: -.49332,
		z: .7846,
		name: "Colomba"
	},
	{
		x: .03822,
		y: .99846,
		z: .04023,
		name: "Chioma di Berenice"
	},
	{
		x: .95673,
		y: -.28287,
		z: .06814,
		name: "Corona Australe"
	},
	{
		x: .39949,
		y: .76932,
		z: -.49855,
		name: "Corona Boreale"
	},
	{
		x: .29901,
		y: .68073,
		z: .66873,
		name: "Corvo"
	},
	{
		x: .10081,
		y: .69906,
		z: .70792,
		name: "Coppa"
	},
	{
		x: .54798,
		y: .01519,
		z: .83636,
		name: "Croce del Sud"
	},
	{
		x: .0533,
		y: .11079,
		z: -.99241,
		name: "Cigno"
	},
	{
		x: .59015,
		y: -.3423,
		z: -.73113,
		name: "Delfino"
	},
	{
		x: .05694,
		y: -.58306,
		z: .81043,
		name: "Pesce Dorato"
	},
	{
		x: -.05148,
		y: .50659,
		z: -.86065,
		name: "Dragone"
	},
	{
		x: .40949,
		y: -.43868,
		z: -.79992,
		name: "Cavallo"
	},
	{
		x: -.54129,
		y: -.79271,
		z: .28039,
		name: "Fiume Eridano"
	},
	{
		x: -.31055,
		y: -.9102,
		z: .27402,
		name: "Fornace"
	},
	{
		x: -.94297,
		y: .2443,
		z: .2261,
		name: "Gemelli"
	},
	{
		x: .48366,
		y: -.87434,
		z: .04006,
		name: "Gru"
	},
	{
		x: .42126,
		y: .61898,
		z: -.66288,
		name: "Ercole"
	},
	{
		x: -.0579,
		y: -.79027,
		z: .61002,
		name: "Orologio"
	},
	{
		x: -.17961,
		y: .43407,
		z: .8828,
		name: "Idra femmina"
	},
	{
		x: .2933,
		y: -.6893,
		z: .66245,
		name: "Idra maschio"
	},
	{
		x: .70668,
		y: -.66594,
		z: .23904,
		name: "Indiano"
	},
	{
		x: -.20537,
		y: -.18756,
		z: -.96054,
		name: "Lucertola"
	},
	{
		x: -.37809,
		y: .83189,
		z: .40622,
		name: "Leone"
	},
	{
		x: -.48748,
		y: .85657,
		z: .16927,
		name: "Leone Minore"
	},
	{
		x: -.58816,
		y: -.39275,
		z: .70698,
		name: "Lepre"
	},
	{
		x: .85323,
		y: .42924,
		z: .29623,
		name: "Bilancia"
	},
	{
		x: .84508,
		y: .32908,
		z: .42136,
		name: "Lupo"
	},
	{
		x: -.83493,
		y: .53076,
		z: -.14555,
		name: "Lince"
	},
	{
		x: .49775,
		y: .27987,
		z: -.82092,
		name: "Lira"
	},
	{
		x: .32487,
		y: -.50282,
		z: .80102,
		name: "Mensa"
	},
	{
		x: .73956,
		y: -.66817,
		z: -.08124,
		name: "Microscopio"
	},
	{
		x: -.71544,
		y: .13471,
		z: .68557,
		name: "Unicorno"
	},
	{
		x: .54429,
		y: -.17603,
		z: .82022,
		name: "Mosca"
	},
	{
		x: .87574,
		y: -.00815,
		z: .48272,
		name: "Squadra"
	},
	{
		x: .60307,
		y: -.4946,
		z: .62584,
		name: "Ottante"
	},
	{
		x: .83925,
		y: .3975,
		z: -.37102,
		name: "Ofiucho"
	},
	{
		x: -.96082,
		y: -.17774,
		z: .2127,
		name: "Orione"
	},
	{
		x: .78087,
		y: -.50468,
		z: .36816,
		name: "Pavone"
	},
	{
		x: .18048,
		y: -.54515,
		z: -.81868,
		name: "Pegaso"
	},
	{
		x: -.92212,
		y: -.05507,
		z: -.38296,
		name: "Perseo"
	},
	{
		x: .11007,
		y: -.96056,
		z: .25535,
		name: "Fenice"
	},
	{
		x: -.1906,
		y: -.54833,
		z: .81425,
		name: "Pittore"
	},
	{
		x: -.45682,
		y: -.73588,
		z: -.4998,
		name: "Pesci"
	},
	{
		x: .53862,
		y: -.81858,
		z: -.19954,
		name: "Pesce Australe"
	},
	{
		x: -.20474,
		y: -.24046,
		z: .94882,
		name: "Poppa"
	},
	{
		x: -.36264,
		y: .21045,
		z: .90786,
		name: "Bussola"
	},
	{
		x: .05913,
		y: -.71621,
		z: .69537,
		name: "Reticolo"
	},
	{
		x: .6073,
		y: .02105,
		z: -.7942,
		name: "Freccia"
	},
	{
		x: .92214,
		y: -.37855,
		z: -.07976,
		name: "Sagittario"
	},
	{
		x: .95594,
		y: .11002,
		z: .27217,
		name: "Scorpione"
	},
	{
		x: .19833,
		y: -.98013,
		z: .00235,
		name: "Scultore"
	},
	{
		x: .92768,
		y: -.08566,
		z: -.36341,
		name: "Scudo"
	},
	{
		x: .68142,
		y: .72248,
		z: -.11702,
		name: "Serpente"
	},
	{
		x: .82233,
		y: .06045,
		z: -.5658,
		name: "Serpente"
	},
	{
		x: -.22247,
		y: .66484,
		z: .71309,
		name: "Sestante"
	},
	{
		x: -.83893,
		y: -.52939,
		z: -.12625,
		name: "Toro"
	},
	{
		x: .89622,
		y: -.32004,
		z: .30719,
		name: "Telescopio"
	},
	{
		x: -.63983,
		y: -.4605,
		z: -.61527,
		name: "Triangolo"
	},
	{
		x: .74697,
		y: -.18961,
		z: .63724,
		name: "Triangolo Australe"
	},
	{
		x: .49095,
		y: -.76383,
		z: .41897,
		name: "Tucano"
	},
	{
		x: -.47536,
		y: .86536,
		z: -.15872,
		name: "Orsa Maggiore"
	},
	{
		x: -.19711,
		y: .70034,
		z: -.68605,
		name: "Orsa Minore"
	},
	{
		x: .01556,
		y: .07261,
		z: .99724,
		name: "Vela"
	},
	{
		x: .3762,
		y: .85006,
		z: .36861,
		name: "Vergine"
	},
	{
		x: .23004,
		y: -.39921,
		z: .88753,
		name: "Pesce volante"
	},
	{
		x: .54054,
		y: -.01842,
		z: -.84111,
		name: "Volpetta"
	}
];
var CHART_LINES = [
	[
		[
			-.69292,
			-.31828,
			-.64696
		],
		[
			-.53706,
			-.45559,
			-.70993
		],
		[
			-.42263,
			-.52901,
			-.73589
		],
		[
			-.31108,
			-.54235,
			-.78044
		]
	],
	[
		[
			-.43908,
			-.6352,
			-.6354
		],
		[
			-.41112,
			-.62381,
			-.66471
		],
		[
			-.41156,
			-.55159,
			-.72551
		],
		[
			-.42263,
			-.52901,
			-.73589
		],
		[
			-.43005,
			-.48564,
			-.76106
		],
		[
			-.31082,
			-.30265,
			-.901
		],
		[
			-.20317,
			-.27725,
			-.93907
		]
	],
	[
		[
			-.31082,
			-.30265,
			-.901
		],
		[
			-.32389,
			-.2876,
			-.90132
		],
		[
			-.32953,
			-.25099,
			-.91017
		]
	],
	[
		[
			-.53706,
			-.45559,
			-.70993
		],
		[
			-.51038,
			-.41248,
			-.75457
		],
		[
			-.5003,
			-.37124,
			-.78223
		],
		[
			-.56788,
			-.26755,
			-.77841
		],
		[
			-.63547,
			-.23395,
			-.73583
		]
	],
	[[
		-.32389,
		-.2876,
		-.90132
	], [
		-.35159,
		-.25839,
		-.89979
	]],
	[
		[
			-.11306,
			.1901,
			.97523
		],
		[
			-.00199,
			.38086,
			.92463
		],
		[
			.14437,
			.34715,
			.92663
		]
	],
	[
		[
			.59377,
			-.2999,
			.74666
		],
		[
			.63426,
			-.34028,
			.69421
		],
		[
			.65456,
			-.34301,
			.67372
		],
		[
			.63502,
			-.35038,
			.68846
		]
	],
	[
		[
			.68467,
			-.50159,
			-.5288
		],
		[
			.66774,
			-.51477,
			-.53771
		],
		[
			.52792,
			-.614,
			-.58678
		],
		[
			.37199,
			-.66999,
			-.64245
		],
		[
			.32512,
			-.71742,
			-.61611
		],
		[
			.28794,
			-.72334,
			-.62759
		],
		[
			.26512,
			-.73859,
			-.61984
		],
		[
			.26267,
			-.82642,
			-.49803
		],
		[
			.18144,
			-.87919,
			-.44057
		],
		[
			.30302,
			-.91377,
			-.27056
		]
	],
	[[
		.52792,
		-.614,
		-.58678
	], [
		.47231,
		-.75892,
		-.44828
	]],
	[[
		.37199,
		-.66999,
		-.64245
	], [
		.3931,
		-.7504,
		-.53139
	]],
	[[
		.28794,
		-.72334,
		-.62759
	], [
		.28883,
		-.70389,
		-.64894
	]],
	[
		[
			.24737,
			-.93099,
			-.26845
		],
		[
			.18144,
			-.87919,
			-.44057
		],
		[
			.16206,
			-.94797,
			-.27403
		]
	],
	[
		[
			.65463,
			-.12328,
			-.74583
		],
		[
			.66433,
			-.15487,
			-.73122
		],
		[
			.68013,
			-.19244,
			-.70739
		],
		[
			.71108,
			-.31042,
			-.63088
		],
		[
			.73588,
			-.22619,
			-.63821
		],
		[
			.7659,
			-.10681,
			-.63403
		],
		[
			.68276,
			.05661,
			-.72845
		],
		[
			.66433,
			-.15487,
			-.73122
		],
		[
			.7659,
			-.10681,
			-.63403
		],
		[
			.85976,
			-.09608,
			-.50159
		]
	],
	[
		[
			.8856,
			-.199,
			.41966
		],
		[
			.84951,
			-.24794,
			.46567
		],
		[
			.85181,
			-.15926,
			.49905
		],
		[
			.88032,
			-.14271,
			.4524
		],
		[
			.9014,
			-.11471,
			.41752
		],
		[
			.93294,
			-.15345,
			.3257
		],
		[
			.89226,
			-.19103,
			.40913
		]
	],
	[
		[
			-.78209,
			-.47879,
			-.39888
		],
		[
			-.65755,
			-.59068,
			-.46767
		],
		[
			-.60848,
			-.63852,
			-.47122
		],
		[
			-.59731,
			-.6587,
			-.45753
		]
	],
	[
		[
			-.96007,
			.18068,
			-.2136
		],
		[
			-.95115,
			.07961,
			-.29828
		],
		[
			-.96749,
			.00474,
			-.25285
		],
		[
			-.98085,
			-.1073,
			-.16255
		],
		[
			-.99725,
			-.06532,
			-.03492
		],
		[
			-.98827,
			.11718,
			-.09797
		],
		[
			-.96007,
			.18068,
			-.2136
		],
		[
			-.90278,
			.25355,
			-.34742
		],
		[
			-.95115,
			.07961,
			-.29828
		],
		[
			-.95502,
			.02057,
			-.29584
		],
		[
			-.96598,
			-.00748,
			-.25849
		]
	],
	[
		[
			.27745,
			.96073,
			.00515
		],
		[
			.29062,
			.95646,
			-.0269
		],
		[
			.34432,
			.93427,
			-.09259
		],
		[
			.25621,
			.9259,
			-.27761
		],
		[
			.15614,
			.91476,
			-.3726
		],
		[
			.19016,
			.86636,
			-.4618
		],
		[
			.31424,
			.85201,
			-.41872
		],
		[
			.32928,
			.90471,
			-.27033
		],
		[
			.34432,
			.93427,
			-.09259
		],
		[
			.47449,
			.87559,
			-.09055
		]
	],
	[
		[
			.15614,
			.91476,
			-.3726
		],
		[
			.02254,
			.90383,
			-.4273
		],
		[
			-.05466,
			.87392,
			-.48299
		],
		[
			-.03377,
			.86298,
			-.50411
		],
		[
			.02254,
			.90383,
			-.4273
		]
	],
	[
		[
			-.2448,
			-.68478,
			.68641
		],
		[
			-.30278,
			-.66256,
			.68508
		],
		[
			-.3788,
			-.65489,
			.65394
		],
		[
			-.42029,
			-.59096,
			.68857
		]
	],
	[
		[
			-.8962,
			.11633,
			-.42813
		],
		[
			-.84529,
			.19729,
			-.49656
		],
		[
			-.78549,
			.24264,
			-.56932
		],
		[
			-.70382,
			.22962,
			-.67225
		],
		[
			-.75739,
			.15213,
			-.63499
		],
		[
			-.7816,
			.05021,
			-.62176
		]
	],
	[
		[
			-.78549,
			.24264,
			-.56932
		],
		[
			-.75848,
			.38206,
			-.52796
		],
		[
			-.65828,
			.4518,
			-.60211
		]
	],
	[
		[
			-.67011,
			.55219,
			.49603
		],
		[
			-.74117,
			.54316,
			.39452
		],
		[
			-.75881,
			.55523,
			.34047
		],
		[
			-.77282,
			.59536,
			.21978
		]
	],
	[[
		-.74117,
		.54316,
		.39452
	], [
		-.76058,
		.3915,
		.51792
	]],
	[[
		-.09238,
		.98086,
		-.1714
	], [
		-.18278,
		.96733,
		-.17569
	]],
	[
		[
			-.6725,
			-.24646,
			.69785
		],
		[
			-.6709,
			-.15454,
			.72527
		],
		[
			-.5598,
			-.14311,
			.81618
		],
		[
			-.51828,
			-.14378,
			.84304
		],
		[
			-.50429,
			-.17835,
			.84491
		],
		[
			-.49276,
			-.19645,
			.8477
		],
		[
			-.50638,
			-.33271,
			.79554
		]
	],
	[[
		-.457,
		-.11295,
		.88227
	], [
		-.51828,
		-.14378,
		.84304
	]],
	[
		[
			-.6709,
			-.15454,
			.72527
		],
		[
			-.65549,
			-.11628,
			.7462
		],
		[
			-.66389,
			-.07682,
			.74387
		],
		[
			-.71697,
			-.08465,
			.69194
		],
		[
			-.65549,
			-.11628,
			.7462
		]
	],
	[[
		-.81055,
		.22528,
		.54061
	], [
		-.85217,
		.20242,
		.48253
	]],
	[
		[
			.77799,
			-.41794,
			-.4691
		],
		[
			.78247,
			-.44417,
			-.43641
		],
		[
			.77865,
			-.48893,
			-.39326
		],
		[
			.76499,
			-.58071,
			-.27849
		],
		[
			.7557,
			-.60437,
			-.25232
		],
		[
			.64549,
			-.68948,
			-.32858
		],
		[
			.55023,
			-.7195,
			-.42374
		],
		[
			.57533,
			-.70306,
			-.41797
		],
		[
			.63063,
			-.65301,
			-.41939
		],
		[
			.67971,
			-.60583,
			-.41348
		],
		[
			.77799,
			-.41794,
			-.4691
		]
	],
	[
		[
			-.29038,
			-.35081,
			.89029
		],
		[
			-.13813,
			-.42723,
			.89353
		],
		[
			.26662,
			-.24881,
			.93113
		],
		[
			.33816,
			-.19388,
			.9209
		],
		[
			.33419,
			-.08545,
			.93862
		],
		[
			.29493,
			-.05502,
			.95393
		],
		[
			.26634,
			-.06636,
			.96159
		],
		[
			.146,
			-.12206,
			.98173
		],
		[
			.07293,
			-.21816,
			.97318
		],
		[
			-.05663,
			-.21337,
			.97533
		],
		[
			-.12416,
			-.13374,
			.98321
		],
		[
			.03597,
			-.12829,
			.99108
		],
		[
			.146,
			-.12206,
			.98173
		]
	],
	[
		[
			.33419,
			-.08545,
			.93862
		],
		[
			.36012,
			-.03459,
			.93226
		],
		[
			.36074,
			-.02532,
			.93232
		],
		[
			.35813,
			.00421,
			.93366
		],
		[
			.34206,
			.02254,
			.93941
		],
		[
			.31202,
			.01046,
			.95002
		],
		[
			.29493,
			-.05502,
			.95393
		]
	],
	[
		[
			-.64045,
			.02873,
			-.76746
		],
		[
			-.60395,
			-.04104,
			-.79596
		],
		[
			-.55267,
			-.03749,
			-.83256
		],
		[
			-.5181,
			-.10978,
			-.84824
		],
		[
			-.46143,
			-.05718,
			-.88533
		]
	],
	[
		[
			.33937,
			.10603,
			.93466
		],
		[
			.42941,
			.20054,
			.88056
		],
		[
			.47492,
			.21588,
			.85314
		],
		[
			.5037,
			.23988,
			.82991
		],
		[
			.63789,
			.15163,
			.75505
		],
		[
			.67429,
			.24518,
			.69657
		],
		[
			.65916,
			.3275,
			.67694
		],
		[
			.65811,
			.34015,
			.67171
		],
		[
			.69377,
			.40795,
			.59351
		],
		[
			.76279,
			.28685,
			.57954
		],
		[
			.80984,
			.25467,
			.52849
		]
	],
	[[
		.65811,
		.34015,
		.67171
	], [
		.57173,
		.43511,
		.69557
	]],
	[
		[
			.71601,
			-.01189,
			.69799
		],
		[
			.63789,
			.15163,
			.75505
		],
		[
			.66594,
			.02184,
			.74568
		]
	],
	[
		[
			.47492,
			.21588,
			.85314
		],
		[
			.44374,
			.17413,
			.87908
		],
		[
			.38976,
			.03276,
			.92033
		]
	],
	[
		[
			-.13112,
			.23844,
			-.96227
		],
		[
			-.13408,
			.20182,
			-.9702
		],
		[
			-.18835,
			.1594,
			-.96908
		],
		[
			-.18335,
			.07524,
			-.98016
		],
		[
			-.22267,
			.00688,
			-.97487
		],
		[
			-.22592,
			.02906,
			-.97371
		],
		[
			-.26208,
			.00926,
			-.965
		],
		[
			-.35734,
			.10756,
			-.92776
		],
		[
			-.46748,
			.26413,
			-.84362
		],
		[
			-.29237,
			.24236,
			-.92508
		],
		[
			-.18835,
			.1594,
			-.96908
		]
	],
	[[
		-.29237,
		.24236,
		-.92508
	], [
		-.35734,
		.10756,
		-.92776
	]],
	[
		[
			-.63887,
			-.75907,
			-.12512
		],
		[
			-.6363,
			-.75092,
			-.17672
		],
		[
			-.63492,
			-.73598,
			-.23497
		],
		[
			-.69238,
			-.69081,
			-.20832
		],
		[
			-.7227,
			-.67448,
			-.1509
		],
		[
			-.69496,
			-.71442,
			-.08144
		],
		[
			-.63887,
			-.75907,
			-.12512
		],
		[
			-.6048,
			-.79028,
			-.09834
		],
		[
			-.51811,
			-.84789,
			-.11244
		],
		[
			-.36254,
			-.9275,
			-.09118
		],
		[
			-.28296,
			-.95852,
			-.03424
		],
		[
			-.0589,
			-.9868,
			-.15084
		],
		[
			-.05289,
			-.94084,
			-.3347
		],
		[
			-.21954,
			-.95413,
			-.20357
		],
		[
			-.29175,
			-.93694,
			-.19242
		],
		[
			-.36254,
			-.9275,
			-.09118
		]
	],
	[
		[
			.31569,
			-.36944,
			.87399
		],
		[
			.42221,
			-.30125,
			.85498
		],
		[
			.43944,
			-.3241,
			.83776
		],
		[
			.49854,
			-.28473,
			.81877
		],
		[
			.48456,
			-.26934,
			.83226
		],
		[
			.42221,
			-.30125,
			.85498
		]
	],
	[
		[
			.77579,
			-.01953,
			.63069
		],
		[
			.69661,
			-.08005,
			.71297
		],
		[
			.77937,
			-.03425,
			.62562
		]
	],
	[
		[
			-.45448,
			-.34602,
			.8208
		],
		[
			-.42709,
			-.45488,
			.78146
		],
		[
			-.45358,
			-.48263,
			.74922
		],
		[
			-.43057,
			-.51317,
			.74247
		]
	],
	[[
		-.42709,
		-.45488,
		.78146
	], [
		-.31202,
		-.45757,
		.83263
	]],
	[
		[
			.15459,
			.98322,
			.09685
		],
		[
			.05808,
			.99679,
			-.05512
		],
		[
			-.09094,
			.99533,
			.03246
		]
	],
	[
		[
			.95464,
			-.29766,
			.00762
		],
		[
			.947,
			-.32121,
			-.00263
		],
		[
			.94207,
			-.33533,
			.00754
		],
		[
			.93817,
			-.34484,
			.03049
		],
		[
			.93682,
			-.34601,
			.05135
		],
		[
			.93697,
			-.33931,
			.08341
		],
		[
			.94357,
			-.30827,
			.12105
		],
		[
			.9588,
			-.25551,
			.12419
		]
	],
	[
		[
			.37374,
			.81628,
			-.44046
		],
		[
			.39521,
			.82528,
			-.40339
		],
		[
			.44009,
			.80667,
			-.39446
		],
		[
			.46016,
			.78719,
			-.41059
		],
		[
			.4749,
			.7702,
			-.42574
		],
		[
			.47675,
			.75222,
			-.45484
		],
		[
			.44114,
			.74844,
			-.4952
		]
	],
	[
		[
			.28133,
			.60342,
			.74615
		],
		[
			.2723,
			.63284,
			.72482
		],
		[
			.25542,
			.70093,
			.66592
		],
		[
			.29852,
			.71987,
			.62664
		],
		[
			.36175,
			.63348,
			.68398
		],
		[
			.2723,
			.63284,
			.72482
		]
	],
	[
		[
			.04875,
			.75312,
			.65607
		],
		[
			.01247,
			.72616,
			.68741
		],
		[
			.0266,
			.67568,
			.73671
		],
		[
			-.0132,
			.60349,
			.79726
		],
		[
			.0686,
			.56688,
			.82094
		],
		[
			.07543,
			.63435,
			.76935
		],
		[
			.07163,
			.64966,
			.75684
		],
		[
			.14922,
			.66568,
			.73117
		],
		[
			.1806,
			.69121,
			.69973
		]
	],
	[[
		.0266,
		.67568,
		.73671
	], [
		.07163,
		.64966,
		.75684
	]],
	[[
		.53592,
		.05547,
		.84245
	], [
		.47196,
		.06612,
		.87914
	]],
	[[
		.5019,
		-.00633,
		.8649
	], [
		.50011,
		.09845,
		.86034
	]],
	[
		[
			.22375,
			-.21563,
			-.9505
		],
		[
			.24154,
			-.09959,
			-.96527
		],
		[
			.20526,
			.03258,
			-.97816
		],
		[
			.19266,
			.17782,
			-.96502
		],
		[
			.10724,
			.26637,
			-.95789
		],
		[
			.09285,
			.30658,
			-.94731
		]
	],
	[
		[
			.09952,
			.03485,
			-.99442
		],
		[
			.20526,
			.03258,
			-.97816
		],
		[
			.32475,
			.05869,
			-.94398
		],
		[
			.46629,
			.0797,
			-.88103
		]
	],
	[
		[
			.54394,
			-.28557,
			-.78904
		],
		[
			.49766,
			-.26977,
			-.82436
		],
		[
			.4778,
			-.26422,
			-.83779
		],
		[
			.45745,
			-.28529,
			-.84223
		],
		[
			.47731,
			-.28493,
			-.83126
		],
		[
			.49766,
			-.26977,
			-.82436
		]
	],
	[
		[
			-.12526,
			-.70445,
			.69862
		],
		[
			-.08057,
			-.66151,
			.74559
		],
		[
			.02544,
			-.54133,
			.84042
		],
		[
			.08145,
			-.52059,
			.84991
		],
		[
			.03562,
			-.50633,
			.8616
		],
		[
			.02544,
			-.54133,
			.84042
		],
		[
			-.05545,
			-.59785,
			.79969
		],
		[
			-.08057,
			-.66151,
			.74559
		]
	],
	[
		[
			.0728,
			.50346,
			-.86095
		],
		[
			.16571,
			.48812,
			-.8569
		],
		[
			.15116,
			.54917,
			-.82193
		],
		[
			.10178,
			.54642,
			-.83131
		],
		[
			.0728,
			.50346,
			-.86095
		],
		[
			-.13854,
			.39064,
			-.91006
		],
		[
			-.18164,
			.47002,
			-.86377
		],
		[
			-.08572,
			.57415,
			-.81425
		],
		[
			-.03406,
			.65541,
			-.7545
		],
		[
			-.00236,
			.70196,
			-.71221
		],
		[
			-.04577,
			.75043,
			-.65936
		],
		[
			-.22083,
			.77669,
			-.5899
		],
		[
			-.39135,
			.73444,
			-.55447
		],
		[
			-.47184,
			.72181,
			-.50632
		]
	],
	[[
		-.18164,
		.47002,
		-.86377
	], [
		-.20536,
		.47035,
		-.85825
	]],
	[[
		-.13854,
		.39064,
		-.91006
	], [
		-.2012,
		.35558,
		-.91273
	]],
	[
		[
			.48566,
			-.48043,
			-.73029
		],
		[
			.44398,
			-.43296,
			-.78449
		],
		[
			.45494,
			-.41887,
			-.78586
		]
	],
	[
		[
			-.81701,
			-.4276,
			.38686
		],
		[
			-.81639,
			-.48994,
			.30572
		],
		[
			-.80573,
			-.52065,
			.28235
		],
		[
			-.73963,
			-.62103,
			.25936
		],
		[
			-.64587,
			-.70057,
			.3034
		],
		[
			-.64061,
			-.72498,
			.25304
		],
		[
			-.66038,
			-.71929,
			.21569
		],
		[
			-.64307,
			-.74374,
			.18251
		],
		[
			-.56469,
			-.82226,
			.0709
		],
		[
			-.48099,
			-.87094,
			.10055
		],
		[
			-.43117,
			-.88722,
			.16408
		],
		[
			-.41301,
			-.8686,
			.27377
		],
		[
			-.47382,
			-.82899,
			.2971
		],
		[
			-.50423,
			-.79637,
			.334
		],
		[
			-.50752,
			-.76967,
			.38734
		],
		[
			-.47261,
			-.66008,
			.58389
		],
		[
			-.40924,
			-.6975,
			.58822
		],
		[
			-.40548,
			-.7129,
			.57216
		],
		[
			-.33166,
			-.78152,
			.52842
		],
		[
			-.25266,
			-.804,
			.53828
		],
		[
			-.18403,
			-.82979,
			.52687
		],
		[
			-.18426,
			-.87238,
			.45277
		],
		[
			-.15461,
			-.89929,
			.40911
		],
		[
			-.02337,
			-.88491,
			.46518
		],
		[
			.04548,
			-.87308,
			.48546
		],
		[
			.08653,
			-.88834,
			.45096
		],
		[
			.18435,
			-.85529,
			.48425
		]
	],
	[
		[
			-.36557,
			-.85744,
			.36215
		],
		[
			-.27102,
			-.89891,
			.34426
		],
		[
			-.19792,
			-.96019,
			.19715
		]
	],
	[
		[
			-.98713,
			.04394,
			.15376
		],
		[
			-.98302,
			.0727,
			.1685
		],
		[
			-.97229,
			.16727,
			.16333
		],
		[
			-.94771,
			.29569,
			.12004
		],
		[
			-.91624,
			.38235,
			.11966
		],
		[
			-.89689,
			.39725,
			.19439
		],
		[
			-.9107,
			.35937,
			.20366
		],
		[
			-.92462,
			.27371,
			.26487
		],
		[
			-.94178,
			.20626,
			.26555
		],
		[
			-.95456,
			.07763,
			.28772
		],
		[
			-.93232,
			.07849,
			.35303
		]
	],
	[[
		-.92462,
		.27371,
		.26487
	], [
		-.90932,
		.22882,
		.34754
	]],
	[
		[
			.4879,
			-.84017,
			.23679
		],
		[
			.51248,
			-.83414,
			.20389
		],
		[
			.51543,
			-.84762,
			.12597
		],
		[
			.54004,
			-.83923,
			.06364
		],
		[
			.59987,
			-.79307,
			.10579
		],
		[
			.51543,
			-.84762,
			.12597
		]
	],
	[
		[
			.54063,
			-.83919,
			.05899
		],
		[
			.57107,
			-.82079,
			.01345
		],
		[
			.59193,
			-.80566,
			-.0229
		],
		[
			.61935,
			-.78231,
			-.06626
		]
	],
	[
		[
			.61345,
			.66,
			-.43368
		],
		[
			.5934,
			.64563,
			-.48066
		],
		[
			.46266,
			.64665,
			-.60646
		],
		[
			.35155,
			.65479,
			-.66908
		],
		[
			.28821,
			.67815,
			-.67606
		],
		[
			.21266,
			.70756,
			-.6739
		],
		[
			.2233,
			.73263,
			-.64296
		],
		[
			.24232,
			.7696,
			-.59076
		]
	],
	[[
		.46266,
		.64665,
		-.60646
	], [
		.48744,
		.59026,
		-.64343
	]],
	[[
		.35155,
		.65479,
		-.66908
	], [
		.40457,
		.56413,
		-.71978
	]],
	[
		[
			.40301,
			.44494,
			-.79976
		],
		[
			.40223,
			.54039,
			-.73904
		],
		[
			.40457,
			.56413,
			-.71978
		],
		[
			.48744,
			.59026,
			-.64343
		],
		[
			.58389,
			.52135,
			-.6223
		],
		[
			.54965,
			.4325,
			-.71473
		],
		[
			.52612,
			.40299,
			-.74887
		],
		[
			.53086,
			.36793,
			-.76342
		]
	],
	[[
		.71973,
		.46667,
		-.51402
	], [
		.5934,
		.64563,
		-.48066
	]],
	[
		[
			-.27072,
			-.72434,
			.63407
		],
		[
			-.01091,
			-.85103,
			.52501
		],
		[
			.02145,
			-.84639,
			.53213
		],
		[
			.04307,
			-.83012,
			.55591
		],
		[
			.08254,
			-.76981,
			.63291
		],
		[
			.14945,
			-.74068,
			.65503
		]
	],
	[
		[
			-.66593,
			.47751,
			.57316
		],
		[
			-.65723,
			.47898,
			.58192
		],
		[
			-.65285,
			.44339,
			.61416
		],
		[
			-.6642,
			.42758,
			.6132
		],
		[
			-.68487,
			.44122,
			.57989
		],
		[
			-.66593,
			.47751,
			.57316
		],
		[
			-.63882,
			.503,
			.58215
		],
		[
			-.55566,
			.53773,
			.6341
		],
		[
			-.44676,
			.58751,
			.67471
		],
		[
			-.41731,
			.4855,
			.76821
		],
		[
			-.28013,
			.49158,
			.82455
		],
		[
			-.2409,
			.56635,
			.78817
		],
		[
			-.14474,
			.55413,
			.81975
		],
		[
			-.06837,
			.6096,
			.78975
		],
		[
			.21447,
			.47141,
			.85544
		],
		[
			.29301,
			.4603,
			.83801
		],
		[
			.50895,
			.6329,
			.58345
		],
		[
			.66788,
			.54833,
			.50326
		],
		[
			.78447,
			.46895,
			.40582
		]
	],
	[
		[
			.43828,
			-.63987,
			.63125
		],
		[
			.25894,
			-.61288,
			.74654
		],
		[
			.22641,
			-.7171,
			.65917
		],
		[
			.25009,
			-.72377,
			.64312
		],
		[
			.26949,
			-.74728,
			.60741
		],
		[
			.19681,
			-.80655,
			.55745
		]
	],
	[
		[
			.78975,
			-.60472,
			.10304
		],
		[
			.76514,
			-.61789,
			.18101
		],
		[
			.72286,
			-.62732,
			.28974
		],
		[
			.62365,
			-.74458,
			.23805
		],
		[
			.69824,
			-.68607,
			.20437
		],
		[
			.78975,
			-.60472,
			.10304
		]
	],
	[
		[
			-.1946,
			-.07509,
			-.978
		],
		[
			-.19396,
			-.1149,
			-.97426
		],
		[
			-.16595,
			-.15041,
			-.9746
		],
		[
			-.13398,
			-.15407,
			-.97893
		],
		[
			-.12506,
			-.21887,
			-.96771
		],
		[
			-.16216,
			-.21771,
			-.96245
		],
		[
			-.16595,
			-.15041,
			-.9746
		],
		[
			-.17072,
			-.11686,
			-.97836
		],
		[
			-.1946,
			-.07509,
			-.978
		]
	],
	[
		[
			-.12506,
			-.21887,
			-.96771
		],
		[
			-.04681,
			-.23774,
			-.9702
		],
		[
			-.03237,
			-.26877,
			-.96266
		]
	],
	[
		[
			-.4528,
			.75396,
			.47594
		],
		[
			-.488,
			.77439,
			.4027
		],
		[
			-.46475,
			.81566,
			.34454
		],
		[
			-.28197,
			.91933,
			.27447
		],
		[
			-.10902,
			.94438,
			.31027
		],
		[
			-.24387,
			.90322,
			.35315
		],
		[
			-.4528,
			.75396,
			.47594
		]
	],
	[
		[
			-.46475,
			.81566,
			.34454
		],
		[
			-.49614,
			.8187,
			.28908
		],
		[
			-.584,
			.7688,
			.26056
		],
		[
			-.5948,
			.74553,
			.30067
		]
	],
	[
		[
			-.57614,
			.81168,
			.09612
		],
		[
			-.517,
			.84908,
			.10853
		],
		[
			-.43581,
			.89675,
			.07692
		],
		[
			-.52265,
			.8506,
			.05758
		],
		[
			-.57614,
			.81168,
			.09612
		],
		[
			-.66921,
			.73768,
			.08939
		]
	],
	[
		[
			-.7175,
			-.28632,
			.63499
		],
		[
			-.72918,
			-.31683,
			.60656
		],
		[
			-.72225,
			-.35554,
			.59325
		],
		[
			-.68376,
			-.42485,
			.59328
		],
		[
			-.69682,
			-.48338,
			.52989
		],
		[
			-.61275,
			-.5407,
			.57635
		],
		[
			-.6445,
			-.45712,
			.61292
		],
		[
			-.62408,
			-.41109,
			.66448
		],
		[
			-.645,
			-.37814,
			.66407
		]
	],
	[
		[
			-.73607,
			-.46253,
			.49424
		],
		[
			-.69682,
			-.48338,
			.52989
		],
		[
			-.73633,
			-.44205,
			.51226
		]
	],
	[
		[
			.80938,
			.47896,
			.33986
		],
		[
			.74192,
			.61578,
			.26527
		],
		[
			.76707,
			.63249,
			.1075
		],
		[
			.83697,
			.53281,
			.12486
		],
		[
			.88157,
			.37372,
			.2884
		],
		[
			.88628,
			.34936,
			.30406
		]
	],
	[[
		.74192,
		.61578,
		.26527
	], [
		.83697,
		.53281,
		.12486
	]],
	[
		[
			.90734,
			.27258,
			.32006
		],
		[
			.88928,
			.28725,
			.3559
		],
		[
			.85741,
			.29893,
			.41893
		],
		[
			.85195,
			.23881,
			.466
		],
		[
			.80711,
			.24038,
			.53925
		],
		[
			.76825,
			.19828,
			.60867
		],
		[
			.80349,
			.08688,
			.58895
		],
		[
			.82907,
			.13997,
			.54135
		],
		[
			.8453,
			.17919,
			.50334
		],
		[
			.87339,
			.20606,
			.44129
		],
		[
			.915,
			.19096,
			.35539
		],
		[
			.92619,
			.19634,
			.32191
		]
	],
	[[
		.85195,
		.23881,
		.466
	], [
		.87339,
		.20606,
		.44129
	]],
	[
		[
			-.86042,
			.32749,
			-.39041
		],
		[
			-.84825,
			.40034,
			-.34669
		],
		[
			-.88331,
			.43437,
			-.17628
		],
		[
			-.82489,
			.56405,
			-.03761
		],
		[
			-.75262,
			.65845,
			-.00258
		],
		[
			-.70857,
			.70055,
			.08462
		],
		[
			-.69922,
			.70367,
			.12625
		]
	],
	[
		[
			.37512,
			.29875,
			-.87751
		],
		[
			.34367,
			.31184,
			-.8858
		],
		[
			.3621,
			.32948,
			-.87197
		],
		[
			.37512,
			.29875,
			-.87751
		],
		[
			.37799,
			.26425,
			-.8873
		],
		[
			.43785,
			.22174,
			-.87127
		],
		[
			.43614,
			.25516,
			-.86295
		],
		[
			.37512,
			.29875,
			-.87751
		]
	],
	[
		[
			.23798,
			-.48178,
			.84336
		],
		[
			.26386,
			-.51458,
			.81583
		],
		[
			.24526,
			-.55267,
			.7965
		],
		[
			.18285,
			-.56219,
			.80654
		]
	],
	[
		[
			.77352,
			-.61928,
			-.13473
		],
		[
			.77566,
			-.62968,
			.04297
		],
		[
			.70756,
			-.7065,
			-.01466
		],
		[
			.70262,
			-.69222,
			-.16482
		],
		[
			.74458,
			-.64735,
			-.16293
		],
		[
			.77352,
			-.61928,
			-.13473
		]
	],
	[
		[
			-.67522,
			.11359,
			.72882
		],
		[
			-.68417,
			.26986,
			.67756
		],
		[
			-.80973,
			.07529,
			.58195
		],
		[
			-.79395,
			-.14287,
			.59096
		],
		[
			-.80997,
			-.19045,
			.55469
		]
	],
	[
		[
			-.80973,
			.07529,
			.58195
		],
		[
			-.8627,
			.00531,
			.50569
		],
		[
			-.89904,
			-.07033,
			.43219
		],
		[
			-.91135,
			-.01311,
			.41143
		],
		[
			-.92026,
			.03836,
			.38942
		]
	],
	[
		[
			.44445,
			-.08167,
			.89207
		],
		[
			.49411,
			-.09234,
			.86448
		],
		[
			.52165,
			-.10972,
			.84608
		],
		[
			.53431,
			-.09135,
			.84034
		],
		[
			.54988,
			-.15118,
			.82145
		],
		[
			.515,
			-.16187,
			.84177
		],
		[
			.52165,
			-.10972,
			.84608
		]
	],
	[
		[
			.9033,
			.09017,
			.41944
		],
		[
			.91341,
			.01711,
			.40668
		],
		[
			.89338,
			18e-5,
			.4493
		],
		[
			.88182,
			.04398,
			.46953
		],
		[
			.9033,
			.09017,
			.41944
		]
	],
	[
		[
			.54335,
			-.36344,
			.75676
		],
		[
			.51207,
			-.56474,
			.64719
		],
		[
			.57067,
			-.57627,
			.58502
		],
		[
			.54335,
			-.36344,
			.75676
		]
	],
	[
		[
			.94312,
			.12143,
			-.3095
		],
		[
			.85129,
			.26488,
			-.45294
		],
		[
			.83381,
			.29556,
			-.46626
		],
		[
			.74807,
			.38378,
			-.54139
		],
		[
			.76582,
			.49249,
			-.41348
		],
		[
			.81183,
			.52762,
			-.2501
		],
		[
			.83617,
			.53283,
			-.13009
		],
		[
			.84929,
			.51219,
			-.12793
		],
		[
			.91095,
			.40015,
			-.10027
		],
		[
			.96359,
			.24205,
			-.11356
		]
	],
	[
		[
			.76582,
			.49249,
			-.41348
		],
		[
			.91095,
			.40015,
			-.10027
		],
		[
			.93306,
			.35971,
			-.00204
		],
		[
			.93498,
			.35309,
			.03375
		],
		[
			.9365,
			.34501,
			.0627
		],
		[
			.94695,
			.30381,
			.10478
		]
	],
	[
		[
			.83381,
			.29556,
			-.46626
		],
		[
			.96359,
			.24205,
			-.11356
		],
		[
			.99344,
			.11411,
			-.00805
		],
		[
			.99746,
			.04977,
			.05097
		]
	],
	[
		[
			-.9657,
			-.04748,
			.25527
		],
		[
			-.988,
			-.04767,
			.14692
		],
		[
			-.98562,
			-.01502,
			.16833
		],
		[
			-.96156,
			-.03603,
			.27223
		],
		[
			-.94156,
			-.10995,
			.3184
		],
		[
			-.92948,
			-.15572,
			.3344
		],
		[
			-.91983,
			-.27485,
			.27995
		],
		[
			-.92572,
			-.34617,
			.15236
		]
	],
	[
		[
			-.87085,
			-.40704,
			.27555
		],
		[
			-.8731,
			-.41568,
			.25477
		],
		[
			-.8938,
			-.39911,
			.20455
		],
		[
			-.90174,
			-.39177,
			.18268
		],
		[
			-.91469,
			-.37183,
			.15837
		],
		[
			-.92572,
			-.34617,
			.15236
		],
		[
			-.94442,
			-.30988,
			.10971
		],
		[
			-.95874,
			-.26463,
			.10386
		],
		[
			-.96269,
			-.24556,
			.11371
		]
	],
	[
		[
			-.78923,
			-.42649,
			.44183
		],
		[
			-.85044,
			-.34843,
			.39414
		],
		[
			-.87108,
			-.30469,
			.38521
		],
		[
			-.91983,
			-.27485,
			.27995
		],
		[
			-.94461,
			-.20783,
			.25402
		],
		[
			-.92948,
			-.15572,
			.3344
		],
		[
			-.85806,
			-.28544,
			.42692
		],
		[
			-.78142,
			-.31725,
			.53734
		]
	],
	[
		[
			-.85806,
			-.28544,
			.42692
		],
		[
			-.86408,
			-.2964,
			.40683
		],
		[
			-.87108,
			-.30469,
			.38521
		]
	],
	[
		[
			.77225,
			-.57633,
			.26735
		],
		[
			.69312,
			-.58791,
			.41708
		],
		[
			.72936,
			-.53607,
			.42505
		],
		[
			.81915,
			-.40472,
			.40643
		],
		[
			.83724,
			-.34855,
			.42136
		],
		[
			.81988,
			-.33528,
			.4641
		],
		[
			.81119,
			-.30487,
			.49903
		],
		[
			.72867,
			-.42185,
			.53952
		],
		[
			.67633,
			-.51357,
			.52804
		],
		[
			.69312,
			-.58791,
			.41708
		],
		[
			.64796,
			-.64669,
			.40243
		]
	],
	[
		[
			.03208,
			-.31805,
			-.94753
		],
		[
			-.03948,
			-.42188,
			-.90579
		],
		[
			-.08757,
			-.4855,
			-.86984
		],
		[
			-.31108,
			-.54235,
			-.78044
		],
		[
			-.22825,
			-.72759,
			-.64693
		],
		[
			.02287,
			-.64787,
			-.76141
		],
		[
			.11552,
			-.64811,
			-.75274
		],
		[
			.14658,
			-.6516,
			-.74427
		],
		[
			.29963,
			-.62547,
			-.72042
		],
		[
			.35278,
			-.52187,
			-.77666
		]
	],
	[
		[
			.02287,
			-.64787,
			-.76141
		],
		[
			-.08757,
			-.4855,
			-.86984
		],
		[
			-.01021,
			-.50841,
			-.86105
		],
		[
			.0111,
			-.51528,
			-.85695
		],
		[
			.12279,
			-.41086,
			-.90339
		],
		[
			.18798,
			-.35292,
			-.91658
		]
	],
	[
		[
			-.89706,
			-.3047,
			-.32007
		],
		[
			-.91247,
			-.2872,
			-.2914
		],
		[
			-.91736,
			-.22676,
			-.32716
		],
		[
			-.90863,
			-.17517,
			-.37909
		],
		[
			-.88485,
			-.16733,
			-.43479
		],
		[
			-.86409,
			-.10051,
			-.4932
		],
		[
			-.85387,
			-.10609,
			-.50956
		],
		[
			-.83018,
			-.10214,
			-.54806
		],
		[
			-.78648,
			-.07562,
			-.61297
		],
		[
			-.75521,
			-.05541,
			-.65314
		],
		[
			-.77351,
			-.10003,
			-.62584
		],
		[
			-.80835,
			-.12845,
			-.57451
		],
		[
			-.82318,
			-.19821,
			-.53207
		],
		[
			-.82814,
			-.25714,
			-.49806
		],
		[
			-.83552,
			-.27117,
			-.47789
		],
		[
			-.82477,
			-.29252,
			-.48393
		],
		[
			-.81172,
			-.29105,
			-.50636
		],
		[
			-.81215,
			-.26963,
			-.51741
		],
		[
			-.82814,
			-.25714,
			-.49806
		]
	],
	[
		[
			-.87963,
			-.02307,
			-.4751
		],
		[
			-.89787,
			-.03184,
			-.4391
		],
		[
			-.89487,
			-.05312,
			-.44316
		],
		[
			-.86409,
			-.10051,
			-.4932
		]
	],
	[
		[
			-.80835,
			-.12845,
			-.57451
		],
		[
			-.76803,
			-.16694,
			-.61827
		],
		[
			-.64746,
			-.19646,
			-.73634
		]
	],
	[
		[
			.21143,
			-.96116,
			.17741
		],
		[
			.14588,
			-.94087,
			.30575
		],
		[
			.05595,
			-.95195,
			.30108
		],
		[
			.11057,
			-.91877,
			.37899
		],
		[
			.22125,
			-.8806,
			.41905
		],
		[
			.14588,
			-.94087,
			.30575
		],
		[
			.28327,
			-.93725,
			.20328
		],
		[
			.21143,
			-.96116,
			.17741
		]
	],
	[
		[
			.03056,
			-.40832,
			.91233
		],
		[
			-.08528,
			-.51038,
			.85571
		],
		[
			-.17359,
			-.50922,
			.84295
		]
	],
	[
		[
			-.49983,
			-.61578,
			-.60908
		],
		[
			-.52022,
			-.53845,
			-.6629
		],
		[
			-.53136,
			-.57632,
			-.62089
		],
		[
			-.49983,
			-.61578,
			-.60908
		],
		[
			-.47249,
			-.66385,
			-.57971
		],
		[
			-.50417,
			-.72452,
			-.46999
		],
		[
			-.50827,
			-.78184,
			-.3611
		],
		[
			-.51349,
			-.82511,
			-.23562
		],
		[
			-.48974,
			-.83082,
			-.26438
		],
		[
			-.46798,
			-.82131,
			-.32625
		],
		[
			-.43515,
			-.82346,
			-.36409
		],
		[
			-.38916,
			-.81794,
			-.42372
		],
		[
			-.35337,
			-.81786,
			-.45413
		],
		[
			-.29957,
			-.82195,
			-.48442
		],
		[
			-.1097,
			-.80636,
			-.58116
		],
		[
			-.02589,
			-.79826,
			-.60176
		],
		[
			.01316,
			-.7758,
			-.63084
		],
		[
			.05053,
			-.77423,
			-.63089
		],
		[
			.0805,
			-.78831,
			-.61
		],
		[
			.06066,
			-.81998,
			-.56917
		],
		[
			-.00139,
			-.83493,
			-.55035
		],
		[
			-.03237,
			-.82507,
			-.5641
		],
		[
			-.02589,
			-.79826,
			-.60176
		]
	],
	[[
		.0805,
		-.78831,
		-.61
	], [
		.12593,
		-.76162,
		-.63567
	]],
	[
		[
			.43799,
			-.8744,
			-.20878
		],
		[
			.39722,
			-.90564,
			-.14842
		],
		[
			.4189,
			-.90228,
			-.10204
		],
		[
			.43139,
			-.8966,
			-.10006
		],
		[
			.49382,
			-.86001,
			-.12857
		],
		[
			.56562,
			-.81368,
			-.13417
		],
		[
			.63244,
			-.761,
			-.14456
		],
		[
			.61791,
			-.76537,
			-.17999
		],
		[
			.56562,
			-.81368,
			-.13417
		],
		[
			.43799,
			-.8744,
			-.20878
		]
	],
	[
		[
			-.29038,
			-.35081,
			.89029
		],
		[
			-.35128,
			-.19558,
			.91562
		],
		[
			-.45352,
			-.06743,
			.88869
		],
		[
			-.46957,
			-.04252,
			.88187
		],
		[
			-.47782,
			.01,
			.8784
		],
		[
			-.48956,
			.05361,
			.87032
		],
		[
			-.45035,
			.07675,
			.88955
		],
		[
			-.24151,
			-.08204,
			.96692
		],
		[
			-.12416,
			-.13374,
			.98321
		]
	],
	[
		[
			-.47782,
			.01,
			.8784
		],
		[
			-.46567,
			-.00362,
			.88495
		],
		[
			-.43194,
			-.04435,
			.90081
		],
		[
			-.45352,
			-.06743,
			.88869
		]
	],
	[
		[
			-.24151,
			-.08204,
			.96692
		],
		[
			-.23736,
			.06805,
			.96903
		],
		[
			-.25762,
			.10053,
			.961
		],
		[
			-.31101,
			.17923,
			.93335
		]
	],
	[
		[
			.05621,
			-.66462,
			.74506
		],
		[
			.00263,
			-.6764,
			.73653
		],
		[
			.0506,
			-.69183,
			.72028
		],
		[
			.11635,
			-.68882,
			.71554
		],
		[
			.05621,
			-.66462,
			.74506
		]
	],
	[
		[
			.58095,
			-.03734,
			-.81308
		],
		[
			.56158,
			-.05902,
			-.82531
		],
		[
			.52822,
			-.09076,
			-.84424
		]
	],
	[[
		.58581,
		-.0454,
		-.80918
	], [
		.56158,
		-.05902,
		-.82531
	]],
	[
		[
			.98386,
			-.1681,
			.06133
		],
		[
			.98529,
			-.17034,
			.01386
		],
		[
			.99085,
			-.12455,
			-.05194
		],
		[
			.98466,
			-.11358,
			-.13244
		],
		[
			.98441,
			-.02793,
			-.17364
		]
	],
	[
		[
			.90839,
			-.40558,
			.10168
		],
		[
			.91916,
			-.39217,
			.03674
		],
		[
			.95745,
			-.26477,
			-.11485
		],
		[
			.97282,
			-.18694,
			-.13666
		],
		[
			.98466,
			-.11358,
			-.13244
		]
	],
	[
		[
			.87312,
			-.48652,
			.03096
		],
		[
			.875,
			-.47667,
			-.08459
		],
		[
			.87567,
			-.42329,
			-.23244
		],
		[
			.90605,
			-.35031,
			-.2374
		],
		[
			.92291,
			-.30828,
			-.23063
		],
		[
			.93779,
			-.27905,
			-.20657
		],
		[
			.96299,
			-.21534,
			-.16212
		],
		[
			.97282,
			-.18694,
			-.13666
		],
		[
			.99085,
			-.12455,
			-.05194
		],
		[
			.99674,
			-.07912,
			-.01598
		],
		[
			.98529,
			-.17034,
			.01386
		],
		[
			.95745,
			-.26477,
			-.11485
		],
		[
			.95147,
			-.26503,
			-.15639
		],
		[
			.96299,
			-.21534,
			-.16212
		],
		[
			.94423,
			-.21666,
			-.24796
		],
		[
			.93604,
			-.22994,
			-.26639
		],
		[
			.91904,
			-.24411,
			-.30949
		],
		[
			.90923,
			-.25119,
			-.33197
		],
		[
			.90154,
			-.23811,
			-.3613
		]
	],
	[
		[
			.94423,
			-.21666,
			-.24796
		],
		[
			.9506,
			-.18699,
			-.24779
		],
		[
			.95833,
			-.18608,
			-.21673
		],
		[
			.96299,
			-.21534,
			-.16212
		]
	],
	[
		[
			.91505,
			.3458,
			.20764
		],
		[
			.91018,
			.38253,
			.1589
		],
		[
			.90991,
			.40034,
			.10861
		]
	],
	[
		[
			.91018,
			.38253,
			.1589
		],
		[
			.94534,
			.29235,
			.14444
		],
		[
			.95611,
			.2599,
			.13527
		],
		[
			.96449,
			.22169,
			.14355
		],
		[
			.97457,
			.11426,
			.19277
		],
		[
			.96852,
			.06826,
			.23941
		],
		[
			.95671,
			.01372,
			.29073
		],
		[
			.96222,
			-.0402,
			.2693
		],
		[
			.96962,
			-.10411,
			.22138
		],
		[
			.98096,
			-.10672,
			.16225
		],
		[
			.98446,
			-.08227,
			.15515
		],
		[
			.9889,
			-.03864,
			.14348
		]
	],
	[
		[
			-.00162,
			-.99886,
			.04763
		],
		[
			.21699,
			-.97083,
			-.102
		],
		[
			.34626,
			-.93512,
			-.07518
		],
		[
			.33481,
			-.94184,
			.02906
		]
	],
	[
		[
			.9153,
			-.00306,
			-.40276
		],
		[
			.88094,
			-.02124,
			-.47276
		],
		[
			.91411,
			-.03661,
			-.4038
		],
		[
			.95345,
			-.03122,
			-.29994
		],
		[
			.9153,
			-.00306,
			-.40276
		]
	],
	[
		[
			.603,
			.74165,
			-.29384
		],
		[
			.54339,
			.77109,
			-.33189
		],
		[
			.57518,
			.74701,
			-.33339
		],
		[
			.61825,
			.71564,
			-.325
		],
		[
			.603,
			.74165,
			-.29384
		],
		[
			.6355,
			.74534,
			-.2015
		],
		[
			.69642,
			.69565,
			-.17626
		],
		[
			.72752,
			.66469,
			-.16999
		],
		[
			.83617,
			.53283,
			-.13009
		]
	],
	[
		[
			.96359,
			.24205,
			-.11356
		],
		[
			.9717,
			.15065,
			-.18195
		],
		[
			.94312,
			.12143,
			-.3095
		],
		[
			.93259,
			.11961,
			-.34055
		],
		[
			.88793,
			.09345,
			-.45038
		],
		[
			.79625,
			.01491,
			-.60478
		]
	],
	[
		[
			-.35867,
			.66998,
			.64998
		],
		[
			-.34225,
			.56164,
			.75327
		],
		[
			-.26199,
			.70203,
			.66221
		],
		[
			-.2771,
			.72136,
			.63471
		]
	],
	[
		[
			-.99027,
			-.09821,
			.09861
		],
		[
			-.93807,
			-.34609,
			.01592
		],
		[
			-.9271,
			-.37478,
			.00562
		],
		[
			-.91473,
			-.40379,
			-.01463
		],
		[
			-.92657,
			-.37475,
			-.03211
		],
		[
			-.93932,
			-.34077,
			-.03943
		],
		[
			-.99725,
			-.06532,
			-.03492
		]
	],
	[
		[
			-.91473,
			-.40379,
			-.01463
		],
		[
			-.87107,
			-.49053,
			-.02476
		],
		[
			-.79169,
			-.60526,
			-.08299
		],
		[
			-.83532,
			-.5455,
			.06838
		]
	],
	[
		[
			-.79169,
			-.60526,
			-.08299
		],
		[
			-.78219,
			-.61781,
			-.08058
		],
		[
			-.74404,
			-.6648,
			.06673
		]
	],
	[
		[
			.95242,
			-.21976,
			.21121
		],
		[
			.94626,
			-.26193,
			.18968
		],
		[
			.92873,
			-.28708,
			.23463
		]
	],
	[
		[
			-.64064,
			-.52109,
			-.56396
		],
		[
			-.69868,
			-.42576,
			-.57496
		],
		[
			-.71621,
			-.4339,
			-.5466
		],
		[
			-.64064,
			-.52109,
			-.56396
		]
	],
	[
		[
			.75539,
			-.26318,
			.6001
		],
		[
			.77957,
			-.13093,
			.61247
		],
		[
			.70592,
			-.1659,
			.68859
		],
		[
			.75539,
			-.26318,
			.6001
		]
	],
	[
		[
			.58119,
			-.74271,
			.33256
		],
		[
			.46789,
			-.81733,
			.33622
		],
		[
			.35174,
			-.80923,
			.47055
		],
		[
			.38241,
			-.78719,
			.48383
		],
		[
			.41798,
			-.7739,
			.47578
		],
		[
			.56244,
			-.71772,
			.41054
		],
		[
			.58119,
			-.74271,
			.33256
		]
	],
	[
		[
			-.34417,
			.86089,
			-.37472
		],
		[
			-.5015,
			.77724,
			-.37999
		],
		[
			-.49491,
			.81719,
			-.29542
		],
		[
			-.37135,
			.87786,
			-.30244
		],
		[
			-.34417,
			.86089,
			-.37472
		],
		[
			-.25686,
			.87601,
			-.40821
		],
		[
			-.18681,
			.87947,
			-.43775
		],
		[
			-.07749,
			.90867,
			-.41026
		]
	],
	[
		[
			-.37135,
			.87786,
			-.30244
		],
		[
			-.35721,
			.91157,
			-.20359
		],
		[
			-.35081,
			.93409,
			.06646
		],
		[
			-.3421,
			.93512,
			.09232
		]
	],
	[
		[
			-.35721,
			.91157,
			-.20359
		],
		[
			-.43665,
			.89283,
			-.11046
		],
		[
			-.5536,
			.83254,
			-.02027
		]
	],
	[[
		-.43665,
		.89283,
		-.11046
	], [
		-.5709,
		.81998,
		-.04121
	]],
	[
		[
			-.5015,
			.77724,
			-.37999
		],
		[
			-.6503,
			.66579,
			-.36583
		],
		[
			-.74427,
			.57966,
			-.33174
		],
		[
			-.63082,
			.71414,
			-.30345
		],
		[
			-.49491,
			.81719,
			-.29542
		]
	],
	[
		[
			-.49491,
			.81719,
			-.29542
		],
		[
			-.63587,
			.73961,
			-.22059
		],
		[
			-.67666,
			.71508,
			-.17547
		],
		[
			-.7483,
			.6539,
			-.11167
		]
	],
	[[
		-.74123,
		.66436,
		-.09591
	], [
		-.67666,
		.71508,
		-.17547
	]],
	[
		[
			-.3133,
			.58294,
			-.74969
		],
		[
			-.26934,
			.57824,
			-.77013
		],
		[
			-.23961,
			.65391,
			-.71763
		],
		[
			-.29279,
			.64948,
			-.70175
		],
		[
			-.3133,
			.58294,
			-.74969
		],
		[
			-.36202,
			.51576,
			-.77649
		],
		[
			-.43096,
			.47313,
			-.76839
		],
		[
			-.49125,
			.44559,
			-.74841
		]
	],
	[
		[
			.03597,
			-.12829,
			.99108
		],
		[
			.10229,
			-.0617,
			.99284
		],
		[
			.1624,
			.00184,
			.98672
		],
		[
			.22289,
			.14906,
			.96338
		],
		[
			.07379,
			.20591,
			.97579
		],
		[
			-.0557,
			.13762,
			.98892
		],
		[
			-.0708,
			.04922,
			.99628
		],
		[
			-.12416,
			-.13374,
			.98321
		]
	],
	[
		[
			-.05411,
			.90012,
			.43228
		],
		[
			.00447,
			.87255,
			.48851
		],
		[
			.13606,
			.87621,
			.46232
		],
		[
			.22404,
			.87736,
			.42431
		],
		[
			.36004,
			.83893,
			.40813
		],
		[
			.45507,
			.77544,
			.43773
		],
		[
			.58161,
			.77786,
			.23805
		],
		[
			.6566,
			.73771,
			.15702
		]
	],
	[
		[
			.18972,
			.95949,
			.20831
		],
		[
			.23397,
			.9153,
			.32785
		],
		[
			.22404,
			.87736,
			.42431
		]
	],
	[
		[
			.36004,
			.83893,
			.40813
		],
		[
			.40597,
			.8694,
			.28167
		],
		[
			.47625,
			.86054,
			.18074
		],
		[
			.60421,
			.79527,
			.04988
		]
	],
	[
		[
			.21441,
			-.22504,
			.95047
		],
		[
			.17137,
			-.273,
			.94663
		],
		[
			.19101,
			-.31829,
			.92855
		],
		[
			.14569,
			-.38572,
			.91104
		],
		[
			.18294,
			-.40741,
			.89474
		],
		[
			.19101,
			-.31829,
			.92855
		],
		[
			.21441,
			-.22504,
			.95047
		]
	],
	[
		[
			.57557,
			.07688,
			-.81413
		],
		[
			.5143,
			.05935,
			-.85556
		],
		[
			.48048,
			-.03118,
			-.87645
		],
		[
			.41774,
			-.0234,
			-.90826
		],
		[
			.38803,
			-.07039,
			-.91896
		]
	]
];
var STAR_VERT = `
  attribute float aSize;
  attribute float aPhase;
  varying vec3 vColor;
  uniform float uTime;
  uniform float uPixelRatio;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.86 + 0.14 * sin(uTime * (0.45 + aPhase) + aPhase * 12.0);
    gl_PointSize = clamp(aSize * tw * uPixelRatio * (520.0 / max(12.0, -mv.z)), 0.7, 6.5);
    gl_Position = projectionMatrix * mv;
  }
`;
var STAR_FRAG = `
  uniform sampler2D uStar;
  varying vec3 vColor;
  out vec4 fragColor;
  void main() {
    vec4 tex = texture(uStar, gl_PointCoord);
    if (tex.a < 0.04) discard;
    fragColor = vec4(vColor * tex.rgb, tex.a);
  }
`;
var POOL = 48;
var STAR_R = 532;
var GALAXY_R = 518;
var LINE_R = 504;
function starSprite() {
	const canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	const glow = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
	glow.addColorStop(0, "rgba(255,255,255,1)");
	glow.addColorStop(.16, "rgba(255,255,255,0.95)");
	glow.addColorStop(.42, "rgba(255,255,255,0.22)");
	glow.addColorStop(1, "rgba(255,255,255,0)");
	ctx.fillStyle = glow;
	ctx.fillRect(0, 0, 64, 64);
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.needsUpdate = true;
	return texture;
}
function galaxySprite() {
	const canvas = document.createElement("canvas");
	canvas.width = 256;
	canvas.height = 256;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	const glow = ctx.createRadialGradient(128, 128, 8, 128, 128, 124);
	glow.addColorStop(0, "rgba(255,248,236,0.95)");
	glow.addColorStop(.18, "rgba(214,226,255,0.55)");
	glow.addColorStop(.45, "rgba(170,190,255,0.18)");
	glow.addColorStop(1, "rgba(140,160,255,0)");
	ctx.fillStyle = glow;
	ctx.fillRect(0, 0, 256, 256);
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.needsUpdate = true;
	return texture;
}
function labelTexture(name) {
	const canvas = document.createElement("canvas");
	const width = Math.max(220, Math.ceil(name.length * 34));
	canvas.width = width;
	canvas.height = 72;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	ctx.clearRect(0, 0, width, 72);
	ctx.font = "600 40px 'IBM Plex Sans', sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.lineWidth = 8;
	ctx.strokeStyle = "rgba(6,7,12,0.9)";
	ctx.strokeText(name, width / 2, 38);
	ctx.fillStyle = "#f6f1e4";
	ctx.fillText(name, width / 2, 38);
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.needsUpdate = true;
	return {
		texture,
		aspect: width / 72
	};
}
function bvColor(bv) {
	const t = Math.max(-.3, Math.min(1.8, bv));
	if (t < 0) return [
		.7,
		.82,
		1
	];
	if (t < .25) return [
		.84,
		.9,
		1
	];
	if (t < .55) return [
		1,
		.97,
		.92
	];
	if (t < .95) return [
		1,
		.86,
		.62
	];
	return [
		1,
		.66,
		.45
	];
}
function pointSize(mag) {
	return Math.max(.85, (5.5 - mag) ** 1.12 * .48);
}
function buildStars() {
	const count = CHART_STARS.length;
	const positions = new Float32Array(count * 3);
	const colors = new Float32Array(count * 3);
	const sizes = new Float32Array(count);
	const phases = new Float32Array(count);
	CHART_STARS.forEach((star, index) => {
		positions[index * 3] = star.x * STAR_R;
		positions[index * 3 + 1] = star.y * STAR_R;
		positions[index * 3 + 2] = star.z * STAR_R;
		const [r, g, b] = bvColor(star.bv);
		colors[index * 3] = r;
		colors[index * 3 + 1] = g;
		colors[index * 3 + 2] = b;
		sizes[index] = pointSize(star.mag);
		phases[index] = index % 97 / 97;
	});
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setAttribute("color", new BufferAttribute(colors, 3));
	geometry.setAttribute("aSize", new BufferAttribute(sizes, 1));
	geometry.setAttribute("aPhase", new BufferAttribute(phases, 1));
	return geometry;
}
var NAMED = [
	...CHART_GALAXIES.map((galaxy) => ({
		kind: "galassia",
		galaxy
	})),
	...CHART_FIGURES.map((figure) => ({
		kind: "costellazione",
		figure
	})),
	...CHART_STARS.map((star) => ({
		kind: "stella",
		star
	}))
];
function namedPoint(item, target) {
	if (item.kind === "galassia") target.set(item.galaxy.x, item.galaxy.y, item.galaxy.z);
	else if (item.kind === "costellazione") target.set(item.figure.x, item.figure.y, item.figure.z);
	else target.set(item.star.x, item.star.y, item.star.z);
	return target;
}
function namedPick(item) {
	if (item.kind === "galassia") return {
		kind: "galassia",
		name: item.galaxy.name,
		detail: item.galaxy.detail
	};
	if (item.kind === "costellazione") return {
		kind: "costellazione",
		name: item.figure.name,
		detail: "Costellazione · carta IAU"
	};
	return {
		kind: "stella",
		name: item.star.name,
		detail: item.star.detail
	};
}
function namedLabel(item) {
	if (item.kind === "galassia") return item.galaxy.name;
	if (item.kind === "costellazione") return item.figure.name;
	return item.star.name;
}
function namedRadius(item) {
	if (item.kind === "galassia") return GALAXY_R;
	if (item.kind === "costellazione") return STAR_R * .99;
	return STAR_R;
}
function galaxyTint(kind) {
	if (kind === "irregolare") return "#f0c2ae";
	if (kind === "ellittica") return "#f3e6cf";
	return "#c5d4ff";
}
function SkyField({ map }) {
	const group = (0, import_react.useRef)(null);
	const dpr = useThree((state) => state.gl.getPixelRatio());
	const camera = useThree((state) => state.camera);
	const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const sprite = (0, import_react.useMemo)(() => starSprite(), []);
	const glow = (0, import_react.useMemo)(() => galaxySprite(), []);
	const geometry = (0, import_react.useMemo)(() => buildStars(), []);
	const lines = (0, import_react.useMemo)(() => {
		const positions = [];
		for (const line of CHART_LINES) for (let index = 1; index < line.length; index++) {
			const from = line[index - 1];
			const to = line[index];
			positions.push(from[0] * LINE_R, from[1] * LINE_R, from[2] * LINE_R);
			positions.push(to[0] * LINE_R, to[1] * LINE_R, to[2] * LINE_R);
		}
		const lineGeometry = new BufferGeometry();
		lineGeometry.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
		return lineGeometry;
	}, []);
	const material = (0, import_react.useMemo)(() => new ShaderMaterial({
		transparent: true,
		depthWrite: false,
		blending: 2,
		vertexColors: true,
		glslVersion: GLSL3,
		toneMapped: false,
		uniforms: {
			uTime: { value: 0 },
			uPixelRatio: { value: dpr },
			uStar: { value: sprite }
		},
		vertexShader: STAR_VERT,
		fragmentShader: STAR_FRAG
	}), [dpr, sprite]);
	const labelCache = (0, import_react.useMemo)(() => /* @__PURE__ */ new Map(), []);
	const pool = (0, import_react.useRef)([]);
	const down = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const local = (0, import_react.useMemo)(() => new Vector3(), []);
	const world = (0, import_react.useMemo)(() => new Vector3(), []);
	const ndc = (0, import_react.useMemo)(() => new Vector3(), []);
	const hit = (0, import_react.useMemo)(() => new Vector3(), []);
	(0, import_react.useEffect)(() => () => {
		geometry.dispose();
		lines.dispose();
		material.dispose();
		sprite.dispose();
		glow.dispose();
		for (const entry of labelCache.values()) entry.texture.dispose();
		labelCache.clear();
	}, [
		geometry,
		glow,
		labelCache,
		lines,
		material,
		sprite
	]);
	useFrame((_, delta) => {
		if (!reduce) material.uniforms.uTime.value += Math.min(delta, .05);
		const root = group.current;
		if (!root) return;
		root.updateWorldMatrix(true, false);
		const labelsOn = useSolar.getState().labels;
		const overview = camera.position.length() > 58;
		const candidates = [];
		if (labelsOn) {
			for (const item of NAMED) {
				namedPoint(item, local);
				const radius = namedRadius(item);
				world.set(local.x * radius, local.y * radius, local.z * radius);
				root.localToWorld(world);
				ndc.copy(world).project(camera);
				if (ndc.z < -1 || ndc.z > 1) continue;
				if (Math.abs(ndc.x) > 1.02 || Math.abs(ndc.y) > 1.02) continue;
				const radial = Math.hypot(ndc.x, ndc.y);
				const name = namedLabel(item);
				let rank = 0;
				if (item.kind === "galassia") {
					if (overview && radial < .16) continue;
					rank = 42 - item.galaxy.mag;
				} else if (item.kind === "costellazione") {
					if (overview && radial < .3) continue;
					if (!overview && radial > .72) continue;
					rank = 5.2;
				} else {
					if (overview && radial < .2) continue;
					const { mag, proper } = item.star;
					if (!proper && mag > 4.5 && radial > .4) continue;
					if (!proper && mag > 3.5 && radial > .68) continue;
					rank = -mag + (proper ? 15 : 0);
					if (mag <= 1.5) rank += 4;
				}
				candidates.push({
					item,
					rank,
					x: ndc.x,
					y: ndc.y,
					aspect: Math.max(2.2, name.length * .42)
				});
			}
			candidates.sort((a, b) => b.rank - a.rank);
		}
		const placed = [];
		const chosen = [];
		for (const candidate of candidates) {
			const w = .02 + candidate.aspect * .012;
			const h = .034;
			if (placed.some((box) => Math.abs(box.x - candidate.x) < (box.w + w) * .5 && Math.abs(box.y - candidate.y) < (box.h + h) * .5)) continue;
			placed.push({
				x: candidate.x,
				y: candidate.y,
				w,
				h
			});
			chosen.push(candidate);
			if (chosen.length === POOL) break;
		}
		const sprites = pool.current;
		for (let index = 0; index < sprites.length; index++) {
			const spriteLabel = sprites[index];
			if (!spriteLabel) continue;
			const candidate = chosen[index];
			if (!candidate) {
				spriteLabel.visible = false;
				continue;
			}
			const name = namedLabel(candidate.item);
			let entry = labelCache.get(name);
			if (!entry) {
				entry = labelTexture(name);
				labelCache.set(name, entry);
			}
			const mat = spriteLabel.material;
			if (mat.map !== entry.texture) mat.map = entry.texture;
			mat.color.set(candidate.item.kind === "galassia" ? "#f4e7c8" : candidate.item.kind === "costellazione" ? "#9ec0ea" : "#f7f4ee");
			namedPoint(candidate.item, local);
			const lift = candidate.item.kind === "galassia" ? GALAXY_R * .985 : candidate.item.kind === "costellazione" ? STAR_R * .955 : STAR_R * .975;
			spriteLabel.position.set(local.x * lift, local.y * lift, local.z * lift);
			root.localToWorld(world.copy(spriteLabel.position));
			const height = Math.max(30, camera.position.distanceTo(world)) * (candidate.item.kind === "galassia" ? .016 : candidate.item.kind === "costellazione" ? .014 : .012);
			spriteLabel.scale.set(height * entry.aspect, height, 1);
			spriteLabel.visible = true;
		}
	});
	const onPointerDown = (event) => {
		down.current.x = event.clientX;
		down.current.y = event.clientY;
	};
	const onClick = (event) => {
		const dx = event.clientX - down.current.x;
		const dy = event.clientY - down.current.y;
		if (dx * dx + dy * dy > 36) return;
		event.stopPropagation();
		const root = group.current;
		if (!root) return;
		root.updateWorldMatrix(true, false);
		hit.copy(event.point).normalize();
		let best = null;
		let bestDot = -1;
		for (const item of NAMED) {
			namedPoint(item, local);
			world.copy(local);
			root.localToWorld(world);
			world.normalize();
			const dot = hit.dot(world);
			if (dot < (item.kind === "galassia" ? Math.cos(Math.max(1.5, item.galaxy.span * .55) * Math.PI / 180) : item.kind === "costellazione" ? Math.cos(1.15 * Math.PI / 180) : Math.cos((item.star.proper ? 1.7 : item.star.mag < 2 ? 1.35 : .72) * Math.PI / 180)) || dot < bestDot) continue;
			bestDot = dot;
			best = item;
		}
		if (!best) {
			useSolar.getState().pickSky(null);
			return;
		}
		const next = namedPick(best);
		const current = useSolar.getState().sky;
		useSolar.getState().pickSky(current && current.name === next.name ? null : next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		rotation: [
			0,
			Math.PI / 2,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				frustumCulled: false,
				onPointerDown,
				onClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					560,
					48,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map,
					side: 1,
					toneMapped: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
				geometry,
				material,
				frustumCulled: false,
				raycast: () => null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
				geometry: lines,
				frustumCulled: false,
				raycast: () => null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
					color: "#9eb0cc",
					transparent: true,
					opacity: .38,
					depthWrite: false,
					toneMapped: false
				})
			}),
			CHART_GALAXIES.map((galaxy) => {
				const width = GALAXY_R * (galaxy.span * Math.PI / 180);
				const height = width * (galaxy.kind === "irregolare" ? .72 : .62);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
					position: [
						galaxy.x * GALAXY_R,
						galaxy.y * GALAXY_R,
						galaxy.z * GALAXY_R
					],
					scale: [
						width,
						height,
						1
					],
					frustumCulled: false,
					raycast: () => null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
						map: glow,
						color: galaxyTint(galaxy.kind),
						transparent: true,
						depthWrite: false,
						blending: 2,
						toneMapped: false,
						opacity: galaxy.span > 3 ? .9 : .75
					})
				}, galaxy.name);
			}),
			Array.from({ length: POOL }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: (node) => {
					if (node) pool.current[index] = node;
				},
				visible: false,
				frustumCulled: false,
				raycast: () => null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					transparent: true,
					depthWrite: false,
					toneMapped: false
				})
			}, index))
		]
	});
}
var sphere = null;
function unitSphere() {
	if (!sphere) {
		sphere = new SphereGeometry(1, 128, 96);
		sphere.computeTangents();
	}
	return sphere;
}
function prepareMaps(maps) {
	for (const tex of Object.values(maps)) {
		tex.colorSpace = "";
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
var VERT = `
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
var FRAG = `
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
function createSurfaceMaterial(opts) {
	return new ShaderMaterial({
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
			uSpecStrength: { value: opts.specStrength ?? .08 },
			uTint: { value: new Color(opts.tint ?? "#ffffff") },
			uSoft: { value: opts.soft ?? .04 },
			uLimb: { value: opts.limb ?? .15 },
			uNightStrength: { value: opts.nightStrength ?? 0 },
			uNormalScale: { value: opts.normalScale ?? .85 },
			uRingInner: { value: opts.ringInner ?? 0 },
			uRingOuter: { value: opts.ringOuter ?? 1 },
			uHasRing: { value: opts.ring ? 1 : 0 }
		},
		vertexShader: VERT,
		fragmentShader: FRAG
	});
}
var CLOUD_FRAG = `
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
function createCloudMaterial(map) {
	return new ShaderMaterial({
		glslVersion: GLSL3,
		transparent: true,
		depthWrite: false,
		uniforms: { uMap: { value: map } },
		vertexShader: VERT,
		fragmentShader: CLOUD_FRAG
	});
}
var ATMO_VERT = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
var ATMO_FRAG = `
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
function createAtmoMaterial(color, strength, power) {
	const mat = new ShaderMaterial({
		glslVersion: GLSL3,
		transparent: true,
		depthWrite: false,
		blending: 2,
		uniforms: {
			uColor: { value: new Color(color) },
			uStrength: { value: strength },
			uPower: { value: power }
		},
		vertexShader: ATMO_VERT,
		fragmentShader: ATMO_FRAG
	});
	mat.toneMapped = false;
	return mat;
}
var SUN_VERT = `
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
var SUN_FRAG = `
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
function createSunMaterial(map) {
	return new ShaderMaterial({
		glslVersion: GLSL3,
		toneMapped: false,
		uniforms: { uMap: { value: map } },
		vertexShader: SUN_VERT,
		fragmentShader: SUN_FRAG
	});
}
var RING_VERT = `
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
var RING_FRAG = `
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
function createTexturedRingMaterial(map, inner, outer, planetRadius) {
	return new ShaderMaterial({
		glslVersion: GLSL3,
		transparent: true,
		side: 2,
		depthWrite: false,
		uniforms: {
			uMap: { value: map },
			uInner: { value: inner },
			uOuter: { value: outer },
			uRadius: { value: planetRadius },
			uCenter: { value: new Vector3() }
		},
		vertexShader: RING_VERT,
		fragmentShader: RING_FRAG
	});
}
var THIN_FRAG = `
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
function createThinRingMaterial(inner, outer, color, opacity) {
	return new ShaderMaterial({
		glslVersion: GLSL3,
		transparent: true,
		side: 2,
		depthWrite: false,
		uniforms: {
			uColor: { value: new Color(color) },
			uInner: { value: inner },
			uOuter: { value: outer },
			uOpacity: { value: opacity }
		},
		vertexShader: RING_VERT,
		fragmentShader: THIN_FRAG
	});
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
var cache = /* @__PURE__ */ new Map();
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
var ATMOS = {
	venus: {
		color: "#f3d7a6",
		strength: .78,
		power: 1.65,
		scale: 1.03
	},
	earth: {
		color: "#8eb6ff",
		strength: .9,
		power: 3.05,
		scale: 1.055
	},
	mars: {
		color: "#e8aa90",
		strength: .38,
		power: 3.3,
		scale: 1.026
	},
	jupiter: {
		color: "#e8c59a",
		strength: .48,
		power: 2.5,
		scale: 1.032
	},
	saturn: {
		color: "#f3e0b8",
		strength: .4,
		power: 2.7,
		scale: 1.028
	},
	uranus: {
		color: "#c5f4ee",
		strength: .62,
		power: 2.35,
		scale: 1.04
	},
	neptune: {
		color: "#7c97ff",
		strength: .7,
		power: 2.45,
		scale: 1.038
	}
};
function PlanetRings({ material, inner, outer }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(() => {
		const mesh = ref.current;
		const center = material.uniforms.uCenter?.value;
		if (!mesh || !center) return;
		mesh.getWorldPosition(center);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		ref,
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		material,
		raycast: () => null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
			inner,
			outer,
			196
		] })
	});
}
function Moon({ satellite, map, onPick }) {
	const ref = (0, import_react.useRef)(null);
	const material = (0, import_react.useMemo)(() => createSurfaceMaterial({
		map,
		tint: satellite.color,
		bump: satellite.radius > .07 ? 1.15 : .65,
		gloss: 26,
		specStrength: .05,
		soft: .02,
		limb: .04
	}), [
		map,
		satellite.color,
		satellite.radius
	]);
	(0, import_react.useEffect)(() => () => material.dispose(), [material]);
	useFrame(() => {
		const mesh = ref.current;
		if (!mesh) return;
		const theta = sim.elapsed / satellite.period * Math.PI * 2 + satellite.phase;
		mesh.position.set(Math.cos(theta) * satellite.orbit, 0, Math.sin(theta) * satellite.orbit);
		mesh.rotation.y = theta;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		ref,
		geometry: unitSphere(),
		material,
		dispose: null,
		scale: satellite.radius,
		onClick: onPick
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
function PlanetBody({ planet, maps }) {
	const group = (0, import_react.useRef)(null);
	const spin = (0, import_react.useRef)(null);
	const clouds = (0, import_react.useRef)(null);
	const selected = useSolar((state) => state.selected === planet.id);
	const geometry = (0, import_react.useMemo)(() => unitSphere(), []);
	const material = (0, import_react.useMemo)(() => {
		const ring = planet.ring;
		return createSurfaceMaterial({
			map: maps[planet.texture],
			night: planet.texture === "earth" ? maps.earthNight : null,
			spec: planet.texture === "earth" ? maps.earthSpec : null,
			normal: planet.texture === "earth" ? maps.earthNormal : null,
			ring: ring && planet.id === "saturn" ? maps.saturnRing : null,
			ringInner: ring ? ring.inner / planet.radius : 0,
			ringOuter: ring ? ring.outer / planet.radius : 1,
			bump: planet.texture === "mercury" || planet.texture === "mars" ? .85 : 0,
			gloss: planet.texture === "earth" ? 96 : planet.texture === "venus" ? 14 : planet.kind.includes("gassoso") || planet.kind.includes("ghiaccio") ? 20 : 36,
			specStrength: planet.texture === "venus" ? .22 : planet.kind.startsWith("Gigante") ? .16 : .05,
			soft: planet.texture === "venus" ? .2 : planet.texture === "earth" ? .06 : planet.kind.startsWith("Gigante") ? .09 : .025,
			limb: planet.texture === "venus" ? .42 : planet.kind.startsWith("Gigante") ? .5 : planet.texture === "earth" ? .12 : .05,
			nightStrength: planet.texture === "earth" ? 2.35 : 0,
			normalScale: .72
		});
	}, [maps, planet]);
	const cloudMat = (0, import_react.useMemo)(() => planet.texture === "earth" ? createCloudMaterial(maps.earthClouds) : null, [maps.earthClouds, planet.texture]);
	const atmo = ATMOS[planet.id];
	const atmoMat = (0, import_react.useMemo)(() => atmo ? createAtmoMaterial(atmo.color, atmo.strength, atmo.power) : null, [atmo]);
	const ringMat = (0, import_react.useMemo)(() => {
		if (!planet.ring) return null;
		if (planet.id === "saturn") return createTexturedRingMaterial(maps.saturnRing, planet.ring.inner, planet.ring.outer, planet.radius);
		return createThinRingMaterial(planet.ring.inner, planet.ring.outer, planet.ring.color, planet.ring.opacity);
	}, [maps.saturnRing, planet]);
	(0, import_react.useEffect)(() => () => {
		material.dispose();
		cloudMat?.dispose();
		atmoMat?.dispose();
		ringMat?.dispose();
	}, [
		atmoMat,
		cloudMat,
		material,
		ringMat
	]);
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
		if (clouds.current) clouds.current.rotation.y = sim.elapsed * planet.spin * 1.15 + .4;
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						ref: spin,
						geometry,
						material,
						dispose: null,
						scale: planet.radius,
						onClick: pick,
						onPointerOver: (event) => {
							event.stopPropagation();
							document.body.style.cursor = "pointer";
						},
						onPointerOut: () => {
							document.body.style.cursor = "";
						}
					}),
					cloudMat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						ref: clouds,
						geometry,
						material: cloudMat,
						dispose: null,
						scale: planet.radius * 1.012,
						raycast: () => null
					}) : null,
					atmo && atmoMat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry,
						material: atmoMat,
						dispose: null,
						scale: planet.radius * atmo.scale,
						raycast: () => null
					}) : null,
					planet.ring && ringMat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetRings, {
						material: ringMat,
						inner: planet.ring.inner,
						outer: planet.ring.outer
					}) : null
				]
			}),
			planet.satellites?.map((satellite) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
				satellite,
				map: maps.moon,
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
function Sun({ map }) {
	const spin = (0, import_react.useRef)(null);
	const glow = (0, import_react.useRef)(null);
	const corona = (0, import_react.useMemo)(() => glowTexture(), []);
	const material = (0, import_react.useMemo)(() => createSunMaterial(map), [map]);
	(0, import_react.useEffect)(() => () => material.dispose(), [material]);
	useFrame(() => {
		if (spin.current) spin.current.rotation.y = sim.elapsed * .04;
		if (glow.current) {
			const scale = 11.4 + Math.sin(sim.elapsed * .85) * .22;
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
				11.4,
				11.4,
				1
			],
			raycast: () => null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map: corona,
				transparent: true,
				depthWrite: false,
				blending: 2,
				toneMapped: false
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			ref: spin,
			material,
			onClick: pick,
			onPointerOver: (event) => {
				event.stopPropagation();
				document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				document.body.style.cursor = "";
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				SUN.radius,
				64,
				48
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			color: "#fff1cc",
			intensity: 70,
			distance: 180,
			decay: 1.2
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
	const maps = useTexture({
		mercury: "/cosmos/mercury.jpg",
		venus: "/cosmos/venus.jpg",
		earth: "/cosmos/earth_day.jpg",
		mars: "/cosmos/mars.jpg",
		jupiter: "/cosmos/jupiter.jpg",
		saturn: "/cosmos/saturn.jpg",
		uranus: "/cosmos/uranus.jpg",
		neptune: "/cosmos/neptune.jpg",
		earthNight: "/cosmos/earth_night.png",
		earthSpec: "/cosmos/earth_spec.jpg",
		earthNormal: "/cosmos/earth_normal.jpg",
		earthClouds: "/cosmos/earth_clouds.png",
		saturnRing: "/cosmos/saturn_ring.png",
		sun: "/cosmos/sun.jpg",
		moon: "/cosmos/moon.jpg",
		stars: "/cosmos/sky.jpg"
	});
	(0, import_react.useLayoutEffect)(() => {
		prepareMaps(maps);
	}, [maps]);
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .05 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyField, { map: maps.stars }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { map: maps.sun }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Belt, {}),
		PLANETS.map((planet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitTrail, { planet }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetBody, {
			planet,
			maps
		})] }, planet.id)),
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
			far: 1400
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})
		})
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
