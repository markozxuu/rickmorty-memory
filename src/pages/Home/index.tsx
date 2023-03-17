import { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

// Components
import Layout from '@/components/commons/Layout';
import Link from '@/components/ui/Link';
import CharacterList from './components/CharacterList';
// Types
import { Character } from '@/types';
// Services
import { getCharacters } from '@/services/rick_morty';

import './home.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (props: RouteComponentProps) => {
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getCharacters();
      setCharacters(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <section>
        <h2 className="title">Personajes</h2>
        <CharacterList characters={characters} />
        <div className="container-link">
          <Link type="primary" label="jugar" path="/juego" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
