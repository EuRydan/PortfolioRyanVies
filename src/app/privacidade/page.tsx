import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vies Studios',
  description: 'Nossa política de privacidade e como tratamos seus dados.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/privacidade",
  },
};

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="text-zinc-400 mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-invert prose-zinc max-w-none">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            A Vies ("nós", "nosso", "nossa") respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e nossos serviços.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Dados que Coletamos</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Podemos coletar e processar os seguintes dados pessoais sobre você:
          </p>
          <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
            <li><strong>Dados de Identidade:</strong> nome, sobrenome, nome da empresa.</li>
            <li><strong>Dados de Contato:</strong> endereço de e-mail, número de telefone/WhatsApp.</li>
            <li><strong>Dados Técnicos:</strong> endereço IP, tipo e versão do navegador, configuração de fuso horário, sistema operacional.</li>
            <li><strong>Dados de Uso:</strong> informações sobre como você usa nosso site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Como Usamos Seus Dados</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Utilizamos os dados coletados para as seguintes finalidades:
          </p>
          <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
            <li>Responder a consultas e solicitações de orçamento (via formulário ou WhatsApp).</li>
            <li>Fornecer, operar e manter nosso site.</li>
            <li>Melhorar, personalizar e expandir nossa prestação de serviços.</li>
            <li>Compreender e analisar como você usa nosso site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Compartilhamento de Dados</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Não vendemos, trocamos ou alugamos as informações de identificação pessoal dos usuários para terceiros. 
            Podemos compartilhar informações genéricas demográficas agregadas, não ligadas a qualquer informação de identificação pessoal, 
            com nossos parceiros de negócios e anunciantes para os fins descritos acima.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Seus Direitos</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a correção, 
            a exclusão ou a portabilidade de seus dados pessoais. Para exercer qualquer um desses direitos, 
            entre em contato conosco através do e-mail de contato disponibilizado no site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contato</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: 
            <a href="mailto:contato@viesstudios.com.br" className="text-[#d75310] hover:underline ml-1">contato@viesstudios.com.br</a>.
          </p>
        </AnimatedSection>
      </div>
    </main>
  );
}
