import React from "react";
import { Text } from "./style";

function AdvantagesType({ className = "", isNegative }) {
  return isNegative ? (
    <Text className={className} $bgColor={"#F75531"}>
      Магазинные продукты
    </Text>
  ) : (
    <Text className={className} $bgColor={"#88AA4D"}>
      Фермерские продукты
    </Text>
  );
}

export default AdvantagesType;
