import React, { useEffect, useRef } from "react";
import {
  Img,
  TopBg,
  TopBtnWrapper,
  TopContainer,
  TopContent,
  TopH1,
  TopP,
} from "./TopSectionElements";
import { Button } from "../Button";
import myImg from "../../images/1027.jpg";

const TopSection = ({ setToTop }) => {
  const topSecionRef = useRef();

  const fixNavBar = () => {
    const topSectionHeight = topSecionRef.current.offsetHeight;
    if (topSectionHeight - window.scrollY >= 60) {
      setToTop(false);
    }else{
      setToTop(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);
    console.log(window.scrollY);
  }, []);

  return (
    <TopContainer ref={topSecionRef}>
      <TopBg>
        <Img src={myImg} />
      </TopBg>
      <TopContent>
        <TopH1>I'm Shadi Seiri</TopH1>
        <TopP>Web Developer</TopP>
        <TopBtnWrapper to="about me" smooth duration={1000} spy>
          <Button primary showBtn dark>
            KNOW ME BETTER
          </Button>
        </TopBtnWrapper>
      </TopContent>
      {/* <NavBar toTop={toTop} setToTop={setToTop} /> */}
    </TopContainer>
  );
};

export default TopSection;
