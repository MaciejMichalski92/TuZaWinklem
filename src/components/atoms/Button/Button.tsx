import { ButtonProps } from './Button.types';
import style from './Button.module.scss';

export const Button = ({
  classes,
  children,
  handleClick,
  isPrimary = true,
  ariaLabel,
  isDisabled = false
}: ButtonProps) => (
  <button
    data-testid="button"
    className={`${classes ? classes : ''} ${style.Button} ${
      isPrimary ? style.primaryBtn : style.secondaryBtn
    } ${isDisabled ? style.disabled : ''}`}
    disabled={isDisabled}
    name={ariaLabel}
    aria-label={ariaLabel}
    onClick={handleClick}
  >
    {children}
  </button>
);
