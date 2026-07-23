import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { VideoBanner } from "@/components/ui/VideoBanner";

export const metadata = {
  title: 'Fale Conosco - Vies',
  description: 'Entre em contato com a equipe Vies.',
};

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen bg-zinc-900">
      {/* Video Background Banner */}
      <VideoBanner src="/12552791_1920_1080_30fps.mp4" playbackRate={0.6} />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Coluna da Esquerda (Texto) */}
          <div className="lg:col-span-4 flex flex-col pt-4">
            <AnimatedSection>
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#d75310] mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Orçamento sob medida
              </h1>
              
              <div className="w-12 h-px bg-zinc-700 mb-8"></div>
              
              <p className="text-zinc-200 text-lg md:text-xl font-medium mb-12 max-w-[300px] leading-relaxed" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Retornaremos o seu contato para te ouvir e entender a sua necessidade em detalhes.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-[2px] h-4 bg-zinc-500"></div>
                <p className="text-zinc-400 text-sm">Seus dados estarão seguros.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Coluna da Direita (Formulário) */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
