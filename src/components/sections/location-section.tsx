export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-bold uppercase text-primary md:text-6xl">
            Ubicación
          </h2>
          <p className="mt-6 text-2xl font-body text-white">
            SAN JOSÉ 2A, MAGDALENA ATLAZOLPA, IZTAPALAPA, CIUDAD DE MÉXICO
          </p>
        </div>
        <div className="mt-12 h-[500px] w-full rounded-lg bg-card border border-border">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3763.861911156781!2d-99.111841!3d19.375131!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIyJzMwLjUiTiA5OcKwMDYnNDIuNiJX!5e0!3m2!1ses!2smx!4v1753279661394!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert-[90%] contrast-[1.2] rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
