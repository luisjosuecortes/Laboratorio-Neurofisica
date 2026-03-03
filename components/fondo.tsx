export function Fondo() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Efectos de fondo dinámicos */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>

            {/* Esferas luminosas */}
            {/* Superior Centro-Izquierda (Ajustado) */}
            <div className="absolute top-[-5%] md:top-[-10%] left-[50%] md:left-[42%] -translate-x-1/2 w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] rounded-full bg-blue-900/15 blur-[80px] md:blur-[130px] mix-blend-screen animate-pulse duration-[9000ms]"></div>

            {/* Inferior Derecha */}
            <div className="absolute bottom-[2%] md:bottom-[5%] right-[-5%] md:right-[5%] w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem] rounded-full bg-indigo-900/15 blur-[100px] md:blur-[150px] mix-blend-screen animate-pulse duration-[11000ms]"></div>

            {/* Centro Derecha (más sutil para dar respiro) */}
            <div className="absolute top-[20%] md:top-[30%] right-[5%] md:right-[20%] w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] rounded-full bg-cyan-900/5 blur-[70px] md:blur-[110px] mix-blend-screen animate-pulse duration-[13000ms]"></div>

            {/* Inferior Izquierda (Nueva - sin cambios) */}
            <div className="absolute bottom-[-5%] md:bottom-[-10%] left-[-15%] md:left-[-10%] w-[25rem] h-[25rem] md:w-[45rem] md:h-[45rem] rounded-full bg-blue-800/15 blur-[100px] md:blur-[130px] mix-blend-screen animate-pulse duration-[14000ms]"></div>

            {/* Superposición sutil de cuadrícula para textura */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            {/* Superposición sutil de cuadrícula para textura - Animada Cuadros/Triángulos */}
            <div className="absolute inset-[-50%] bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-morph [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        </div>
    );
}
