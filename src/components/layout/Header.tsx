"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-zinc-100">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          vieslab.md
        </Link>
        
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 -mr-2 text-black hover:bg-zinc-100 rounded-md transition-colors"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-50 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-black hover:bg-zinc-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col gap-4 p-8">
          <Link href="/" className="text-2xl font-medium text-zinc-900 hover:text-black transition-colors" onClick={() => setIsDrawerOpen(false)}>
            Início
          </Link>
          <Link href="/sobre" className="text-2xl font-medium text-zinc-900 hover:text-black transition-colors" onClick={() => setIsDrawerOpen(false)}>
            Sobre
          </Link>
          <Link href="/contato" className="text-2xl font-medium text-zinc-900 hover:text-black transition-colors" onClick={() => setIsDrawerOpen(false)}>
            Contato
          </Link>
        </nav>
      </div>
    </>
  );
}
