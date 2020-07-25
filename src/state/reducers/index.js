import { combineReducers } from 'redux';

import { cryptoReducer } from './cryptoCurrencyReducer';
import { worldTradesReducer } from './worldTradesReducer';


const reducers = combineReducers({
  cryptoReducer,
  worldTradesReducer
});

export default reducers;