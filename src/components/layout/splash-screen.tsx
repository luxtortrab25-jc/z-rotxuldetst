
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Reduced from 2500ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ clipPath: 'circle(150% at 50% 50%)' }}
      animate={{ clipPath: isAnimating ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)' }}
      transition={{ duration: 0.8, delay: 0.2 }} // Adjusted duration
      onAnimationComplete={() => {
        if (!isAnimating) {
          onAnimationComplete();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://i.postimg.cc/8PvwmpD1/luxtorr.png"
          alt="Luxtor Detail Studio Logo"
          width={400}
          height={400}
          className="h-auto w-auto max-w-[50vw] md:max-w-[300px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
