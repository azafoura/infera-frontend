import React from 'react'
import '../../styles/about/AboutHero.css'

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            A Rising Star in <span className="gradient-text">Business Automation</span>
          </h1>
          
          <p className="about-hero-description">
            Founded by automation experts, Infera AI transforms enterprises through intelligent 
            automation solutions that eliminate manual work and accelerate business operations.
          </p>
        </div>
        
        <div className="about-hero-image">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/hFk6nzQvUH.png" 
            alt="Business automation visualization" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutHero
