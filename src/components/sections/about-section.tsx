import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="relative py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-headline text-5xl font-black uppercase text-primary md:text-7xl">
            ¿Quiénes Somos?
          </h2>
          <p className="mt-6 font-body text-xl leading-relaxed text-foreground md:text-2xl">
            En Luxtor Detail Studio somos un estudio especializado en el detallado automotriz de alto nivel. Nos apasiona transformar y proteger cada vehículo que llega a nuestras manos, combinando precisión, tecnología y los mejores materiales del mercado. Trabajamos con una visión enfocada en la estética, la durabilidad y el valor de tu auto. Nuestro equipo está conformado por profesionales altamente capacitados en la aplicación de recubrimrimientos protectores y personalización vehicular, garantizando resultados premium que cumplen con los más altos estándares de calidad.
          </p>
        </div>
      </div>
    </section>
  );
}
