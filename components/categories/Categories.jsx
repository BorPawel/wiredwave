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

  return (
    <div className=" my-16 md:text-lg p-2">
      <Swiper
        spaceBetween={60}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
          },
          1265: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex"
      >
        {categoriesArray.map((category, index) => {
          let findProduct = products.find((item) => item.category === category);
          return (
            <SwiperSlide key={index}>
              {
                <div className="rounded-[20px] bg-grey flex flex-col relative z-0 overflow-hidden">
                  <div className="bg-blue w-1/2 h-full absolute left-[100%] translate-x-[-50%] -skew-x-[40deg] "></div>
                  <p className=" text-2xl lg:text-4xl font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 stroked">
                    {category}
                  </p>

                  <img
                    src={urlFor(findProduct.image && findProduct.image[0])}
                    alt=""
                    className="z-10"
                  />
                </div>
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Categories;
