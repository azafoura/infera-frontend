import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.css'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/4CNOxp45gD.png" 
              alt="Infera AI Logo" 
              className="logo-image"
            />
          </div>
          
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className={`nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}
            >
              AI Automation Solutions
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </div>
          
          <button className="gradient-button nav-cta">
            free automation assessment
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
