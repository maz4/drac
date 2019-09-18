import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CardsContainer.module.css';
import CardComponent from '../components/CardComponent';
import { fetchData } from '../actions/actions';
import Spinner from '../components/Spinner';

class CardsContainer extends Component {
    componentDidMount() {
        this.props.onPageLoad();
    }

    render() {

        if(this.props.pageLoad){
            return <Spinner />;
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
        pageLoad: state.pageLoad
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPageLoad: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);