export default function NavMenu() {
  return (
    <nav className="relative w-full text-xs font-semibold uppercase tracking-[0.15em] text-black flex items-center justify-between px-10 py-8 font-sans z-50">
      {/* Esquerda: Nome e Marca */}
      <div className="flex-1 flex justify-start">
        <span>Ryan Ferreira | ViesLab.md</span>
      </div>

      {/* Centro: Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
        <div className="relative group">
          <button className="flex items-center gap-1.5 hover:opacity-60 transition-opacity cursor-pointer py-2">
            Trabalhos
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[1px] transition-transform duration-300 group-hover:rotate-180">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          
          {/* Caixa do Dropdown */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 ease-out">
            <div className="bg-[#fff5e7] border border-black/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-sm flex flex-col py-3 px-2">
              {["/Design", "/Branding", "/Ux", "/Web", "/Dev"].map((skill) => (
                <a
                  key={skill}
                  href="#"
                  className="px-4 py-2.5 hover:bg-black/5 hover:tracking-[0.2em] transition-all duration-300 rounded-sm"
                >
                  {skill}
                </a>
              ))}
            </div>
          </div>
        </div>
        <a href="#" className="hover:opacity-60 transition-opacity">
          Sobre
        </a>
        <a href="#" className="hover:opacity-60 transition-opacity">
          Curriculo
        </a>
        <a href="#" className="hover:opacity-60 transition-opacity">
          Contato
        </a>
      </div>

      {/* Direita: Linkedin */}
      <div className="flex-1 flex justify-end">
        <a href="#" className="hover:opacity-60 transition-opacity">
          Linkedin
        </a>
      </div>
    </nav>
  );
}
