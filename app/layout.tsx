import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/src/components/Providers";

export const metadata: Metadata = {
  title: "TenloListo - La plataforma #1 para creadores en Latinoamérica",
  description: "Conecta con miles de creadores y monetiza tu contenido con precios justos, pagos garantizados y total transparencia.",
  keywords: "creadores, influencers, marketing, plataforma, latinoamérica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
