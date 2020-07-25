import { NEW_WORLD_TRADE, CLEAN_TRADES } from "./constants/constants";

const addNewTrade = (trade) => {
  return {
    type: NEW_WORLD_TRADE,
    payload: trade,
  };
};

const cleanTrades = () => {
  return {
    type: CLEAN_TRADES,
  };
};

export { addNewTrade, cleanTrades };
