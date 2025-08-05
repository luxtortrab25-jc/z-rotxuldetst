
'use client';
import * as React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import LocationSection from '@/components/sections/location-section';
import SplashScreen from '@/components/layout/splash-screen';
import RegistrationPopup from '@/components/layout/registration-popup';

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [cursorPos, setCursorPos] = React.useState({ x: -200, y: -200 });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('splashScreenShown')) {
        setIsLoading(false);
      } else {
        sessionStorage.setItem('splashScreenShown', 'true');
      }
    }
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        if (!sessionStorage.getItem('popupShown')) {
          setPopupOpen(true);
          sessionStorage.setItem('popupShown', 'true');
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (!isLoading) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoading]);

  return (
    <div className="flex min-h-screen flex-col relative home-page-cursor-effect">
      {isLoading && <SplashScreen onAnimationComplete={() => setIsLoading(false)} />}
      
      <RegistrationPopup isOpen={isPopupOpen} onOpenChange={setPopupOpen} />
      
      {!isLoading && (
        <div 
          className="pointer-events-none fixed inset-0 z-[999] transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px at ${cursorPos.x}px ${cursorPos.y}px, hsla(41, 65%, 57%, 0.35), transparent 80%)`
          }}
        />
      )}
      
      <Header />
      <SocialBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
