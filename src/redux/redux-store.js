import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages-reducer';

let reducers = combineReducers({
  messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;