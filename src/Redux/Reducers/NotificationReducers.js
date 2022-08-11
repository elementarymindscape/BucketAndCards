import * as ActionTypes from '../Constants/index';

const INITIAL_STATE = {
  message: '',
  state: false,
  variant: '',
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION_MESSAGE:
      return {
        message: action.payload.message,
        variant: action.payload.variant,
        state: true,
      };
    case ActionTypes.HIDE_NOTIFICATION_MESSAGE:
      return {
        state: false,
      };
    default:
      return state;
  }
};
