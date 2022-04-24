import React from "react";
import { Button } from "../ButtonElements";
import {
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  ImgWrapper,
  Img,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  topLine,
  heading,
  description,
  buttonLable,
  img,
  imgStart,
  alt,
  dark,
  primary
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart} >
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBg={lightBg} >{heading}</Heading>
                <Subtitle lightBg={lightBg}>{description}</Subtitle>
                <BtnWrapper>
                  <Button to="/Home" primary={primary} dark={dark} >{buttonLable}</Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
