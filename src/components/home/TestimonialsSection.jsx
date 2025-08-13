import React from 'react'
import '../../styles/home/TestimonialsSection.css'

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Real Results from Real Businesses</h2>
        
        <div className="testimonials-background">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/ELWTR21yAg.png" 
            alt="Testimonials background" 
            className="testimonials-bg-image"
          />
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/W9eGUWcHnK.png" 
                alt="Leonard Yong" 
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3 className="testimonial-company">SEAMO PTE LTD</h3>
                <p className="testimonial-name">leonard yong ,CEO</p>
                <p className="testimonial-size">100+ Employees</p>
              </div>
            </div>
            
            <blockquote className="testimonial-quote">
              "They worked tirelessly to ensure the system worked. They improved it and it is now FLAWLESS. Thank you for the great effort and skill!"
            </blockquote>
            
            <div className="testimonial-stats">
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">95%</div>
                <div className="stat-description">Time Saved</div>
              </div>
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">(private)</div>
                <div className="stat-description">Annual Savings</div>
              </div>
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">300%</div>
                <div className="stat-description">Capacity Increase</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/FvHtk91h4A.png" 
                alt="Leonard Yong" 
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3 className="testimonial-company">SEAMO PTE LTD</h3>
                <p className="testimonial-name">leonard yong ,CEO</p>
                <p className="testimonial-size">100+ Employees</p>
              </div>
            </div>
            
            <blockquote className="testimonial-quote">
              "They worked tirelessly to ensure the system worked. They improved it and it is now FLAWLESS. Thank you for the great effort and skill!"
            </blockquote>
            
            <div className="testimonial-stats">
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">95%</div>
                <div className="stat-description">Time Saved</div>
              </div>
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">(private)</div>
                <div className="stat-description">Annual Savings</div>
              </div>
              <div className="testimonial-stat">
                <div className="stat-number gradient-text">300%</div>
                <div className="stat-description">Capacity Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
