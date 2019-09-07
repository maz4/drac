import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import Spinner from '../components/Spinner';
import { getCards, selectCard } from '../actions/actions';

class CardsContainer extends Component {
    constructor(props){
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1";
        if(this.props.isLoading && this.props.cardsData.length <= 0){
            axios.get(proxyurl + url)
                .then(response => {
                    this.props.getData(response.data.Products);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    onClickHandler(event){
        event.preventDefault();
        let target = event.target;
        let cardNumber = null;

        while(target.tagName !== "DIV"){
            if(target.tagName === "A" && target.hasAttribute('data-cardno')){
                cardNumber = target.dataset.cardno;
            }
            target = target.parentNode;
        }
        this.props.selectCrd(cardNumber);
        this.props.history.push("/card/" + cardNumber)
    }

    render() {
        const cards = this.props.cardsData.map((card, index) => {
            return (
                <CardComponent cardUrl = {card.ProductLink.Href}
                imgLink = {card.ProductImage.Link.Href}
                imgDesc = {card.Title}
                title = {card.Title}
                MoonpigProductNo={card.MoonpigProductNo}
                onClickHandler={this.onClickHandler}
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
        getData: (data) => dispatch(getCards(data)),
        selectCrd: (cardNo) => dispatch(selectCard(cardNo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);