import {ADD_CRYPTO,ADD_BULK_CRYPTO , UPDATE_CRYPTO} from './constants/constants';

export const addCrypto = (crypto) => {
  return {
    type: ADD_CRYPTO,
    payload: crypto
  }
}

export const addBulkCrypto = (cryptos) => {
  return {
    type: ADD_BULK_CRYPTO,
    payload: cryptos
  }
}

export const updateCrypto = (name) => {
  return {
    type: UPDATE_CRYPTO,
    name 
  }
}