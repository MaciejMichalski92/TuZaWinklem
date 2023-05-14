import dynamic from 'next/dynamic';
import { MenuProps } from './Menu.types';
import style from './Menu.module.scss';

const DesktopMenu = dynamic(
  () => import('@/components/molecules/DesktopMenu'),
  // toDo loader component
  { loading: () => <p>Ładowanie...</p> }
);
const MobileMenu = dynamic(
  () => import('@/components/molecules/MobileMenu'),
  // toDo loader component
  { loading: () => <p>Ładowanie...</p> }
);

export const Menu = ({
  isMobile,
  navigationItems,
  contentIsIntersecting
}: MenuProps) => {
  return isMobile ? (
    <MobileMenu navigationItems={navigationItems} />
  ) : (
    <DesktopMenu
      isScrolledDown={contentIsIntersecting}
      navigationItems={navigationItems}
    />
  );
};
