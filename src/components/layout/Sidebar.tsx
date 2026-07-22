"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactModal } from "@/components/ui/ContactModal";
import { LiveClock } from "@/components/ui/LiveClock";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Container fixo da gaveta */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.aside 
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-40 flex h-screen w-full shrink-0 flex-col justify-between bg-white px-6 pt-24 pb-12 shadow-[4px_0_24px_rgba(0,0,0,0.02)] sm:w-80 lg:w-96 lg:px-12 lg:pt-28 lg:pb-12 border-r border-zinc-100"
          >
            {/* Topo / Bio */}
            <div className="flex flex-col gap-6">
              <h1 className="text-[14px] font-medium uppercase tracking-widest text-zinc-900">
                Ryan Ferreira
              </h1>
              
              <p className="text-[15px] leading-relaxed text-zinc-700">
                Designer brasileiro com 7+ anos criando marcas e produtos digitais, do design ao código. Atualmente disponível para projetos independentes.
              </p>

              {/* Botões Utilitários Mono */}
              <nav className="mt-4 flex flex-wrap gap-2" aria-label="Navegação utilitária">
                <a 
                  href="/info"
                  className="inline-flex h-8 items-center justify-center rounded-full bg-zinc-900 px-4 font-mono text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-zinc-800"
                >
                  Info
                </a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex h-8 items-center justify-center rounded-full bg-zinc-900 px-4 font-mono text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 cursor-pointer"
                >
                  Contato
                </button>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded-full bg-zinc-900 px-4 font-mono text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-zinc-800"
                >
                  LinkedIn ↗
                </a>
              </nav>
            </div>

            {/* Rodapé da Sidebar */}
            <div className="mt-16 flex items-center justify-between lg:mt-0">
              <LiveClock />
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                PT · EN
              </span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
