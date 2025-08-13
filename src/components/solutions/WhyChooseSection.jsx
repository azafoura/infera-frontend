import React from 'react'
import '../../styles/solutions/WhyChooseSection.css'

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Our AI Automation Solutions</h2>
          <p className="why-choose-subtitle">Proven results that transform how your business operates</p>
        </div>
        
        <div className="why-choose-background">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/XKiS8GawO9.png" 
            alt="Why choose background" 
            className="why-choose-bg"
          />
        </div>
        
        <div className="why-choose-grid">
          <div className="why-choose-card">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/3f8oqf1Vp6.png" 
              alt="Rapid Deployment" 
              className="why-choose-image"
            />
            <h3 className="why-choose-card-title">Rapid Deployment</h3>
          </div>
          
          <div className="why-choose-card">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/6fkDDYxgWj.png" 
              alt="Guaranteed ROI" 
              className="why-choose-image"
            />
            <h3 className="why-choose-card-title">Guaranteed ROI</h3>
          </div>
          
          <div className="why-choose-card">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/8aStE7o12c.png" 
              alt="Seamless Integration" 
              className="why-choose-image"
            />
            <h3 className="why-choose-card-title">Seamless Integration</h3>
          </div>
          
          <div className="why-choose-card">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/OvnsT0jV3p.png" 
              alt="Expert Support" 
              className="why-choose-image"
            />
            <h3 className="why-choose-card-title">Expert Support</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
