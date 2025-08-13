import React from 'react'
import '../../styles/about/GlobalPresence.css'

const GlobalPresence = () => {
  return (
    <section className="global-presence">
      <div className="global-container">
        <div className="global-header">
          <h2 className="global-title">Global Presence</h2>
          <p className="global-description">
            Serving enterprise clients across all continents, but with mainly one Headquarters.
          </p>
        </div>
        
        <div className="global-content">
          <div className="headquarters-card">
            <div className="headquarters-flag">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Kr0fFJAidw.png" 
                alt="Tunisia Flag" 
                className="flag-image"
              />
            </div>
            
            <h3 className="headquarters-country">TUNISIA</h3>
            <p className="headquarters-label">Main Headquarters</p>
            <p className="headquarters-description">
              Our main research and development center.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
