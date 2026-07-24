"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/logo%20branco%20memvor.svg", className: "scale-75", keepOriginalColor: true }, // Diminuído para equilibrar com os demais
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
  { src: "/Logo%20TSB-14.png", className: "scale-[2.5]" }, // Aumentado por conta da borda transparente
  { src: "/condor.svg", className: "" },
];

export function ClientCarousel() {
  // Separamos as logos em duas linhas, 8 em cima, 8 embaixo
  const topLogos = logos.slice(0, 8);
  const bottomLogos = logos.slice(8, 16);

  // Duplicamos o array várias vezes para preencher a tela atual e para o loop contínuo
  const duplicatedTopLogos = [...topLogos, ...topLogos, ...topLogos, ...topLogos, ...topLogos, ...topLogos, ...topLogos, ...topLogos];
  const duplicatedBottomLogos = [...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos];

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
        {duplicatedTopLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-[80px] h-[80px] md:w-[156px] md:h-[156px] shrink-0 mr-6 md:mr-16">
            <img 
              src={logo.src} 
              alt="Cliente Logo" 
              className={`max-h-8 max-w-[64px] md:max-h-12 md:max-w-[120px] w-auto object-contain shrink-0 ${logo.keepOriginalColor ? '' : 'brightness-0 invert'} ${logo.className || ''}`}
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
        {duplicatedBottomLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-[80px] h-[80px] md:w-[156px] md:h-[156px] shrink-0 mr-6 md:mr-16">
            <img 
              src={logo.src} 
              alt="Cliente Logo" 
              className={`max-h-8 max-w-[64px] md:max-h-12 md:max-w-[120px] w-auto object-contain shrink-0 ${logo.keepOriginalColor ? '' : 'brightness-0 invert'} ${logo.className || ''}`}
            />
          </div>
        ))}
      </motion.div>

    </div>
  );
}
