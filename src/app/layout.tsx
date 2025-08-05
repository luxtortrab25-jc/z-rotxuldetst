
import type { Metadata } from "next";
import { Playfair_Display, PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-headline",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Luxtor Detail Studios MX",
  description: "Estética automotriz premium. Dale a tu coche un acabado IMPECABLE.",
  keywords: "detallado automotriz, estética automotriz, PPF, paint protection film, wrap, forrado de autos, tratamiento cerámico, recubrimiento cerámico, película de seguridad, polarizado, Luxtor Detail Studios, Iztapalapa, Ciudad de México, CDMX, car detailing Mexico City, ceramic coating CDMX, car wrap Iztapalapa, premium car care, personalización de vehículos, servicios de detallado automotriz, protección de pintura de autos, forrado de vinil para autos, película de seguridad para autos, pulido de autos, encerado de autos, detallado de interiores, restauración de faros, limpieza de motor, Luxtor, wrap automotriz cdmx, película protectora de pintura, protección de autos, tratamiento cerámico cdmx, detallado automotriz premium, transformación vehicular, protección automotriz accesible, wrap y tratamiento cerámico, película de seguridad para autos, detallado de autos en ciudad de méxico",
  icons: {
    icon: 'https://i.postimg.cc/Dz7TfSv0/android-chrome-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          playfairDisplay.variable,
          ptSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
