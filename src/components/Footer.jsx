import './Footer.css'

const iconSize = 20

function FacebookIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function BehanceIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.346-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.647 1.547 2.43 3.383 2.43 1.806 0 2.878-.908 2.878-2.062 0-1.14-.968-1.782-2.133-2.133l-2.397-.64c-2.417-.658-3.612-2.127-3.612-4.18 0-2.553 2.055-4.42 5.012-4.42 2.953 0 4.965 1.789 5.071 4.526zM15.97 11.18h4.034c-.105-1.547-1.193-2.076-2.12-2.076-1.394 0-2.228.77-2.228 2.002 0 1.129.834 2.074 2.228 2.074.927 0 1.771-.462 2.025-1.378zm-12.172-.035h-2.02V20H1.79V7.145h2.02v.035zm0 2.675h-.041c-.671-.785-1.578-1.168-2.531-1.168-2.028 0-3.312 1.493-3.312 3.646 0 2.167 1.312 3.646 3.253 3.646 1.118 0 1.977-.453 2.597-1.193.13-.18.26-.361.361-.542v.737h2.02V7.145zm-2.008 5.237c.67 0 1.293-.271 1.669-.785.361-.514.602-1.168.602-1.893 0-.737-.241-1.392-.602-1.907-.376-.514-1-.785-1.669-.785-.67 0-1.293.271-1.669.785-.361.515-.602 1.17-.602 1.907 0 .725.241 1.379.602 1.893.376.514 1 .785 1.669.785z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          {/* <h3 className="footer__heading">Sitemap</h3>
          <nav className="footer__links">
            <a href="#work">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </nav> */}

        <h2 className="stats-marquee__title">Arra & co.</h2>
        <p className="stats-marquee__subtitle">TRUSTED BY LEADING BRANDS & CLIENTS</p>
        </div>
        <div className="footer__col">
          {/* <h3 className="footer__heading">Legal</h3>
          <nav className="footer__links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </nav> */}
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__address">
           T.nagar, Chennai, Tamil Nadu
          </p>
          <p className="footer__contact">
            <a href="tel:+19195551234">+91 9879956777</a>
            <br />
            <a href="mailto:support@arraandco.in">support@arraandco.in</a>
          </p>
        </div>
      </div>
      <div className="footer__bottom container">
        <p className="footer__copyright">
          © {currentYear} Arra & Co, LLC. All Rights Reserved.
        </p>
        <nav className="footer__socials" aria-label="Social media">
          <a href="#" className="footer__social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="#" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="#" className="footer__social" aria-label="X" target="_blank" rel="noopener noreferrer">
            <XIcon />
          </a>
          {/* <a href="#" className="footer__social" aria-label="Behance" target="_blank" rel="noopener noreferrer">
            <BehanceIcon />
          </a> */}
          <a href="#" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="#" className="footer__social" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
        </nav>
      </div>
    </footer>
  )
}
