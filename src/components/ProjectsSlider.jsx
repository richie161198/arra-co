import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsSlider.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'the branding people',
    subtitle: 'For brands, by people.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 2,
    title: 'Pando',
    subtitle: 'Japanese pop, modular design, bold flavour.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 3,
    title: 'Hilton',
    subtitle: 'Global clarity meets everyday balance.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    id: 4,
    title: 'Archive',
    subtitle: 'Crafting timeless visual systems.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  },
  {
    id: 5,
    title: 'Pearly',
    subtitle: 'Minimal identity, maximum impact.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
  },
];

const reels = [
  {
    id: 1,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 2,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 3,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 4,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 5,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
];

export default function ProjectsSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const videoTrackRef = useRef(null);
  const videoCardsRef = useRef([]);

  useEffect(() => {
    if (!trackRef.current || !videoTrackRef.current) return;

    // Wait for videos to load and DOM to be ready
    const initAnimations = () => {
      const track = trackRef.current;
      const cards = cardsRef.current.filter(Boolean);
      
      if (cards.length === 0) return;
      
      const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 24, 0) - 24;

      const videoTrack = videoTrackRef.current;
      const videoCards = videoCardsRef.current.filter(Boolean);
      
      // Ensure we have video cards before calculating width
      if (videoCards.length === 0) {
        // Retry after a short delay if videos aren't ready
        setTimeout(initAnimations, 100);
        return;
      }
      
      // Calculate total width of all video cards (same as image slider)
      const videoTotalWidth = videoCards.reduce((acc, card) => {
        if (card && card.offsetWidth) {
          return acc + card.offsetWidth + 24;
        }
        return acc;
      }, 0) - 24;

      // Create separate scroll triggers for each slider
      const imageScrollTrigger = {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      };

      const videoScrollTrigger = {
        trigger: sectionRef.current,
        start: 'top bottom', // Start when top of section hits bottom of viewport
        end: 'bottom top', // End when bottom of section hits top of viewport
        scrub: 1,
        invalidateOnRefresh: true,
      };

      // Image slider moves right to left (negative)
      // Set initial position explicitly
      gsap.set(track, { x: 0 });
      gsap.to(track, {
        x: -totalWidth / 2,
        ease: 'none',
        scrollTrigger: imageScrollTrigger,
      });

      // Video slider moves left to right (opposite direction)
      // Start offset to the left so it enters from right as user scrolls
      gsap.set(videoTrack, { x: -videoTotalWidth / 2 });
      gsap.to(videoTrack, {
        x: 0,
        ease: 'none',
        scrollTrigger: videoScrollTrigger,
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    };

    // Wait for next frame and then initialize
    requestAnimationFrame(() => {
      setTimeout(initAnimations, 200);
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="projects-slider">
      <div className="projects-slider__header">
        <motion.h2
          className="projects-slider__title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Explore our works 
        </motion.h2>
        <motion.a
          href="#contact"
          className="projects-slider__link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
         
        </motion.a>
      </div>

      <div className="projects-slider__track-wrap">
        <div ref={trackRef} className="projects-slider__track">
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="projects-slider__card"
              ref={(el) => (cardsRef.current[index] = el)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="projects-slider__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects-slider__image"
                />
              </div>
              <h3 className="projects-slider__card-title">{project.title}</h3>
              <p className="projects-slider__card-subtitle">{project.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="projects-slider__video-track-wrap">
        <div ref={videoTrackRef} className="projects-slider__video-track">
          {[...reels, ...reels].map((reel, index) => (
            <motion.div
              key={`reel-${reel.id}-${index}`}
              className="projects-slider__video-card"
              ref={(el) => {
                if (el) {
                  videoCardsRef.current[index] = el;
                }
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="projects-slider__video-wrap">
                <video
                  src={reel.video}
                  className="projects-slider__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={() => {
                    // Refresh ScrollTrigger when videos load
                    setTimeout(() => {
                      ScrollTrigger.refresh();
                    }, 100);
                  }}
                  onError={(e) => {
                    console.error('Video failed to load:', reel.video);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
