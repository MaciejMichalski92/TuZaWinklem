import type { Meta } from '@storybook/react';

import { CustomImage, ImageWrapper as ImgWrap } from './CustomImage';

// ToDo: ts path is not working with the storybook. Fix it
import imageFile from './../../../../public/testImage.jpg';

const meta: Meta<typeof CustomImage> = {
  title: 'Atoms/CustomImage',
  component: CustomImage
};

export const Default = () => (
  <CustomImage alt="test" src={imageFile} width={300} height={300} />
);

export const ImageWrapper = () => (
  <ImgWrap
    imgAlt="test"
    imgSrc={imageFile.src}
    width="100%"
    height="500px"
  />
);

export default meta;
