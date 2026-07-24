import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Blog - Vies',
  description: 'Acompanhe as novidades e artigos do nosso blog.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-900 pb-0 pt-32">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
        <AnimatedSection className="flex flex-col items-start mb-12">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Blog
          </h1>
          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl">
            Em breve, novidades e artigos sobre tecnologia, design, branding e UX.
          </p>
        </AnimatedSection>
      </div>
    </main>
  );
}
