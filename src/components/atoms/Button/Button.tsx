import { ButtonProps } from './Button.types';
import style from './Button.module.scss';

export const Button = ({
  classes,
  children,
  handleClick,
  ariaLabel
}: ButtonProps) => (
  <button
    data-testid="button"
    className={`${classes ? classes : ''} ${style.Button}`}
    name={ariaLabel}
    aria-label={ariaLabel}
    onClick={handleClick}
  >
    {children}
  </button>
);
