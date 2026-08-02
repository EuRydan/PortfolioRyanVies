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
    <main className="w-full bg-zinc-950 text-white min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Hero Banner with Orange Background & Graphical Elements */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#e05813] via-[#d75310] to-[#b33d05] py-24 sm:py-32 md:py-40 lg:py-48 flex items-center justify-center shadow-2xl">
        
        {/* Layer 1: Geometric Angular Graphic Accents (Reference-inspired diagonal facets) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Large diagonal geometric wedge */}
          <div 
            className="absolute -right-24 -top-24 w-[60%] h-[150%] bg-white/[0.07] transform -skew-x-12 origin-top-right backdrop-blur-[2px]" 
          />
          {/* Secondary diagonal accent line / shape */}
          <div 
            className="absolute right-[20%] -bottom-20 w-[35%] h-[120%] bg-black/[0.12] transform -skew-x-12 origin-bottom-left" 
          />
          {/* Subtle Top-Right Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px]" />
          {/* Subtle Dark Vignette Bottom-Left */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/25 rounded-full blur-[90px]" />
        </div>

        {/* Layer 2: Subtle Grid & Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Layer 3: Video Texture Blend (Subtle motion background) */}
        <div className="absolute inset-0 z-0 opacity-15 overflow-hidden pointer-events-none mix-blend-luminosity">
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
        </div>

        {/* Foreground Content: Title */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 flex items-center justify-center text-center">
          <AnimatedSection>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Hotsite Promocional
            </h1>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
