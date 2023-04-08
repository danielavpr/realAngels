import React from 'react'
import Icon1 from '../../../images/svg-4.svg'
import Icon2 from '../../../images/svg-5.svg'
import Icon3 from '../../../images/svg-6.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  ServicesHeadingWrapper,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeadingWrapper>
        <ServicesH1>Our Services</ServicesH1>
      </ServicesHeadingWrapper>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Matchmaking</ServicesH2>
          <ServicesP>
            Find the perfect match wether you are a startup or if you are
            looking to invest
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Save money</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            We help you with sorting everything for you to focus on what is
            important
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
