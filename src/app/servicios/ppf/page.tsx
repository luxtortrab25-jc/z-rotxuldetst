
'use client';

import * as React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import OtherServicesNav from '@/components/layout/other-services-nav';
import { Magnifier } from '@/components/ui/magnifier';

const imageUrl = "https://i.postimg.cc/C5JK41T1/BANNER-PPF.jpg";

export default function PPFPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SocialBar />
      <main className="flex-1">
        <section className="py-20 sm:py-32 bg-black">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:col-span-1">
                 <Magnifier
                    src={imageUrl}
                    alt="PPF Banner"
                    width={500}
                    height={700}
                    dataAiHint="ppf application"
                  />
              </div>
              <div className="md:col-span-1">
                 <h1 className="font-headline text-5xl font-black uppercase text-primary md:text-6xl">
                    Paint Protection Film (PPF)
                </h1>
                <p className="mt-6 font-body text-xl leading-relaxed text-foreground md:text-2xl">
                    La película de protección de pintura (PPF) es una lámina transparente y prácticamente invisible que se aplica sobre la carrocería del vehículo para protegerla contra los daños más comunes del uso diario. Este recubrimiento de poliuretano de alta tecnología es autocurable, lo que significa que puede eliminar micro-rayones con el calor del sol o con una pistola de calor, manteniendo siempre un acabado impecable.
                </p>
              </div>
            </div>

            <div className="mt-20">
                <h2 className="font-headline text-4xl font-black uppercase text-primary md:text-5xl text-center">
                    Beneficios del PPF
                </h2>
                <ul className="mt-8 font-body text-xl text-left leading-relaxed text-foreground mx-auto max-w-4xl list-disc pl-5 space-y-3">
                    <li>Protección contra rayones, piedras, insectos, excremento de aves, resina de árboles y otros contaminantes.</li>
                    <li>Alta resistencia a impactos y desgaste.</li>
                    <li>No altera el color ni el brillo original del vehículo.</li>
                    <li>Disponible en acabado transparente gloss o matte.</li>
                    <li>Larga duración: hasta 10 años con el mantenimiento adecuado.</li>
                    <li className="list-none mt-4">En Luxtor Detail Studio, utilizamos películas de las mejores calidades del mercado y aplicamos cada pieza con máxima precisión, asegurando cobertura perfecta y un acabado limpio y profesional.</li>
                </ul>
            </div>
          </div>
        </section>
        <OtherServicesNav currentServiceHref="/servicios/ppf" />
      </main>
      <Footer />
    </div>
  );
}
