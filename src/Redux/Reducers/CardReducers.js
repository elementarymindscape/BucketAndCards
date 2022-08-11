import * as ActionTypes from '../Constants/index';

const INITIAL_STATE = {
  cards: [],
  types: [],
};

export const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case ActionTypes.SET_ALL_CARD_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    default:
      return state;
  }
};
