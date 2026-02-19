import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${className}`.trim()}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Home">
          <span className="header__logo-icon" aria-hidden>
            <img
              src="/arra.png"
              alt="Arra & Co"
              className="header__logo-img"
              loading="lazy"
            />
          </span>
          {/* <span className="header__logo-text">Arra & Co</span> */}
        </Link>
        <nav className="header__links" aria-label="Main navigation">
          <Link to="/" className="header__link">Home</Link>
          <a href="/#services" className="header__link">Services</a>
          <a href="/#work" className="header__link">Work</a>
          <a href="/#faq" className="header__link">FAQ</a>
          <Link to="/careers" className="header__link">Careers</Link>
        </nav>
        {/* <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__menu-line" />
          <span className="header__menu-line" />
          <span className="header__menu-line" />
        </button> */}
      </div>
    
    </header>
  )
}
