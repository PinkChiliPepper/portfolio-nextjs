import TitleBox from "@/components/boxes/TitleBox";
import RoundImage from "@/components/images/RoundImage";
import BodyText from "@/components/text/BodyText";
import { FunctionComponent } from "react";

interface Props {
  name: string,
  place: string,
  moment: string,
}

const EducationBlock: FunctionComponent<Props> = ({ name, place, moment }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
    }}>
      <TitleBox title={name} subtitle={`${place}, ${moment}`} >
        <BodyText>
          {`TODO`}
        </BodyText>
      </TitleBox>
      <div style={{ margin: '2rem' }}>
        <RoundImage
          imageName="todo.jpg"
          alt="Me with a duck"
          circleWidth="400px"
        />
      </div>
    </div>
  )
}

export default EducationBlock
