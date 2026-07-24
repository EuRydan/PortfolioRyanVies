import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BlogContent } from './BlogContent';

export const metadata = {
  title: 'Blog - Vies',
  description: 'Acompanhe as novidades e artigos do nosso blog.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-900 pb-20 md:pb-32 pt-24 md:pt-0">
      
      {/* Blog Header Section */}
      <section className="w-full bg-black flex items-center pt-20 md:pt-24" style={{ height: '400.11px' }}>
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          
            {/* Left Column: Title */}
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <AnimatedSection>
                <h2 
                  className="text-sm sm:text-base uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-6" 
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  Blog
                </h2>
              </AnimatedSection>
            </div>

            {/* Right Column: Content */}
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col">
              <AnimatedSection delay={0.1}>
                <h3 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  Insights, estratégias e as últimas tendências em design e tecnologia.
                </h3>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                  Bem-vindo ao blog da Vies. Aqui compartilhamos nosso conhecimento prático sobre criação de produtos digitais, design focado em conversão e estratégias eficientes para transformar ideias em experiências memoráveis que geram valor para sua marca.
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Filter and Articles Section */}
      <BlogContent />

    </main>
  );
}
