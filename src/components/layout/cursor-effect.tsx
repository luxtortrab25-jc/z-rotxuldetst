
'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffect() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 200, mass: 0.3 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = React.useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const cursorSize = 60; // Size of the effect
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }, [mouse.x, mouse.y]);

  React.useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      className="pointer-events-none fixed z-[999]"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, hsla(var(--primary), 0.8) 0%, hsla(var(--primary), 0) 60%)',
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  );
}
