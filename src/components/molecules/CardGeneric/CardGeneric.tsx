import { CardGenericProps } from './CardGeneric.types';
import style from './CardGeneric.module.scss';
import { ImageWrapper } from '@/components/atoms/CustomImage';
import CustomLink from '@/components/atoms/CustomLink';
import Link from 'next/link';

export const CardGeneric = ({
  imgSrc,
  imgAlt,
  height = '200px',
  title,
  subtitle,
  linkUrl
}: CardGenericProps) => (
  <div className={style.CardGeneric}>
    <ImageWrapper
      classes="imgWrapper"
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      width="100%"
      height={height}
    />
    <div className={style.Text}>
      {subtitle && <p className={style.Subtitle}>{subtitle}</p>}
      <h3 className={style.Title}>{title}</h3>
      <Link href={linkUrl}></Link>
    </div>
  </div>
);
