import './FeaturedWork.css'

const projects = [
  {
    id: 1,
    title: 'Arra & Co | Food',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
    category: 'Food',
  },
  {
    id: 2,
    title: 'The Currency Chain | Energy',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80',
    category: 'Energy',
  },
  {
    id: 3,
    title: 'Arra & Co | Brand | Studio',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80',
    category: 'Brand',
  },
  {
    id: 4,
    title: 'Arra & Co | Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    category: 'Digital',
  },
  {
    id: 5,
    title: 'Arra & Co | Product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    category: 'Product',
  },
  {
    id: 6,
    title: 'Arra & Co | Installation',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    category: 'Installation',
  },
]

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="work">
      <div className="container">
        <h2 className="featured-work__heading section-heading">Featured work</h2>
        <p className="featured-work__intro">
          A selection of recent projects across branding, digital, and experience design.
        </p>
        <div className="featured-work__grid">
          {projects.map((project) => (
            <a key={project.id} href="#" className="featured-work__card">
              <div className="featured-work__image-wrap">
                <img
                  src={project.image}
                  alt=""
                  className="featured-work__image"
                  loading="lazy"
                />
              </div>
              <p className="featured-work__title">{project.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
