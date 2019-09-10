import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import Spinner from '../components/Spinner';
import { getAllCards } from '../actions/actions';

class CardsContainer extends Component {
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

    render() {
        if(this.props.isLoading){
            return <Spinner />
        }

        return ( <div className = {styles.Container}>
                {this.props.cardsData.map( card => (
                    <CardComponent
                        imgLink = {card.ProductImage.Link.Href}
                        title = {card.Title}
                        id={card.MoonpigProductNo}
                        key = {card.MoonpigProductNo} />
                ))}
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
        getData: (data) => dispatch(getAllCards(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);