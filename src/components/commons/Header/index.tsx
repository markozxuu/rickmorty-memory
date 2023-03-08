// Assest
import logo from '@/assets/images/ricky_morty_logo.svg';

import './header.scss';

const Header = () => (
  <header className="container">
    <img src={logo} className="logo" alt="logo de rick and mort" />
    <h1 className="label">Juego de memoria</h1>
  </header>
);

export default Header;
