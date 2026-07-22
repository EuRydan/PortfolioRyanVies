"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/Sidebar";
import { MenuToggle } from "@/components/ui/MenuToggle";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full bg-white">
      {/* Botão de abrir/fechar Menu Fixo */}
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Gaveta Lateral */}
      <Sidebar isOpen={isOpen} />

      {/* 
        Container Principal (Grid de Projetos) 
        Ele é animado para dar espaço à gaveta no desktop.
      */}
      <motion.main
        className="w-full px-2 pt-24 pb-24 lg:px-4 lg:py-4"
        animate={{
          // Em telas lg (desktop), empurra o conteúdo 96rem (384px) se a sidebar estiver aberta
          // Em mobile (x:0 ou x:100%), o grid não precisa ser empurrado, pois a sidebar pode cobrir ou não temos espaço
          marginLeft: isOpen ? "var(--sidebar-width, 384px)" : "0px",
          width: isOpen ? "calc(100% - var(--sidebar-width, 384px))" : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Usamos inline media queries no framer motion mas é complexo.
            Solução mais robusta: O framer motion anima CSS variables ou 
            animamos o x do main no mobile e margin no desktop.
            Como o prompt pede que empurre (deslize) e assuma 100% quando fechado,
            isso funciona no desktop perfeitamente. No mobile (onde 384px seria a tela quase toda), 
            a media query nativa do tailwind vai tratar a largura da sidebar,
            então usaremos uma custom property caso necessário, mas para simplificar:
            no mobile a sidebar sobrepõe o conteúdo ou empurra o conteúdo pra fora (off-canvas). 
            Empurrar é melhor. */}
        {children}
      </motion.main>
      
      {/* Estilo injetado para forçar a responsividade correta da animação */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          main {
            margin-left: 0 !important;
            width: 100% !important;
          }
        }
      `}} />
    </div>
  );
}
