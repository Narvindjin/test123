import React, { useEffect } from "react";
import { Fieldset, Form, Label } from "/src/components/styled";
import {
  StyledSection,
  StyledLegend,
  CheckboxLabelForProduct,
  StyledLi,
  StyledTextInput,
  Price,
  BuyFieldset
} from "./style";

import Button from "/src/components/ui/button/button";
import Checkbox from "/src/components/ui/checkbox/checkbox";

function Buy({ products, setActiveProduct }) {
  const [checkedArray, setChecked] = React.useState(
    new Array(products.length).fill(false)
  );

  const [price, setPrice] = React.useState(0);

  const [inputMessage, setInputMessage] = React.useState(null);

  const [buyButtonEnabled, changeBuyButton] = React.useState(false);

  useEffect(() => {
    changeBuyButton(price && inputMessage);
  }, [price, inputMessage]);

  const handleProductsOnChange = (position) => {
    const updatedCheckedArray = checkedArray.map((item, index) => {
      if (index === position) {
        if (!item) {
          setActiveProduct(position);
        }
        return !item;
      }
      return item;
    });
    setChecked(updatedCheckedArray);

    const totalPrice = updatedCheckedArray.reduce((sum, state, index) => {
      if (state === true) {
        return sum + Number(products[index].price);
      }
      return sum;
    }, 0);
    setPrice(totalPrice);
  };

  const handleInputOnChange = (event) => {
    setInputMessage(event.target.value);
  };

  const printOrder = () => {
    let orderArray = [];
    let itemIndex = 0;
    for (const item of checkedArray) {
      if (item === true) {
        orderArray.push(products[itemIndex].name);
      }
      itemIndex++;
    }
    return orderArray.join(", ");
  };

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
       Вы приобрели следующие продукты:
       ${printOrder()}
       Сумма заказа: ${price} руб.
      `
    );
  };

  return products?.length ? (
    <StyledSection>
      <Form>
        <Fieldset>
          <StyledLegend>Выберите продукты</StyledLegend>
          {products.map((product) => (
            <StyledLi key={product.id}>
              <Checkbox
                labelComponent={CheckboxLabelForProduct}
                value={product.id}
                name={product.name}
                text={product.name}
                isChecked={checkedArray[product.id]}
                onChange={() => {
                  handleProductsOnChange(product.id);
                }}
              />
            </StyledLi>
          ))}
        </Fieldset>
        <BuyFieldset>
          <StyledLegend>Сделать заказ</StyledLegend>
          <StyledTextInput
            placeholder="Введите адрес доставки"
            onChange={(event) => {
              handleInputOnChange(event);
            }}
          ></StyledTextInput>
          <Label $small $margin={8}>
            Цена
            <Price>{price} руб.</Price>
          </Label>
          <Button
            minWidth={314}
            onClick={handleBuy}
            disabled={!buyButtonEnabled}
          >
            Купить
          </Button>
        </BuyFieldset>
      </Form>
    </StyledSection>
  ) : null;
}

export default Buy;
