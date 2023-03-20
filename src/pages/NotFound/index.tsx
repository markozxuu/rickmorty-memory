import { Link, RouteComponentProps } from '@reach/router';

// Components
import Button from '@/components/ui/Button';

import './notFound.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFound = (props: RouteComponentProps) => (
  <main className="container">
    <section>
      <h1 className="notFound-title">
        4
        <img
          className="logo"
          src="ricky_morty_img.png"
          alt="representa el numero cero"
        />
        4
      </h1>
      <div className="content-notFound">
        <p>
          La página que está intentando buscar se
          <br />
          <span>ha trasladado a otro universo.</span>
        </p>
        <Link to="/">
          <Button label="Inicio" />
        </Link>
      </div>
    </section>
  </main>
);

export default NotFound;
