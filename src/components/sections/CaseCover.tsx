"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseCoverProps {
  slug: string;
  title: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
  coverImage?: string;
}

export function CaseCover({ slug, title, aspectRatio = "auto", coverImage }: CaseCoverProps) {
  // Proporções para o grid masonry
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "aspect-auto h-64 sm:h-96", 
  };

  return (
    <Link 
      href={`/cases/${slug}`} 
      data-cursor-text={title}
      className="group block w-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
    >
      <motion.div
        className={`relative flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#F4F4F5] p-8 transition-colors duration-300 group-hover:bg-[#E5E7EB] ${aspectClasses[aspectRatio]}`}
        whileHover={{ scale: 0.995 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {coverImage ? (
          <div className="relative w-[88%] aspect-video overflow-hidden rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <Image 
              src={coverImage} 
              alt={`Capa do projeto ${title}`} 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
            />
          </div>
        ) : (
          <div className="flex w-[88%] aspect-video items-center justify-center rounded-md border-2 border-dashed border-zinc-300 bg-zinc-50/50">
            <span className="font-mono text-[11px] font-medium tracking-wider uppercase text-zinc-400">
              [CAPA PENDENTE] {title}
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
