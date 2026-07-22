"use client";

import { motion } from "framer-motion";

export function ScrollArrow() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.7)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        >
          <path d="M12 4v16"/>
          <path d="m6 14 6 6 6-6"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}
