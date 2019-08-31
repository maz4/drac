import React from 'react';
import { Route } from 'react-router-dom';
import CardsContainer from '../containers/CardsContainer';
import CardContainer from '../containers/CardContainer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App} >
      <Route exact path="/" component={CardsContainer} />
      <Route exact path="/card/id" component={CardContainer} />
    </div>
  )
}

export default App;