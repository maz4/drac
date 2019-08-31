import React, { Component } from 'react';
import axios from 'axios';
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import Spinner from '../components/Spinner';

class CardsContainer extends Component {

    state = {
        cardsData: [],
        isLoading: true
    };

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1";
        axios.get(proxyurl + url)
            .then(response => {
                console.log(response.data.Products[0]);
                this.setState({
                    cardsData: response.data.Products,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const cards = this.state.cardsData.map((card, index) => {
            return (
                <CardComponent cardUrl = {card.ProductLink.Href}
                imgLink = {card.ProductImage.Link.Href}
                imgDesc = {card.Title}
                title = {card.Title}
                key = {index} />
            );
        });

        const spinner = <Spinner />

        return ( <
            div className = {styles.Container}>
                { this.state.isLoading ? spinner : cards }
            </div>
        );
    }

}

export default CardsContainer;