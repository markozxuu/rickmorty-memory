// Components
import CharacterCard from '../CharacterCard';
// Types
import { Character } from '@/types';

import './characterList.scss';

interface CharacterListPros {
  characters: Character[];
  openedCard?: number[];
  matched?: (string | number)[];
  handleClick?: (_index: number) => void;
  defaultActive: boolean;
}

const CharacterList = ({
  characters,
  openedCard = [],
  matched = [],
  handleClick = () => 0,
  defaultActive = true,
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
            defaultActive={defaultActive}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
