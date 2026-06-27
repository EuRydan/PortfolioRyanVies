export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black font-sans">
      <h1 className="text-2xl font-semibold mb-6">Site em produção, aguarde...</h1>
      <a 
        href="https://instagram.com/vieslab.md" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
      >
        Siga-nos @vieslab.md
      </a>
    </div>
  );
}
