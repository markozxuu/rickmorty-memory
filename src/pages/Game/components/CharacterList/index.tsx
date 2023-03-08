// Components
import CharacterCard from '../CharacterCard';
// Styles
import './characterList.scss';

import { Character } from '@/types';

interface CharacterListPros {
  characters: Character[];
  openedCard: number[];
  matched: (string | number)[];
  handleClick: (_index: number) => void;
}

const CharacterList = ({
  characters,
  openedCard,
  matched,
  handleClick,
}: CharacterListPros) => {
  return (
    <div className="card-list">
      {characters.map((character, _index) => {
        let isFlipped = false;

        if (openedCard.includes(_index)) isFlipped = true;
        if (matched.includes(character.id)) isFlipped = true;
        return (
          <CharacterCard
            key={_index}
            character={character}
            isFlipped={isFlipped}
            handleClick={handleClick}
            index={_index}
            matched={matched}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
