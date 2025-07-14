import Box from "@/components/boxes/Box";
import HeaderText from "@/components/text/HeaderText";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode,
  title: string,
}

const TitleBox: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <Box className='flex flex-col gap-6'>
      <HeaderText className='
      text-primary-text-light
      text-center
      '
      >
        {title}
      </HeaderText>
      {children}
    </Box>
  )
}

export default TitleBox
