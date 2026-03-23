import './Services.css'

const services = [
  'SEO',
  'SMO',
  'Branding',
  'Graphic Design',
  'Content Creation',
  'Web & App Development',
]
// SEO  SMO  Branding  Graphic Designing  Content creation  Web & App development
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container services__grid">
        <h2 className="services__heading ">Services</h2>
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
