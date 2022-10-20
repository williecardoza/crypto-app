import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoinData, getCoinList } from "../../store/home/actions";
import BitcoinChart from "../../components/BitcoinChart";
import CoinList from "../../components/CoinList";

const HomePage = () => {
  const bitcoinData = useSelector(state => state.coinList.bitcoinData);
  const coinList = useSelector(state => state.coinList.coinList);
  const currency = useSelector(state => state.app.currency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinList(currency));
    dispatch(getBitcoinData(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getCoinList(currency));
    dispatch(getBitcoinData(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return (
    <>
      {bitcoinData && <BitcoinChart data={bitcoinData} currency={currency} />}
      {coinList && <CoinList coinList={coinList} currency={currency} />}
    </>
  );
};

export default HomePage;
