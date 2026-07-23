import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { ClientCarousel } from "@/components/ui/ClientCarousel";
import { VideoBanner } from "@/components/ui/VideoBanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'O Que Fazemos',
  description: 'Estratégia, Design e Performance para marcas.',
};

export default function OQueFazemosPage() {
  return (
    <main className="min-h-screen bg-zinc-900">
      {/* Video Background Banner */}
      <VideoBanner src="/12552791_1920_1080_30fps.mp4" playbackRate={0.6} title="O Que Fazemos" />

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
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-24 lg:gap-32">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left leading-tight uppercase" 
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Vamos falar<br className="hidden md:block" /> sobre seu<br className="hidden md:block" /> próximo passo?
            </h2>
            <div className="flex flex-col items-center md:items-start">
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
        
        {/* Carrossel de logos */}
        <AnimatedSection delay={0.2} className="w-full mt-4">
          <ClientCarousel />
        </AnimatedSection>
      </section>
    </main>
  );
}
