import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
