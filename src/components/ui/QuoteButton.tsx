"use client";

import { motion } from "framer-motion";

export function QuoteButton() {
  return (
    <button
      className="inline-flex items-center justify-center px-8 py-4 bg-[#d75310] hover:bg-[#b5460e] transition-colors text-white font-bold tracking-[0.15em] text-sm uppercase rounded-none"
      style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
    >
      Fazer Orçamento
    </button>
  );
}
