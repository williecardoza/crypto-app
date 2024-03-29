import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CurrencyContainer,
  CurrencySymbol,
  Data,
  Dropdown,
  DropdownContainer,
  DropdownItem,
  Img,
  Input,
  InputLi,
  LeftContainer,
  Li,
  MarketDataContainer,
  Nav,
  Overview,
  ProgressBarContainer,
  RightContainer,
  SearchContainer,
  StyledLink,
  StyledNavLink,
  StyledArrowIcon,
  StyledSearchIcon,
  StyledThemeIcon,
  StyledProgressBar,
  ThemeIconLi,
  Ul,
} from "./NavBar.styles.js";
import {
  fetchCoins,
  getMarketData,
  handleThemeChange,
  handleSelectedCurrency,
  SearchCoin,
} from "../../store/app/actions";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../../Utils/formatNumber.js";

const NavBar = () => {
  const [dropDown, setDropdown] = useState(false);
  const [listDropDown, setlistDropDown] = useState(false);
  const [coin, setCoin] = useState("");
  const currency = useSelector(state => state.app.currency);
  const currencies = useSelector(state => state.app.currencies);
  const currentMobilePage = useSelector(state => state.app.currentMobilePage);
  const filteredCoinList = useSelector(state => state.app.filteredCoinList);
  const marketData = useSelector(state => state.app.marketData);
  const symbol = useSelector(state => state.app.symbol);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(getMarketData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    history.replace("", null);
    history.replace(`coin/${coin}`);
    setCoin("");
  };

  return (
    <Nav>
      <Ul>
        <LeftContainer>
          <Overview>{currentMobilePage}</Overview>
          <StyledNavLink activeClassName="active" exact={true} to="/">
            Coins
          </StyledNavLink>
          <StyledNavLink activeClassName="active" to="/Portfolio">
            Portfolio
          </StyledNavLink>
        </LeftContainer>
        <RightContainer>
          <InputLi>
            <StyledSearchIcon
              onClick={e => {
                handleSearch(e);
                setlistDropDown(false);
              }}
            />
            <form onSubmit={e => handleSearch(e)}>
              <Input
                onChange={e => {
                  dispatch(SearchCoin(e.target.value));
                  setlistDropDown(true);
                  setCoin(e.target.value);
                }}
                type="text"
                placeholder="Search..."
                value={coin}
              />
            </form>
            {listDropDown && coin ? (
              <SearchContainer
                onMouseLeave={() => {
                  setlistDropDown(false);
                  setCoin("");
                }}
              >
                {filteredCoinList.length >= 1
                  ? filteredCoinList.map((coin, index) => (
                      <StyledLink
                        key={index}
                        onClick={() => {
                          setCoin("");
                          setlistDropDown(false);
                        }}
                        to={`/coin/${coin.id}`}
                      >
                        {coin.id}
                      </StyledLink>
                    ))
                  : setlistDropDown(false)}
              </SearchContainer>
            ) : (
              ""
            )}
          </InputLi>
          <Li onClick={() => setDropdown(!dropDown)}>
            <>
              <CurrencyContainer>
                <CurrencySymbol>{symbol}</CurrencySymbol>
                <div>{currency.toUpperCase()}</div>
                <StyledArrowIcon
                  dropdown={dropDown ? "rotate(180deg)" : "rotate(0deg)"}
                />
              </CurrencyContainer>
              {dropDown && (
                <Dropdown onMouseLeave={() => setDropdown(false)}>
                  <DropdownContainer>
                    {currencies.map(value => {
                      return (
                        <DropdownItem
                          key={value.name}
                          onClick={() =>
                            dispatch(
                              handleSelectedCurrency(value.name, value.symbol)
                            )
                          }
                        >
                          <CurrencySymbol>{value.symbol}</CurrencySymbol>
                          <div>{value.name.toUpperCase()}</div>
                        </DropdownItem>
                      );
                    })}
                  </DropdownContainer>
                </Dropdown>
              )}
            </>
          </Li>
          <ThemeIconLi onClick={() => dispatch(handleThemeChange())}>
            <StyledThemeIcon />
          </ThemeIconLi>
        </RightContainer>
      </Ul>
      <MarketDataContainer>
        <Data>
          Coins {marketData && marketData.data.active_cryptocurrencies}
        </Data>
        <Data>Exchange {marketData && marketData.data.markets}</Data>
        <Data>
          •{" "}
          {formatNumber(
            marketData && marketData.data.total_market_cap[currency]
          )}
        </Data>
        <ProgressBarContainer>
          <div>
            •
            {formatNumber(marketData && marketData.data.total_volume[currency])}{" "}
          </div>
          <StyledProgressBar
            completed={marketData && marketData.data.total_volume[currency]}
            maxCompleted={999999999999}
            baseBgColor={"#2172E5"}
            bgColor={"#FFFFFF"}
            height={"8px"}
            isLabelVisible={false}
          />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" />
          <div>
            {marketData &&
              marketData.data.market_cap_percentage["btc"].toFixed()}
            %
          </div>
          <StyledProgressBar
            completed={parseInt(
              marketData && marketData.data.market_cap_percentage["btc"]
            )}
            baseBgColor={"#2172E5"}
            bgColor={"#FFFFFF"}
            height={"8px"}
            isLabelVisible={false}
          />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg" />
          <div>
            {marketData &&
              marketData.data.market_cap_percentage["eth"].toFixed()}
            %
          </div>
          <StyledProgressBar
            completed={parseInt(
              marketData && marketData.data.market_cap_percentage["eth"]
            )}
            isLabelVisible={false}
            baseBgColor={"#2172E5"}
            bgColor={"#FFFFFF"}
            height={"8px"}
          />
        </ProgressBarContainer>
      </MarketDataContainer>
    </Nav>
  );
};
export default NavBar;
