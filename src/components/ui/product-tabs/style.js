import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const TabList = styled.div`
  display: inline-flex;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  width: fit-content;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  background-color: ${(props) =>
    props.active ? props.theme.colorCurrentTab : props.theme.colorGray};
`;

export const TabTitle = styled(Title)`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackText};
`;

export const Content = styled.div`
  font-size: 14px;
  min-height: 148px;
  display: flex;
  flex-direction: column;
`;
