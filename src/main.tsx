import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/bootstrap.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.tsx';
import { StatProvider } from './contexts/statContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StatProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </StatProvider>,
);
