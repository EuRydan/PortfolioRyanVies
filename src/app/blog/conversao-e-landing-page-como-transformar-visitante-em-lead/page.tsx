import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'));

export const metadata: Metadata = {
  title: 'Conversão e landing page: como transformar visitante em lead com estratégia | Vies Studios',
  description: 'Uma landing page bonita não garante resultado. Entenda o que realmente aumenta conversão, os erros que derrubam performance e como estruturar uma página pensada para gerar leads de verdade.',
  keywords: ['conversão em landing page', 'landing page eficiente', 'como aumentar conversão', 'elementos de landing page', 'otimização de conversão'],
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/conversao-e-landing-page-como-transformar-visitante-em-lead",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'o-que-e-conversao', label: 'O que é conversão, na prática' },
    { id: 'diferenca-institucional', label: 'O que diferencia uma landing page de um site institucional' },
    { id: 'elementos-conversao', label: 'Elementos que aumentam conversão' },
    { id: 'erros-comuns', label: 'Erros que derrubam resultados' },
    { id: 'pensar-estrategicamente', label: 'Como pensar a landing page estrategicamente' },
    { id: 'testes-otimizacao', label: 'Testes e otimização' },
    { id: 'conversao-consequencia', label: 'Conversão é consequência' },
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
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">Conversão e landing pages</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Conversão e landing page: como transformar visitante em lead com estratégia
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Uma landing page bonita não garante resultado. Entenda o que realmente aumenta conversão, os erros que derrubam performance e como estruturar uma página pensada para gerar leads de verdade.
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
                    28 Jul 2026 <span className="mx-1">&middot;</span> 5 min de leitura
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
                src="/marketing/pexels-tranmautritam-326514.jpg" 
                alt="Conversão e landing pages"
                className="w-full h-full object-cover"
              />
            </div>

            
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={`Muita empresa investe em anúncio, produz conteúdo, atrai tráfego para o site, e mesmo assim vê pouco retorno em leads ou vendas. O problema quase nunca está na quantidade de visitantes. Está no que acontece depois que a pessoa chega na página. Conversão é o objetivo real de uma landing page. De nada adianta um design bonito se o visitante entra, olha, e sai sem fazer nada. Esse resultado depende da combinação entre estratégia, design e conteúdo trabalhando juntos, com cada elemento da página cumprindo uma função específica dentro do processo de decisão do usuário. Neste artigo, você vai ver os elementos que fazem uma landing page performar, os erros mais comuns que derrubam resultado e como pensar a página de forma estratégica, com dados guiando as decisões. O que é conversão, na prática Conversão acontece quando o visitante realiza a ação que a página propõe. Pode ser preencher um formulário, pedir um orçamento, baixar um material ou fechar uma compra. O formato muda de acordo com o objetivo do negócio naquele momento. Nem toda visita precisa terminar em venda imediata. Em muitos casos, o objetivo da landing page é qualificar o lead, coletando informações suficientes para que o time comercial continue a conversa depois. Uma página de topo de funil que gera um cadastro qualificado já cumpriu seu papel, mesmo sem fechar negócio na hora. O valor de cada conversão varia conforme a meta definida antes de a página existir. Por isso, o primeiro passo de qualquer projeto de landing page é decidir com clareza qual ação o visitante deve tomar ali. O que diferencia uma landing page de um site institucional Um site institucional apresenta a empresa como um todo: serviços, história, equipe, contato. Ele existe para dar suporte a várias jornadas diferentes, com múltiplos caminhos de navegação. A landing page trabalha de outro jeito. Ela tem um único objetivo e elimina tudo que possa distrair o visitante desse caminho. Sem menu de navegação espalhando atenção, sem links para outras páginas, sem informações que não ajudam a decisão. Cada bloco da página existe para reforçar a mesma mensagem e acelerar a ação que o negócio precisa. Essa diferença de propósito muda completamente como a página deve ser construída, escrita e estruturada. Elementos que aumentam conversão Algumas peças aparecem em praticamente toda landing page de alta performance, independente do segmento: Headline clara e orientada a benefício. O título precisa comunicar, em poucos segundos, o que o visitante ganha ali. Criatividade só ajuda se a mensagem continuar clara na primeira leitura. Subtítulo que amplia a promessa. Complementa o título, adiciona contexto e reforça o motivo pelo qual vale a pena continuar lendo. CTA direto e visível. O botão de ação precisa estar claro, sem ambiguidade sobre o que acontece ao clicar. Prova social. Depoimentos, números de clientes atendidos, cases reais. Esse tipo de elemento reduz a insegurança de quem ainda não conhece a marca. Visual limpo e coerente com a oferta. Design que apoia a mensagem, sem competir com ela. Formulário curto. Cada campo extra reduz a taxa de conversão. Pedir só o essencial para o próximo contato costuma performar melhor do que formulários longos. Versão mobile bem resolvida. Boa parte do tráfego chega pelo celular, e uma página que funciona mal nesse formato perde conversão antes mesmo de o visitante ler o conteúdo. Erros que derrubam resultados Alguns problemas se repetem com frequência em landing pages que não performam: Título genérico, que não comunica nenhum benefício específico. Vários CTAs competindo entre si, deixando o visitante em dúvida sobre qual ação tomar. Texto longo, sem direção clara sobre o que a página quer do leitor. Formulário complicado, pedindo informação demais logo no primeiro contato. Excesso de elementos visuais, animações e blocos que distraem em vez de guiar. Falta de prova social, deixando a oferta sem respaldo. Página lenta ou mal adaptada ao celular, afastando quem acessa pelo mobile. Cada um desses pontos, isolado, já reduz conversão. Combinados, formam páginas que recebem tráfego pago e continuam sem gerar resultado proporcional ao investimento. Como pensar a landing page estrategicamente O ponto de partida de uma boa landing page é a dor do público, antes de qualquer decisão de layout. Antes de definir cores, fontes ou blocos visuais, vale mapear o que o visitante busca, qual objeção ele carrega e o que precisa ouvir para seguir adiante. A partir disso, a mensagem se estrutura pela proposta de valor, colocando o benefício principal antes de qualquer detalhe técnico ou institucional. Informações secundárias entram depois, reduzindo dúvidas e objeções ao longo da rolagem da página. Outro ponto importante é a coerência com a origem do tráfego. Uma página que recebe visitantes de um anúncio específico precisa continuar a mesma conversa iniciada no anúncio. O mesmo vale para tráfego vindo de e-mail marketing ou conteúdo orgânico. Quebrar essa continuidade de mensagem costuma derrubar a taxa de conversão, mesmo com uma página bem construída. Testes e otimização Landing page boa melhora com dados, não com opinião. A prática mais usada nesse processo é o teste A/B, que compara duas versões da página para entender qual performa melhor com o público real. Vale testar headline, CTA, imagem principal, ordem dos blocos e estrutura do formulário. O ponto central é mudar uma variável por vez em cada teste. Alterar vários elementos ao mesmo tempo impede identificar o que realmente causou a mudança nos resultados, seja para melhor ou para pior. Esse processo de ajuste contínuo separa páginas que convertem bem de páginas que ficam no ar do jeito que foram lançadas, sem nenhuma evolução baseada em comportamento real do usuário. Conversão é consequência Conversão acontece quando a página comunica com clareza, entrega relevância para quem está ali e transmite confiança suficiente para o próximo passo. Landing page objetiva, com mensagem direta e foco em uma única ação, costuma performar melhor do que página cheia de elementos tentando cobrir todos os argumentos possíveis. Na Viés Studios, cada landing page nasce de uma combinação entre estratégia, design e conteúdo, pensada para o objetivo comercial específico daquele projeto dentro da jornada do cliente. Quer transformar sua landing page em uma ferramenta real de conversão? Fale com a Viés Studios e crie páginas pensadas para resultado, não só para aparência. Falar com especialista`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Muita empresa investe em anúncio, produz conteúdo, atrai tráfego para o site, e mesmo assim vê pouco retorno em leads ou vendas. O problema quase nunca está na quantidade de visitantes. Está no que acontece depois que a pessoa chega na página.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Conversão é o objetivo real de uma landing page. De nada adianta um design bonito se o visitante entra, olha, e sai sem fazer nada. Esse resultado depende da combinação entre estratégia, design e conteúdo trabalhando juntos, com cada elemento da página cumprindo uma função específica dentro do processo de decisão do usuário.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Neste artigo, você vai ver os elementos que fazem uma landing page performar, os erros mais comuns que derrubam resultado e como pensar a página de forma estratégica, com dados guiando as decisões.
              </p>

              <h3 id="o-que-e-conversao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que é conversão, na prática
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Conversão acontece quando o visitante realiza a ação que a página propõe. Pode ser preencher um formulário, pedir um orçamento, baixar um material ou fechar uma compra. O formato muda de acordo com o objetivo do negócio naquele momento.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Nem toda visita precisa terminar em venda imediata. Em muitos casos, o objetivo da landing page é qualificar o lead, coletando informações suficientes para que o time comercial continue a conversa depois. Uma página de topo de funil que gera um cadastro qualificado já cumpriu seu papel, mesmo sem fechar negócio na hora.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                O valor de cada conversão varia conforme a meta definida antes de a página existir. Por isso, o primeiro passo de qualquer projeto de landing page é decidir com clareza qual ação o visitante deve tomar ali.
              </p>

              <h3 id="diferenca-institucional" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que diferencia uma landing page de um site institucional
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Um site institucional apresenta a empresa como um todo: serviços, história, equipe, contato. Ele existe para dar suporte a várias jornadas diferentes, com múltiplos caminhos de navegação.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                A landing page trabalha de outro jeito. Ela tem um único objetivo e elimina tudo que possa distrair o visitante desse caminho. Sem menu de navegação espalhando atenção, sem links para outras páginas, sem informações que não ajudam a decisão. Cada bloco da página existe para reforçar a mesma mensagem e acelerar a ação que o negócio precisa.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Essa diferença de propósito muda completamente como a página deve ser construída, escrita e estruturada.
              </p>

              <h3 id="elementos-conversao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Elementos que aumentam conversão
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Algumas peças aparecem em praticamente toda landing page de alta performance, independente do segmento:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-12 space-y-4">
                <li><strong>Headline clara e orientada a benefício.</strong> O título precisa comunicar, em poucos segundos, o que o visitante ganha ali. Criatividade só ajuda se a mensagem continuar clara na primeira leitura.</li>
                <li><strong>Subtítulo que amplia a promessa.</strong> Complementa o título, adiciona contexto e reforça o motivo pelo qual vale a pena continuar lendo.</li>
                <li><strong>CTA direto e visível.</strong> O botão de ação precisa estar claro, sem ambiguidade sobre o que acontece ao clicar.</li>
                <li><strong>Prova social.</strong> Depoimentos, números de clientes atendidos, cases reais. Esse tipo de elemento reduz a insegurança de quem ainda não conhece a marca.</li>
                <li><strong>Visual limpo e coerente com a oferta.</strong> Design que apoia a mensagem, sem competir com ela.</li>
                <li><strong>Formulário curto.</strong> Cada campo extra reduz a taxa de conversão. Pedir só o essencial para o próximo contato costuma performar melhor do que formulários longos.</li>
                <li><strong>Versão mobile bem resolvida.</strong> Boa parte do tráfego chega pelo celular, e uma página que funciona mal nesse formato perde conversão antes mesmo de o visitante ler o conteúdo.</li>
              </ul>

              <h3 id="erros-comuns" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Erros que derrubam resultados
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Alguns problemas se repetem com frequência em landing pages que não performam:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Título genérico, que não comunica nenhum benefício específico.</li>
                <li>Vários CTAs competindo entre si, deixando o visitante em dúvida sobre qual ação tomar.</li>
                <li>Texto longo, sem direção clara sobre o que a página quer do leitor.</li>
                <li>Formulário complicado, pedindo informação demais logo no primeiro contato.</li>
                <li>Excesso de elementos visuais, animações e blocos que distraem em vez de guiar.</li>
                <li>Falta de prova social, deixando a oferta sem respaldo.</li>
                <li>Página lenta ou mal adaptada ao celular, afastando quem acessa pelo mobile.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Cada um desses pontos, isolado, já reduz conversão. Combinados, formam páginas que recebem tráfego pago e continuam sem gerar resultado proporcional ao investimento.
              </p>

              <h3 id="pensar-estrategicamente" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Como pensar a landing page estrategicamente
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O ponto de partida de uma boa landing page é a dor do público, antes de qualquer decisão de layout. Antes de definir cores, fontes ou blocos visuais, vale mapear o que o visitante busca, qual objeção ele carrega e o que precisa ouvir para seguir adiante.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                A partir disso, a mensagem se estrutura pela proposta de valor, colocando o benefício principal antes de qualquer detalhe técnico ou institucional. Informações secundárias entram depois, reduzindo dúvidas e objeções ao longo da rolagem da página.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Outro ponto importante é a coerência com a origem do tráfego. Uma página que recebe visitantes de um anúncio específico precisa continuar a mesma conversa iniciada no anúncio. O mesmo vale para tráfego vindo de e-mail marketing ou conteúdo orgânico. Quebrar essa continuidade de mensagem costuma derrubar a taxa de conversão, mesmo com uma página bem construída.
              </p>

              <h3 id="testes-otimizacao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Testes e otimização
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Landing page boa melhora com dados, não com opinião. A prática mais usada nesse processo é o teste A/B, que compara duas versões da página para entender qual performa melhor com o público real.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Vale testar headline, CTA, imagem principal, ordem dos blocos e estrutura do formulário. O ponto central é mudar uma variável por vez em cada teste. Alterar vários elementos ao mesmo tempo impede identificar o que realmente causou a mudança nos resultados, seja para melhor ou para pior.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Esse processo de ajuste contínuo separa páginas que convertem bem de páginas que ficam no ar do jeito que foram lançadas, sem nenhuma evolução baseada em comportamento real do usuário.
              </p>

              <h3 id="conversao-consequencia" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Conversão é consequência
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Conversão acontece quando a página comunica com clareza, entrega relevância para quem está ali e transmite confiança suficiente para o próximo passo. Landing page objetiva, com mensagem direta e foco em uma única ação, costuma performar melhor do que página cheia de elementos tentando cobrir todos os argumentos possíveis.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Na Viés Studios, cada landing page nasce de uma combinação entre estratégia, design e conteúdo, pensada para o objetivo comercial específico daquele projeto dentro da jornada do cliente.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Quer transformar sua landing page em uma ferramenta real de conversão?
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  Fale com a Viés Studios e crie páginas pensadas para resultado, não só para aparência.
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
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Toda empresa precisa de uma landing page?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      Se você roda anúncios (tráfego pago) ou faz campanhas com um objetivo específico, sim. Mandar quem clica no seu anúncio para a página inicial do seu site institucional faz o visitante se perder no meio de tanta informação. A landing page mantém o foco em uma única oferta e aumenta drasticamente a taxa de conversão.
                    </p>
                  </div>
                  
                  <div className="border-b border-zinc-200 pb-6">
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">O que não pode faltar em uma landing page que converte?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      Uma promessa clara logo na primeira dobra (aquela que aparece antes de rolar a página), botões de chamada para ação (CTAs) bem posicionados e contrastantes, formulário enxuto focado no essencial, remoção de distrações (como menus complexos) e provas sociais (depoimentos, logos de clientes, métricas).
                    </p>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Qual a diferença entre landing page e site institucional?</h4>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                      O site institucional funciona como a sede da sua empresa na internet: tem todas as informações, página quem somos, portfólio completo de serviços, blog, etc. A landing page tem um único objetivo (como pedir um orçamento de um serviço específico ou baixar um material), sem menus de navegação e sem links de fuga que dispersem a atenção do usuário.
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


