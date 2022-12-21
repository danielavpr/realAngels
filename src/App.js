import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Onboarding from './pages/onboarding/onboarding'

import { useAuth0 } from '@auth0/auth0-react'
import Footer from './components/Footer'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Onboarding />} exact />
        ) : (
          <Route path="/" element={<Home />} exact />
        )}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
