"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/logo%20branco%20memvor.svg", className: "scale-75" }, // Diminuído para equilibrar com os demais
  { src: "/BCS%20RIO.svg", className: "" },
  { src: "/ASA%20logo%20horizontal%20100%25%20branco.svg", className: "" },
  { src: "/Teainter%20Horizontal%20Branco.png", className: "" },
  { src: "/lic%20logo.svg", className: "" },
  { src: "/Gigantes%20de%20Nazaré_1.svg", className: "" },
  { src: "/Cópia%20de%20Ativo%2010-8.png", className: "" },
  { src: "/Pizzaria%20Fratelli.svg", className: "" },
  { src: "/Ativo%2024.svg", className: "" },
  { src: "/Cópia%20de%20Ativo%204.png", className: "" },
  { src: "/Ativo%208.png", className: "" },
  { src: "/7horizontal-YyvZMZ8815u5QOKP.svg", className: "" },
  { src: "/Nogueira%20Arquitetos.svg", className: "" },
  { src: "/logo_genesis.svg", className: "" },
];

export function ClientCarousel() {
  // Duplicamos o array 4 vezes: 2 para preencher a tela atual e 2 para o loop contínuo
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden relative flex flex-col gap-12 py-6">
      
      {/* Primeira Linha (Movimento para a esquerda) */}
      <motion.div 
        className="flex items-center w-max"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          ease: "linear",
          duration: 120, // Ajuste de velocidade bem mais lento
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-[156px] h-[156px] shrink-0 mr-10 md:mr-16">
            <img 
              src={logo.src} 
              alt="Cliente Logo" 
              className={`max-h-12 max-w-[120px] w-auto object-contain brightness-0 invert shrink-0 ${logo.className || ''}`}
            />
          </div>
        ))}
      </motion.div>

      {/* Segunda Linha (Movimento para a direita) */}
      <motion.div 
        className="flex items-center w-max"
        animate={{
          x: ["-50%", "0%"]
        }}
        transition={{
          ease: "linear",
          duration: 140, // Velocidade um pouco diferente para efeito visual
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-[156px] h-[156px] shrink-0 mr-10 md:mr-16">
            <img 
              src={logo.src} 
              alt="Cliente Logo" 
              className={`max-h-12 max-w-[120px] w-auto object-contain brightness-0 invert shrink-0 ${logo.className || ''}`}
            />
          </div>
        ))}
      </motion.div>

    </div>
  );
}
