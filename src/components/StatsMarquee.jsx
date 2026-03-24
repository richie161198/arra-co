import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './StatsMarquee.css';

const companyLogos = [
  { src: '/clients/i1.png', alt: 'CRED' },
  { src: '/clients/i2.png', alt: 'QWATI' },
  { src: '/clients/i3.png', alt: 'FAE' },
  { src: '/clients/i4.png', alt: 'SONICUS' },
  { src: '/clients/i5.png', alt: 'STATY' },
  { src: '/clients/i6.png', alt: 'ZANSH' },
  { src: '/clients/i7.png', alt: 'NEXUS' },
  { src: '/clients/i8.png', alt: 'PRIMO' },
  { src: '/clients/i9.png', alt: 'VELO' },
  { src: '/clients/i10.png', alt: 'AXIS' },
  { src: '/clients/i11.png', alt: 'OMNI' },
  { src: '/clients/i12.png', alt: 'FLUX' },
  { src: '/clients/i13.png', alt: 'CORE' },
  { src: '/clients/i14.png', alt: 'PEAK' },
  { src: '/clients/i15.png', alt: 'ZEN' },
  // { src: '/xracing.svg', alt: 'XRacing' },
];

export default function StatsMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const track = marqueeRef.current;
    const width = track.scrollWidth / 2; // one full set of logos
    const startX = -width / 2; // start mid-way so not from "logo one"
    gsap.set(track, { x: startX });
    gsap.fromTo(
      track,
      { x: startX },
      {
        x: startX - width,
        duration: 15,
        ease: 'none',
        repeat: -1,
      }
    );
  }, []);

  const logos = [...companyLogos, ...companyLogos];

  return (
    <section className="stats-marquee" aria-label="Our clients">
      <div className="stats-marquee__header container">
        <h2 className="stats-marquee__title">CLIENTS</h2>
        <p className="stats-marquee__subtitle">Let’s grow our business together.</p>
      </div>
      <div className="stats-marquee__track-wrap">
        <div className="stats-marquee__track" ref={marqueeRef}>
          {logos.map((logo, index) => (
            <div key={index} className="stats-marquee__item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="stats-marquee__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
