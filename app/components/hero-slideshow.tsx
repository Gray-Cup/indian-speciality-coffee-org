'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { ReactNode } from 'react'

const a = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/90">
    {text}
  </a>
)

const slides: { src: string; alt: string; caption?: ReactNode }[] = [
  { src: '/aakash-goel.jpg', alt: 'Slide 2',
    caption: <>Photo by {a('https://unsplash.com/@notsoaakash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Aakash Goel')} on {a('https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-store-x3fK2ipzIX0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Unsplash')}</>
 },
  { src: '/baarbara-estate.jpg', alt: 'Slide 3',
    caption: <>Photo by {a('https://www.baarbaracoffee.com', 'Baarbara Estate')}</>
  },
  {
    src: '/attikan-estate.webp',
    alt: 'Slide 4',
    caption: <>Photo of {a('https://unsplash.com/@manofmysore1', 'Attikan Estate')} by {a('https://bluetokaicoffee.com/products/attikan-estate', 'Blue Tokai')}</>,
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 100)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    if (index === current) return
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 100)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <div className="relative w-full h-[60vh] bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Left chevron */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right chevron */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Caption */}
      {slides[current].caption && (
        <p className="absolute bottom-5 bg-neutral-950/80 right-4 text-white text-xs">
          {slides[current].caption}
        </p>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
