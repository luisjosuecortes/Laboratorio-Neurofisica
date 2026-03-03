import Link from "next/link";

export function Encabezado() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5">
            <div className="mx-auto max-w-7xl px-3 md:px-6">
                <div className="flex items-center justify-start h-10 md:h-16">

                    {/* Icono a la Izquierda */}
                    <Link href="/" className="group flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5 md:w-6 md:h-6 text-blue-500 group-hover:text-blue-400 transform group-hover:scale-110 transition-all duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 17L12 22L22 17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 12L12 17L22 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                </div>
            </div>
        </header>
    );
}
