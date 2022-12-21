import React, { useState } from 'react'
import { Row, Col } from 'antd'
import CardButton from '../../components/Common/CardButton'
import Navbar from '../../components/Landing/Navbar'
import Sidebar from '../../components/Landing/Sidebar'
import { OnboardingContainer, OnboardingStepContainer, OnboardintStepLeftSection, OnboardingStepRightSection } from './onboardingElements'
const Onboarding = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <OnboardingContainer>
      <OnboardingStepContainer>
      <OnboardintStepLeftSection>
        <div>
          <h2>Are you an angel or a founder?</h2>
        </div>
        <CardButton title="Angel" description="Help startups" />      
        <CardButton title="Founder" description="I'm part of a startup" />
      </OnboardintStepLeftSection>
      <OnboardingStepRightSection>
        <h2>We foster the innovation in Mexico</h2>
        <p>Connect with the people that is changing the industry 🚀</p>
      </OnboardingStepRightSection>
      </OnboardingStepContainer>
      </OnboardingContainer>

    </div>
  )
}

export default Onboarding
