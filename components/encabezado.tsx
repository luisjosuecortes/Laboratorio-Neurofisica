"use client";

import Link from "next/link";
import Image from "next/image";

export function Encabezado() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5 select-none" onContextMenu={(e) => e.preventDefault()}>
            <div className="mx-auto max-w-7xl px-3 md:px-6">
                <div className="flex items-center justify-between h-10 md:h-16">

                    {/* Icono a la Izquierda */}
                    <Link href="/" className="group flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all rounded-lg overflow-hidden">
                        <Image
                            src="/favicon/apple-touch-icon.png"
                            alt="LabCubo Logo"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            priority
                            draggable={false}
                        />
                    </Link>

                    {/* Navegación Derecha (Elegante y Sutil) */}
                    <nav className="flex items-center gap-4 md:gap-8">
                        <Link
                            href="#integrantes"
                            className="text-xs md:text-sm font-medium tracking-wide text-white/50 hover:text-white/100 transition-colors duration-300 relative group"
                        >
                            Integrantes
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500/50 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="#publicaciones"
                            className="text-xs md:text-sm font-medium tracking-wide text-white/50 hover:text-white/100 transition-colors duration-300 relative group"
                        >
                            Publicaciones
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500/50 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>

                </div>
            </div>
        </header>
    );
}
