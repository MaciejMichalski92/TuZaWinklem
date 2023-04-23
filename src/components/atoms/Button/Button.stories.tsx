import type { Meta } from '@storybook/react';
import { Button } from './Button';
import text from '@/config/texts';

const {
  common: {
    entryButton: { buttonText, label }
  }
} = text;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export const Default = () => (
  <Button ariaLabel={label} handleClick={() => console.log('click')}>
    {buttonText}
  </Button>
);

export const Secondary = {
  args: {
    ariaLabel: label,
    handleClick: () => console.log('click'),
    isPrimary: false,
    children: buttonText
  }
};

export const Disabled = {
  args: {
    ariaLabel: label,
    handleClick: () => console.log('click'),
    isPrimary: false,
    children: buttonText,
    isDisabled: true
  }
};

export default meta;
