import { CardsFlexProps } from './CardsFlex.types';
import style from './CardsFlex.module.scss';
import Link from 'next/link';

export const CardsFlex = ({
  title,
  children,
  mainUrl
}: CardsFlexProps) => {
  return (
    <div className={style.CardsFlex}>
      <Link href={mainUrl}>
        <h2 className={style.Title}>{title}</h2>
      </Link>
      <div className={style.FlexWrapper}>{children}</div>
    </div>
  );
};
