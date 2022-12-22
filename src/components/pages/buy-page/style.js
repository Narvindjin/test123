import styled from "styled-components";

export const BuyPageWrapper = styled.div`
  width: ${(props) => props.theme.pageWidth};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorGray};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-height: 768px;
  max-height: calc(100vh - 160px);
`;
