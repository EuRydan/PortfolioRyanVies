import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { ScrollArrow } from "@/components/ui/ScrollArrow";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Video Background (Sticky para Parallax) */}
      <div className="sticky top-0 w-full h-[592px] z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full rotate-180"
        >
          <source src="/7794281-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text Overlay (Absolute para acompanhar o scroll) */}
      <section className="absolute top-0 left-0 right-0 w-full h-[592px] pointer-events-none z-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center relative pointer-events-auto">
          <AnimatedSection>
            <h1 
              className="text-[60px] sm:text-[90px] lg:text-[120px] font-extrabold leading-[0.85] text-white uppercase mix-blend-difference"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              WE<br/>
              ARE<br/>
              VIES
            </h1>
          </AnimatedSection>
        </div>

        <div className="pointer-events-auto">
          <ScrollArrow />
        </div>
      </section>

      {/* Content Layer that slides over the Hero */}
      <div className="relative z-10 w-full bg-zinc-900">
        {/* Quem Somos Section */}
        <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-40">
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
              
              <AnimatedSection delay={0.2} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 border-t border-zinc-800 pt-16 md:pt-24">
                <div className="col-span-2">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>7+</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">Anos de experiência</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Design</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">Estratégico & Visual</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Código</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">Desenvolvimento Web</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="mt-16">
                <QuoteButton />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-40">
          <AnimatedSection className="flex flex-col items-center justify-center mb-16 md:mb-24">
            <h2 
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-400 font-semibold text-center" 
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Um pouco do portfólio da Viés
            </h2>
          </AnimatedSection>
          
          {/* Grid de Projetos (3 colunas no Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            
            {/* Projeto 1 */}
            <AnimatedSection delay={0.1}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/memvor.webp" 
                    alt="Capa do projeto Memvor" 
                    className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6 md:p-8">
                    <div className="flex flex-col transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Memvor
                      </h3>
                      <span className="text-white/90 uppercase text-xs md:text-sm tracking-[0.2em] mt-2 font-medium">Web e UX</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Projeto 2 */}
            <AnimatedSection delay={0.2}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/teainter.gif" 
                    alt="Capa do projeto Teainter" 
                    className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
            <AnimatedSection delay={0.3}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/banner-korre-club.png" 
                    alt="Capa do projeto Korre Club" 
                    className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
            <AnimatedSection delay={0.4}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/level-up.webp" 
                    alt="Capa do projeto Level Up" 
                    className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
            <AnimatedSection delay={0.5}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/voxis.png" 
                    alt="Capa do projeto Voxis" 
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15] md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
            <AnimatedSection delay={0.6}>
              <Link href="/fale-conosco" className="block">
                <div className="group cursor-crosshair relative w-full aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/winners.png" 
                    alt="Capa do projeto Winners" 
                    className="absolute inset-0 w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
          </div>

          {/* Botão de Orçamento */}
          <AnimatedSection delay={0.4} className="flex justify-center mt-16 md:mt-24">
            <QuoteButton />
          </AnimatedSection>
        </section>

        {/* O Que Fazemos Section */}
        <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-40 border-t border-zinc-800/50">
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
                  Estratégia, Design e Performance para marcas que querem crescer.
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
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
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
                      <span className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-[#d75310] transition-colors duration-500 rounded-full mr-3 shrink-0"></span>
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
                      <span className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-[#d75310] transition-colors duration-500 rounded-full mr-3 shrink-0"></span>
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
                      <span className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-[#d75310] transition-colors duration-500 rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

            </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
