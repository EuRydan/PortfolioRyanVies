export default function NavMenu() {
  return (
    <nav className="relative w-full text-xs font-semibold uppercase tracking-[0.15em] text-black flex items-center justify-between px-10 py-8 font-sans">
      {/* Esquerda: Nome e Marca */}
      <div className="flex-1 flex justify-start">
        <span>Ryan Ferreira | ViesLab.md</span>
      </div>

      {/* Centro: Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
        <div className="relative group">
          <a href="#" className="hover:opacity-60 transition-opacity">
            Trabalhos
          </a>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:flex flex-col items-start bg-white border border-black/10 shadow-md min-w-[120px] z-50">
            {["/Design", "/Branding", "/Ux", "/Web", "/Dev"].map((skill) => (
              <a
                key={skill}
                href="#"
                className="w-full px-4 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                {skill}
              </a>
            ))}
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
