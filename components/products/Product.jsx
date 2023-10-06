import Link from "next/link";
import React from "react";

import { urlFor } from "@/sanity/lib/client";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
const Product = ({ product: { name, image, slug, price, stars } }) => {

  return (
    <div className="w-[320px] lg:w-[350px] h-[450px] rounded-[30px] flex flex-col justify-between relative  bg-grey z-0">
      <Link href={`/product/${slug.current}`} >
        <img
          src={urlFor(image && image[0])}
          alt=""
          className="w-full absolute"
        />
      </Link>
      <div class="custom-shape-divider-top-1696561410">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex justify-between items-end p-6 min-h-[100px]">
        <div>
          <p className="font-thin text-lg">{name}</p>
          <span className="font-bold text-2xl">${price.toFixed(2)}</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <AiFillStar className="text-4xl md:text-5xl text-blue"/>
          <span className="text-xl md:text-2xl">{stars}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
