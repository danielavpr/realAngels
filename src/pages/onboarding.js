import React, { useState } from 'react'
import Navbar from '../components/Landing/Navbar'
import Sidebar from '../components/Landing/Sidebar'
import Footer from '../components/Footer'
const Onboarding = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Footer />
    </div>
  )
}

export default Onboarding
