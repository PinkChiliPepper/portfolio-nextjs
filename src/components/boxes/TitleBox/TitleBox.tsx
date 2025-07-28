import Box from "@/components/boxes/Box";
import HeaderText from "@/components/text/HeaderText";
import SubheaderText from "@/components/text/SubheaderText";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  title: string,
  subtitle?: string,
}

const TitleBox: FunctionComponent<Props> = ({ children, title, subtitle }) => {
  return (
    <Box className='flex flex-col gap-6'>
      <div>
        <HeaderText className='text-primary-text-light'>
          {title}
        </HeaderText>
        {subtitle && (
          <SubheaderText>
            {subtitle}
          </SubheaderText>
        )}
      </div>
      {children}
    </Box>
  )
}

export default TitleBox
