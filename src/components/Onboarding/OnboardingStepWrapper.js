import React from 'react';

const OnboardingStepWrapper = ({title, description, children}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </>
  )
}

export default OnboardingStepWrapper
