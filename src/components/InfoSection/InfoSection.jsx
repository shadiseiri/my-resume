import React from "react";
import { Button } from "../Button";
import {
  Btnwrapper,
  Column1,
  Column2,
  ImageWrapper,
  Img,
  InfoRow,
  InfoSectionContainer,
  InfoSectionContent,
  InfoSectionH2,
  InfoSectionText,
  InfoSectionWrapper,
} from "./InfoSecionElements";

const InfoSection = ({
  header,
  text,
  imgFirst,
  lightBg,
  src,
  alt,
  id,
  to,
  showBtn,
  primary,
  dark,
  btnLabel,
}) => {
  return (
    <InfoSectionContainer id={id} lightBg={lightBg}>
      <InfoSectionWrapper>
        <InfoRow imgFirst={imgFirst}>
          <Column1>
            <InfoSectionContent>
              <InfoSectionH2 lightBg={lightBg}>{header}</InfoSectionH2>
              <InfoSectionText lightBg={lightBg}>{text}</InfoSectionText>
              <Btnwrapper  to={to}>
                <Button showBtn={showBtn} primary={primary} dark={dark}>
                  {btnLabel}
                </Button>
              </Btnwrapper>
            </InfoSectionContent>
          </Column1>
          <Column2>
            <ImageWrapper imgFirst={imgFirst} >
              <Img src={src} alt={alt} />
            </ImageWrapper>
          </Column2>
        </InfoRow>
      </InfoSectionWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;
