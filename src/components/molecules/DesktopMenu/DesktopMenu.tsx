import { DesktopMenuProps } from './DesktopMenu.types';
import style from './DesktopMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';

export const DesktopMenu = ({
  navigationItems
}: DesktopMenuProps) => {
  const menuItems = navigationItems.map(
    ({ href, title, subMenu, submenuRole }, idx) => {
      if (href && !subMenu)
        return (
          // toDo make LI atom
          <li role="none" key={idx + title}>
            <CustomLink href={href} role="menuitem">
              {title}
            </CustomLink>
          </li>
        );
      else
        return (
          <li role="none">
            <span>{title}</span>
            <ul role={submenuRole}>
              {subMenu?.map(({ title, href }) => (
                <li role="none" key={idx + title}>
                  <CustomLink isBold href={href} role="menuitem">
                    {title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </li>
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
