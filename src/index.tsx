import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider as Store } from './providers/GlobalProvider';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);