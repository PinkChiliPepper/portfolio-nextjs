import TitleBox from "@/components/boxes/TitleBox";
import RoundImage from "@/components/images/RoundImage";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  name: string,
  place: string,
  moment: string,
  imageName?: string,
}

const EducationBlock: FunctionComponent<Props> = ({ children, name, place, moment, imageName }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
    }}>
      <TitleBox title={name} subtitle={`${place}, ${moment}`} >
        {children}
      </TitleBox>
      {imageName && (<div style={{ margin: '2rem' }}>
        <RoundImage
          imageName={imageName}
          alt="Me with a duck"
          circleWidth="400px"
        />
      </div>)}
    </div>
  )
}

export default EducationBlock
