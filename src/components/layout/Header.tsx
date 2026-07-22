"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Ignore tiny scrolls to prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      // Hide if scrolling down and past the very top, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between py-[27px] px-0 bg-transparent">
          <Link href="/" className="mix-blend-difference">
            <img src="/logo%20vies.svg" alt="vieslab.md logo" className="h-[28px] w-[83px] object-contain" />
          </Link>
          
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 -mr-2 text-white mix-blend-difference cursor-pointer"
            aria-label="Open menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
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
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[50vw] md:w-[40vw] bg-zinc-900 shadow-2xl z-50 transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 md:p-8">
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-zinc-400 hover:text-[#d75310] transition-colors"
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col flex-1 w-full px-8 sm:px-10 md:px-12">
          <nav className="flex flex-col justify-center items-start gap-4 md:gap-5 flex-1 overflow-y-auto overflow-x-hidden">
            <Link href="/" className={`text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-300 hover:text-[#d75310] transition-all duration-500 delay-100 ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onClick={() => setIsDrawerOpen(false)} style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              Início
            </Link>
            <Link href="/#quem-somos" className={`text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-300 hover:text-[#d75310] transition-all duration-500 delay-150 ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onClick={() => setIsDrawerOpen(false)} style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              Quem Somos
            </Link>
            <Link href="/#portfolio" className={`text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-300 hover:text-[#d75310] transition-all duration-500 delay-200 ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onClick={() => setIsDrawerOpen(false)} style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              Portfólio
            </Link>
            <Link href="/#o-que-fazemos" className={`text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-300 hover:text-[#d75310] transition-all duration-500 delay-300 ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onClick={() => setIsDrawerOpen(false)} style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              O Que Fazemos
            </Link>
            <Link href="/fale-conosco" className={`text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-300 hover:text-[#d75310] transition-all duration-500 delay-[400ms] ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onClick={() => setIsDrawerOpen(false)} style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              Fale Conosco
            </Link>
          </nav>

          <div className={`pb-8 md:pb-12 mt-auto flex items-center justify-start gap-5 transition-all duration-500 delay-[500ms] ${isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#d75310] transition-colors" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://wa.me/5521978949944" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#d75310] transition-colors" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
