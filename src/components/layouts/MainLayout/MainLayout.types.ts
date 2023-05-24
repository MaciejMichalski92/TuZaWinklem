import { HeaderProps } from '@/components/molecules/Header/Header.types';
import { FooterProps } from '@/components/organisms/Footer/Footer.types';
import { MenuProps } from '@/components/organisms/Menu/Menu.types';
import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  footerProps: FooterProps;
  menuProps: MenuProps;
  headerProps: HeaderProps;
}
