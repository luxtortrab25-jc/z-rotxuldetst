
'use client';
import * as React from 'react';
import { Star } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "El nivel de detalle es simplemente increíble. Mi coche nunca se había visto tan bien. ¡Servicio de primera!",
    author: "Carlos R.",
    rating: 5,
  },
  {
    quote: "Profesionalismo y pasión en cada paso. La aplicación del PPF fue perfecta. Totalmente recomendados.",
    author: "Sofia C.",
    rating: 5,
  },
  {
    quote: "Superaron mis expectativas. El tratamiento cerámico dejó la pintura con un brillo espectacular y profundo.",
    author: "Javier M.",
    rating: 5,
  },
];

const InteractiveStarRating = ({ initialRating }: { initialRating: number }) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  const [displayRating, setDisplayRating] = React.useState(initialRating);

  React.useEffect(() => {
    setDisplayRating(hoverRating > 0 ? hoverRating : initialRating);
  }, [hoverRating, initialRating]);

  return (
    <div 
      className="flex items-center gap-1"
      onMouseLeave={() => setHoverRating(0)}
    >
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <Star
            key={i}
            onMouseEnter={() => setHoverRating(starValue)}
            className={cn(
              "h-6 w-6 cursor-pointer transition-all duration-200",
              starValue <= displayRating ? "text-primary fill-primary" : "text-muted-foreground/50",
              hoverRating === 5 && starValue === 5 ? "transform scale-125" : ""
            )}
          />
        );
      })}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
            Testimonios
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-xl">
            La satisfacción de nuestros clientes es nuestro mejor aval.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <CardContainer key={index} className="inter-var">
                <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-primary/20 w-auto h-auto rounded-xl p-8 border border-border">
                    <CardItem translateZ="50">
                        <InteractiveStarRating initialRating={testimonial.rating} />
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-xl max-w-sm mt-4 font-body italic"
                    >
                       "{testimonial.quote}"
                    </CardItem>
                     <CardItem
                        translateZ="50"
                        className="text-primary font-bold text-xl mt-6"
                     >
                        - {testimonial.author}
                    </CardItem>
                </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
