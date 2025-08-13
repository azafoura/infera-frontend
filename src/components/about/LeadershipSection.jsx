import React from 'react'
import '../../styles/about/LeadershipSection.css'

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <div className="leadership-background">
        <div className="leadership-accent-shape"></div>
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/08dUgbDDuO.png" 
          alt="Leadership background" 
          className="leadership-bg-shape"
        />
      </div>
      
      <div className="leadership-container">
        <div className="leadership-header">
          <h2 className="leadership-title">Leadership Team</h2>
          <p className="leadership-description">
            Two passionate co-founders with a burning interest in creating revolutionary 
            improvements in the AI automation landscape
          </p>
        </div>
        
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-avatar">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/xhhXh3NHbT.png" 
                alt="Amri Mohammed Charaf" 
                className="avatar-image"
              />
            </div>
            
            <h3 className="leader-name">Amri Mohammed Charaf</h3>
            <p className="leader-role">Co-Founder of Infera AI</p>
            
            <div className="leader-social">
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/9AG7D6LP6w.png" 
                  alt="LinkedIn" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/UoYXp0vKyD.png" 
                  alt="Instagram" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/iNpEo4wZTc.png" 
                  alt="Facebook" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/cpicczpAsh.png" 
                  alt="Website" 
                  className="social-icon"
                />
              </a>
            </div>
          </div>
          
          <div className="leader-card">
            <div className="leader-avatar">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/LGRLawH38E.png" 
                alt="Amri Jameleddine" 
                className="avatar-image"
              />
            </div>
            
            <h3 className="leader-name">Amri Jameleddine</h3>
            <p className="leader-role">Co-Founder of Infera AI</p>
            
            <div className="leader-social">
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/nzgOw6V1HM.png" 
                  alt="LinkedIn" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/CBsctbWzhj.png" 
                  alt="Instagram" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/cXcUQhTKku.png" 
                  alt="Facebook" 
                  className="social-icon"
                />
              </a>
              <a href="#" className="social-link">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/pTYaoP7Ur4.png" 
                  alt="Website" 
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
