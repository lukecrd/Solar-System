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
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
      if (event.code === "Space") {
        event.preventDefault();
        useSolar.getState().togglePaused();
      } else if (event.key === "Escape") {
        useSolar.getState().select(null);
      } else if (event.key === "0") {
        useSolar.getState().select("sun");
      } else if (event.key >= "1" && event.key <= "8") {
        const planet = PLANETS[Number(event.key) - 1];
        if (planet) useSolar.getState().select(planet.id);
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
          <p className="sub">Sistema solare. Clicca un pianeta: la camera lo segue.</p>
          <p className="credit">Superfici e Via Lattea: NASA · Solar System Scope</p>
        </div>
        <div className="glass clock" aria-live="polite">
          <strong>{paused ? "In pausa" : date}</strong>
          <span>{paused ? date : "tempo compresso"}</span>
        </div>
      </header>

      <nav className="rail" aria-label="Corpi del sistema solare">
        {BODIES.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-btn"
            data-active={selected === item.id}
            onClick={() => select(item.id as BodyId)}
          >
            <span className="swatch" style={{ background: item.color }} />
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
              <X size={18} />
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
            onClick={togglePaused}
          >
            {paused ? <Play size={18} /> : <Pause size={18} />}
          </button>
          <button type="button" className="text-btn" onClick={() => select(null)}>
            <Orbit size={16} />
            Vista
          </button>
          <div className="speed">
            <label htmlFor="speed">Velocità</label>
            <input
              id="speed"
              type="range"
              min={0.2}
              max={12}
              step={0.1}
              value={speed}
              aria-valuetext={`${speed.toFixed(1)} volte`}
              onChange={(event) => setSpeed(Number(event.target.value))}
            />
            <output>{speed.toFixed(1)}×</output>
          </div>
        </div>
        <div className="toggles">
          <button
            type="button"
            className="text-btn"
            data-on={trails}
            aria-pressed={trails}
            onClick={() => setTrails(!trails)}
          >
            <Route size={16} />
            Sentieri
          </button>
          <button
            type="button"
            className="text-btn"
            data-on={labels}
            aria-pressed={labels}
            onClick={() => setLabels(!labels)}
          >
            <Tag size={16} />
            Etichette
          </button>
        </div>
        <p className="keys">Spazio pausa · Esc vista · 0–8 corpi</p>
      </footer>
    </>
  );
}
