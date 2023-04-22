import { HeaderProps } from './Header.types';
import style from './Header.module.scss';

export const Header = ({HeaderType, children}: HeaderProps) => (<HeaderType className={style.Header}>{children}</HeaderType>);