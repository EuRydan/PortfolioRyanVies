import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      {/* Hero — sticky, fica atrás enquanto Works sobe sobre ele */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center font-sans z-0">
        <div className="hero-parallax text-6xl md:text-9xl font-bold flex flex-col items-center justify-center text-center tracking-tight">
          <div className="h-[1.2em] overflow-hidden text-black/90">
            <ul className="animate-roll flex flex-col leading-[1.2em]">
              <li>/Design</li>
              <li>/Branding</li>
              <li>/Ux</li>
              <li>/Web</li>
              <li>/Dev</li>
              <li aria-hidden="true">/Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Works — desliza sobre a hero com fundo sólido */}
      <WorksSection />
    </>
  );
}
