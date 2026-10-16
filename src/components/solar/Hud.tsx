import { Pause, Play, Orbit, Route, Tag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BODIES, findBody, isPlanet, PLANETS, type BodyId } from "@/solar/planets";
import { EARTH_PERIOD, sim } from "@/solar/sim";
import { useSolar } from "@/solar/store";

function formatDate(elapsed: number) {
  const days = (elapsed / EARTH_PERIOD) * 365.25;
  const stamp = Date.UTC(2026, 0, 1) + days * 86_400_000;
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(stamp));
}

const SPEED_MIN = 0.2;
const SPEED_MAX = 12;
const clampSpeed = (value: number) =>
  Math.round(Math.min(SPEED_MAX, Math.max(SPEED_MIN, value)) * 10) / 10;

export function Hud() {
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
  const [date, setDate] = useState(() => formatDate(0));

  useEffect(() => {
    const timer = window.setInterval(() => setDate(formatDate(sim.elapsed)), 200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      useSolar.setState({ speed: 0.35 });
    }
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "TEXTAREA" || target?.isContentEditable) return;
      // Range input keeps its own arrow/Home/End keys; other shortcuts still work.
      if (tag === "INPUT" && (target as HTMLInputElement).type !== "range") return;
      const state = useSolar.getState();
      if (event.code === "Space") {
        // Let focused buttons activate natively with Space.
        if (tag === "BUTTON" || event.repeat) return;
        event.preventDefault();
        state.togglePaused();
      } else if (event.key === "Escape") {
        if (state.sky) state.pickSky(null);
        else state.select(null);
      } else if (event.key === "0") {
        state.select("sun");
      } else if (event.key >= "1" && event.key <= "8") {
        const planet = PLANETS[Number(event.key) - 1];
        if (planet) state.select(planet.id);
      } else if (event.key === "+" || event.key === "=" || event.key === "]") {
        state.setSpeed(clampSpeed(state.speed * 1.25));
      } else if (event.key === "-" || event.key === "_" || event.key === "[") {
        state.setSpeed(clampSpeed(state.speed / 1.25));
      } else if (event.key === "t" || event.key === "T") {
        state.setTrails(!state.trails);
      } else if (event.key === "l" || event.key === "L") {
        state.setLabels(!state.labels);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const body = findBody(selected);

  return (
    <>
      <header className="topbar">
        <div className="wordmark">
          <p className="kicker">Osservatorio</p>
          <h1>Elios</h1>
          <p className="sub">Carta del cielo. Clicca una stella, una costellazione o una galassia.</p>
          <p className="credit">Hipparcos · Messier · Via Lattea</p>
        </div>
        <div className="top-side">
          {/* The date ticks every 200ms, so only the pause state is announced. */}
          <div className="glass clock">
            <strong>{paused ? "In pausa" : date}</strong>
            <span>{paused ? date : "tempo compresso"}</span>
            <span className="sr-only" role="status">
              {paused ? "Simulazione in pausa" : "Simulazione in corso"}
            </span>
          </div>
          {sky ? (
            <article className="glass sky-chip" aria-live="polite">
              <div>
                <p className="kind">{sky.kind}</p>
                <strong>{sky.name}</strong>
                <span>{sky.detail}</span>
              </div>
              <button type="button" className="icon-btn" aria-label="Chiudi scheda celeste" onClick={() => pickSky(null)}>
                <X size={16} aria-hidden="true" />
              </button>
            </article>
          ) : null}
        </div>
      </header>

      <nav className="rail" aria-label="Corpi del sistema solare">
        {BODIES.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-btn"
            data-active={selected === item.id}
            aria-pressed={selected === item.id}
            onClick={() => select(item.id as BodyId)}
          >
            <span className="swatch" aria-hidden="true" style={{ background: item.color }} />
            {item.name}
          </button>
        ))}
      </nav>

      {body ? (
        <article className="glass dossier" aria-label={`Scheda di ${body.name}`}>
          <div className="dossier-head">
            <div>
              <p className="kind">{body.kind}</p>
              <h2>{body.name}</h2>
            </div>
            <button type="button" className="icon-btn" aria-label="Chiudi scheda" onClick={() => select(null)}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <p className="blurb">{body.blurb}</p>
          <dl className="facts">
            {body.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            {isPlanet(body)
              ? "Scala visiva compressa: i periodi rispettano l’ordine reale, non la durata esatta. Trascina per orbitare intorno al corpo seguito."
              : "Trascina per girare intorno al Sole. Esc oppure Vista torna al sistema intero."}
          </p>
        </article>
      ) : null}

      <footer className="glass dock">
        <div className="transport">
          <button
            type="button"
            className="icon-btn"
            data-on={paused ? "false" : "true"}
            aria-pressed={!paused}
            aria-label={paused ? "Riprendi simulazione" : "Metti in pausa"}
            title={paused ? "Riprendi (Spazio)" : "Pausa (Spazio)"}
            onClick={togglePaused}
          >
            {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="text-btn"
            title="Vista d’insieme (Esc)"
            onClick={() => select(null)}
          >
            <Orbit size={16} aria-hidden="true" />
            Vista
          </button>
          <div className="speed">
            <label htmlFor="speed">Velocità</label>
            <input
              id="speed"
              type="range"
              min={SPEED_MIN}
              max={SPEED_MAX}
              step={0.1}
              value={speed}
              aria-valuetext={`${speed.toFixed(1)} volte`}
              suppressHydrationWarning
              onChange={(event) => setSpeed(Number(event.target.value))}
            />
            <output htmlFor="speed">{speed.toFixed(1)}×</output>
          </div>
        </div>
        <div className="toggles">
          <button
            type="button"
            className="text-btn"
            data-on={trails}
            aria-pressed={trails}
            title="Sentieri orbitali (T)"
            onClick={() => setTrails(!trails)}
          >
            <Route size={16} aria-hidden="true" />
            Sentieri
          </button>
          <button
            type="button"
            className="text-btn"
            data-on={labels}
            aria-pressed={labels}
            title="Etichette (L)"
            onClick={() => setLabels(!labels)}
          >
            <Tag size={16} aria-hidden="true" />
            Etichette
          </button>
        </div>
        <p className="keys">Spazio pausa · Esc vista · 0–8 corpi · +/− velocità · T sentieri · L etichette</p>
      </footer>
    </>
  );
}
