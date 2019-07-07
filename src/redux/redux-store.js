import { combineReducers, createStore } from 'redux';
import postsInfoReducer from './postsInfo-reducer';

let reducers = combineReducers({
  postsInfoPage: postsInfoReducer
});

let store = createStore(reducers);

export default store;