import { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';

// components
import Layout from '@/components/commons/Layout';
import CharacterList from './components/CharacterList';
// Services
import { getCharacters } from '@/services/api';
// Utils
import { shuffle } from '@/utils/game';
import { CARD_FLIPPER } from '@/utils/const';
// Types
import { Character } from '@/types';

import './game.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Game = (props: RouteComponentProps) => {
  const [cards, setCards] = useState<Character[]>([]);
  const [hits, setHits] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);
  const [openedCard, setOpenedCard] = useState<number[]>([]);
  const [matched, setMatched] = useState<(string | number)[]>([]);
  const [click, setClick] = useState<number>(0);

  const handleClick = (_index: number) => {
    if (click === 2) return;
    if (openedCard.includes(_index)) return;

    setOpenedCard((opened) => [...opened, _index]);
    setClick(click + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacters();
      setCards(shuffle(result));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (openedCard.length < 2) return;

    const firstMatched = cards[openedCard[0]];
    const secondMatched = cards[openedCard[1]];

    // stores the cards that match
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setHits(hits + 1);
      setMatched([...matched, firstMatched.id]);
    }

    // time that the two pairs of cards remain turned over
    setTimeout(() => {
      setOpenedCard([]);
      setClick(0);
      setTurns(turns + 1);
    }, CARD_FLIPPER);
  }, [openedCard]);

  return (
    <Layout>
      {hits === 6 ? (
        <section>
          <h1>Felicidades ganastes</h1>
          <p>efecto de confeti</p>

          <div style={{ display: 'flex' }}>
            <button>Repetir</button>
            <button>Inicio</button>
          </div>
        </section>
      ) : (
        <>
          <section className="information">
            <p className="title">Aciertos: {hits}</p>
            <p className="title">Tiempo: 02:23 min</p>
            <p className="title">Turnos: {turns}</p>
          </section>
          <CharacterList
            handleClick={handleClick}
            openedCard={openedCard}
            matched={matched}
            characters={cards}
          />
        </>
      )}
    </Layout>
  );
};

export default Game;
