import styled from "styled-components";
import {Link} from "react-scroll"

export const TopContainer = styled.div`
  height: 800px;
  padding: 0 30px;
  background-color: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export const TopBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  -o-object-fit: cover;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  position: absolute;
  /* left: 200px;
  top: 200px; */
  z-index: 3;
  padding: 8px 24px;
  @media screen and (max-width: 480px) {
    left: 0px;
    padding: 0;
  }
`;

export const TopH1 = styled.h1`

  color: #fff;
  /* text-shadow: 1px 2px #a855f7; */
  font-size: 48px;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
`;

export const TopP = styled.p`
  margin-top: 32px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TopBtnWrapper = styled(Link)`
  margin: 32px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
