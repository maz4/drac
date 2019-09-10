import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';
import App from '../components/App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const Root = () => {
  return (
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  )
};

export default Root;