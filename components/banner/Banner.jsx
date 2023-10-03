import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Banner = ({ banner }) => {
  return (
    <div className="w-full bg-grey min-h-[500px] md:min-h-[600px] rounded-3xl flex flex-col lg:flex-row">
      <div className="lg:w-1/2 order-2 lg:order-1 p-4 px-8 md:p-16 flex flex-col justify-between lg:justify-around items-center lg:items-start gap-8">
        <div className="">
          <h5 className="w-full">{banner.smallText}</h5>
          <h1>{banner.bigText}</h1>
          <div className="w-full md:w-4/5">
            <h5>Description</h5>
            <p className="text-sm text-left font-thin">{banner.desc}</p>
          </div>
        </div>

        <button
          type="button"
          className="hidden md:block w-64 rounded-2xl bg-blue text-2xl p-4"
        >
          {banner.buttonText}
        </button>
        <button
          type="button"
          className="md:hidden rounded-full bg-blue w-16 h-16 flex justify-center items-center"
        >
          <AiOutlineShoppingCart className="text-3xl" />
        </button>
      </div>
      <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
        <img src={urlFor(banner.image[0]).width(700)} alt="" />
      </div>
    </div>
  );
};

export default Banner;
