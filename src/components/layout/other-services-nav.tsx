
'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: "PPF", href: "/servicios/ppf" },
  { title: "Wrap", href: "/servicios/wrap" },
  { title: "Película de Seguridad", href: "/servicios/pelicula-de-seguridad" },
  { title: "Tratamiento Cerámico", href: "/servicios/tratamiento-ceramico" },
];

interface OtherServicesNavProps {
  currentServiceHref: string;
}

export default function OtherServicesNav({ currentServiceHref }: OtherServicesNavProps) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  const otherServices = services.filter(service => service.href !== currentServiceHref);

  return (
    <div className="container py-12 md:hidden">
      <h3 className="text-center font-headline text-2xl font-bold uppercase text-primary mb-6">
        Ver Otros Servicios
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {otherServices.map(service => (
          <Button key={service.href} asChild variant="outline" size="lg" className="justify-between">
            <Link href={service.href}>
              {service.title}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
