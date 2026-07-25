"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

export function ProjectSplitLayout({
  leftImages,
  rightContent,
  leftBg = 'bg-zinc-900',
}: {
  leftImages: React.ReactNode[];
  rightContent: React.ReactNode;
  leftBg?: string;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const [outerHeight, setOuterHeight] = useState(0);
  const [textOffset, setTextOffset] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Detecta tamanho de tela
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    setIsMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const recalculate = useCallback(() => {
    if (!isDesktop || !rightInnerRef.current || !leftInnerRef.current) return;
    const vh = window.innerHeight;
    const textH = rightInnerRef.current.scrollHeight;
    const imagesH = leftInnerRef.current.scrollHeight;
    const textScrollMax = Math.max(0, textH - vh);
    const imagesScrollMax = Math.max(0, imagesH - vh);
    setOuterHeight(vh + textScrollMax + imagesScrollMax);
  }, [isDesktop]);

  useEffect(() => {
    recalculate();
    const t1 = setTimeout(recalculate, 400);
    const t2 = setTimeout(recalculate, 1200);
    window.addEventListener("resize", recalculate);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", recalculate);
    };
  }, [recalculate]);

  useEffect(() => {
    const onScroll = () => {
      if (!isDesktop || !outerRef.current || !rightInnerRef.current || !leftInnerRef.current) return;
      const vh = window.innerHeight;
      const textH = rightInnerRef.current.scrollHeight;
      const imagesH = leftInnerRef.current.scrollHeight;
      const outerTop = outerRef.current.getBoundingClientRect().top;
      const scrolledIn = Math.max(0, -outerTop);
      const textScrollMax = Math.max(0, textH - vh);
      const imagesScrollMax = Math.max(0, imagesH - vh);
      setTextOffset(Math.min(scrolledIn, textScrollMax));
      setImageOffset(Math.min(Math.max(0, scrolledIn - textScrollMax), imagesScrollMax));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [outerHeight, isDesktop]);

  // ─── MOBILE ────────────────────────────────────────────────────────────────
  // Aguarda montar para evitar flash; renderiza mobile se não for desktop
  if (!isMounted || !isDesktop) {
    return (
      <div className="w-full lg:hidden">
        {/* Texto primeiro no mobile */}
        <div className="w-full bg-white px-5 py-10 pt-20">
          {rightContent}
        </div>

        {/* Imagens empilhadas abaixo */}
        <div className={`w-full ${leftBg}`}>
          {leftImages.map((img, i) => (
            <div key={i} className="w-full">{img}</div>
          ))}
        </div>
      </div>
    );
  }

  // ─── DESKTOP ───────────────────────────────────────────────────────────────
  return (
    <div ref={outerRef} className="hidden lg:block" style={{ height: outerHeight || "auto" }}>
      {/* Sticky 100vh — janela fixa dividida ao meio */}
      <div className="sticky top-0 w-full overflow-hidden flex" style={{ height: "100vh" }}>

        {/* ESQUERDA: imagens paradas na fase 1, sobem na fase 2 */}
        <div className={`w-1/2 ${leftBg} overflow-hidden flex-shrink-0 h-full`}>
          <div
            ref={leftInnerRef}
            className="flex flex-col w-full"
            style={{ transform: `translateY(-${imageOffset}px)`, willChange: "transform" }}
          >
            {leftImages.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0">{img}</div>
            ))}
          </div>
        </div>

        {/* DIREITA: texto sobe na fase 1 até ícones aparecerem, depois trava */}
        <div className="w-1/2 bg-white overflow-hidden flex-shrink-0 h-full">
          <div
            ref={rightInnerRef}
            className="flex flex-col px-8 py-10 lg:px-16 lg:pt-12 lg:pb-24 xl:px-24"
            style={{ transform: `translateY(-${textOffset}px)`, willChange: "transform" }}
          >
            {rightContent}
          </div>
        </div>

      </div>
    </div>
  );
}
