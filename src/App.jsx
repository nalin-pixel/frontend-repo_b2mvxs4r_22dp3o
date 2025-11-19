import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Sections from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12 sm:space-y-16">
        <Hero />
        <Intro />
        <Gallery />
        <Sections />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vesta Foss
      </footer>
    </div>
  )
}

export default App
