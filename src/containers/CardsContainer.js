import React, { Component } from 'react';
import axios from 'axios';
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';

class CardsContainer extends Component {

    state = {
        cardsData: [],
    }

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url ="https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1"; 
        axios.get(proxyurl + url)
            .then( response => {
                console.log(response.data.Products[0]);
                this.setState({cardsData: response.data.Products});
            })
            .catch(error=> {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={styles.Container}>
                {this.state.cardsData.map((card, index) => {
                    return (
                        <CardComponent
                            cardUrl={card.ProductLink.Href}
                            imgLink={card.ProductImage.Link.Href}
                            imgDesc={card.Title}
                            title={card.Title}
                            key={index}
                        />
                    )
                })}
            </div>
        );
    }

}

export default CardsContainer;