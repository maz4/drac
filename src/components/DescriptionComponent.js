import React from 'react';
import ButtonComponent from './ButtonComponent';
import styles from './DescriptionComponent.module.css';

const DescriptionComponent = (props) => {
  return (
    <div className={styles.Description}>
      <div className={styles.DescriptionElements}>
        <h1 className={styles.Description__Title}>{props.title}</h1>
        <div className={styles.Description__Content} dangerouslySetInnerHTML={{__html: props.desc}}></div>
      </div>
      <ButtonComponent />
    </div>
  )
};

export default DescriptionComponent;