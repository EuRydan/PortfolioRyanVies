import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'));

export const metadata: Metadata = {
  title: 'Quantas brechas o seu site esconde sem vocÃª saber? | Vies Studios',
  description: 'Sites feitos Ã s pressas costumam esconder falhas de seguranÃ§a que colocam dados de clientes em risco. Entenda os riscos mais comuns e por que seguranÃ§a deveria entrar no projeto desde o primeiro dia, nÃ£o depois que algo jÃ¡ deu errado.',
  keywords: ['seguranÃ§a de sites', 'seguranÃ§a web', 'proteÃ§Ã£o de dados', 'vulnerabilidade em sites', 'boas prÃ¡ticas de seguranÃ§a digital'],
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/quantas-brechas-o-seu-site-esconde-sem-voce-saber",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'erros-comuns', label: 'Os erros de seguranÃ§a mais comuns em sites' },
    { id: 'camadas-protecao', label: 'SeguranÃ§a se constrÃ³i em camadas' },
    { id: 'exemplo-webhook', label: 'Um exemplo prÃ¡tico: validaÃ§Ã£o de webhook em pagamentos' },
    { id: 'diferencial-competitivo', label: 'Por que isso tambÃ©m Ã© diferencial competitivo' },
    { id: 'passos-simples', label: 'Passos simples para comeÃ§ar a proteger seu site hoje' },
    { id: 'seguranca-no-projeto', label: 'SeguranÃ§a faz parte do projeto desde o inÃ­cio' },
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
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">SeguranÃ§a de sites</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Quantas brechas o seu site esconde sem vocÃª saber?
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Sites feitos Ã s pressas costumam esconder falhas de seguranÃ§a que colocam dados de clientes em risco. Entenda os riscos mais comuns e por que seguranÃ§a deveria entrar no projeto desde o primeiro dia, nÃ£o depois que algo jÃ¡ deu errado.
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
                src="/marketing/pexels-pixabay-60504.jpg" 
                alt="SeguranÃ§a de sites"
                className="w-full h-full object-cover"
              />
            </div>

            
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={`Grande parte das empresas sÃ³ pensa em seguranÃ§a depois que algo jÃ¡ deu errado. Um formulÃ¡rio invadido, um banco de dados exposto, um cliente reclamando que recebeu cobranÃ§a duplicada porque alguÃ©m manipulou uma URL. Nesse momento, o prejuÃ­zo jÃ¡ passou de tÃ©cnico para reputacional. E confianÃ§a Ã© bem mais difÃ­cil de recuperar do que qualquer bug. Com a explosÃ£o de ferramentas de IA para criar sites e aplicaÃ§Ãµes rapidamente, esse risco cresceu. Ã‰ comum ver projetos montados em poucos dias, funcionando bem visualmente, mas com brechas bÃ¡sicas que qualquer pessoa com um pouco de conhecimento tÃ©cnico consegue explorar. Os erros de seguranÃ§a mais comuns em sites Projetos pequenos, de negÃ³cios locais, costumam apresentar as mesmas falhas de plataformas grandes e complexas. Alguns dos problemas mais frequentes: 1. Dados sensÃ­veis sem proteÃ§Ã£o adequada FormulÃ¡rios de contato, cadastro ou checkout que enviam informaÃ§Ãµes sem validaÃ§Ã£o, permitindo que qualquer pessoa envie dados maliciosos junto com o que era esperado. 2. Falta de controle de acesso Sistemas onde, trocando um nÃºmero na URL, Ã© possÃ­vel acessar informaÃ§Ãµes de outro usuÃ¡rio. Esse tipo de falha, chamada de IDOR, Ã© uma das mais comuns e uma das mais fÃ¡ceis de evitar quando o projeto jÃ¡ nasce pensando nisso. 3. Regras de banco de dados abertas demais Bancos de dados configurados para aceitar leitura ou escrita sem exigir autenticaÃ§Ã£o correta, expondo informaÃ§Ãµes que deveriam estar restritas. 4. Falta de validaÃ§Ã£o em webhooks e integraÃ§Ãµes de pagamento IntegraÃ§Ãµes com gateways de pagamento que nÃ£o validam a assinatura de cada requisiÃ§Ã£o, abrindo espaÃ§o para que alguÃ©m simule uma confirmaÃ§Ã£o de pagamento que nunca aconteceu de verdade. 5. Scripts de terceiros sem controle Chats, pixels e ferramentas de anÃ¡lise adicionados sem revisÃ£o, criando pontos de entrada que ninguÃ©m estÃ¡ monitorando. SeguranÃ§a se constrÃ³i em camadas O conceito mais importante em seguranÃ§a digital envolve trabalhar com camadas de proteÃ§Ã£o, de forma que, se uma falhar, a prÃ³xima ainda segura o problema. Esse princÃ­pio Ã© conhecido como defesa em profundidade, e costuma envolver: ValidaÃ§Ã£o de dados tanto no lado do cliente quanto no servidor. AutenticaÃ§Ã£o e controle de permissÃµes bem definidos para cada tipo de usuÃ¡rio. PolÃ­ticas de seguranÃ§a de conteÃºdo (CSP) para reduzir o risco de scripts maliciosos. Limite de requisiÃ§Ãµes (rate limiting) para evitar abuso em formulÃ¡rios e APIs. Criptografia de dados sensÃ­veis, tanto em trÃ¢nsito quanto armazenados. Nenhuma dessas camadas sozinha garante proteÃ§Ã£o total, mas juntas formam uma barreira consistente contra a maioria dos ataques comuns. Um exemplo prÃ¡tico: validaÃ§Ã£o de webhook em pagamentos Em projetos que envolvem cobranÃ§a recorrente ou pagamento Ãºnico, Ã© comum integrar com gateways como Mercado Pago ou Stripe atravÃ©s de webhooks, notificaÃ§Ãµes automÃ¡ticas que avisam quando um pagamento foi aprovado, recusado ou estornado. O erro mais perigoso nesse tipo de integraÃ§Ã£o Ã© confiar cegamente em qualquer requisiÃ§Ã£o que chega nesse endereÃ§o, sem verificar se ela realmente veio do gateway de pagamento. Sem essa validaÃ§Ã£o, alguÃ©m poderia enviar uma requisiÃ§Ã£o falsa simulando um pagamento aprovado, liberando acesso a um produto ou serviÃ§o sem nenhum valor ter sido pago de verdade. A correÃ§Ã£o correta passa por validar a assinatura de cada requisiÃ§Ã£o usando a chave secreta fornecida pelo gateway, garantindo que sÃ³ notificaÃ§Ãµes legÃ­timas sejam processadas. Ã‰ um ajuste invisÃ­vel para quem visita o site, mas que separa um sistema de pagamento confiÃ¡vel de um sistema vulnerÃ¡vel. Por que isso tambÃ©m Ã© diferencial competitivo Empresas que usam ferramentas de criaÃ§Ã£o rÃ¡pida de sites e aplicaÃ§Ãµes, sem revisÃ£o tÃ©cnica adequada, tendem a deixar esse tipo de falha passar despercebido. Isso cria uma oportunidade real para negÃ³cios que levam seguranÃ§a a sÃ©rio: mostrar, de forma clara e sem alarmismo, onde estÃ£o os riscos que o cliente talvez nem saiba que existem. Mostrar esse cuidado passa mais profissionalismo do que qualquer discurso de vendas. Um cliente que entende que seus dados e os dados de quem visita seu site estÃ£o protegidos tende a confiar mais na marca, e isso se reflete direto na reputaÃ§Ã£o do negÃ³cio. Passos simples para comeÃ§ar a proteger seu site hoje Revise formulÃ¡rios e garanta que todo dado recebido seja validado antes de ser processado. Confira se rotas que exigem login realmente bloqueiam acesso de quem nÃ£o estÃ¡ autenticado. Valide a assinatura de qualquer webhook conectado a pagamentos ou serviÃ§os externos. Remova scripts de terceiros que nÃ£o estÃ£o mais em uso. Configure HTTPS em todas as pÃ¡ginas, sem exceÃ§Ã£o, incluindo formulÃ¡rios. A maioria desses pontos pede revisÃ£o e atenÃ§Ã£o, aplicadas desde o inÃ­cio do projeto, bem antes de virarem remendo depois que algo jÃ¡ falhou. SeguranÃ§a faz parte do projeto desde o inÃ­cio Na ViÃ©s Studios, seguranÃ§a entra no planejamento junto com design e performance. Faz parte da estrutura, assim como a identidade visual e a experiÃªncia do usuÃ¡rio. Se vocÃª nÃ£o sabe ao certo como seu site lida com dados sensÃ­veis hoje, vale parar um momento e revisar isso antes que um problema apareÃ§a sozinho. PrevenÃ§Ã£o sempre sai mais barato do que correÃ§Ã£o depois do estrago feito. Perguntas frequentes Por que a seguranÃ§a de um site deve ser pensada desde o inÃ­cio? Porque prevenÃ§Ã£o Ã© muito mais barata que correÃ§Ã£o. Corrigir vazamentos, limpar sistemas invadidos ou lidar com a perda de confianÃ§a dos clientes traz prejuÃ­zos enormes. Planejar a seguranÃ§a na base do projeto evita problemas estruturais difÃ­ceis de arrumar depois. O que Ã© a falha IDOR e por que ela Ã© tÃ£o perigosa? IDOR (Insecure Direct Object Reference) acontece quando um sistema permite que alguÃ©m, simplesmente alterando um nÃºmero de ID na URL ou requisiÃ§Ã£o, acesse informaÃ§Ãµes restritas de outras pessoas (como pedidos ou faturas) sem precisar hackear senhas ou invadir bancos de dados. Como sei se o meu checkout Ã© seguro? AlÃ©m de utilizar HTTPS e processadores de pagamento reconhecidos (como Stripe, Mercado Pago ou Pagar.me), Ã© essencial garantir que a comunicaÃ§Ã£o do site com essas plataformas por meio de webhooks esteja sendo validada e criptografada com chaves secretas. Um site simples tambÃ©m precisa de seguranÃ§a? Com certeza. AtÃ© pÃ¡ginas simples de captura de leads (landing pages) ou sites institucionais tÃªm formulÃ¡rios que podem ser usados para injeÃ§Ã£o de cÃ³digo ou envio de spam. A seguranÃ§a bÃ¡sica deve estar presente independentemente do tamanho do site. O que a ViÃ©s faz diferente em relaÃ§Ã£o Ã  seguranÃ§a? ConstruÃ­mos todos os projetos com defesa em profundidade. Usamos Next.js, que possui proteÃ§Ãµes de fÃ¡brica contra muitos ataques comuns, validamos webhooks rigidamente e mantemos variÃ¡veis de ambiente ocultas. A seguranÃ§a faz parte da arquitetura inicial. NÃ£o deixe a seguranÃ§a para depois NÃ³s ajudamos empresas a criar produtos digitais nÃ£o apenas bonitos e rÃ¡pidos, mas robustos e seguros. Quer conversar sobre o seu projeto? Falar com especialista`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Grande parte das empresas sÃ³ pensa em seguranÃ§a depois que algo jÃ¡ deu errado. Um formulÃ¡rio invadido, um banco de dados exposto, um cliente reclamando que recebeu cobranÃ§a duplicada porque alguÃ©m manipulou uma URL. Nesse momento, o prejuÃ­zo jÃ¡ passou de tÃ©cnico para reputacional. E confianÃ§a Ã© bem mais difÃ­cil de recuperar do que qualquer bug.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Com a explosÃ£o de ferramentas de IA para criar sites e aplicaÃ§Ãµes rapidamente, esse risco cresceu. Ã‰ comum ver projetos montados em poucos dias, funcionando bem visualmente, mas com brechas bÃ¡sicas que qualquer pessoa com um pouco de conhecimento tÃ©cnico consegue explorar.
              </p>

              <h3 id="erros-comuns" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Os erros de seguranÃ§a mais comuns em sites
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Projetos pequenos, de negÃ³cios locais, costumam apresentar as mesmas falhas de plataformas grandes e complexas. Alguns dos problemas mais frequentes:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>1. Dados sensÃ­veis sem proteÃ§Ã£o adequada</strong> FormulÃ¡rios de contato, cadastro ou checkout que enviam informaÃ§Ãµes sem validaÃ§Ã£o, permitindo que qualquer pessoa envie dados maliciosos junto com o que era esperado.</li>
                <li><strong>2. Falta de controle de acesso</strong> Sistemas onde, trocando um nÃºmero na URL, Ã© possÃ­vel acessar informaÃ§Ãµes de outro usuÃ¡rio. Esse tipo de falha, chamada de IDOR, Ã© uma das mais comuns e uma das mais fÃ¡ceis de evitar quando o projeto jÃ¡ nasce pensando nisso.</li>
                <li><strong>3. Regras de banco de dados abertas demais</strong> Bancos de dados configurados para aceitar leitura ou escrita sem exigir autenticaÃ§Ã£o correta, expondo informaÃ§Ãµes que deveriam estar restritas.</li>
                <li><strong>4. Falta de validaÃ§Ã£o em webhooks e integraÃ§Ãµes de pagamento</strong> IntegraÃ§Ãµes com gateways de pagamento que nÃ£o validam a assinatura de cada requisiÃ§Ã£o, abrindo espaÃ§o para que alguÃ©m simule uma confirmaÃ§Ã£o de pagamento que nunca aconteceu de verdade.</li>
                <li><strong>5. Scripts de terceiros sem controle</strong> Chats, pixels e ferramentas de anÃ¡lise adicionados sem revisÃ£o, criando pontos de entrada que ninguÃ©m estÃ¡ monitorando.</li>
              </ul>

              <h3 id="camadas-protecao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                SeguranÃ§a se constrÃ³i em camadas
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O conceito mais importante em seguranÃ§a digital envolve trabalhar com camadas de proteÃ§Ã£o, de forma que, se uma falhar, a prÃ³xima ainda segura o problema. Esse princÃ­pio Ã© conhecido como defesa em profundidade, e costuma envolver:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>ValidaÃ§Ã£o de dados tanto no lado do cliente quanto no servidor.</li>
                <li>AutenticaÃ§Ã£o e controle de permissÃµes bem definidos para cada tipo de usuÃ¡rio.</li>
                <li>PolÃ­ticas de seguranÃ§a de conteÃºdo (CSP) para reduzir o risco de scripts maliciosos.</li>
                <li>Limite de requisiÃ§Ãµes (rate limiting) para evitar abuso em formulÃ¡rios e APIs.</li>
                <li>Criptografia de dados sensÃ­veis, tanto em trÃ¢nsito quanto armazenados.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Nenhuma dessas camadas sozinha garante proteÃ§Ã£o total, mas juntas formam uma barreira consistente contra a maioria dos ataques comuns.
              </p>

              <h3 id="exemplo-webhook" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Um exemplo prÃ¡tico: validaÃ§Ã£o de webhook em pagamentos
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Em projetos que envolvem cobranÃ§a recorrente ou pagamento Ãºnico, Ã© comum integrar com gateways como Mercado Pago ou Stripe atravÃ©s de webhooks, notificaÃ§Ãµes automÃ¡ticas que avisam quando um pagamento foi aprovado, recusado ou estornado.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O erro mais perigoso nesse tipo de integraÃ§Ã£o Ã© confiar cegamente em qualquer requisiÃ§Ã£o que chega nesse endereÃ§o, sem verificar se ela realmente veio do gateway de pagamento. Sem essa validaÃ§Ã£o, alguÃ©m poderia enviar uma requisiÃ§Ã£o falsa simulando um pagamento aprovado, liberando acesso a um produto ou serviÃ§o sem nenhum valor ter sido pago de verdade.
              </p>

              <div className="bg-zinc-50 border-l-4 border-[#d75310] p-6 my-8 rounded-r-xl">
                <p className="text-zinc-700 italic text-lg m-0 font-bold">
                  A correÃ§Ã£o correta passa por validar a assinatura de cada requisiÃ§Ã£o usando a chave secreta fornecida pelo gateway, garantindo que sÃ³ notificaÃ§Ãµes legÃ­timas sejam processadas. Ã‰ um ajuste invisÃ­vel para quem visita o site, mas que separa um sistema de pagamento confiÃ¡vel de um sistema vulnerÃ¡vel.
                </p>
              </div>

              <h3 id="diferencial-competitivo" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que isso tambÃ©m Ã© diferencial competitivo
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Empresas que usam ferramentas de criaÃ§Ã£o rÃ¡pida de sites e aplicaÃ§Ãµes, sem revisÃ£o tÃ©cnica adequada, tendem a deixar esse tipo de falha passar despercebido. Isso cria uma oportunidade real para negÃ³cios que levam seguranÃ§a a sÃ©rio: mostrar, de forma clara e sem alarmismo, onde estÃ£o os riscos que o cliente talvez nem saiba que existem.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Mostrar esse cuidado passa mais profissionalismo do que qualquer discurso de vendas. Um cliente que entende que seus dados e os dados de quem visita seu site estÃ£o protegidos tende a confiar mais na marca, e isso se reflete direto na reputaÃ§Ã£o do negÃ³cio.
              </p>

              <h3 id="passos-simples" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Passos simples para comeÃ§ar a proteger seu site hoje
              </h3>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Revise formulÃ¡rios e garanta que todo dado recebido seja validado antes de ser processado.</li>
                <li>Confira se rotas que exigem login realmente bloqueiam acesso de quem nÃ£o estÃ¡ autenticado.</li>
                <li>Valide a assinatura de qualquer webhook conectado a pagamentos ou serviÃ§os externos.</li>
                <li>Remova scripts de terceiros que nÃ£o estÃ£o mais em uso.</li>
                <li>Configure HTTPS em todas as pÃ¡ginas, sem exceÃ§Ã£o, incluindo formulÃ¡rios.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                A maioria desses pontos pede revisÃ£o e atenÃ§Ã£o, aplicadas desde o inÃ­cio do projeto, bem antes de virarem remendo depois que algo jÃ¡ falhou.
              </p>

              <h3 id="seguranca-no-projeto" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                SeguranÃ§a faz parte do projeto desde o inÃ­cio
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na ViÃ©s Studios, seguranÃ§a entra no planejamento junto com design e performance. Faz parte da estrutura, assim como a identidade visual e a experiÃªncia do usuÃ¡rio.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Se vocÃª nÃ£o sabe ao certo como seu site lida com dados sensÃ­veis hoje, vale parar um momento e revisar isso antes que um problema apareÃ§a sozinho. PrevenÃ§Ã£o sempre sai mais barato do que correÃ§Ã£o depois do estrago feito.
              </p>

              <h3 id="faq" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Perguntas frequentes
              </h3>

              <div className="space-y-8">
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Por que a seguranÃ§a de um site deve ser pensada desde o inÃ­cio?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Porque prevenÃ§Ã£o Ã© muito mais barata que correÃ§Ã£o. Corrigir vazamentos, limpar sistemas invadidos ou lidar com a perda de confianÃ§a dos clientes traz prejuÃ­zos enormes. Planejar a seguranÃ§a na base do projeto evita problemas estruturais difÃ­ceis de arrumar depois.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">O que Ã© a falha IDOR e por que ela Ã© tÃ£o perigosa?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    IDOR (Insecure Direct Object Reference) acontece quando um sistema permite que alguÃ©m, simplesmente alterando um nÃºmero de ID na URL ou requisiÃ§Ã£o, acesse informaÃ§Ãµes restritas de outras pessoas (como pedidos ou faturas) sem precisar hackear senhas ou invadir bancos de dados.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Como sei se o meu checkout Ã© seguro?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    AlÃ©m de utilizar HTTPS e processadores de pagamento reconhecidos (como Stripe, Mercado Pago ou Pagar.me), Ã© essencial garantir que a comunicaÃ§Ã£o do site com essas plataformas por meio de webhooks esteja sendo validada e criptografada com chaves secretas.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Um site simples tambÃ©m precisa de seguranÃ§a?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Com certeza. AtÃ© pÃ¡ginas simples de captura de leads (landing pages) ou sites institucionais tÃªm formulÃ¡rios que podem ser usados para injeÃ§Ã£o de cÃ³digo ou envio de spam. A seguranÃ§a bÃ¡sica deve estar presente independentemente do tamanho do site.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">O que a ViÃ©s faz diferente em relaÃ§Ã£o Ã  seguranÃ§a?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    ConstruÃ­mos todos os projetos com defesa em profundidade. Usamos Next.js, que possui proteÃ§Ãµes de fÃ¡brica contra muitos ataques comuns, validamos webhooks rigidamente e mantemos variÃ¡veis de ambiente ocultas. A seguranÃ§a faz parte da arquitetura inicial.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  NÃ£o deixe a seguranÃ§a para depois
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  NÃ³s ajudamos empresas a criar produtos digitais nÃ£o apenas bonitos e rÃ¡pidos, mas robustos e seguros. Quer conversar sobre o seu projeto?
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


