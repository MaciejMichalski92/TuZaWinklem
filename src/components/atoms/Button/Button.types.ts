import type { Aria } from '@/helpers/commonTypes/ariaTypes';
import { ReactEventHandler, ReactNode } from 'react';

export interface ButtonProps extends Aria {
  children: ReactNode;
  handleClick: ReactEventHandler;
  classes?: string;
  isPrimary?: boolean;
  isDisabled?: boolean;
}
