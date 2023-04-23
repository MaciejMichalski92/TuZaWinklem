import { ButtonProps } from './Button.types';
import style from './Button.module.scss';

export const Button = ({
  classes,
  children,
  handleClick,
  isPrimary = true,
  ariaLabel
}: ButtonProps) => (
  <button
    data-testid="button"
    className={`${classes ? classes : ''} ${style.Button} ${
      isPrimary ? 'primaryBtn' : 'secondaryBtn'
    }`}
    name={ariaLabel}
    aria-label={ariaLabel}
    onClick={handleClick}
  >
    {children}
  </button>
);
