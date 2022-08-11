import * as Actions from '../Constants/index';

export const ShowMessage = (message, variant) => {
  return {
    type: Actions.SHOW_NOTIFICATION_MESSAGE,
    payload: {
      message: message,
      variant: variant,
    },
  };
};
export const HideMessage = () => {
  return {
    type: Actions.HIDE_NOTIFICATION_MESSAGE,
  };
};
