import { Link } from '@reach/router';

// Components
import Button from '@/components/ui/Button';

import './congratsMessage.scss';

interface CongratsMessageProps {
  turns: number;
  resetGame: () => void;
}

const CongratsMessage = ({ turns, resetGame }: CongratsMessageProps) => {
  return (
    <section className="congrats-content">
      <h1 className="congrats-title">¡Felicitaciones!</h1>
      <p className="congrats-text">Terminastes el juego con {turns} turnos</p>

      <div className="root-buttons">
        <Button label="Repetir" onClick={resetGame} />
        <Link to="/">
          <Button label="Inicio" type="secondary" />
        </Link>
      </div>
    </section>
  );
};

export default CongratsMessage;
