import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './StatsMarquee.css';

const companyLogos = [
  { src: '/Cred-Logo.svg', alt: 'CRED' },
  { src: '/flipkart.svg', alt: 'Flipkart' },
  { src: '/Westside.svg', alt: 'Westside' },
  { src: '/Zudio-Logo.svg', alt: 'Zudio' },
  { src: '/Indian-Terrain-Logo.svg', alt: 'Indian Terrain' },
  // { src: '/intellect.svg', alt: 'Intellect' },
  { src: '/Misbu-Logo.svg', alt: 'Misbu' },
  { src: '/palam_silks_logo-1.svg', alt: 'Palam Silks' },
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
        duration: 6,
        ease: 'none',
        repeat: -1,
      }
    );
  }, []);

  const logos = [...companyLogos, ...companyLogos];

  return (
    <section className="stats-marquee" aria-label="Our clients">
      <div className="stats-marquee__header container">
        <h2 className="stats-marquee__title">OUR CLIENTS</h2>
        <p className="stats-marquee__subtitle">TRUSTED BY LEADING BRANDS & CLIENTS</p>
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
