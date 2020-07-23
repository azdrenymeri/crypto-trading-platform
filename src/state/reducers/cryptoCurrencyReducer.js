import { ADD_CRYPTO, UPDATE_CRYPTO,ADD_BULK_CRYPTO } from "../actions/constants/constants";
import { createPortal } from "react-dom";

// the initial state of the app
const initialState = {
  cryptos: []
};


const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return Object.assign({}, state, {
        cryptos: [...state.cryptos, action.payload],
      });

    case ADD_BULK_CRYPTO:
      return Object.assign({}, state, {
        cryptos: action.payload
      });

    case UPDATE_CRYPTO:
      return Object.assign({} ,state,{
        cryptos:[ ...state.cryptos.map((crypto) => {
          if (crypto.name === action.crypto.name){
            return action.crypto
          }
          return crypto;
        })]
      });
      
    default:
      return state;
  }
};

export { cryptoReducer }