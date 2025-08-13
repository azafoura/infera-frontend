import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/4CNOxp45gD.png" 
              alt="Infera AI Logo" 
              className="footer-logo"
            />
            <p className="footer-description">
              The leading AI automation agency helping enterprises eliminate manual work, 
              accelerate workflows, and scale operations intelligently.
            </p>
          </div>
          
          <div className="footer-sections">
            <div className="footer-section">
              <h3 className="footer-section-title">Current Regions We Operate On</h3>
              <div className="footer-regions">
                <span className="footer-region">Africa</span>
                <span className="footer-region">Europe</span>
                <span className="footer-region">North America</span>
                <span className="footer-region">Middle East</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Get Started</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Free Assessment</a>
                <a href="#" className="footer-link">About Us</a>
              </div>
              <div className="footer-language">
                <div className="language-selector">
                  <div className="language-flag">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/5uojGntOEe.svg" 
                      alt="Flag" 
                      className="flag-icon"
                    />
                  </div>
                  <span className="language-text">en</span>
                  <div className="language-dropdown">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/aPcsxSkLMm.svg" 
                      alt="Dropdown" 
                      className="dropdown-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Infera AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
