import { request } from 'graphql-request';

// Utils
import { API_URL } from '@/utils/const';
// Types
import { CharactersResponse } from '@/types';

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
  const data: CharactersResponse = await request(API_URL, queryCharacters);
  const firstSixCharacters = data?.characters.results.slice(0, 6) ?? [];
  const flippableCharactersPairs = firstSixCharacters?.flatMap((character) => [
    character,
    character,
  ]);
  return flippableCharactersPairs;
};
