import { HeadingProps } from './Heading.types';

export const Heading = ({
  HeadingType,
  children,
  classes,
  isBold = true
}: HeadingProps) => (
  <HeadingType
    className={`text-font ${isBold ? 'font-bold' : ''} ${
      classes ? classes : ''
    }`}
  >
    {children}
  </HeadingType>
);
