import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledSection,
  ItemWrapper,
  TitleWrapper,
  StyledType,
  StyledImage,
  Text,
  StyledTitle
} from "./style";

function AdvantageItem({ name, about, isNegative, image }) {
  return (
    <StyledSection isNegative={isNegative} as="article">
      <ItemWrapper>
        <StyledImage
          src={image}
          width="56px"
          height="56px"
          className=""
          alt={name}
        />
        <TitleWrapper>
          <StyledType className="" isNegative={isNegative} />
          <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
            {name}
          </StyledTitle>
        </TitleWrapper>
      </ItemWrapper>
      <Text dangerouslySetInnerHTML={{ __html: about }}></Text>
    </StyledSection>
  );
}

export default AdvantageItem;
