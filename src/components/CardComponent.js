import React from 'react';
import styles from './CardComponent.module.css';
import { Link } from 'react-router-dom';

const CardComponent = (props) => {

   return (
    <div className={styles.Card}>
      <Link to={"/card/" + props.id} >
          <img src={props.imgLink} alt={props.title}/>
          <h2>{props.title}</h2>
      </Link>
    </div>
  );
};

export default CardComponent;