
'use client';

import * as React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import OtherServicesNav from '@/components/layout/other-services-nav';
import { Magnifier } from '@/components/ui/magnifier';

const imageUrl = "https://i.postimg.cc/GhkWVNHF/EL-WRAP.jpg";

export default function WrapPage() {
  
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
                    alt="Wrap"
                    width={500}
                    height={700}
                    dataAiHint="car wrap"
                  />
              </div>
              <div className="md:col-span-1">
                 <h1 className="font-headline text-5xl font-black uppercase text-primary md:text-6xl">
                    Wrap
                </h1>
                <p className="mt-6 font-body text-xl leading-relaxed text-foreground md:text-2xl">
                    El Wrap es una película de vinil de alta durabilidad y flexibilidad que se adhiere a la superficie del auto y que puede ser removida sin dañar la pintura. Es la mejor alternativa para quienes desean cambiar el color, acabado o diseño de su vehículo sin comprometer la pintura original.
                </p>
              </div>
            </div>

            <div className="mt-20">
                <h2 className="font-headline text-4xl font-black uppercase text-primary md:text-5xl text-center">
                    Beneficios del Wrap
                </h2>
                <ul className="mt-8 font-body text-xl text-left leading-relaxed text-foreground mx-auto max-w-4xl list-disc pl-5 space-y-3">
                    <li>Gran variedad de colores, texturas y acabados: gloss, matte, satinado, perlado, cromado, fibra de carbono, camuflaje y más.</li>
                    <li>Protección adicional contra rayones y desgaste por el sol.</li>
                    <li>Personalización total o parcial (cofres, techos, espejos, franjas, etc.).</li>
                    <li>Fácil mantenimiento y limpieza.</li>
                    <li>Puede retirarse en cualquier momento sin dañar la pintura.</li>
                    <li className="list-none mt-4">En Luxtor Detail Studio, cuidamos cada centímetro del vinilado con cortes precisos, sin burbujas ni pliegues, para lograr un acabado premium que parece pintura original.</li>
                </ul>
            </div>
          </div>
        </section>
        <OtherServicesNav currentServiceHref="/servicios/wrap" />
      </main>
      <Footer />
    </div>
  );
}
