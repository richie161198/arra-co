import { useState } from 'react'
import { Link } from 'react-router-dom'
import './contacts.css'

const CONTACT_EMAIL = 'info@arraandco.in'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_PATTERN = /^[a-zA-Z\s.'-]+$/

function validateForm(data) {
  const errors = {}

  const name = data.name.trim()
  if (!name) errors.name = 'Name is required'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters'
  else if (!NAME_PATTERN.test(name)) errors.name = 'Name can only contain letters'

  const email = data.email.trim()
  if (!email) errors.email = 'Email is required'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address'

  if (!data.phone) errors.phone = 'Phone is required'
  else if (!/^\d{10}$/.test(data.phone)) errors.phone = 'Phone must be exactly 10 digits'

  const message = data.message.trim()
  if (!message) errors.message = 'Message is required'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters'

  return errors
}

function inputClass(hasError) {
  return hasError ? 'careers__input careers__input--error' : 'careers__input'
}

export default function Contacts() {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    let nextValue = value

    if (name === 'phone') {
      nextValue = value.replace(/\D/g, '').slice(0, 10)
    }

    setFormData((prev) => ({ ...prev, [name]: nextValue }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Business enquiry — ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          message: formData.message.trim(),
        }),
      })

      const result = await response.json()
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Submit failed')
      }

      setSubmitted(true)
      setFormData(emptyForm)
    } catch {
      setError(`Could not send your enquiry. Please email ${CONTACT_EMAIL} directly.`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="careers__content" id="contact">
      <div className="container">
        {submitted ? (
          <div className="careers__success">
            <p className="careers__success-title">Thank you</p>
            <p className="careers__success-text">
              We've received your details and will be in touch soon.
            </p>
            <Link to="/" className="careers__success-home">
              Back to home
            </Link>
          </div>
        ) : (
          <form className="careers__form" onSubmit={handleSubmit}>
            <h1 className="careers__title">Business Enquiries</h1>
            <p className="careers__subtitle">
              Looking to grow your business online?
              Let's talk about how we can help you.
            </p>
            <div className="careers__form-grid">
              <label className="careers__label-field">
                <span className="careers__field-label">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass(fieldErrors.name)}
                  placeholder=""
                  autoComplete="name"
                />
                {fieldErrors.name && (
                  <span className="careers__field-error">{fieldErrors.name}</span>
                )}
              </label>
              <label className="careers__label-field">
                <span className="careers__field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass(fieldErrors.email)}
                  placeholder=""
                  autoComplete="email"
                />
                {fieldErrors.email && (
                  <span className="careers__field-error">{fieldErrors.email}</span>
                )}
              </label>
              <label className="careers__label-field">
                <span className="careers__field-label">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass(fieldErrors.phone)}
                  placeholder="mobile number"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                />
                {fieldErrors.phone && (
                  <span className="careers__field-error">{fieldErrors.phone}</span>
                )}
              </label>
            </div>
            <label className="careers__label-field careers__label-field--full">
              <span className="careers__field-label">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass(fieldErrors.message)} careers__textarea`}
                placeholder="Tell us about your business and how we can help."
                rows={5}
              />
              {fieldErrors.message && (
                <span className="careers__field-error">{fieldErrors.message}</span>
              )}
            </label>
            {error && <p className="careers__error">{error}</p>}
            <button type="submit" className="careers__submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
