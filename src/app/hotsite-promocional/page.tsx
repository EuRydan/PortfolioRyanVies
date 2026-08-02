import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HotsiteContactForm } from "@/components/ui/HotsiteContactForm";

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

const BLOG_POSTS = [
  {
    id: 5,
    title: "Conversão e landing page: como transformar visitante em lead com estratégia",
    category: "Conversão e landing pages",
    date: "28 Jul 2026",
    image: "/marketing/pexels-tranmautritam-326514.jpg",
    slug: "/blog/conversao-e-landing-page-como-transformar-visitante-em-lead",
    excerpt:
      "Uma landing page bonita não garante resultado. Entenda o que realmente aumenta conversão e como estruturar uma página pensada para gerar leads de verdade.",
  },
  {
    id: 4,
    title: "Quantas brechas o seu site esconde sem você saber?",
    category: "Segurança de sites",
    date: "28 Jul 2026",
    image: "/marketing/pexels-pixabay-60504.jpg",
    slug: "/blog/quantas-brechas-o-seu-site-esconde-sem-voce-saber",
    excerpt:
      "Sites feitos às pressas costumam esconder falhas de segurança. Entenda os riscos mais comuns e por que segurança deveria entrar no projeto desde o primeiro dia.",
  },
  {
    id: 3,
    title: "Velocidade de site afeta o caixa da empresa, não só a nota no PageSpeed",
    category: "Performance e SEO",
    date: "27 Jul 2026",
    image: "/marketing/pexels-cottonbro-6986455.jpg",
    slug: "/blog/velocidade-de-site-afeta-o-caixa-da-empresa",
    excerpt:
      "Um site lento perde cliente antes mesmo de mostrar o produto. Veja como a velocidade de carregamento afeta conversão e faturamento.",
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

                    <ul className="space-y-3.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-white text-sm sm:text-base font-semibold">
                          <div className="w-5 h-5 rounded-full bg-white text-[#d75310] flex items-center justify-center shrink-0 shadow-sm">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>{item}</span>
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


      {/* 5. Seção Dividida: Contato & Formulário */}
      <section className="w-full relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Lado Esquerdo: Fundo Preto com Texto */}
          <div className="bg-black text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col justify-center relative">
            <AnimatedSection>
              <div className="max-w-xl">
                <span
                  className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-[#d75310] font-bold mb-4"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Comece Agora
                </span>

                <h2
                  className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-white leading-[1.25] mb-6"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  <span className="block">Entra em contato conosco</span>
                  <span className="block">e saiba como elevar seu</span>
                  <span className="block">restaurante com promoções</span>
                  <span className="block">gamificadas.</span>
                </h2>

                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  A gente monta uma proposta no mesmo dia. Preencha o formulário ao lado ou fale direto pelo WhatsApp.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Lado Direito: Fundo Branco com Formulário */}
          <div className="bg-white text-zinc-900 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-100">
            <AnimatedSection delay={0.15}>
              <div className="max-w-xl w-full mx-auto">
                <HotsiteContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. Blog Previews Section (White background) */}
      <section className="w-full bg-white text-zinc-900 py-14 sm:py-16 md:py-20 border-t border-zinc-100">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div className="max-w-2xl text-left">
              <h2
                className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Confira nossos artigos recentes
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#d75310] hover:text-[#ea580c] transition-colors group self-start md:self-auto"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              <span>Ver todos os artigos</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </AnimatedSection>

          {/* Grid de Artigos Compactos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl">
            {BLOG_POSTS.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Link
                  href={post.slug}
                  className="group flex flex-col h-full bg-zinc-50 hover:bg-white border border-zinc-200/80 hover:border-[#d75310]/50 rounded-xl transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/80 hover:-translate-y-1"
                >
                  {/* Imagem de Capa */}
                  <div className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    <span className="text-[#d75310] text-[11px] font-bold tracking-wider mb-1.5">
                      {post.date}
                    </span>
                    <h3
                      className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#d75310] transition-colors leading-snug line-clamp-2"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-zinc-900 group-hover:text-[#d75310] font-bold uppercase tracking-wider text-[11px] transition-colors">
                      <span>Ler artigo</span>
                      <svg
                        className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Aviso Legal / Regulatório (White background, no borders, 16px font) */}
      <section className="w-full bg-white text-zinc-500 py-12 sm:py-16">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection>
            <div 
              className="max-w-4xl mx-auto space-y-4 text-zinc-500 leading-relaxed text-left text-base sm:text-[16px]"
              style={{ fontSize: "16px" }}
            >
              <p>
                A Viés Studios é um estúdio de design e tecnologia especializado no desenvolvimento de hotsites promocionais gamificados. Criamos a estrutura técnica, o design e a experiência do usuário pra campanhas de engajamento e relacionamento com clientes, com foco no mercado gastronômico.
              </p>
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
