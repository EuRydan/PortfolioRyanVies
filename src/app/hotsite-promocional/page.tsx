import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ClientCarousel = dynamic(() =>
  import("@/components/ui/ClientCarousel").then((mod) => mod.ClientCarousel)
);

export const metadata: Metadata = {
  title: "Hotsite Promocional | Vies Studios",
  description:
    "Hotsites gamificados pra restaurantes e marcas que querem engajar clientes de verdade. Raspadinha, roleta, sorteio. Tudo com identidade visual sob medida e dados reais ao final.",
  alternates: {
    canonical: "https://www.viesstudios.com.br/hotsite-promocional",
  },
};

const SOLUTION_GROUPS = [
  {
    tag: "Mais Completos",
    title: "Coração da Campanha",
    items: [
      "Promoção Comercial",
      "Hotsite Promocional",
      "Registro de Regulamento",
    ],
  },
  {
    tag: "Mais Completos",
    title: "Coração da Campanha",
    items: [
      "Sorteio",
      "Vale-Brinde",
      "Assemelhada a Sorteio",
      "Assemelhada a Vale-Brinde",
    ],
  },
  {
    tag: "Mais Completos",
    title: "Coração da Campanha",
    items: [
      "Concurso Comercial",
      "Promoção Redes Sociais",
      "Campanha de Incentivo",
    ],
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
              className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
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
                className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-zinc-900 mb-6 leading-[1.2]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span className="block">Sua campanha promocional </span>
                <span className="block">com a cara do seu negócio.</span>
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

      {/* 3. Nossas Soluções Section (Solid Black Background & 40px Centered Title) */}
      <section className="w-full bg-black text-white py-20 sm:py-24 md:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <span
                className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider text-[#d75310] mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Nossas soluções
              </span>
              <h2
                className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-white leading-[1.25]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                <span className="block">Modalidades oferecidas pela Vies</span>
                <span className="block">para o seu restaurante.</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Solutions / Modalities Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14 md:mt-20">
            {SOLUTION_GROUPS.map((group, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div 
                  className="rounded-2xl p-7 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-[#d75310]/30 hover:scale-[1.01]"
                  style={{ backgroundColor: "#d75310" }}
                >
                  <div>
                    <span 
                      className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-black/20 px-3 py-1 rounded-full mb-3"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {group.tag}
                    </span>

                    <h3
                      className="text-xl sm:text-2xl font-extrabold text-white mb-6 tracking-tight"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {group.title}
                    </h3>

                    {/* Checked Items as Interactive Buttons */}
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`https://wa.me/5521978949944?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(item)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-black/20 hover:bg-black/35 border border-white/20 hover:border-white/40 text-white font-bold text-sm sm:text-base py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-200 group/item cursor-pointer shadow-sm hover:scale-[1.02]"
                            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-white text-[#d75310] flex items-center justify-center shrink-0 shadow-sm">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span className="text-left leading-tight">{item}</span>
                            </div>
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="text-white/70 group-hover/item:text-white group-hover/item:translate-x-1 transition-all shrink-0 ml-2"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
                className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-zinc-900 leading-tight"
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
                className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-white mb-6 leading-tight"
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

      {/* 6. Aviso Legal / Regulatório (White background, no borders, 16px font) */}
      <section className="w-full bg-white text-zinc-500 py-12 sm:py-16">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div 
              className="max-w-4xl mx-auto space-y-4 text-zinc-500 leading-relaxed text-left text-base sm:text-[16px]"
              style={{ fontSize: "16px" }}
            >
              <p>
                <strong className="font-bold text-zinc-800">Não promovemos, organizamos ou realizamos sorteios, concursos ou qualquer tipo de promoção comercial própria.</strong> Toda responsabilidade legal, execução e operação das campanhas é de responsabilidade do contratante, que deve cumprir integralmente a legislação vigente.
              </p>
              <p>
                As promoções comerciais no Brasil são regulamentadas pela <strong className="font-bold text-zinc-800">Lei nº 5.768/1971</strong>, pelo <strong className="font-bold text-zinc-800">Decreto nº 70.951/1972</strong> e pela <strong className="font-bold text-zinc-800">Portaria SEAE nº 7.638/2022</strong>, e sua autorização e fiscalização são de competência da <strong className="font-bold text-zinc-800">Secretaria de Prêmios e Apostas (SPA)</strong> do Ministério da Fazenda.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Clientes Section */}
      <section className="w-full pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32 lg:pb-40 overflow-hidden bg-zinc-950">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection className="flex flex-col items-start mb-12">
            <h2
              className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
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
