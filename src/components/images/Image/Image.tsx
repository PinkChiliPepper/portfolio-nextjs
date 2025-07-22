import NextImage, { ImageProps as NextImageProps } from "next/image";
import { FunctionComponent } from "react";

export interface ImageProps extends Omit<NextImageProps, 'src'> {
  imageName: string,
}

const Image: FunctionComponent<ImageProps> = ({ imageName, alt, ...rest }) => {
  return (
    <NextImage
      src={`${process.env.BASE_PATH}/images/${imageName}`}
      alt={alt}
      width={0}
      height={0}
      style={{ width: '100%', height: 'auto' }}
      {...rest}
    />
  )
}

export default Image
