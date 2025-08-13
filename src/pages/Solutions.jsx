import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SolutionsHero from '../components/solutions/SolutionsHero'
import WhyChooseSection from '../components/solutions/WhyChooseSection'
import WorkflowAutomation from '../components/solutions/WorkflowAutomation'
import DocumentProcessing from '../components/solutions/DocumentProcessing'
import CustomerService from '../components/solutions/CustomerService'
import SalesProcess from '../components/solutions/SalesProcess'
import IndustrySpecific from '../components/solutions/IndustrySpecific'

const Solutions = () => {
  return (
    <div className="solutions-page">
      <Navigation />
      <main>
        <SolutionsHero />
        <WhyChooseSection />
        <WorkflowAutomation />
        <DocumentProcessing />
        <CustomerService />
        <SalesProcess />
        <IndustrySpecific />
      </main>
      <Footer />
    </div>
  )
}

export default Solutions
