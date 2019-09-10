import * as actionTypes from '../constants/constants';
import axios from 'axios';

export const getAllCards = (data) => {
  return {
    type: actionTypes.GET_ALL_CARDS,
    payload: data
  };
};

export const selectCard = (id) => {
  return {
    type: actionTypes.SELECT_CARD,
    payload: id
  };
};

const getCard = (data) => {
  return {
    type: actionTypes.GET_CARD,
    payload: data
  }
}

export const getCardData = (id) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = proxyurl + "https://www.moonpig.com/uk/api/product/product/?mpn=" + id;
  return dispatch => {
    axios.get(url)
      .then(response => {
        dispatch(getCard(response.data));
      })
      .catch(error => {
          console.log(error);
      });
  }
}

