/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CharacterCard from './index';

const mockData = {
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick',
  species: 'Human',
  status: 'Alive',
};

describe('CharacterCard', () => {
  test('should show the CharacterCard component', () => {
    const { getByAltText, getByText } = render(
      <CharacterCard character={mockData} />,
    );

    const avatarImg = getByAltText(`Avatar de ${mockData.name}`);
    // @ts-ignore
    expect(avatarImg).toBeInTheDocument();

    const characterName = getByText(mockData.name);
    // @ts-ignore
    expect(characterName).toBeInTheDocument();

    const characterInfo = getByText(`${mockData.status} - ${mockData.species}`);
    // @ts-ignore
    expect(characterInfo).toBeInTheDocument();
  });
});
