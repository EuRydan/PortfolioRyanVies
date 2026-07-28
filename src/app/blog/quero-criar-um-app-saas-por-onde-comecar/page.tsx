import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { TableOfContents } from '@/components/ui/TableOfContents';
import AudioPlayer from '@/components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Quero criar um app ou SaaS: por onde começo? | Vies Studios',
  description: 'Tem uma ideia de app ou SaaS mas não sabe por onde começar? Veja o que realmente importa antes de escrever uma linha de código ou contratar alguém.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/quero-criar-um-app-saas-por-onde-comecar",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'qual-problema', label: 'Qual é o problema que você resolve?' },
    { id: 'diferenca-app-saas', label: 'A diferença entre app e SaaS' },
    { id: 'sobre-mvp', label: 'O que é um MVP de verdade' },
    { id: 'quanto-custa', label: 'Quanto custa desenvolver?' },
    { id: 'stack-tecnologica', label: 'Stack: o que saber antes de contratar' },
    { id: 'erro-mais-comum', label: 'O erro que afunda projetos' },
    { id: 'quando-contratar', label: 'Quando contratar uma agência' },
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
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">Criação de produto digital</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Quero criar um app ou SaaS: por onde começo?
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Tem uma ideia de app ou SaaS mas não sabe por onde começar? Veja o que realmente importa antes de escrever uma linha de código ou contratar alguém.
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
                    24 Jul 2026 <span className="mx-1">&middot;</span> 5 min de leitura
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
                src="/marketing/capa-produto.jpeg" 
                alt="Quero criar um app ou SaaS"
                className="w-full h-full object-cover"
              />
            </div>

            
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={`A maioria das pessoas que chega com uma ideia de app ou SaaS comete o mesmo erro: começa pela parte errada. Contrata um desenvolvedor antes de validar, gasta meses construindo algo que ninguém pediu ou tenta fazer tudo de uma vez e trava no meio do caminho. Esse artigo é um guia de como pensar antes de agir, não um tutorial de como programar. Antes de qualquer coisa: qual é o problema que você resolve? Produto digital que não resolve um problema específico não vira negócio. Vira projeto de portfolio. A pergunta certa é 'quem paga pra ter esse problema resolvido hoje, de que forma, e quanto esse problema custa pra essa pessoa?' 'Minha ideia é boa?' não leva a lugar nenhum. Se você consegue responder isso com nomes reais de pessoas, conversas que já teve e situações concretas, você tem o começo de um produto. Se a resposta for "todo mundo que usa smartphone", você ainda está no estágio da ideia. Produto nasce de problema. Problema nasce de observação, não de inspiração. A diferença entre app, SaaS e produto digital Os três termos aparecem juntos o tempo todo, mas não significam a mesma coisa. App é qualquer aplicativo, mobile ou web, que o usuário acessa pra realizar alguma tarefa. Pode ser gratuito, pago por download ou por uso. SaaS (Software as a Service) é um modelo de negócio específico: o usuário paga uma assinatura recorrente pra acessar o software pela internet, sem instalar nada. O vendedor hospeda tudo e o cliente paga mensalmente ou anualmente. É o modelo do Spotify, do Notion, do Canva. Produto digital é o termo mais amplo. Cobre apps, SaaS, plataformas, ferramentas internas e qualquer software que entrega valor de forma contínua. Saber em qual categoria sua ideia se encaixa importa porque define o modelo de monetização, o ciclo de vendas e o que precisa ser construído primeiro. O MVP não é o seu produto em miniatura. Ele testa uma hipótese, seu produto entrega o resultado final. MVP é a sigla pra Minimum Viable Product, produto mínimo viável. O erro mais comum é interpretar isso como "meu produto completo com menos features". MVP é a menor versão possível que valida se alguém paga pelo que você está oferecendo. Pode ser uma landing page com formulário de interesse antes de existir qualquer código. Pode ser um processo manual que você executa pra um cliente antes de automatizar. Pode ser um protótipo no Figma que você mostra pra dez pessoas e coleta reação. O objetivo do MVP não é lançar. É aprender rápido e barato se a direção faz sentido. Comece com o básico que traga valor logo de cara, adie recursos secundários. Uma landing page simples descrevendo a proposta já permite captar e-mails e medir interesse antes de investir pesado. Um MVP bem construído leva de 30 a 90 dias. Um produto com todas as features que você imaginou hoje leva de 6 meses a 2 anos, e boa parte dessas features vai ser removida depois que você descobrir o que o usuário realmente usa. Quanto custa desenvolver um produto digital? Depende muito do que você chama de produto. As faixas mais realistas para o mercado brasileiro em 2026: Tipo de projeto Faixa de investimento Prazo estimado MVP simples (web) R\$ 8.000 a R\$ 25.000 30 a 60 dias SaaS com autenticação e pagamento R\$ 20.000 a R\$ 60.000 60 a 120 dias Plataforma com múltiplos perfis R\$ 50.000 a R\$ 150.000 4 a 8 meses App mobile (iOS + Android) R\$ 40.000 a R\$ 120.000 3 a 6 meses Esses valores cobrem desenvolvimento e design. Infraestrutura, APIs de terceiros, domínio e ferramentas de suporte são custos adicionais que variam conforme o produto. Vale dizer: o custo inicial pode ser próximo de zero usando planos gratuitos de Vercel, Supabase e Railway. O gasto real começa quando você tem usuários ativos e começa a chamar APIs pagas, como as de inteligência artificial, envio de e-mail ou processamento de pagamentos. Stack: o que você precisa saber antes de contratar alguém Você não precisa saber programar pra ter um produto digital. Mas precisa entender o suficiente pra não ser enganado ou tomar decisões ruins de arquitetura no começo. Frontend é o que o usuário vê e interage. Backend é a lógica que processa os dados, aplica as regras de negócio e se comunica com o banco de dados. Você precisa dos dois, e eles precisam conversar bem. Banco de dados guarda tudo: usuários, transações, conteúdo. A escolha certa no começo evita reescrever metade do produto mais tarde. Autenticação é o sistema de login. Parece simples, mas é onde a maioria dos produtos tem as vulnerabilidades mais graves se feito sem cuidado. Pagamento recorrente em SaaS não é só "integrar o Pix". Envolve planos, cobranças automáticas, gestão de inadimplência, webhooks pra confirmar pagamento e lógica pra liberar ou bloquear acesso conforme o status da assinatura. A stack mais usada em 2026 pra produtos web é Next.js no frontend, Supabase como banco de dados com autenticação, e Vercel pra deploy. Essa combinação cobre a maioria dos casos de uso com boa performance, segurança razoável e custo inicial baixo. O erro que afunda a maioria dos projetos Construir demais antes de validar. Isso acontece porque a fase de construção parece produtiva. Você tá fazendo algo, o produto vai tomando forma, cada nova feature parece importante. O problema é que você só vai descobrir se acertou na direção quando alguém real usar o produto e pagar por ele. Cada semana construindo uma feature que ninguém pediu é uma semana que você poderia ter usado pra falar com clientes, ajustar o posicionamento ou mudar completamente o que o produto faz. Os produtos que chegam longe erraram mais barato, não necessariamente mais rápido. Quando faz sentido contratar uma agência ou estúdio Depende do momento e do que você precisa. Se você ainda está na fase de validação, o que você precisa não é de código, é de clareza sobre o problema, o público e a proposta de valor. Nessa fase, um designer que sabe construir protótipos e uma conversa honesta sobre viabilidade valem mais que um time de desenvolvimento. Se você já validou a ideia, tem pessoas dispostas a pagar e precisa colocar o produto no ar, aí faz sentido contratar desenvolvimento. O que evitar: contratar alguém pra "desenvolver a ideia" sem ter clareza do que precisa ser construído primeiro. Sem um briefing bem definido, o projeto vira uma conversa sem fim de adicionar features e o prazo estoura antes do produto existir. O que a Viés faz nesse contexto A Viés Studios desenvolve produtos digitais desde a concepção até o lançamento. Já construímos SaaS com autenticação, planos de assinatura, pagamento recorrente e painel administrativo. Sabemos onde a maioria dos projetos trava e como evitar que isso aconteça no seu. Se você tem uma ideia e quer entender o que faz sentido construir primeiro, mande uma mensagem. A conversa inicial é gratuita e já sai com uma direção clara. Falar com especialista Perguntas frequentes Preciso saber programar pra criar um SaaS? Não necessariamente. Mas entender o básico de como um produto digital funciona ajuda muito na hora de tomar decisões, avaliar orçamentos e conversar com quem vai construir. O risco de não entender nada é delegar decisões importantes pra quem não conhece o seu negócio. Dá pra criar um SaaS com IA sem programar? Dá pra criar um MVP funcional. Ferramentas como Lovable, Bolt e Cursor aceleram muito o processo. O problema costuma aparecer quando o produto precisa de segurança real, integrações complexas ou escalar além dos primeiros usuários. Pra isso, desenvolvimento com alguém que sabe o que está fazendo ainda é insubstituível. Qual a diferença entre um app e um SaaS? App é o produto em si. SaaS é o modelo de negócio onde o produto é entregue como serviço por assinatura. Um app pode ser SaaS ou não. Quanto tempo leva pra lançar um produto digital? Um MVP focado leva de 30 a 90 dias. Um produto com todas as features que você imagina hoje pode levar mais de um ano. A recomendação é sempre lançar o menor produto que valida a ideia e crescer a partir do feedback real. Como sei se minha ideia tem mercado? Converse com pessoas que teriam o problema que você resolve. Se elas já pagam por alguma solução hoje, mesmo que ruim, é sinal de que o problema é real. Se ninguém paga por nada parecido, pode ser inovação ou pode ser que o problema não é grande o suficiente pra virar negócio.`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                A maioria das pessoas que chega com uma ideia de app ou SaaS comete o mesmo erro: começa pela parte errada. Contrata um desenvolvedor antes de validar, gasta meses construindo algo que ninguém pediu ou tenta fazer tudo de uma vez e trava no meio do caminho.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Esse artigo é um guia de como pensar antes de agir, não um tutorial de como programar.
              </p>

              <h3 id="qual-problema" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Antes de qualquer coisa: qual é o problema que você resolve?
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Produto digital que não resolve um problema específico não vira negócio. Vira projeto de portfolio.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                A pergunta certa é 'quem paga pra ter esse problema resolvido hoje, de que forma, e quanto esse problema custa pra essa pessoa?' 'Minha ideia é boa?' não leva a lugar nenhum.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Se você consegue responder isso com nomes reais de pessoas, conversas que já teve e situações concretas, você tem o começo de um produto. Se a resposta for "todo mundo que usa smartphone", você ainda está no estágio da ideia.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Produto nasce de problema. Problema nasce de observação, não de inspiração.
              </p>

              <h3 id="diferenca-app-saas" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                A diferença entre app, SaaS e produto digital
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Os três termos aparecem juntos o tempo todo, mas não significam a mesma coisa.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                <strong>App</strong> é qualquer aplicativo, mobile ou web, que o usuário acessa pra realizar alguma tarefa. Pode ser gratuito, pago por download ou por uso.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                <strong>SaaS (Software as a Service)</strong> é um modelo de negócio específico: o usuário paga uma assinatura recorrente pra acessar o software pela internet, sem instalar nada. O vendedor hospeda tudo e o cliente paga mensalmente ou anualmente. É o modelo do Spotify, do Notion, do Canva.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                <strong>Produto digital</strong> é o termo mais amplo. Cobre apps, SaaS, plataformas, ferramentas internas e qualquer software que entrega valor de forma contínua.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Saber em qual categoria sua ideia se encaixa importa porque define o modelo de monetização, o ciclo de vendas e o que precisa ser construído primeiro.
              </p>

              <h3 id="sobre-mvp" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O MVP não é o seu produto em miniatura. Ele testa uma hipótese, seu produto entrega o resultado final.
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                MVP é a sigla pra Minimum Viable Product, produto mínimo viável. O erro mais comum é interpretar isso como "meu produto completo com menos features".
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                MVP é a menor versão possível que valida se alguém paga pelo que você está oferecendo. Pode ser uma landing page com formulário de interesse antes de existir qualquer código. Pode ser um processo manual que você executa pra um cliente antes de automatizar. Pode ser um protótipo no Figma que você mostra pra dez pessoas e coleta reação.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6 font-bold">
                O objetivo do MVP não é lançar. É aprender rápido e barato se a direção faz sentido.
              </p>

              <div className="bg-zinc-50 border-l-4 border-[#d75310] p-6 my-8 rounded-r-xl">
                <p className="text-zinc-700 italic text-lg m-0">
                  Comece com o básico que traga valor logo de cara, adie recursos secundários. Uma landing page simples descrevendo a proposta já permite captar e-mails e medir interesse antes de investir pesado.
                </p>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Um MVP bem construído leva de 30 a 90 dias. Um produto com todas as features que você imaginou hoje leva de 6 meses a 2 anos, e boa parte dessas features vai ser removida depois que você descobrir o que o usuário realmente usa.
              </p>

              <h3 id="quanto-custa" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Quanto custa desenvolver um produto digital?
              </h3>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Depende muito do que você chama de produto. As faixas mais realistas para o mercado brasileiro em 2026:
              </p>

              <div className="overflow-x-auto mb-8 bg-zinc-50 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-zinc-100/50">
                      <th className="py-5 px-6 font-bold text-zinc-900 whitespace-nowrap">Tipo de projeto</th>
                      <th className="py-5 px-6 font-bold text-zinc-900 whitespace-nowrap">Faixa de investimento</th>
                      <th className="py-5 px-6 font-bold text-zinc-900">Prazo estimado</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600 text-base">
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">MVP simples (web)</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 8.000 a R$ 25.000</td>
                      <td className="py-5 px-6">30 a 60 dias</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">SaaS com autenticação e pagamento</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 20.000 a R$ 60.000</td>
                      <td className="py-5 px-6">60 a 120 dias</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Plataforma com múltiplos perfis</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 50.000 a R$ 150.000</td>
                      <td className="py-5 px-6">4 a 8 meses</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">App mobile (iOS + Android)</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 40.000 a R$ 120.000</td>
                      <td className="py-5 px-6">3 a 6 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Esses valores cobrem desenvolvimento e design. Infraestrutura, APIs de terceiros, domínio e ferramentas de suporte são custos adicionais que variam conforme o produto.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                Vale dizer: o custo inicial pode ser próximo de zero usando planos gratuitos de Vercel, Supabase e Railway. O gasto real começa quando você tem usuários ativos e começa a chamar APIs pagas, como as de inteligência artificial, envio de e-mail ou processamento de pagamentos.
              </p>

              <h3 id="stack-tecnologica" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Stack: o que você precisa saber antes de contratar alguém
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Você não precisa saber programar pra ter um produto digital. Mas precisa entender o suficiente pra não ser enganado ou tomar decisões ruins de arquitetura no começo.
              </p>

              <ul className="list-disc pl-6 text-zinc-600 text-base md:text-lg leading-relaxed mb-6 space-y-4">
                <li><strong>Frontend</strong> é o que o usuário vê e interage. <strong>Backend</strong> é a lógica que processa os dados, aplica as regras de negócio e se comunica com o banco de dados. Você precisa dos dois, e eles precisam conversar bem.</li>
                <li><strong>Banco de dados</strong> guarda tudo: usuários, transações, conteúdo. A escolha certa no começo evita reescrever metade do produto mais tarde.</li>
                <li><strong>Autenticação</strong> é o sistema de login. Parece simples, mas é onde a maioria dos produtos tem as vulnerabilidades mais graves se feito sem cuidado.</li>
                <li><strong>Pagamento recorrente</strong> em SaaS não é só "integrar o Pix". Envolve planos, cobranças automáticas, gestão de inadimplência, webhooks pra confirmar pagamento e lógica pra liberar ou bloquear acesso conforme o status da assinatura.</li>
              </ul>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                A stack mais usada em 2026 pra produtos web é Next.js no frontend, Supabase como banco de dados com autenticação, e Vercel pra deploy. Essa combinação cobre a maioria dos casos de uso com boa performance, segurança razoável e custo inicial baixo.
              </p>

              <h3 id="erro-mais-comum" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O erro que afunda a maioria dos projetos
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Construir demais antes de validar.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Isso acontece porque a fase de construção parece produtiva. Você tá fazendo algo, o produto vai tomando forma, cada nova feature parece importante. O problema é que você só vai descobrir se acertou na direção quando alguém real usar o produto e pagar por ele.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Cada semana construindo uma feature que ninguém pediu é uma semana que você poderia ter usado pra falar com clientes, ajustar o posicionamento ou mudar completamente o que o produto faz.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12 font-bold">
                Os produtos que chegam longe erraram mais barato, não necessariamente mais rápido.
              </p>

              <h3 id="quando-contratar" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Quando faz sentido contratar uma agência ou estúdio
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Depende do momento e do que você precisa.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Se você ainda está na fase de validação, o que você precisa não é de código, é de clareza sobre o problema, o público e a proposta de valor. Nessa fase, um designer que sabe construir protótipos e uma conversa honesta sobre viabilidade valem mais que um time de desenvolvimento.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Se você já validou a ideia, tem pessoas dispostas a pagar e precisa colocar o produto no ar, aí faz sentido contratar desenvolvimento.
              </p>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                O que evitar: contratar alguém pra "desenvolver a ideia" sem ter clareza do que precisa ser construído primeiro. Sem um briefing bem definido, o projeto vira uma conversa sem fim de adicionar features e o prazo estoura antes do produto existir.
              </p>

              <div className="bg-zinc-900 text-white rounded-xl p-8 md:p-10 my-12">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  O que a Viés faz nesse contexto
                </h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                  A Viés Studios desenvolve produtos digitais desde a concepção até o lançamento. Já construímos SaaS com autenticação, planos de assinatura, pagamento recorrente e painel administrativo. Sabemos onde a maioria dos projetos trava e como evitar que isso aconteça no seu.
                </p>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  Se você tem uma ideia e quer entender o que faz sentido construir primeiro, mande uma mensagem. A conversa inicial é gratuita e já sai com uma direção clara.
                </p>
                <Link href="/fale-conosco" className="inline-block bg-[#d75310] hover:bg-[#b5440c] text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Falar com especialista
                </Link>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 mt-12" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Perguntas frequentes
              </h3>

              <div className="space-y-8">
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Preciso saber programar pra criar um SaaS?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">Não necessariamente. Mas entender o básico de como um produto digital funciona ajuda muito na hora de tomar decisões, avaliar orçamentos e conversar com quem vai construir. O risco de não entender nada é delegar decisões importantes pra quem não conhece o seu negócio.</p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Dá pra criar um SaaS com IA sem programar?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">Dá pra criar um MVP funcional. Ferramentas como Lovable, Bolt e Cursor aceleram muito o processo. O problema costuma aparecer quando o produto precisa de segurança real, integrações complexas ou escalar além dos primeiros usuários. Pra isso, desenvolvimento com alguém que sabe o que está fazendo ainda é insubstituível.</p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Qual a diferença entre um app e um SaaS?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">App é o produto em si. SaaS é o modelo de negócio onde o produto é entregue como serviço por assinatura. Um app pode ser SaaS ou não.</p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Quanto tempo leva pra lançar um produto digital?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">Um MVP focado leva de 30 a 90 dias. Um produto com todas as features que você imagina hoje pode levar mais de um ano. A recomendação é sempre lançar o menor produto que valida a ideia e crescer a partir do feedback real.</p>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">Como sei se minha ideia tem mercado?</h5>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">Converse com pessoas que teriam o problema que você resolve. Se elas já pagam por alguma solução hoje, mesmo que ruim, é sinal de que o problema é real. Se ninguém paga por nada parecido, pode ser inovação ou pode ser que o problema não é grande o suficiente pra virar negócio.</p>
                </div>
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
