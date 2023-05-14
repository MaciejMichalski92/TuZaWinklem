import { FooterProps } from '@/components/organisms/Footer/Footer.types';
import { MenuProps } from '@/components/organisms/Menu/Menu.types';
import { ReactNode } from 'react';

export interface MainLayoutProps {
  headerImgSrc: string;
  children: ReactNode;
  // toDo add cache to footer and menu info (react toolkit query)
  footerProps: FooterProps;
  menuProps: MenuProps;
}
