import { useState } from 'react'
import './FAQ.css'

const faqItems = [
  {
    id: 1,
    question: 'How do you understand our brand before starting?',
    answer: "Mention discovery calls, research, and collaboration.",
  },
  {
    id: 2,
    question: 'What digital marketing services do you offer?',
    answer: 'SEO, social media, ads, content creation. this is your space to shine.',
  },
  {
    id: 3,
    question: 'What does your process look like?',
    answer: 'Understand → Plan → Execute → Optimize → Support',
  },
  {
    id: 4,
    question: 'How do you measure success?',
    answer: 'Leads, conversions, ROI not just likes/followers.',
  },
  {
    id: 5,
    question: "How often will we communicate?",
    answer: 'Weekly updates, easy access, no ghosting.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="faq" id="faq">
      <div className="faq__inner container">
        <h2 className="faq__title">FAQ</h2>
        <p className="faq__subtitle">
          Everything you need to know about our studio
        </p>

        <ul className="faq__list">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <li key={item.id} className="faq__item">
                <button
                  type="button"
                  className="faq__question-wrap"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="faq__question">{item.question}</span>
                  <span className="faq__toggle" aria-hidden>
                    {isOpen ? 'LESS —' : 'MORE +'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  aria-hidden={!isOpen}
                  className={`faq__answer-wrap ${isOpen ? 'faq__answer-wrap--open' : ''}`}
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
                <div className="faq__separator" aria-hidden />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
