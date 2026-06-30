import Marquee from 'react-fast-marquee';
import './StatsMarquee.css';

const companyLogos = [
  // { src: '/clients2/1.png', alt: 'CRED' },
  // { src: '/clients2/2.png', alt: 'QWATI' },
  { src: '/clients2/3.png', alt: 'FAE' },
  { src: '/clients2/4.png', alt: 'SONICUS' },
  { src: '/clients2/5.png', alt: 'STATY' },
  { src: '/clients2/6.png', alt: 'ZANSH' },
  { src: '/clients2/7.png', alt: 'NEXUS' },
  // { src: '/clients2/88.png', alt: 'PRIMO' },
  { src: '/clients2/9.png', alt: 'VELO' },
  { src: '/clients2/10.png', alt: 'AXIS' },
  { src: '/clients2/11.png', alt: 'OMNI' },
  { src: '/clients2/12.png', alt: 'FLUX' },
  { src: '/clients2/13.png', alt: 'CORE' },
  { src: '/clients2/14.png', alt: 'PEAK' },
  { src: '/clients2/19.png', alt: 'ZEN' },
  { src: '/clients2/16.png', alt: 'ZEN' },
  { src: '/clients2/17.png', alt: 'ZEN' },
  { src: '/clients2/18.png', alt: 'ZEN' },
  { src: '/clients2/19.png', alt: 'ZEN' },
  { src: '/clients2/20.png', alt: 'ZEN' },
  { src: '/clients2/212.png', alt: 'ZEN' },
  // { src: '/xracing.svg', alt: 'XRacing' },
];

export default function StatsMarquee() {
  const logos = [...companyLogos];

  return (
    <section className="stats-marquee" aria-label="Our clients">
      <div className="stats-marquee__header container">
        <h2 className="stats-marquee__title">Clients</h2>
        {/* <p className="stats-marquee__subtitle">Let’s grow our business together.</p> */}
      </div>
      <div className="stats-marquee__track-wrap container">
        <Marquee
          className="stats-marquee__track"
          speed={50}
          gradient={false}
          pauseOnHover={false}
          pauseOnClick={false}
          autoFill
          loop={0}
        >
          {logos.map((logo, index) => (
            <div key={`${logo.src}-${index}`} className="stats-marquee__item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="stats-marquee__logo"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
          <div className="stats-marquee__loop-end-spacer" aria-hidden />
        </Marquee>
      </div>
    </section>
  );
}
