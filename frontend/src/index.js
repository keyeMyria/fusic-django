import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import IndexPage from './pages/IndexPage';
import NewPage from './pages/NewPage';
import RadioPage from './pages/RadioPage';
import ComponentsPage from './pages/ComponentsPage';

import store from './data/store';
import theme from './theme';
import './index.css';

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/new" component={NewPage} />
          <Route path="/radios/:id/" component={RadioPage} />

          {/* debugging page */}
          <Route exact path="/components" component={ComponentsPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
