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
          />
        </div>

        <div style={{ flex: 1 }}>
          <EducationBlock
            name="MSc Software Engineering"
            place="Universiteit van Amsterdam"
            moment="2021 - 2023"
          />
        </div>
      </div>
    </>
  )
}

export default EducationPage
