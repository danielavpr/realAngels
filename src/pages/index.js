import React from "react";
import HeroSection from "../components/Landing/HeroSection";
import InfoSection from "../components/Landing/infoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/Landing/infoSection/Data";
import Services from "../components/Landing/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
