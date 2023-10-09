import React, { useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "@/sanity/lib/client";
const Categories = ({ products }) => {
  const categoriesArray = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  const liClass = "categories font-bold md:self-center cursor-pointer";

  const { categoryHandler, category } = useStateContext();

  // useEffect(() => {
  //   const categories = document.querySelectorAll(".categories");
  //   console.log(category);
  //   categoriesArray.forEach(
  //     (item, index) =>
  //       item === category && categories[index].classList.add("active")
  //   );
  // }, []);

  return (
    <div className=" my-16 md:text-lg p-2">
      {/* <ul className=" h-24 flex justify-around p-4">
        {categoriesArray.map((item, index) => (
          <li
            className={
              index % 2 === 0 ? `${liClass} self-start` : `${liClass} self-end`
            }
            key={index}
            onClick={() => categoryHandler(item, index)}
          >
            {item}
          </li>
        ))}
      </ul> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex"
      >
        {/* <SwiperSlide className="bg-blue">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        {categoriesArray.map((category, index) => (
          <SwiperSlide key={index}>
            {products.find((item) => item.category === category) && (
              <div className="min-h-[100px] bg-blue">
                {category}

                <img src={urlFor(products[index].image && products[index].image[0])} alt="" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
