"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/clients/memvor.svg", className: "scale-75", keepOriginalColor: true },
  { src: "/clients/bcs-rio.svg", className: "" },
  { src: "/clients/asa.svg", className: "" },
  { src: "/clients/teainter.png", className: "" },
  { src: "/clients/lic.svg", className: "" },
  { src: "/clients/gigantes-de-nazare.svg", className: "" },
  { src: "/clients/alex-beiroz.png", className: "" },
  { src: "/clients/pizzaria-fratelli.svg", className: "" },
  { src: "/clients/condfire.svg", className: "" },
  { src: "/clients/oxfacili.png", className: "" },
  { src: "/clients/operatta.png", className: "" },
  { src: "/clients/wehold.svg", className: "" },
  { src: "/clients/nogueira-arquitetos.svg", className: "" },
  { src: "/clients/genesis.svg", className: "" },
  { src: "/clients/tsb.png", className: "scale-[2.5]" },
  { src: "/clients/condor.svg", className: "" },
];

export function ClientCarousel() {
  // Para criar a ilusão de esteira (conveyor belt), usamos todos os logos.
  // A linha de baixo tem a ordem invertida para parecer que o logo que saiu por um lado, volta pelo outro.
  const duplicatedTopLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  const reversedLogos = [...logos].reverse();
  const duplicatedBottomLogos = [...reversedLogos, ...reversedLogos, ...reversedLogos, ...reversedLogos, ...reversedLogos, ...reversedLogos];

  return (
    <div className="w-full overflow-hidden relative flex flex-col gap-4 py-6">
      
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
          duration: 120, // Mesma velocidade para manter a ilusão de esteira conectada
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
