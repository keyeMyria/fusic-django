import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { WebSocketBridge } from 'django-channels';

import wsBridgeMiddleware from './wsBridgeMiddleware';
import reducers from './reducers';

// make a single persistent websocket connection
const ws = new WebSocketBridge();
ws.connect('/api/ws', undefined, { debug: true });

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [
        require('redux-immutable-state-invariant').default(),
        promiseMiddleware(),
        thunk,
        wsBridgeMiddleware(ws, 'radios'),
      ]
    : [promiseMiddleware(), thunk, wsBridgeMiddleware(ws, 'radios')];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
