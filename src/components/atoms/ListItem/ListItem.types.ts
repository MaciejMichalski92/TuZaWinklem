import { ReactNode, RefObject } from 'react';

export interface ListItemProps {
  children: ReactNode;
  classes?: string;
  role?: string;
  ref?: any;
}
