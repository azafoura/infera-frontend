import React, { useState } from 'react'
import '../../styles/home/ROICalculator.css'

const ROICalculator = () => {
  const [hours, setHours] = useState(45)
  const [cost, setCost] = useState(75)
  const [employees, setEmployees] = useState(1)
  
  const calculateSavings = () => {
    const weeklyCost = hours * cost * employees
    const annualCost = weeklyCost * 52
    const automationEfficiency = 0.8
    const savings = annualCost * automationEfficiency
    return Math.round(savings)
  }

  return (
    <section className="roi-calculator">
      <div className="roi-container">
        <div className="roi-card">
          <h2 className="roi-title">Calculate Your Automation ROI</h2>
          
          <div className="roi-form">
            <div className="form-group">
              <label className="form-label">Manual Hours per Week</label>
              <div className="form-input">
                <input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Average Hourly Cost ($)</label>
              <div className="form-input">
                <input 
                  type="number" 
                  value={cost} 
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Number of Employees</label>
              <div className="form-input">
                <input 
                  type="number" 
                  value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="roi-result">
              <div className="result-text">
                <span className="result-label">Annual Savings Potential</span>
                <span className="result-amount">${calculateSavings().toLocaleString()}</span>
                <span className="result-efficiency">With 80% automation efficiency</span>
              </div>
            </div>
            
            <button className="green-button roi-cta">
              get detailed ROI Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ROICalculator
