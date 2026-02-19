import { useState } from 'react'
import './FAQ.css'

const faqItems = [
  {
    id: 1,
    question: 'How long for services?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 2,
    question: 'How long does it take to receive services?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
  },
  {
    id: 3,
    question: 'Do you travel for services?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
  },
  {
    id: 4,
    question: 'Can I request specific services?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
  },
  {
    id: 5,
    question: "What's included in the services?",
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
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
