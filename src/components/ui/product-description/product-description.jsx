import React from "react";
import { TextComponent, Price } from "./style";

function Description({ about, price, weight }) {
  return (
    <>
      <TextComponent>{about}</TextComponent>
      <Price>
        {price} руб. / {weight} гр.{" "}
      </Price>
    </>
  );
}

export default Description;
