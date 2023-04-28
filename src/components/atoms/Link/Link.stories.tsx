import { Meta, StoryObj } from '@storybook/react';
import { CustomLink } from './Link';
import { Header } from '@/components/atoms/Heading/Heading';

const meta: Meta<typeof CustomLink> = {
  title: 'Links',
  component: CustomLink,
  args: {
    href: '#'
  }
};

type Story = StoryObj<typeof CustomLink>;

export const Default = () => (
  <CustomLink href="#" isBold>
    Link Lorem
  </CustomLink>
);

export const HeaderLink: Story = {
  args: {
    children: <Header HeaderType="h2">Lol</Header>,
    classes: 'testClass'
  }
};

export default meta;
