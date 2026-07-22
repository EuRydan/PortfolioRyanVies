"use client";

import { motion } from "framer-motion";
import { CaseCover } from "./CaseCover";

const placeholderCases = [
  { slug: "korre-club", title: "Korre Club", aspectRatio: "video" as const, coverImage: "/banner-korre-club.png" },
  { slug: "LIC", title: "LIC", aspectRatio: "video" as const, coverImage: "/lic.svg" },
  { slug: "level-up", title: "Level Up", aspectRatio: "video" as const, coverImage: "/level-up.webp" },
  { slug: "teainter", title: "TEAINTER", aspectRatio: "video" as const, coverImage: "/teainter.gif" },
  { slug: "gn", title: "Gigantes de Nazaré", aspectRatio: "video" as const, coverImage: "/GN.gif" },
  { slug: "memvor", title: "Memvor.app", aspectRatio: "video" as const, coverImage: "/Memvor.svg" },
];

export function MasonryGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {placeholderCases.map((caseItem, i) => (
          <motion.div
            key={caseItem.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <CaseCover {...caseItem} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
