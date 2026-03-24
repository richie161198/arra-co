import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Careers from './pages/Careers'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const showHeader = location.pathname !== '/careers'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {showHeader && <Header className={scrolled ? 'scrolled' : ''} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  )
}
