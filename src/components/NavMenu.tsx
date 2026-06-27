export default function NavMenu() {
  return (
    <nav className="w-full text-xs font-semibold uppercase tracking-[0.15em] text-black flex items-center justify-between px-10 py-8 font-sans">
      {/* Esquerda: Linkedin e Nome */}
      <div className="flex items-center gap-16">
        <a href="#" className="hover:opacity-60 transition-opacity">
          Linkedin
        </a>
        <span>Ryan Ferreira | ViesLab.md</span>
      </div>

      {/* Direita: Links */}
      <div className="hidden md:flex items-center gap-12">
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
    </nav>
  );
}
