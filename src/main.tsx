import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@Store/index.ts';

import App from './App';
import './index.css';

const $elemnt = document.getElementById('root') as HTMLElement;
const root = createRoot($elemnt);

const MoviesApp = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

root.render(MoviesApp);
