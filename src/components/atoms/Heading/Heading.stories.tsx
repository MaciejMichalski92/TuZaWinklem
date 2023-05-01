import React from 'react';
import { Heading } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    isBold: {
      control: { type: 'boolean' }
    }
  }
};

type Story = StoryObj<typeof Heading>;

export const Default = () => (
  <Heading HeadingType="h1">Tytuł 1</Heading>
);

export const Heading2: Story = {
  args: { HeadingType: 'h2', children: 'Tytuł 2' }
};

export const Heading3: Story = {
  args: { HeadingType: 'h3', children: 'Tytuł 3' }
};

export const Heading4: Story = {
  args: { HeadingType: 'h4', children: 'Tytuł 4' }
};

export const Heading5: Story = {
  args: { HeadingType: 'h5', children: 'Tytuł 5' }
};

export const Heading6: Story = {
  args: { HeadingType: 'h6', children: 'Tytuł 6' }
};

export default meta;
