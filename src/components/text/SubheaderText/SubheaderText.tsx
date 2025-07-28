import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  className?: string,
}

const SubheaderText: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div
      className={`
          text-secondary-text
          font-primary
          text-[1.1rem]
          font-bold
          ${className}
          `}
    >
      {children}
    </div>
  )
}

export default SubheaderText
