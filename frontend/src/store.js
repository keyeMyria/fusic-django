import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [
        promiseMiddleware(),
        require('redux-immutable-state-invariant').default(),
      ]
    : [promiseMiddleware()];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
