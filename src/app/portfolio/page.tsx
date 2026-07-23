import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Portfólio - Vies',
  description: 'Conheça nossos projetos recentes e casos de sucesso.',
};

const projects = [
  { id: 'memvor', title: 'Memvor', tag: 'Web e UX', img: '/memvor.webp' },
  { id: 'teainter', title: 'Teainter', tag: 'Branding', img: '/teainter.gif' },
  { id: 'korre-club', title: 'Korre Club', tag: 'Branding', img: '/banner-korre-club.png' },
  { id: 'level-up', title: 'Level Up', tag: 'ID Visual', img: '/level-up.webp' },
  { id: 'voxis', title: 'Voxis', tag: 'Produto, UX e Branding', img: '/voxis.png', customClass: 'scale-[1.15]' },
  { id: 'winners', title: 'Winners', tag: 'ID Visual', img: '/winners.png' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-900 pt-32 pb-0">
      <div className="w-full max-w-[1920px] mx-auto">
        
        <AnimatedSection className="mb-12 px-6 md:px-14 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
            Portfólio
          </h1>
        </AnimatedSection>

        {/* Grid de Projetos de 4 em 4 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.1 * (index % 4)}>
              <Link href="/fale-conosco" className="block h-full">
                <div className="group cursor-crosshair relative w-full aspect-square bg-zinc-800 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={`Capa do projeto ${project.title}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.customClass || ''}`}
                  />
                  {/* Overlay gradiente para garantir leitura do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        {project.title}
                      </h3>
                      <span className="text-[#d75310] uppercase text-[10px] md:text-xs tracking-[0.2em] mt-2 font-bold block">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
