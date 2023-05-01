import type { Meta } from '@storybook/react';

import { Header } from './Header';
import imageFile from '../../../../public/testImage.jpg';

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header
};

export const Default = () => (
  <Header
    title="Lorem"
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatem."
    imgSrc={imageFile.src}
    imgAlt="test"
  />
);

export default meta;
