import { cta } from '../content/vesta'

export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-slate-50 to-white p-10">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{cta.heading}</h3>
          <p className="mt-3 text-slate-600">{cta.subheading}</p>
          <a
            href="mailto:hello@vestafoss.com?subject=Preview%20Redesign%20Request"
            className="inline-flex items-center justify-center rounded-full mt-6 px-6 py-3 bg-black text-white hover:bg-slate-900 transition-colors"
          >
            {cta.action}
          </a>
        </div>
      </div>
    </section>
  )
}
