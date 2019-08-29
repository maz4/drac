import React from 'react';
import styles from './ButtonComponent.module.css';

const ButtonComponent = (props) => {
  return (
    <button 
      className={styles.Btn}
      onClick={props.buyCardHandler} >
        Buy Me
    </button>
  )
};

export default ButtonComponent;