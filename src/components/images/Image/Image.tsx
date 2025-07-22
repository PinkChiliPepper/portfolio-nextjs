import NextImage from "next/image";
import { FunctionComponent } from "react";

export interface ImageProps {
  imageName: string,
  alt: string,
}

const Image: FunctionComponent<ImageProps> = ({ imageName, alt, ...rest }) => {
  return (
    <NextImage src={`${process.env.BASE_PATH}/images/${imageName}`}
      alt={alt}
      width="200"
      height="200"
      {...rest}
    />
  )
}

export default Image
