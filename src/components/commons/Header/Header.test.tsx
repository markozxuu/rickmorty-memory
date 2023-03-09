/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './index';

describe('Header', () => {
  test('should show the Header component only with title', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText('Juego de memoria');
    // @ts-ignore
    expect(linkElement).toBeInTheDocument();
  });
  test('should render logo image', () => {
    const pathLogo = '/src/assets/images/ricky_morty_logo.svg';

    const { getByAltText } = render(<Header />);
    const imageElement = getByAltText('logo de rick and morty');
    // @ts-ignore
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual(pathLogo);
  });
});
