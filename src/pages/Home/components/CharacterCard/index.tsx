import { Character } from '@/types';

// Styles
import './characterCard.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { image, name, species, status } = character;
  return (
    <div className="card">
      <img src={image} height={180} width={180} />
      <p>{name}</p>
      <p>
        {status} - {species}
      </p>
    </div>
  );
};

export default CharacterCard;
