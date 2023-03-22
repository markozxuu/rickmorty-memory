export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export interface CharactersResponse {
  characters: {
    results: Character[];
  };
}
