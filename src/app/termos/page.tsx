import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Vies Studios',
  description: 'Termos e condições de uso dos nossos serviços e site.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/termos",
  },
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-zinc-900 pt-32 pb-24">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-14">
        <AnimatedSection>
          <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-[#d75310] transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o início
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
            Termos de Uso
          </h1>
          <p className="text-zinc-400 mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-invert prose-zinc max-w-none">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Ao acessar e utilizar o site da Vies, você concorda em cumprir e ficar vinculado a estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deverá acessar ou utilizar nosso site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso do Site</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Você concorda em usar nosso site apenas para fins legais e de maneira que não infrinja os direitos de, 
            restrinja ou iniba o uso e usufruto do site por qualquer terceiro. Comportamentos proibidos incluem assediar 
            ou causar angústia ou inconveniência a qualquer pessoa, transmitir conteúdo obsceno ou ofensivo, ou interromper o fluxo normal de diálogo no site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Propriedade Intelectual</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, imagens, clipes de áudio, downloads digitais e compilações de dados 
            é de propriedade da Vies ou de seus fornecedores de conteúdo e é protegido pelas leis internacionais de direitos autorais.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitação de Responsabilidade</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            A Vies não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes 
            que resultem do uso ou da incapacidade de usar nosso site ou serviços, incluindo, mas não se limitando a, confiança do usuário em qualquer informação obtida no site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Modificações dos Termos</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            A Vies reserva-se o direito de revisar estes Termos de Uso a qualquer momento sem aviso prévio. 
            Ao usar este site, você concorda em ficar vinculado à versão atual desses Termos de Uso.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Lei Aplicável</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete 
            irrevogavelmente à jurisdição exclusiva dos tribunais daquele estado ou localidade.
          </p>
        </AnimatedSection>
      </div>
    </main>
  );
}
