import Image, { ImageProps } from 'next/image';
import {
  CustomImageProps,
  ImageWrapperProps
} from './CustomImage.types';
import style from './CustomImage.module.scss';

export const CustomImage = ({
  classes,
  alt,
  ...other
}: CustomImageProps & ImageProps) => (
  <Image
    className={`${classes ? classes : ''}`}
    alt={alt}
    {...other}
  />
);

export const ImageWrapper = ({
  imgSrc,
  imgAlt,
  width,
  height = 'auto'
}: ImageWrapperProps) => (
  <div
    style={{ width: width, height }}
    className={style.ImageWrapper}
  >
    <Image src={imgSrc} alt={imgAlt} fill sizes="100vw" />
  </div>
);
