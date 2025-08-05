
'use client';

import * as React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import OtherServicesNav from '@/components/layout/other-services-nav';
import { Magnifier } from '@/components/ui/magnifier';

const imageUrl = "https://i.postimg.cc/VLYgsHKB/RATAMIENTO-CERAMICO.jpg";

export default function CeramicoPage() {

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
                  alt="Tratamiento Cerámico"
                  width={500}
                  height={700}
                  dataAiHint="ceramic coating car"
                />
              </div>
              <div className="md:col-span-1">
                 <h1 className="font-headline text-5xl font-black uppercase text-primary md:text-6xl">
                    Tratamiento Cerámico
                </h1>
                <p className="mt-6 font-body text-xl leading-relaxed text-foreground md:text-2xl">
                    Es un recubrimiento líquido basado en nanotecnología que se aplica sobre la pintura del auto y que, al curar, forma una capa protectora dura y brillante. Esta capa sella la superficie y crea un efecto hidrofóbico, facilitando la limpieza y evitando que se adhiera la suciedad.
                </p>
              </div>
            </div>

            <div className="mt-20">
                <h2 className="font-headline text-4xl font-black uppercase text-primary md:text-5xl text-center">
                    Beneficios
                </h2>
                <ul className="mt-8 font-body text-xl text-left leading-relaxed text-foreground mx-auto max-w-4xl list-disc pl-5 space-y-3">
                    <li>Aumenta la profundidad y el brillo del color.</li>
                    <li>Protege contra rayos UV, lluvia ácida, excremento de aves, insectos y contaminantes.</li>
                    <li>Reduce el riesgo de micro-rayones gracias a su dureza.</li>
                    <li>Hace que el lavado del vehículo sea más rápido y sencillo.</li>
                    <li>Duración de 1 a 5 años, dependiendo del tipo de tratamiento.</li>
                    <li className="list-none mt-4">En Luxtor Detail Studio contamos con tratamientos cerámicos de grado profesional para pintura, rines, cristales y plásticos exteriores. Aplicamos cada capa en un ambiente controlado, asegurando la máxima adherencia y resultados duraderos.</li>
                </ul>
            </div>
          </div>
        </section>
        <OtherServicesNav currentServiceHref="/servicios/tratamiento-ceramico" />
      </main>
      <Footer />
    </div>
  );
}
