import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import SolutionsSection from '../components/home/SolutionsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ProcessSection from '../components/home/ProcessSection'
import ROICalculator from '../components/home/ROICalculator'

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <main>
        <HeroSection />
        <ROICalculator />
        <StatsSection />
        <SolutionsSection />
        <TestimonialsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
