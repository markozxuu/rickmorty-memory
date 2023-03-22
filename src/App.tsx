import { Router } from '@reach/router';

// Pages
import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Home path="/" />
    <Game path="/juego" />
    <NotFound default />
  </Router>
);

export default App;
