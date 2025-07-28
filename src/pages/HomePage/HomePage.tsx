import RoundImage from "@/components/images/RoundImage/RoundImage";
import Content from "@/pages/HomePage/Content";
import Name from "@/pages/HomePage/Name";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '6rem',
      }}>

        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          <Name />
          <Content />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ margin: '6rem' }}>
            <RoundImage
              imageName="me_with_duck.jpg"
              alt="Me with a duck"
              circleWidth="650px"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage
