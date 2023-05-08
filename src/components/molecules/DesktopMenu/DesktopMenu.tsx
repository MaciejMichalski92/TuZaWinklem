import { DesktopMenuProps } from './DesktopMenu.types';
import style from './DesktopMenu.module.scss';
import { CustomLink } from '@/components/atoms/CustomLink/Link';

export const DesktopMenu = ({
  navigationItems
}: DesktopMenuProps) => {
  const menuItems = navigationItems.map(
    ({ href, title, subMenu }, idx) => {
      if (href && !subMenu)
        return (
          // toDo make LI atom
          <li key={idx + title}>
            <CustomLink href={href} isBold>
              {title}
            </CustomLink>
          </li>
        );
      else
        return (
          <li>
            <span>{title}</span>
            <ul>
              {subMenu?.map(({ title, href }) => (
                <li key={idx + title}>
                  <CustomLink isBold href={href}>
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
    <nav>
      <ul></ul>
    </nav>
  );
};
