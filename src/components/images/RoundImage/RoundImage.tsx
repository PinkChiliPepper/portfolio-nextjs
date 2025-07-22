import Image from "@/components/images/Image"
import { ImageProps } from "@/components/images/Image/Image"
import { FunctionComponent } from "react"

const RoundImage: FunctionComponent<ImageProps> = (props) => {
  return (
    <div className='rounded-full border-2 border-tertiary-text'>
      <div className='rounded-full border-2 border-secondary-text translate-x-5 translate-y-2.5'>
        <div className='rounded-full border-2 border-primary-text-light translate-x-6 translate-y-3'>
          <Image {...props} className="rounded-full border-5 border-tertiary-text" />
        </div>
      </div>
    </div>
  )
}

export default RoundImage
