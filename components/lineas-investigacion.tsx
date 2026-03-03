"use client";

import Image from "next/image";

const lineasInvestigacion = [
    {
        titulo: "Dinámica Cerebral y Conectividad Funcional",
        descripcion: "Estudio de patrones de actividad neuronal y las redes funcionales que emergen de la interacción entre regiones cerebrales.",
        imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
        color: "from-blue-600/60",
    },
    {
        titulo: "Machine Learning aplicado a Sistemas Complejos",
        descripcion: "Aplicación de algoritmos de aprendizaje automático para modelar y predecir el comportamiento de sistemas dinámicos complejos.",
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
        color: "from-indigo-600/60",
    },
    {
        titulo: "Neurociencia Social y Estrés",
        descripcion: "Investigación de los mecanismos neurales subyacentes a la interacción social y la respuesta fisiológica al estrés.",
        imagen: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&auto=format&fit=crop",
        color: "from-cyan-600/60",
    },
    {
        titulo: "Cognición y Sueño",
        descripcion: "Análisis de la relación entre los procesos cognitivos y las fases del sueño, explorando su impacto en la memoria y el aprendizaje.",
        imagen: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80&auto=format&fit=crop",
        color: "from-purple-600/60",
    },
];

export function LineasInvestigacion() {
    return (
        <section id="lineas" className="relative py-24 md:py-32 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado de Sección */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-blue-400/60 font-medium mb-4">
                        Áreas de Enfoque
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-white to-blue-300/80 bg-clip-text text-transparent">
                            Líneas de Investigación
                        </span>
                    </h2>
                </div>

                {/* Grid de Tarjetas con Imágenes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {lineasInvestigacion.map((linea, indice) => (
                        <div
                            key={indice}
                            className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 cursor-default"
                        >
                            {/* Imagen de Fondo */}
                            <Image
                                src={linea.imagen}
                                alt={linea.titulo}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, 50vw"
                            />

                            {/* Overlay Oscuro con Gradiente */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${linea.color} via-slate-950/70 to-slate-950/40 group-hover:via-slate-950/80 transition-all duration-500`}></div>

                            {/* Contenido */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                {/* Título */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                                    {linea.titulo}
                                </h3>

                                {/* Descripción (aparece al hover) */}
                                <p className="text-xs sm:text-sm text-white/0 group-hover:text-white/60 leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                                    {linea.descripcion}
                                </p>
                            </div>

                            {/* Borde Sutil */}
                            <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
