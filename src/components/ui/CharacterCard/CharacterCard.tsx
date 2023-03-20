import { useState, useEffect } from 'react';
import cx from 'clsx';

// Utils
import { FLIPPED_FIRST_MILE_SECONDS } from '@/utils/const';
// Types
import { Character } from '@/types';

import './characterCard.scss';

interface CharacterCardProps {
  character: Character;
  isFlipped: boolean;
  handleClick: (index: number) => void;
  index: number;
  matched: (string | number)[];
  defaultActive: boolean;
}

const CharacterCard = ({
  character,
  isFlipped,
  index,
  handleClick,
  matched,
  defaultActive,
}: CharacterCardProps) => {
  const { image, name, species, status } = character;

  const [isShowBoard, setShowBoard] = useState(true);

  useEffect(() => {
    if (defaultActive) return;

    // Time that flipped cards will be flipped
    if (isShowBoard) {
      setTimeout(() => {
        setShowBoard(false);
      }, FLIPPED_FIRST_MILE_SECONDS);
    }
  }, []);
  return (
    <div
      data-testid="character-card"
      className={cx('rickmorty-card', {
        flipped: isShowBoard || isFlipped,
        'default-active': defaultActive,
      })}
      onClick={() => handleClick(index)}
    >
      <div className="inner">
        <div
          className={cx('front', {
            disappear: matched.includes(character.id),
          })}
        >
          <img className="avatar" src={`${image}`} alt={`Avatar de ${name}`} />
          <div className="info">
            <p className="character-name">{name}</p>
            <p className="character-info">
              {status} - {species}
            </p>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default CharacterCard;
