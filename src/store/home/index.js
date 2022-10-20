const initialState = {
  bitcoinData: null,
  coinList: null,
};

export const GET_BITCOIN_DATA_SUCCESS = "GET_BITCOIN_DATA_SUCCESS";
export const GET_COIN_LIST_DATA_SUCCESS = "GET_COIN_LIST_DATA_SUCCESS";

const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BITCOIN_DATA_SUCCESS:
      return {
        ...state,
        bitcoinData: action.payload,
      };
    case GET_COIN_LIST_DATA_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
      };
    default:
      return state;
  }
};
export default coinListReducer;
