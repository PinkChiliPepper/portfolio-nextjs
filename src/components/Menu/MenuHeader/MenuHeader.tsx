import HeaderText from "@/components/text/HeaderText";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  href: string,
}

const MenuHeader: FunctionComponent<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <HeaderText
        className="
          m-2
          hover:text-primary-text-hover
          hover:scale-105
          "
        >
        {children}
      </HeaderText>
    </Link>
  )
}

export default MenuHeader
