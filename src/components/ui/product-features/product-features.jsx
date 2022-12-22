import React from "react";
import { TextLine } from "./style";

function Features({ weight, weightRange, expirationDate, breed, origin }) {
  const weightInKg = weight / 1000;
  return (
    <>
      <TextLine>
        <b>Масса: </b>
        {weightInKg} кг. ({weightRange} г.)
      </TextLine>
      <TextLine>
        <b>Срок годности: </b>
        {expirationDate} суток
      </TextLine>
      <TextLine>
        <b>Порода: </b>
        {breed}
      </TextLine>
      <TextLine>
        <b>Место происхождения: </b>
        {origin}
      </TextLine>
    </>
  );
}

export default Features;
