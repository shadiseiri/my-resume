import React, { useRef, useState } from "react";
// import { Motion, spring } from "react-motion";
import {
  SkillsChart,
  SkillsChartValue,
  SkillsContainer,
  SkillsContent,
  SkillsTitle,
  SkillsWrapper,
  SkilssChartProgress,
} from "./SkillsElements";

const Skills = () => {
  const [chartSection, setChartSection] = useState(false);
  const chartValue = [50, 65, 75, 85];
  const chartRef = useRef();



  const scrollHandler = () => {
    setChartSection(true);
  };

  return (
    <div id="skills" onMouseEnter ={scrollHandler}>
      <SkillsContainer>
        <SkillsWrapper ref={chartRef}>
          <SkillsContent>
            <SkillsChart chartValue={chartValue[0]}>
              <SkilssChartProgress
                chartSection={chartSection}
                chartValue={chartValue[0]}
              />
              <SkillsChartValue>{chartValue[0]}%</SkillsChartValue>
            </SkillsChart>

            <SkillsTitle>React JS</SkillsTitle>
          </SkillsContent>
          <SkillsContent>
            <SkillsChart chartValue={chartValue[1]}>
              <SkilssChartProgress
                chartSection={chartSection}
                chartValue={chartValue[1]}
              />

              <SkillsChartValue>{chartValue[1]}%</SkillsChartValue>
            </SkillsChart>
            <SkillsTitle>JavaScript</SkillsTitle>
          </SkillsContent>
          <SkillsContent>
            <SkillsChart chartValue={chartValue[2]}>
              <SkilssChartProgress
                chartSection={chartSection}
                chartValue={chartValue[2]}
              />

              <SkillsChartValue>{chartValue[2]}%</SkillsChartValue>
            </SkillsChart>
            <SkillsTitle>CSS</SkillsTitle>
          </SkillsContent>
          <SkillsContent>
            <SkillsChart chartValue={chartValue[3]}>
              <SkilssChartProgress
                chartSection={chartSection}
                chartValue={chartValue[3]}
              />

              <SkillsChartValue>{chartValue[3]}%</SkillsChartValue>
            </SkillsChart>
            <SkillsTitle>HTML</SkillsTitle>
          </SkillsContent>
        </SkillsWrapper>
      </SkillsContainer>
    </div>
  );
};

export default Skills;

/* <Motion
defaultStyle={{ background: 0}}
style={{
  background: spring(
 70, 
   {
      
        stiffness: 2100,
        damping: 1
      
    }
  ),
}}
>
{(style) => (
  <SkillsChart
    chartValue={chartValue[0]}
    style={{ background: `linearGradient(to top,red style.opacity% ,blue)` }}
  >
    <SkillsChartValue>{chartValue[0]}%</SkillsChartValue>
  </SkillsChart>
)}
</Motion> */
