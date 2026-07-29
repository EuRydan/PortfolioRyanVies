import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'));

export const metadata: Metadata = {
  title: 'CriaÃ§Ã£o de sites em Duque de Caxias: quanto custa em 2026 | Vies Studios',
  description: 'Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preÃ§o reais, o que muda o valor e como contratar sem cair em armadilha.',
  alternates: {
    canonical: "https://www.viesstudios.com.br/blog/criacao-de-sites-em-duque-de-caxias",
  },
};

export default function ArticlePage() {
  const tocItems = [
    { id: 'quanto-custa', label: 'Quanto custa, por tipo de projeto' },
    { id: 'por-que-diferente', label: 'Por que os valores sÃ£o diferentes?' },
    { id: 'quanto-tempo', label: 'Quanto tempo leva pra ficar pronto?' },
    { id: 'mercado-caxias', label: 'Sobre o mercado em Duque de Caxias' },
    { id: 'o-que-olhar', label: 'O que olhar antes de contratar' },
    { id: 'como-pedir', label: 'Como pedir um orÃ§amento' },
    { id: 'faq', label: 'Perguntas frequentes' },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      {/* Article Header Section */}
      <section className="w-full bg-black flex flex-col justify-center pt-24 md:pt-32 pb-16 lg:pb-24 relative overflow-hidden" style={{ minHeight: '534px' }}>
        <ParallaxBackground src="/brand/bg-header.jpg" />
        
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
                <span className="bg-[#d75310] text-white px-3 py-1.5 rounded">CriaÃ§Ã£o de sites</span>
              </div>
            </AnimatedSection>

            {/* Title & Meta Description */}
            <AnimatedSection delay={0.1}>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                CriaÃ§Ã£o de sites em Duque de Caxias: quanto custa em 2026
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-zinc-400 text-base md:text-base md:text-lg leading-relaxed max-w-2xl">
                Quanto custa um site em Duque de Caxias em 2026? Veja faixas de preÃ§o reais, o que muda o valor e como contratar sem cair em armadilha.
              </p>
            </AnimatedSection>

            {/* Author Block */}
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
                    24 Jul 2026 <span className="mx-1">&middot;</span> 6 min de leitura
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
            
            {/* Image Placeholder */}
            <>
              <div className="w-full aspect-video md:aspect-[21/9] bg-zinc-100 rounded-xl overflow-hidden mb-12">
                <img 
                  src="/marketing/capa-artigo.jpg" 
                  alt="CriaÃ§Ã£o de sites em Duque de Caxias"
                  className="w-full h-full object-cover"
                />
              </div>
            </>

            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text="Criar um site profissional em Duque de Caxias custa, em mÃ©dia, entre R$ 1.500 e R$ 10.000 em 2026. Esse intervalo amplo existe porque site Ã© uma palavra que cobre coisas muito diferentes: uma pÃ¡gina simples de captura de leads, um site institucional com vÃ¡rias seÃ§Ãµes, uma loja virtual com integraÃ§Ã£o de pagamento ou uma plataforma com Ã¡rea de cliente. O que vocÃª paga depende do que vocÃª precisa. E entender essa diferenÃ§a Ã© o que evita contratar barato hoje e pagar caro pra refazer daqui seis meses. Quanto custa, por tipo de projeto. Landing page: R$ 1.500 a R$ 3.500. Quem quer captar contatos de um serviÃ§o ou campanha especÃ­fica. Site institucional: R$ 3.000 a R$ 7.000. Empresas que querem se apresentar, gerar orÃ§amentos e aparecer no Google. E-commerce: R$ 5.000 a R$ 15.000. Quem precisa vender produtos online com carrinho e pagamento integrado. Produto digital ou sistema: A partir de R$ 10.000. Plataformas com login, agendamento, automaÃ§Ãµes ou lÃ³gica de negÃ³cio especÃ­fica. Esses valores cobrem o desenvolvimento em si. DomÃ­nio e hospedagem sÃ£o contratados Ã  parte e somam entre R$ 200 e R$ 800 por ano, conforme o plano escolhido. Por que dois sites do mesmo tipo custam valores tÃ£o diferentes? Essa Ã© a pergunta que mais aparece. A resposta estÃ¡ em quatro fatores que a maioria dos fornecedores nÃ£o explica na proposta: Tecnologia. Sites feitos em WordPress com template pronto saem mais barato e entregam menos. O problema nÃ£o Ã© o WordPress em si, Ã© o uso descuidado: templates genÃ©ricos, plugins acumulados, hospedagem compartilhada barata. O resultado Ã© um site lento, com pontuaÃ§Ã£o baixa no Google e que vira alvo fÃ¡cil pra ataques, jÃ¡ que o WordPress responde por mais de 40% da web e Ã© justamente por isso que concentra a maior parte das invasÃµes. Plataformas modernas como Next.js resolvem isso na raiz: carregamento mais rÃ¡pido, estrutura mais segura, pontuaÃ§Ã£o alta no Lighthouse e deploy em infraestrutura de edge network. A diferenÃ§a aparece no SEO, na experiÃªncia do usuÃ¡rio e na taxa de conversÃ£o. SeguranÃ§a. Esse Ã© o ponto que mais separa o mercado. Boa parte dos fornecedores instala o certificado SSL e chama isso de seguranÃ§a. O problema Ã© que SSL sÃ³ criptografa a comunicaÃ§Ã£o entre o usuÃ¡rio e o servidor. Ele nÃ£o protege contra injeÃ§Ã£o de cÃ³digo nos formulÃ¡rios, nÃ£o bloqueia tentativas de acesso por forÃ§a bruta, nÃ£o impede que dados de clientes sejam vazados por uma falha no banco de dados. Um site com seguranÃ§a real tem headers HTTP configurados, proteÃ§Ã£o contra XSS e SQL Injection, rate limiting, variÃ¡veis de ambiente fora do cÃ³digo e backups automÃ¡ticos com versionamento. Esse nÃ­vel de cuidado nÃ£o Ã© padrÃ£o no mercado. Deveria ser. Design sob medida vs template. Um layout construÃ­do a partir da sua identidade de marca, do seu pÃºblico e do seu objetivo de conversÃ£o custa mais do que um template adaptado. A diferenÃ§a nÃ£o Ã© sÃ³ estÃ©tica: sites com hierarquia visual bem resolvida e chamadas pra aÃ§Ã£o no lugar certo convertem mais. Bonito e funcional nÃ£o sÃ£o opostos, mas tambÃ©m nÃ£o vÃªm juntos por acidente. Funcionalidades. FormulÃ¡rio simples, integraÃ§Ã£o com WhatsApp, blog, agendamento online, Ã¡rea de cliente, pagamento integrado: cada recurso adiciona escopo e tempo de desenvolvimento. Vale mapear o que vocÃª precisa agora e o que pode entrar numa segunda fase, pra nÃ£o inflar o projeto inicial desnecessariamente. Quanto tempo leva pra ficar pronto? Uma landing page bem construÃ­da fica pronta em 1 a 2 semanas. Um site institucional completo leva de 2 a 4 semanas. Projetos com e-commerce ou sistemas sob medida podem levar de 6 a 12 semanas, dependendo da complexidade. O prazo real depende, em grande parte, do cliente: aprovaÃ§Ã£o de layout rÃ¡pida, textos e imagens entregues no tempo certo e feedback objetivo aceleram muito o processo. Projetos que travam no meio geralmente travam por falta de conteÃºdo ou excesso de revisÃµes sem critÃ©rio. Sobre o mercado em Duque de Caxias. Caxias tem mais de 103 mil empresas ativas e registrou quase 6 mil novas aberturas sÃ³ nos Ãºltimos 30 dias. Os setores com maior concentraÃ§Ã£o sÃ£o comÃ©rcio varejista, alimentaÃ§Ã£o e saÃºde. Centro, Jardim Gramacho e Jardim Primavera somam quase 40% de toda a base empresarial da cidade. Com esse volume de negÃ³cios crescendo, a concorrÃªncia por visibilidade online sÃ³ aumenta. Empresa sem presenÃ§a digital perde espaÃ§o pra concorrente que jÃ¡ aparece no Google quando o cliente pesquisa pelo serviÃ§o. O que olhar antes de contratar. PortfÃ³lio real Ã© o primeiro filtro. Ver projetos entregues, com nome de cliente identificÃ¡vel, diz mais do que qualquer promessa de proposta. Pergunte tambÃ©m sobre a tecnologia usada, o que estÃ¡ incluso em seguranÃ§a e o que acontece com o site depois da entrega. Desconfie de orÃ§amentos muito abaixo da mÃ©dia sem explicaÃ§Ã£o clara do que estÃ¡ sendo entregue. Site barato feito com template genÃ©rico em hospedagem compartilhada vai custar o dobro quando precisar ser refeito. Site que nÃ£o carrega rÃ¡pido, nÃ£o aparece no Google e nÃ£o converte visitante em contato Ã© custo disfarÃ§ado de investimento. Como pedir um orÃ§amento sem perder tempo. Para receber uma proposta precisa, vale ter em mÃ£os: o objetivo principal do site, referÃªncias de sites que vocÃª considera bons, a lista de pÃ¡ginas que imagina ter e se jÃ¡ tem logo, textos e fotos prontos. Com essas informaÃ§Ãµes, a conversa vai direto ao ponto. A Vies Studios atende empresas em Duque de Caxias e em toda a Baixada Fluminense. Somos de Caxias, conhecemos o mercado local e desenvolvemos sites com Next.js, foco em performance e seguranÃ§a como padrÃ£o, nÃ£o como adicional."
              />
            </div>

            {/* Content Body */}
            <>
              <p className="text-zinc-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                Criar um site profissional em Duque de Caxias custa, em mÃ©dia, entre R$ 1.500 e R$ 10.000 em 2026. Esse intervalo amplo existe porque "site" Ã© uma palavra que cobre coisas muito diferentes: uma pÃ¡gina simples de captura de leads, um site institucional com vÃ¡rias seÃ§Ãµes, uma loja virtual com integraÃ§Ã£o de pagamento ou uma plataforma com Ã¡rea de cliente.
              </p>
              
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-12">
                O que vocÃª paga depende do que vocÃª precisa. E entender essa diferenÃ§a Ã© o que evita contratar barato hoje e pagar caro pra refazer daqui seis meses.
              </p>
            </>

            <>
              <h3 id="quanto-custa" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
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
                      <td className="py-5 px-6">Quem quer captar contatos de um serviÃ§o ou campanha especÃ­fica</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Site institucional</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 3.000 a R$ 7.000</td>
                      <td className="py-5 px-6">Empresas que querem se apresentar, gerar orÃ§amentos e aparecer no Google</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">E-commerce</td>
                      <td className="py-5 px-6 whitespace-nowrap">R$ 5.000 a R$ 15.000</td>
                      <td className="py-5 px-6">Quem precisa vender produtos online com carrinho e pagamento integrado</td>
                    </tr>
                    <tr className="hover:bg-zinc-100/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-zinc-800">Produto digital ou sistema</td>
                      <td className="py-5 px-6 whitespace-nowrap">A partir de R$ 10.000</td>
                      <td className="py-5 px-6">Plataformas com login, agendamento, automaÃ§Ãµes ou lÃ³gica de negÃ³cio especÃ­fica</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-16 italic border-l-4 border-[#d75310] pl-6 py-2 bg-zinc-50 rounded-r-lg">
                Esses valores cobrem o desenvolvimento em si. DomÃ­nio e hospedagem sÃ£o contratados Ã  parte e somam entre R$ 200 e R$ 800 por ano, conforme o plano escolhido.
              </p>
            </>

            <>
              <h3 id="por-que-diferente" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-8 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Por que dois sites do mesmo tipo custam valores tÃ£o diferentes?
              </h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10">
                Essa Ã© a pergunta que mais aparece. A resposta estÃ¡ em quatro fatores que a maioria dos fornecedores nÃ£o explica na proposta:
              </p>

              <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-4">Tecnologia</h4>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Sites feitos em WordPress com template pronto saem mais barato e entregam menos. O problema nÃ£o Ã© o WordPress em si, Ã© o uso descuidado: templates genÃ©ricos, plugins acumulados, hospedagem compartilhada barata. O resultado Ã© um site lento, com pontuaÃ§Ã£o baixa no Google e que vira alvo fÃ¡cil pra ataques, jÃ¡ que o WordPress responde por mais de 40% da web e Ã© justamente por isso que concentra a maior parte das invasÃµes.
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10">
                Plataformas modernas como Next.js resolvem isso na raiz: carregamento mais rÃ¡pido, estrutura mais segura, pontuaÃ§Ã£o alta no Lighthouse e deploy em infraestrutura de edge network. A diferenÃ§a aparece no SEO, na experiÃªncia do usuÃ¡rio e na taxa de conversÃ£o.
              </p>

              <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-4">SeguranÃ§a</h4>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Esse Ã© o ponto que mais separa o mercado. Boa parte dos fornecedores instala o certificado SSL (o cadeado no navegador) e chama isso de seguranÃ§a. O problema Ã© que SSL sÃ³ criptografa a comunicaÃ§Ã£o entre o usuÃ¡rio e o servidor. Ele nÃ£o protege contra injeÃ§Ã£o de cÃ³digo nos formulÃ¡rios, nÃ£o bloqueia tentativas de acesso por forÃ§a bruta, nÃ£o impede que dados de clientes sejam vazados por uma falha no banco de dados.
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10">
                Um site com seguranÃ§a real tem headers HTTP configurados, proteÃ§Ã£o contra XSS e SQL Injection, rate limiting, variÃ¡veis de ambiente fora do cÃ³digo e backups automÃ¡ticos com versionamento. Esse nÃ­vel de cuidado nÃ£o Ã© padrÃ£o no mercado. Deveria ser.
              </p>

              <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-4">Design sob medida vs. template</h4>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10">
                Um layout construÃ­do a partir da sua identidade de marca, do seu pÃºblico e do seu objetivo de conversÃ£o custa mais do que um template adaptado. A diferenÃ§a nÃ£o Ã© sÃ³ estÃ©tica: sites com hierarquia visual bem resolvida e chamadas pra aÃ§Ã£o no lugar certo convertem mais. Bonito e funcional nÃ£o sÃ£o opostos, mas tambÃ©m nÃ£o vÃªm juntos por acidente.
              </p>

              <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-4">Funcionalidades</h4>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-16">
                FormulÃ¡rio simples, integraÃ§Ã£o com WhatsApp, blog, agendamento online, Ã¡rea de cliente, pagamento integrado: cada recurso adiciona escopo e tempo de desenvolvimento. Vale mapear o que vocÃª precisa agora e o que pode entrar numa segunda fase, pra nÃ£o inflar o projeto inicial desnecessariamente.
              </p>
            </>

            <>
              <h3 id="quanto-tempo" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Quanto tempo leva pra ficar pronto?
              </h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Uma landing page bem construÃ­da fica pronta em 1 a 2 semanas. Um site institucional completo leva de 2 a 4 semanas. Projetos com e-commerce ou sistemas sob medida podem levar de 6 a 12 semanas, dependendo da complexidade.
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-16">
                O prazo real depende, em grande parte, do cliente: aprovaÃ§Ã£o de layout rÃ¡pida, textos e imagens entregues no tempo certo e feedback objetivo aceleram muito o processo. Projetos que travam no meio geralmente travam por falta de conteÃºdo ou excesso de revisÃµes sem critÃ©rio.
              </p>
            </>

            <>
              <h3 id="mercado-caxias" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Sobre o mercado em Duque de Caxias
              </h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Caxias tem mais de 103 mil empresas ativas e registrou quase 6 mil novas aberturas sÃ³ nos Ãºltimos 30 dias. Os setores com maior concentraÃ§Ã£o sÃ£o comÃ©rcio varejista, alimentaÃ§Ã£o e saÃºde. Centro, Jardim Gramacho e Jardim Primavera somam quase 40% de toda a base empresarial da cidade.
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-16">
                Com esse volume de negÃ³cios crescendo, a concorrÃªncia por visibilidade online sÃ³ aumenta. Empresa sem presenÃ§a digital perde espaÃ§o pra concorrente que jÃ¡ aparece no Google quando o cliente pesquisa pelo serviÃ§o.
              </p>
            </>

            <>
              <h3 id="o-que-olhar" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                O que olhar antes de contratar
              </h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                PortfÃ³lio real Ã© o primeiro filtro. Ver projetos entregues, com nome de cliente identificÃ¡vel, diz mais do que qualquer promessa de proposta. Pergunte tambÃ©m sobre a tecnologia usada, o que estÃ¡ incluso em seguranÃ§a e o que acontece com o site depois da entrega (suporte, atualizaÃ§Ãµes, hospedagem).
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                Desconfie de orÃ§amentos muito abaixo da mÃ©dia sem explicaÃ§Ã£o clara do que estÃ¡ sendo entregue. Site barato feito com template genÃ©rico em hospedagem compartilhada vai custar o dobro quando precisar ser refeito.
              </p>
              <p className="text-zinc-800 font-bold text-base md:text-lg leading-relaxed mb-16">
                Site que nÃ£o carrega rÃ¡pido, nÃ£o aparece no Google e nÃ£o converte visitante em contato Ã© custo disfarÃ§ado de investimento.
              </p>
            </>

            <>
              <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 mb-16">
                <h3 id="como-pedir" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                  Como pedir um orÃ§amento sem perder tempo
                </h3>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
                  Para receber uma proposta precisa, vale ter em mÃ£os: o objetivo principal do site, referÃªncias de sites que vocÃª considera bons, a lista de pÃ¡ginas que imagina ter e se jÃ¡ tem logo, textos e fotos prontos. Com essas informaÃ§Ãµes, a conversa vai direto ao ponto.
                </p>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8">
                  A Vies Studios atende empresas em Duque de Caxias e em toda a Baixada Fluminense. Somos de Caxias, conhecemos o mercado local e desenvolvemos sites com Next.js, foco em performance e seguranÃ§a como padrÃ£o, nÃ£o como adicional.
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
              <h3 id="faq" className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-8 scroll-mt-32" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                Perguntas frequentes
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Quanto custa um site em Duque de Caxias em 2026?</h4>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Entre R$ 1.500 e R$ 10.000, dependendo do tipo. Landing page fica entre R$ 1.500 e R$ 3.500; site institucional entre R$ 3.000 e R$ 7.000; e-commerce a partir de R$ 5.000.
                  </p>
                </div>
                
                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">Qual a diferenÃ§a entre um site barato e um site profissional?</h4>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    AlÃ©m do visual, um site profissional carrega rÃ¡pido, tem estrutura de seguranÃ§a real e Ã© construÃ­do pra aparecer no Google. Sites baratos costumam usar templates prontos com hospedagem fraca e nenhuma camada de proteÃ§Ã£o alÃ©m do SSL bÃ¡sico.
                  </p>
                </div>

                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">WordPress ou Next.js: qual Ã© melhor?</h4>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Depende do projeto. WordPress funciona bem pra blogs e sites com muito conteÃºdo atualizado frequentemente. Para sites institucionais e produtos digitais que precisam de performance mÃ¡xima e seguranÃ§a robusta, Next.js entrega resultados superiores.
                  </p>
                </div>

                <div className="border-b border-zinc-200 pb-6">
                  <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">DomÃ­nio e hospedagem estÃ£o inclusos no orÃ§amento?</h4>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Normalmente nÃ£o, pois ficam em contratos separados. A Vies orienta na escolha e cuida da configuraÃ§Ã£o completa.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-zinc-800 mb-3">VocÃªs fazem reuniÃ£o presencial em Duque de Caxias?</h4>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Sim. Somos de Caxias e atendemos toda a regiÃ£o com reuniÃµes presenciais ou online, conforme a preferÃªncia do cliente.
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


