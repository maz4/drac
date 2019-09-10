import * as actionTypes from '../constants/constants'; 

const initialState = {
  cardsData: [],
  card:[],
  slectedCard: '',
  isLoading: true,
  isLoadingCard: true
};

const reducers = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.GET_ALL_CARDS:
      return {
        ...state,
        cardsData: action.payload,
        isLoading: false
      };
    case actionTypes.SELECT_CARD:
      return {
        ...state,
        slectedCard: action.payload
      };
    case actionTypes.REMOVE_CARD:
      return {
        ...state,
        slectedCard: '',
        card: [],
        isLoadingCard: true
      };
    case actionTypes.GET_CARD:
      return {
        ...state,
        card: action.payload,
        isLoadingCard: false
      }
    default:
      return state;
  }
};

export default reducers;