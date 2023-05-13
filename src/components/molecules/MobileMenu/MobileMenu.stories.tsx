import type { Meta } from '@storybook/react';

import { MobileMenu } from './MobileMenu';

const meta: Meta<typeof MobileMenu> = {
  title: 'Molecules/MobileMenu',
  component: MobileMenu
};

export const Default = () => (
  <div style={{ marginBottom: '200px' }}>
    <MobileMenu
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
