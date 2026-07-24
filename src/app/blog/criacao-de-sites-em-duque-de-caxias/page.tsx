import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import AudioPlayer from '@/components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Criação de sites em Duque de Caxias: quanto custa em 2026 | Vies Studios',
  description: 'Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preço reais, o que muda o valor e como contratar sem cair em armadilha.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/criacao-de-sites-em-duque-de-caxias",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'quanto-custa', label: 'Quanto custa, por tipo de projeto' },
    { id: 'por-que-diferente', label: 'Por que os valores são diferentes?' },
    { id: 'quanto-tempo', label: 'Quanto tempo leva pra ficar pronto?' },
    { id: 'mercado-caxias', label: 'Sobre o mercado em Duque de Caxias' },
    { id: 'o-que-olhar', label: 'O que olhar antes de contratar' },
    { id: 'como-pedir', label: 'Como pedir um orçamento' },
    { id: 'faq', label: 'Perguntas frequentes' },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      {/* Article Header Section */}
      <section className="w-full bg-black flex flex-col justify-center pt-20 md:pt-24 relative overflow-hidden" style={{ height: '533.66px' }}>
        <ParallaxBackground src="/bg-header.jpg" />
        
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-14 lg:px-24 relative z-10">
          
          {/* Breadcrumb / Back link */}
          <AnimatedSection className="mb-8">
            <Link href="/blog" className="text-zinc-400 font-bold text-xs tracking-widest uppercase hover:text-[#d75310] transition-colors inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o Blog
            </Link>
          </AnimatedSection>

          <div className="flex flex-col items-start">
          
            {/* Category */}
            <AnimatedSection>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">Criação de sites</span>
              </div>
            </AnimatedSection>

            {/* Title & Meta Description */}
            <AnimatedSection delay={0.1}>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Criação de sites em Duque de Caxias: quanto custa em 2026
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preço reais, o que muda o valor e como contratar sem cair em armadilha.
              </p>
            </AnimatedSection>

            {/* Author Block */}
            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-4 mt-8">
                <img 
                  src="/Ryan%20Ferreira.jpeg" 
                  alt="Ryan Ferreira" 
                  className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                    Ryan Ferreira
                  </span>
                  <span className="text-zinc-500 text-sm font-medium mt-0.5">
                    24 Jul 2026 <span className="mx-1">&middot;</span> 6 min de leitura
                  </span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="w-full flex-1 bg-white py-16 md:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-14 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="flex-1 max-w-3xl flex flex-col">
            
            {/* Image Placeholder */}
            <>
              <div className="w-full aspect-video md:aspect-[21/9] bg-zinc-100 rounded-xl overflow-hidden mb-12">
                <img 
                  src="/capa-artigo.jpg" 
                  alt="Criação de sites em Duque de Caxias"
                  className="w-full h-full object-cover"
                />
              </div>
            </>

            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text="Criar um site profissional em Duque de Caxias custa, em média, entre R$ 1.500 e R$ 10.000 em 2026. Esse intervalo amplo existe porque site é uma palavra que cobre coisas muito diferentes: uma página simples de captura de leads, um site institucional com várias seções, uma loja virtual com integração de pagamento ou uma plataforma com área de cliente. O que você paga depende do que você precisa. E entender essa diferença é o que evita contratar barato hoje e pagar caro pra refazer daqui seis meses. Quanto custa, por tipo de projeto. Landing page: R$ 1.500 a R$ 3.500. Quem quer captar contatos de um serviço ou campanha específica. Site institucional: R$ 3.000 a R$ 7.000. Empresas que querem se apresentar, gerar orçamentos e aparecer no Google. E-commerce: R$ 5.000 a R$ 15.000. Quem precisa vender produtos online com carrinho e pagamento integrado. Produto digital ou sistema: A partir de R$ 10.000. Plataformas com login, agendamento, automações ou lógica de negócio específica. Esses valores cobrem o desenvolvimento em si. Domínio e hospedagem são contratados à parte e somam entre R$ 200 e R$ 800 por ano, conforme o plano escolhido. Por que dois sites do mesmo tipo custam valores tão diferentes? Essa é a pergunta que mais aparece. A resposta está em quatro fatores que a maioria dos fornecedores não explica na proposta: Tecnologia. Sites feitos em WordPress com template pronto saem mais barato e entregam menos. O problema não é o WordPress em si, é o uso descuidado: templates genéricos, plugins acumulados, hospedagem compartilhada barata. O resultado é um site lento, com pontuação baixa no Google e que vira alvo fácil pra ataques, já que o WordPress responde por mais de 40% da web e é justamente por isso que concentra a maior parte das invasões. Plataformas modernas como Next.js resolvem isso na raiz: carregamento mais rápido, estrutura mais segura, pontuação alta no Lighthouse e deploy em infraestrutura de edge network. A diferença aparece no SEO, na experiência do usuário e na taxa de conversão. Segurança. Esse é o ponto que mais separa o mercado. Boa parte dos fornecedores instala o certificado SSL e chama isso de segurança. O problema é que SSL só criptografa a comunicação entre o usuário e o servidor. Ele não protege contra injeção de código nos formulários, não bloqueia tentativas de acesso por força bruta, não impede que dados de clientes sejam vazados por uma falha no banco de dados. Um site com segurança real tem headers HTTP configurados, proteção contra XSS e SQL Injection, rate limiting, variáveis de ambiente fora do código e backups automáticos com versionamento. Esse nível de cuidado não é padrão no mercado. Deveria ser. Design sob medida vs template. Um layout construído a partir da sua identidade de marca, do seu público e do seu objetivo de conversão custa mais do que um template adaptado. A diferença não é só estética: sites com hierarquia visual bem resolvida e chamadas pra ação no lugar certo convertem mais. Bonito e funcional não são opostos, mas também não vêm juntos por acidente. Funcionalidades. Formulário simples, integração com WhatsApp, blog, agendamento online, área de cliente, pagamento integrado: cada recurso adiciona escopo e tempo de desenvolvimento. Vale mapear o que você precisa agora e o que pode entrar numa segunda fase, pra não inflar o projeto inicial desnecessariamente. Quanto tempo leva pra ficar pronto? Uma landing page bem construída fica pronta em 1 a 2 semanas. Um site institucional completo leva de 2 a 4 semanas. Projetos com e-commerce ou sistemas sob medida podem levar de 6 a 12 semanas, dependendo da complexidade. O prazo real depende, em grande parte, do cliente: aprovação de layout rápida, textos e imagens entregues no tempo certo e feedback objetivo aceleram muito o processo. Projetos que travam no meio geralmente travam por falta de conteúdo ou excesso de revisões sem critério. Sobre o mercado em Duque de Caxias. Caxias tem mais de 103 mil empresas ativas e registrou quase 6 mil novas aberturas só nos últimos 30 dias. Os setores com maior concentração são comércio varejista, alimentação e saúde. Centro, Jardim Gramacho e Jardim Primavera somam quase 40% de toda a base empresarial da cidade. Com esse volume de negócios crescendo, a concorrência por visibilidade online só aumenta. Empresa sem presença digital perde espaço pra concorrente que já aparece no Google quando o cliente pesquisa pelo serviço. O que olhar antes de contratar. Portfólio real é o primeiro filtro. Ver projetos entregues, com nome de cliente identificável, diz mais do que qualquer promessa de proposta. Pergunte também sobre a tecnologia usada, o que está incluso em segurança e o que acontece com o site depois da entrega. Desconfie de orçamentos muito abaixo da média sem explicação clara do que está sendo entregue. Site barato feito com template genérico em hospedagem compartilhada vai custar o dobro quando precisar ser refeito. Site que não carrega rápido, não aparece no Google e não converte visitante em contato é custo disfarçado de investimento. Como pedir um orçamento sem perder tempo. Para receber uma proposta precisa, vale ter em mãos: o objetivo principal do site, referências de sites que você considera bons, a lista de páginas que imagina ter e se já tem logo, textos e fotos prontos. Com essas informações, a conversa vai direto ao ponto. A Vies Studios atende empresas em Duque de Caxias e em toda a Baixada Fluminense. Somos de Caxias, conhecemos o mercado local e desenvolvemos sites com Next.js, foco em performance e segurança como padrão, não como adicional."
              />
            </div>

            {/* Content Body */}
            <>
              <p className="text-zinc-800 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                Criar um site profissional em Duque de Caxias custa, em média, entre R$ 1.500 e R$ 10.000 em 2026. Esse intervalo amplo existe porque "site" é uma palavra que cobre coisas muito diferentes: uma página simples de captura de leads, um site institucional com várias seções, uma loja virtual com integração de pagamento ou uma plataforma com área de cliente.
              </p>
              
              <p className="text-zinc-600 text-lg leading-relaxed mb-12">
                O que você paga depende do que você precisa. E entender essa diferença é o que evita contratar barato hoje e pagar caro pra refazer daqui seis meses.
              </p>
            </>

            <>
              <h3 id="quanto-custa" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Quanto custa, por tipo de projeto
              </h3>
              
              <div className="overflow-x-auto mb-8 bg-zinc-50 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-zinc-100/50">
                      <th className="py-5 px-6 font-bold text-zinc-900 whitespace-nowrap">Tipo de site</th>
                      <th className="py-5 px-6 font-bold text-zinc-900 whitespace-nowrap">Faixa de investimento</th>
                      <th className="py-5 px-6 font-bold text-zinc-900">Para quem faz sentido</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600 text-base">
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Landing page</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 1.500 a R$ 3.500</td>
                      <td className="py-5 px-6">Quem quer captar contatos de um serviço ou campanha específica</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Site institucional</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 3.000 a R$ 7.000</td>
                      <td className="py-5 px-6">Empresas que querem se apresentar, gerar orçamentos e aparecer no Google</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">E-commerce</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 5.000 a R$ 15.000</td>
                      <td className="py-5 px-6">Quem precisa vender produtos online com carrinho e pagamento integrado</td>
                    </tr>
                    <tr className="hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Produto digital ou sistema</td>
                      <td className="py-5 px-6 whitespace-nowrap">A partir de R$ 10.000</td>
                      <td className="py-5 px-6">Plataformas com login, agendamento, automações ou lógica de negócio específica</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-600 text-lg leading-relaxed mb-16 italic border-l-4 border-[#d75310] pl-6 py-2 bg-zinc-50 rounded-r-lg">
                Esses valores cobrem o desenvolvimento em si. Domínio e hospedagem são contratados à parte e somam entre R$ 200 e R$ 800 por ano, conforme o plano escolhido.
              </p>
            </>

            <>
              <h3 id="por-que-diferente" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que dois sites do mesmo tipo custam valores tão diferentes?
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Essa é a pergunta que mais aparece. A resposta está em quatro fatores que a maioria dos fornecedores não explica na proposta:
              </p>

              <h4 className="text-xl font-bold text-zinc-800 mb-4">Tecnologia</h4>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Sites feitos em WordPress com template pronto saem mais barato e entregam menos. O problema não é o WordPress em si, é o uso descuidado: templates genéricos, plugins acumulados, hospedagem compartilhada barata. O resultado é um site lento, com pontuação baixa no Google e que vira alvo fácil pra ataques, já que o WordPress responde por mais de 40% da web e é justamente por isso que concentra a maior parte das invasões.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Plataformas modernas como Next.js resolvem isso na raiz: carregamento mais rápido, estrutura mais segura, pontuação alta no Lighthouse e deploy em infraestrutura de edge network. A diferença aparece no SEO, na experiência do usuário e na taxa de conversão.
              </p>

              <h4 className="text-xl font-bold text-zinc-800 mb-4">Segurança</h4>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Esse é o ponto que mais separa o mercado. Boa parte dos fornecedores instala o certificado SSL (o cadeado no navegador) e chama isso de segurança. O problema é que SSL só criptografa a comunicação entre o usuário e o servidor. Ele não protege contra injeção de código nos formulários, não bloqueia tentativas de acesso por força bruta, não impede que dados de clientes sejam vazados por uma falha no banco de dados.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Um site com segurança real tem headers HTTP configurados, proteção contra XSS e SQL Injection, rate limiting, variáveis de ambiente fora do código e backups automáticos com versionamento. Esse nível de cuidado não é padrão no mercado. Deveria ser.
              </p>

              <h4 className="text-xl font-bold text-zinc-800 mb-4">Design sob medida vs. template</h4>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                Um layout construído a partir da sua identidade de marca, do seu público e do seu objetivo de conversão custa mais do que um template adaptado. A diferença não é só estética: sites com hierarquia visual bem resolvida e chamadas pra ação no lugar certo convertem mais. Bonito e funcional não são opostos, mas também não vêm juntos por acidente.
              </p>

              <h4 className="text-xl font-bold text-zinc-800 mb-4">Funcionalidades</h4>
              <p className="text-zinc-600 text-lg leading-relaxed mb-16">
                Formulário simples, integração com WhatsApp, blog, agendamento online, área de cliente, pagamento integrado: cada recurso adiciona escopo e tempo de desenvolvimento. Vale mapear o que você precisa agora e o que pode entrar numa segunda fase, pra não inflar o projeto inicial desnecessariamente.
              </p>
            </>

            <>
              <h3 id="quanto-tempo" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Quanto tempo leva pra ficar pronto?
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Uma landing page bem construída fica pronta em 1 a 2 semanas. Um site institucional completo leva de 2 a 4 semanas. Projetos com e-commerce ou sistemas sob medida podem levar de 6 a 12 semanas, dependendo da complexidade.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-16">
                O prazo real depende, em grande parte, do cliente: aprovação de layout rápida, textos e imagens entregues no tempo certo e feedback objetivo aceleram muito o processo. Projetos que travam no meio geralmente travam por falta de conteúdo ou excesso de revisões sem critério.
              </p>
            </>

            <>
              <h3 id="mercado-caxias" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Sobre o mercado em Duque de Caxias
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Caxias tem mais de 103 mil empresas ativas e registrou quase 6 mil novas aberturas só nos últimos 30 dias. Os setores com maior concentração são comércio varejista, alimentação e saúde. Centro, Jardim Gramacho e Jardim Primavera somam quase 40% de toda a base empresarial da cidade.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-16">
                Com esse volume de negócios crescendo, a concorrência por visibilidade online só aumenta. Empresa sem presença digital perde espaço pra concorrente que já aparece no Google quando o cliente pesquisa pelo serviço.
              </p>
            </>

            <>
              <h3 id="o-que-olhar" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que olhar antes de contratar
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Portfólio real é o primeiro filtro. Ver projetos entregues, com nome de cliente identificável, diz mais do que qualquer promessa de proposta. Pergunte também sobre a tecnologia usada, o que está incluso em segurança e o que acontece com o site depois da entrega (suporte, atualizações, hospedagem).
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Desconfie de orçamentos muito abaixo da média sem explicação clara do que está sendo entregue. Site barato feito com template genérico em hospedagem compartilhada vai custar o dobro quando precisar ser refeito.
              </p>
              <p className="text-zinc-800 font-bold text-lg leading-relaxed mb-16">
                Site que não carrega rápido, não aparece no Google e não converte visitante em contato é custo disfarçado de investimento.
              </p>
            </>

            <>
              <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 mb-16">
                <h3 id="como-pedir" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Como pedir um orçamento sem perder tempo
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  Para receber uma proposta precisa, vale ter em mãos: o objetivo principal do site, referências de sites que você considera bons, a lista de páginas que imagina ter e se já tem logo, textos e fotos prontos. Com essas informações, a conversa vai direto ao ponto.
                </p>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  A Vies Studios atende empresas em Duque de Caxias e em toda a Baixada Fluminense. Somos de Caxias, conhecemos o mercado local e desenvolvemos sites com Next.js, foco em performance e segurança como padrão, não como adicional.
                </p>
                <a 
                  href="https://wa.me/5521978949944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d75310] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b04008] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </>

            <>
              <h3 id="faq" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Perguntas frequentes
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-xl font-bold text-zinc-800 mb-3">Quanto custa um site em Duque de Caxias em 2026?</h4>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Entre R$ 1.500 e R$ 10.000, dependendo do tipo. Landing page fica entre R$ 1.500 e R$ 3.500; site institucional entre R$ 3.000 e R$ 7.000; e-commerce a partir de R$ 5.000.
                  </p>
                </div>
                
                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-xl font-bold text-zinc-800 mb-3">Qual a diferença entre um site barato e um site profissional?</h4>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Além do visual, um site profissional carrega rápido, tem estrutura de segurança real e é construído pra aparecer no Google. Sites baratos costumam usar templates prontos com hospedagem fraca e nenhuma camada de proteção além do SSL básico.
                  </p>
                </div>

                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-xl font-bold text-zinc-800 mb-3">WordPress ou Next.js: qual é melhor?</h4>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Depende do projeto. WordPress funciona bem pra blogs e sites com muito conteúdo atualizado frequentemente. Para sites institucionais e produtos digitais que precisam de performance máxima e segurança robusta, Next.js entrega resultados superiores.
                  </p>
                </div>

                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-xl font-bold text-zinc-800 mb-3">Domínio e hospedagem estão inclusos no orçamento?</h4>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Normalmente não, pois ficam em contratos separados. A Vies orienta na escolha e cuida da configuração completa.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-xl font-bold text-zinc-800 mb-3">Vocês fazem reunião presencial em Duque de Caxias?</h4>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Sim. Somos de Caxias e atendemos toda a região com reuniões presenciais ou online, conforme a preferência do cliente.
                  </p>
                </div>
              </div>
            </>
            
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
