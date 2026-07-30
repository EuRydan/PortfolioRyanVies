import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import dynamic from 'next/dynamic';

const ClientCarousel = dynamic(() => import('@/components/ui/ClientCarousel').then(mod => mod.ClientCarousel));

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio de Projetos | Vies Studios',
  description: 'Conheça nossos cases de sucesso em design e desenvolvimento web. Projetos com alto impacto visual, tecnologia de ponta e resultados reais para nossos clientes.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/portfolio",
  },
};

const projects = [
  { id: 'memvor', title: 'Memvor', tag: 'Produto, Web, UX e Branding', img: '/projects/covers/memvor.webp' },
  { id: 'teainter', title: 'Teainter', tag: 'Branding', img: '/projects/teainter/teainter-2.gif' },
  { id: 'lic', title: 'LIC', tag: 'Branding', img: '/projects/covers/lic.svg' },
  { id: 'korre-club', title: 'Korre Club', tag: 'Branding', img: '/projects/covers/banner-korre-club.png' },
  { id: 'level-up', title: 'Level Up', tag: 'ID Visual', img: '/projects/covers/level-up.webp' },
  { id: 'voxis', title: 'Voxis', tag: 'Produto, UX e Branding', img: '/projects/voxis/voxis-9.png', customClass: 'scale-[1.15]' },
  { id: 'winners', title: 'Winners', tag: 'ID Visual', img: '/projects/covers/winners.png' },
  { id: 'gigantes-de-nazare', title: 'Gigantes de Nazaré', tag: 'Material On/Off', img: '/projects/covers/GN.gif' },
];

import { VideoBanner } from '@/components/ui/VideoBanner';
import { PortfolioGrid } from '@/components/ui/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-900 pb-0">
      {/* Video Background Banner */}
      <VideoBanner src="/brand/12552791_1920_1080_30fps.mp4" playbackRate={0.6} title="Portfólio" />

        <PortfolioGrid projects={projects} />

        {/* Clientes Section */}
        <section className="w-full mt-20 pb-20 md:mt-32 md:pb-32 lg:mt-40 lg:pb-40 overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
            <AnimatedSection className="flex flex-col items-start mb-12">
              <h2 
                className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold" 
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Clientes
              </h2>
            </AnimatedSection>
          </div>
          
          {/* Carrossel de logos */}
          <AnimatedSection delay={0.2} className="w-full mt-4">
            <ClientCarousel />
          </AnimatedSection>
        </section>
    </main>
  );
}
