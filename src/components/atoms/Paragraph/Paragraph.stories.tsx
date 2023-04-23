import { Meta } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Paragraph',
  component: Paragraph
};

export const Default = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
    excepturi natus amet aperiam reiciendis ducimus corporis nobis
    sunt quo, cum doloribus ipsa aspernatur quos. Illum quo
    voluptatem possimus doloremque! Est.
  </Paragraph>
);

export default meta;
