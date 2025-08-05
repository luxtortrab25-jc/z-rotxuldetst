
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Paint Protection Film (PPF)",
    image: "https://i.postimg.cc/JhX9L2hc/descargar-1.png",
    aiHint: "paint protection",
    href: "/servicios/ppf",
  },
  {
    title: "Wrap",
    image: "https://i.postimg.cc/ds8zNppJ/descargar-2.png",
    aiHint: "car wrap",
    href: "/servicios/wrap",
  },
  {
    title: "Película de Seguridad",
    image: "https://i.postimg.cc/BnKhL1GJ/descargar-3.png",
    aiHint: "security film",
    href: "/servicios/pelicula-de-seguridad",
  },
  {
    title: "Tratamiento Cerámico",
    image: "https://i.postimg.cc/W3hSVDSR/descargar-4.png",
    aiHint: "ceramic coating",
    href: "/servicios/tratamiento-ceramico",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-7xl">
            Servicios
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-2xl">
            Ofrecemos soluciones de vanguardia para la protección y estética de su vehículo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="block">
                <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 h-full">
                <CardHeader className="p-0">
                    <div className="relative h-56 w-full">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={service.aiHint}
                    />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl text-white md:text-3xl">
                    {service.title}
                    </CardTitle>
                </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
