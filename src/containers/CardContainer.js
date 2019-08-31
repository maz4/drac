import React from 'react';
import styles from './CardContainer.module.css';
import ButtonComponent from '../components/ButtonComponent';

const CardContainer = (props) => {
  return(
    <div className={styles.CardContainer}>
      <div className={styles.CardImage}>
        <img alt="img" src="https://d1xkhapf8f3lxw.cloudfront.net/api/images/Cardshop/1/product/PU1162" />
      </div>
      <div className={styles.Description}>
        <div className={styles.DescriptionElements}>
          <h1 className={styles.Description__Title}>Card title</h1>
          <p className={styles.Description__Content}>Card description</p>
        </div>
        <ButtonComponent />
      </div>
    </div>
  )
}

export default CardContainer;