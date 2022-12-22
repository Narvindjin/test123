import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  text-align: center;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  line-height: 58px;
  min-height: 60px;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background: ${(props) => props.theme.colorButtonOrange};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background: ${(props) => props.theme.colorButtonOrangeHover};
  }

  &:active {
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
