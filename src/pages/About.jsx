import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import VisionSection from '../components/about/VisionSection'
import LeadershipSection from '../components/about/LeadershipSection'
import GlobalPresence from '../components/about/GlobalPresence'

const About = () => {
  return (
    <div className="about-page">
      <Navigation />
      <main>
        <AboutHero />
        <VisionSection />
        <LeadershipSection /><GlobalPresence />
      </main>
      <Footer />
    </div>
  )
}

export default About
