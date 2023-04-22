import { Button } from './Button';
import {
  screen,
  render,
  cleanup,
  logRoles
} from '@testing-library/react';
import text from '../../../config/texts';

const {
  common: {
    entryButton: { buttonText, label }
  }
} = text;

describe('Button', () => {
  beforeEach(() => {
    render(
      <div data-testid="test">
        Wejdź
        <Button ariaLabel={'label'} handleClick={jest.fn()}>
          {buttonText}
        </Button>
      </div>
    );
    screen.debug();
    cleanup();
  });
  it('should render', () => {
    // const btn = screen.getByText('test');
    // expect(btn).toBeVisible();
  });
});
