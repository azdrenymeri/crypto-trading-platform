import { ADD_CRYPTO,ADD_BULK_CRYPTO , UPDATE_CRYPTO, UPDATE_CRYPTO_PRICE } from './constants/constants';

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

export const updateCrypto = (name, crypto) => {
  return {
    type: UPDATE_CRYPTO,
    payload: {
      crypto_name: name,
      crypto
    } 
  }
}

export const updateCryptoPrice = (name,newPrice) => {
  return {
    type: UPDATE_CRYPTO_PRICE,
    payload: {
      crypto_name: name,
      new_price: newPrice
    }
  };
}