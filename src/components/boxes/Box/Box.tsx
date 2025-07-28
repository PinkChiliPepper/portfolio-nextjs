import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  className: string,
}

const Box: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div style={{ width: '100%' }} className={`p-8 border-2 border-primary-text-light bg-white rounded-3xl ${className}`}>
      {children}
    </div>
  )
}

export default Box
