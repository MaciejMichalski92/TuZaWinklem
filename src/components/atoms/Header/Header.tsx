import { HeaderProps } from './Header.types';

export const Header = ({
  HeaderType,
  children,
  classes,
  isBold = true
}: HeaderProps) => (
  <HeaderType
    className={`text-font ${isBold ? 'font-bold' : ''} ${
      classes ? classes : ''
    }`}
  >
    {children}
  </HeaderType>
);
