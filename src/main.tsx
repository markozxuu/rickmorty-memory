import { createRoot } from 'react-dom/client';

// Components
import App from './App';
// Global styles
import './global.css';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
