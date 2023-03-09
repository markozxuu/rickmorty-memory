import Link from '@/components/ui/Link';

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
        <button className="btn-reset" onClick={resetGame}>
          Repetir
        </button>
        <Link type="secondary" path="/" label="inicio" />
      </div>
    </section>
  );
};

export default CongratsMessage;
