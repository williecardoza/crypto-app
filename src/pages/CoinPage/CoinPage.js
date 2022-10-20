import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData, getCoinHistory } from "../../store/coin/actions";
import { CoinSummary } from "../../components";
import { CoinPageChart } from "../../components";
import {
  Button,
  ButtonContainer,
  Calculator,
  CalculatorContainer,
  ChartContainer,
  Container,
  Currency,
  CoinDescription,
  Input,
  StyledExchangeIcon,
  StyledLayerIcon,
  Time,
  TimeFrame,
  ThemeContainer,
  Theme,
  Value,
  Wrapper,
} from "./CoinPage.styles";

const CoinPage = props => {
  const [calculatorValue, setCalculatorValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(state => state.coin.data);
  const coinHistory = useSelector(state => state.coin.coinHistory);
  const currency = useSelector(state => state.app.currency);
  const timeFrames = [
    { interval: "1d", days: 1 },
    { interval: "7d", days: 7 },
    { interval: "30d", days: 30 },
    { interval: "90d", days: 90 },
    { interval: "1y", days: 360 },
    { interval: "5y", days: 1800 },
  ];

  const handleChange = e => {
    const sum = e.target.value / data.market_data.current_price[currency];
    setCalculatorValue(sum);
    setInputValue(e.target.text);
  };

  useEffect(() => {
    dispatch(getCoinData(props.match.params.coinId.toLowerCase()));
    dispatch(getCoinHistory(7, currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {data && (
        <Wrapper>
          <h2>Your Summary</h2>
          <ThemeContainer>
            <CoinSummary data={data} currency={currency} />
          </ThemeContainer>
          <h2>Description</h2>
          <Theme>
            <StyledLayerIcon />
            <CoinDescription
              dangerouslySetInnerHTML={{
                __html: data.description.en,
              }}
            ></CoinDescription>
          </Theme>
          <CalculatorContainer>
            <Calculator>
              <Currency>{currency.toUpperCase()}</Currency>
              <Input
                onChange={handleChange}
                type={"number"}
                value={inputValue}
              ></Input>
            </Calculator>
            <StyledExchangeIcon />
            <Calculator>
              <Currency>{data.symbol.toUpperCase()}</Currency>
              <Value>
                {new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 7,
                  notation: "compact",
                  compactDisplay: "short",
                }).format(calculatorValue)}
              </Value>
            </Calculator>
          </CalculatorContainer>
          <ButtonContainer>
            {timeFrames.map(timeframe => (
              <TimeFrame>
                <Button
                  onClick={() => {
                    dispatch(getCoinHistory(timeframe.days, currency));
                  }}
                />
                <Time>{timeframe.interval}</Time>
              </TimeFrame>
            ))}
          </ButtonContainer>
        </Wrapper>
      )}
      {coinHistory && (
        <ChartContainer>
          <CoinPageChart coinHistory={coinHistory} />
        </ChartContainer>
      )}
    </Container>
  );
};

export default CoinPage;
