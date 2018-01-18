import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import radioUpdater from './radioUpdater';

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [
        promiseMiddleware(),
        require('redux-immutable-state-invariant').default(),
        thunk,
      ]
    : [promiseMiddleware(), thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

radioUpdater(store);

export default store;
