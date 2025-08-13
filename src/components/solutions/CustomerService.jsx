import React from 'react'
import '../../styles/solutions/CustomerService.css'

const CustomerService = () => {
  return (
    <section className="customer-service">
      <div className="customer-service-background">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Pwp9wX4a6p.png" 
          alt="Customer service background" 
          className="customer-service-bg"
        />
      </div>
      
      <div className="customer-service-container">
        <div className="customer-service-header">
          <h2 className="customer-service-title">
            Customer Service <span className="gradient-text">Automation</span>
          </h2>
          <p className="customer-service-description">
            Deliver exceptional customer experiences 24/7 with AI-powered service
            automation that handles inquiries, routes tickets, and provides instant resolutions
          </p>
        </div>
        
        <div className="customer-service-features">
          <div className="service-feature">
            <h3 className="service-feature-title">24/7 AI assistants / AI Chatbots</h3>
            <p className="service-feature-description">
              AI Speech Assistants that handle customer calls / Chatbots that handle 80% of common inquiries instantly
            </p>
          </div>
          
          <div className="service-feature">
            <h3 className="service-feature-title">Smart Ticket Routing</h3>
            <p className="service-feature-description">
              Automatically route tickets to the best available agent based on skills and workload
            </p>
          </div>
          
          <div className="service-feature">
            <h3 className="service-feature-title">Automated Responses</h3>
            <p className="service-feature-description">
              Generate personalized responses based on customer history and context
            </p>
          </div>
        </div>
        
        <div className="service-impact">
          <h3 className="impact-title">Service Automation Impact</h3>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-value">+85%</div>
              <div className="impact-label">Response Time faster</div>
            </div>
            <div className="impact-stat">
              <div className="impact-value">+35%</div>
              <div className="impact-label">Customer Satisfaction increase</div>
            </div>
            <div className="impact-stat">
              <div className="impact-value">-60%</div>
              <div className="impact-label">Operating Costs reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerService
