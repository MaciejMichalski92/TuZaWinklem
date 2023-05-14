import { DesktopMenuProps } from './DesktopMenu.types';
import style from './DesktopMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';
import { ListItem } from '@/components/atoms/ListItem/ListItem';
import { pageTexts } from '@/config/texts/texts';

const {
  menu: { mainMenuAria }
} = pageTexts;
export const DesktopMenu = ({
  navigationItems,
  isScrolledDown
}: DesktopMenuProps) => {
  const menuItems = navigationItems.map(
    ({ href, title, subMenu, submenuRole }, idx) => {
      if (href && !subMenu)
        return (
          <ListItem role="none" key={idx + title}>
            <CustomLink href={href} role="menuitem">
              {title}
            </CustomLink>
          </ListItem>
        );
      else
        return (
          <ListItem role="none">
            <span>{title}</span>
            <ul className={style.Submenu} role={submenuRole}>
              {subMenu?.map(({ title, href }) => (
                <ListItem role="none" key={idx + title}>
                  <CustomLink href={href} role="menuitem">
                    {title}
                  </CustomLink>
                </ListItem>
              ))}
            </ul>
          </ListItem>
        );
    }
  );

  return (
    <nav
      aria-label={mainMenuAria}
      className={`${style.DesktopMenu} ${
        isScrolledDown ? 'bg-main' : 'bg-opacity-30 bg-font-inActive'
      }`}
    >
      <ul role="menubar" className={style.MenuBar}>
        {menuItems}
      </ul>
    </nav>
  );
};
