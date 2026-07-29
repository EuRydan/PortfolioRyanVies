import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'));

export const metadata: Metadata = {
  title: 'Quantas brechas o seu site esconde sem você saber? | Vies Studios',
  description: 'Sites feitos às pressas costumam esconder falhas de segurança que colocam dados de clientes em risco. Entenda os riscos mais comuns e por que segurança deveria entrar no projeto desde o primeiro dia, não depois que algo já deu errado.',
  keywords: ['segurança de sites', 'segurança web', 'proteção de dados', 'vulnerabilidade em sites', 'boas práticas de segurança digital'],
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/quantas-brechas-o-seu-site-esconde-sem-voce-saber",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'erros-comuns', label: 'Os erros de segurança mais comuns em sites' },
    { id: 'camadas-protecao', label: 'Segurança se constrói em camadas' },
    { id: 'exemplo-webhook', label: 'Um exemplo prático: validação de webhook em pagamentos' },
    { id: 'diferencial-competitivo', label: 'Por que isso também é diferencial competitivo' },
    { id: 'passos-simples', label: 'Passos simples para começar a proteger seu site hoje' },
    { id: 'seguranca-no-projeto', label: 'Segurança faz parte do projeto desde o início' },
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
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">Segurança de sites</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Quantas brechas o seu site esconde sem você saber?
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Sites feitos às pressas costumam esconder falhas de segurança que colocam dados de clientes em risco. Entenda os riscos mais comuns e por que segurança deveria entrar no projeto desde o primeiro dia, não depois que algo já deu errado.
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
                alt="Segurança de sites"
                className="w-full h-full object-cover"
              />
            </div>

            
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={`Grande parte das empresas só pensa em segurança depois que algo já deu errado. Um formulário invadido, um banco de dados exposto, um cliente reclamando que recebeu cobrança duplicada porque alguém manipulou uma URL. Nesse momento, o prejuízo já passou de técnico para reputacional. E confiança é bem mais difícil de recuperar do que qualquer bug. Com a explosão de ferramentas de IA para criar sites e aplicações rapidamente, esse risco cresceu. É comum ver projetos montados em poucos dias, funcionando bem visualmente, mas com brechas básicas que qualquer pessoa com um pouco de conhecimento técnico consegue explorar. Os erros de segurança mais comuns em sites Projetos pequenos, de negócios locais, costumam apresentar as mesmas falhas de plataformas grandes e complexas. Alguns dos problemas mais frequentes: 1. Dados sensíveis sem proteção adequada Formulários de contato, cadastro ou checkout que enviam informações sem validação, permitindo que qualquer pessoa envie dados maliciosos junto com o que era esperado. 2. Falta de controle de acesso Sistemas onde, trocando um número na URL, é possível acessar informações de outro usuário. Esse tipo de falha, chamada de IDOR, é uma das mais comuns e uma das mais fáceis de evitar quando o projeto já nasce pensando nisso. 3. Regras de banco de dados abertas demais Bancos de dados configurados para aceitar leitura ou escrita sem exigir autenticação correta, expondo informações que deveriam estar restritas. 4. Falta de validação em webhooks e integrações de pagamento Integrações com gateways de pagamento que não validam a assinatura de cada requisição, abrindo espaço para que alguém simule uma confirmação de pagamento que nunca aconteceu de verdade. 5. Scripts de terceiros sem controle Chats, pixels e ferramentas de análise adicionados sem revisão, criando pontos de entrada que ninguém está monitorando. Segurança se constrói em camadas O conceito mais importante em segurança digital envolve trabalhar com camadas de proteção, de forma que, se uma falhar, a próxima ainda segura o problema. Esse princípio é conhecido como defesa em profundidade, e costuma envolver: Validação de dados tanto no lado do cliente quanto no servidor. Autenticação e controle de permissões bem definidos para cada tipo de usuário. Políticas de segurança de conteúdo (CSP) para reduzir o risco de scripts maliciosos. Limite de requisições (rate limiting) para evitar abuso em formulários e APIs. Criptografia de dados sensíveis, tanto em trânsito quanto armazenados. Nenhuma dessas camadas sozinha garante proteção total, mas juntas formam uma barreira consistente contra a maioria dos ataques comuns. Um exemplo prático: validação de webhook em pagamentos Em projetos que envolvem cobrança recorrente ou pagamento único, é comum integrar com gateways como Mercado Pago ou Stripe através de webhooks, notificações automáticas que avisam quando um pagamento foi aprovado, recusado ou estornado. O erro mais perigoso nesse tipo de integração é confiar cegamente em qualquer requisição que chega nesse endereço, sem verificar se ela realmente veio do gateway de pagamento. Sem essa validação, alguém poderia enviar uma requisição falsa simulando um pagamento aprovado, liberando acesso a um produto ou serviço sem nenhum valor ter sido pago de verdade. A correção correta passa por validar a assinatura de cada requisição usando a chave secreta fornecida pelo gateway, garantindo que só notificações legítimas sejam processadas. É um ajuste invisível para quem visita o site, mas que separa um sistema de pagamento confiável de um sistema vulnerável. Por que isso também é diferencial competitivo Empresas que usam ferramentas de criação rápida de sites e aplicações, sem revisão técnica adequada, tendem a deixar esse tipo de falha passar despercebido. Isso cria uma oportunidade real para negócios que levam segurança a sério: mostrar, de forma clara e sem alarmismo, onde estão os riscos que o cliente talvez nem saiba que existem. Mostrar esse cuidado passa mais profissionalismo do que qualquer discurso de vendas. Um cliente que entende que seus dados e os dados de quem visita seu site estão protegidos tende a confiar mais na marca, e isso se reflete direto na reputação do negócio. Passos simples para começar a proteger seu site hoje Revise formulários e garanta que todo dado recebido seja validado antes de ser processado. Confira se rotas que exigem login realmente bloqueiam acesso de quem não está autenticado. Valide a assinatura de qualquer webhook conectado a pagamentos ou serviços externos. Remova scripts de terceiros que não estão mais em uso. Configure HTTPS em todas as páginas, sem exceção, incluindo formulários. A maioria desses pontos pede revisão e atenção, aplicadas desde o início do projeto, bem antes de virarem remendo depois que algo já falhou. Segurança faz parte do projeto desde o início Na Viés Studios, segurança entra no planejamento junto com design e performance. Faz parte da estrutura, assim como a identidade visual e a experiência do usuário. Se você não sabe ao certo como seu site lida com dados sensíveis hoje, vale parar um momento e revisar isso antes que um problema apareça sozinho. Prevenção sempre sai mais barato do que correção depois do estrago feito. Perguntas frequentes Por que a segurança de um site deve ser pensada desde o início? Porque prevenção é muito mais barata que correção. Corrigir vazamentos, limpar sistemas invadidos ou lidar com a perda de confiança dos clientes traz prejuízos enormes. Planejar a segurança na base do projeto evita problemas estruturais difíceis de arrumar depois. O que é a falha IDOR e por que ela é tão perigosa? IDOR (Insecure Direct Object Reference) acontece quando um sistema permite que alguém, simplesmente alterando um número de ID na URL ou requisição, acesse informações restritas de outras pessoas (como pedidos ou faturas) sem precisar hackear senhas ou invadir bancos de dados. Como sei se o meu checkout é seguro? Além de utilizar HTTPS e processadores de pagamento reconhecidos (como Stripe, Mercado Pago ou Pagar.me), é essencial garantir que a comunicação do site com essas plataformas por meio de webhooks esteja sendo validada e criptografada com chaves secretas. Um site simples também precisa de segurança? Com certeza. Até páginas simples de captura de leads (landing pages) ou sites institucionais têm formulários que podem ser usados para injeção de código ou envio de spam. A segurança básica deve estar presente independentemente do tamanho do site. O que a Viés faz diferente em relação à segurança? Construímos todos os projetos com defesa em profundidade. Usamos Next.js, que possui proteções de fábrica contra muitos ataques comuns, validamos webhooks rigidamente e mantemos variáveis de ambiente ocultas. A segurança faz parte da arquitetura inicial. Não deixe a segurança para depois Nós ajudamos empresas a criar produtos digitais não apenas bonitos e rápidos, mas robustos e seguros. Quer conversar sobre o seu projeto? Falar com especialista`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Grande parte das empresas só pensa em segurança depois que algo já deu errado. Um formulário invadido, um banco de dados exposto, um cliente reclamando que recebeu cobrança duplicada porque alguém manipulou uma URL. Nesse momento, o prejuízo já passou de técnico para reputacional. E confiança é bem mais difícil de recuperar do que qualquer bug.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Com a explosão de ferramentas de IA para criar sites e aplicações rapidamente, esse risco cresceu. É comum ver projetos montados em poucos dias, funcionando bem visualmente, mas com brechas básicas que qualquer pessoa com um pouco de conhecimento técnico consegue explorar.
              </p>

              <h3 id="erros-comuns" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Os erros de segurança mais comuns em sites
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Projetos pequenos, de negócios locais, costumam apresentar as mesmas falhas de plataformas grandes e complexas. Alguns dos problemas mais frequentes:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>1. Dados sensíveis sem proteção adequada</strong> Formulários de contato, cadastro ou checkout que enviam informações sem validação, permitindo que qualquer pessoa envie dados maliciosos junto com o que era esperado.</li>
                <li><strong>2. Falta de controle de acesso</strong> Sistemas onde, trocando um número na URL, é possível acessar informações de outro usuário. Esse tipo de falha, chamada de IDOR, é uma das mais comuns e uma das mais fáceis de evitar quando o projeto já nasce pensando nisso.</li>
                <li><strong>3. Regras de banco de dados abertas demais</strong> Bancos de dados configurados para aceitar leitura ou escrita sem exigir autenticação correta, expondo informações que deveriam estar restritas.</li>
                <li><strong>4. Falta de validação em webhooks e integrações de pagamento</strong> Integrações com gateways de pagamento que não validam a assinatura de cada requisição, abrindo espaço para que alguém simule uma confirmação de pagamento que nunca aconteceu de verdade.</li>
                <li><strong>5. Scripts de terceiros sem controle</strong> Chats, pixels e ferramentas de análise adicionados sem revisão, criando pontos de entrada que ninguém está monitorando.</li>
              </ul>

              <h3 id="camadas-protecao" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Segurança se constrói em camadas
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O conceito mais importante em segurança digital envolve trabalhar com camadas de proteção, de forma que, se uma falhar, a próxima ainda segura o problema. Esse princípio é conhecido como defesa em profundidade, e costuma envolver:
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Validação de dados tanto no lado do cliente quanto no servidor.</li>
                <li>Autenticação e controle de permissões bem definidos para cada tipo de usuário.</li>
                <li>Políticas de segurança de conteúdo (CSP) para reduzir o risco de scripts maliciosos.</li>
                <li>Limite de requisições (rate limiting) para evitar abuso em formulários e APIs.</li>
                <li>Criptografia de dados sensíveis, tanto em trânsito quanto armazenados.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Nenhuma dessas camadas sozinha garante proteção total, mas juntas formam uma barreira consistente contra a maioria dos ataques comuns.
              </p>

              <h3 id="exemplo-webhook" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Um exemplo prático: validação de webhook em pagamentos
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Em projetos que envolvem cobrança recorrente ou pagamento único, é comum integrar com gateways como Mercado Pago ou Stripe através de webhooks, notificações automáticas que avisam quando um pagamento foi aprovado, recusado ou estornado.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                O erro mais perigoso nesse tipo de integração é confiar cegamente em qualquer requisição que chega nesse endereço, sem verificar se ela realmente veio do gateway de pagamento. Sem essa validação, alguém poderia enviar uma requisição falsa simulando um pagamento aprovado, liberando acesso a um produto ou serviço sem nenhum valor ter sido pago de verdade.
              </p>

              <div className="bg-zinc-50 border-l-4 border-[#d75310] p-6 my-8 rounded-r-xl">
                <p className="text-zinc-700 italic text-lg m-0 font-bold">
                  A correção correta passa por validar a assinatura de cada requisição usando a chave secreta fornecida pelo gateway, garantindo que só notificações legítimas sejam processadas. É um ajuste invisível para quem visita o site, mas que separa um sistema de pagamento confiável de um sistema vulnerável.
                </p>
              </div>

              <h3 id="diferencial-competitivo" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que isso também é diferencial competitivo
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Empresas que usam ferramentas de criação rápida de sites e aplicações, sem revisão técnica adequada, tendem a deixar esse tipo de falha passar despercebido. Isso cria uma oportunidade real para negócios que levam segurança a sério: mostrar, de forma clara e sem alarmismo, onde estão os riscos que o cliente talvez nem saiba que existem.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Mostrar esse cuidado passa mais profissionalismo do que qualquer discurso de vendas. Um cliente que entende que seus dados e os dados de quem visita seu site estão protegidos tende a confiar mais na marca, e isso se reflete direto na reputação do negócio.
              </p>

              <h3 id="passos-simples" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Passos simples para começar a proteger seu site hoje
              </h3>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li>Revise formulários e garanta que todo dado recebido seja validado antes de ser processado.</li>
                <li>Confira se rotas que exigem login realmente bloqueiam acesso de quem não está autenticado.</li>
                <li>Valide a assinatura de qualquer webhook conectado a pagamentos ou serviços externos.</li>
                <li>Remova scripts de terceiros que não estão mais em uso.</li>
                <li>Configure HTTPS em todas as páginas, sem exceção, incluindo formulários.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                A maioria desses pontos pede revisão e atenção, aplicadas desde o início do projeto, bem antes de virarem remendo depois que algo já falhou.
              </p>

              <h3 id="seguranca-no-projeto" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Segurança faz parte do projeto desde o início
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Na Viés Studios, segurança entra no planejamento junto com design e performance. Faz parte da estrutura, assim como a identidade visual e a experiência do usuário.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Se você não sabe ao certo como seu site lida com dados sensíveis hoje, vale parar um momento e revisar isso antes que um problema apareça sozinho. Prevenção sempre sai mais barato do que correção depois do estrago feito.
              </p>

              <h3 id="faq" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Perguntas frequentes
              </h3>

              <div className="space-y-8">
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Por que a segurança de um site deve ser pensada desde o início?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Porque prevenção é muito mais barata que correção. Corrigir vazamentos, limpar sistemas invadidos ou lidar com a perda de confiança dos clientes traz prejuízos enormes. Planejar a segurança na base do projeto evita problemas estruturais difíceis de arrumar depois.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">O que é a falha IDOR e por que ela é tão perigosa?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    IDOR (Insecure Direct Object Reference) acontece quando um sistema permite que alguém, simplesmente alterando um número de ID na URL ou requisição, acesse informações restritas de outras pessoas (como pedidos ou faturas) sem precisar hackear senhas ou invadir bancos de dados.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Como sei se o meu checkout é seguro?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Além de utilizar HTTPS e processadores de pagamento reconhecidos (como Stripe, Mercado Pago ou Pagar.me), é essencial garantir que a comunicação do site com essas plataformas por meio de webhooks esteja sendo validada e criptografada com chaves secretas.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Um site simples também precisa de segurança?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Com certeza. Até páginas simples de captura de leads (landing pages) ou sites institucionais têm formulários que podem ser usados para injeção de código ou envio de spam. A segurança básica deve estar presente independentemente do tamanho do site.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">O que a Viés faz diferente em relação à segurança?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Construímos todos os projetos com defesa em profundidade. Usamos Next.js, que possui proteções de fábrica contra muitos ataques comuns, validamos webhooks rigidamente e mantemos variáveis de ambiente ocultas. A segurança faz parte da arquitetura inicial.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Não deixe a segurança para depois
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  Nós ajudamos empresas a criar produtos digitais não apenas bonitos e rápidos, mas robustos e seguros. Quer conversar sobre o seu projeto?
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


