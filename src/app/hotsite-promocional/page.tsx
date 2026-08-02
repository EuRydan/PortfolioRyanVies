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
    <main className="min-h-[calc(100vh-80px)] bg-zinc-950 text-white relative overflow-hidden flex flex-col items-center justify-center">
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
      <div className="absolute inset-0 z-0 opacity-25 overflow-hidden pointer-events-none mix-blend-screen">
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
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950" />
      </div>

      {/* Hero Section - Centered Title Only */}
      <section className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 py-28 md:py-36 flex flex-col items-center justify-center text-center">
        <AnimatedSection>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Hotsite <span className="text-[#d75310]">Promocional</span>
          </h1>
        </AnimatedSection>
      </section>
    </main>
  );
}
