import { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Hotsite Promocional | Vies Studios",
  description:
    "Hotsite Promocional desenvolvido pela Vies Studios com foco em design de alto impacto, performance e conversão.",
  alternates: {
    canonical: "https://www.viesstudios.com.br/hotsite-promocional",
  },
};

export default function HotsitePromocionalPage() {
  return (
    <main className="w-full bg-zinc-900 text-zinc-100 min-h-screen">
      {/* Hero Banner with Orange Background & Geometric Graphic Accents (Height Adjusted) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#e05813] via-[#d75310] to-[#b33d05] py-14 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center shadow-lg">
        
        {/* Layer 1: Geometric Angular Graphic Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Large diagonal geometric wedge */}
          <div 
            className="absolute -right-20 -top-20 w-[55%] h-[160%] bg-white/[0.08] transform -skew-x-12 origin-top-right backdrop-blur-[1px]" 
          />
          {/* Secondary diagonal accent shape */}
          <div 
            className="absolute right-[22%] -bottom-16 w-[30%] h-[130%] bg-black/[0.1] transform -skew-x-12 origin-bottom-left" 
          />
          {/* Subtle Top-Right Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-[80px]" />
          {/* Subtle Dark Vignette Bottom-Left */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-[80px]" />
        </div>

        {/* Layer 2: Subtle Grid & Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Foreground Content: Title */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 flex items-center justify-center text-center">
          <AnimatedSection>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Hotsite Promocional
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Next Section with White Background */}
      <section className="w-full bg-white text-zinc-900 py-20 md:py-32 lg:py-40">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="w-12 h-1 bg-[#d75310] mb-8 rounded-full" />
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Campanhas Digitais Estratégicas de Alto Desempenho
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                Desenvolvemos hotsites sob medida com arquitetura voltada para conversão, velocidade máxima de carregamento e identidade visual marcante para potencializar suas promoções e lançamentos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
