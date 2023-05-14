import type { Meta } from '@storybook/react';

import { DesktopMenu } from './DesktopMenu';

const meta: Meta<typeof DesktopMenu> = {
  title: 'Molecules/DesktopMenu',
  component: DesktopMenu
};

export const Default = () => (
  <div style={{ marginBottom: '200px' }}>
    <DesktopMenu
      isScrolledDown
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
  </div>
);

export default meta;
