import styled from "styled-components";
import {Link} from "react-router-dom"

export const InfoSectionContainer = styled.div`
  /* background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#1d0553")}; */
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#37075d")};
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoSectionWrapper = styled.div`
  display: grid;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
  height: 860px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgFirst }) =>
    imgFirst ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgFirst }) =>
      imgFirst ? `"col2" "col1"` : `"col1" "col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const InfoSectionContent = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const InfoSectionH2 = styled.h2`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InfoSectionText = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#f7f8fa")};
`;

export const Btnwrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  margin: ${({ imgFirst }) => (imgFirst ? "0 24px 0 0" : "0 0 0 24px")};
`;


export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
