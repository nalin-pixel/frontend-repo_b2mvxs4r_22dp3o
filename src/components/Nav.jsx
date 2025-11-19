export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-medium tracking-tight">Vesta Foss</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#work" className="hover:text-black">Work</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  )
}
