import React from "react";
import { TextLine } from "./style";

function Properties({ energy, protein, fat, carbs }) {
  return (
    <>
      <TextLine>
        <b>Энергетическая ценность: </b>
        {energy}
      </TextLine>
      <TextLine>
        <b>Пищевая ценность: </b>
        белки - {protein} г., жиры - {fat} г., углеводы - {carbs} г.; на 100 г.
      </TextLine>
    </>
  );
}

export default Properties;
