import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  className: string,
}

const Box: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div className={`p-8 border-2 border-tertiary-text rounded-3xl ${className}`}>
      {children}
    </div>
  )
}

export default Box
