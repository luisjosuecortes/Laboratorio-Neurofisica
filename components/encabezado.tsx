import Link from "next/link";
import Image from "next/image";

export function Encabezado() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5">
            <div className="mx-auto max-w-7xl px-3 md:px-6">
                <div className="flex items-center justify-start h-10 md:h-16">

                    {/* Icono a la Izquierda */}
                    <Link href="/" className="group flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all rounded-lg overflow-hidden">
                        <Image
                            src="/favicon/apple-touch-icon.png"
                            alt="LabCubo Logo"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            priority
                        />
                    </Link>

                </div>
            </div>
        </header>
    );
}
