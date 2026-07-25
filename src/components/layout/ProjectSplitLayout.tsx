"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

export function ProjectSplitLayout({
  leftImages,
  rightContent,
}: {
  leftImages: React.ReactNode[];
  rightContent: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const [outerHeight, setOuterHeight] = useState(0);
  const [textOffset, setTextOffset] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);

  const recalculate = useCallback(() => {
    if (!rightInnerRef.current || !leftInnerRef.current) return;
    const vh = window.innerHeight;
    const textH = rightInnerRef.current.scrollHeight;
    const imagesH = leftInnerRef.current.scrollHeight;

    // Fase 1: texto sobe (textH - vh) px até os ícones aparecerem
    const textScrollMax = Math.max(0, textH - vh);
    // Fase 2: imagens sobem (imagesH - vh) px
    const imagesScrollMax = Math.max(0, imagesH - vh);

    // Container precisa ter espaço para as duas fases + 1vh visível
    setOuterHeight(vh + textScrollMax + imagesScrollMax);
  }, []);

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
      if (!outerRef.current || !rightInnerRef.current || !leftInnerRef.current) return;

      const vh = window.innerHeight;
      const textH = rightInnerRef.current.scrollHeight;
      const imagesH = leftInnerRef.current.scrollHeight;

      const outerTop = outerRef.current.getBoundingClientRect().top;
      const scrolledIn = Math.max(0, -outerTop);

      const textScrollMax = Math.max(0, textH - vh);
      const imagesScrollMax = Math.max(0, imagesH - vh);

      // Fase 1: só texto sobe, imagens paradas
      setTextOffset(Math.min(scrolledIn, textScrollMax));

      // Fase 2: texto travado, imagens começam a subir
      setImageOffset(Math.min(Math.max(0, scrolledIn - textScrollMax), imagesScrollMax));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [outerHeight]);

  return (
    // Outer: define a altura total de scroll desta seção
    <div ref={outerRef} style={{ height: outerHeight || "auto" }}>

      {/* Inner: sticky 100vh — janela fixa que mostra os dois lados */}
      <div className="sticky top-0 w-full overflow-hidden flex" style={{ height: "100vh" }}>

        {/* ESQUERDA: imagens. Ficam paradas na fase 1, sobem na fase 2 */}
        <div className="w-1/2 bg-zinc-900 overflow-hidden flex-shrink-0 h-full">
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

        {/* DIREITA: texto. Sobe na fase 1 até ícones aparecerem, depois trava */}
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
