import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import reducers from './reducers';

import radioUpdater from './radioUpdater';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default()]
    : [];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

radioUpdater(store);

registerServiceWorker();
