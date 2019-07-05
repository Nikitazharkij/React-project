import { combineReducers, createStore } from 'redux';
import mainCityReducer from './mainCity-reducer';

let reducers = combineReducers({ 
  mainCityPage: mainCityReducer
});

let store = createStore(reducers);

export default store;