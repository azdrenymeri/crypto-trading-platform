import { combineReducers } from 'redux';

import { cryptoReducer } from './cryptoCurrencyReducer';


const reducers = combineReducers({
  cryptoReducer
});

export default reducers;