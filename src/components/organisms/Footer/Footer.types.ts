interface Link {
  id: string;
  href: string;
  text: string;
}

export interface FooterProps {
  contactLinks: Link[];
  infoLinks: Link[];
  offertLinks: Link[];
}
