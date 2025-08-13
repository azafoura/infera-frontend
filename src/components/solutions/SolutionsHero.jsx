import React from 'react'
import '../../styles/solutions/SolutionsHero.css'

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <div className="solutions-hero-background">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/FhxDeWMOxY.png" 
          alt="Solutions background" 
          className="solutions-hero-bg"
        />
        <div className="hero-accent-circle"></div>
      </div>
      
      <div className="solutions-hero-container">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">
            Complete <span className="gradient-text">AI Automation</span> Solutions Portfolio
          </h1>
          
          <p className="solutions-hero-description">
            Transform your enterprise operations with our comprehensive automation solutions 
            from workflow automation to document processing and customer service automation.
          </p>
          
          <div className="solutions-hero-tags">
            <span className="solution-tag">Workflow Automation</span>
            <span className="solution-tag">Document Processing</span>
            <span className="solution-tag">Customer Service</span>
            <span className="solution-tag">Sales Process</span>
          </div>
          
          <button className="green-button solutions-hero-cta">
            free automation assessment
          </button>
        </div>
      </div>
    </section>
  )
}

export default SolutionsHero
