import React from 'react';
import { Header } from './Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  argTypes: {
    isBold: {
      control: { type: 'boolean' }
    }
  }
};

type Story = StoryObj<typeof Header>;

export const Default = () => (
  <Header HeaderType="h1">Tytuł 1</Header>
);

export const Header2: Story = {
  args: { HeaderType: 'h2', children: 'Tytuł 2' }
};

export const Header3: Story = {
  args: { HeaderType: 'h3', children: 'Tytuł 3' }
};

export const Header4: Story = {
  args: { HeaderType: 'h4', children: 'Tytuł 4' }
};

export const Header5: Story = {
  args: { HeaderType: 'h5', children: 'Tytuł 5' }
};

export const Header6: Story = {
  args: { HeaderType: 'h6', children: 'Tytuł 6' }
};

export default meta;
