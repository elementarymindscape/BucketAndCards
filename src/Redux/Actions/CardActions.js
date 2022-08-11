import axios from 'axios';
import * as ActionTypes from '../Constants/index';
import { ShowMessage } from './NotificationActions';
export const getAllCards = (view) => {
  let url;
  if (view === 'Buckets') {
    url = 'https://bucketsassignment.herokuapp.com/cards';
  } else if (view === 'History') {
    url = 'https://bucketsassignment.herokuapp.com/history';
  }
  return (disptach) =>
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        disptach(set_all_cards(res?.data?.cards));
      })
      .catch((err) => console.log(err));
};

export const set_all_cards = (data) => ({
  type: ActionTypes.SET_ALL_CARDS,
  payload: data,
});
export const getAllCardTypes = () => {
  return (disptach) =>
    axios
      .get('https://bucketsassignment.herokuapp.com/cards/types', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        disptach(set_all_card_types(res?.data?.types));
      })
      .catch((err) => console.log(err));
};

export const set_all_card_types = (data) => ({
  type: ActionTypes.SET_ALL_CARD_TYPES,
  payload: data,
});

export const addCard = (title, link, type, view) => {
  const request = axios.post(
    'https://bucketsassignment.herokuapp.com/cards/new',
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      card_title: title,
      card_video_link: link,
      card_bucket_type: type,
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(getAllCards(view));
        dispatch(getAllCardTypes());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// EDIT CARD
export const editCard = (id, title, link, view) => {
  const request = axios.patch(
    `https://bucketsassignment.herokuapp.com/cards/edit/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      card_title: title,
      card_video_link: link,
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(getAllCards(view));
        dispatch(getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};

// MOVE CARD TO BUCKET
export const moveCardToBucket = (id, bucketName, view) => {
  const request = axios.patch(
    `https://bucketsassignment.herokuapp.com/cards/move/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      bucket_name: bucketName,
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(getAllCards(view));
        dispatch(getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};

// ADD A BUCKET
export const addBucket = (bucketName, view) => {
  const request = axios.post(
    'https://bucketsassignment.herokuapp.com/bucket/new',
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      card_bucket_type: bucketName,
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(getAllCards(view));
        dispatch(getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};

// DELETE A BUCKET
export const deleteBucket = (id, view) => {
  const request = axios.delete(
    `https://bucketsassignment.herokuapp.com/bucket/delete/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
        dispatch(ShowMessage(response?.data?.message, 'success'));
        dispatch(getAllCards(view));
        dispatch(getAllCardTypes());
      })
      .catch((err) => console.log(err));
  };
};

// ADD TO HISTORY
export const addToHistory = (title, link, id) => {
  const request = axios.post(
    `https://bucketsassignment.herokuapp.com/history/create`,

    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      card_title: title,
      card_video_link: link,
      played_at: new Date(),
      id: id,
    }
  );
  return (dispatch) => {
    request
      .then((response) => {
        if (response.error) throw response.error;
      })
      .catch((err) => console.log(err));
  };
};
