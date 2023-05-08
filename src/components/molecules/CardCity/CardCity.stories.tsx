import type { Meta } from '@storybook/react';

import { CardCity } from './CardCity';
import imageFile from '@public/testImage.jpg';

const meta: Meta<typeof CardCity> = {
  title: 'Molecules/CardCity',
  component: CardCity
};

export const Default = () => (
  <CardCity
    linkUrl="#"
    title="Ipsum dolor sit."
    subtitle="Lorem"
    imgSrc={imageFile.src}
    imgAlt="test"
  />
);

export default meta;
