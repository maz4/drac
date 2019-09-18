import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import reducers from './reducers/reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store} >
      <Router>
          <App />
      </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
