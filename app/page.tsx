import { Fondo } from "@/components/fondo";
import { Hero } from "@/components/hero";
import { LineasInvestigacion } from "@/components/lineas-investigacion";

export default function PaginaInicio() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">

      <Fondo />

      {/* Contenedor de Contenido */}
      <div className="relative z-10">
        <Hero />
        <LineasInvestigacion />
      </div>
    </div>
  );
}
