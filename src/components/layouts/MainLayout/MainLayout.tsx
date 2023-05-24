import { MainLayoutProps } from './MainLayout.types';
import style from './MainLayout.module.scss';
import Menu from '@/components/organisms/Menu';
import Header from '@/components/molecules/Header';
import ContentSeparator from '@/components/atoms/ContentSeparator';
import Footer from '@/components/organisms/Footer';
import { useEffect, useRef, useState } from 'react';

export const MainLayout = ({
  children,
  footerProps,
  menuProps,
  headerProps
}: MainLayoutProps) => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [contentIsIntersecting, setContentIsIntersecting] =
    useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      const observer = new IntersectionObserver(entries =>
        entries.forEach(entry => {
          console.log(entry.isIntersecting);

          if (entry.isIntersecting) {
            setContentIsIntersecting(false);
          } else {
            setContentIsIntersecting(true);
          }
        })
      );

      return observer.observe(elementRef.current);
    }
  }, []);

  return (
    <>
      <Menu
        {...menuProps}
        contentIsIntersecting={contentIsIntersecting}
      />
      <Header {...headerProps} />
      <div ref={elementRef}></div>
      <main>{children}</main>
      <ContentSeparator />
      <Footer {...footerProps} />
    </>
  );
};
