// Components
import CharacterCard from '../CharacterCard';
// Types
import { Character } from '@/types';

import './characterList.scss';

interface CharacterListPros {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListPros) => (
  <div className="card-list">
    {characters.map((character, _index) => (
      <CharacterCard key={_index} character={character} />
    ))}
  </div>
);

export default CharacterList;
