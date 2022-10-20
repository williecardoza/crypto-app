import axios from "axios";
import { GET_BITCOIN_DATA_SUCCESS, GET_COIN_LIST_DATA_SUCCESS } from "./index";

export const getBitcoinData = currency => async (dispatch, getState) => {
   
  try {
    const bitcoinDataURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=180&interval=daily`;
    const { data } = await axios(bitcoinDataURL);
    dispatch({
      type: GET_BITCOIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

export const getCoinList = currency => async (dispatch, getState) => {
  try {
    const coinListURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
    const { data } = await axios(coinListURL);
    dispatch({
      type: GET_COIN_LIST_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};
