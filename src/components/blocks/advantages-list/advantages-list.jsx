import React from "react";
import Button from "/src/components/ui/button/button";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import AdvantagesItem from "/src/components/ui/advantages-item/advantages-item";
import { StyledSection, StyledList, StyledItem } from "./style";

function advantagesList({ advantages }) {
  return (
    <StyledSection>
      {advantages?.length ? (
        <>
          <Title level={TitleLevel.H2}>Почему фермерские продукты лучше?</Title>
          <StyledList>
            {advantages.map((advantage) => (
              <StyledItem key={advantage.id}>
                <AdvantagesItem {...advantage} />
              </StyledItem>
            ))}
          </StyledList>
          <Button minWidth={260} link="/buy">
            Купить
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default advantagesList;
