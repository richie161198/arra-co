import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          src="/work-area/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__label">Arra & Co</p>
        <h1 className="hero__title">
        Every click counts 
          <br />
          
        </h1>
        {/* <p className="hero__subtitle">
          All work, all play, everyday. We strategize, design and deliver.
        </p> */}
      </div>
      {/* <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-arrow" aria-hidden>↓</span>
      </div> */}
    </section>
  )
}
