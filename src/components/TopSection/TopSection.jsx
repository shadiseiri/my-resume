import React from "react";
import { Img, TopBg, TopBtnWrapper, TopContainer, TopContent, TopH1, TopP } from "./TopSectionElements";
import { Button} from '../Button'
import myImg from '../../images/1027.jpg'


const TopSection = () => {
  return (
    <TopContainer>
      <TopBg>
        <Img src={myImg} />
      </TopBg>
      <TopContent>
        <TopH1>I'm Shadi Seiri</TopH1>
        <TopP>Web Developer</TopP>
        <TopBtnWrapper to="profile">
          <Button primary showBtn  >KNOW ME BETTER</Button>
        </TopBtnWrapper>
      </TopContent>
    </TopContainer>
  );
};

export default TopSection;
