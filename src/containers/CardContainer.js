import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import Spinner from '../components/Spinner';
import DescriptionComponent from '../components/DescriptionComponent';
import styles from './CardContainer.module.css';
import { getCardData } from '../actions/actions';

class CardContainer extends Component {

    componentDidMount() {
        this.props.getCardData();

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
        selectedCard: state.slectedCard,
        isLoadingCard: state.isLoadingCard,
        card: state.card
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCardData: (data) => dispatch(getCardData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);