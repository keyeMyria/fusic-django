import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import NewPage from './pages/NewPage';
import RadioPage from './pages/RadioPage';

import store from './data/store';
import './index.css';

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/new" component={NewPage} />
        <Route path="/radios/:id/" component={RadioPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
