import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Hud } from "@/components/solar/Hud";
import Stage from "@/components/solar/Stage";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <main className="app-shell">
      <div
        className="stage"
        role="img"
        aria-label="Vista 3D del sistema solare: trascina per ruotare, usa la barra dei corpi per navigare"
      >{ready ? <Stage /> : null}</div>
      <Hud />
    </main>
  );
}
