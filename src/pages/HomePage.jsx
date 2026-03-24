import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Intro2 from '../components/in2'
import Services from '../components/Services'
import ProjectsSlider from '../components/ProjectsSlider'
import WorkArea from '../components/WorkArea'
import StatsMarquee from '../components/StatsMarquee'
import FooterCTA from '../components/FooterCTA'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Careers from '../components/Careers'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro2 />
      <Intro />
      <Services />
      {/* <ProjectsSlider /> */}
      <WorkArea />
      <StatsMarquee />
      <FooterCTA />
      <FAQ />
      {/* <Careers /> */}
      <Footer />
    </main>
  )
}
