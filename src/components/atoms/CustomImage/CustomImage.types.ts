import { ReactNode } from 'react';

export interface CustomImageProps {
  classes?: string;
}

export interface ImageWrapperProps {
  imgSrc: string;
  imgAlt: string;
  width: string;
  height?: string;
}
