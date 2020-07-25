import {
  ADD_CRYPTO,
  UPDATE_CRYPTO,
  UPDATE_CRYPTO_PRICE,
  ADD_BULK_CRYPTO,
} from "../actions/constants/constants";

// the initial state of the app
const initialState = {
  cryptos: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return Object.assign({}, state, {
        cryptos: [...state.cryptos, action.payload],
      });

    case ADD_BULK_CRYPTO:
      return Object.assign({}, state, {
        cryptos: action.payload,
      });

    case UPDATE_CRYPTO:
      return Object.assign({}, state, {
        cryptos: [
          ...state.cryptos.map((crypto) => {
            if (crypto.name === action.payload.name) {
              return action.payload.crypto;
            }
            return crypto;
          }),
        ],
      });
    case UPDATE_CRYPTO_PRICE:
      return Object.assign({}, state, {
        cryptos: [
          ...state.cryptos.map((crypto) => {
            if (crypto.name === action.payload.crypto_name) {
              crypto.price = action.payload.new_price;
            }
            return crypto;
          }),
        ],
      });
    default:
      return state;
  }
};

export { cryptoReducer };
