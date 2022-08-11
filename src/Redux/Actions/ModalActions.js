import axios from 'axios';
import * as ActionTypes from '../Constants/index';
import * as CardActions from '../Actions/CardActions';
import { ShowMessage } from './NotificationActions';

// VIEW CARD MODAL
export const showOpenCardModal = (cardTitle, videoID, cardId) => ({
  type: ActionTypes.SET_CARD_OPEN_MODAL_TRUE,
  payload: {
    open: true,
    videoId: videoID,
    cardTitle: cardTitle,
    cardId: cardId,
  },
});

export const hideOpenCardModal = () => ({
  type: ActionTypes.SET_CARD_OPEN_MODAL_FALSE,
  payload: {
    open: false,
  },
});
// EDIT CARD MODAL
export const showEditCardModal = (cardName, cardId, cardLink) => ({
  type: ActionTypes.SET_CARD_EDIT_MODAL_TRUE,
  payload: {
    open: true,
    cardName: cardName,
    cardId: cardId,
    cardLink: cardLink,
  },
});

export const hideEditCardModal = () => ({
  type: ActionTypes.SET_CARD_EDIT_MODAL_FALSE,
  payload: {
    open: false,
  },
});
// ADD CARD MODAL
export const showAddCardModal = (bucketName) => ({
  type: ActionTypes.SET_CARD_ADD_MODAL_TRUE,
  payload: {
    open: true,
    bucketName: bucketName,
  },
});

export const hideAddCardModal = () => ({
  type: ActionTypes.SET_CARD_ADD_MODAL_FALSE,
  payload: {
    open: false,
  },
});
// EDIT BUCKET NAME MODAL
export const showEditBucketNameModal = (bucketName) => ({
  type: ActionTypes.SET_EDIT_BUCKET_NAME_MODAL_TRUE,
  payload: { open: true, bucketName: bucketName },
});

export const hideEditBucketNameModal = () => ({
  type: ActionTypes.SET_EDIT_BUCKET_NAME_MODAL_FALSE,
  payload: { open: false },
});
// ADD BUCKET MODAL
export const showAddBucketModal = () => ({
  type: ActionTypes.SHOW_ADD_BUCKET_MODAL,
  payload: true,
});
// HIDE ADD BUCKET MODAL
export const hideAddBucketModal = () => ({
  type: ActionTypes.HIDE_ADD_BUCKET_MODAL,
  payload: false,
});
// DELETE CARD MODAL
export const showDeleteCardModal = (cardName, cardId) => ({
  type: ActionTypes.SET_CARD_DELETE_MODAL_TRUE,
  payload: {
    open: true,
    cardName: cardName,
    cardId: cardId,
  },
});

export const hideDeleteCardModal = () => ({
  type: ActionTypes.SET_CARD_DELETE_MODAL_FALSE,
  payload: {
    open: false,
  },
});
// DELETE BUCKET MODAL
export const showDeleteBucketModal = (bucketName) => ({
  type: ActionTypes.SHOW_DELETE_BUCKET_MODAL,
  payload: {
    open: true,
    bucketName: bucketName,
  },
});

export const hideDeleteBucketModal = () => ({
  type: ActionTypes.HIDE_DELETE_BUCKET_MODAL,
  payload: {
    open: false,
  },
});

// DELETE A CARD
export const deleteCard = (id, view) => {
  const update = axios.delete(
    `https://bucketsassignment.herokuapp.com/cards/delete/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return (dispatch) => {
    update
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(CardActions.getAllCards(view));
        dispatch(CardActions.getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};

// UPDATE CARD
export const updateCard = (id, name, link) => {
  const update = axios.patch(
    `https://bucketsassignment.herokuapp.com/cards/edit/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      card_title: name,
      card_video_link: link,
    }
  );
  return (dispatch) => {
    update
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(CardActions.getAllCards());
        dispatch(CardActions.getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};
// UPDATE BUCKET NAME
export const updateBucketName = (old, New, view) => {
  const update = axios.patch(
    'https://bucketsassignment.herokuapp.com/edit/bucketname',
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      old_bucket_name: old,
      new_bucket_name: New,
    }
  );
  return (dispatch) => {
    update
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(CardActions.getAllCardTypes());
        dispatch(CardActions.getAllCards(view));
      })
      .catch((err) => (err) => console.log(err));
  };
};
// UPDATE BUCKET NAME
export const deleteBucket = (type, view) => {
  console.log('TYPE', type);
  const update = axios.delete(
    `https://bucketsassignment.herokuapp.com/bucket/delete/${type}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return (dispatch) => {
    update
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(CardActions.getAllCards(view));
        dispatch(CardActions.getAllCardTypes());
      })
      .catch((err) => console.log('AIHYUWSGOYUA', err));
  };
};
