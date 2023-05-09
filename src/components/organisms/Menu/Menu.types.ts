export interface SubMenuItem {
  href: string;
  title: string;
}
export interface NavigationItem {
  href?: string;
  title: string;
  subMenu?: SubMenuItem[];
  submenuRole?: string;
}

export interface MenuProps {}
