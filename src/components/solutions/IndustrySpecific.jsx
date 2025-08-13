import React from 'react'
import '../../styles/solutions/IndustrySpecific.css'

const IndustrySpecific = () => {
  return (
    <section className="industry-specific">
      <div className="industry-container">
        <div className="industry-header">
          <h2 className="industry-title">
            Industry-Specific <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="industry-description">
            Tailored AI implementations designed for the unique challenges and compliance
            requirements of your industry
          </p>
        </div>
        
        <div className="industry-background">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/wNH0YUcRZd.png" 
            alt="Industry background" 
            className="industry-bg-image"
          />
        </div>
        
        <div className="industry-cards">
          <div className="industry-card">
            <h3 className="industry-card-title">Manufacturing</h3>
            <p className="industry-card-subtitle">
              Smart factory solutions for predictive maintenance and quality optimization
            </p>
            
            <div className="industry-features">
              <p>Predictive maintenance</p>
              <p>Quality control automation</p>
              <p>Supply chain optimization</p>
            </div>
            
            <div className="industry-results">
              50% less downtime, 35% efficiency gain
            </div>
          </div>
          
          <div className="industry-card">
            <h3 className="industry-card-title">Retail & E-commerce</h3>
            <p className="industry-card-subtitle">
              Personalized customer experiences and intelligent inventory management
            </p>
            
            <div className="industry-features">
              <p>Personalized recommendations</p>
              <p>Dynamic pricing optimization</p>
              <p>Demand forecasting</p>
            </div>
            
            <div className="industry-results">
              25% revenue increase, 40% inventory optimization
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySpecific
