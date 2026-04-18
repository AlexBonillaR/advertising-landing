import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/src/components/Providers";

export const metadata: Metadata = {
  title: "TenloListo - El programa de influencers para creadores cubanos",
  description: "Conecta con marcas, monetiza tu contenido y recibe pagos garantizados. El primer programa de marketing de influencers diseñado para creadores en Cuba.",
  keywords: "creadores cubanos, influencers cuba, marketing de influencers, creadores de contenido cuba, monetizar contenido, programa influencers cuba",
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
