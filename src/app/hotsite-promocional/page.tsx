import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Hotsite Promocional | Vies Studios",
  description:
    "Hotsites gamificados pra restaurantes e marcas que querem engajar clientes de verdade. Raspadinha, roleta, sorteio. Tudo com identidade visual sob medida e dados reais ao final.",
  alternates: {
    canonical: "https://www.viesstudios.com.br/hotsite-promocional",
  },
};

const SOLUTIONS = [
  {
    title: "Raspadinha digital",
    description:
      "Alta participação porque a experiência é familiar e instantânea. O cliente raspa e descobre o prêmio na hora.",
    badge: "Ideal pra brindes, descontos e datas comemorativas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="M7 15h0"></path>
        <path d="M2 9.5h20"></path>
      </svg>
    ),
  },
  {
    title: "Roleta de prêmios",
    description:
      "Gera tensão antes de revelar o resultado. Aumenta o tempo de interação com a marca e funciona bem com múltiplos prêmios.",
    badge: "Ideal pra campanhas com diferentes probabilidades de prêmio.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
        <path d="M12 12l5-3"></path>
      </svg>
    ),
  },
  {
    title: "Sorteio com cadastro",
    description:
      "O cliente se cadastra e concorre a um prêmio maior no final. Constrói base de dados e mantém o cliente voltando pra acompanhar o resultado.",
    badge: "Ideal pra prêmios de alto valor, lançamentos e fidelização.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7"></path>
        <path d="M14 14.66V17c0 .55.45 1 1 1h2"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
  },
];

export default function HotsitePromocionalPage() {
  return (
    <main className="w-full bg-white text-zinc-900 min-h-screen">
      {/* 1. Hero Banner with Orange Background & Geometric Graphic Accents */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#e05813] via-[#d75310] to-[#b33d05] py-14 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center shadow-lg text-white">
        
        {/* Layer 1: Geometric Angular Graphic Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div 
            className="absolute -right-20 -top-20 w-[55%] h-[160%] bg-white/[0.08] transform -skew-x-12 origin-top-right backdrop-blur-[1px]" 
          />
          <div 
            className="absolute right-[22%] -bottom-16 w-[30%] h-[130%] bg-black/[0.1] transform -skew-x-12 origin-bottom-left" 
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-[80px]" />
        </div>

        {/* Layer 2: Subtle Grid Pattern */}
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

      {/* 2. Hero Content Section (White) */}
      <section className="w-full bg-white text-zinc-900 py-16 sm:py-20 md:py-28">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl flex flex-col items-start text-left">
              <div className="w-12 h-1 bg-[#d75310] mb-8 rounded-full" />
              
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.15]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span className="block">Sua campanha promocional no ar.</span>
                <span className="block">Com a cara do seu negócio.</span>
              </h2>

              <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
                Hotsites gamificados pra restaurantes e marcas que querem engajar clientes de verdade. Raspadinha, roleta, sorteio. Tudo com identidade visual sob medida e dados reais ao final.
              </p>

              <Link
                href="https://wa.me/5521978949944?text=Ol%C3%A1!%20Quero%20minha%20campanha%20de%20Hotsite%20Promocional."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#d75310] hover:bg-[#b8430a] text-white font-bold px-8 py-4.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#d75310]/20 group text-base md:text-lg cursor-pointer"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span>Quero minha campanha</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1.5 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Nossas Soluções Section */}
      <section className="w-full bg-zinc-50 border-t border-zinc-200/80 py-20 sm:py-24 md:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-3xl mb-14 md:mb-20 text-left">
              <span 
                className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#d75310] bg-[#d75310]/10 px-3.5 py-1.5 rounded-full mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Nossas soluções
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.2]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span className="block">Modalidades oferecidas pela Viés</span>
                <span className="block">para o seu restaurante.</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Solutions / Mechanics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-white border border-zinc-200/90 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-[#d75310] hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#d75310] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#d75310] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>

                    <h3
                      className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <p className="text-xs sm:text-sm font-semibold text-[#d75310] bg-orange-50/90 py-2.5 px-3.5 rounded-lg inline-block w-full">
                      {item.badge}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cases Section */}
      <section className="w-full bg-white border-t border-zinc-200/80 py-20 sm:py-24 md:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <span 
                className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#d75310] bg-[#d75310]/10 px-3.5 py-1.5 rounded-full mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Cases
              </span>
              <h2
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Primeiros projetos. Resultados reais.
              </h2>
            </div>
          </AnimatedSection>

          {/* Showcase / Placeholder honesto */}
          <AnimatedSection delay={0.1}>
            <div className="bg-zinc-50 border-2 border-dashed border-zinc-300/90 rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Primeiros Projetos em Andamento
              </div>
              
              <p className="text-zinc-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Estamos nos primeiros projetos e documentando cada número. Se quiser ser um dos primeiros, seu case entra aqui com dados completos de participação e engajamento.
              </p>

              <Link
                href="https://wa.me/5521978949944?text=Ol%C3%A1!%20Gostaria%20de%20ser%20um%20dos%20primeiros%20a%20rodar%20um%20case%20de%20Hotsite%20Promocional."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-bold text-[#d75310] hover:text-[#b8430a] transition-colors text-base group cursor-pointer"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span>Quero ser um dos pioneiros</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. CTA Final Section */}
      <section className="w-full bg-zinc-950 text-white py-24 sm:py-28 md:py-36 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d75310]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <span 
                className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#d75310] bg-[#d75310]/10 border border-[#d75310]/20 px-4 py-1.5 rounded-full mb-6"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Comece Agora
              </span>

              <h2
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Conta o que você tem em mente.
              </h2>

              <p className="text-zinc-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mb-10">
                A gente monta uma proposta no mesmo dia. Sem formulário longo, sem reunião de apresentação. Direto no WhatsApp.
              </p>

              <Link
                href="https://wa.me/5521978949944?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Vi%C3%A9s%20sobre%20o%20Hotsite%20Promocional."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 bg-[#d75310] hover:bg-[#ea580c] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-[#d75310]/25 text-lg sm:text-xl cursor-pointer group"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span>Falar com a Viés</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1.5 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
