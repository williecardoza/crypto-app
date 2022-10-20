const initialState = {
  currency: JSON.parse(localStorage.getItem("currency")),
  theme: JSON.parse(localStorage.getItem("theme")),
};
export const UPDATE_CURRENCY = "UPDATE_CURRENCY";
export const UPDATE_THEME = "UPDATE_THEME";

const appStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case UPDATE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
export default appStorageReducer;
