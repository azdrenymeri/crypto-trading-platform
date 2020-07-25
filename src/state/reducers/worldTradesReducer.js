const {
  NEW_WORLD_TRADE,
  CLEAN_TRADES,
} = require("../actions/constants/constants");

const initialState = {
  worldTrades: [],
};

const worldTradesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_WORLD_TRADE:
      return Object.assign({}, state, {
        worldTrades: checkLimitAndAdd(state, action),
      });

    case CLEAN_TRADES:
      return Object.assign({}, state, {
        worldTrades: [],
      });
    default:
      return state;
  }
};

const checkLimitAndAdd = (state, action) => {
  if (state.worldTrades.length >= 10) {
    state.worldTrades[0] = action.payload;
    return [...state.worldTrades];
  } else {
    return [action.payload, ...state.worldTrades];
  }
};

export { worldTradesReducer };
