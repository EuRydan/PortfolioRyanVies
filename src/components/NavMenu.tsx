export default function NavMenu() {
  return (
    <nav className="relative w-full text-xs font-semibold uppercase tracking-[0.15em] text-black flex items-center justify-between px-10 py-8 font-sans">
      {/* Esquerda: Nome e Marca */}
      <div className="flex-1 flex justify-start">
        <span>Ryan Ferreira | ViesLab.md</span>
      </div>

      {/* Centro: Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
        <a href="#" className="hover:opacity-60 transition-opacity">
          Trabalhos
        </a>
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
