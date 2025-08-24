
'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      {...props}
    >
      <path
        d="M89.3929 27.2104L88.2329 24.3604C87.6829 23.0104 86.4229 22.1804 85.0329 22.1804H69.5829L66.5229 15.6104C65.5229 13.4304 63.3129 12.0004 60.8829 12.0004H29.5329C26.8829 12.0004 24.5829 13.6104 23.6629 16.0304L21.0729 22.1804H14.9229C13.5629 22.1804 12.3929 23.0104 11.7729 24.2804L10.5129 27.1104C7.15293 28.5304 5.33293 32.3204 6.13293 36.0004C6.58293 38.0704 8.30293 39.5804 10.3929 39.7304C10.5329 39.7504 10.6829 39.7504 10.8229 39.7504H13.6029C13.9129 39.7504 14.2029 39.5504 14.3329 39.2604L15.3529 36.9304C15.5429 36.4804 16.0029 36.1804 16.5129 36.1804H31.0629C31.5729 36.1804 32.0329 36.4804 32.2229 36.9304L33.2429 39.2604C33.3729 39.5504 33.6629 39.7504 33.9729 39.7504H63.8229C64.1329 39.7504 64.4229 39.5504 64.5529 39.2604L65.5729 36.9304C65.7629 36.4804 66.2229 36.1804 66.7329 36.1804H81.2829C81.7929 36.1804 82.2529 36.4804 82.4429 36.9304L83.4629 39.2604C83.5929 39.5504 83.8829 39.7504 84.1929 39.7504H89.1229C91.6029 39.7504 93.6529 37.8904 93.8529 35.4304C94.1329 32.2304 92.4329 29.2104 89.3929 27.2104Z"
        stroke="#D1A354"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );

const CarRow = ({ speed, opacity }: { speed: number, opacity: number }) => (
    <div
      className="absolute flex"
      style={{ animation: `scroll ${speed}s linear infinite`, opacity: opacity }}
    >
      <div className="flex w-[200vw]">
        {[...Array(40)].map((_, i) => (
          <CarIcon key={i} className="flex-shrink-0" />
        ))}
      </div>
    </div>
  );

export default function HeroSection() {
    return (
      <section 
        id="inicio" 
        className="relative h-screen w-full bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Cars Background */}
          <CarRow speed={20} opacity={0.3} />
          <CarRow speed={30} opacity={0.2} />
          <CarRow speed={45} opacity={0.15} />
          <CarRow speed={60} opacity={0.1} />
        </div>
  
        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white px-4">
          <div className="flex w-full flex-col items-center p-4 sm:p-8 rounded-lg bg-black">
              <h1 className="font-headline text-6xl sm:text-8xl lg:text-8xl xl:text-[9rem] font-black uppercase tracking-widest text-gradient-gold break-words">
                  LUXTOR
              </h1>
              <h2 className="mt-4 font-headline text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                ¡Dale a tu coche un acabado <span className="font-headline uppercase tracking-widest text-gradient-gold">IMPECABLE!</span>
              </h2>
              <p className="mt-4 max-w-2xl font-headline text-lg sm:text-2xl">
                Estética automotriz premium
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                      asChild
                      size="lg"
                      className="whatsapp-button text-xl sm:text-2xl px-8 sm:px-12 py-6 sm:py-10"
                  >
                      <Link href="https://api.whatsapp.com/send?phone=5215549361690&text=Hola%20%F0%9F%91%8B%20%0ATengo%20un%20%5Bauto%5D%20y%20me%20interesa%20el%20servicio%20de%20%5Bnombre%20del%20servicio%5D.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-3 h-6 w-6 sm:h-8 sm:w-8" />
                          ¡Agenda por WhatsApp!
                      </Link>
                  </Button>
              </div>
          </div>
        </div>
      </section>
    );
  }
