import React from 'react'
import '../../styles/home/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/UYXCZ2eMpx.png" 
          alt="Background decoration" 
          className="hero-bg-left"
        />
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/2AzvXCxcx5.png" 
          alt="Background decoration" 
          className="hero-bg-right"
        />
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Scale Your Business with <span className="gradient-text">AI Automation</span> That Actually Works
          </h1>
          
          <p className="hero-description">
            Transform your operations with intelligent automation that eliminates manual tasks, 
            accelerates workflows, and delivers measurable ROI.
          </p>
          
          <button className="gradient-button hero-cta">
            free automation assessment
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
