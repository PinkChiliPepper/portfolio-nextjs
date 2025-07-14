import { FunctionComponent } from "react";

const Name: FunctionComponent = () => {
  return (
    <>
      <div
      className="
        text-primary-text-light
        font-primary
        text-[2.5rem]
        translate-y-[16px]
        "
      >
      Hi there, I'm
    </div>
    <div
      className="
        text-secondary-text
        font-primary
        text-[5rem]
        font-bold
        "
      >
      Jessie van den Akker
    </div>
    <div
      className="
        text-tertiary-text
        font-primary
        text-[2.5rem]
        translate-y-[-16px]
        "
      >
      Software developer
    </div>
    </>
  )
}

export default Name
