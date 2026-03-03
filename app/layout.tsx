import type { Metadata } from "next";
import "./globals.css";
import { Encabezado } from "@/components/encabezado";

export const metadata: Metadata = {
  title: "Laboratorio de Neurofísica",
  description: "Sitio oficial del Laboratorio de Neurofísica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <Encabezado />
        {children}
      </body>
    </html>
  );
}
