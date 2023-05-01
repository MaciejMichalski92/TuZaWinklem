import { Meta, StoryObj } from '@storybook/react';
import { CustomLink } from './Link';
import { Heading } from '@/components/atoms/Heading/Heading';

const meta: Meta<typeof CustomLink> = {
  title: 'Atoms/Links',
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

export const HeadingLink: Story = {
  args: {
    children: <Heading HeadingType="h2">Lol</Heading>,
    classes: 'testClass'
  }
};

export default meta;
