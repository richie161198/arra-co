import { useState } from 'react';
import { motion } from 'framer-motion';
import './WorkArea.css';

const workColumns = [
  {
    id: 1,
    // image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    // imageHover: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80',
    image: '/work-area/11.jpg',
    imageHover: '/work-area/32.jpg',
    video: '/work-area/v1.mp4',
    videoHover: '/work-area/v1-hover.mp4',
  },
  {
    id: 2,
    image: '/work-area/22.jpg',
    imageHover: '/work-area/21.jpg',
    video: '/work-area/v2.mp4',
    videoHover: '/work-area/v2-hover.mp4',
  },
  {
    id: 3,
    image: '/work-area/12.jpg',
    imageHover: '/work-area/31.jpg',
    video: '/work-area/v3.mp4',
    videoHover: '/work-area/v3-hover.mp4',
  },
];

export default function WorkArea() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <section className="work-area" aria-labelledby="work-area-heading" id='work'>
      <div className="work-area__inner container">
        <motion.h2
          id="work-area-heading"
          className="work-area__title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          Works
        </motion.h2>

        <div className="work-area__grid">
          {workColumns.map((col, index) => {
            const imageActive = hoveredImageIndex === index;
            return (
              <article key={col.id} className="work-area__column">
                <div
                  className="work-area__image-zone"
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                >
                  <div className="work-area__media work-area__media--image">
                    <img
                      src={col.image}
                      alt=""
                      className="work-area__img work-area__img--base"
                      aria-hidden={imageActive}
                      style={{ opacity: imageActive ? 0 : 1 }}
                    />
                    <img
                      src={col.imageHover}
                      alt=""
                      className="work-area__img work-area__img--hover"
                      aria-hidden={!imageActive}
                      style={{ opacity: imageActive ? 1 : 0 }}
                    />
                  </div>
                </div>

                <div className="work-area__video-zone">
                  <div className="work-area__media work-area__media--video">
                    <video
                      className="work-area__video"
                      src={col.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
