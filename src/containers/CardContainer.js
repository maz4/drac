import React from 'react';
import styles from './CardContainer.module.css';
import DescriptionComponent from '../components/DescriptionComponent';

const CardContainer = (props) => {
  return(
    <div className={styles.CardContainer}>
      <div className={styles.CardImage}>
        <img alt="img" src="https://d1xkhapf8f3lxw.cloudfront.net/api/images/Cardshop/1/product/PU1162" />
      </div>
      <DescriptionComponent title={'Temp title'} desc={'temp desc'}/>
    </div>
  )
}

export default CardContainer;