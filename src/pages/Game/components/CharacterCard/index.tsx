import { useState, useEffect } from 'react';
import cx from 'clsx';

// Utils
import { FLIPPED_FIRST } from '@/utils/const';
// Types
import { Character } from '@/types';

import './characterCard.scss';

interface CharacterCardProps {
  character: Character;
  isFlipped: boolean;
  handleClick: (index: number) => void;
  index: number;
  matched: (string | number)[];
}

const CharacterCard = ({
  character,
  isFlipped,
  index,
  handleClick,
  matched,
}: CharacterCardProps) => {
  const { image, name, species, status } = character;

  const [isShowBoard, setShowBoard] = useState(true);

  useEffect(() => {
    // Time that flipped cards will be flipped
    if (isShowBoard) {
      setTimeout(() => {
        setShowBoard(false);
      }, FLIPPED_FIRST);
    }
  }, []);
  return (
    <div
      className={cx('rickmorty-card', {
        flipped: isShowBoard || isFlipped,
      })}
      onClick={() => handleClick(index)}
    >
      <div className="inner">
        <div
          className={cx('front', {
            disappear: matched.includes(character.id),
          })}
        >
          <img
            className="avatar"
            src={`${image}`}
            alt="pokemon-name"
            width={180}
            height={180}
          />

          <div className="description">
            <p className="title">{name}</p>
            <p className="text">
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
