import React, { Component, Fragment } from 'react';
import styles from './CardContainer.module.css';
import axios from 'axios';
import DescriptionComponent from '../components/DescriptionComponent';
import Spinner from '../components/Spinner';
import { connect } from 'react-redux';
import {  } from 'react-router-dom'

class CardContainer extends Component {
  state = {
    cardData: {},
    isLoading: true,
    cardNo: this.props.match.params.id
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyurl + "https://www.moonpig.com/uk/api/product/product/?mpn=" + this.state.cardNo)
      .then( response => {
        this.setState({
          cardData: response.data,
          isLoading: false
        })
      })
      .catch( error => {
        console.log(error);
        this.setState({
          isLoading: false
        })
      })
  }

  render(){

    let content = <div className={styles.CardContainer}>
        <div className={styles.CardImage}>
          {this.state.cardData && this.state.cardData.ImageUrls && 
            <img alt="img" src={this.state.cardData.ImageUrls[0].ImageUrl} /> }
        </div>
        <DescriptionComponent 
          title={this.state.cardData && this.state.cardData.Title} 
          desc={this.state.cardData && this.state.cardData.Description} />
      </div>

    const spinner = <Spinner />;

    return(
      <Fragment>
        {this.state.isLoading ? spinner : content}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCard: state.selectedCard
  }
}

export default connect(mapStateToProps)(CardContainer);