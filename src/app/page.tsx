export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 font-sans">
      <div className="text-6xl md:text-9xl font-bold flex flex-col items-center justify-center text-center tracking-tight">
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
  );
}
