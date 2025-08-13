import React from 'react'
import '../../styles/home/ProcessSection.css'

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Your Automation Journey in 3 Simple Steps</h2>
        
        <div className="process-content">
          <div className="process-image">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/8UocqJEPRN.png" 
              alt="Process visualization" 
              className="process-bg-image"
            />
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Q3HRWNEhCH.png" 
                  alt="Step 1" 
                  className="step-icon-image"
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Free Automation Assessment</h3>
                <div className="step-description">
                  <p>Process audit & mapping</p>
                  <p>ROI calculation & timeline</p>
                  <p>Custom automation strategy</p>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/VGPHx7KeQv.png" 
                  alt="Step 2" 
                  className="step-icon-image"
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Rapid Development & Testing</h3>
                <div className="step-description">
                  <p>Custom automation development</p>
                  <p>Integration with existing systems</p>
                  <p>Pilot testing & optimization</p>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/uf1g48qFrX.png" 
                  alt="Step 3" 
                  className="step-icon-image"
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">Launch & Continuous Optimization</h3>
                <div className="step-description">
                  <p>Production deployment</p>
                  <p>Team training & handover</p>
                  <p>24/7 monitoring & support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
