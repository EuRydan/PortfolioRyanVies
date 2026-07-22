"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
      className="fixed top-6 left-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 lg:top-8 lg:left-8"
    >
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative flex h-3 w-3 flex-col justify-between"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 5 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-[2px] w-full bg-white block"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          className="h-[2px] w-full bg-white block"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -5 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-[2px] w-full bg-white block"
        />
      </motion.div>
    </button>
  );
}
