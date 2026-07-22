import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-6 mb-16">
          {/* Logo & Descrição */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-8 inline-block text-white hover:text-[#d75310] transition-colors">
              <svg viewBox="0 0 995.37 370.01" className="w-[83px] h-[28px] fill-current">
                <g>
                  <path d="M384.7,12.26h69.94l-22.64,217.37-5.03,49.31h2.52l10.57-49.31L485.84,12.26h69.94l-99.12,352.22h-84.53l12.58-352.22Z"/>
                  <path d="M568.86,12.26h69.44l-55.35,352.22h-69.44L568.86,12.26Z"/>
                  <path d="M669.49,12.26h97.62l-4.53,30.69h-73.46l13.08-10.57-22.14,141.39-8.05-14.59h58.37l-5.03,31.2h-58.37l12.58-14.09-26.67,168.56-10.57-11.07h76.48l-4.53,30.69h-100.13L669.49,12.26Z"/>
                  <path d="M850,352.65c-10.4-11.57-13.75-28.93-10.06-52.08l11.07-71.95h35.73l-13.08,81.01c-1.68,9.73-.43,17.11,3.77,22.14,4.19,5.03,9.98,7.55,17.36,7.55h1.01c14.09,0,22.3-7.55,24.65-22.64l7.55-47.3c2.34-15.09,1.84-28.09-1.51-39-3.36-10.9-9.73-23.56-19.12-37.99l-2.52-4.53c-8.39-12.74-14.84-23.65-19.37-32.71-4.53-9.06-7.8-19.54-9.81-31.45-2.01-11.9-1.85-25.24.5-40l4.03-25.66c3.02-16.77,9.39-29.51,19.12-38.24,9.73-8.72,23.15-13.08,40.25-13.08h2.01c18.11,0,32.28,5.71,42.52,17.11,10.23,11.41,13.5,28.35,9.81,50.82l-8.05,50.82h-35.73l9.56-59.88c1.34-9.06.08-16.01-3.77-20.88-3.86-4.86-9.14-7.3-15.85-7.3h-1.01c-13.42,0-21.31,7.22-23.65,21.64l-4.03,27.17c-1.68,11.07-1.93,20.8-.75,29.18,1.17,8.39,3.35,16.19,6.54,23.4,3.18,7.22,8.13,15.85,14.84,25.91l1.51,2.52c8.72,13.76,15.35,25.25,19.88,34.47,4.53,9.23,7.8,19.62,9.81,31.2,2.01,11.57,1.84,24.58-.5,39l-7.04,45.79c-3.02,17.45-9.39,30.53-19.12,39.25-9.73,8.72-23.32,13.08-40.76,13.08h-2.52c-18.45,0-32.88-5.79-43.27-17.36Z"/>
                  <path d="M806.39,66.78c-4.08-2.24-7.03-5.63-8.87-10.19-1.84-4.56-2.24-10.15-1.2-16.79l2.4-15.59c1.28-8.07,4.16-14.13,8.63-18.16,4.48-4.04,10.71-6.05,18.7-6.05h.36c5.59,0,10.43,1.16,14.51,3.48,4.08,2.32,7.05,5.76,8.93,10.31,1.88,4.56,2.3,10.07,1.26,16.55l-2.4,15.59c-1.28,8.23-4.16,14.33-8.63,18.28-4.48,3.96-10.71,5.94-18.7,5.94h-.36c-5.68,0-10.55-1.12-14.63-3.36ZM835.53,59.35c3.12-2.8,5.11-7.23,5.99-13.31l2.64-17.51c.72-4.8.48-8.83-.72-12.11-1.2-3.28-3.28-5.73-6.23-7.37-2.96-1.64-6.64-2.46-11.03-2.46h-.12c-6.32,0-11.01,1.42-14.09,4.26-3.08,2.84-5.1,7.25-6.05,13.25l-2.64,17.51c-.72,4.88-.48,8.93.72,12.17,1.2,3.24,3.26,5.68,6.17,7.31,2.92,1.64,6.61,2.46,11.09,2.46h.12c6.31,0,11.03-1.4,14.15-4.2ZM825.63,37.23c-.28-.44-.82-.66-1.62-.66h-4.44l1.2-7.55h4.68c.72,0,1.22-.14,1.5-.42.28-.28.5-.78.66-1.5l.84-5.52c.16-.72.1-1.26-.18-1.62-.28-.36-.78-.54-1.5-.54h-3.24l1.68-1.32-6.23,38.97h-10.19l7.31-46.28h12.23c3.68,0,6.39,1.04,8.15,3.12,1.76,2.08,2.36,5,1.8,8.75l-.6,4.32c-.32,2.4-1.3,4.22-2.94,5.46-1.64,1.24-4.62,1.9-8.93,1.98l1.08-2.76c4,.48,6.57,1.5,7.73,3.06,1.16,1.56,1.5,3.9,1.02,7.01l-2.52,15.35h-10.19l2.88-17.87c.16-.88.1-1.54-.18-1.98Z"/>
                  <g fillRule="evenodd">
                    <polygon points="193.22 162.5 116.19 240.73 63.99 294.11 .74 230.06 .74 297.03 63.99 361.08 116.19 307.7 193.22 229.48 269.04 306.09 269.04 239.12 193.22 162.5"/>
                    <polygon points="140.82 107.42 140.82 107.43 193.22 54.4 269.02 130.96 269.02 85.42 193.22 8.86 140.82 61.9 140.82 61.89 63.87 136.53 0 74.84 0 120.38 63.87 185.01 140.82 107.42"/>
                    <polygon points="193.22 80.28 128.51 146.17 128.51 146.17 63.8 212.07 .29 147.78 .29 204.03 63.8 268.32 128.51 202.43 128.51 202.43 193.22 136.53 268.71 212.8 268.71 156.54 193.22 80.28"/>
                  </g>
                </g>
              </svg>
            </Link>
            <p className="text-zinc-400 text-sm md:text-base max-w-sm" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              Laboratório criativo focado em design estratégico e experiências digitais memoráveis.
            </p>
            <a 
              href="https://wa.me/5521978949944" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 flex items-center gap-3 text-zinc-400 hover:text-[#d75310] transition-colors group w-fit"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-medium text-sm relative pb-0.5">
                +55 21 97894-9944
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#d75310] transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
            </a>
          </div>

          {/* Navegação */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Navegação</h4>
            <Link href="/#quem-somos" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Quem Somos</Link>
            <Link href="/#portfolio" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Portfólio</Link>
            <Link href="/#o-que-fazemos" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">O Que Fazemos</Link>
            <Link href="/fale-conosco" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Fale Conosco</Link>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Social</h4>
            <a href="#" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Instagram</a>
            <a href="#" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Behance</a>
            <a href="#" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">Dribbble</a>
          </div>

          {/* Contato */}
          <div className="col-span-4 md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>Fale Conosco</h4>
            <a href="mailto:contato@viesstudios.com.br" className="text-zinc-400 hover:text-[#d75310] transition-colors text-sm">contato@viesstudios.com.br</a>
            <p className="text-zinc-400 text-sm">Rio de Janeiro, RJ<br />Brasil</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800/50">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vieslab.md. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-zinc-500 hover:text-[#d75310] text-sm transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="text-zinc-500 hover:text-[#d75310] text-sm transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
