"use client";

import { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Criação de sites em Duque de Caxias: quanto custa em 2026',
    categories: ['Criação de sites', 'Site no RJ'],
    date: '24 Jul 2026',
    image: '/capa-artigo.jpg',
    slug: '/blog/criacao-de-sites-em-duque-de-caxias',
    excerpt: 'Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preço reais, o que muda o valor e como contratar sem cair em armadilha.'
  }
];

const categories = ['Todos', 'Criação de sites', 'Criação de produto digital', 'Conversão e landing pages', 'Site no RJ'];

export function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredArticles = activeCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.categories.includes(activeCategory));

  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 mt-16 md:mt-24">
      
      {/* Categories Filter */}
      <AnimatedSection className="flex flex-wrap gap-3 md:gap-4 mb-16">
        {categories.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <button 
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                isActive 
                  ? 'bg-[#d75310] text-white' 
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          );
        })}
      </AnimatedSection>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <AnimatedSection key={article.id} delay={0.1 * index}>
              <Link href={article.slug} className="group flex flex-col h-full bg-zinc-800/10 hover:bg-zinc-800/30 rounded-xl transition-colors overflow-hidden">
                
                {/* Imagem de Capa do Artigo */}
                <div className="relative aspect-video w-full bg-zinc-800 flex items-center justify-center">
                  {article.image ? (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wider font-bold">Imagem do Post</span>
                  )}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {article.categories.map((cat, idx) => (
                      <span key={idx} className="bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-md">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <span className="text-[#d75310] text-xs font-semibold tracking-wider mb-2">{article.date}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#d75310] transition-colors leading-snug" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                    {article.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-5 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-white font-bold uppercase tracking-wider text-xs group-hover:text-[#d75310] transition-colors">
                    Ler Artigo
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))
        ) : (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-zinc-500">
            <p>Nenhum artigo publicado nesta categoria ainda.</p>
          </div>
        )}
      </div>

    </section>
  );
}
