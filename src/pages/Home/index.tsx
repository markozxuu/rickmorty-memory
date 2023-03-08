import { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

// Services
import { getCharacters } from '@/services/api';

import Layout from '@/components/commons/Layout';
import CharacterList from './components/CharacterList';
import Link from '@/components/ui/Link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (props: RouteComponentProps) => {
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);

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
        <h2 style={{ margin: '24px 0' }}>Personajes</h2>
        <CharacterList characters={characters} />
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
        >
          <Link type="primary" label="jugar" path="/juego" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
