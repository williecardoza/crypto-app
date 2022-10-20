import { UPDATE_THEME, UPDATE_CURRENCY } from "./index";

export const handleThemeChange = () => {
  return {
    type: UPDATE_THEME,
  };
};

export const handleSelectedCurrency = currency => {
  return {
    type: UPDATE_CURRENCY,
    payload: currency,
  };
};
