import React, { Component } from 'react';
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';

class CardsContainer extends Component {

    render() {

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        return (
            <div className={styles.Container}>

                {arr.map((str) => {
                    return (
                        <CardComponent
                            cardUrl={"https://marcinzasadzki.com/img/Sedona@2x.webp"}
                            imgLink={'https://marcinzasadzki.com/img/Sedona@2x.webp'}
                            imgDesc={'sedona img'}
                            title={'this is a card ' + str}
                        />
                    )
                })}




            </div>
        );
    }

}

export default CardsContainer;