import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CharacterCard from './CharacterCard';

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
      <CharacterCard
        character={mockData}
        index={0}
        matched={[]}
        defaultActive={false}
        handleClick={() => 0}
        isFlipped={true}
      />,
    );

    const avatarImg = getByAltText(`Avatar de ${mockData.name}`);
    expect(avatarImg).toBeInTheDocument();

    const characterName = getByText(mockData.name);
    expect(characterName).toBeInTheDocument();

    const characterInfo = getByText(`${mockData.status} - ${mockData.species}`);
    expect(characterInfo).toBeInTheDocument();
  });
});
