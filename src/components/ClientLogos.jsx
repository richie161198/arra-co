import './ClientLogos.css'

const clients = [
  'CRED', 'QWATI', 'FAE', 'SONICUS', 'STATY',
  'ZANSH', 'NEXUS', 'PRIMO', 'VELO', 'AXIS',
  'OMNI', 'FLUX', 'CORE', 'PEAK', 'ZEN',
]

export default function ClientLogos() {
  return (
    <section className="client-logos">
      <div className="container">
        <div className="client-logos__grid">
          {clients.map((name) => (
            <div key={name} className="client-logos__item">
              <span className="client-logos__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
