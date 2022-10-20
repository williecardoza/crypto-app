import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "../SVG/arrowIcon.svg";
import { ReactComponent as ThemeIcon } from "../SVG/themeIcon.svg";
import { ReactComponent as SearchIcon } from "../SVG/searchIcon.svg";

export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
`;

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: #00ff5f;
  margin-left: 5px;
  transform: ${props =>
    props.showDropdown ? "rotate(0deg)" : "rotate(180deg)"};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  fill: ${props => props.theme.color};
`;

export const StyledThemeIcon = styled(ThemeIcon)`
  fill: ${props => props.theme.color};
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 auto;
  width: 94%;
`;

export const CurrencyContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CurrencySymbol = styled.div`
  color: #00ff5f;
  margin-right: 8px;
`;

export const CurrencyWrapper = styled.div`
  font-size: 19px;
  position: relative;
  width: 100px;
`;

export const Dropdown = styled.div`
  animation: fadeInOut 0.9s ease-in-out;
  box-shadow: 8px 8px 25px -7px black;
  position: absolute;
  top: 61px;
  right: -13px;
  z-index: 10;
  width: 125px;
`;

export const DropdownContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.third};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 12px;
  &:hover {
    background: ${props => props.theme.secondary};
    cursor: pointer;
  }
  width: 80%;
`;

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 19px;
  margin-left: 8px;
  width: 100%;
  &::placeholder {
    color: ${props => props.theme.color};
  }
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 330px;
`;

export const Li = styled.li`
  background: ${props => props.theme.third};
  border-radius: 5px;
  box-shadow: 0 3px 9px -5px black;
  color: ${props => props.theme.color};
  list-style: none;
  margin: 20px 0px 20px 0;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;
export const LinkWrapper = styled.div`
  padding: 12px 45px;
  border-radius: 10px;
  box-shadow: 0 3px 9px -5px black;
  background: ${props => props.currentPage && props.theme.third};
  :hover {
    cursor: pointer;
  }
`;
export const LinkLi = styled.li`
  list-style: none;
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  width: 20%;
`;

export const Nav = styled.nav`
  background: ${props => props.theme.secondary};
  box-shadow: 6px 5px 13px -8px black;
  color: ${props => props.theme.color};
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
  justify-content: space-between;
  margin-right: 2.8%;
  width: 33%;
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
`;
