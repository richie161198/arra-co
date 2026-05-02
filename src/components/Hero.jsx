import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          src="/work-area/Hq.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__label">Arra & Co</p>
        
           {/* <img
              src="/arra1.png"
              alt="Arra & Co"
              className="header__logo-img"
              loading="lazy"
            /> */}
        <span className="hero__title">Every click counts</span>
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
