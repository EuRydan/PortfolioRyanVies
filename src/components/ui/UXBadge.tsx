"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function UXBadge({ className }: { className?: string } = {}) {
  return (
    <motion.a 
      href="https://www.uxdesigninstitute.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`shrink-0 flex items-center justify-center cursor-pointer ${className || ""}`}
      initial={{ rotate: -140, opacity: 0, scale: 0.8 }}
      whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Image 
        src="/marketing/ux-badge.png" 
        alt="Selo de Certificação em Experiência do Usuário" 
        width={160} 
        height={160} 
        className="w-20 h-20 sm:w-22 sm:h-22 xl:w-24 xl:h-24 object-contain drop-shadow-xl hover:scale-105 transition-transform" 
      />
    </motion.a>
  );
}
