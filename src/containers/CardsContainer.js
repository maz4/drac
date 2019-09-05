import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import Spinner from '../components/Spinner';
import { getCards } from '../actions/actions';

class CardsContainer extends Component {

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1";
        axios.get(proxyurl + url)
            .then(response => {
                this.props.getData(response.data.Products);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const cards = this.props.cardsData.map((card, index) => {
            return (
                <CardComponent cardUrl = {card.ProductLink.Href}
                imgLink = {card.ProductImage.Link.Href}
                imgDesc = {card.Title}
                title = {card.Title}
                MoonpigProductNo={card.MoonpigProductNo}
                key = {index} />
            );
        });

        const spinner = <Spinner />

        return ( <
            div className = {styles.Container}>
                { this.props.isLoading ? spinner : cards }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cardsData: state.cardsData,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (data) => dispatch(getCards(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);