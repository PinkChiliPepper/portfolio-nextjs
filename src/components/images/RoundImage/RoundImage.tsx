import Image from "@/components/images/Image"
import { ImageProps } from "@/components/images/Image/Image"
import { FunctionComponent } from "react"

interface Props extends ImageProps { }

const RoundImage: FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <div className='rounded-full border-2 border-tertiary-text'>
      <div className='rounded-full border-2 border-secondary-text translate-x-5 translate-y-2.5'>
        <Image {...rest} className="rounded-full" />
      </div>
    </div>
  )
}

export default RoundImage
