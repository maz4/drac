import React from 'react';
import styles from './CardComponent.module.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { selectCard } from '../actions/actions'

const CardComponent = (props) => {

  return (
    <div className={styles.Card}>
      <Link onClick={ () => { props.selectCard(props.id) }} 
            to={"/card/" + props.id}>
          <img src={props.imgLink} alt={props.title}/>
          <h2>{props.title}</h2>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (cardId) => dispatch(selectCard(cardId))
  }
}

export default connect(null, mapDispatchToProps)(CardComponent);