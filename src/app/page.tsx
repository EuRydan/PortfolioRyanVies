import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { ScrollArrow } from "@/components/ui/ScrollArrow";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ClientCarousel = dynamic(() => import("@/components/ui/ClientCarousel").then(mod => mod.ClientCarousel));
const ScrollRevealStats = dynamic(() => import("@/components/ui/ScrollRevealStats").then(mod => mod.ScrollRevealStats));
const UXBadge = dynamic(() => import("@/components/ui/UXBadge").then(mod => mod.UXBadge));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vies Studios | Laboratório Criativo de Design e Web",
  description: "Agência de design estratégico e desenvolvimento web com estética premium. Transformamos ideias em produtos digitais seguros, focados em performance e SEO.",
  alternates: {
    canonical: "https://www.viesstudios.com.br/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Image Background (Sticky para Parallax) */}
      <div className="sticky top-0 w-full h-[592px] z-0 overflow-hidden">
        <img 
          src="/brand/banner-site-header.png"
          alt="Vies Studios Banner"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Text Overlay (Absolute para acompanhar o scroll) */}
      <section className="absolute top-0 left-0 right-0 w-full h-[592px] pointer-events-none z-10">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 h-full flex flex-col justify-center relative pointer-events-auto">
          <AnimatedSection>
            <h1 
              className="text-[60px] sm:text-[90px] lg:text-[120px] font-extrabold leading-[0.85] text-white uppercase mix-blend-difference"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              WE<br/>
              ARE<br/>
              VIES
            </h1>
            <p 
              className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-xl text-white/90 uppercase tracking-[0.2em] font-medium mix-blend-difference"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Laboratório criativo de design e tecnologia
            </p>
          </AnimatedSection>
        </div>

        <div className="pointer-events-auto">
          <ScrollArrow />
        </div>
      </section>

      {/* Content Layer that slides over the Hero */}
      <div className="relative z-10 w-full bg-zinc-900">
        {/* Quem Somos Section */}
        <section className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 pt-12 pb-20 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
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
              
              <ScrollRevealStats />
              
              <AnimatedSection delay={0.25} className="mt-12 md:mt-16 bg-zinc-800/30 rounded-xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <UXBadge />
                <div className="flex flex-col justify-center h-full pt-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                    Propriedade em Experiência do Usuário (UX)
                  </h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                    Para nós, não basta criar interfaces bonitas. Temos propriedade técnica e certificação oficial em UX para projetar jornadas que engajam, retêm e convertem de verdade. Cada decisão de design é baseada em dados e comportamento humano, garantindo que o seu produto digital resolva o problema certo.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="mt-12">
                <QuoteButton />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 pt-0 pb-20 md:pb-32 lg:pb-40">
          <AnimatedSection className="flex flex-col items-start justify-start mb-12 md:mb-16">
            <h2 
              className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold text-left" 
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Um pouco do portfólio da Vies
            </h2>
          </AnimatedSection>
          
          {/* Grid de Projetos (3 colunas no Desktop) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            
            {/* Projeto 1 */}
            <AnimatedSection delay={0.1} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/memvor.webp" alt="Capa do projeto Memvor" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Memvor
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Produto, Web, UX e Branding</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 2 */}
            <AnimatedSection delay={0.2} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/teainter/teainter-2.gif" alt="Capa do projeto Teainter" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Teainter
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Branding</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 3 */}
            <AnimatedSection delay={0.3} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/banner-korre-club.png" alt="Capa do projeto Korre Club" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Korre Club
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Branding</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 4 */}
            <AnimatedSection delay={0.4} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/level-up.webp" alt="Capa do projeto Level Up" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Level Up
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">ID Visual</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 5 */}
            <AnimatedSection delay={0.5} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/voxis/voxis-9.png" alt="Capa do projeto Voxis" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover scale-[1.15] md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Voxis
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Produto, UX e Branding</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 6 */}
            <AnimatedSection delay={0.6} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/winners.png" alt="Capa do projeto Winners" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Winners
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">ID Visual</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 7 */}
            <AnimatedSection delay={0.7} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/GN.gif" alt="Capa do projeto GN" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Gigantes de Nazaré
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Material On/Off</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 8 */}
            <AnimatedSection delay={0.8} effect="pop">
              <Link href="/portfolio" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image src="/projects/covers/lic.svg" alt="Capa do projeto LIC" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        LIC
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Branding, Id. Visual</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>

          {/* Link Ver Mais Projetos */}
          <div className="mt-8 flex justify-end">
            <AnimatedSection delay={0.7}>
              <Link 
                href="/portfolio" 
                className="text-[#d75310] uppercase tracking-widest text-xs md:text-sm font-bold relative group inline-block pb-1"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Ver mais projetos
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d75310] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </AnimatedSection>
          </div>

          {/* Botão de Orçamento */}
          <AnimatedSection delay={0.4} className="flex justify-center mt-16 md:mt-24">
            <QuoteButton />
          </AnimatedSection>
        </section>

        {/* O Que Fazemos Section */}
        <section className="w-full bg-black py-20 md:py-32 lg:py-40">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Left Column: Title */}
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <AnimatedSection>
                <h2 
                  className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-6" 
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  O Que Fazemos?
                </h2>
              </AnimatedSection>
            </div>

            {/* Right Column: Content & Cards */}
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col">
              
              <AnimatedSection delay={0.1}>
                <h3 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  Estratégia, Design e Performance para marcas.
                </h3>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="mb-16">
                <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                  Construímos marcas, experiências digitais e estratégias de aquisição que transformam empresas em negócios mais relevantes, desejados e lucrativos.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Da identidade visual à geração de demanda, conectamos estratégia, design e tecnologia para criar uma presença digital consistente e orientada a resultados.
                </p>
              </AnimatedSection>

              {/* Services Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {/* Card 1: Web */}
              <AnimatedSection delay={0.3} className="bg-zinc-800/30 p-8 md:p-10 hover:bg-black transition-all duration-500 flex flex-col h-full group">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-[#d75310] transition-colors duration-500" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>WEB</h4>
                <p className="text-sm text-zinc-300 mb-6 font-medium">Sites que transformam visitantes em clientes.</p>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                  Seu site é mais do que uma vitrine: é um ativo de vendas. Desenvolvemos experiências digitais rápidas, intuitivas e preparadas para converter, unindo estratégia, UX e tecnologia.
                </p>
                <ul className="space-y-4 mt-auto border-t border-zinc-800/50 pt-8">
                  {["Sites Institucionais", "Landing Pages", "E-commerce", "UX/UI Design", "SEO Técnico", "Otimização de Performance", "Integrações e Automações", "Hospedagem e Suporte"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-[#d75310] rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Card 2: Branding */}
              <AnimatedSection delay={0.4} className="bg-zinc-800/30 p-8 md:p-10 hover:bg-black transition-all duration-500 flex flex-col h-full group">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-[#d75310] transition-colors duration-500" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>BRANDING</h4>
                <p className="text-sm text-zinc-300 mb-6 font-medium">Marcas que são lembradas antes mesmo de vender.</p>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                  Construímos identidades visuais e sistemas de marca que geram reconhecimento, transmitem confiança e diferenciam sua empresa em um mercado cada vez mais competitivo.
                </p>
                <ul className="space-y-4 mt-auto border-t border-zinc-800/50 pt-8">
                  {["Branding", "Identidade Visual", "Posicionamento de Marca", "Sistemas Visuais", "Design Editorial", "Key Visuals", "Motion Design", "Materiais Institucionais"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-[#d75310] rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Card 3: Performance */}
              <AnimatedSection delay={0.5} className="bg-zinc-800/30 p-8 md:p-10 hover:bg-black transition-all duration-500 flex flex-col h-full group md:col-span-2 xl:col-span-1">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-[#d75310] transition-colors duration-500" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>PERFORMANCE</h4>
                <p className="text-sm text-zinc-300 mb-6 font-medium">Marketing orientado por dados, não por achismos.</p>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                  Planejamos e gerenciamos campanhas para atrair o público certo, gerar oportunidades reais e aumentar o retorno sobre cada investimento.
                </p>
                <ul className="space-y-4 mt-auto border-t border-zinc-800/50 pt-8">
                  {["Gestão de Tráfego Pago", "Google Ads", "Meta Ads", "LinkedIn Ads", "Geração de Leads", "SEO", "Automação de Marketing", "Otimização de Conversão"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-[#d75310] rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              </div>

              {/* CTA Section */}
              <AnimatedSection delay={0.6} className="mt-16 md:mt-24 flex flex-col items-start gap-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                    Comunicação que converte, em qualquer canal.
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Planejamento e execução sob medida, com design de alta performance
                  </p>
                </div>
                <QuoteButton />
              </AnimatedSection>
            </div>
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

        {/* Blog Preview Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <AnimatedSection className="flex flex-col items-start">
                <h2 
                  className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4" 
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  Nosso Blog
                </h2>
                <h3 
                  className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  Últimos artigos e insights
                </h3>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-[#d75310] font-bold tracking-widest uppercase hover:text-zinc-900 transition-colors"
                >
                  Ver todos os artigos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
              {/* Article 1 */}
              <AnimatedSection delay={0.1}>
                <Link href="/blog/conversao-e-landing-page-como-transformar-visitante-em-lead" className="group block h-full flex flex-col">
                  <div className="relative w-full aspect-square overflow-hidden mb-5 bg-zinc-100 rounded-none">
                    <Image src="/marketing/pexels-tranmautritam-326514.jpg" alt="Conversão e landing pages" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#d75310] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        Conversão e landing pages
                      </span>
                      <span className="text-zinc-500 text-[10px] md:text-xs font-medium">
                        28 Jul 2026
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 group-hover:text-[#d75310] transition-colors leading-snug" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                      Conversão e landing page: como transformar visitante em lead com estratégia
                    </h4>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      Uma landing page bonita não garante resultado. Entenda o que realmente aumenta conversão, os erros que derrubam performance e como estruturar uma página pensada para gerar leads de verdade.
                    </p>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Article 2 */}
              <AnimatedSection delay={0.2}>
                <Link href="/blog/quero-criar-um-app-saas-por-onde-comecar" className="group block h-full flex flex-col">
                  <div className="relative w-full aspect-square overflow-hidden mb-5 bg-zinc-100 rounded-none">
                    <Image src="/marketing/capa-produto.jpeg" alt="Quero criar um app ou SaaS" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#d75310] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        Produto digital
                      </span>
                      <span className="text-zinc-500 text-[10px] md:text-xs font-medium">
                        24 Jul 2026
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 group-hover:text-[#d75310] transition-colors leading-snug" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                      Quero criar um app ou SaaS: por onde começo?
                    </h4>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      Tem uma ideia de app ou SaaS mas não sabe por onde começar? Veja o que realmente importa antes de escrever uma linha de código ou contratar alguém.
                    </p>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Article 3 */}
              <AnimatedSection delay={0.3}>
                <Link href="/blog/criacao-de-sites-em-duque-de-caxias" className="group block h-full flex flex-col">
                  <div className="relative w-full aspect-square overflow-hidden mb-5 bg-zinc-100 rounded-none">
                    <Image src="/marketing/capa-artigo.jpg" alt="Criação de sites em Duque de Caxias" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#d75310] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        Criação de sites
                      </span>
                      <span className="text-zinc-500 text-[10px] md:text-xs font-medium">
                        24 Jul 2026
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 group-hover:text-[#d75310] transition-colors leading-snug" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                      Criação de sites em Duque de Caxias: quanto custa em 2026
                    </h4>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preço reais, o que muda o valor e como contratar sem cair em armadilha.
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Clientes Section */}
        <section className="w-full pt-10 md:pt-12 lg:pt-16 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
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
      </div>
    </main>
  );
}
