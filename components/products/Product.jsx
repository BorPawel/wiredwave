import Link from "next/link";
import React from "react";

import { urlFor } from "@/sanity/lib/client";
import { AiFillStar, AiFillFire, AiOutlinePlus } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { useStateContext } from "@/context/StateContext";
const Product = ({
  product: { name, image, slug, price, stars, category, hot },
}) => {
  // max-w-[320px] h-[200px] lg:w-[350px] md:h-[450px] rounded-[30px] flex flex-col justify-between relative  bg-grey z-0 hover:scale-110 duration-200
  return (
    <div className="relative bg-grey flex items-center justify-between md:flex-col  w-[320px] md:w-[350px] md:h-[370px] rounded-[20px] ">
      {hot ? (
        <BsFire className="absolute right-0 top-0 text-3xl text-red-600 md:right-4 md:top-4" />
      ) : null}
      <Link
        href={`/product/${category.toLowerCase()}/${slug.current}`}
        className="flex-center  md:rounded-b-[40px]  p-2 md:p-4  rounded-[20px] "
      >
        <img src={urlFor(image && image[0])} alt="" className="w-28 md:w-3/4" />
      </Link>

      <div className="flex flex-col p-4 min-h-[100px] md:flex-row md:items-end md:justify-evenly ">
        <div className="">
          <p className="font-thin text-base md:text-lg">{name}</p>
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
        </div>

        <div className="flex gap-2">
          <AiFillStar className="text-2xl md:text-3xl text-blue" />
          <span className="text-base md:text-xl">{stars}</span>
        </div>
      </div>

      <div
        className="absolute w-10 h-10 bg-blue 
      right-0 bottom-0 rounded-ee-[20px] 
      flex-center hover:w-full hover:h-1/2 duration-300 cursor-pointer hover:rounded-es-[20px] group"
      >
        <AiOutlinePlus className="group-hover:text-3xl" />

        {/* <p className="hidden group-hover:block opacity-0 group-hover:opacity-100 delay-600">Add to Cart</p> */}
      </div>
    </div>
  );
};

export default Product;
