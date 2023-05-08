import { FooterProps } from './Footer.types';
import style from './Footer.module.scss';
import Column from '@/components/molecules/Column';
import { pageTexts } from '@/config/texts/texts';
import ListItem from '@/components/atoms/ListItem';
import CustomLink from '@/components/atoms/CustomLink';
import { useMemo } from 'react';
import { CustomImage } from '@/components/atoms/CustomImage/CustomImage';
import imageFile from '@public/testLogo.png';

const {
  footer: { infoTitle, contactTitle, offertTitle, logoAlt }
} = pageTexts;

export const Footer = ({
  contactLinks,
  infoLinks,
  offertLinks
}: FooterProps) => {
  const contactLinksMapped = useMemo(
    () =>
      contactLinks.map(({ href, id, text }) => (
        <ListItem key={id}>
          <CustomLink href={href}>{text}</CustomLink>
        </ListItem>
      )),
    []
  );

  const infoLinksMapped = useMemo(
    () =>
      infoLinks.map(({ href, id, text }) => (
        <ListItem key={id}>
          <CustomLink href={href}>{text}</CustomLink>
        </ListItem>
      )),
    []
  );

  const offertLinksMapped = useMemo(
    () =>
      offertLinks.map(({ href, id, text }) => (
        <ListItem key={id}>
          <CustomLink href={href}>{text}</CustomLink>
        </ListItem>
      )),
    []
  );

  return (
    <footer className={style.Footer}>
      <Column>
        {<CustomImage src={imageFile} alt={logoAlt} />}
      </Column>
      <Column isNavigation columnTitle={contactTitle}>
        {contactLinksMapped}
      </Column>
      <Column isNavigation columnTitle={infoTitle}>
        {infoLinksMapped}
      </Column>
      <Column isNavigation columnTitle={offertTitle}>
        {offertLinksMapped}
      </Column>
    </footer>
  );
};
