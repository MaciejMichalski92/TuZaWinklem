import { ReactNode } from 'react';

export type AnimationClasses = 'show' | 'hide';

export interface AnimationWrapperProps {
  children: ReactNode;
  animationClass: AnimationClasses;
}
