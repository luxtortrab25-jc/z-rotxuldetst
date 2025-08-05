
'use client';

import * as React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import OtherServicesNav from '@/components/layout/other-services-nav';
import { Magnifier } from '@/components/ui/magnifier';

const imageUrl = "https://i.postimg.cc/bv8N4kyJ/FILMS.jpg";

export default function PeliculaPage() {

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
                  alt="Película de seguridad"
                  width={500}
                  height={700}
                  dataAiHint="security film car"
                />
              </div>
              <div className="md:col-span-1">
                <h1 className="font-headline text-5xl font-black uppercase text-primary md:text-6xl">
                    Película de Seguridad
                </h1>
                <p className="mt-6 font-body text-xl leading-relaxed text-foreground md:text-2xl">
                    La película de seguridad para cristales está diseñada para reforzar los vidrios del vehículo, ofreciendo protección contra impactos, golpes e incluso accidentes. Al aplicarse en las ventanas, esta película ayuda a retener los fragmentos en caso de ruptura, disminuyendo el riesgo de lesiones y dificultando el ingreso forzado al auto.
                </p>
              </div>
            </div>

             <div className="mt-20">
                <h2 className="font-headline text-4xl font-black uppercase text-primary md:text-5xl text-center">
                    Beneficios
                </h2>
                <ul className="mt-8 font-body text-xl text-left leading-relaxed text-foreground mx-auto max-w-4xl list-disc pl-5 space-y-3">
                    <li>Espesor resistente a impactos fuertes y herramientas de robo.</li>
                    <li>Retiene el vidrio en su lugar ante choques o golpes.</li>
                    <li>Filtra rayos UV hasta en un un 99%, protegiendo el interior del auto.</li>
                    <li>Reduce el deslumbramiento del sol y mejora el confort interior.</li>
                    <li>Disponible en versiones con diferentes grados de polarizado.</li>
                    <li>Ideal para clientes que buscan aumentar la seguridad sin comprometer la visibilidad ni la estética del vehículo. En Luxtor Detail Studio, usamos películas certificadas y con garantía de rendimiento.</li>
                </ul>
            </div>
          </div>
        </section>
        <OtherServicesNav currentServiceHref="/servicios/pelicula-de-seguridad" />
      </main>
      <Footer />
    </div>
  );
}
