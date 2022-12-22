import styled from "styled-components";

export const Text = styled.span`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.theme.colorWhite};
  width: fit-content;
`;
