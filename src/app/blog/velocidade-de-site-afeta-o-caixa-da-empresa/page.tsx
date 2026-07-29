import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'));

export const metadata: Metadata = {
  title: 'Velocidade de site afeta o caixa da empresa, nÃ£o sÃ³ a nota no PageSpeed | Vies Studios',
  description: 'Um site lento perde cliente antes mesmo de mostrar o produto. Entenda por que a velocidade de carregamento afeta SEO, conversÃ£o e a experiÃªncia do usuÃ¡rio, e veja como corrigimos isso na prÃ¡tica.',
  keywords: ['velocidade de site', 'performance de site', 'Core Web Vitals', 'otimizaÃ§Ã£o de site', 'SEO tÃ©cnico'],
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/velocidade-de-site-afeta-o-caixa-da-empresa",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'por-que-velocidade', label: 'Por que a velocidade pesa tanto no SEO' },
    { id: 'o-que-deixa-lento', label: 'O que costuma deixar um site lento' },
    { id: 'exemplo-vies', label: 'Um exemplo real: o site da ViÃ©s Studios' },
    { id: 'como-medir', label: 'Como medir a performance do seu site' },
    { id: 'o-que-priorizar', label: 'O que priorizar primeiro' },
    { id: 'primeira-impressao', label: 'Velocidade Ã© parte da primeira impressÃ£o' },
    { id: 'faq', label: 'Perguntas frequentes' },
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
                Velocidade de site afeta o caixa da empresa, nÃ£o sÃ³ a nota no PageSpeed
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Um site lento perde cliente antes mesmo de mostrar o produto. Entenda por que a velocidade de carregamento afeta SEO, conversÃ£o e a experiÃªncia do usuÃ¡rio, e veja como corrigimos isso na prÃ¡tica.
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

            
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={`Todo mundo jÃ¡ passou por isso. VocÃª clica em um link, a pÃ¡gina comeÃ§a a carregar, passam dois, trÃªs segundos, e nada aparece alÃ©m de uma tela branca. Na maioria das vezes, o usuÃ¡rio simplesmente sai. NÃ£o espera, nÃ£o dÃ¡ uma segunda chance. E o Google percebe esse comportamento e usa isso contra o site nos rankings de busca. Performance jÃ¡ saiu do departamento de tecnologia e virou pauta de reuniÃ£o comercial. Ela impacta diretamente em trÃªs coisas que qualquer empresa quer: aparecer no Google, converter visitante em cliente e passar credibilidade. Por que a velocidade pesa tanto no SEO Desde que o Google incorporou os Core Web Vitals como fator de ranqueamento, a mÃ©trica de "quÃ£o rÃ¡pido seu site entrega conteÃºdo Ãºtil" ganhou peso oficial nos resultados de busca. Isso inclui trÃªs indicadores principais: LCP (Largest Contentful Paint) : tempo atÃ© o maior elemento visÃ­vel da pÃ¡gina carregar. INP (Interaction to Next Paint) : tempo de resposta quando o usuÃ¡rio clica ou interage. CLS (Cumulative Layout Shift) : quanto o layout "pula" enquanto a pÃ¡gina carrega. Um site que demora demais para responder nesses trÃªs pontos tende a perder posiÃ§Ã£o para concorrentes mais rÃ¡pidos, mesmo com conteÃºdo parecido. Dois sites podem ter o mesmo texto, as mesmas palavras-chave, a mesma qualidade de escrita, e o mais rÃ¡pido ainda vai na frente. O que costuma deixar um site lento Na prÃ¡tica, a maioria dos problemas de performance se repete de projeto para projeto: Imagens e vÃ­deos pesados demais. Arquivos exportados direto da cÃ¢mera ou do design sem nenhuma compressÃ£o. Excesso de scripts carregando ao mesmo tempo. Pixels de rastreamento, chats, animaÃ§Ãµes, tudo disputando banda no primeiro carregamento. Hospedagem sem CDN. Servidor Ãºnico e distante do usuÃ¡rio, aumentando o tempo de resposta. Falta de lazy loading. A pÃ¡gina carrega tudo de uma vez, mesmo o que estÃ¡ lÃ¡ embaixo, fora da tela. CÃ³digo nÃ£o otimizado. Bibliotecas inteiras importadas quando sÃ³ uma funÃ§Ã£o pequena era necessÃ¡ria. Isoladamente, cada um desses pontos parece pequeno. Juntos, formam a diferenÃ§a entre um site que carrega em menos de dois segundos e outro que trava o usuÃ¡rio por seis, sete segundos. Um exemplo real: o site da ViÃ©s Studios Quando estÃ¡vamos desenvolvendo nosso prÃ³prio site institucional, rodamos o PageSpeed Insights e o resultado inicial foi 44 pontos. Um nÃºmero que deixa claro: por mais bonito que o site esteja, a experiÃªncia tÃ©cnica nÃ£o estava Ã  altura. O maior vilÃ£o eram os vÃ­deos de fundo usados nas seÃ§Ãµes de destaque. Arquivos grandes, sem compressÃ£o adequada, carregando de forma bloqueante. A soluÃ§Ã£o envolveu dois ajustes principais: CompressÃ£o dos vÃ­deos usando CloudConvert, reduzindo o peso dos arquivos sem perder qualidade visual perceptÃ­vel. Lazy loading dos componentes mais pesados usando o next/dynamic , do Next.js, para que elementos fora da Ã¡rea visÃ­vel sÃ³ carreguem quando o usuÃ¡rio rolar a pÃ¡gina atÃ© eles. Resultado: o score subiu de 44 para 83. Quase o dobro, sem trocar uma linha de design, sÃ³ ajustando como e quando o conteÃºdo Ã© entregue ao navegador. Basta identificar o gargalo certo e atacar ele direto para conseguir esse tipo de ganho, sem reconstruir nada. Como medir a performance do seu site Antes de qualquer otimizaÃ§Ã£o, Ã© preciso saber onde o site estÃ¡ hoje. Algumas ferramentas gratuitas ajudam nisso: Google PageSpeed Insights: mostra a nota de performance em desktop e mobile, alÃ©m dos Core Web Vitals detalhados. Google Search Console: na seÃ§Ã£o de Core Web Vitals, mostra como o Google estÃ¡ avaliando as pÃ¡ginas do site com o tempo, com base em dados reais de usuÃ¡rios. Lighthouse (no Chrome DevTools): roda uma auditoria completa direto no navegador, incluindo sugestÃµes especÃ­ficas de correÃ§Ã£o. Vale rodar esses testes periodicamente, principalmente depois de adicionar novas seÃ§Ãµes, imagens ou integraÃ§Ãµes ao site. Performance pede revisÃ£o de tempos em tempos, sobretudo depois de mudanÃ§as no site. O que priorizar primeiro Se o objetivo Ã© melhorar a velocidade sem virar o projeto de cabeÃ§a para baixo, a ordem de prioridade costuma ser essa: Comprimir e converter imagens e vÃ­deos para formatos modernos (WebP, MP4 otimizado). Aplicar lazy loading em tudo que nÃ£o aparece na primeira dobra da pÃ¡gina. Revisar scripts de terceiros e remover o que nÃ£o estÃ¡ sendo usado de verdade. Garantir que a hospedagem tenha CDN ativo, distribuindo o conteÃºdo mais perto do usuÃ¡rio. Monitorar os Core Web Vitals no Search Console com frequÃªncia. Velocidade Ã© parte da primeira impressÃ£o Um site rÃ¡pido comunica profissionalismo antes mesmo do usuÃ¡rio ler a primeira frase. Passa a sensaÃ§Ã£o de que a empresa por trÃ¡s dele cuida dos detalhes, e isso reflete direto na taxa de conversÃ£o e na confianÃ§a que o visitante deposita na marca. Na Vies Studios, performance entra como critÃ©rio desde o inÃ­cio do projeto, junto com seguranÃ§a e SEO. Pensar nisso na estrutura do site sai mais barato do que remendar depois que ele jÃ¡ estÃ¡ no ar cheio de gargalos. Seu site estÃ¡ lento e vocÃª nÃ£o sabe o porquÃª? Se o seu site demora para carregar, vale rodar um teste no PageSpeed Insights hoje mesmo. Ã€s vezes a diferenÃ§a entre perder ou ganhar um cliente estÃ¡ em menos de dois segundos de espera. NÃ³s podemos te ajudar a diagnosticar e resolver gargalos de performance que estÃ£o travando seus resultados. Falar com especialista`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Todo mundo jÃ¡ passou por isso. VocÃª clica em um link, a pÃ¡gina comeÃ§a a carregar, passam dois, trÃªs segundos, e nada aparece alÃ©m de uma tela branca. Na maioria das vezes, o usuÃ¡rio simplesmente sai. NÃ£o espera, nÃ£o dÃ¡ uma segunda chance. E o Google percebe esse comportamento e usa isso contra o site nos rankings de busca.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Performance jÃ¡ saiu do departamento de tecnologia e virou pauta de reuniÃ£o comercial. Ela impacta diretamente em trÃªs coisas que qualquer empresa quer: aparecer no Google, converter visitante em cliente e passar credibilidade.
              </p>

              <h3 id="por-que-velocidade" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que a velocidade pesa tanto no SEO
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Desde que o Google incorporou os Core Web Vitals como fator de ranqueamento, a mÃ©trica de "quÃ£o rÃ¡pido seu site entrega conteÃºdo Ãºtil" ganhou peso oficial nos resultados de busca. Isso inclui trÃªs indicadores principais:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>LCP (Largest Contentful Paint)</strong>: tempo atÃ© o maior elemento visÃ­vel da pÃ¡gina carregar.</li>
                <li><strong>INP (Interaction to Next Paint)</strong>: tempo de resposta quando o usuÃ¡rio clica ou interage.</li>
                <li><strong>CLS (Cumulative Layout Shift)</strong>: quanto o layout "pula" enquanto a pÃ¡gina carrega.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Um site que demora demais para responder nesses trÃªs pontos tende a perder posiÃ§Ã£o para concorrentes mais rÃ¡pidos, mesmo com conteÃºdo parecido. Dois sites podem ter o mesmo texto, as mesmas palavras-chave, a mesma qualidade de escrita, e o mais rÃ¡pido ainda vai na frente.
              </p>

              <h3 id="o-que-deixa-lento" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que costuma deixar um site lento
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na prÃ¡tica, a maioria dos problemas de performance se repete de projeto para projeto:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>Imagens e vÃ­deos pesados demais.</strong> Arquivos exportados direto da cÃ¢mera ou do design sem nenhuma compressÃ£o.</li>
                <li><strong>Excesso de scripts carregando ao mesmo tempo.</strong> Pixels de rastreamento, chats, animaÃ§Ãµes, tudo disputando banda no primeiro carregamento.</li>
                <li><strong>Hospedagem sem CDN.</strong> Servidor Ãºnico e distante do usuÃ¡rio, aumentando o tempo de resposta.</li>
                <li><strong>Falta de lazy loading.</strong> A pÃ¡gina carrega tudo de uma vez, mesmo o que estÃ¡ lÃ¡ embaixo, fora da tela.</li>
                <li><strong>CÃ³digo nÃ£o otimizado.</strong> Bibliotecas inteiras importadas quando sÃ³ uma funÃ§Ã£o pequena era necessÃ¡ria.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Isoladamente, cada um desses pontos parece pequeno. Juntos, formam a diferenÃ§a entre um site que carrega em menos de dois segundos e outro que trava o usuÃ¡rio por seis, sete segundos.
              </p>

              <h3 id="exemplo-vies" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Um exemplo real: o site da ViÃ©s Studios
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Quando estÃ¡vamos desenvolvendo nosso prÃ³prio site institucional, rodamos o PageSpeed Insights e o resultado inicial foi 44 pontos. Um nÃºmero que deixa claro: por mais bonito que o site esteja, a experiÃªncia tÃ©cnica nÃ£o estava Ã  altura.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O maior vilÃ£o eram os vÃ­deos de fundo usados nas seÃ§Ãµes de destaque. Arquivos grandes, sem compressÃ£o adequada, carregando de forma bloqueante. A soluÃ§Ã£o envolveu dois ajustes principais:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>CompressÃ£o dos vÃ­deos usando CloudConvert, reduzindo o peso dos arquivos sem perder qualidade visual perceptÃ­vel.</li>
                <li>Lazy loading dos componentes mais pesados usando o <code>next/dynamic</code>, do Next.js, para que elementos fora da Ã¡rea visÃ­vel sÃ³ carreguem quando o usuÃ¡rio rolar a pÃ¡gina atÃ© eles.</li>
              </ul>

              <div className="bg-zinc-50 border-l-4 border-[#d75310] p-6 my-8 rounded-r-xl">
                <p className="text-zinc-700 italic text-lg m-0 font-bold">
                  Resultado: o score subiu de 44 para 83. Quase o dobro, sem trocar uma linha de design, sÃ³ ajustando como e quando o conteÃºdo Ã© entregue ao navegador.
                </p>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Basta identificar o gargalo certo e atacar ele direto para conseguir esse tipo de ganho, sem reconstruir nada.
              </p>

              <h3 id="como-medir" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Como medir a performance do seu site
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Antes de qualquer otimizaÃ§Ã£o, Ã© preciso saber onde o site estÃ¡ hoje. Algumas ferramentas gratuitas ajudam nisso:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>Google PageSpeed Insights:</strong> mostra a nota de performance em desktop e mobile, alÃ©m dos Core Web Vitals detalhados.</li>
                <li><strong>Google Search Console:</strong> na seÃ§Ã£o de Core Web Vitals, mostra como o Google estÃ¡ avaliando as pÃ¡ginas do site com o tempo, com base em dados reais de usuÃ¡rios.</li>
                <li><strong>Lighthouse (no Chrome DevTools):</strong> roda uma auditoria completa direto no navegador, incluindo sugestÃµes especÃ­ficas de correÃ§Ã£o.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Vale rodar esses testes periodicamente, principalmente depois de adicionar novas seÃ§Ãµes, imagens ou integraÃ§Ãµes ao site. Performance pede revisÃ£o de tempos em tempos, sobretudo depois de mudanÃ§as no site.
              </p>

              <h3 id="o-que-priorizar" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que priorizar primeiro
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Se o objetivo Ã© melhorar a velocidade sem virar o projeto de cabeÃ§a para baixo, a ordem de prioridade costuma ser essa:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Comprimir e converter imagens e vÃ­deos para formatos modernos (WebP, MP4 otimizado).</li>
                <li>Aplicar lazy loading em tudo que nÃ£o aparece na primeira dobra da pÃ¡gina.</li>
                <li>Revisar scripts de terceiros e remover o que nÃ£o estÃ¡ sendo usado de verdade.</li>
                <li>Garantir que a hospedagem tenha CDN ativo, distribuindo o conteÃºdo mais perto do usuÃ¡rio.</li>
                <li>Monitorar os Core Web Vitals no Search Console com frequÃªncia.</li>
              </ul>

              <h3 id="primeira-impressao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Velocidade Ã© parte da primeira impressÃ£o
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Um site rÃ¡pido comunica profissionalismo antes mesmo do usuÃ¡rio ler a primeira frase. Passa a sensaÃ§Ã£o de que a empresa por trÃ¡s dele cuida dos detalhes, e isso reflete direto na taxa de conversÃ£o e na confianÃ§a que o visitante deposita na marca.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na Vies Studios, performance entra como critÃ©rio desde o inÃ­cio do projeto, junto com seguranÃ§a e SEO. Pensar nisso na estrutura do site sai mais barato do que remendar depois que ele jÃ¡ estÃ¡ no ar cheio de gargalos.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Seu site estÃ¡ lento e vocÃª nÃ£o sabe o porquÃª?
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                  Se o seu site demora para carregar, vale rodar um teste no PageSpeed Insights hoje mesmo. Ã€s vezes a diferenÃ§a entre perder ou ganhar um cliente estÃ¡ em menos de dois segundos de espera.
                </p>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  NÃ³s podemos te ajudar a diagnosticar e resolver gargalos de performance que estÃ£o travando seus resultados.
                </p>
                <Link href="/fale-conosco" className="inline-block bg-[#d75310] hover:bg-[#b5440c] text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Falar com especialista
                </Link>
              </div>

              <>
                <h3 id="faq" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-8 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Perguntas frequentes
                </h3>
                
                <div className="space-y-6 mb-12">
                  <div className="border-b border-zinc-200 pb-6">
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Meu site Ã© feito no WordPress, dÃ¡ pra ficar rÃ¡pido?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      Sim, mas exige mais cuidado. Ã‰ preciso usar um tema leve e otimizado, reduzir drasticamente a quantidade de plugins, implementar um bom sistema de cache de servidor e comprimir todas as imagens. Dependendo do tamanho do projeto, a migraÃ§Ã£o para uma arquitetura moderna como o Next.js pode ser a soluÃ§Ã£o definitiva para o gargalo de velocidade.
                    </p>
                  </div>
                  
                  <div className="border-b border-zinc-200 pb-6">
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">O que Ã© mais importante: carregar rÃ¡pido no celular ou no computador?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      No celular. O Google usa o "Mobile-First Indexing", o que significa que ele avalia a versÃ£o mobile do seu site para definir o ranqueamento geral de SEO. AlÃ©m disso, a maioria esmagadora dos usuÃ¡rios jÃ¡ acessa via smartphone, e conexÃµes de internet mÃ³vel (4G/5G) costumam ser mais instÃ¡veis que as de Wi-Fi.
                    </p>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Quanto tempo meu site deve levar para carregar?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      O ideal Ã© que o maior elemento visÃ­vel (LCP - Largest Contentful Paint) carregue em atÃ© 2,5 segundos. Passou de 3 segundos, vocÃª jÃ¡ comeÃ§a a perder visitantes impacientes e a taxa de rejeiÃ§Ã£o da sua pÃ¡gina tende a disparar exponencialmente.
                    </p>
                  </div>
                </div>
              </>

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


