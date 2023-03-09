// Assest
import logo from '@/assets/images/ricky_morty_logo.svg';

import './header.scss';

const Header = () => (
  <header className="containerr">
    <img src={logo} className="logo-app" alt="logo de rick and morty" />
    <h1 className="label">Juego de memoria</h1>
  </header>
);

export default Header;
