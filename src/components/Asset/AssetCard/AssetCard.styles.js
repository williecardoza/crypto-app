import styled from "styled-components";
import { ReactComponent as Arrow } from "../../SVG/arrowIcon.svg";
import { ReactComponent as RemoveIcon } from "../../SVG/removeIcon.svg";
import { ReactComponent as EditIcon } from "../../SVG/editIcon.svg";

export const StyledArrowIcon = styled(Arrow)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
  margin: 0 5px;
`;

export const StyledEditIcon = styled(EditIcon)`
  vertical-align: middle;
  @media (max-width: 1200px) {
    height: 17px;
    width: 17px;
  }
`;

export const StyledRemoveIcon = styled(RemoveIcon)`
  height: 40px;
  width: 40px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    height: 31px;
    width: 31px;
  }
`;

export const AssetCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CoinImageContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 30px;
  @media (max-width: 1200px) {
    background: ${props => props.theme.third};
  }
`;

export const CoinContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 10px;
  box-shadow: 0px 7px 50px -26px black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 1200px) {
    box-shadow: none;
    padding: 0;
  }
`;

export const ColoredSpan = styled.span`
  color: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  font-weight: lighter;
  font-size: 18px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 22px;
  width: 100%;
  overflow: auto;

  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export const EditContainer = styled.div`
  background: ${props => props.theme.main};
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px 14px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    background: none;
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  white-space: nowrap;
  @media (max-width: 1200px) {
    white-space: nowrap;
  }
`;

export const Image = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  height: 48px;
  width: 48px;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: lighter;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: light;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;

export const MarketDataContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 10px;
  box-shadow: 0px 7px 50px -22px black;
  display: flex;
  justify-content: space-between;
  padding: 22px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    border-radius: 10px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 100px rgba(44, 45, 51, 0.9);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #10e233;
    outline: 1px solid slategrey;
  }
  @media (max-width: 1200px) {
    background: ${props => props.theme.third};
    padding: 15px 10px;
    gap: 10px;
    overflow: auto;
  }
`;

export const Span = styled.span`
  font-weight: light;
  font-size: 18px;
  margin: 0 0 0 5px;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;
