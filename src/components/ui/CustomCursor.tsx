"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    // 1. Oculta o cursor nativo no CSS apenas se for dispositivo com mouse (fine pointer)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) {
      if (ref.current) ref.current.style.display = "none";
      return;
    }

    document.documentElement.classList.add("custom-cursor");
    
    const move = (e: MouseEvent) => {
      if (ref.current) {
        // Revela o cursor apenas no primeiro movimento de mouse
        if (ref.current.style.opacity === "0") {
          ref.current.style.opacity = "1";
        }
        ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const linkOrButton = target.closest("a, button");
      const caseCover = target.closest("[data-cursor-text]");

      if (caseCover) {
        const cursorText = caseCover.getAttribute("data-cursor-text");
        setText(cursorText);
        if (ref.current) {
          ref.current.classList.remove("is-hovering");
          ref.current.classList.add("has-text");
        }
      } else if (linkOrButton) {
        setText(null);
        if (ref.current) {
          ref.current.classList.remove("has-text");
          ref.current.classList.add("is-hovering");
        }
      } else {
        setText(null);
        if (ref.current) {
          ref.current.classList.remove("is-hovering");
          ref.current.classList.remove("has-text");
        }
      }
    };

    // Usando mousemove para garantir compatibilidade 100% no desktop
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className="cursor-dot" 
      style={{ opacity: 0 }} 
      aria-hidden="true" 
    >
      {text && <span className="cursor-text">{text}</span>}
    </div>
  );
}
