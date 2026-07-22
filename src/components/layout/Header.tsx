"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "@/components/ui/ContactModal";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="pt-12 pb-8 sm:pt-20 sm:pb-12">
        <h1 className="text-sm font-medium text-text">Ryan Ferreira — Designer</h1>
        
        <div className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed text-text">
          <p>
            Designer de marca e produto com 7+ anos de experiência. Construo identidades visuais e interfaces digitais focadas em clareza, usabilidade e resultado. Baseado no Rio de Janeiro e disponível para novos projetos.
          </p>
        </div>

        <nav className="mt-6 flex items-center gap-6 text-sm" aria-label="Navegação principal">
          <Link href="/info" className="font-medium text-text-muted hover:text-text transition-colors">
            Info
          </Link>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="font-medium text-text-muted hover:text-text transition-colors cursor-pointer"
          >
            Contato
          </button>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-text-muted hover:text-text transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
