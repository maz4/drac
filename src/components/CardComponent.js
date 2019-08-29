import React from 'react';
import styles from './CardComponent.module.css';

const CardComponent = (props) => {
    return (
        <div className={styles.Card}>
            <a href={props.cardUrl}>
                <img src={props.imgLink} alt={props.imgDesc} />
                <h2>{props.title}</h2>
            </a>
        </div>
    );
};

export default CardComponent;