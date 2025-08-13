import React from 'react'
import '../../styles/solutions/DocumentProcessing.css'

const DocumentProcessing = () => {
  return (
    <section className="document-processing">
      <div className="document-container">
        <div className="document-header">
          <h2 className="document-title">
            Document Processing <span className="gradient-text">Automation</span>
          </h2>
          <p className="document-description">
            Transform unstructured documents into actionable data with AI-powered extraction,
            classification, and processing
          </p>
        </div>
        
        <div className="document-background">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/pKHsgGMEcX.png" 
            alt="Document processing background" 
            className="document-bg-image"
          />
        </div>
        
        <div className="document-features">
          <div className="document-feature-card">
            <h3 className="feature-card-title">Intelligent OCR & Data Extraction</h3>
            <p className="feature-card-description">
              Extract text, numbers, and structured data from any document format with 99.5% accuracy
            </p>
          </div>
          
          <div className="document-feature-card">
            <h3 className="feature-card-title">Document Classification</h3>
            <p className="feature-card-description">
              Automatically categorize and route documents to appropriate workflows
            </p>
          </div>
          
          <div className="document-feature-card">
            <h3 className="feature-card-title">Validation & Verification</h3>
            <p className="feature-card-description">
              Cross-reference extracted data with databases and flag anomalies
            </p>
          </div>
          
          <div className="document-feature-card">
            <h3 className="feature-card-title">System Integration</h3>
            <p className="feature-card-description">
              Direct integration with ERP, CRM, and accounting systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocumentProcessing
