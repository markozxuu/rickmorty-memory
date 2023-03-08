import { request } from 'graphql-request';

// Types
import { Characters } from '@/types';

export const queryCharacters = ` 
query {
  characters(page: 2) {
    results {
      id
      name
      status
      species
      image
    }
  }
}
`;

export const getCharacters = async () => {
  const data: Characters = await request(
    'https://rickandmortyapi.com/graphql',
    queryCharacters,
  );
  const firstSixCharacters = data?.characters.results.slice(0, 6) ?? [];
  const flippableCharacters = firstSixCharacters?.map((character) => ({
    ...character,
    flipped: false,
  }));
  const flippableCharactersPairs = flippableCharacters?.flatMap((character) => [
    character,
    character,
  ]);
  return flippableCharactersPairs ?? [];
};
