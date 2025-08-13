import React from 'react'
import '../../styles/home/StatsSection.css'

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-background">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/MO7hMvqd8V.png" 
          alt="Community background" 
          className="stats-bg-image"
        />
      </div>
      
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number gradient-text">95-100%</div>
            <div className="stat-label">Task Automation Rate</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number gradient-text-blue">40%</div>
            <div className="stat-label">Productivity Increase</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number gradient-text-cyan">72hrs</div>
            <div className="stat-label">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
