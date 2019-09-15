import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import Spinner from '../components/Spinner';
import { fetchData } from '../actions/actions';

class CardsContainer extends Component {
    componentDidMount() {
        // if(this.props.isLoading){
            this.props.onPageLoad();
        // }
    }

    render() {
        // if(this.props.isLoading){
        //     return <Spinner />;
        // }

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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPageLoad: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);