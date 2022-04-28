import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  min-height: 780px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
  grid-template-columns: repeat(4,1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }


`;

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
  background: #a1a1a1;
  /* background: ${({ chartValue }) =>
    `linear-gradient(to top,#3e086a ${chartValue}%,#a1a1a1 ${chartValue}%)`}; */
  border: 5px solid #a1a1a1;
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
    background: #3e086a;
    transform:${({chartSection , chartValue})=>(chartSection ? `translateY(${120 - (chartValue*1.2)}px)` :" translateY(110px)")};
    display: inline-block;
    transition: all 3s ease;
 
  }





`;

export const SkillsChartValue = styled.span`
  color: #fff;
  display: block;
  position: absolute;
  font-weight: 700;
`;

export const SkillsTitle = styled.span`
color: #575656;
font-weight: 700;
font-size: 1.2rem;

`;
