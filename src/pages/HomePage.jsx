import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Services from '../components/Services'
import ProjectsSlider from '../components/ProjectsSlider'
import StatsMarquee from '../components/StatsMarquee'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <ProjectsSlider />
      <StatsMarquee />
      <FAQ />
      <Footer />
    </main>
  )
}
