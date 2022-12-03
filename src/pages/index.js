import React, { useState } from 'react'

import HeroSection from '../components/Landing/HeroSection'
import InfoSection from '../components/Landing/infoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/Landing/infoSection/Data'
import Navbar from '../components/Landing/Navbar'
import Services from '../components/Landing/Services'
import Sidebar from '../components/Landing/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
