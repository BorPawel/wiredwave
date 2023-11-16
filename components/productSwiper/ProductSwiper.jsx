import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";

const ProductSwiper = ({ products, category }) => {
  const filterProducts = products.filter(
    (product) => category === product.category && product
  );

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible((prev) => !prev);
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
    <div className="bg-grey p-10 rounded-[30px]">
      <h3 className="w-full flex-center">{category}</h3>

      <div className="w-full flex justify-around items-center h-[400px] ">
        <div className="h-[200px] w-[200px] relative z-0">
          {" "}
          <img src={urlFor(filterProducts[smallLeftIndex]?.image[0])} />
          <span className="absolute w-full h-[50px] bg-grey -bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%] shadow-inner-and-outer"></span>
        </div>
        <div className=" h-[350px] w-[350px] p-4 relative z-0 ">
          <Link
            href={`/product/${category.toLowerCase()}/${
              filterProducts[bigIndex].slug.current
            }`}
          >
            <img
              src={urlFor(filterProducts[bigIndex]?.image[0])}
              className="z-2"
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
            />
          </Link>

          <span className="absolute w-full h-[100px] bg-grey bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]  shadow-inner-and-outer"></span>
        </div>

        <div className=" h-[200px] w-[200px] relative z-0">
          {" "}
          <img src={urlFor(filterProducts[smallRightIndex]?.image[0])} />
          <span className="absolute w-full h-[50px] bg-grey -bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]  shadow-inner-and-outer"></span>
        </div>
      </div>
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
    </div>
  );
};

export default ProductSwiper;