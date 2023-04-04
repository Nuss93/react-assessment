import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './views/App';
import { Provider } from 'react-redux';
import store from './stores/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
