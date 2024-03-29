import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import DescriptionComponent from '../components/DescriptionComponent';
import styles from './CardContainer.module.css';
import { getCardData, removeCard } from '../actions/actions';

// what this component is using
// takes state for: ImageUrls, Title, Description, isLoadingCard


class CardContainer extends Component {

    componentWillUnmount(){
        this.props.removeCard();
    }

    componentDidMount() {
        const productId = this.props.history.location.pathname.split('/')[2];
        this.props.getCardData(productId);
    }

    render() {
        if(this.props.isLoadingCard){
            return <Spinner />;
        }

        return (
            <div className={styles.CardContainer} >
                <div className={styles.CardImage} > 
                    {this.props.card && this.props.card.ImageUrls &&
                        <img alt={this.props.card.Title}  
                            src = {this.props.card.ImageUrls[0].ImageUrl} /> 
                    } 
                </div> 
                <DescriptionComponent
                    title={this.props.card && this.props.card.Title}
                    desc={this.props.card && this.props.card.Description} />
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCard: state.slectedCard,// not used
        isLoadingCard: state.isLoadingCard,
        card: state.card
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCardData: (data) => dispatch(getCardData(data)),
        removeCard: () => dispatch(removeCard())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);