import { useEffect, useState } from 'react'
import { heroImages, brand } from '../content/vesta'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden rounded-3xl bg-slate-900">
      {/* Background carousel */}
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Vesta Foss showcase"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full p-8 sm:p-12">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            {brand.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            {brand.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
