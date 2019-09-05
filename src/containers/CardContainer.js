import React, { Component, Fragment } from 'react';
import styles from './CardContainer.module.css';
import axios from 'axios';
import DescriptionComponent from '../components/DescriptionComponent';
import Spinner from '../components/Spinner';
import { connect } from 'react-redux';

class CardContainer extends Component {
  state = {
    cardData: {},
    isLoading: true,
  }

  componentDidMount(){
    const cardNo = localStorage.getItem('selectedCard');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyurl + "https://www.moonpig.com/uk/api/product/product/?mpn=" + cardNo)
      .then( response => {
        console.log(response)
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
          <img alt="img" src="https://d1xkhapf8f3lxw.cloudfront.net/api/images/Cardshop/1/product/PU1162" />
        </div>
        <DescriptionComponent title={'Temp title'} desc={'temp desc'} />
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