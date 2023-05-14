import { MobileMenuProps } from './MobileMenu.types';
import style from './MobileMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';
import { ListItem } from '@/components/atoms/ListItem/ListItem';
import { RefObject, useRef, useState } from 'react';
import { BsArrowBarLeft } from '@react-icons/all-files/bs/BsArrowBarLeft';
import { BsArrowBarRight } from '@react-icons/all-files/bs/BsArrowBarRight';
import { BiMenu } from '@react-icons/all-files/bi/BiMenu';
import { MdCancel } from '@react-icons/all-files/md/MdCancel';
import { pageTexts } from '@/config/texts/texts';

const {
  menu: { backBtn, mainMenuAria }
} = pageTexts;

export const MobileMenu = ({ navigationItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGoBackToMenu = (ref: RefObject<HTMLUListElement>) => {
    if (ref.current) ref.current.style.right = '-100vw';
  };

  const handleGoToSubmenu = (ref: RefObject<HTMLUListElement>) => {
    if (ref.current) ref.current.style.right = '0';
  };

  const menuItems = navigationItems.map(
    ({ href, title, subMenu, submenuRole }, idx) => {
      // toDo change the implementation?
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
            <span
              aria-label={title}
              onClick={() => handleGoToSubmenu(submenuRef)}
            >
              {title} <BsArrowBarRight />
            </span>
            <ul
              ref={submenuRef}
              className={style.Submenu}
              role={submenuRole}
            >
              <ListItem role="none" key={idx + title}>
                <button
                  aria-label={backBtn}
                  onClick={() => handleGoBackToMenu(submenuRef)}
                >
                  <BsArrowBarLeft size="1.5em" />
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
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
          className={style.MenuIcon}
        >
          <BiMenu size="2.5em" />
        </button>
      )}
      {isOpen && (
        <nav aria-label={mainMenuAria} className={style.MobileMenu}>
          <ul role="menubar" className={style.MenuBar}>
            <button
              className={style.MenuExitIcon}
              onClick={() => setIsOpen(false)}
            >
              <MdCancel size="1.5em" />
            </button>
            {menuItems}
          </ul>
          {/* toDo add social media icons with links */}
        </nav>
      )}
    </>
  );
};
