import { DesktopMenuProps } from './DesktopMenu.types';
import style from './DesktopMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';
import { ListItem } from '@/components/atoms/ListItem/ListItem';

export const DesktopMenu = ({
  navigationItems
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
      aria-label="Tu Za Winklem, główne menu"
      className={style.DesktopMenu}
    >
      <ul role="menubar" className={style.MenuBar}>
        {menuItems}
      </ul>
    </nav>
  );
};
