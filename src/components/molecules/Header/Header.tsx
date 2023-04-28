import { HeaderProps } from './Header.types';
import style from './Header.module.scss';
import { ImageWrapper } from '@/components/atoms/CustomImage';

export const Header = ({
  imgSrc,
  imgAlt,
  height = '500px',
  title,
  subtitle
}: HeaderProps) => (
  <header className={style.Header}>
    <ImageWrapper
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      width="100%"
      height={height}
    />
    <div className={style.Text}>
      <h1 className={style.Title}>{title}</h1>
      {subtitle && <p className={style.Subtitle}>{subtitle}</p>}
    </div>
  </header>
);
