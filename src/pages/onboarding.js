import React from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "../components/Common/CardButton";
import {
  OnboardingStepContainer,
  OnboardingStepLeftSection,
  OnboardingStepRightSection,
  OnboardingCardContainer,
} from "../components/Onboarding/OnboardingElements";
import OnboardingStepWrapper from "../components/Onboarding/OnboardingStepWrapper";
import founder from "../images/founder.svg";
import investor from "../images/investor.svg";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div>
      <OnboardingStepContainer>
        <OnboardingStepLeftSection>
          <OnboardingStepWrapper
            title="Are you an angel or a founder?"
            description="We'll connect you with other profiles based on your preferences"
          >
            <OnboardingCardContainer>
              <CardButton
                title="Angel"
                description="I help startups"
                onClick={() => navigate("/investor-matching")}
                image={investor}
              />
              <CardButton
                title="Founder"
                description="I'm part of a startup"
                onClick={() => navigate("/founder-matching")}
                image={founder}
              />
            </OnboardingCardContainer>
          </OnboardingStepWrapper>
        </OnboardingStepLeftSection>
        <OnboardingStepRightSection>
          <h2>We foster the innovation in Mexico</h2>
          <p>Connect with the people that is changing the industry</p>
        </OnboardingStepRightSection>
      </OnboardingStepContainer>
    </div>
  );
};

export default Onboarding;
