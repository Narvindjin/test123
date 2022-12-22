import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  margin: 64px 0px 64px 0px;
  padding: 0px;
`;

export const StyledItem = styled(Li)``;
