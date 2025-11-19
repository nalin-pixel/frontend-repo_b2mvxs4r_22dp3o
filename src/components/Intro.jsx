import { brand } from '../content/vesta'

export default function Intro() {
  return (
    <section className="max-w-4xl mx-auto text-center py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{brand.description}</h2>
    </section>
  )
}
