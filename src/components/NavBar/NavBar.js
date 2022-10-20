import React, { useState } from "react";
import {
  Container,
  CurrencyContainer,
  CurrencySymbol,
  CurrencyWrapper,
  Dropdown,
  DropdownContainer,
  DropdownItem,
  Input,
  InputContainer,
  LeftContainer,
  Li,
  LinkWrapper,
  LinkLi,
  Nav,
  RightContainer,
  StyledLink,
  StyledArrowIcon,
  StyledSearchIcon,
  StyledThemeIcon,
  Ul,
} from "./NavBar.styles.js";
import {
  handleThemeChange,
  handleSelectedCurrency,
} from "../../store/app/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [dropDown, setDropdown] = useState(false);
  const currency = useSelector(state => state.app.currency);
  const dispatch = useDispatch();
  const currencies = [
    { name: "usd", symbol: "$" },
    { name: "eur", symbol: "€" },
    { name: "gbp", symbol: "£" },
  ];

  return (
    <Nav>
      <Ul>
        <Container>
          <LeftContainer>
            <LinkLi>
              <StyledLink to="/">
                <LinkWrapper currentPage={window.location.pathname === "/"}>
                  Coins
                </LinkWrapper>
              </StyledLink>
            </LinkLi>
            <LinkLi>
              <StyledLink to="/Portfolio">
                <LinkWrapper
                  currentPage={window.location.pathname === "/Portfolio"}
                >
                  Portfolio
                </LinkWrapper>
              </StyledLink>
            </LinkLi>
          </LeftContainer>
          <RightContainer>
            <Li>
              <InputContainer>
                <StyledSearchIcon />
                <Input type="text" placeholder="Search..." />
              </InputContainer>
            </Li>
            <Li onClick={() => setDropdown(!dropDown)}>
              <CurrencyWrapper>
                <CurrencyContainer>
                  {currencies.map(value => {
                    if (value.name === currency) {
                      return (
                        <>
                          <CurrencySymbol>{value.symbol}</CurrencySymbol>
                          <div>{value.name.toUpperCase()}</div>
                        </>
                      );
                    } else return false;
                  })}
                  <StyledArrowIcon showDropdown={dropDown} />
                </CurrencyContainer>
                {dropDown && (
                  <Dropdown onMouseLeave={() => setDropdown(false)}>
                    <DropdownContainer>
                      {currencies.map(value => {
                        return (
                          <DropdownItem
                            onClick={() =>
                              dispatch(handleSelectedCurrency(value.name))
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
              </CurrencyWrapper>
            </Li>
            <Li onClick={() => dispatch(handleThemeChange())}>
              <StyledThemeIcon />
            </Li>
          </RightContainer>
        </Container>
      </Ul>
    </Nav>
  );
};
export default NavBar;
