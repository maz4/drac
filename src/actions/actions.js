import * as actionTypes from '../constants/constants';
import axios from 'axios';

const saveCardsData = (data) => {
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

export const removeCard = () => {
  return {
    type: actionTypes.REMOVE_CARD,
  }
}

const getCard = (data) => {
  return {
    type: actionTypes.GET_CARD,
    payload: data
  };
};

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
  };
};

export const fetchData = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1";
  return dispatch => {
    axios.get(proxyurl + url)
      .then(response => {
        dispatch(saveCardsData(response.data.Products));
      })
      .catch(error => {
          console.log(error);
      });
  }
}
