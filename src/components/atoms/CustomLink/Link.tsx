import Link, { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps } from './Link.types';

import styleLink from './Link.module.scss';

export const CustomLink = ({
  children,
  classes,
  isBold,
  href,
  ...other
}: LinkProps & NextLinkProps) => (
  <Link
    href={href}
    className={`${styleLink.Link} ${classes ? classes : ''} ${
      isBold ? 'font-bold' : ''
    }`}
    {...other}
  >
    {children}
  </Link>
);
