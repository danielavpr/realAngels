import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Onboarding from './pages/onboarding'
// import { useAuth0 } from '@auth0/auth0-react'
import Footer from './components/Footer'
import FounderForm from './pages/founderForm'
import InvestorForm from './pages/investorForm'

function App() {
  // const { isAuthenticated } = useAuth0()
  return (
    <Router>
      <Routes>
          <Route path="/investor-matching" element={<InvestorForm />} exact />
          <Route path="/founder-matching" element={<FounderForm />} exact />
          <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
