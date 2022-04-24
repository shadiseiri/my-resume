import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import Video from "../../videos/Video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => setHover(!hover);

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg muted autoPlay loop src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>JS Is The King</HeroH1>
          <HeroP>Learning JS And Frameworks</HeroP>
          <HeroBtnWrapper>
            <Button
              to="/"
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverHandler}
              primary
              dark
              fontBig
              big
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
