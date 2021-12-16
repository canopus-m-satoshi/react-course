import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextPrivider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextPrivider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextPrivider>,
  document.getElementById('root'),
);
