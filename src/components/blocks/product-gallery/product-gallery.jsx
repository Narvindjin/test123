import React from "react";
import Gallery from "/src/components/ui/gallery/gallery";
import { StyledSection } from "./style";

function ProductGallery({ products, activeProduct }) {
  return products?.length ? (
    <StyledSection>
      <Gallery products={products} activeProduct={activeProduct} />
    </StyledSection>
  ) : null;
}

export default ProductGallery;
