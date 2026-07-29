import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectSplitLayout } from "@/components/layout/ProjectSplitLayout";

const ClientCarousel = dynamic(() => import("@/components/ui/ClientCarousel").then(mod => mod.ClientCarousel));

export const metadata: Metadata = {
  title: "Teainter | Portfólio Vies Studios",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-900 w-full font-sans">
      
      {/* Wrapper do Split Layout */}
      <ProjectSplitLayout
        leftImages={[
          <Image key="1" src="/projects/teainter/teainter-1.png" alt="Projeto Teainter - Apresentação" width={1920} height={1080} className="w-full h-full object-cover" />,
          <Image key="2" src="/projects/teainter/teainter-2.gif" alt="Projeto Teainter - Animação" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="3" src="/projects/teainter/teainter-3.png" alt="Projeto Teainter - Imagem 9" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="4" src="/projects/teainter/teainter-4.png" alt="Projeto Teainter - Texto" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="5" src="/projects/teainter/teainter-5.png" alt="Projeto Teainter - Imagem 4" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="6" src="/projects/teainter/teainter-6.png" alt="Projeto Teainter - Imagem 5" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="7" src="/projects/teainter/teainter-7.png" alt="Projeto Teainter - Imagem 6" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="8" src="/projects/teainter/teainter-8.png" alt="Projeto Teainter - Imagem 7" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="9" src="/projects/teainter/teainter-9.png" alt="Projeto Teainter - Imagem 8" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="10" src="/projects/teainter/teainter-10.png" alt="Projeto Teainter - Imagem 10" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="11" src="/projects/teainter/teainter-11.png" alt="Projeto Teainter - Imagem 11" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="12" src="/projects/teainter/teainter-12.png" alt="Projeto Teainter - Imagem 12" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="13" src="/projects/teainter/teainter-13.png" alt="Projeto Teainter - Imagem 13" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="14" src="/projects/teainter/teainter-14.png" alt="Projeto Teainter - Imagem 14" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="15" src="/projects/teainter/teainter-15.png" alt="Projeto Teainter - Imagem 15" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="16" src="/projects/teainter/teainter-16.png" alt="Projeto Teainter - Imagem 16" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="17" src="/projects/teainter/teainter-17.png" alt="Projeto Teainter - Imagem 17" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="18" src="/projects/teainter/teainter-18.png" alt="Projeto Teainter - Imagem 18" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="19" src="/projects/teainter/teainter-19.png" alt="Projeto Teainter - Imagem 19" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="20" src="/projects/teainter/teainter-20.png" alt="Projeto Teainter - Imagem 20" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="21" src="/projects/teainter/teainter-21.png" alt="Projeto Teainter - Imagem 21" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="22" src="/projects/teainter/teainter-22.png" alt="Projeto Teainter - Imagem 22" width={1920} height={1080} className="w-full h-auto block" />,
          <Image key="23" src="/projects/teainter/teainter-23.png" alt="Projeto Teainter - Imagem 23" width={1920} height={1080} className="w-full h-auto block" />
        ]}
        rightContent={
          <AnimatedSection>
            {/* Logo da Agência */}
            <div className="mb-12">
              <Image src="/brand/icone%20vies%20logo%20branco.svg" alt="Vies Studios" width={120} height={24} className="h-6 w-auto brightness-0" />
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
              TEAINTER
            </h1>

            {/* Conteúdo do Projeto */}
            <div className="space-y-8 text-zinc-600 text-sm md:text-[15px] leading-relaxed">
              <p>
                A Teainter é uma clínica de intervenção comportamental dedicada a crianças com TEA, com uma equipe multidisciplinar que reúne psicólogos, fonoaudiólogos, pedagogos, nutricionistas e terapeutas ocupacionais. O trabalho é sério, humano e cheio de cuidado. A identidade visual precisava dizer isso sem abrir mão de leveza.
              </p>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">O desafio</h3>
                <p>
                  A marca existia, mas não traduzia visualmente o que a Teainter representa na prática. Era hora de repensar tudo: símbolo, paleta, tipografia, tom. Não uma reforma, uma reconstrução com propósito.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">O símbolo</h3>
                <p>
                  O ponto de partida foi o nome. As letras T e i da Teainter, quando combinadas, formam naturalmente o contorno de um peixe em movimento. Esse símbolo carrega duas leituras ao mesmo tempo: a identidade da marca e a ideia de desenvolvimento, fluidez e progresso, qualidades centrais no trabalho com crianças no espectro.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">Sistema visual</h3>
                <p className="mb-4">
                  A paleta foi construída em camadas. As cores principais, verde, roxo, vermelho e amarelo, representam calma, foco, energia e alegria. As complementares aprofundam cada um desses valores sem perder a coerência. O resultado é um sistema vibrante mas equilibrado, capaz de funcionar tanto em materiais clínicos quanto em comunicação para famílias.
                </p>
                <p>
                  A tipografia combina Neulis e Poppins: uma para a voz interna da marca, outra para o diálogo com o mundo. Elementos orgânicos e ilustrativos completam o sistema, trazendo movimento e afeto para cada peça.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">Aplicações</h3>
                <p>
                  Da papelaria ao uniforme, dos posts de Instagram aos cartões de visita, cada ponto de contato foi pensado para reforçar a mesma sensação: um lugar seguro, profissional e acolhedor. A marca funciona no jaleco de uma terapeuta da mesma forma que funciona num outdoor ou numa tela de celular.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-900 font-bold mb-3">O que ficou</h3>
                <p>
                  Uma identidade que respeita a seriedade do trabalho sem abrir mão da humanidade. A Teainter saiu do projeto com uma marca que as famílias reconhecem, confiam e sentem.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col gap-4">
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-bold text-zinc-900 text-sm md:text-[15px]">Cliente</span>
                <span className="text-zinc-600 text-sm md:text-[15px]">Teainter Intervenção Comportamental</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-bold text-zinc-900 text-sm md:text-[15px]">Serviços</span>
                <span className="text-zinc-600 text-sm md:text-[15px]">Rebranding, Identidade Visual, Design System, Social Media</span>
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
      <section className="w-full pt-20 md:pt-32 lg:pt-40 pb-20 md:pb-32 lg:pb-40 overflow-hidden bg-zinc-900">
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
