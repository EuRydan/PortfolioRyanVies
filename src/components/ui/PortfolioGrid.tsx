"use client";

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  tag: string;
  img: string;
  customClass?: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

const CATEGORIES = ["Todos", "Branding", "Id. Visual", "Produto", "UX"];

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Todos") return true;
    
    const tagUpper = project.tag.toUpperCase();
    const catUpper = activeCategory.toUpperCase();
    
    // Check direct inclusion
    if (tagUpper.includes(catUpper)) return true;
    
    // Normalizations for matching
    if (catUpper === "ID. VISUAL" && tagUpper.includes("ID VISUAL")) return true;
    if (catUpper === "UX" && tagUpper.includes("UX")) return true;
    
    return false;
  });

  return (
    <div className="w-full max-w-[1920px] mx-auto mt-12 md:mt-20">
      
      {/* Filtros */}
      <div className="px-6 md:px-14 lg:px-24 mb-10 flex flex-wrap gap-6 sm:gap-8 items-center justify-end">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base transition-colors duration-300 ${
              activeCategory === category 
                ? 'text-white font-semibold' 
                : 'text-zinc-400 hover:text-white font-normal'
            }`}
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Projetos de 4 em 4 */}
      <motion.div layout className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px]">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedSection delay={0.1 * (index % 4)} effect="pop">
                <Link href={`/portfolio/${project.id}`} className="block h-full">
                  <div className="group cursor-crosshair relative w-full aspect-square bg-zinc-800 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={`Capa do projeto ${project.title}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.customClass || ''}`}
                    />
                    {/* Overlay gradiente para garantir leitura do texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                          {project.title}
                        </h3>
                        <span className="text-[#d75310] uppercase text-[10px] md:text-xs tracking-[0.2em] mt-2 font-bold block">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="w-full py-20 flex justify-center items-center text-zinc-500 uppercase tracking-widest text-sm">
          Nenhum projeto encontrado nesta categoria.
        </div>
      )}
    </div>
  );
}
