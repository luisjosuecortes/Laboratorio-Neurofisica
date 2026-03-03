import type { Metadata } from "next";
import "./globals.css";
import { Encabezado } from "@/components/encabezado";

export const metadata: Metadata = {
  title: "Laboratorio de Neurofísica",
  description: "Sitio oficial del Laboratorio de Neurofísica",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
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
