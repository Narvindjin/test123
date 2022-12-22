import React from "react";
import Buy from "/src/components/blocks/buy/buy";
import ProductGallery from "/src/components/blocks/product-gallery/product-gallery";
import { BuyPageWrapper } from "./style";

function BuyPage({ products }) {
  const [activeProduct, setActiveProduct] = React.useState(0);
  return (
    <BuyPageWrapper>
      <Buy products={products} setActiveProduct={setActiveProduct} />
      <ProductGallery products={products} activeProduct={activeProduct} />
    </BuyPageWrapper>
  );
}

export default BuyPage;
