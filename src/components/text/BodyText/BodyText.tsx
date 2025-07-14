import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  className?: string,
}

const BodyText: FunctionComponent<Props> = ({ children, className }) => {
  return (
      <div
        className={`
          text-primary-text
          font-body
          ${className}
          `}
        >
        {children}
      </div>
  )
}

export default BodyText
