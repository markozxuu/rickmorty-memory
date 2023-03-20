import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
  test('should show the <Button> component', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeDefined();
  });
  test('should render with "secondary" type', () => {
    const { getByText } = render(<Button label="Home" type="secondary" />);
    const btnElement = getByText('Home');
    expect(btnElement).toHaveClass('secondary');
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button label="Play game" onClick={handleClick} />,
    );
    const btnElement = getByText('Play game');
    fireEvent.click(btnElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
