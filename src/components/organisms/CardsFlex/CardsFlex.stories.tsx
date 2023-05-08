import type { Meta } from '@storybook/react';

import { CardsFlex } from './CardsFlex';
import CardCity from '@/components/molecules/CardCity';
import imageFile from '@public/testImage.jpg';

const meta: Meta<typeof CardsFlex> = {
  title: 'Organisms/CardsFlex',
  component: CardsFlex
};

export const Default = () => (
  <CardsFlex title="Ipsum dolor sit." mainUrl="#">
    <CardCity
      linkUrl="#"
      title="Ipsum dolor sit."
      subtitle="Lorem"
      imgSrc={imageFile.src}
      imgAlt="test"
    />
    <CardCity
      linkUrl="#"
      title="Ipsum dolor sit."
      subtitle="Lorem"
      imgSrc={imageFile.src}
      imgAlt="test"
    />
    <CardCity
      linkUrl="#"
      title="Ipsum dolor sit."
      subtitle="Lorem"
      imgSrc={imageFile.src}
      imgAlt="test"
    />
    <CardCity
      linkUrl="#"
      title="Ipsum dolor sit."
      subtitle="Lorem"
      imgSrc={imageFile.src}
      imgAlt="test"
    />
    <CardCity
      linkUrl="#"
      title="Ipsum dolor sit."
      subtitle="Lorem"
      imgSrc={imageFile.src}
      imgAlt="test"
    />
  </CardsFlex>
);

export default meta;
