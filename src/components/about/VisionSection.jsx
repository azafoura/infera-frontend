import React from 'react'
import '../../styles/about/VisionSection.css'

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="vision-background">
        <div className="vision-accent-shape"></div>
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/0nc0kKOwN8.png" 
          alt="Vision background" 
          className="vision-bg-image"
        />
      </div>
      
      <div className="vision-container">
        <h2 className="vision-title">Our Automation-First Vision</h2>
        
        <blockquote className="vision-quote">
          "We founded Infera AI with a clear mission: eliminate repetitive work so businesses 
          can focus on what truly matters - innovation, growth, and customer success."
        </blockquote>
        
        <div className="vision-story">
          <p>
            In 2025, our founding team recognized that while AI technology was advancing rapidly, 
            most businesses struggled to implement practical automation solutions that delivered real ROI. 
            Traditional consulting approaches were too slow and expensive for fast-moving companies.
          </p>
          <p>
            Our breakthrough came from developing rapid deployment methodologies that could transform 
            business operations in weeks, not months. By focusing on high-impact, low-complexity 
            automations first, we consistently deliver results that justify expansion.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
