import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import App from './components/app/app';
import { Provider } from 'react-redux';

import reducer from '../src/duck/reducer';

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
