import { ReactNode } from 'react';

export interface CustomImageProps {
  classes?: string;
}

export interface ImageWrapperProps {
  children: ReactNode;
  width: string;
  height?: string;
}
