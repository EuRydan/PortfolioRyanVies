export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 font-sans">
      <div className="text-4xl md:text-7xl font-bold flex flex-col items-center gap-4 text-center">
        <span>We do</span>
        <div className="h-[1.2em] overflow-hidden text-black/70">
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
  );
}
