import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectSplitLayout } from "@/components/layout/ProjectSplitLayout";

const ClientCarousel = dynamic(() => import("@/components/ui/ClientCarousel").then(mod => mod.ClientCarousel));

export const metadata: Metadata = {
  title: "Voxis | Portfólio Vies Studios",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-900 w-full font-sans">
      
      {/* Wrapper do Split Layout */}
      <ProjectSplitLayout
        leftBg="bg-white"
        leftImages={[
          <div
            key="1"
            style={{
              backgroundImage: 'url(/projects/voxis/voxis-1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1de4e4',
              aspectRatio: '16/9',
            }}
            className="w-full"
          />,
          <div key="2" className="w-full flex">
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-2.webp" alt="Projeto Voxis - Detalhe 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-3.webp" alt="Projeto Voxis - Detalhe 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-4.webp" alt="Projeto Voxis - Detalhe 3" className="w-full h-full object-cover" />
            </div>
          </div>,
          <img key="3" src="/projects/voxis/voxis-5.png" alt="Projeto Voxis - Imagem 3" className="w-full h-auto block" />,
          <img key="4" src="/projects/voxis/voxis-6.png" alt="Projeto Voxis - Imagem 4" className="w-full h-auto block" />,
          <img key="5" src="/projects/voxis/voxis-7.png" alt="Projeto Voxis - Imagem 5" className="w-full h-auto block" />,
          <img key="6" src="/projects/voxis/voxis-8.png" alt="Projeto Voxis - Imagem 6" className="w-full h-auto block" />,
          <img key="7" src="/projects/voxis/voxis-9.png" alt="Projeto Voxis - Apresentação" className="w-full h-auto block" />,
          <div key="8" className="w-full flex">
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-10.png" alt="Projeto Voxis - Ícone 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-11.webp" alt="Projeto Voxis - Ícone 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-12.webp" alt="Projeto Voxis - Ícone 3" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-13.webp" alt="Projeto Voxis - Ícone 4" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 aspect-square overflow-hidden">
              <img src="/projects/voxis/voxis-14.webp" alt="Projeto Voxis - Ícone 5" className="w-full h-full object-cover" />
            </div>
          </div>,
          <img key="9" src="/projects/voxis/voxis-15.webp" alt="Projeto Voxis - Imagem 9" className="w-full h-auto block" />,
          <img key="10" src="/projects/voxis/voxis-16.png" alt="Projeto Voxis - Imagem 10" className="w-full h-auto block" />,
          <div key="11" className="w-full flex justify-center bg-white py-10">
            <img src="/projects/voxis/voxis-17.png" alt="Projeto Voxis - Imagem 11 (Original)" className="w-auto max-w-full h-auto block" />
          </div>
        ]}
        rightContent={
          <AnimatedSection>
            {/* Logo da Agência */}
            <div className="mb-12">
              <img src="/projects/voxis/voxis-18.svg" alt="Vies Studios" className="h-6 w-auto brightness-0" />
            </div>

            {/* Breadcrumbs */}
            <div className="text-zinc-500 text-sm font-medium mb-12">
              <Link href="/" className="hover:text-[#d75310] transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <Link href="/portfolio" className="hover:text-[#d75310] transition-colors">Portfólio</Link>
            </div>

            {/* Título do Projeto */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              VOXIS
            </h1>

            {/* Conteúdo do Projeto */}
            <div className="space-y-8 text-zinc-600 text-sm md:text-[15px] leading-relaxed">
              <p>
                Pets não são só animais. São companhia, rotina, afeto. A Voxis nasceu para falar diretamente com quem entende isso, tutores que tratam seus bichos com o mesmo cuidado que dedicam à própria família.
              </p>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">A marca</h3>
                <p>
                  O nome Voxis carrega a ideia de voz e conexão. O logotipo reforça isso de forma visual: o "x" central vira um símbolo de encontro, de cruzamento entre duas vidas. A paleta combina roxo intenso, laranja vibrante, verde água e ciano, quatro cores que juntas transmitem confiança, energia, leveza e modernidade, sem perder o calor que o universo pet exige.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">Identidade e sistema</h3>
                <p>
                  A Voxis foi construída pra ser reconhecível em qualquer formato. O símbolo circular com textura orgânica funciona como elemento gráfico independente, aparecendo em peças de comunicação, OOH e embalagens com a mesma força do logotipo completo. O slogan "Cuide, Conecte, Celebre" define o tom em três palavras.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">Aplicações</h3>
                <p>
                  Do ícone de app ao outdoor de rua, o sistema visual se mantém coeso e adaptável. A interface do aplicativo foi concebida dentro da mesma linguagem, com navegação clara e identidade presente em cada tela. Sacola, banner, papelaria e mídia exterior foram trabalhados para que a marca seja reconhecida antes mesmo de ser lida.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">O resultado</h3>
                <p>
                  Uma marca com personalidade definida, que sabe com quem fala e como se posicionar num mercado pet cada vez mais exigente. A Voxis chegou pronta para crescer.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col gap-4">
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-bold text-zinc-900 text-sm md:text-[15px]">Cliente</span>
                <span className="text-zinc-600 text-sm md:text-[15px]">Voxis</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-bold text-zinc-900 text-sm md:text-[15px]">Serviços</span>
                <span className="text-zinc-600 text-sm md:text-[15px]">Identidade Visual, Brand System, UI Design</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-200 flex items-center gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:text-[#d75310] transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/5521978949944" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:text-[#d75310] transition-colors" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </AnimatedSection>
        }
      />

      {/* CTA Banner Laranja */}
      <section className="relative z-10 w-full bg-[#d75310] py-16 md:py-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <AnimatedSection className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left leading-tight uppercase" 
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Vamos falar<br className="hidden md:block" /> sobre seu<br className="hidden md:block" /> próximo passo?
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-8 flex flex-col items-center md:items-start">
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
      <section className="relative z-10 w-full pt-20 md:pt-32 lg:pt-40 pb-20 md:pb-32 lg:pb-40 overflow-hidden bg-zinc-900">
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
