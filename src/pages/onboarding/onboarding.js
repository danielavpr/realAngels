import React, { useState } from 'react'
import CardButton from '../../components/Common/CardButton'
import Navbar from '../../components/Landing/Navbar'
import Sidebar from '../../components/Landing/Sidebar'
import { OnboardingContainer, OnboardingStepContainer, OnboardintStepLeftSection, OnboardingStepRightSection, OnboardingCardContainer } from './onboardingElements'
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
        <h2>Are you an angel or a founder?</h2>
        <p>We'll connect you with other profiles based on your preferences</p>
        <OnboardingCardContainer>
          <CardButton title="Angel" description="I help startups" />      
          <CardButton title="Founder" description="I'm part of a startup" />
        </OnboardingCardContainer>
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
