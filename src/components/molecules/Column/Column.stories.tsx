import type { Meta } from '@storybook/react';

import { Column } from './Column';
import CustomLink from '@/components/atoms/CustomLink';

const meta: Meta<typeof Column> = {
  title: 'Molecules/Column',
  component: Column
};

export const Default = () => (
  <Column columnTitle="Company info">
    <CustomLink href="#">About us</CustomLink>
    <CustomLink href="#">Carrier</CustomLink>
    <CustomLink href="#">We are hiring</CustomLink>
    <CustomLink href="#">Blog</CustomLink>
  </Column>
);

export default meta;
