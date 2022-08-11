import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cardReducer } from './Reducers/CardReducers';
import { modalReducer } from './Reducers/ModalReducer';
import { notificationReducer } from './Reducers/NotificationReducers';
import { viewReducer } from './Reducers/ViewReducer';

const reducer = combineReducers({
  view: viewReducer,
  modal: modalReducer,
  cards: cardReducer,
  message: notificationReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
