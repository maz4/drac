import React from 'react';
import { Route } from 'react-router-dom';
import CardsContainer from '../containers/CardsContainer';
import CardContainer from '../containers/CardContainer';
import styles from './App.module.css';
import ErrorBoundry from '../containers/ErrorBoundry';

const App = () => {
  return (
    <ErrorBoundry>
      <div className={styles.App} >
        <Route path="/card/:id" component={CardContainer} />
        <Route exact path="/" component={CardsContainer} />
      </div>
    </ErrorBoundry>
  );
};

export default App;