export default function NavMenu() {
  return (
    <nav className="w-full border-b border-gray-200 bg-[#FCFBF8] text-sm uppercase tracking-widest text-black flex items-stretch h-16 font-sans">
      {/* Esquerda: Linkedin */}
      <div className="flex items-center px-6 border-r border-gray-200 hover:bg-gray-100 transition-colors">
        <a href="#" className="font-semibold text-xs">
          Linkedin
        </a>
      </div>

      {/* Centro/Esquerda: Nome e Marca */}
      <div className="flex items-center px-6 font-semibold flex-1 text-xs">
        <span>Ryan Ferreira | ViesLab.md</span>
      </div>

      {/* Direita: Links */}
      <div className="hidden md:flex items-center divide-x divide-gray-200 border-l border-gray-200 text-xs font-semibold">
        <a href="#" className="px-6 h-full flex items-center hover:bg-gray-100 transition-colors">
          Trabalhos
        </a>
        <a href="#" className="px-6 h-full flex items-center hover:bg-gray-100 transition-colors">
          Sobre
        </a>
        <a href="#" className="px-6 h-full flex items-center hover:bg-gray-100 transition-colors">
          Curriculo
        </a>
        <a href="#" className="px-6 h-full flex items-center hover:bg-gray-100 transition-colors">
          Contato
        </a>
      </div>
    </nav>
  );
}
