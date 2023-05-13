import type { Meta } from '@storybook/react';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Atoms/ListItem',
  component: ListItem
};

export const Default = () => (
  <ListItem classes="m-2">
    <a href="#" target="_blank" rel="noopener noreferrer">
      ListItem Demo
    </a>
  </ListItem>
);

export default meta;
