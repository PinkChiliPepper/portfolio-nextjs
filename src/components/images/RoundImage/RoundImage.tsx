/* eslint-disable jsx-a11y/alt-text */
import Image from "@/components/images/Image"
import { ImageProps } from "@/components/images/Image/Image"
import { FunctionComponent } from "react"

interface Props extends ImageProps {
  circleWidth: number | string,
}

const RoundImage: FunctionComponent<Props> = ({ circleWidth, ...rest }) => {
  return (
    <div className='rounded-full border-2 border-tertiary-text' style={{ width: circleWidth }}>
      <div className='rounded-full border-2 border-primary-text-light translate-x-4 translate-y-3'>
        <div className='rounded-full border-2 border-secondary-text translate-x-3 translate-y-2'>
          <div className='translate-x-2 translate-y-1'>
            <Image {...rest} className="rounded-full border-5 border-tertiary-text" style={{ height: circleWidth, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoundImage
