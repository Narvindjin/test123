import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  justify-content: space-between;
  background: ${(props) => props.theme.colorWhite};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  flex-shrink: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
