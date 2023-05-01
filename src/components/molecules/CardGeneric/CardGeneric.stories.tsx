import type { Meta } from '@storybook/react';

import { CardGeneric } from './CardGeneric';
import imageFile from '../../../../public/testImage.jpg';

const meta: Meta<typeof CardGeneric> = {
  title: 'Molecules/CardGeneric',
  component: CardGeneric
};

export const Default = () => (
  <CardGeneric
    linkUrl="#"
    title="Ipsum dolor sit."
    subtitle="Lorem"
    imgSrc={imageFile.src}
    imgAlt="test"
  />
);

export default meta;
