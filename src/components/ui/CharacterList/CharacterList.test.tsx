import { render } from '@testing-library/react';

import CharacterList from './CharacterList';

describe('CharacterList', () => {
  test('renders 12 CharacterCard', () => {
    const mockData = new Array(12).fill({
      id: '1',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick',
      species: 'Human',
      status: 'Alive',
    });

    const { getAllByTestId } = render(
      <CharacterList characters={mockData} defaultActive={false} />,
    );
    const characterCards = getAllByTestId('character-card');

    expect(characterCards).toHaveLength(12);
  });
});
