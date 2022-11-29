import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'

// import { useAuth0 } from '@auth0/auth0-react'
// import { LoginButton } from './components/Login'
// import { Profile } from './components/Profile'
// import { LogoutButton } from './components/Logout'

function App() {
  // const { isAuthenticated } = useAuth0()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </Router>
  )
}

export default App
