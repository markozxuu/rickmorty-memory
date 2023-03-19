import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Link from './index';

describe('Link', () => {
  test('should show the link component', () => {
    render(<Link label="Click me" path="/about" type="primary" />);
    expect(screen.getByText('Click me')).toBeDefined();
  });
  test('should render with "secondary" type', () => {
    const { getByText } = render(
      <Link label="Home" path="/" type="secondary" />,
    );
    const linkElement = getByText('Home');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(linkElement).toHaveClass('secondary');
  });
});
