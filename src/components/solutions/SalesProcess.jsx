import React from 'react'
import '../../styles/solutions/SalesProcess.css'

const SalesProcess = () => {
  return (
    <section className="sales-process">
      <div className="sales-process-background">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/JaVJ7DJvGZ.png" 
          alt="Sales process background" 
          className="sales-process-bg"
        />
      </div>
      
      <div className="sales-process-container">
        <div className="sales-process-header">
          <h2 className="sales-process-title">
            Sales Process <span className="gradient-text">Automation</span>
          </h2>
          <p className="sales-process-description">
            Accelerate your sales cycle with AI-powered lead qualification, automated
            follow-ups, and intelligent pipeline management
          </p>
        </div>
        
        <div className="sales-process-cards">
          <div className="sales-card">
            <h3 className="sales-card-title">Lead Qualification</h3>
            <p className="sales-card-description">
              Automatically score and qualify leads based on behavior, demographics, and engagement patterns.
            </p>
            
            <div className="qualification-metrics">
              <div className="metric">
                <span className="metric-label">Website Engagement</span>
                <div className="metric-bar">
                  <div className="metric-fill" style={{width: '78%'}}></div>
                </div>
                <span className="metric-value">High</span>
              </div>
              
              <div className="metric">
                <span className="metric-label">Email Engagement</span>
                <div className="metric-bar">
                  <div className="metric-fill" style={{width: '58%'}}></div>
                </div>
                <span className="metric-value">Medium</span>
              </div>
              
              <div className="metric">
                <span className="metric-label">Company Fit</span>
                <div className="metric-bar">
                  <div className="metric-fill" style={{width: '89%'}}></div>
                </div>
                <span className="metric-value">High</span>
              </div>
            </div>
          </div>
          
          <div className="sales-card">
            <h3 className="sales-card-title">Automated Follow-ups</h3>
            <p className="sales-card-description">
              Personalized email sequences that adapt based on prospect behavior and engagement levels.
            </p>
            
            <div className="followup-sequence">
              <div className="sequence-item">
                <span className="sequence-label">Welcome Email</span>
                <span className="sequence-timing">Sent immediately</span>
              </div>
              
              <div className="sequence-item">
                <span className="sequence-label">Value Proposition</span>
                <span className="sequence-timing">Day 3</span>
              </div>
              
              <div className="sequence-item">
                <span className="sequence-label">Case Study</span>
                <span className="sequence-timing">Day 7</span>
              </div>
            </div>
          </div>
          
          <div className="sales-card">
            <h3 className="sales-card-title">Pipeline Management</h3>
            <p className="sales-card-description">
              AI-powered insights that predict deal outcomes and recommend next best actions for your sales team.
            </p>
            
            <div className="pipeline-metrics">
              <div className="pipeline-metric">
                <span className="pipeline-label">Deal Velocity</span>
                <div className="pipeline-bar">
                  <div className="pipeline-fill" style={{width: '78%'}}></div>
                </div>
                <span className="pipeline-value">+32% faster</span>
              </div>
              
              <div className="pipeline-metric">
                <span className="pipeline-label">Win Rate</span>
                <div className="pipeline-bar">
                  <div className="pipeline-fill" style={{width: '58%'}}></div>
                </div>
                <span className="pipeline-value">28%</span>
              </div>
              
              <div className="pipeline-metric">
                <span className="pipeline-label">Pipeline Health</span>
                <div className="pipeline-bar">
                  <div className="pipeline-fill" style={{width: '89%'}}></div>
                </div>
                <span className="pipeline-value">Strong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalesProcess
