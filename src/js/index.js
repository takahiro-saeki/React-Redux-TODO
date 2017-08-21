import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import App from './containers/App/';
import configureStore from './store/configureStore';

document.body.style.margin = 0;

configureStore().runSaga;

if (process.env.NODE_ENV === 'development') {
  const ren = elem => {
    render(
      <AppContainer>
        <Provider store={configureStore()}>
          <Router>
            <div>
              <Route exact path="/" component={App}/>
            </div>
          </Router>
        </Provider>
      </AppContainer>, document.getElementById(elem));
  };
  ren('app');
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextRootContainer = require('./containers/App').default;
      render(<NextRootContainer />, document.getElementById('app'));
    })
  }
} else {
  const ren = elem => {
    render(
      <AppContainer>
        <Provider store={configureStore()}>
          <App />
        </Provider>
      </AppContainer>, document.getElementById(elem));
  };
  ren('app');
}
