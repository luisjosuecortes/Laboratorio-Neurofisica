import { Fondo } from "@/components/fondo";

export default function PaginaInicio() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 overflow-hidden">

      <Fondo />

      {/* Contenedor de Contenido */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* Página del Laboratorio de Neurofísica */}
      </div>
    </div>
  );
}
