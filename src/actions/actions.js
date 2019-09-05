import * as actionTypes from '../constants/constants';

export const getCards = (data) => {
  return {
    type: actionTypes.GET_CARDS,
    payload: data
  };
};

export const selectCard = (card) => {
  return {
    type: actionTypes.SELECT_CARD,
    payload: card
  }
}