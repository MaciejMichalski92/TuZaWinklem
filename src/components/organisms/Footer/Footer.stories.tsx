import type { Meta } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer
};

export const Default = () => (
  <Footer
    contactLinks={[
      {
        id: '56566ddd7',
        href: '#',
        text: 'Lorem'
      },
      {
        id: '1',
        href: '#',
        text: 'Lorem'
      },
      {
        id: '2',
        href: '#',
        text: 'Lorem'
      }
    ]}
    infoLinks={[
      {
        id: '43',
        href: '#',
        text: 'Lorem'
      },
      {
        id: '4444',
        href: '#',
        text: 'Lorem'
      }
    ]}
    offertLinks={[
      {
        id: '555',
        href: '#',
        text: 'Lorem'
      },
      {
        id: '7777',
        href: '#',
        text: 'Lorem'
      },
      {
        id: '4',
        href: '#',
        text: 'Lorem'
      }
    ]}
  />
);

export default meta;
