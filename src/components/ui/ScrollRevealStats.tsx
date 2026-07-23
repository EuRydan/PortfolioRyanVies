"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ScrollRevealStats() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when the user scrolls past 100px
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    
    // Check initial position just in case
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16"
    >
      <div className="col-span-2">
        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>50+</h3>
        <p className="text-zinc-400 text-sm sm:text-base">Clientes atendidos</p>
      </div>
      <div className="col-span-2">
        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Design</h3>
        <p className="text-zinc-400 text-sm sm:text-base">Estratégico & Visual</p>
      </div>
      <div className="col-span-2">
        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Produtos Digitais</h3>
        <p className="text-zinc-400 text-sm sm:text-base">Desenvolvimento</p>
      </div>
    </motion.div>
  );
}
