import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import CoreLayout from './layouts/CoreLayout';
import HomeContainer from './containers/HomeContainer';
import './styles/styles.scss';
import reducers from './reducers/index';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = finalCreateStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextReducer);
  });
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={CoreLayout}>
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
