const initialState = {
  coinHistory: null,
  data: null,
};
export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_HISTORY_SUCCESS = "GET_COIN_HISTORY_SUCCESS";

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_COIN_HISTORY_SUCCESS:
      return {
        ...state,
        coinHistory: action.payload,
      };
    default:
      return state;
  }
};

export default coinDataReducer;
