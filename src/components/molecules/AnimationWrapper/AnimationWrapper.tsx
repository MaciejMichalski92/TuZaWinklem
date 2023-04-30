import { AnimationWrapperProps } from './AnimationWrapper.types';
import style from './AnimationWrapper.module.scss';
import { useEffect, useRef } from 'react';

export const AnimationWrapper = ({
  children,
  animationClass
}: AnimationWrapperProps) => {
  const elementRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      const childNodes = elementRef.current.childNodes;

      const observer = new IntersectionObserver(entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        })
      );

      elementRef.current.childNodes.forEach(el =>
        observer.observe(el as Element)
      );
    }
  }, [animationClass, elementRef]);

  return (
    <div ref={elementRef} className={style.AnimationWrapper}>
      {children}
    </div>
  );
};
