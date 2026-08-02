import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Vies Experience | Imersão em Design e Tecnologia",
  description:
    "Descubra a Vies Experience: o encontro definitivo entre design estratégico de alto impacto, engenharia refinada e experiências digitais memoráveis.",
  alternates: {
    canonical: "https://www.viesstudios.com.br/vies-experience",
  },
};

export default function ViesExperiencePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Glow & Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glow Radial Top-Right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#d75310]/15 rounded-full blur-[140px]" />
        {/* Glow Radial Bottom-Left */}
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-[#d75310]/10 rounded-full blur-[160px]" />
        {/* Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Video / Visual Atmosphere Layer */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none mix-blend-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/brand/video-hero-vies-home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 pt-36 pb-24 md:pt-44 md:pb-32 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Eyebrow Badge */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d75310] animate-pulse" />
              <span 
                className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-semibold"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Vies Experience // 2026
              </span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={0.1}>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Vies <span className="text-[#d75310]">Experience</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle / Statement */}
          <AnimatedSection delay={0.2}>
            <p
              className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium leading-snug max-w-3xl mb-8"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              O ápice do design estratégico e da tecnologia digital. Transformamos visões arrojadas em produtos memoráveis, rápidos e focados em resultados reais.
            </p>
          </AnimatedSection>

          {/* Pillars / Feature Chips */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
              {[
                "UI/UX de Alta Fidelidade",
                "Design Estratégico & Branding",
                "Desenvolvimento Web & Performance",
                "Arquitetura Focada em Conversão",
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#d75310] rounded-full" />
                  {pill}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/5521978949944?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20a%20Vies%20Experience!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#d75310] hover:bg-[#b8440b] text-white px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#d75310]/20 rounded-none group"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span>Solicitar Proposta</span>
                <svg
                  className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-200 px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Ver Portfólio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
