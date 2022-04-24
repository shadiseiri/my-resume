import React from "react";
import { FeaturesCard, FeaturesContainer, FeaturesH1, FeaturesH2, FeaturesIcon, FeaturesP, FeaturesWrapper } from "./FeaturesElements";
import Icon1 from '../../images/svg-1.svg' 
import Icon2 from '../../images/svg-7.svg' 
import Icon3 from '../../images/svg-6.svg' 


const Features = () => {
  return (
    <>
      <FeaturesContainer id="features">
        <FeaturesH1>Our Courses Feature</FeaturesH1>
        <FeaturesWrapper>
          <FeaturesCard>
            <FeaturesIcon src={Icon1} />
            <FeaturesH2>Project Oriented</FeaturesH2>
            <FeaturesP>Use many project for learning better</FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon2} />
            <FeaturesH2>Free Courses</FeaturesH2>
            <FeaturesP>
           Learning free without stress to pay
            </FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon3} />
            <FeaturesH2>VIP Account</FeaturesH2>
            <FeaturesP>Access all courses with paying 10$ per month</FeaturesP>
          </FeaturesCard>
        </FeaturesWrapper>
      </FeaturesContainer>
    </>
  );
};

export default Features;
