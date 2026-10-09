import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, _ as SRGBColorSpace, a as useFrame, b as Vector3, c as BufferGeometry, d as Color, f as DodecahedronGeometry, g as RepeatWrapping, h as Object3D, i as Canvas, l as CanvasTexture, m as MeshStandardMaterial, n as useTexture, o as useThree, p as GLSL3, r as Line, s as BufferAttribute, t as OrbitControls, u as ClampToEdgeWrapping, v as ShaderMaterial, w as require_react, y as SphereGeometry } from "../_libs/@react-three/drei+[...].mjs";
import { a as Play, i as Route, o as Pause, r as Tag, s as Orbit, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ivgiy7J8.js
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "credit",
						children: "Superfici e Via Lattea: NASA · Solar System Scope"
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
var STAR_VERT = `
  attribute float aSize;
  attribute float aPhase;
  varying vec3 vColor;
  varying float vPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  void main() {
    vColor = color;
    vPhase = aPhase;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.78 + 0.22 * sin(uTime * (0.55 + aPhase * 1.4) + aPhase * 18.0);
    gl_PointSize = clamp(aSize * tw * uPixelRatio * (460.0 / max(8.0, -mv.z)), 0.8, 4.8);
    gl_Position = projectionMatrix * mv;
  }
`;
var STAR_FRAG = `
  uniform sampler2D uStar;
  varying vec3 vColor;
  varying float vPhase;
  out vec4 fragColor;
  void main() {
    vec4 tex = texture(uStar, gl_PointCoord);
    if (tex.a < 0.05) discard;
    fragColor = vec4(vColor * tex.rgb, tex.a);
  }
`;
function starSprite() {
	const canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
	g.addColorStop(0, "rgba(255,255,255,1)");
	g.addColorStop(.18, "rgba(255,255,255,0.9)");
	g.addColorStop(.45, "rgba(255,255,255,0.25)");
	g.addColorStop(1, "rgba(255,255,255,0)");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 64, 64);
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.needsUpdate = true;
	return texture;
}
function starField() {
	const count = 1100;
	const positions = new Float32Array(count * 3);
	const colors = new Float32Array(count * 3);
	const sizes = new Float32Array(count);
	const phases = new Float32Array(count);
	const palette = [
		[
			.68,
			.8,
			1
		],
		[
			.82,
			.9,
			1
		],
		[
			1,
			.98,
			.95
		],
		[
			1,
			.93,
			.78
		],
		[
			1,
			.72,
			.48
		]
	];
	let seed = 20260321;
	const rnd = () => {
		seed = (seed * 16807 + 11) % 2147483647;
		return (seed & 2147483647) / 2147483647;
	};
	for (let i = 0; i < count; i++) {
		const z = rnd() * 2 - 1;
		const phi = rnd() * Math.PI * 2;
		const rad = Math.sqrt(Math.max(0, 1 - z * z));
		const radius = 500;
		positions[i * 3] = rad * Math.cos(phi) * radius;
		positions[i * 3 + 1] = z * radius;
		positions[i * 3 + 2] = rad * Math.sin(phi) * radius;
		const bright = rnd() ** 2.4;
		const tint = palette[Math.min(palette.length - 1, Math.floor(rnd() * palette.length))];
		colors[i * 3] = tint[0] * (.45 + bright * .7);
		colors[i * 3 + 1] = tint[1] * (.45 + bright * .7);
		colors[i * 3 + 2] = tint[2] * (.45 + bright * .7);
		sizes[i] = 1.1 + bright * 3.4;
		phases[i] = rnd();
	}
	const geo = new BufferGeometry();
	geo.setAttribute("position", new BufferAttribute(positions, 3));
	geo.setAttribute("color", new BufferAttribute(colors, 3));
	geo.setAttribute("aSize", new BufferAttribute(sizes, 1));
	geo.setAttribute("aPhase", new BufferAttribute(phases, 1));
	return geo;
}
function SkyField({ map }) {
	const points = (0, import_react.useRef)(null);
	const dpr = useThree((state) => state.gl.getPixelRatio());
	const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const sprite = (0, import_react.useMemo)(() => starSprite(), []);
	const geometry = (0, import_react.useMemo)(() => starField(), []);
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
	(0, import_react.useEffect)(() => () => {
		geometry.dispose();
		material.dispose();
		sprite.dispose();
	}, [
		geometry,
		material,
		sprite
	]);
	useFrame((_, delta) => {
		if (!reduce) material.uniforms.uTime.value += Math.min(delta, .05);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			0,
			Math.PI / 2,
			0
		],
		frustumCulled: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			560,
			48,
			32
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			map,
			side: 1,
			toneMapped: false
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
		ref: points,
		geometry,
		material,
		frustumCulled: false
	})] });
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
