import { useState } from 'react'
import Footer from '../components/Footer'
import './Careers.css'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', role: '', message: '' })
  }

  return (
    <>
      <main className="careers">
        <section className="careers__hero">
          <div className="container">
            <p className="careers__label">Careers</p>
            <h1 className="careers__title">Join our team</h1>
            <p className="careers__subtitle">
              We're always looking for curious minds and creative problem-solvers.
              Share your details below and we'll get back to you.
            </p>
          </div>
        </section>

        <section className="careers__content">
          <div className="container">
            {submitted ? (
              <div className="careers__success">
                <p className="careers__success-title">Thank you</p>
                <p className="careers__success-text">
                  We've received your details and will be in touch soon.
                </p>
              </div>
            ) : (
              <form className="careers__form" onSubmit={handleSubmit}>
                <h2 className="careers__heading">Get in touch</h2>
                <div className="careers__form-grid">
                  <label className="careers__label-field">
                    <span className="careers__field-label">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                      required
                    />
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                      required
                    />
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                    />
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Role of interest</span>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                    />
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Current Role</span>
                    <input
                      type="text"
                      name="current_role"
                      value={formData.current_role}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                    />
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Years of Experience</span>
                    <input
                      type="text"
                      name="years_of_experience"
                      value={formData.years_of_experience}
                      onChange={handleChange}
                      className="careers__input"
                      placeholder=""
                    />
                  </label>
                </div>
                <label className="careers__label-field careers__label-field--full">
                  <span className="careers__field-label">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="careers__input careers__textarea"
                    placeholder="Tell us a bit about yourself and why you'd like to join."
                    rows={5}
                  />
                </label>
                <button type="submit" className="careers__submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
