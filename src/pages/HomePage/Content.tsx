import TitleBox from "@/components/boxes/TitleBox";
import BodyText from "@/components/text/BodyText";
import { FunctionComponent } from "react";

const Content: FunctionComponent = () => {
  const calculateAge = (birthDate: Date) => {
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    const dayDiff = today.getDate() - birthDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }

    return age
  }

  return (
    <div className='flex flex-col gap-12'>
      <TitleBox title="About me">
        <BodyText>
          {`Hello! I'm Jessie, ${calculateAge(new Date('2000-08-17'))} years old, and I live in Leeuwarden with my husband and our two budgies.
                Since 2021, I've been working as a software developer. I hold a BSc in Computer Science from
                Utrecht University and an MSc in Software Engineering from the University of Amsterdam.
                  `}
        </BodyText>
        <BodyText>
          {`I love working on creative projects — outside of work that means drawing, painting, sculpting,
                or whatever catches my interest. At work, I enjoy building scalable, reusable solutions, and
                I have a strong interest in UI and UX as well. I definitely have a soft spot for frontend development.`}
        </BodyText>
      </TitleBox>

      <TitleBox title="Stack">
        <div>
          <BodyText>
            <span className="text-primary-text-light pr-1">Frontend:</span> Next.js (TypeScript), React Hook Form, TanStack Query, Redux Toolkit, Material UI
          </BodyText>
          <BodyText>
            <span className="text-primary-text-light pr-1">Backend:</span> Django, Django Tastypie, Django unittest
          </BodyText>
          <BodyText>
            <span className="text-primary-text-light pr-1">Integratie tests:</span> behave, selenium
          </BodyText>
        </div>
      </TitleBox >

    </div>
  )
}

export default Content
