"use client";

import { useState, useEffect } from "react";

export function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Evita erro de hydration: só seta a hora no client
    const updateClock = () => {
      const now = new Date();
      // Formata a hora considerando o fuso de SP/Rio
      const formatted = now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
      RIO DE JANEIRO, {time || "00:00:00"}
    </span>
  );
}
