const works = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Projeto ${String(i + 1).padStart(2, "0")}`,
}));

function ArrowUpRight() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 ease-out group-hover:scale-[1.6] origin-center"
    >
      <line x1="1.5" y1="11.5" x2="11.5" y2="1.5" />
      <polyline points="4.5,1.5 11.5,1.5 11.5,8.5" />
    </svg>
  );
}

function WorkBlock({ name }: { name: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/2] w-full bg-black/[0.04] border border-black/[0.08] transition-colors duration-300 group-hover:bg-black/[0.07]" />
      <div className="flex items-center justify-between mt-3 px-px">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-black/70">
          {name}
        </span>
        <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.12em] text-black/50 group-hover:text-black/80 transition-colors duration-300">
          <span>(preview)</span>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default function WorksSection() {
  return (
    <section className="relative z-10 bg-[#fff5e7] px-10 pt-24 pb-40">
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.15em]">Trabalhos</span>
        <span className="text-[0.6rem] uppercase tracking-[0.12em] text-black/40">
          {works.length} projetos
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-16">
        {works.map((work) => (
          <WorkBlock key={work.id} name={work.name} />
        ))}
      </div>
    </section>
  );
}
