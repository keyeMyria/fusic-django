import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import radioUpdater from './radioUpdater';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(reducers, devToolsEnhancer());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

radioUpdater(store);

registerServiceWorker();
