import * as ActionTypes from '../Constants/index';

const INITIAL_STATE = {
  view: 'Buckets',
};

export const viewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_BUCKET_VIEW:
      return {
        view: 'Buckets',
      };
    case ActionTypes.SET_HISTORY_VIEW:
      return {
        view: 'History',
      };
    default:
      return state;
  }
};
