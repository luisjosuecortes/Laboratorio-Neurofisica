import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-[100dvh] px-4 md:px-6 pt-16 select-none">

            {/* Layout Dos Columnas */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto w-full -mt-10 md:mt-0">

                {/* Columna Izquierda - Información */}
                <div className="flex flex-col gap-5 md:gap-8 text-center md:text-left order-2 md:order-1 w-full md:w-auto">

                    {/* Título Principal */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400/60 font-medium pb-2 md:pb-0">
                            Investigación y Ciencia
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-white via-white to-blue-300/80 bg-clip-text text-transparent">
                                Laboratorio de
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Neuro-Física
                            </span>
                            <br />
                            <span className="text-white/30 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.15em] sm:tracking-widest block pt-1 md:pt-2">
                                Computacional
                            </span>
                        </h1>
                    </div>

                    {/* Descripción */}
                    <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-white/35 max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                        Investigando los principios fundamentales de la actividad neuronal
                        a través de la física computacional y experimental.
                    </p>

                    {/* Botones de Acción */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 mt-2 md:mt-0 w-full md:w-auto px-4 sm:px-0">
                        <a
                            href="#publicaciones"
                            className="px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-wide text-white bg-blue-600/20 border border-blue-500/30 rounded-full hover:bg-blue-600/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Ver Publicaciones
                        </a>
                        <a
                            href="#integrantes"
                            className="px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-wide text-white/50 hover:text-white/80 border border-white/10 rounded-full hover:border-white/20 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Conocer al Equipo
                        </a>
                    </div>
                </div>

                {/* Columna Derecha - Logo Grande */}
                <div className="flex-shrink-0 relative group order-1 md:order-2 pb-2 md:pb-0">
                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
                        <Image
                            src="/logo_nombre.png"
                            alt="Laboratorio de Neuro-Física Computacional"
                            width={800}
                            height={800}
                            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] sm:drop-shadow-[0_0_50px_rgba(59,130,246,0.15)]"
                            priority
                            draggable={false}
                        />
                    </div>
                </div>

            </div>

            {/* Indicador de Scroll */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Explorar</span>
                <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

        </section>
    );
}
