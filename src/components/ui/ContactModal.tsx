"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-radius-lg border border-border-light bg-bg-elevated p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 id="contact-modal-title" className="text-xl font-medium text-text">
                Entrar em contato
              </h2>
              <button
                onClick={onClose}
                className="rounded-radius-sm p-1 text-text-muted hover:bg-bg hover:text-text transition-colors"
                aria-label="Fechar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); /* Integrar na Fase 3 */ }}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-text">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="rounded-radius-md border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-text">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="rounded-radius-md border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text">Mensagem</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="resize-y rounded-radius-md border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                  placeholder="Como posso ajudar?"
                />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-radius-md px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-bg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-radius-md bg-text px-4 py-2 text-sm font-medium text-bg-elevated hover:bg-text/90 transition-colors"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
