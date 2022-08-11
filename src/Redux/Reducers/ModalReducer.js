import * as ActionTypes from '../Constants/index';

const INITIAL_STATE = {
  openCard: { open: false, videoId: '', cardId: '', cardTitle: '' },
  editCard: { open: false, cardName: '', cardId: '', cardLink: '' },
  addCard: {
    open: false,
    bucketName: '',
  },
  editBucketName: { open: false, bucketName: '' },
  deleteCard: { open: false, cardName: '', cardId: '' },
  deleteBucket: { open: false, bucketName: '' },
  addBucketModal: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ADD_BUCKET_MODAL:
      return {
        ...state,
        addBucketModal: action.payload,
      };
    case ActionTypes.HIDE_ADD_BUCKET_MODAL:
      return {
        ...state,
        addBucketModal: action.payload,
      };
    case ActionTypes.SET_CARD_OPEN_MODAL_TRUE:
      return {
        ...state,
        openCard: {
          open: action.payload.open,
          videoId: action.payload.videoId,
          cardTitle: action.payload.cardTitle,
          cardId: action.payload.cardId,
        },
      };
    case ActionTypes.SET_CARD_OPEN_MODAL_FALSE:
      return {
        ...state,
        openCard: {
          open: action.payload.open,
          videoId: '',
          cardTitle: '',
          cardId: '',
        },
      };
    case ActionTypes.SET_CARD_EDIT_MODAL_TRUE:
      return {
        ...state,
        editCard: {
          open: action.payload.open,
          cardId: action.payload.cardId,
          cardName: action.payload.cardName,
          cardLink: action.payload.cardLink,
        },
      };
    case ActionTypes.SET_CARD_EDIT_MODAL_FALSE:
      return {
        ...state,
        editCard: {
          open: action.payload.open,
          cardId: '',
          cardName: '',
          cardLink: '',
        },
      };
    case ActionTypes.SET_CARD_ADD_MODAL_TRUE:
      return {
        ...state,
        addCard: {
          open: action.payload.open,
          bucketName: action.payload.bucketName,
        },
      };
    case ActionTypes.SET_CARD_ADD_MODAL_FALSE:
      return {
        ...state,
        addCard: {
          open: action.payload.open,
          bucketName: '',
        },
      };
    case ActionTypes.SET_EDIT_BUCKET_NAME_MODAL_TRUE:
      return {
        ...state,
        editBucketName: {
          open: action.payload.open,
          bucketName: action.payload.bucketName,
        },
      };
    case ActionTypes.SET_EDIT_BUCKET_NAME_MODAL_FALSE:
      return {
        ...state,
        editBucketName: { open: action.payload.open, bucketName: '' },
      };
    case ActionTypes.SET_CARD_DELETE_MODAL_TRUE:
      return {
        ...state,
        deleteCard: {
          open: action.payload.open,
          cardName: action.payload.cardName,
          cardId: action.payload.cardId,
        },
      };
    case ActionTypes.SET_CARD_DELETE_MODAL_FALSE:
      return {
        ...state,
        deleteCard: { open: action.payload.open, cardName: '', cardId: '' },
      };
    case ActionTypes.SHOW_DELETE_BUCKET_MODAL:
      return {
        ...state,
        deleteBucket: {
          open: action.payload.open,
          bucketName: action.payload.bucketName,
        },
      };
    case ActionTypes.HIDE_DELETE_BUCKET_MODAL:
      return {
        ...state,
        deleteBucket: { open: action.payload.open, bucketName: '' },
      };
    default:
      return state;
  }
};
