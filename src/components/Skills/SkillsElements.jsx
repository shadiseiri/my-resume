import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  min-height: 780px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#3e086a ")};
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#f7f8fa")};

`;

export const SkillsWrapper = styled.div`
  display: grid;
  max-width: 1100px;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
grid-template-rows: 1fr 1fr;


`;


export const SkillsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: -50px;
`


export const SkillsHeading = styled.h2`
  color: #fff;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;


  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

`



export const SkillsQoute = styled.p`
  max-width: 700px;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  `


export const SkillsChartWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4,1fr);
  margin-top: -50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

`



export const SkillsContent = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`;

export const SkillsChart = styled.div`
  background: #fff;
  border: 5px solid #fff;
  /* background: #929292;
  border: 5px solid #929292; */
  border-radius: 100%;
  margin: 0 auto 30px;
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;




`;

export const SkilssChartProgress = styled.div`
  &::before {
    /* content: ${({chartValue})=>(`${chartValue}%`)}; */
    content: "";
    width: 120px;
    height: 120px;
    background: #1bc6e9;
    transform:${({chartSection , chartValue})=>(chartSection ? `translateY(${120 - (chartValue*1.2)}px)` :" translateY(110px)")};
    display: inline-block;
    transition: all 3s ease;
 
  }





`;

export const SkillsChartValue = styled.span`
  color: #3e086a;
  display: block;
  position: absolute;
  font-weight: 700;
`;

export const SkillsTitle = styled.span`
color: #fff;
/* color: #575656; */
font-weight: 700;
font-size: 1.2rem;

`;
