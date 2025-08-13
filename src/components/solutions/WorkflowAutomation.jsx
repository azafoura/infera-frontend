import React from 'react'
import '../../styles/solutions/WorkflowAutomation.css'

const WorkflowAutomation = () => {
  return (
    <section className="workflow-automation">
      <div className="workflow-container">
        <div className="workflow-content">
          <div className="workflow-header">
            <h2 className="workflow-title">
              <span className="gradient-text">Workflow</span> Automation
            </h2>
            <p className="workflow-description">
              Eliminate manual tasks and accelerate business processes with intelligent 
              workflow automation that adapts to your unique requirements
            </p>
          </div>
          
          <div className="workflow-features">
            <div className="workflow-feature">
              <h3 className="feature-title gradient-text">Smart Routing & Assignment</h3>
              <p className="feature-description">
                Automatically route tasks to the right person based on skills, workload, and availability
              </p>
            </div>
            
            <div className="workflow-feature">
              <h3 className="feature-title gradient-text">Approval Workflows</h3>
              <p className="feature-description">
                Streamline approval processes with automated escalation and notification systems
              </p>
            </div>
            
            <div className="workflow-feature">
              <h3 className="feature-title gradient-text">Data Integration</h3>
              <p className="feature-description">
                Connect multiple systems and automatically sync data across platforms
              </p>
            </div>
            
            <div className="workflow-feature">
              <h3 className="feature-title gradient-text">Exception Handling</h3>
              <p className="feature-description">
                Intelligent error detection and automatic retry mechanisms
              </p>
            </div>
          </div>
        </div>
        
        <div className="workflow-visual">
          <div className="workflow-accent-circle"></div>
          <div className="workflow-images">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/f8vZ214KOt.png" 
              alt="Workflow visualization" 
              className="workflow-main-image"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/jNb3Sf2Mt3.png" 
              alt="Workflow detail" 
              className="workflow-detail-image"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/pxJDKjON5V.png" 
              alt="Workflow process" 
              className="workflow-process-image"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/6baXKSh8m9.png" 
              alt="Workflow integration" 
              className="workflow-integration-image"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/NRCWXWwBFQ.png" 
              alt="Workflow automation" 
              className="workflow-automation-image"
            />
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/jP35vpQNGM.png" 
              alt="Workflow management" 
              className="workflow-management-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowAutomation
