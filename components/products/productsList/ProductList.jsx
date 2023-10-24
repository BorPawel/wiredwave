import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/sanity/lib/client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const ProductList = ({ products, category }) => {
  const swiperRef = useRef(null);
  const slideRef = useRef([]);
  const textRef = useRef([]);
  const gap = 0;
  const [activeIndex, setActiveIndex] = useState(0);

  const { showCart } = useStateContext();

  const filterProducts = products.filter(
    (product) => category === product.category && product
  );

  const handleNext = () => {
    slideRef.current.forEach((item) => item.classList.remove("active_square"));

    textRef.current[activeIndex]?.classList.add("active_text");

    if (activeIndex === filterProducts.length - 1) {
      setActiveIndex(0);

      slideRef.current[0].classList.toggle("active_square");
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % filterProducts.length);

      slideRef.current[activeIndex + 1]?.classList.toggle("active_square");
    }
  };

  const handlePrev = () => {
    slideRef.current.forEach((item) => item.classList.remove("active_square"));

    if (activeIndex === 0) {
      setActiveIndex(filterProducts.length - 1);

      slideRef.current[filterProducts.length - 1]?.classList.toggle(
        "active_square"
      );
    } else {
      setActiveIndex((prevIndex) => prevIndex - 1);

      slideRef.current[activeIndex - 1]?.classList.toggle("active_square");
    }
  };

  useEffect(() => {
    slideRef.current[0]?.classList.add("active_square");
  }, []);

  return (
    <div className="relative w-full mt-24 ">
      <div className="px-8 lg:px-28 items-end flex justify-between ">
        <p className="text-xl text-end ">{category}</p>
        <p className="text-xs">See all</p>
      </div>
      <div className="w-full overflow-hidden h-48 lg:h-72  relative grid lg:place-content-center pl-12 ">
        <span className="lg:hidden w-1/2 h-[1px] absolute bg-white top-[50%] left-[50%]"></span>
        <div
          className="flex gap-6  duration-500 w-[700px] lg:w-[1400px] swiper_wrapper "
          ref={swiperRef}
          style={{
            transform: `translateX(-${
              activeIndex * (100 / filterProducts.length) + activeIndex
            }%)`,
          }}
        >
          {filterProducts.map((product, index) => {
            return (
              <div
                style={{ flexBasis: `calc(33.33% - ${gap}px) ` }}
                ref={(el) => (slideRef.current[index] = el)}
                key={index}
                className="flex-center duration-500 "
              >
                <div className="w-12 h-12 lg:w-24 lg:h-24 square text-xs min-h-12 bg-dark">
                  {" "}
                  <img src={urlFor(product.image[0])} />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" absolute bottom-0 right-4 flex gap-4 text-2xl">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full w-8 h-8 bg-grey flex-center"
          >
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full w-8 h-8 bg-grey flex-center"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="absolute w-full h-24 bottom-[-40%] pl-8 lg:pl-28">
        {filterProducts.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              className={`absolute flex flex-col text-info${
                isActive ? " show" : ""
              }`}
              ref={(el) => (textRef.current[index] = el)}
            >
              <p className="text-lg">{item.name}</p>
              <p className="text-lg">$ {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
