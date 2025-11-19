import { galleryImages } from '../content/vesta'

export default function Gallery() {
  return (
    <section id="work" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((src, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl bg-slate-100">
              <img
                src={src}
                alt={`Vesta work ${i + 1}`}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
