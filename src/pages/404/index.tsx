import { RouteComponentProps } from '@reach/router';

// Components
import Link from '@/components/ui/Link';

import './notFound.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFound = (props: RouteComponentProps) => (
  <main className="container">
    <h1 className="notFound-title">
      4
      <img className="logo" src="ricky_morty_img.png" alt="logo" />4
    </h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 25,
      }}
    >
      <p>
        La página que está intentando buscar se
        <br />
        <span style={{ display: 'flex', justifyContent: 'center' }}>
          ha trasladado a otro universo.
        </span>
      </p>
      <Link type="primary" path="/" label="Inicio" />
    </div>
  </main>
);

export default NotFound;
