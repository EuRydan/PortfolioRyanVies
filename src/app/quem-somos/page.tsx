import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { ClientCarousel } from "@/components/ui/ClientCarousel";
import { VideoBanner } from "@/components/ui/VideoBanner";
import Link from "next/link";

export const metadata = {
  title: 'Quem Somos - Vies',
  description: 'Somos um laboratório criativo de design e tecnologia.',
};

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen bg-zinc-900">
      {/* Video Background Banner */}
      <VideoBanner src="/12552791_1920_1080_30fps.mp4" playbackRate={0.6} title="Quem Somos" />

      {/* Quem Somos Section */}
      <section className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <AnimatedSection>
              <h2 
                className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-6" 
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Quem Somos?
              </h2>
            </AnimatedSection>
          </div>
          
          <div className="col-span-4 md:col-span-5 lg:col-span-8">
            <AnimatedSection delay={0.1}>
              <p 
                className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.3] text-zinc-100" 
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Somos um laboratório criativo de design e tecnologia. Transformamos ideias em produtos digitais e marcas com alto impacto visual e estratégico.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16">
              <div className="col-span-2">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>50+</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Clientes atendidos</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Design</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Estratégico & Visual</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Produtos Digitais</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Desenvolvimento</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="mt-12">
              <QuoteButton />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[#d75310] py-16 md:py-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left leading-tight uppercase" 
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Vamos falar<br className="hidden md:block" /> sobre seu<br className="hidden md:block" /> próximo passo?
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col items-center md:items-start">
              <span className="text-white/90 text-sm font-medium mb-3">
                Pronto para começar?
              </span>
              <a 
                href="https://wa.me/5521978949944" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors shrink-0"
              >
                Solicitar Proposta
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="w-full pt-20 md:pt-32 lg:pt-40 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
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
        
        <AnimatedSection delay={0.2} className="w-full mt-4">
          <ClientCarousel />
        </AnimatedSection>
      </section>
    </main>
  );
}
