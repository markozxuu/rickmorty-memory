// Components
import CharacterCard from '../CharacterCard';
// Styles
import './characterList.scss';

import { Character } from '@/types';

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
