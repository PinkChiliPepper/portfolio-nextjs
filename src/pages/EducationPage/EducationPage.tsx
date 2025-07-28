import BodyText from "@/components/text/BodyText";
import EducationBlock from "@/pages/EducationPage/EducationBlock";
import { FunctionComponent } from "react";

const EducationPage: FunctionComponent = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '6rem',
      }}>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          <EducationBlock
            name="BSc Informatica"
            place="Universiteit Utrecht"
            moment="2018 - 2021"
          > </EducationBlock>
        </div>

        <div style={{ flex: 1 }}>
          <EducationBlock
            name="MSc Software Engineering"
            place="Universiteit van Amsterdam"
            moment="2021 - 2023"
            imageName="UvA_graduation.gif"
          >
            <BodyText>
              For my Master’s thesis, I investigated the impact of GitHub Copilot, a popular AI code completion tool,
              on solution fixation in software development. Specifically, I explored whether Copilot helps or hinders
              programmers in generating diverse and innovative solutions to coding problems.
            </BodyText>
            <BodyText>
              Grade: 8.6
            </BodyText>
          </EducationBlock>
        </div>
      </div>
    </>
  )
}

export default EducationPage
