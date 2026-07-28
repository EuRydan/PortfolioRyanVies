import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';

export const metadata: Metadata = {
  title: 'Velocidade de site afeta o caixa da empresa, não só a nota no PageSpeed | Vies Studios',
  description: 'Um site lento perde cliente antes mesmo de mostrar o produto. Entenda por que a velocidade de carregamento afeta SEO, conversão e a experiência do usuário, e veja como corrigimos isso na prática.',
  keywords: ['velocidade de site', 'performance de site', 'Core Web Vitals', 'otimização de site', 'SEO técnico'],
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/velocidade-de-site-nao-e-detalhe-tecnico",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'por-que-velocidade', label: 'Por que a velocidade pesa tanto no SEO' },
    { id: 'o-que-deixa-lento', label: 'O que costuma deixar um site lento' },
    { id: 'exemplo-vies', label: 'Um exemplo real: o site da Viés' },
    { id: 'como-medir', label: 'Como medir a performance do seu site' },
    { id: 'o-que-priorizar', label: 'O que priorizar primeiro' },
    { id: 'primeira-impressao', label: 'Velocidade é parte da primeira impressão' },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      {/* Article Header Section */}
      <section className="w-full bg-black flex flex-col justify-center pt-24 md:pt-32 pb-16 lg:pb-24 relative overflow-hidden" style={{ minHeight: '534px' }}>
        <ParallaxBackground src="/brand/bg-header.jpg" />
        
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-14 lg:px-24 relative z-10">
          
          <AnimatedSection className="mb-8">
            <Link href="/blog" className="text-zinc-400 font-bold text-xs tracking-widest uppercase hover:text-[#d75310] transition-colors inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o Blog
            </Link>
          </AnimatedSection>

          <div className="flex flex-col items-start">
            <AnimatedSection>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">Performance e SEO</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Velocidade de site afeta o caixa da empresa, não só a nota no PageSpeed
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Um site lento perde cliente antes mesmo de mostrar o produto. Entenda por que a velocidade de carregamento afeta SEO, conversão e a experiência do usuário, e veja como corrigimos isso na prática.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-4 mt-8">
                <img 
                  src="/marketing/Ryan%20Ferreira.jpeg" 
                  alt="Ryan Ferreira" 
                  className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                    Ryan Ferreira
                  </span>
                  <span className="text-zinc-500 text-sm font-medium mt-0.5">
                    27 Jul 2026 <span className="mx-1">&middot;</span> 4 min de leitura
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="w-full flex-1 bg-white py-10 md:py-16 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-14 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="flex-1 min-w-0 w-full max-w-3xl flex flex-col">
            
            <div className="w-full aspect-video md:aspect-[21/9] bg-zinc-100 rounded-xl overflow-hidden mb-12">
              <img 
                src="/marketing/pexels-cottonbro-6986455.jpg" 
                alt="Velocidade de site"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Todo mundo já passou por isso. Você clica em um link, a página começa a carregar, passam dois, três segundos, e nada aparece além de uma tela branca. Na maioria das vezes, o usuário simplesmente sai. Não espera, não dá uma segunda chance. E o Google percebe esse comportamento e usa isso contra o site nos rankings de busca.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Performance já saiu do departamento de tecnologia e virou pauta de reunião comercial. Ela impacta diretamente em três coisas que qualquer empresa quer: aparecer no Google, converter visitante em cliente e passar credibilidade.
              </p>

              <h3 id="por-que-velocidade" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que a velocidade pesa tanto no SEO
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Desde que o Google incorporou os Core Web Vitals como fator de ranqueamento, a métrica de "quão rápido seu site entrega conteúdo útil" ganhou peso oficial nos resultados de busca. Isso inclui três indicadores principais:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>LCP (Largest Contentful Paint)</strong>: tempo até o maior elemento visível da página carregar.</li>
                <li><strong>INP (Interaction to Next Paint)</strong>: tempo de resposta quando o usuário clica ou interage.</li>
                <li><strong>CLS (Cumulative Layout Shift)</strong>: quanto o layout "pula" enquanto a página carrega.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Um site que demora demais para responder nesses três pontos tende a perder posição para concorrentes mais rápidos, mesmo com conteúdo parecido. Dois sites podem ter o mesmo texto, as mesmas palavras-chave, a mesma qualidade de escrita, e o mais rápido ainda vai na frente.
              </p>

              <h3 id="o-que-deixa-lento" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que costuma deixar um site lento
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na prática, a maioria dos problemas de performance se repete de projeto para projeto:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>Imagens e vídeos pesados demais.</strong> Arquivos exportados direto da câmera ou do design sem nenhuma compressão.</li>
                <li><strong>Excesso de scripts carregando ao mesmo tempo.</strong> Pixels de rastreamento, chats, animações, tudo disputando banda no primeiro carregamento.</li>
                <li><strong>Hospedagem sem CDN.</strong> Servidor único e distante do usuário, aumentando o tempo de resposta.</li>
                <li><strong>Falta de lazy loading.</strong> A página carrega tudo de uma vez, mesmo o que está lá embaixo, fora da tela.</li>
                <li><strong>Código não otimizado.</strong> Bibliotecas inteiras importadas quando só uma função pequena era necessária.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Isoladamente, cada um desses pontos parece pequeno. Juntos, formam a diferença entre um site que carrega em menos de dois segundos e outro que trava o usuário por seis, sete segundos.
              </p>

              <h3 id="exemplo-vies" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Um exemplo real: o site da Viés Studios
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Quando estávamos desenvolvendo nosso próprio site institucional, rodamos o PageSpeed Insights e o resultado inicial foi 44 pontos. Um número que deixa claro: por mais bonito que o site esteja, a experiência técnica não estava à altura.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O maior vilão eram os vídeos de fundo usados nas seções de destaque. Arquivos grandes, sem compressão adequada, carregando de forma bloqueante. A solução envolveu dois ajustes principais:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Compressão dos vídeos usando CloudConvert, reduzindo o peso dos arquivos sem perder qualidade visual perceptível.</li>
                <li>Lazy loading dos componentes mais pesados usando o <code>next/dynamic</code>, do Next.js, para que elementos fora da área visível só carreguem quando o usuário rolar a página até eles.</li>
              </ul>

              <div className="bg-zinc-50 border-l-4 border-[#d75310] p-6 my-8 rounded-r-xl">
                <p className="text-zinc-700 italic text-lg m-0 font-bold">
                  Resultado: o score subiu de 44 para 83. Quase o dobro, sem trocar uma linha de design, só ajustando como e quando o conteúdo é entregue ao navegador.
                </p>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Basta identificar o gargalo certo e atacar ele direto para conseguir esse tipo de ganho, sem reconstruir nada.
              </p>

              <h3 id="como-medir" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Como medir a performance do seu site
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Antes de qualquer otimização, é preciso saber onde o site está hoje. Algumas ferramentas gratuitas ajudam nisso:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>Google PageSpeed Insights:</strong> mostra a nota de performance em desktop e mobile, além dos Core Web Vitals detalhados.</li>
                <li><strong>Google Search Console:</strong> na seção de Core Web Vitals, mostra como o Google está avaliando as páginas do site com o tempo, com base em dados reais de usuários.</li>
                <li><strong>Lighthouse (no Chrome DevTools):</strong> roda uma auditoria completa direto no navegador, incluindo sugestões específicas de correção.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Vale rodar esses testes periodicamente, principalmente depois de adicionar novas seções, imagens ou integrações ao site. Performance pede revisão de tempos em tempos, sobretudo depois de mudanças no site.
              </p>

              <h3 id="o-que-priorizar" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que priorizar primeiro
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Se o objetivo é melhorar a velocidade sem virar o projeto de cabeça para baixo, a ordem de prioridade costuma ser essa:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Comprimir e converter imagens e vídeos para formatos modernos (WebP, MP4 otimizado).</li>
                <li>Aplicar lazy loading em tudo que não aparece na primeira dobra da página.</li>
                <li>Revisar scripts de terceiros e remover o que não está sendo usado de verdade.</li>
                <li>Garantir que a hospedagem tenha CDN ativo, distribuindo o conteúdo mais perto do usuário.</li>
                <li>Monitorar os Core Web Vitals no Search Console com frequência.</li>
              </ul>

              <h3 id="primeira-impressao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Velocidade é parte da primeira impressão
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Um site rápido comunica profissionalismo antes mesmo do usuário ler a primeira frase. Passa a sensação de que a empresa por trás dele cuida dos detalhes, e isso reflete direto na taxa de conversão e na confiança que o visitante deposita na marca.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na Vies Studios, performance entra como critério desde o início do projeto, junto com segurança e SEO. Pensar nisso na estrutura do site sai mais barato do que remendar depois que ele já está no ar cheio de gargalos.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Seu site está lento e você não sabe o porquê?
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                  Se o seu site demora para carregar, vale rodar um teste no PageSpeed Insights hoje mesmo. Às vezes a diferença entre perder ou ganhar um cliente está em menos de dois segundos de espera.
                </p>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  Nós podemos te ajudar a diagnosticar e resolver gargalos de performance que estão travando seus resultados.
                </p>
                <Link href="/fale-conosco" className="inline-block bg-[#d75310] hover:bg-[#b5440c] text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Falar com especialista
                </Link>
              </div>

            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="w-[280px] shrink-0 hidden lg:block sticky top-32">
            <TableOfContents items={tocItems} />
          </aside>

        </div>
      </section>
    </main>
  );
}
