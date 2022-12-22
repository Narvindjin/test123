import React from "react";
import {
  StyledArticle,
  StyledTitle,
  ProductImage,
  StyledWrapper
} from "./style";
import { TitleLevel } from "/src/components/ui/title/title";
import Description from "/src/components/ui/product-description/product-description";
import Tabs from "/src/components/ui/product-tabs/product-tabs";
import Features from "/src/components/ui/product-features/product-features";
import Properties from "/src/components/ui/product-properties/product-properties";

function ProductCard({
  title,
  src,
  about,
  price,
  weight,
  weightRange,
  expirationDate,
  breed,
  origin,
  energy,
  protein,
  fat,
  carbs
}) {
  const tabs = [
    {
      title: "Описание",
      content: <Description about={about} price={price} weight={weight} />
    },
    {
      title: "Характеристики",
      content: (
        <Features
          weight={weight}
          weightRange={weightRange}
          expirationDate={expirationDate}
          breed={breed}
          origin={origin}
        />
      )
    },
    {
      title: "Свойства",
      content: (
        <Properties energy={energy} protein={protein} fat={fat} carbs={carbs} />
      )
    }
  ];

  return (
    <StyledArticle>
      <ProductImage src={src} />
      <StyledWrapper>
        <StyledTitle level={TitleLevel.H2}>{title}</StyledTitle>
        <Tabs tabs={tabs} />
      </StyledWrapper>
    </StyledArticle>
  );
}

export default ProductCard;
