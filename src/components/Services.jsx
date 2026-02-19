import './Services.css'

const services = [
  'SEO',
  'SMO',
  'Branding',
  'Graphic Design',
  'Marketing',
  'Content Creation',
  'Web & App Development',
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container services__grid">
        <h2 className="services__heading section-heading">Services</h2>
        <ul className="services__list">
          {services.map((name) => (
            <li key={name}>
              <span className="services__item">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
