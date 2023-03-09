// Types
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
      <img className="avatar" src={image} alt={`Avatar de ${name}`} />
      <div className="info">
        <p className="character_name">{name}</p>
        <p className="character_info">
          {status} - {species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
