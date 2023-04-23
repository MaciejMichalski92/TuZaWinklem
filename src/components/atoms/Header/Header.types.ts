import { ReactNode } from 'react';

export interface HeaderProps {
  children: ReactNode;
  HeaderType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isBold?: boolean;
  classes?: string;
}
