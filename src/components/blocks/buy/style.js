import styled, { css } from "styled-components";
import { Section, Li, Fieldset } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 22px;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 20px;
  width: 353px;
`;

export const StyledLegend = styled.legend`
  float: left;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlackText};
  margin-bottom: 27px;
`;

export const StyledLi = styled(Li)`
  margin-bottom: 29px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CheckboxLabelForProduct = styled.span`
  position: relative;
  display: flex;
  min-width: 310px;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => props.theme.colorBlackText};
  &::before {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    right: 0px;
    height: 24px;
    width: 24px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${props.theme.colorButtonOrange};
          `
        : css`
            background-color: ${props.theme.colorGray};
          `}
  }
  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 4px;
      height: 12px;
      width: 16px;
      top: 7px;
      z-index: 3;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.77.36a.8.8 0 0 0-1.14 0L5.05 9.94 1.37 6.26A.8.8 0 0 0 .23 7.39l4.25 4.25a.8.8 0 0 0 1.14 0L15.77 1.5a.8.8 0 0 0 0-1.13Z' fill='%23fff'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }
  `}
`;

export const StyledTextInput = styled.input`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 48px;
  font-size: 14px;
  margin-top: -3px;
  margin-bottom: 20px;
  padding-left: 11px;
  padding-right: 11px;
  &::placeholder {
    color: ${(props) => props.theme.colorBlackText};
    font-size: 14px;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
    background-color: ${(props) => props.theme.colorWhite};
  }
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
`;

export const BuyFieldset = styled(Fieldset)`
  padding-bottom: 20px;
`;
