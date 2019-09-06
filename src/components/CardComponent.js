import React from 'react';
import styles from './CardComponent.module.css';
import { connect } from 'react-redux';
import { selectCard } from '../actions/actions';

const CardComponent = (props) => {

  return (
    <div className={styles.Card}>
      <a href={" /card/" + props.MoonpigProductNo} onClick={props.onClickHandler}>
        <img src={props.imgLink} alt={props.imgDesc} data-cardno={props.MoonpigProductNo} />
        <h2>{props.title}</h2>
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (cardNo) => dispatch(selectCard(cardNo))
  }
}

export default connect(null, mapDispatchToProps)(CardComponent);