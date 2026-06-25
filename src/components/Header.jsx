import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'work', href: 'work', type: 'section' },
  { label: 'services', href: 'services', type: 'section' },
  { label: 'about', href: 'about', type: 'section' },
  { label: 'careers', to: '/careers', type: 'route' },
  { label: 'contact', to: '/contacts', type: 'route' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1J3d7HYRQP/?mibextid=wwXIfr',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arrachennai?igsh=aDdpamx0ZmZiZmYw',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arraandco',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/9003387933',
  },
]

export default function Header({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  const sectionHref = (id) => (location.pathname === '/' ? `#${id}` : `/#${id}`)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`header ${className}`.trim()}>
        <div className="header__inner container">
          <Link to="/" className="header__logo" aria-label="Home">
            <img
              src="/arra12.png"
              alt="Arra & Co"
              className="header__logo-img"
              loading="lazy"
            />
          </Link>

          <nav className="header__links" aria-label="Main navigation">
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link key={item.label} to={item.to} className="header__link">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={sectionHref(item.href)} className="header__link">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="header__menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="header-drawer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </button>
        </div>
      </header>

      <div
        className={`header-drawer-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="header-drawer"
        className={`header-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <div className="header-drawer__top container">
          <Link to="/" className="header__logo" aria-label="Home" onClick={closeMenu}>
            <img
              src="/arra12.png"
              alt="Arra & Co"
              className="header__logo-img header__logo-img--drawer"
              loading="lazy"
            />
          </Link>
          <button
            type="button"
            className="header-drawer__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="header-drawer__nav container">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.to}
                className="header-drawer__link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={sectionHref(item.href)}
                className="header-drawer__link"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="header-drawer__footer container">
          <nav className="header-drawer__socials" aria-label="Social media">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="header-drawer__social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="header-drawer__copyright">
            Copyright {currentYear} © Arra & Co
          </p>
        </div>
      </aside>
    </>
  )
}
