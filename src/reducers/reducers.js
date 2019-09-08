import * as actionTypes from '../constants/constants'; 

const initialState = {
  cardsData: [],
  slectedCard: null,
  isLoading: true
};

const reducers = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.GET_CARDS:
      return {
        ...state,
        cardsData: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducers;