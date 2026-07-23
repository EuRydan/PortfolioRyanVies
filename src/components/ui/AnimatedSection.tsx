"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  effect?: 'slide' | 'pop';
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  effect = 'slide',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const slideInitial = { opacity: 0, y: 30 };
  const slideAnimate = { opacity: 1, y: 0 };
  
  const popInitial = { opacity: 0, scale: 0.85, y: 20 };
  const popAnimate = { opacity: 1, scale: 1, y: 0 };

  const initial = effect === 'pop' ? popInitial : slideInitial;
  const animate = effect === 'pop' ? (isInView ? popAnimate : popInitial) : (isInView ? slideAnimate : slideInitial);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={
        effect === 'pop' 
        ? {
            duration: 0.6,
            delay,
            type: "spring",
            bounce: 0.35,
          }
        : {
            duration: 0.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
