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
  children,
  width,
  height
}: ImageWrapperProps) => (
  <div
    style={{ width: width, height: 'auto' }}
    className={style.ImageWrapper}
  >
    {children}
  </div>
);
