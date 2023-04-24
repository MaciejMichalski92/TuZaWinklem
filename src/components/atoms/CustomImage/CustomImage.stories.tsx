import type { Meta } from '@storybook/react';

import { CustomImage } from './CustomImage';

// ToDo: ts path is not working with the storybook. Fix it
import imageFile from './../../../../public/testImage.jpg';

const meta: Meta<typeof CustomImage> = {
  title: 'CustomImage',
  component: CustomImage
};

export const Default = () => (
  <CustomImage alt="test" src={imageFile} width={300} height={300} />
);

export default meta;
