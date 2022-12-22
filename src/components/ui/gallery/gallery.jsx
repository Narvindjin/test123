import React, { useEffect, useRef } from "react";
import { StyledSwiper, StyledSwiperSlide } from "./style";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper";
import ProductCard from "/src/components/ui/product-card/product-card";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Gallery({ products = [], activeProduct }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(activeProduct);
  }, [activeProduct]);
  return (
    <StyledSwiper
      spaceBetween={12}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
      pagination={{
        type: "fanction"
      }}
      ref={swiperRef}
    >
      {products.map((product) => (
        <StyledSwiperSlide key={product.id}>
          <ProductCard
            title={product.name}
            src={product.src}
            about={product.about}
            price={product.price}
            weight={product.weight}
            weightRange={product.weightRange}
            expirationDate={product.expirationDate}
            breed={product.breed}
            origin={product.origin}
            energy={product.energy}
            protein={product.protein}
            fat={product.fat}
            carbs={product.carbs}
          />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default Gallery;
