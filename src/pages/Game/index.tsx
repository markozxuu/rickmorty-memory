import { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';

// components
import Layout from '@/components/commons/Layout';
import CharacterList from './components/CharacterList';
import CongratsMessage from './components/CongratsMessage';
// Services
import { getCharacters } from '@/services/api';
// Utils
import { shuffle } from '@/utils/game';
import { CARD_FLIPPER } from '@/utils/const';
import { useCountdown } from '@/utils/useCountdown';
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

  const { minute, second, setIsActive } = useCountdown();

  const handleClick = (_index: number) => {
    setIsActive(true);

    // this prevents the user from selecting more than two cards at a time
    if (click >= 2) return;
    // prevents the bug of selecting the same card twice and finding its match
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
        <CongratsMessage turns={turns} />
      ) : (
        <>
          <section className="information">
            <p className="character-text">👏 Aciertos: {hits}</p>
            <p className="character-text">
              ⏰ Tiempo: {minute}:{second}
            </p>
            <p className="character-text">🫠 Turnos: {turns}</p>
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
