import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: 0px;
  flex-grow: 1;
`;
