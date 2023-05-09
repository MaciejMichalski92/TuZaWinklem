import { ReactNode } from 'react';

export interface LinkProps {
  children: ReactNode;
  isBold?: boolean;
  classes?: string;
  role?: string;
}
