import type { Meta } from '@storybook/react';

import { DesktopMenu } from './DesktopMenu';

const meta: Meta<typeof DesktopMenu> = {
  title: 'Molecules/DesktopMenu',
  component: DesktopMenu
};

export const Default = () => (
  <DesktopMenu
    navigationItems={[
      { title: 'Strona główna', href: '#' },
      {
        title: 'Targi',
        subMenu: [
          { href: '#', title: 'Wszystkie Targi' },
          { title: 'Mazowsze', href: '#' }
        ],
        submenuRole: 'Targi'
      },
      {
        title: 'Locals',
        subMenu: [
          { href: '#', title: 'Wszyscy Localsi' },
          { title: 'Mazowsze', href: '#' }
        ],
        submenuRole: 'Locals'
      }
    ]}
  />
);

export default meta;
