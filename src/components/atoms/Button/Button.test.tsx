import { Button } from './Button';
import { screen, render, fireEvent } from '@testing-library/react';
import text from '../../../config/texts';

const {
  common: {
    entryButton: { buttonText, label }
  }
} = text;

const mockedFunction = jest.fn();

describe('Button', () => {
  beforeEach(() => {
    render(
      <Button
        data-testid="button"
        ariaLabel={label}
        handleClick={mockedFunction}
      >
        {buttonText}
      </Button>
    );
  });

  it('should render', () => {
    const btn = screen.getByTestId('button');
    expect(btn).toBeInTheDocument();
  });

  it('should invoke function after user click', () => {
    const btn = screen.getByTestId('button');
    expect(mockedFunction).toBeCalledTimes(0);
    fireEvent.click(btn);
    expect(mockedFunction).toBeCalledTimes(1);
  });
});
