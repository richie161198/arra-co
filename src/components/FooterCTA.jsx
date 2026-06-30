import { Link } from 'react-router-dom'
import './FooterCTA.css'

export default function FooterCTA() {
  return (
    <section className="footer-cta" id="contact">
      <div className="container">
        <div className="footer-cta__box">
          <div className="footer-cta__inner">
            <p className="footer-cta__text">Interested in working together?</p>
            <Link to="/contacts" className="footer-cta__link link-underline">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
