"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function QuoteButton() {
  return (
    <Link
      href="/fale-conosco"
      className="inline-flex items-center justify-center px-6 py-3 bg-[#d75310] hover:bg-[#b5460e] transition-colors text-white font-bold tracking-[0.15em] text-xs uppercase rounded-none"
      style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
    >
      Fazer Orçamento
    </Link>
  );
}
