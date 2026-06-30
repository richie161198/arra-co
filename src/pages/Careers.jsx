import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Careers.css'

const HR_EMAIL = 'hr@arraandco.in'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  currentRole: '',
  yearsOfExperience: '',
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

  const role = data.role.trim()
  if (!role) errors.role = 'Role of interest is required'
  else if (role.length < 2) errors.role = 'Role must be at least 2 characters'

  const currentRole = data.currentRole.trim()
  if (!currentRole) errors.currentRole = 'Current role is required'
  else if (currentRole.length < 2) errors.currentRole = 'Current role must be at least 2 characters'

  if (!data.yearsOfExperience) {
    errors.yearsOfExperience = 'Years of experience is required'
  } else if (!/^\d+$/.test(data.yearsOfExperience)) {
    errors.yearsOfExperience = 'Enter numbers only'
  } else if (Number(data.yearsOfExperience) > 60) {
    errors.yearsOfExperience = 'Enter a valid number of years (0–60)'
  }

  const message = data.message.trim()
  if (!message) errors.message = 'Message is required'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters'

  return errors
}

function inputClass(hasError) {
  return hasError ? 'careers__input careers__input--error' : 'careers__input'
}

export default function Careers() {
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
    } else if (name === 'yearsOfExperience') {
      nextValue = value.replace(/\D/g, '').slice(0, 2)
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
      const response = await fetch(`https://formsubmit.co/ajax/${HR_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Careers application — ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          roleOfInterest: formData.role.trim(),
          currentRole: formData.currentRole.trim(),
          yearsOfExperience: formData.yearsOfExperience,
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
      setError(`Could not send your application. Please email ${HR_EMAIL} directly.`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* <main className="careers" id='careers'> */}
        {/* <section className="careers__hero">
          <div className="container">
            <h1 className="careers__title">Join our team</h1>
            <p className="careers__subtitle">
              We're always looking for curious minds and creative problem-solvers.
              Share your details below and we'll get back to you.
            </p>
          </div>
        </section> */}

      <section className="careers__content" id='careers'>
        
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
            <h1 className="careers__title">Join our team</h1>
             <p className="careers__subtitle">
              We're always looking for curious minds and creative problem-solvers.
              Share your details below and we'll get back to you.
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
                  <label className="careers__label-field">
                    <span className="careers__field-label">Role of interest</span>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={inputClass(fieldErrors.role)}
                      placeholder=""
                    />
                    {fieldErrors.role && (
                      <span className="careers__field-error">{fieldErrors.role}</span>
                    )}
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Current Role</span>
                    <input
                      type="text"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleChange}
                      className={inputClass(fieldErrors.currentRole)}
                      placeholder=""
                    />
                    {fieldErrors.currentRole && (
                      <span className="careers__field-error">{fieldErrors.currentRole}</span>
                    )}
                  </label>
                  <label className="careers__label-field">
                    <span className="careers__field-label">Years of Experience</span>
                    <input
                      type="text"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      className={inputClass(fieldErrors.yearsOfExperience)}
                      placeholder=""
                      inputMode="numeric"
                      maxLength={2}
                    />
                    {fieldErrors.yearsOfExperience && (
                      <span className="careers__field-error">{fieldErrors.yearsOfExperience}</span>
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
                    placeholder="Tell us a bit about yourself and why you'd like to join."
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
      {/* </main> */}
    </>
  )
}
