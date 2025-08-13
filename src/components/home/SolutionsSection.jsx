import React from 'react'
import '../../styles/home/SolutionsSection.css'

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="solutions-title">Comprehensive AI Automation Solutions</h2>
        </div>
        
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-background">
              <div className="solution-accent-line workflow"></div>
            </div>
            
            <div className="solution-header">
              <h3 className="solution-title">Workflow Automation</h3>
            </div>
            
            <p className="solution-description">
              Automate complex business processes from customer onboarding to full CRM setup, 
              reducing manual effort by up to 90%.
            </p>
            
            <div className="solution-stats">
              <div className="solution-stat-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/UXtQKqbhoH.svg" 
                  alt="Stat icon" 
                  className="stat-icon"
                />
              </div>
              <div className="solution-stat-text">
                <div className="stat-value">90% time saved</div>
                <div className="stat-label">On routine workflows</div>
              </div>
            </div>
            
            <div className="solution-action">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/iOwEuNytFz.png" 
                alt="Next" 
                className="solution-next-icon"
              />
            </div>
          </div>
          
          <div className="solution-card">
            <div className="solution-background">
              <div className="solution-accent-line customer"></div>
            </div>
            
            <div className="solution-header">
              <h3 className="solution-title">Customer Service Automation</h3>
            </div>
            
            <p className="solution-description">
              AI-powered customer service that handles 80% of inquiries automatically 
              while maintaining personalized experiences.
            </p>
            
            <div className="solution-stats">
              <div className="solution-stat-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/uBSH83TDSM.svg" 
                  alt="Stat icon" 
                  className="stat-icon"
                />
              </div>
              <div className="solution-stat-text">
                <div className="stat-value">75% cost reduction</div>
                <div className="stat-label">In customer service ops</div>
              </div>
            </div>
            
            <div className="solution-action">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/K7MtsetQKw.png" 
                alt="Next" 
                className="solution-next-icon"
              />
            </div>
          </div>
          
          <div className="solution-card">
            <div className="solution-background">
              <div className="solution-accent-line document"></div>
            </div>
            
            <div className="solution-header">
              <h3 className="solution-title">Document Processing Automation</h3>
            </div>
            
            <p className="solution-description">
              Intelligent document extraction, classification, and processing that 
              eliminates manual data entry and reduces errors.
            </p>
            
            <div className="solution-stats">
              <div className="solution-stat-icon">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/1kDKpuRX8n.svg" 
                  alt="Stat icon" 
                  className="stat-icon"
                />
              </div>
              <div className="solution-stat-text">
                <div className="stat-value">99.5% accuracy</div>
                <div className="stat-label">Data extraction rate</div>
              </div>
            </div>
            
            <div className="solution-action">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/hADwufrJ29.png" 
                alt="Next" 
                className="solution-next-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
