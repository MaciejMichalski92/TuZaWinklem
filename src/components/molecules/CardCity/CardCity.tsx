import { CardCityProps } from './CardCity.types';
import style from './CardCity.module.scss';
import { ImageWrapper } from '@/components/atoms/CustomImage';
import CustomLink from '@/components/atoms/CustomLink';

export const CardCity = ({
  imgSrc,
  imgAlt,
  height = '200px',
  title,
  subtitle,
  linkUrl
}: CardCityProps) => (
  <CustomLink href={linkUrl}>
    <div className={style.CardCity}>
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
      </div>
    </div>
  </CustomLink>
);
