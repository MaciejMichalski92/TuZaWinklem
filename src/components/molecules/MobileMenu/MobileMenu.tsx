import { MobileMenuProps } from './MobileMenu.types';
import style from './MobileMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';
import { ListItem } from '@/components/atoms/ListItem/ListItem';
import { RefObject, useRef } from 'react';

export const MobileMenu = ({ navigationItems }: MobileMenuProps) => {
  const handleGoBackToMenu = (ref: RefObject<HTMLUListElement>) => {
    if (ref.current) ref.current.style.right = '-100vw';
  };

  const handleGoToSubmenu = (ref: RefObject<HTMLUListElement>) => {
    if (ref.current) ref.current.style.right = '0';
  };

  const menuItems = navigationItems.map(
    ({ href, title, subMenu, submenuRole }, idx) => {
      // toDo change the implementation
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const submenuRef = useRef<HTMLUListElement>(null);

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
            <span onClick={() => handleGoToSubmenu(submenuRef)}>
              {title}
            </span>
            <ul
              ref={submenuRef}
              className={style.Submenu}
              role={submenuRole}
            >
              <ListItem role="none" key={idx + title}>
                <button
                  aria-label="Powrót"
                  onClick={() => handleGoBackToMenu(submenuRef)}
                >
                  Powrót
                </button>
              </ListItem>
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
      className={style.MobileMenu}
    >
      <ul role="menubar" className={style.MenuBar}>
        {menuItems}
      </ul>
    </nav>
  );
};
