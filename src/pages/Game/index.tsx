import { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Confetti from 'react-confetti';
import useMeasure from 'react-use-measure';

// components
import Layout from '@/components/commons/Layout';
import CharacterList from './components/CharacterList';
import CongratsMessage from './components/CongratsMessage';
// Services
import { getCharacters } from '@/services/rick_morty';
// Utils
import { shuffle } from '@/utils/game';
import { CARD_FLIPPER_MILE_SECONDS } from '@/utils/const';
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

  const { minute, second, setIsActive, setMinute, setSecond, setCounter } =
    useCountdown();
  const [ref, bound] = useMeasure();

  const handleClick = (_index: number) => {
    setIsActive(true);

    // this prevents the user from selecting more than two cards at a time
    if (click >= 2) return;
    // prevents the bug of selecting the same card twice and finding its match
    if (openedCard.includes(_index)) return;

    setOpenedCard((opened) => [...opened, _index]);
    setClick(click + 1);
  };

  const handleReset = () => {
    setHits(0);
    setTurns(0);
    setOpenedCard([]);
    setMatched([]);
    setClick(0);
    setIsActive(false);
    setMinute('00');
    setSecond('00');
    setCounter(0);
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
    }, CARD_FLIPPER_MILE_SECONDS);
  }, [openedCard]);

  return (
    <section ref={ref}>
      <Layout>
        {hits === 6 ? (
          <>
            <Confetti height={bound.height} width={bound.width} />
            <CongratsMessage resetGame={handleReset} turns={turns} />
          </>
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
    </section>
  );
};

export default Game;
