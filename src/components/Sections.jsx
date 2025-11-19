import { sections } from '../content/vesta'

export default function Sections() {
  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
