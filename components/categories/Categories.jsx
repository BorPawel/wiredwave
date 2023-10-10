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
  useEffect(() => {
    const category_container = document.querySelectorAll(".category_container");
    const category_img = document.querySelectorAll(".category_container img");

    category_container.forEach(
      (item, index) => index > 0 && (item.style.height = "50px")
    );
    category_img.forEach(
      (item, index) => index > 0 && (item.style.visibility = "hidden")
    );
  }, []);

  const handleClick = (category, id) => {
    const category_container = document.querySelectorAll(".category_container");
    const category_img = document.querySelectorAll(".category_container img");

    category_container.forEach((item, index) =>
      index !== id ? (item.style.height = "50px") : (item.style.height = "100%")
    );
    category_img.forEach((item, index) =>
      index !== id
        ? (item.style.visibility = "hidden")
        : (item.style.visibility = "visible")
    );

    categoryHandler(category)
  };
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
          700: {
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
      >
        {categoriesArray.map((category, index) => {
          let findProduct = products.find((item) => item.category === category);
          return (
            <SwiperSlide key={index}>
              {
                
                  <div
                    className="min-h-[250px] flex justify-center items-center cursor-pointer"
                    onClick={() => handleClick(category, index)}
                  >
                    <div className="bg-grey  h-full w-full rounded-[20px] relative category_container overflow-hidden flex z-0">
                      <p className=" text-2xl lg:text-3xl font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  z-20 ">
                        {category}
                      </p>
                      <div className="bg-blue w-1/2 h-full absolute left-[100%] translate-x-[-50%] -skew-x-[40deg] -z-1"></div>

                      <img
                        src={urlFor(findProduct.image && findProduct.image[0])}
                        alt=""
                        className="z-10"
                      />
                    </div>
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
