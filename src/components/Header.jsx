import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${className}`.trim()}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Home">
          <img
              // src="/ara2.png"
              src="/arra12.png"
              alt="Arra & Co"
              className="header__logo-img"
              loading="lazy"
            />
          {/* <span className="header__logo-text">Arra & Co</span> */}
          {/* <span className="header__logo-text">ARRA</span> */}
            <span className="header__logo-img" aria-hidden>
           
            {/* ARRA
               <img
              src="/arra1.png"
              alt="Arra & Co"
              className="header__logo-img"
              loading="lazy"
            /> */}
          </span>
        </Link>
        <nav className="header__links" aria-label="Main navigation">
          <a href="#about" className="header__link">About</a>
          <a href="#services" className="header__link">Services</a>
          <a href="#work" className="header__link">Works</a>
          <Link to="/careers" className="header__link">Careers</Link>
          <Link to="/contacts" className="header__link">Contacts</Link>

          {/* <a href="#careers" className="header__link">Careers</a> */}
          {/* <a href="/contact" className="header__link">Contact</a> */}
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
