import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import AdvantagesType from "/src/components/ui/advantages-type/advantages-type";

export const StyledSection = styled(Section)`
  flex-direction: column;
  min-height: 197px;
  background: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding: 20px;
  margin: 0px;
  width: 540px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const StyledType = styled(AdvantagesType)`
  font-size: 14px;
  line-height: 150%;
  padding: 2px 10px 2px 10px;
`;

export const StyledImage = styled.img`
  object-fit: contain;
`;

export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 0px;
`;

export const StyledTitle = styled(Title)`
  line-height: 150%;
  margin-top: 4px;
`;
