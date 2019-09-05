import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import reducers from '../reducers/reducers';
import App from '../components/App';

const store = createStore(reducers);

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