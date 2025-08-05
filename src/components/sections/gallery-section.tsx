
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { TextHoverEffect } from '../ui/text-hover-effect';

const galleryItems = [
  {
    vehicle: 'Audi A5',
    image: { src: 'https://i.postimg.cc/7hPPs2kz/au.png', hint: 'clean audi' },
  },
  {
    vehicle: 'Toyota Corolla híbrido',
    image: { src: 'https://i.postimg.cc/tgsQSNwW/JS.png', hint: 'toyota corolla hybrid' },
  },
];

export default function GallerySection() {
  const [selectedVehicle, setSelectedVehicle] = React.useState<string | null>(null);

  const handleSelectVehicle = (vehicle: string) => {
    setSelectedVehicle(prev => prev === vehicle ? null : vehicle);
  }

  return (
    <section id="galeria" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center">
            <TextHoverEffect text="Galería" as="h2" className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl" />
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
            Resultados que hablan por sí mismos. La transformación es nuestra especialidad.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-16">
          {galleryItems.map((item) => (
            <div key={item.vehicle} className="flex flex-col items-center gap-6">
              <h3 
                className="font-headline text-4xl text-primary cursor-pointer"
                onClick={() => handleSelectVehicle(item.vehicle)}
              >
                {item.vehicle}
              </h3>
              <div 
                  className={cn(
                      "relative w-full max-w-3xl transition-all duration-300",
                      selectedVehicle === item.vehicle && "ring-4 ring-primary ring-offset-4 ring-offset-background"
                  )}
                  onClick={() => handleSelectVehicle(item.vehicle)}
              >
                  <Dialog>
                      <DialogTrigger asChild>
                          <Image
                              src={item.image.src}
                              alt={item.vehicle}
                              width={1200}
                              height={675}
                              className="w-full h-auto rounded-lg object-cover cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
                              data-ai-hint={item.image.hint}
                          />
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                          <DialogHeader className="sr-only">
                            <DialogTitle>{item.vehicle}</DialogTitle>
                            <DialogDescription>Imagen ampliada del {item.vehicle}.</DialogDescription>
                          </DialogHeader>
                          <Image
                          src={item.image.src}
                          alt={item.vehicle}
                          width={1200}
                          height={675}
                          className="w-full h-auto rounded-lg"
                          data-ai-hint={item.image.hint}
                          />
                      </DialogContent>
                  </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
