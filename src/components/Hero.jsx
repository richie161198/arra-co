import { useState, useEffect } from 'react'
import './Hero.css'

const heroImages = [
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero__bg">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`hero__bg-image ${index === activeIndex ? 'hero__bg-image--active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={index !== activeIndex}
          />
        ))}
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__label">Arra & Co</p>
        <h1 className="hero__title">
          Branding. Communication and
          <br />
          Digital Experiences
        </h1>
        <p className="hero__subtitle">
          All work, all play, everyday. We strategize, design and deliver.
        </p>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-arrow" aria-hidden>↓</span>
      </div>
      <div className="hero__dots" aria-hidden>
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`hero__dot ${index === activeIndex ? 'hero__dot--active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
