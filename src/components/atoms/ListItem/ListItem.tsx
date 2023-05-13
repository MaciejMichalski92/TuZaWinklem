import { ListItemProps } from './ListItem.types';

export const ListItem = ({
  children,
  classes,
  ...rest
}: ListItemProps) => (
  <li className={classes ? classes : ''} {...rest}>
    {children}
  </li>
);
