import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  className?: string,
}

const HeaderText: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div
      className={`
          text-primary-text
          font-primary
          text-[1.75rem]
          font-bold
          ${className}
          `}
    >
      {children}
    </div>
  )
}

export default HeaderText
