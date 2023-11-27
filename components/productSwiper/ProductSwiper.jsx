import { urlFor } from "@/sanity/lib/client";

import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SpecTable } from "../product_details/spec_table/SpecTable";
import { Reviews } from "../product_details/reviews/Reviews";
import { Colors } from "../product_details/colors/Colors";
import LeftTooltip from "./leftTooltip/LeftTooltip";
import Swiper from "./swiper/Swiper";

const ProductSwiper = ({ products, category }) => {
  const filterProducts = products.filter(
    (product) => category === product.category && product
  );

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = (e) => {
    setIsTooltipVisible((prev) => !prev);
    console.log(e.target);
  };

  const [smallLeftIndex, setSmallLeftIndex] = useState(0);
  const [bigIndex, setBigIndex] = useState(1);
  const [smallRightIndex, setSmallRightIndex] = useState(2);

  const [lastIndex, setLastIndex] = useState(filterProducts.length);

  const swipeNext = () => {
    setSmallLeftIndex((prev) => (prev + 1 >= lastIndex ? 0 : prev + 1));
    setBigIndex((prev) => (prev + 1 >= lastIndex ? 0 : prev + 1));
    setSmallRightIndex((prev) => (prev + 1 >= lastIndex ? 0 : prev + 1));
  };
  const swipePrev = () => {
    setSmallLeftIndex((prev) => (prev === 0 ? lastIndex - 1 : prev - 1));
    setBigIndex((prev) => (prev === 0 ? lastIndex - 1 : prev - 1));
    setSmallRightIndex((prev) => (prev === 0 ? lastIndex - 1 : prev - 1));
  };

  return (
    <div className="bg-grey p-10 rounded-[30px] relative">
      {isTooltipVisible ? (
        <LeftTooltip filterProducts={filterProducts} bigIndex={bigIndex} />
      ) : null}
      <h3 className="w-full flex-center">{category}</h3>

      <Swiper
        filterProducts={filterProducts}
        smallLeftIndex={smallLeftIndex}
        bigIndex={bigIndex}
        smallRightIndex={smallRightIndex}
        toggleTooltip={toggleTooltip}
        category={category}
      />

      <div className="flex w-full justify-around mt-4">
        <div className="w-[200px] flex-center ">
          <button
            type="button"
            className="bg-grey w-16 h-16 flex-center rounded-full border-2 hover:border-0 group swiper-product-button duration-100"
            onClick={swipePrev}
          >
            <BiSolidLeftArrow className="text-3xl group-hover:text-4xl duration-200" />
          </button>
        </div>
        <div className="w-[350px] flex-center gap-2 flex-col">
          <p className="text-2xl">{filterProducts[bigIndex]?.name}</p>
          <p>$ {filterProducts[bigIndex]?.price.toFixed(2)}</p>
        </div>
        <div className="w-[200px] flex-center">
          <button
            type="button"
            className="bg-grey w-16 h-16 flex-center rounded-full border-2 hover:border-0 group swiper-product-button duration-100"
            onClick={swipeNext}
          >
            <BiSolidRightArrow className="text-3xl group-hover:text-4xl duration-200" />
          </button>
        </div>
      </div>
      {isTooltipVisible ? (
        <div className="absolute w-1/3 h-full bg-dark right-0 top-0  z-10">
          <SpecTable
            product={filterProducts[bigIndex]}
            className=""
            type="tooltip"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductSwiper;
