import NextImage from "next/image";
import { FunctionComponent } from "react";

interface Props {
  imageName: string,
  alt: string,
}

const Image: FunctionComponent<Props> = ({ imageName, alt, ...rest }) => {
  return (
    <NextImage src={`/images/${imageName}`}
      alt={alt}
      width="200"
      height="200"
      {...rest}
    />
  )
}

export default Image
