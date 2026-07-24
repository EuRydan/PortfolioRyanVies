"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Efeito parallax vertical clássico
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden bg-zinc-950 pointer-events-none">
      <motion.div 
        style={{ y }} 
        className="absolute w-full h-[calc(100%+200px)] -top-[100px] left-0"
      >
        <div 
          className="w-full h-full opacity-40 mix-blend-lighten"
          style={{ 
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>
      
      {/* Gradientes apenas na vertical para suavizar o final */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
    </div>
  );
}
